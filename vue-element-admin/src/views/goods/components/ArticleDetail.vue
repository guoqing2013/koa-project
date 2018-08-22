<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">

      <sticky :className="'sub-navbar '+postForm.status">
        <CommentDropdown v-model="postForm.comment_disabled" />
        <PlatformDropdown v-model="postForm.platforms" />
        <SourceUrlDropdown v-model="postForm.source_uri" />
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">发布
        </el-button>
        <el-button v-loading="loading" type="warning" @click="draftForm">草稿</el-button>
      </sticky>

      <div class="createPost-main-container">
        <!-- 基本信息 -->
        <div>
          <h3 class="guide">基本信息</h3>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="title" label-width="80px" label="商品名：">
                <el-input name="title" v-model="postForm.title" required :maxlength="100"></el-input>
              </el-form-item>
            </el-col>
          </el-row>



          <el-row>
            <el-col :span="12">
              <el-form-item label-width="80px" label="商品图：">
                <UploadMultiImage color="#1890ff" @successCBK="imageSuccessCBK" ></UploadMultiImage>
              </el-form-item>
              <div class="help-block">建议尺寸：800*800像素，你可以拖拽图片调整顺序，最多上传15张</div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="sell_point" label-width="80px" label="商品卖点：">
                <el-input name="sell_point" v-model="postForm.sell_point"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

        </div>

        <!-- 价格库存 -->
        <div>
          <h3 class="guide">价格库存</h3>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="price" label-width="80px" label="价格：">
                <el-input v-model="postForm.price">
                  <template slot="prepend">¥</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item prop="origin_price" label-width="80px" label="划线价：">
                <el-input v-model="postForm.origin_price">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

           <el-row>
            <el-col :span="12">
              <el-form-item prop="quantity" label-width="80px" label="库存：">
                <el-input v-model="postForm.quantity">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>


        <el-row>

          <Warning />

          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <md-input name="name" v-model="postForm.title2" required :maxlength="100">
                标题
              </md-input>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="45px" label="作者:" class="postInfo-container-item">
                    <el-select v-model="postForm.author" filterable remote placeholder="搜索用户" :remote-method="getRemoteUserList">
                      <el-option v-for="(item,index) in userListOptions" :key="item+index" :label="item" :value="item">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="10">
                  <el-form-item label-width="80px" label="发布时间:" class="postInfo-container-item">
                    <el-date-picker v-model="postForm.display_time" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间">
                    </el-date-picker>
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="60px" label="重要性:" class="postInfo-container-item">
                    <el-rate style="margin-top:8px;" v-model="postForm.importance" :max='3' :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :low-threshold="1"
                      :high-threshold="3">
                    </el-rate>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item style="margin-bottom: 40px;" label-width="45px" label="摘要:">
          <el-input type="textarea" class="article-textarea" :rows="1" autosize placeholder="请输入内容" v-model="postForm.content_short">
          </el-input>
          <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
        </el-form-item>

        <div class="editor-container">
          <Tinymce :height=400 ref="editor" v-model="postForm.content" />
        </div>

        <div style="margin-bottom: 20px;">
          <Upload v-model="postForm.image_uri" />
        </div>
      </div>
    </el-form>

  </div>
</template>

<script>
  import Tinymce from '@/components/Tinymce'
  import Upload from '@/components/Upload/singleImage3'
  import MdInput from '@/components/MDinput'
  import Multiselect from 'vue-multiselect' // 使用的一个多选框组件，element-ui的select不能满足所有需求
  import 'vue-multiselect/dist/vue-multiselect.min.css' // 多选框组件css
  import Sticky from '@/components/Sticky' // 粘性header组件
  import UploadMultiImage from '@/components/UploadMultiImage' 
  import {
    validateURL
  } from '@/utils/validate'
  import {
    fetchArticle
  } from '@/api/article'
  import {
    createGoods
  } from '@/api/goods/item'
  import {
    userSearch
  } from '@/api/remoteSearch'
  import Warning from './Warning'
  import {
    CommentDropdown,
    PlatformDropdown,
    SourceUrlDropdown
  } from './Dropdown'

  const defaultForm = {
    status: 'draft',
    title: '',
    price: '', //价格
    origin_price: '',
    image_ids: '',
    sell_point: '', //商品卖点
    quantity: '', // 库存
    hide_stock: 0, // 是否隐藏商品库存。在商品展示时不显示商品的库存，默认0 显示库存，设置为1 不显示库存

    content: '', // 文章内容
    content_short: '', // 文章摘要
    source_uri: '', // 文章外链
    image_uri: '', // 文章图片
    display_time: undefined, // 前台展示时间
    id: undefined,
    platforms: ['a-platform'],
    comment_disabled: false,
    importance: 0
  }

  export default {
    name: 'articleDetail',
    components: {
      Tinymce,
      MdInput,
      Upload,
      Multiselect,
      Sticky,
      Warning,
      CommentDropdown,
      PlatformDropdown,
      SourceUrlDropdown,
      UploadMultiImage
    },
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      const validateRequire = (rule, value, callback) => {
        if (value === '') {
          this.$message({
            message: rule.field + '为必传项',
            type: 'error'
          })
          callback(null)
        } else {
          callback()
        }
      }
      const validateSourceUri = (rule, value, callback) => {
        if (value) {
          if (validateURL(value)) {
            callback()
          } else {
            this.$message({
              message: '外链url填写不正确',
              type: 'error'
            })
            callback(null)
          }
        } else {
          callback()
        }
      }
      return {
        postForm: Object.assign({}, defaultForm),
        loading: false,
        userListOptions: [],
        rules: {
          // image_uri: [{ validator: validateRequire }],
          title: [{
            required: true,
            message: '商品名称必须填写，最多100个字'
          }],
          price: [{
            required: true,
            message: '请输入价格'
          }],
          quantity: [{
            required: true,
            message: '请输入库存'
          }],
          // content: [{ validator: validateRequire }],
          // source_uri: [{ validator: validateSourceUri, trigger: 'blur' }]
        }
      }
    },
    computed: {
      contentShortLength() {
        return this.postForm.content_short.length
      }
    },
    created() {
      if (this.isEdit) {
        const id = this.$route.params && this.$route.params.id
        this.fetchData(id)
      } else {
        this.postForm = Object.assign({}, defaultForm)
      }
    },
    methods: {
      fetchData(id) {
        fetchArticle(id).then(response => {
          this.postForm = response.data
          // Just for test
          this.postForm.title += `   Article Id:${this.postForm.id}`
          this.postForm.content_short += `   Article Id:${this.postForm.id}`
        }).catch(err => {
          console.log(err)
        })
      },
      imageSuccessCBK(arr) {
        console.log(arr);
        // const _this = this
        // arr.forEach(v => {
        //   window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`)
        // })
      },
      /**
       * 发布商品
       */
      submitForm() {
        this.postForm.display_time = parseInt(this.display_time / 1000)
        console.log(this.postForm)
        this.$refs.postForm.validate(valid => {
          if (valid) {
            this.loading = true
            createGoods(this.postForm).then(response => {
              debugger;
              this.$notify({
                title: '成功',
                message: '商品发布成功',
                type: 'success',
                duration: 2000
              })
              this.postForm.status = 'published'
              this.loading = false
            }).catch(err => {
              console.log(err)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      draftForm() {
        if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
          this.$message({
            message: '请填写必要的标题和内容',
            type: 'warning'
          })
          return
        }
        this.$message({
          message: '保存成功',
          type: 'success',
          showClose: true,
          duration: 1000
        })
        this.postForm.status = 'draft'
      },
      getRemoteUserList(query) {
        userSearch(query).then(response => {
          if (!response.data.items) return
          this.userListOptions = response.data.items.map(v => v.name)
        })
      }
    }
  }

</script>

<style>

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";



  .createPost-container {
    position: relative;


    .guide {
      background-color: #f8f8f8;
      font-size: 14px;
      font-weight: 700;
      padding: 0 0 0 10px;
      height: 38px;
      line-height: 38px;
    }

    .help-block {
      line-height: 14px;
      font-size: 12px;
      margin-top: 6px;
      margin-bottom: 0;
      color: #999;
      margin-left: 80px;
    }


    .createPost-main-container {
      padding: 40px 45px 20px 50px;
      .postInfo-container {
        position: relative;
        @include clearfix;
        margin-bottom: 10px;
        .postInfo-container-item {
          float: left;
        }
      }
      .editor-container {
        min-height: 500px;
        margin: 0 0 30px;
        .editor-upload-btn-container {
          text-align: right;
          margin-right: 10px;
          .editor-upload-btn {
            display: inline-block;
          }
        }
      }
    }
    .word-counter {
      width: 40px;
      position: absolute;
      right: -10px;
      top: 0px;
    }
  }

</style>

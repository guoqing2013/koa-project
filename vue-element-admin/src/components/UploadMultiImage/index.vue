<template>
  <div class="uploadMultiImage-container">
    <el-button icon='el-icon-upload' size="mini" :style="{background:color,borderColor:color}" @click=" dialogVisible=true" type="primary">上传图片
    </el-button>
    <el-dialog :visible.sync="dialogVisible">
    <!--
      <el-upload 
      class="editor-slide-upload"
  action="https://jsonplaceholder.typicode.com/posts/"
        :multiple="true"
         :file-list="fileList"
          :show-file-list="true"
        list-type="picture-card" :on-remove="handleRemove" :on-success="handleSuccess" :before-upload="beforeUpload">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>


        action="https://jsonplaceholder.typicode.com/posts/"
        action="https://httpbin.org/post"
      -->

      <el-upload
  class="upload-demo"
  ref="upload"
  action="http://localhost:5000/upload"
  :multiple="true"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="handleSuccess"
  :before-upload="beforeUpload"
  :file-list="fileList"
  :show-file-list="true"
   list-type="picture-card"
  :auto-upload="true">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>


</el-upload>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
// import { getToken } from 'api/qiniu'

export default {
  name: 'editorSlideUpload',
  props: {
    color: {
      type: String,
      default: '#1890ff'
    }
  },
  data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: []
    }
  },
  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj).every(item => this.listObj[item].hasSuccess)
    },
     submitUpload() {
        this.$refs.upload.submit();
      },
       handlePreview(file) {
        console.log(file);
      },
    handleSubmit() {
      const arr = Object.keys(this.listObj).map(v => this.listObj[v])
      if (!this.checkAllSuccess()) {
        this.$message('请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！')
        return
      }
      console.log(arr)
      this.$emit('successCBK', arr)
      this.listObj = {}
      this.fileList = []
      this.dialogVisible = false
    },
    handleSuccess(response, file) {
      console.log('handleSuccess', response, file)
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.files.file
          this.listObj[objKeyArr[i]].hasSuccess = true
          return
        }
      }
    },
    handleRemove(file) {
      const uid = file.uid
      const objKeyArr = Object.keys(this.listObj)
      for (let i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]]
          return
        }
      }
    },
    beforeUpload(file) {
      const _self = this
      const _URL = window.URL || window.webkitURL
      const fileName = file.uid
      this.listObj[fileName] = {}
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = _URL.createObjectURL(file)
        img.onload = function() {
          _self.listObj[fileName] = { hasSuccess: false, uid: file.uid, width: this.width, height: this.height }
        }
        resolve(true)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.uploadMultiImage-container {
  .el-upload-list--picture-card .el-upload-list__item {
    width: 80px;
    height: 80px;
  }
}
.editor-slide-upload {
  margin-bottom: 20px;
  /deep/ .el-upload--picture-card {
    width: 100%;
  }
}
</style>

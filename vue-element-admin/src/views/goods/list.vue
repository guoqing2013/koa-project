<template>
  <div class="app-container">

    <el-table
      v-loading.body="listLoading"
      :data="list"
      :default-sort = "{prop: 'date', order: 'descending'}"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @sort-change="handleSortChange"
    >
      <el-table-column
        type="selection"
        width="55"/>

      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.item_id }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="createdAt" sortable="quantity" align="center" label="库存" width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.quantity }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="quantity" sortable="custom" align="center" label="总销量" width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.quantity }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="createdAt" sortable="custom" align="center" label="创建时间" width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.createdAt }}</span>
        </template>
      </el-table-column>
      <!--
      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Author">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Title">
        <template slot-scope="scope">

          <router-link class="link-type" :to="'/example/edit/'+scope.row.id">
            <span>{{ scope.row.title }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">Edit</el-button>
          </router-link>
        </template>
      </el-table-column>
      -->

    </el-table>

    <div class="pagination-container">
      <el-pagination
        :current-page="listQuery.page_no"
        :page-sizes="[10,20,30, 50]"
        :page-size="listQuery.page_size"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>

  </div>
</template>

<script>
import { fetchList } from '@/api/goods/item'
// import { fetchList } from '@/api/article'

export default {
  name: 'ArticleList',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page_no: 1,
        page_size: 10,
        q: 'abc'
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        const data = response.data
        if (data.response) {
          this.list = data.response.items
          this.total = data.response.count
        }
        this.listLoading = false
      }).then(() => {
        console.log('fetch goods item list failed !')
      })
    },
    handleSizeChange(val) {
      this.listQuery.page_size = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page_no = val
      this.getList()
    },
    handleSortChange({ column, prop, order }) {
      console.log({ column, prop, order })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>

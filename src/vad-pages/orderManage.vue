<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" icon="el-icon-edit" @click="add">添加</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <!-- 内容 -->
          <el-table-column label="订单号" align="center" >
      <template slot-scope="scope">
        {{scope.row.flow}}
      </template>
    </el-table-column>
    
    <el-table-column label="价格" align="center" >
      <template slot-scope="scope">
        {{scope.row.price}}
      </template>
    </el-table-column>
    
    <el-table-column label="地址" align="center" >
      <template slot-scope="scope">
        {{scope.row.address}}
      </template>
    </el-table-column>
    
      <!-- 操作 -->
      <el-table-column class-name="status-col" label="操作" align="center" width="220">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" @click="edit(scope.row)" size="mini">修改</el-button>
            <el-button type="danger" @click="deleteRow(scope.row)" size="mini">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <!-- 翻页 -->
    <div class="pagination-container" v-if="query.total">
      <el-pagination
        :current-page="query.pageNum"
        :page-sizes="[5,10,20,30,50]"
        :page-size="query.pageSize"
        :total="query.total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog :visible.sync="addDialogVisible" :title="dialogTitle">
      <el-form
        :model="row"
        :rules="source.rules"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
            <el-form-item label="订单号" prop="flow">
          <el-input v-model="row.flow" placeHolder="请输入订单号"/>
      
    </el-form-item>
    
    <el-form-item label="价格" prop="price">
          <el-input v-model="row.price" placeHolder="请输入价格"/>
      
    </el-form-item>
    
    <el-form-item label="地址" prop="address">
          <el-input v-model="row.address" placeHolder="请输入地址"/>
      
    </el-form-item>
    
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submit">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import AdminTableMixin from "./basic/mixin.js";
import AdminObject from "../vad-api/order.js";

export default {
  filters: {},
  mixins: [
    // 混入表格Mixin
    AdminTableMixin
  ],
  data() {
    return {
      // 本页查看的对象名称
      objStr: "order",
      // 数据源
      source: new AdminObject()
      // rules: this.source.rules,
    };
  },
  methods: {}
};
</script>
<style>
</style>

<template>
    <div class="user_container">
        <el-card>
            <el-table :data="userDataList.userDataList" border>
                <el-table-column prop="id" label="编号" align="center" />
                <el-table-column prop="username" label="人员名称" align="center" />
                <el-table-column prop="role" label="人员权限" align="center" />
                <el-table-column prop="lastLoginDate" label="最后一次登录时间" align="center" />
                <el-table-column prop="enableStr" label="是否可用" align="center" />
                <el-table-column label="操作" align="center">
                    <template #="{ row }">
                        <el-button :disabled="row.enable === 1" type="primary" @click="enableUser(row.id, currentPage, pageSize)">启用</el-button>
                        <el-button :disabled="row.enable === 0" type="primary" @click="disableUser(row.id, currentPage, pageSize)">禁用</el-button>
                        <el-button type="success" @click="showDialog(row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog v-model="dialogTableVisible" title="编辑用户信息">
                <el-form>
                    <el-form-item label="用户账户">
                        <el-input :model-value="dialogData.row.account" disabled autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="用户名称">
                        <el-input :model-value="dialogData.row.username" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="最后一次登陆时间">
                        <el-input :model-value="dialogData.row.lastLoginDate" disabled autocomplete="off" />
                    </el-form-item>
                </el-form>
            </el-dialog>
            <!-- 分页器 -->
            <div class="demo-pagination-block">
                <el-pagination :current-page="currentPage" :page-size="pageSize" :page-sizes="[2, 3, 10, 20, 50, 100]"
                    layout="prev, pager, next, jumper, ->, sizes, total" :page-count="totalPage" :total="total"
                    @update:current-page="changeCurrentPage" @update:page-size="changePageSize" />
            </div>
        </el-card>
    </div>
</template>
<script setup>
import { onMounted, ref, reactive } from 'vue'
import { reqgetUserList, reqDisableUser, reqEnableUser } from '@/api/user/index.js'
import { ElNotification } from 'element-plus';

let userDataList = reactive({ userDataList: [] });
//当前页，默认第一页
let currentPage = ref(1)
let totalPage = ref(1)
//每页的数据量，默认2
let pageSize = ref(10)
//总数据量
let total = ref(0)

let dialogData = reactive({
    row:{
        id:0,
        account:'',
        username:'',
        lastLoginDate:'',
    }
})
let dialogTableVisible = ref(false)

//组件加载完成时调用数据接口
onMounted(() => {
    getUserList(currentPage.value, pageSize.value);
})

//请求获取用户列表信息
const getUserList = async (v1, v2) => {
    let result = await reqgetUserList(v1, v2);
    if (result.code === 200) {
        userDataList.userDataList = result.data.records;
        total.value = result.data.totalCount;
        pageSize.value = result.data.pageSize;
        currentPage.value = result.data.pageIndex;
        totalPage.value = result.data.totalPage;
    }
}

//请求启用用户
const enableUser = async (id, currentPage, pageSize) => {
    let res = await reqEnableUser(id)
    if(res.code === 200){
        ElNotification({
            type: 'success',
            message: '启用成功'
        });
        getUserList(currentPage, pageSize);
    }
}

//请求禁用用户
const disableUser = async (id, currentPage, pageSize) => {
    let res = await reqDisableUser(id)
    if(res.code === 200){
        ElNotification({
            type: 'success',
            message: '禁用成功'
        });
        getUserList(currentPage, pageSize);
    }
}

//监听当前页变动事件
function changeCurrentPage(a) {
    getUserList(a, pageSize.value)
}

//监听每页数据量变动事件
function changePageSize(a) {
    getUserList(currentPage.value, a)
}

function showDialog(row){
    dialogData.id = row.id;
    dialogData.row.account = row.account;
    dialogData.row.username = row.username;
    dialogData.row.lastLoginDate = row.lastLoginDate;

    dialogTableVisible.value = true

}

</script>
<style scoped lang='scss'>
.user_container {
    height: 100vh;
    width: 100%;
}
</style>
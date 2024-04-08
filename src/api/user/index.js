import request from '@/utils/request';

// 请求用户登录接口地址
const USER_LOGIN_URL = "/user/login"
// 请求用户登录接口地址
const GET_USER_INFO_URL = "/user/info"
// 请求获取用户列表
const GET_USER_LIST_URL = "/user/list"
// 请求禁用某个用户
const DISABLE_USER_URL = "/user/disable"
// 请求启用某个用户
const NABLE_USER_URL = "/user/enable"

export const reqUserLogin = (data) => request.post(USER_LOGIN_URL, data);

export const reqgetUserInfo = () => request.get(GET_USER_INFO_URL);

export const reqgetUserList = (currentPage, pageSize) => request.get(`${GET_USER_LIST_URL}/${currentPage}/${pageSize}`);

export const reqDisableUser = (id, data) => request.post(`${DISABLE_USER_URL}/${id}`, data);

export const reqEnableUser = (id, data) => request.post(`${NABLE_USER_URL}/${id}`, data);

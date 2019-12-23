import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

// axios.defaults.withCredentials = true

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // request timeout
  withCredentials: false,
});

// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// service.defaults.baseURL = 'https://serve.jerryliao.cn'
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.transformRequest = data => Qs.stringify(data)
service.defaults.withCredentials = false;

// request interceptor
service.interceptors.request.use(
  config => {
    console.log("before request is send", config);
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  // response => {
  //   console.log('response', response)
  //   return response
  // },
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data;
    console.log("response", response);
    if (!response.data.status) {
      // Message({
      //   message: '操作失败',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return response;
    } else {
      return response;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;

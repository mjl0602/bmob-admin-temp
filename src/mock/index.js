import Mock from 'mockjs'

import project from './project'
import user from './user'

// var baseURL = 'https://serve.jerryliao.cn'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

// Mock.setup({
//   timeout: '350-600'
// })

Mock.mock(/\/fuck/, 'get', () => {
  return 'you got fuck mock data'
})
// Mock.mock(/.*?\/project$/, 'get', project.all())

// Mock.mock(/\/project\//, 'get', project.projectDetail())

// Mock.mock(/\/adminLogin/, 'post', user.loginByUsername)

// Mock.mock(/\/adminInfo/, 'get', user.getUserInfo)
// 
export default Mock

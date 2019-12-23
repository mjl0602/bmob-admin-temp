import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    // 权限
    roles: ['admin'],
    // 凭证
    token: 'adminwsdegfareewrtygeqragferhgetah',
    // 描述
    introduction: '我是超级管理员',
    //头像
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    // 名字
    name: 'Super Admin'
  },
  // editor: {
  //   roles: ['editor'],
  //   token: 'editor',
  //   introduction: '我是编辑',
  //   avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  //   name: 'Normal Editor'
  // }
}

let fakeUser = new Promise((resolve, reject) => {
  resolve({ data: userMap.admin });
})

export default {
  loginByUsername: async (config) => {
    console.log('login user name')
    //   const { username } = JSON.parse(config.body)
    const { username } = 'JSON.parse(config.body)'

    return fakeUser;

    return { data: userMap.admin }
  },
  getUserInfo: config => {
    console.log('getUserInfo', config)
    const { token } = param2Obj(config.url)

    return fakeUser;


    if (userMap.admin) {
      return { data: userMap.admin }
    } else {
      return false
    }
  },
  logout: () => 'success'
}

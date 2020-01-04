import request from "@/utils/request";
// import request from './api'

const userMap = {
  admin: {
    // 权限
    roles: ["admin"],
    // 凭证
    token: "admin",
    // 描述
    introduction: "我是超级管理员",
    //头像
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    // 名字
    name: "Super Admin"
  },
  editor: {
    roles: ["editor"],
    token: "editor",
    introduction: "我是编辑",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Normal Editor"
  }
};

let fakeUser = new Promise((resolve, reject) => {
  resolve({ data: { data: userMap.admin } });
});

let userInfo = {
  roles: ["editor"],
  token: "editor",
  introduction: "我是编辑",
  avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
  name: "Normal Editor"
};

export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  });
}

export async function loginByUsername(username, password) {
  console.log("loginByUsername adminLogin", {
    email: username,
    password: password
  });

  let query = Bmob.Query("admin");
  query.equalTo("account", "==", username);
  query.equalTo("password", "==", password);
  let users = await query.find();
  console.log("查找用户", users);

  if (users.length > 0) {
    return userforBmob(users[0]);
  } else {
    return false;
  }
}

export async function getUserInfo(token) {
  let query = Bmob.Query("admin");
  if (!token) {
    console.log("无token,return null");
    return null;
  }
  console.log(112312321);
  try {
    let user = await query.get(token);
    console.log("从id获取userinfo", token, user);
    if (user.disable) {
      throw "用户无权登录";
    }
    return userforBmob(user);
  } catch (error) {
    throw "用户不存在";
  }
}

function userforBmob(bmobObject) {
  return {
    // 权限
    roles: bmobObject.roles || ["user"],
    // 凭证
    token: bmobObject.objectId,
    // 描述
    introduction: bmobObject.introduction,
    //头像
    avatar:
      bmobObject.avatar ||
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    // 名字
    name: bmobObject.name
  };
}

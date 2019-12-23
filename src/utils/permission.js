import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value

    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}

export function isSuperadmin(){
  // return true;
  let res = store.getters.roles.indexOf('superadmin') > -1
  return res;
}

export function isAdmin(){
  let res = store.getters.roles.indexOf('admin') > -1
  console.log('isAdmin',res);
  // return true;
  return res;
}

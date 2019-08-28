const KEY = 'hm-toutia-8080-xiangmu'

export default {
  // 存储用户
  setUser (uesr) {
    const jsonStr = JSON.stringify(uesr)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  // 获取用户
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY) || '{}'
    return JSON.parse(jsonStr)
  },
  // 删除用户
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}

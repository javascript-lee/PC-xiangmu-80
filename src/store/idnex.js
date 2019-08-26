const KEY = 'hm-toutia-8080-xiangmu'

export default {
  setUesr (uesr) {
    const jsonStr = JSON.stringify(uesr)
    window.sessionStorage.setItem(KEY, jsonStr)
  }
}

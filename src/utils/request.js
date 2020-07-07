import axios from 'axios'

// 统一配置
let GLOABLE_REQUEST = axios.create({
  baseURL: 'http://localhost:8080/',
  responseType: 'json'
})

const request = {

}
console.log(GLOABLE_REQUEST.length)
export default request

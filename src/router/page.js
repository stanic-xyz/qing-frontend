// 1、首先获取当前目录下所有的文件；
// 2、然后筛选出所有的vue文件;
const files = require.context('./', false, /\.vue$/)

const pages = {}

files.keys().forEach((key) => {
  // 3、通过正则将文件名作为属性名来保存文件
  pages[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
console.log(files, '文件列凑')

export default pages

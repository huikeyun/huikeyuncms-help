const fs = require('fs')
const path = require('path')
const {spawn} = require('child_process')

const args = process.argv.slice(2)
fs.readdir(path.join(__dirname, '../src/themes'), (err, files) => {
  if (err) {
    console.error('err', err)
    process.exit(1)
  } else {
    console.log(files); // 输出当前目录下所有文件和子目录名称的数组
  }
})

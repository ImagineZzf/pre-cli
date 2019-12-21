const Utils = require('../utils/index')

// 下载模版
const downloadTemplate = dir => {
  let template = ''
  for (const item of Object.keys(Utils.templates)) {
    if (process.argv.includes(`--${item}`)) {
      template = item
      break
    }
  }
  Utils.downloadTemplate(dir, template)
    .then(res => {
      // 下载成功
    })
    .catch(err => {
      // 下载失败
    })
}

module.exports = args => {
  // 下载模版
  downloadTemplate(Utils.getProjectName())
}

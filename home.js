'use strict'

import { addHead } from './head.js'
import { deletePreWhiteSpace, deleteParaWhiteSpace } from './utils/delete-white-space.js'
import { inlineCodeTomd } from './utils/markdown.js'

// 主函数
function main() {
  addHead() // 添加 <head> 元素信息
  deletePreWhiteSpace()
  deleteParaWhiteSpace()
  inlineCodeTomd()
}

/* 函数调用 */
main()
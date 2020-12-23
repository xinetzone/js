'use strict'

import { addHead } from './head.js'
import { deleteWhiteSpace } from './utils/delete-white-space.js'

// 主函数
function main() {
  addHead() // 添加 <head> 元素信息
  deleteWhiteSpace()
}

/* 函数调用 */
main()
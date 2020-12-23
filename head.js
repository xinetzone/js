'use strict'

import { addStartAfter } from './starter.js'

// 主函数
function addHead() {
    // 添加 <head> 元素信息
    let head = document.querySelector('head')
    let headTitle = document.querySelector('head > title')
    addStartAfter(headTitle)
    let componentScript = document.createElement('script')
    componentScript.type = 'module'
    componentScript.src = "./components.js"
    componentScript.defer = true
    head.append(componentScript)
}

export { addHead }
'use strict'

/* # 将 `code` 转换 <inline-code>code</inline-code> */
function inlineCodeTomd() {
    let body = document.querySelector('body')
    // 添加 内联代码样式
    const text = body.innerHTML.replace(/\`(\w+)\`/g, '<inline-code>$1</inline-code>')
    // 添加 HTML 元素样式
    const text1 = text.replace(/\`html{(\w+)}\`/g, '<inline-code>&lt;$1></inline-code>')
    body.innerHTML = text1
}

export { inlineCodeTomd}
'use strict'

/* # 将 `code` 转换 <inline-code>code</inline-code> */
function inlineCodeTomd() {
    let paras = document.querySelectorAll('p')
    for (let block of paras) {
        // 添加 内联代码样式
        const text = block.innerHTML.replace(/\`(\w+)\`/g, '<inline-code>$1</inline-code>')
        // 添加 HTML 元素样式
        const text1 = text.replace(/\`html{(\w+)}\`/g, '<inline-code>&lt;$1></inline-code>')
        block.innerHTML = text1
    }
}

export { inlineCodeTomd}
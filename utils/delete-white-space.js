'use strict'

/* # 删除空白符 */
function deletePreWhiteSpace() {
    let codeBlocks = document.querySelectorAll('pre > code')

    for (let block of codeBlocks) {
        // 删除代码块首尾空白符
        const text = block.textContent.trim()
        /* # 删除每行的开头的多余空白符 */
        let array = text.split(/[\r\t\n]/)
        const lastElement = array[array.length - 1]
        const spaceNum = lastElement.search(/\S/)
        const spaceReg = RegExp(`(\\s{${spaceNum}})`)
        const array1 = array.map(strings => strings.replace(spaceReg, ''))
        const outText = array1.join('\n')
        block.textContent = outText
    }
}

function deleteParaWhiteSpace() {
    let paras = document.querySelectorAll('p')
    for (let block of paras) {
        const text = block.innerHTML
        let array = text.split(/[\r\t\n]/)
        // 删除多余的换行符
        const array1 = array.map(strings => strings.trim())
        // 删除多余的空白符
        const outText = array1.join('')
        block.innerHTML = outText
    }
}

export { deletePreWhiteSpace, deleteParaWhiteSpace }

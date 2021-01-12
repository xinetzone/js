'use strict'

/* # 删除空白符 */
function deletePreWhiteSpace() {
    let codeBlocks = document.querySelectorAll('pre > code')

    for (let block of codeBlocks) {
        // 删除代码块首尾空白符
        const text = block.textContent.trim()
        /* # 删除每行的开头的多余空白符 */
        let array = text.split('\n')
        const lastElement = array[array.length - 1]
        const spaceNum = lastElement.search(/\S/)
        const spaceReg = RegExp(`(\\s{${spaceNum}})`)
        const array1 = array.map(strings => strings.replace(spaceReg, ''))
        let outText = array1.join('\n')
        block.textContent = outText
    }
}

function deleteParaWhiteSpace() {
    let paras = document.querySelectorAll('p')
    for (let para of paras) {
        // 删除全部空白符
        const text = para.innerHTML.replace(/\s+/g, '')
        // 删除多余的换行符 
        let outText = text.replace(/[\n\r]/g, '')
        para.innerHTML = outText
    }
}

export { deletePreWhiteSpace, deleteParaWhiteSpace }

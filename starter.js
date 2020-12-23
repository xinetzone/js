// 添加元素信息开始的配置信息

class StartBlock {
    static createLink(href, rel = "stylesheet") {
        let link = document.createElement('link')
        link.rel = rel
        link.href = href
        return link
    }
    static fontAwesome() {
        // 添加 font-awesome 图标支持
        const href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        return StartBlock.createLink(href)
    }
    static w3css() {
        // 添加 w3-css 主题
        const href = "./styles/w3css/4/w3.css"
        return StartBlock.createLink(href)
    }

    static complexCSS() {
        const href = "./styles/complex.css"
        return StartBlock.createLink(href)
    }

    static homeCSS() {
        const href = "./styles/home.css"
        return StartBlock.createLink(href)
    }
}

function addStartAfter(parent) {
    parent.after(StartBlock.complexCSS())
    parent.after(StartBlock.fontAwesome())
    parent.after(StartBlock.homeCSS())
    parent.after(StartBlock.w3css())
}

function addStart(parent) {
    parent.append(StartBlock.w3css(), StartBlock.homeCSS(),
        StartBlock.fontAwesome(), StartBlock.complexCSS())
}

export { addStart, addStartAfter}
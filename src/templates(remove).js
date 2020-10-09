import {row, col, css} from './utils'

function title(block) {
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}<${tag}>`), css(styles));
    
}
function text(block) {
    const {tag = 'p', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}
function columns(block) {
    const {styles} = block.options
    return row(block.value.map(col).join(''), css(styles))
}
function image(block) {
    const {styles, imgStyles: is} = block.options
    return row(`<img src="${block.value}" style="${css(is)}" />`, css(styles))
}

export const templates = {
    title,
    text,
    columns,
    image
}
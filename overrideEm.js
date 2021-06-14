const styles = `
    em {
        font-weight: normal !important;
        font-style: italic !important;
    }
`
const frameDocument  = window.frames && window.frames.ymIframe && window.frames.ymIframe.document
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
frameDocument.head.appendChild(styleSheet);

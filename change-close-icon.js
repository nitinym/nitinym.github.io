
// function closeBot() {
//     document.getElementsByClassName("close-chat")[0].src =
//         "https://cdn.yellowmessenger.com/DijpOqYkPF8A1621572136172.png"
// }

// setTimeout(closeBot(), 3000)

const styles = `
    .close-chat {
        content:url("https://cdn.yellowmessenger.com/DijpOqYkPF8A1621572136172.png");
    }
`
const frameDocument  = window.frames && window.frames.ymIframe && window.frames.ymIframe.document
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
frameDocument.head.appendChild(styleSheet);

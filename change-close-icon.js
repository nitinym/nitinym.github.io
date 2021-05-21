
// function closeBot() {
//     document.getElementsByClassName("close-chat")[0].src =
//         "https://cdn.yellowmessenger.com/DijpOqYkPF8A1621572136172.png"
// }

// setTimeout(closeBot(), 3000)

const styles = `
    .close-chat {
        content:url("https://cdn.yellowmessenger.com/DijpOqYkPF8A1621572136172.png");
    }
    @media screen and (max-device-width: 768px) {
        #chatDetails .back img {
        width: 15px;
        height: 15px;
        border-radius: 0;
        margin: -5px 20px 10px;
        cursor: pointer;
        }
    }
`
const frameDocument  = window.frames && window.frames.ymIframe && window.frames.ymIframe.document
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
frameDocument.head.appendChild(styleSheet);

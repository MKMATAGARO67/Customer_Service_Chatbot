// function sendMessage() {

//     let userText = document.getElementById("userInput").value;

//     fetch("/get?msg=" + userText)
//         .then(response => response.text())
//         .then(data => {

//             document.getElementById("chatbox").innerHTML +=
//                 "<p><b>You:</b> " + userText + "</p>";

//             document.getElementById("chatbox").innerHTML +=
//                 "<p><b>Bot:</b> " + data + "</p>";

//         });
// }

const widget = document.getElementById("chat-widget");
const toggle = document.getElementById("chat-toggle");

toggle.onclick = function () {
    widget.style.display = "flex";
    toggle.style.display = "none";
}

function toggleChat() {

    if (widget.style.height === "60px") {
        widget.style.height = "480px";
        document.getElementById("collapse-icon").innerText = "–";
    }

    else {
        widget.style.height = "60px";
        document.getElementById("collapse-icon").innerText = "+";
    }

}

function handleKey(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {

    let input = document.getElementById("userInput");
    let text = input.value.trim();

    if (text === "") return;

    let chatbox = document.getElementById("chatbox");

    let userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = text;

    chatbox.appendChild(userMsg);

    fetch("/get?msg=" + encodeURIComponent(text))
        .then(r => r.text())
        .then(data => {

            let botMsg = document.createElement("div");
            botMsg.className = "message bot";
            botMsg.innerHTML = data;

            chatbox.appendChild(botMsg);

            chatbox.scrollTop = chatbox.scrollHeight;

        });

    input.value = "";

}

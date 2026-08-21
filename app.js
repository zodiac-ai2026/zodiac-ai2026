const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

const send = document.getElementById("send");
const message = document.getElementById("message");
const chat = document.getElementById("chat");

if (menuBtn) {
    menuBtn.onclick = function () {
        menu.classList.toggle("active");
    };
}

if (send) {
    send.onclick = sendMessage;
}

if (message) {
    message.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });
}

function sendMessage() {
    const text = message.value.trim();

    if (!text) return;

    addMessage(text, "user");

    message.value = "";

    setTimeout(function () {
        addMessage(
            "سلام! من ZODIAC هستم. هسته اولیه من آماده است. مرحله بعد باید موتور هوش مصنوعی واقعی را به من متصل کنیم.",
            "ai"
        );
    }, 500);
}

function addMessage(text, type) {
    const box = document.createElement("div");

    box.className = "message " + type;
    box.textContent = text;

    chat.appendChild(box);

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

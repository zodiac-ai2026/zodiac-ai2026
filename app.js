const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

const send = document.getElementById("send");
const message = document.getElementById("message");
const chat = document.getElementById("chat");


// ==========================
// MENU
// ==========================

function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
}

function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
}

menuBtn.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener("click", closeMenu);


// ==========================
// SEND MESSAGE
// ==========================

send.addEventListener("click", sendMessage);

message.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();
    }

});


// ==========================
// MESSAGE SYSTEM
// ==========================

function sendMessage() {

    const text = message.value.trim();

    if (!text) return;

    addMessage(text, "user");

    message.value = "";

    // پاسخ موقت ZODIAC
    showTyping();

    setTimeout(() => {

        removeTyping();

        addMessage(
            "سلام! ✦ من ZODIAC هستم. رابط هوشمند من آماده است؛ برای پاسخ‌های واقعی باید موتور هوش مصنوعی به سرور متصل شود.",
            "ai"
        );

    }, 900);
}


// ==========================
// ADD MESSAGE
// ==========================

function addMessage(text, type) {

    const box = document.createElement("div");

    box.className = `message ${type}`;

    box.textContent = text;

    chat.appendChild(box);

    scrollToBottom();
}


// ==========================
// TYPING
// ==========================

function showTyping() {

    if (document.getElementById("typing")) return;

    const typing = document.createElement("div");

    typing.id = "typing";

    typing.className = "message ai";

    typing.textContent = "ZODIAC در حال فکر کردن... ✦";

    chat.appendChild(typing);

    scrollToBottom();
}

function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {
        typing.remove();
    }
}


// ==========================
// SCROLL
// ==========================

function scrollToBottom() {

    setTimeout(() => {

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    }, 50);
}


// ==========================
// MENU ITEMS
// ==========================

const menuItems =
    document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {

    item.addEventListener("click", () => {

        const title =
            item.querySelector("span:last-child")?.textContent;

        closeMenu();

        if (title) {

            addMessage(
                `بخش «${title}» انتخاب شد. این قابلیت بعداً به موتور ZODIAC متصل می‌شود.`,
                "ai"
            );

        }

    });

});

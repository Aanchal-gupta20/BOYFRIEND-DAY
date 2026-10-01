function showKiss() {
    document.getElementById("main-page").style.display = "none";
    document.getElementById("kiss-screen").style.display = "flex";
}

function showExcited() {
    document.getElementById("kiss-screen").style.display = "none";
    document.getElementById("excited-screen").style.display = "flex";
}

function showGifts() {
    document.getElementById("excited-screen").style.display = "none";
    document.getElementById("gifts-screen").style.display = "flex";
}

function sayNo() {
    alert("Awww bby 😭 You can't say NO to me 🥺❤️");
}

function sayMaybe() {
    alert("Hmmmm… Maybe? 👀 Nice try bby 😭💕");
}

function openGift(number) {

    document.getElementById("gifts-screen").style.display = "none";

    if (number === 1) {
        document.getElementById("gift1-screen").style.display = "flex";
    }

    if (number === 2) {
        document.getElementById("gift2-screen").style.display = "flex";
    }

    if (number === 3) {
        document.getElementById("gift3-screen").style.display = "flex";
    }
}

function backToGifts() {

    document.getElementById("gift1-screen").style.display = "none";
    document.getElementById("gift2-screen").style.display = "none";
    document.getElementById("gift3-screen").style.display = "none";

    document.getElementById("gifts-screen").style.display = "flex";
}
function showScratch() {

    document.getElementById("gifts-screen").style.display = "none";
    document.getElementById("gift1-screen").style.display = "none";
    document.getElementById("gift2-screen").style.display = "none";
    document.getElementById("gift3-screen").style.display = "none";

    document.getElementById("scratch-screen").style.display = "flex";

    setupScratch();
}


function setupScratch() {

    const canvas = document.getElementById("scratchCanvas");
    const area = document.querySelector(".scratch-area");

    if (!canvas || !area) return;

    const ctx = canvas.getContext("2d");

    canvas.width = area.offsetWidth;
    canvas.height = area.offsetHeight;

    // Scratch layer
    ctx.fillStyle = "#c9b7b7";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(
        "SCRATCH ME ♡",
        canvas.width / 2,
        canvas.height / 2
    );

    let scratching = false;

    function scratch(e) {

        if (!scratching) return;

        const rect = canvas.getBoundingClientRect();

        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;

        ctx.globalCompositeOperation = "destination-out";

        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2);
        ctx.fill();
    }

    canvas.addEventListener("mousedown", () => {
        scratching = true;
    });

    canvas.addEventListener("mouseup", () => {
        scratching = false;
    });

    canvas.addEventListener("mouseleave", () => {
        scratching = false;
    });

    canvas.addEventListener("mousemove", scratch);

    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        scratching = true;
    });

    canvas.addEventListener("touchend", () => {
        scratching = false;
    });

    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        scratch(e);
    });
}

function showFinalForm() {
    openFinalForm();
}


function openFinalForm() {

    document.getElementById("scratch-screen").style.display = "none";
    document.getElementById("final-screen").style.display = "flex";
}


function submitFinal() {

    const message = document.getElementById("boyfriendMessage").value.trim();

    document.querySelector(".final-buttons").style.display = "none";

    document.getElementById("final-thankyou").style.display = "block";

    if (message) {
        console.log("Boyfriend's message:", message);
    }
}
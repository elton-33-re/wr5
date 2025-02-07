function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username.toLowerCase() === "regina" && password === "280224") {
        alert("🌠 Selamat datang di Galaksi Cinta, Regina! 🌠");
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("romantic-container").classList.remove("hidden");
        startQuotes();
        startLoveAnimation();
    } else {
        errorMessage.textContent = "😢 Nama atau kata sandi salah!";
    }
}

function showLogin() {
    document.getElementById("romantic-container").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
}

/* Kata romantis berganti */
function startQuotes() {
    const quotes = [
        "💫 Cintamu bersinar lebih terang dari bintang-bintang 💫",
        "🌙 Aku ingin menjadi bulan yang menemani malammu 🌙",
        "✨ Setiap bintang di langit mengingatkanku padamu ✨",
        "💖 Kamu adalah semestaku, tak terbatas dan indah 💖",
        "🌌 Kamu seperti galaksi yang tak pernah habis untuk dikagumi 🌌",
        "💜 Bersamamu, langit malam terasa lebih berwarna 💜",
        "💞 Hatiku mengorbit di sekeliling cintamu 💞",
        "🌠 Jika aku boleh memilih satu bintang, aku akan memilihmu 🌠",
        "💍 Cintamu seperti gravitasi, menarikku lebih dekat setiap hari 💍",
        "🛸 Kamu adalah planet asing yang membuatku ingin mengeksplorasi lebih dalam 🛸",
        "🚀 Setiap detik bersamamu terasa seperti perjalanan ke luar angkasa 🚀",
        "✨ Kamu adalah aurora yang menghiasi hatiku ✨",
        "🌕 Jika bulan bisa berbisik, ia pasti menyebut namamu setiap malam 🌕",
        "❤ Aku ingin bersamamu sampai bintang terakhir di langit padam ❤",
        "🌎 Kamu adalah pusat semestaku, aku selalu mengitari hatimu 🌎",
        "🔭 Aku bisa melihat masa depan bersamamu seperti seorang astronom 🔭",
        "🌠 Kamu seperti komet langka, hadir dalam hidupku dan menerangi semuanya 🌠",
        "🛸 Aku tidak butuh pesawat luar angkasa, cukup dengan cintamu aku bisa terbang 🛸",
        "☀ Jika kamu adalah matahari, aku rela menjadi planet yang selalu mengorbit di sekitarmu ☀",
        "🌌 Bersamamu, langit tak pernah terasa sepi 🌌",
        "💖 Kamu adalah cahaya di kegelapan hatiku 💖",
        "🚀 Jarak tidak penting, karena cintaku melesat lebih cepat dari cahaya 🚀",
        "💫 Aku ingin menghabiskan seluruh orbit hidupku bersamamu 💫"
    ];

    let index = 0;
    function changeQuote() {
        document.getElementById("romantic-quote").innerText = quotes[index];
        index = (index + 1) % quotes.length;
    }
    setInterval(changeQuote, 3000);
}

/* Efek love bergerak */
function startLoveAnimation() {
    setInterval(() => {
        const love = document.createElement("div");
        love.innerText = "❤";
        love.classList.add("love");
        love.style.left = Math.random() * window.innerWidth + "px";
        love.style.top = "-30px";
        love.style.fontSize = Math.random() * 20 + 20 + "px";
        document.body.appendChild(love);

        love.animate([
            { transform: "translateY(0px)", opacity: 1 },
        ], {
            duration: 4000,
            easing: "linear"
        });

        setTimeout(() => love.remove(), 4000);
    }, 500);
}
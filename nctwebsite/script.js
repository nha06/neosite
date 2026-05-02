document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       REVEAL ON SCROLL
    ========================= */

    function revealOnScroll() {
        let reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", revealOnScroll);

    /* =========================
       TIMELINE CLICK INTERACTION
    ========================= */

    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const img = item.querySelector('img');
        const detail = item.querySelector('.timeline-detail');

        if (img && detail) {
            img.addEventListener('click', () => {
                document.querySelectorAll('.timeline-detail').forEach(d => {
                    if (d !== detail) d.classList.remove('active');
                });
                detail.classList.toggle('active');
            });
        }
    });

    /* =========================
       SEARCH
    ========================= */

    const searchData = [
        { name: "NCT 127 Album Rankings", url: "127.html" },
        { name: "NCT Dream Album Rankings", url: "dream.html" },
        { name: "WayV Album Rankings", url: "wayv.html" },
        { name: "NCT U Album Rankings", url: "u.html" },
        { name: "NCT DoJaeJung Album Rankings", url: "dojaejung.html" },
        { name: "NCT Wish Album Rankings", url: "wish.html" },
        { name: "Solos Album Rankings", url: "solos.html" },
        { name: "Learn About NCT", url: "learnnct.html" },
        { name: "NCT Masterlist", url: "masterlist.html" },
        { name: "Quizzes", url: "quizzes.html" },
        { name: "Lyric Fill-In Quiz", url: "quiz2.html" },
        { name: "Minigames", url: "minigames.html" },
        { name: "About NEOSITE", url: "about.html" },
        { name: "Taeyong Solo Rankings", url: "taeyong.html" },
        { name: "Ten Solo Rankings", url: "solos.html" },
        { name: "Johnny Solo Rankings", url: "solos.html" },
        { name: "Yuta Solo Rankings", url: "solos.html" },
        { name: "Kun Solo Rankings", url: "solos.html" },
        { name: "Doyoung Solo Rankings", url: "doyoung.html" },
        { name: "Jaehyun Solo Rankings", url: "solos.html" },
        { name: "Winwin Solo Rankings", url: "solos.html" },
        { name: "Jungwoo Solo Rankings", url: "solos.html" },
        { name: "Mark Solo Rankings", url: "solos.html" },
        { name: "Xiaojun Solo Rankings", url: "solos.html" },
        { name: "Hendery Solo Rankings", url: "solos.html" },
        { name: "Renjun Solo Rankings", url: "solos.html" },
        { name: "Jeno Solo Rankings", url: "solos.html" },
        { name: "Haechan Solo Rankings", url: "solos.html" },
        { name: "Jaemin Solo Rankings", url: "solos.html" },
        { name: "Yangyang Solo Rankings", url: "solos.html" },
        { name: "Chenle Solo Rankings", url: "solos.html" },
        { name: "Jisung Solo Rankings", url: "solos.html" },
        { name: "Sion Solo Rankings", url: "solos.html" },
        { name: "Riku Solo Rankings", url: "solos.html" },
        { name: "Yushi Solo Rankings", url: "solos.html" },
        { name: "Jaehee Solo Rankings", url: "solos.html" },
        { name: "Ryo Solo Rankings", url: "solos.html" },
        { name: "Sakuya Solo Rankings", url: "solos.html" },
    ];

    const input = document.getElementById("search-input");
    const resultsBox = document.getElementById("search-results");

    if (input && resultsBox) {
        input.addEventListener("input", () => {
            const query = input.value.toLowerCase();
            resultsBox.innerHTML = "";

            if (query.length === 0) {
                resultsBox.style.display = "none";
                return;
            }

            const matches = searchData.filter(item =>
                item.name.toLowerCase().includes(query)
            );

            matches.forEach(match => {
                const link = document.createElement("a");
                link.href = match.url;
                link.textContent = match.name;
                resultsBox.appendChild(link);
            });

            resultsBox.style.display = matches.length ? "block" : "none";
        });
    }

});
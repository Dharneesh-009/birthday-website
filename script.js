document.addEventListener("DOMContentLoaded", function () {
    let images = ["assets/images/image1.jpg", "assets/images/image2.jpg", "assets/images/image3.jpg"];
    let index = 0;
    setInterval(() => {
        document.getElementById("slideshow-img").src = images[index];
        index = (index + 1) % images.length;
    }, 3000);
});

/*function startCelebration() {
    launchConfetti();
    document.getElementById("popup").style.display = "block";
    //revealMemories(); // 🔥 Reveal the gallery after confetti and popup
}
*/

function startCelebration() {
    document.getElementById("popup").style.display = "block";
    launchConfetti();

    // Delay the gallery reveal by 3 seconds
    setTimeout(revealMemories, 3000);
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function launchConfetti() {
    let canvas = document.getElementById("confetti-canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 6 + 4,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fillStyle = c.color;
            ctx.fill();
            c.y += c.d;
            c.x += Math.sin(c.tilt);
            if (c.y > canvas.height) c.y = 0;
        });
    }

    setInterval(draw, 30);
}

function revealMemories() {
    const gallery = document.getElementById('gallery');
    const images = gallery.querySelectorAll('.gallery-img');

    gallery.classList.remove('hidden');
    gallery.classList.add('reveal');

    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
        }, index * 200);
    });

    gallery.scrollIntoView({ behavior: "smooth" });
}


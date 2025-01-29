const button = document.getElementById("prayButton");

button.addEventListener("click", () => {
    for (let i = 0; i < 50; i++) {
        createFlower();
    }
});

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Use custom flower images
    const flowerImages = [
        "flower1.png", // Flower 1
        "flower2.png"  // Flower 2
    ];

    const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.style.backgroundImage = `url(${randomImage})`;

    const size = Math.random() * 20 + 20; // Random size
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;

    // Position the flower randomly across the screen width and just below the navbar
    flower.style.left = `${Math.random() * window.innerWidth}px`;
    flower.style.top = `${document.querySelector("nav").offsetHeight}px`;

    // Add a random animation duration
    flower.style.animationDuration = `${Math.random() * 3 + 2}s`;

    document.body.appendChild(flower);

    // Remove flower after animation
    setTimeout(() => {
        flower.remove();
    }, 5000);
}

    // Set the target date and time
    const targetDate = new Date("2025-02-02T12:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Update the HTML elements
      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

      // Stop the countdown when the target date is reached
      if (timeLeft <= 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "Time's up!";
      }
    }

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

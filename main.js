const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

// 🎵 Music setup
const music = document.getElementById("bg-music");
let isMusicPlaying = false;

// 👉 Helper function to start music once
function playMusic() {
  if (!isMusicPlaying) {
    music.volume = 0;
    music.play();

    // 🔥 smooth fade-in
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.3) {
        vol += 0.02;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

    isMusicPlaying = true;
  }
}

// 👉 STEP 1
yesBtn.onclick = () => {
  playMusic();

  question.innerHTML = "I'm SORRY";
  gif.src = "images/sorry.png";
  gif.style.height = "300px";
  gif.style.width = "400px";

  yesBtn.innerHTML = "Okay fine";
  noBtn.innerHTML = "No";

  // 👉 STEP 2 (YES)
  yesBtn.onclick = () => {
    question.innerHTML = "Hehehe!! I knew it 😘";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  };

  // 👉 STEP 2 (NO)
  noBtn.onclick = () => {
    question.innerHTML = "Think about it properly!";
    gif.src = "images/download.gif";

    yesBtn.innerHTML = "Okay fine";
    noBtn.innerHTML = "I don’t want to think";

    // 👉 STEP 3 (YES)
    yesBtn.onclick = () => {
      question.innerHTML = "Hehehe, I knew it! 😍";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    };

    // 👉 STEP 3 (NO)
    noBtn.onclick = () => {
      question.innerHTML = "Just think one more time";
      gif.src = "images/sadlife.gif";

      yesBtn.innerHTML = "Okay, I agree";
      noBtn.innerHTML = "Final no";

      // 👉 STEP 4 (YES)
      yesBtn.onclick = () => {
        question.innerHTML = "Hehehe, I knew it! ❤️";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      };

      // 👉 STEP 4 (NO)
      noBtn.onclick = () => {
        question.innerHTML = "Come on, don’t be so stubborn!";
        gif.src = "images/run.gif";

        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";

        // FINAL YES (swapped)
        noBtn.onclick = () => {
          question.innerHTML = "Hehehe, I knew it! 💖";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        };

        // 😂 RUNAWAY BUTTON EFFECT
        yesBtn.onmouseover = () => {
          const rect = yesBtn.getBoundingClientRect();
          const maxX = window.innerWidth - rect.width - 50;
          const maxY = window.innerHeight - rect.height - 50;

          const randomX = Math.random() * maxX;
          const randomY = Math.random() * maxY;

          yesBtn.style.position = "absolute";
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        };
      };
    };
  };
};

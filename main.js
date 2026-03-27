const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I'm SORRY";
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
  gif.style.width = "400px"; 

  noBtn.innerHTML = "No";
  yesBtn.innerHTML = "Okay fine";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Hehehe!! I knew it";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Think about it properly!";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Okay fine";
    noBtn.innerHTML = "I don’t want to think";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Hehehe, I knew it!";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    });

    noBtn.addEventListener("click", () => {
      question.innerHTML = "Just think one more time";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "Okay, I agree";
      noBtn.innerHTML = "Final no";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Hehehe, I knew it!";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "Come on, don’t be so stubborn!";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "Hehehe, I knew it!";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        });

        // Hover effect for the "yes" button
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50;

          const maxX = screenWidth - yesBtnRect.width - margin * 2;
          const maxY = screenHeight - yesBtnRect.height - margin * 2;

          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin;
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin;

          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });

      });
    });
  });
});
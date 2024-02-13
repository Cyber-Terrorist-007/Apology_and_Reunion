const alternatives = [
  { text: "", images: "images/cat-01.gif" },
  {
    text: "I promise you it will be unforgettable and I'll never make you feel sorry about your decision",
    images: "images/cat-02.gif",
  },
  { text: "Think again. You may lose a sincere friend 🤧🥴", images: "images/cat-03.gif" },
  { text: "Come on, dare to say yes", images: "images/cat-04.gif" },
  {
    text: "Don't let fear stop you. You know you mean a lot to me! 🥹",
    images: "images/cat-05.gif",
  },
];
const ohyes = {
  text: "I knew you would accept. 🥳😜 Thanks a lot. I promise I'll never betray you and leave you ever.............. But besides being funny, I swear Anam, you mean a lot to me. I don't want to lose you ever. And to be honest, it feels like I am dying these days. Is there no any chance for me to be your friend? You are my friend. My best friend. But can I also be your friend? 🥺",
  images: "images/cat-yes.gif",
};
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const cat = document.querySelector(".cat");
const buttons = document.querySelectorAll(".button");
const errorButton = document.querySelector(".button__error");

let count = 0;

function updateDisplay(item) {
  console.log(item);
  cat.src = item.images;
  text.innerHTML = item.text;
}

errorButton.addEventListener("click", () => {
  count = 0;
  updateDisplay(alternatives[count]);
  buttons.forEach((btn) => (btn.style.display = "inline-block"));
  errorButton.style.display = "none";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "YES") {
      updateDisplay(ohyes);
      // Commented out the following line so that buttons won't hide immediately
      buttons.forEach((btn) => (btn.style.display = "none"));
      title.innerHTML = "You are the best Anam! 🥂😍🥳";
    }
    if (button.textContent === "NO") {
      count++;
      if (count < alternatives.length) {
        updateDisplay(alternatives[count]);
      } else {
        buttons.forEach((btn) => (btn.style.display = "none"));
        errorButton.style.display = "inline-block";
      }
    }
  });
});

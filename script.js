
const replies = [
  "Wanna know a secret? Ujjwal sir is far better — he is the GOAT 🔥",
  "Feeling bored? Let’s vibe to Dynamite 💃",
  "Reminder: You’re iconic, and Ujjwal sir agrees 😏"
];
function chat(index) {
  document.getElementById("reply").innerText = replies[index];
}
function playVoice() {
  document.getElementById("voice").play();
}
function playMusic() {
  document.getElementById("music").play();
}

const boxesContainer = document.getElementById('boxes');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes () {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 12.5}rem ${-i * 12.5}rem`
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();







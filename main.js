function displayScreenSize() {
  const widthDisplay = document.getElementById('width-display');
  const heightDisplay = document.getElementById('height-display');

  widthDisplay.textContent = `Display width: ${window.innerWidth}px`;
  heightDisplay.textContent = `Display height: ${window.innerHeight}px`;
}

// Отображение при загрузке страницы
displayScreenSize();

// Обновление при изменении размера окна
window.addEventListener('resize', displayScreenSize);


const tg = window.Telegram.WebApp

const version = document.createElement('h1');
version.textContent = `Telegram API version: ${tg.version}`;

const platform = document.createElement('h1');
platform.textContent = `Platform: ${tg.platform}`;

const colorScheme = document.createElement('h1');
colorScheme.textContent = `Color Scheme: ${tg.colorScheme}`;



document.body.appendChild(version);
document.body.appendChild(platform);
document.body.appendChild(colorScheme);

tg.expand()

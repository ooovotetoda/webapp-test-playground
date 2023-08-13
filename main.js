function displayScreenSize() {
  const widthDisplay = document.getElementById('width-display');
  const heightDisplay = document.getElementById('height-display');

  widthDisplay.textContent = `Ширина экрана: ${window.innerWidth}px`;
  heightDisplay.textContent = `Высота экрана: ${window.innerHeight}px`;
}

// Отображение при загрузке страницы
displayScreenSize();

// Обновление при изменении размера окна
window.addEventListener('resize', displayScreenSize);
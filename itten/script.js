document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('souvenir-packaging');
  const context = canvas.getContext('2d');

  // Рисуем задний фон
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Рисуем пакет с ручками
  drawBag(200, 100, 200, 200, '#f4e500'); // Coral

  // Рисуем логотип
  const logo = new Image();
  logo.onload = function() {
      context.drawImage(logo, 260, 150, 80, 100); // Размер и координаты для вашего логотипа
  };
  logo.src = 'logo.png'; // Путь к вашему изображению логотипа

  // Функция для рисования пакета с ручками
  function drawBag(x, y, width, height, color) {
      // Рисуем основное тело пакета
      context.fillStyle = color;
      context.fillRect(x, y, width, height);

      // Рисуем ручки
      const handleWidth = 50;
      const handleHeight = 20;
      const handleMargin = 10;

      // Левая ручка
      context.fillStyle = '#fdc60b';
      context.fillRect(x + handleMargin, y - handleHeight / 2, handleWidth, handleHeight);

      // Правая ручка
      context.fillRect(x + width - handleMargin - handleWidth, y - handleHeight / 2, handleWidth, handleHeight);

      // Рисуем текст внутри пакета
      const text = 'С любовью от WorkTech';
      context.font = '12px Arial'; // Устанавливаем уменьшенный шрифт
      const textWidth = context.measureText(text).width; // Получаем ширину текста
      const textX = x + (width - textWidth) / 2; // Центрируем текст по горизонтали
      const textY = y + height - 15; // Отступаем от нижнего края пакета
      context.fillStyle = '#333'; // Цвет текста
      context.fillText(text, textX, textY); // Рисуем текст
  }
});

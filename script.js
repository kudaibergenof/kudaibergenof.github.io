document.addEventListener("DOMContentLoaded", function() {
    const drinksButton = document.getElementById('drinksButton');
    const dishesButton = document.getElementById('dishesButton');
    const drinksSection = document.getElementById('drinks');
    const dishesSection = document.getElementById('dishes');

    // По умолчанию показываем блюда
    drinksSection.style.display = 'none';
    
    // Обработчики событий для кнопок переключения
    drinksButton.addEventListener('click', function() {
        drinksSection.style.display = 'block';
        dishesSection.style.display = 'none';
    });

    dishesButton.addEventListener('click', function() {
        drinksSection.style.display = 'none';
        dishesSection.style.display = 'block';
    });
});
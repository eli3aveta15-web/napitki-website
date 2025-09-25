document.addEventListener('DOMContentLoaded', function () {
  // Фильтрация для компотов (и других страниц с фильтрами)
  const timeButtons = document.querySelectorAll('.filter-time');
  const ingredientButtons = document.querySelectorAll('.filter-ingredient');
  const recipeCards = document.querySelectorAll('.recipe-card');

  let activeTime = 'all';
  let activeIngredient = 'all';

  function applyFilters() {
    recipeCards.forEach(card => {
      const timeMatch = activeTime === 'all' || card.dataset.time === activeTime;
      const ingredientMatch = activeIngredient === 'all' || 
        card.dataset.ingredients.split(' ').includes(activeIngredient);

      card.style.display = (timeMatch && ingredientMatch) ? 'block' : 'none';
    });
  }

  timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      timeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTime = btn.dataset.filter;
      applyFilters();
    });
  });

  ingredientButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      ingredientButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeIngredient = btn.dataset.filter;
      applyFilters();
    });
  });

  // Инициализация
  applyFilters();
});
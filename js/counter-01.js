// Знаходимо елементи на сторінці для роботи з ними
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Відслідковуємо клік на кнопку Мінус
btnMinus.addEventListener('click', function () {
// parseInt - перетворює рядок на число
// if для того, щоб кількість не йшла менше 1
  if ( parseInt(counter.innerText) > 1 ) {
    // Зменшуємо або кількість товару при нажиманні
    counter.innerText = --counter.innerText;
  }

});

// Відслідковуємо клік на кнопку Плюс
btnPlus.addEventListener('click', function () {
// Збільшуємо або кількість товару при нажиманні + (const counter)
  counter.innerText = ++counter.innerText;
});
// Прослушка всього вікна

window.addEventListener('click', function (event) {
  // Провіряємо чи є елемент по якому клікаємо кнопкою Плюс
  if (event.target.dataset.action === 'plus') {
  // Знаходимо обгортку лічильника
    const counterWrapper = event.target.closest('.counter-wrapper');
  // Знаходимо дів з числом лічильника
    const counter = counterWrapper.querySelector('[data-counter]');

    counter.innerText = ++counter.innerText;
  }
  // Провіряємо чи є елемент по якому клікаємо кнопкою Мінус
  if (event.target.dataset.action === 'minus') {

    const counterWrapper = event.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');

    if ( parseInt(counter.innerText) > 1 ) {
      // Зменшуємо або кількість товару при нажиманні
      counter.innerText = --counter.innerText;
    }
  }

});
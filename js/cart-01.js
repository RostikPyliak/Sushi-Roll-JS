// Дів корзини в яку добавляємо товари
const cartWrapper = document.querySelector('.cart-wrapper');

// Відслідковуємо клік на сторінці
window.addEventListener('click', function (event) {

  // Провіряємо що клік було зроблено по кнопці +в корзину
  if (event.target.hasAttribute('data-cart')) {

    // Знаходимо карточку з товаром про якій було зроблено клік
    const card = event.target.closest('.card');

    // Збираємо дані з товару і записуємо в єдиний об'єкт productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemsInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    };

    // Підставляємо зібрані дані в шаблон для товарів в корзині
    const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                          <div class="cart-item__top">
                            <div class="cart-item__img">
                              <img src="${productInfo.imgSrc}" alt="${productInfo.imgSrc}">
                            </div>
                            <div class="cart-item__desc">
                              <div class="cart-item__title">${productInfo.title}</div>
                              <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                              <!-- cart-item__details -->
                              <div class="cart-item__details">

                                <div class="items items--small counter-wrapper">
                                  <div class="items__control" data-action="minus">-</div>
                                  <div class="items__current" data-counter="">${productInfo.counter}</div>
                                  <div class="items__control" data-action="plus">+</div>
                                </div>

                                <div class="price">
                                  <div class="price__currency">${productInfo.price}</div>
                                </div>

                              </div>
                              <!-- // cart-item__details -->

                            </div>
                          </div>
                        </div>`;

    // Відображаємо товар в корзині
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);



  }
})
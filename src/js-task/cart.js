const addButton = document.querySelector('.cart__add-btn');
let count = 1;

addButton.addEventListener('click', function addToCart(event) {
  const cartList = document.querySelector('.cart__list')
  const newCartItem = document.createElement('li');
  const newCartTitle = document.createElement('p');

  newCartItem.classList.add('cart__item');
  newCartTitle.classList.add('cart__title');
  newCartTitle.textContent = `Книга под номером ${count}`
  count++

  newCartItem.append(newCartTitle);
  cartList.append(newCartItem);
})
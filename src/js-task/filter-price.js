const DATA = [
  { title: "Книга 1", price: 300 },
  { title: "Книга 2", price: 500 },
  { title: "Книга 3", price: 250 },
  { title: "Книга 4", price: 1500 },
  { title: "Книга 5", price: 800 },
  { title: "Книга 6", price: 400 }
]


/**
 * Description placeholder
 *
 * @param {number} [maxValue] Максимальная цена
 * @param {number} [minValue=0] Минимальная цена
 * @returns {obj} Книги с ценой подходящей условиям
 */
function filterPrice(maxValue, minValue = 0) {
  let result = [];
  result = DATA.filter((item) => item.price > minValue)
  return result.filter((item) => item.price < maxValue)
}
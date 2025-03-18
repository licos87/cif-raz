import { BookList } from './components/book-list';
import { CartList } from './components/cart-list';

export type BookType = {
  id: number;
  img: string;
  title: string;
  author: string;
  description: string;
  price: number;
};

function App() {
  let cartList: BookType[] = [];
  const BOOKLIST: BookType[] = [
    {
      id: 1,
      img: '../assets/img/book-cover.webp',
      title: 'Мастер и Маргарита',
      author: 'Михаил Афанасьевич Булгаков',
      description:
        'Роман Михаила Булгакова «Мастер и Маргарита» — это сложное переплетение мистики, сатиры и философской притчи, действие которого разворачивается в двух временных пластах: Москве 1930-х годов и древнем Ершалаиме. Произведение исследует вечные темы добра и зла, свободы творчества, ответственности за выбор и всепобеждающей силы любви.',
      price: 2000,
    },
  ];

  function addToCartHandler(id: number) {
    const book = BOOKLIST.find((item) => item.id === id);
    if (book === undefined) return;
    cartList = [...cartList, book];
  }

  function removeFromCartHandler(id: number) {
    cartList = cartList.filter((item) => item.id !== id);
  }

  return (
    <>
      <div>
        <h1 className="book-list__title">Список книг</h1>
        <BookList bookList={BOOKLIST} onAddToCart={addToCartHandler} />
      </div>
      <div>
        <h1>Корзина</h1>
        <CartList cartList={cartList} onRemoveFromCart={removeFromCartHandler} />
      </div>
    </>
  );
}

export default App;

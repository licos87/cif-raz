import { useState } from 'react';
import { BookList } from './components/book-list';
import { CartList } from './components/cart-list';
import { JsonplaceholderList } from './components/jsonplaceholder-list';

export type BookType = {
  id: number;
  img: string;
  title: string;
  author: string;
  description: string;
  price: number;
};

function App() {
  const BOOKLIST: BookType[] = [
    {
      id: 1,
      img: '../assets/img/book-cover.webp',
      title: 'Мастер и Маргарита 1',
      author: 'Михаил Афанасьевич Булгаков',
      description:
        'Роман Михаила Булгакова «Мастер и Маргарита» — это сложное переплетение мистики, сатиры и философской притчи, действие которого разворачивается в двух временных пластах: Москве 1930-х годов и древнем Ершалаиме. Произведение исследует вечные темы добра и зла, свободы творчества, ответственности за выбор и всепобеждающей силы любви.',
      price: 2000,
    },
    {
      id: 2,
      img: '../assets/img/book-cover.webp',
      title: 'Мастер и Маргарита 2',
      author: 'Михаил Афанасьевич Булгаков',
      description:
        'Роман Михаила Булгакова «Мастер и Маргарита» — это сложное переплетение мистики, сатиры и философской притчи, действие которого разворачивается в двух временных пластах: Москве 1930-х годов и древнем Ершалаиме. Произведение исследует вечные темы добра и зла, свободы творчества, ответственности за выбор и всепобеждающей силы любви.',
      price: 2000,
    },
    {
      id: 3,
      img: '../assets/img/book-cover.webp',
      title: 'Мастер и Маргарита 3',
      author: 'Михаил Афанасьевич Булгаков',
      description:
        'Роман Михаила Булгакова «Мастер и Маргарита» — это сложное переплетение мистики, сатиры и философской притчи, действие которого разворачивается в двух временных пластах: Москве 1930-х годов и древнем Ершалаиме. Произведение исследует вечные темы добра и зла, свободы творчества, ответственности за выбор и всепобеждающей силы любви.',
      price: 2000,
    },
    {
      id: 4,
      img: '../assets/img/book-cover.webp',
      title: 'Мастер и Маргарита 4',
      author: 'Михаил Афанасьевич Булгаков',
      description:
        'Роман Михаила Булгакова «Мастер и Маргарита» — это сложное переплетение мистики, сатиры и философской притчи, действие которого разворачивается в двух временных пластах: Москве 1930-х годов и древнем Ершалаиме. Произведение исследует вечные темы добра и зла, свободы творчества, ответственности за выбор и всепобеждающей силы любви.',
      price: 2000,
    },
    {
      id: 5,
      img: '../assets/img/book-cover.webp',
      title: 'Мастер и Маргарита 5',
      author: 'Михаил Афанасьевич Булгаков',
      description:
        'Роман Михаила Булгакова «Мастер и Маргарита» — это сложное переплетение мистики, сатиры и философской притчи, действие которого разворачивается в двух временных пластах: Москве 1930-х годов и древнем Ершалаиме. Произведение исследует вечные темы добра и зла, свободы творчества, ответственности за выбор и всепобеждающей силы любви.',
      price: 2000,
    },
    {
      id: 6,
      img: '../assets/img/book-cover.webp',
      title: 'Мастер и Маргарита 6',
      author: 'Михаил Афанасьевич Булгаков',
      description:
        'Роман Михаила Булгакова «Мастер и Маргарита» — это сложное переплетение мистики, сатиры и философской притчи, действие которого разворачивается в двух временных пластах: Москве 1930-х годов и древнем Ершалаиме. Произведение исследует вечные темы добра и зла, свободы творчества, ответственности за выбор и всепобеждающей силы любви.',
      price: 2000,
    },
  ];

  const [cartList, setCartList] = useState<BookType[]>([]);

  function addToCartHandler(id: number) {
    const book = BOOKLIST.find((item) => item.id === id);
    if (book === undefined) return;
    setCartList([...cartList, book]);
  }

  function removeFromCartHandler(id: number) {
    setCartList(cartList.filter((item) => item.id !== id))
  }

  return (
    <>
      <div>
        <h1 className="book-list__title">Список книг</h1>
        <BookList bookList={BOOKLIST} onAddToCart={addToCartHandler} />
      </div>
      <div>
        <h1>Корзина</h1>
        <CartList
          cartList={cartList}
          onRemoveFromCart={removeFromCartHandler}
        />
      </div>
      <div>
        <h1>Загрузка книг с https://jsonplaceholder</h1>
        <JsonplaceholderList />
      </div>
    </>
  );
}

export default App;

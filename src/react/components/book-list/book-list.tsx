import { BookType } from '../../app';
import { BookCard } from '../book-card';
import styles from './book-list.module.css';

type BookListProps = {
  bookList: BookType[];
  onAddToCart: (id: number) => void;
};

export function BookList({ bookList, onAddToCart }: BookListProps) {
  return (
    <ul className={styles.list}>
      {bookList.map((item) => (
        <li className={styles.item} key={item.id}>
          <BookCard
            id={item.id}
            img={item.img}
            title={item.title}
            author={item.author}
            description={item.description}
            price={item.price}
            onAddToCart={onAddToCart}
          />
        </li>
      ))}
    </ul>
  );
}
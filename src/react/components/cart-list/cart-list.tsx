import { BookType } from "../../app";
import { BookCard } from "../book-card";
import styles from './cart-list.module.css'

type CartListProps = {
  cartList: BookType[];
  onRemoveFromCart: (id:number) => void;
};

export function CartList({ cartList, onRemoveFromCart }: CartListProps) {
  return (
    <>
      <ul className={styles.list}>
        {cartList.map((item) => (
          <li className={styles.item} key={item.id}>
            <BookCard
              id={item.id}
              img={item.img}
              title={item.title}
              author={item.author}
              description={item.description}
              price={item.price}
              onRemoveFromCart={onRemoveFromCart}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
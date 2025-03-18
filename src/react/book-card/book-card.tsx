import styles from './book-card.module.css'

type BookCardProps = {
  title: string;
  author: string;
  description: string;
  price: number;
  onAddToCart: (e: React.MouseEvent<HTMLElement>) => undefined;
};

export function BookCard({ title, author, description, price, onAddToCart }: BookCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>{author}</p>
      <p className={styles.description}>{description}</p>
      <span className={styles.price}>{price}</span>
      <button
        className={styles.onAddToCart}
        type="button"
        onClick={(e) => onAddToCart(e)}
      ></button>
    </div>
  );
}
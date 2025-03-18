import styles from './book-card.module.css';

type BookCardProps = {
  id: number;
  img: string;
  title: string;
  author: string;
  description: string;
  price: number;
  onAddToCart?: (id: number) => void;
  onRemoveFromCart?: (id: number) => void;
};

export function BookCard({
  id,
  img,
  title,
  author,
  description,
  price,
  onAddToCart,
  onRemoveFromCart,
}: BookCardProps) {
  function onHandleClick(id: number) {
    if (onAddToCart)  onAddToCart(id);
    if (onRemoveFromCart) onRemoveFromCart(id);
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={img}
        alt="Обложка книги"
        width={240}
        height={345}
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.author}>{author}</p>
      <p className={styles.description}>{description}</p>
      <span className={styles.price}>`Цена: {price} &#8381;`</span>
      <button
        className={styles.onAddToCart}
        type="button"
        onClick={() => onHandleClick(id)}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

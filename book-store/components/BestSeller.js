import Link from 'next/link'

import Books from "../src/pages/api/amazon-books.json";
import styles from "@/styles/BestSeller.module.css";

export default function BestSeller() {
  const data = Books.books;

  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Best Sellers</h2>
        <Link href="/AllBestSellers"><h3 className={styles.viewer}>View All</h3></Link>
      </div>
      <div className={styles.card}>
        {data.map(
          (book, idx) =>
            idx < 4 && (
              <div className={styles.book} key={book.id}>
                <div>
                  <img src={book.thumbnailUrl} alt={book.title} width={150} />
                </div>
                <div className={styles.information}>
                  <div className={styles.title}>{book.title}</div>
                  <div className={styles.author}>{book.authors[0]}</div>
                  <div className={styles.price}>{book.price} $</div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import Books from "./api/amazon-books.json";
import styles from "@/styles/AllBestSellers.module.css";
import Navbar from "./Navbar";

export default function AllBestSellers() {
  const data = Books.books;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.heading}>
            <Link href="/Home">
              <h3 className={styles.title}> &#60; Best Sellers</h3>
            </Link>
          </div>
          <div className={styles.card}>
            {data.map((book, idx) => (
              <Link href={"books/" + book._id}>
                <div className={styles.book} key={idx}>
                  <div>
                    <img src={book.thumbnailUrl} alt={book.title} width="65%" />
                  </div>
                  <div className={styles.information}>
                    <div className={styles.text}>
                    <div className={styles.title}>{book.title}</div>
                    <div className={styles.author}>{book.authors[0]}</div>
                    </div>
                    <div className={styles.price}>{book.price}$</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Link from "next/link";
import styles from "@/styles/Detail.module.css";
import Navbar from "../Navbar";

import Books from "../api/amazon-books.json";

export default function BookDetail() {
  const [book, setBook] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const data = Books.books;

    let bookData = data.find((books) => books._id == id);
    setBook(bookData);

    console.log("boook data", bookData);
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <Link href="/AllBestSellers">
              <h3 className={styles.title}> &#60; Book Details</h3>
            </Link>
          </div>
          <div className={styles.book}>
            <div className={styles.pictureArea}>
              <img className={styles.picture} src={book?.thumbnailUrl} />
            </div>

            <div className={styles.information}>
              <div className={styles.title}>{book?.title} </div>
              <div className={styles.author}>{book?.authors} </div>
              <h3 className={styles.summary}>Summary</h3>
              <div className={styles.description}>{book?.longDescription} </div>
            </div>
          </div>
          <button className={styles.button}>
            <p className={styles.buttontxt}>{book?.price}</p>
            <p className={styles.buttontxt}>Buy Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}

//return <div>{book?.title} </div>;

import styles from "@/styles/Login.module.css";
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className={styles.board}>
      <div className={styles.picture}>
        <img
          src="https://i.pinimg.com/736x/32/8f/bf/328fbf1a0e456a170df7251ff0c4187d.jpg"
          alt="Book Store Photo"
          height="100%"
        />
      </div>
      <div className={styles.panel}>
        <div className={styles.elements}>
          <div className={styles.logo}>
            <img
              src="https://thumbs.dreamstime.com/b/open-book-logo-book-icon-white-background-open-book-logo-book-icon-simple-vector-logo-125217776.jpg"
              alt="Book Store"
              width={150}
            />
          </div>
          <div className={styles.header}>
            <h4 className={styles.heading}>Welcome Back!</h4>
            <h2 className={styles.information}>Login to your account</h2>
          </div>
          <form action="/api/users" method="POST">
            <label className={styles.label}>Name</label>
            <br />
            <input className={styles.input} type="text" name="name" placeholder="John Doe" required/>
            <br />
            <label className={styles.label}>Email</label>
            <br />
            <input className={styles.input} type="email" name="email" placeholder="john@mail.com" required/>
            <br />
            <label className={styles.label}>Password</label>
            <br />
            <input className={styles.input} type="password" name="password" placeholder="* * * * * * * *" required/>
            <br />

            <button className={styles.orangebtn}><p className={styles.buttontxt}>Register</p></button>
            <br />
            <button className={styles.whitebtn}><p className={styles.buttontxt}> <Link href="/SignIn">Login</Link></p></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

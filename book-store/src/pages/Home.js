import BestSeller from "./BestSeller";
import CarouselPhoto from "./CarouselPhoto";
import Navbar from "./Navbar";
import styles from "@/styles/Home.module.css";
const Home = () => {
    return (
      <div className={styles.home}>
        <Navbar/>
        <CarouselPhoto/>
        <BestSeller/>
      </div>
    );
  };
  
export default Home;
  
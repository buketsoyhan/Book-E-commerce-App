import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "@/styles/Carousel.module.css";
export default function CarouselPhoto() {
    return (
        <div className={styles.container}>
          <Carousel showArrows={false} showThumbs={false} dynamicHeight={true}>
              <div>
                  <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80" />
              </div>
              <div>
                  <img src="https://wallpaper.dog/large/20513274.jpg"/>
              </div>
              <div>
                  <img src="https://i.pinimg.com/originals/82/83/44/828344be9ab21e7eeb3d25cabc7bfb02.jpg"/>
              </div>
          </Carousel>
        </div>
    );
}

import styles from "./TitleFrame.module.scss";
import Image from "next/image";
import arrow from "@/assets/arrow.svg";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";

const TitleFrame = () => {
  return (
    <div className={styles.title_frame}>
      <h1 className={styles.title}>Всё для комфортной работы</h1>
      <Image
        src={arrow}
        alt="Arrow"
        className={styles.img}
        width={40}
        height={16}
      />
      <aside>
        <div className={styles.banner}>
          <Image
            src={banner1}
            alt="Banner1"
            className={styles.banner_img}
            width={165}
            height={140}
          />
          <div className={styles.banner_desc}>
            <div className={styles.circle}></div>
            <div className={styles.sale}>
              <h3 className={styles.sale_percent}>- 25%</h3>
              <h3 className={styles.sale_desc}>на товары для кабинета</h3>
              <h6 className={styles.sale_chose}>Выбрать</h6>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.banner_desc2}>
            <div className={styles.sale2}>
              <h3 className={styles.sale_percent}>10%</h3>
            </div>
            <div className={styles.circle2}></div>
            <div className={styles.sale_title}>
              <h3 className={styles.sale_desc2}>Скидка</h3>
              <h3 className={styles.sale_desc2}>на периферию для компьютера</h3>
              <h6 className={styles.sale_chose2}>Выбрать</h6>
            </div>
          </div>
          <Image
            src={banner2}
            alt="Banner1"
            className={styles.banner_img}
            width={185}
            height={140}
          />
        </div>
      </aside>
    </div>
  );
};

export default TitleFrame;

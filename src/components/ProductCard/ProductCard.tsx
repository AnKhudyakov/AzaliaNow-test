import styles from "./ProductCard.module.scss";
import Image from "next/image";
import favor from "@/assets/favor.png";
import Button from "../Button/Button";
import Count from "../Count/Count";
import { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import hit from "@/assets/hit.svg";
import favorFill from "@/assets/favorfill.png";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import {
  addToCart,
  increaseCount,
  setFavoriteProducts,
  removeFavotiteProducts,
} from "../../state";

type Props = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const ProductCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const { id, title, price, description, category, image, rating } = props;
  const [countItem, setCountItem] = useState(1);
  const [favorIn, setfavorIn] = useState(false);
  const [cartIn, setCartIn] = useState(false);
  const item = {
    id,
    title,
    price,
    description,
    category,
    image,
    count: countItem,
  };

  const hadleFavor = () => {
    setfavorIn(!favorIn);
    if (favorIn) {
      dispatch(removeFavotiteProducts(item));
    } else {
      dispatch(setFavoriteProducts(item));
    }
  };

  const hadleAddtoCart = () => {
    let exist = false;
    cart.map((existItem) => {
      if (existItem.id === item.id) {
        exist = true;
        setCartIn(true);
        dispatch(increaseCount(item));
      }
    });
    if (!exist) {
      setCartIn(true);
      dispatch(addToCart(item));
    }
  };

  useEffect(() => {
    cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        setCartIn(true);
      } 
    });
  }, [item]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {rating.count > 300 && (
          <div className={styles.hit}>
            <Image src={hit} alt="Image hit" width={64} height={24} />
            <p className={styles.hit_title}>Хит</p>
          </div>
        )}
        <Image
          src={image}
          alt="Image product"
          className={styles.img}
          width={220}
          height={220}
          priority
        />
        <div className={styles.product_desc}>
          <div>
            <h5 className={styles.category}>{category}</h5>
            <Rating count={rating.count} rate={rating.rate} />
            <p>{title}</p>
            <p className={styles.desc}>{description.slice(0,120)}...</p>
          </div>
          <div>
            <div className={styles.price}>
              <h2>{(price * 70).toFixed(0)} ₽</h2>
              <h6 className={styles.per}>/шт.</h6>
            </div>
            <div className={styles.bottom}>
              {!cartIn ? (
                <div>
                  <div onClick={hadleAddtoCart}>
                    <Button cartIn={false} />
                  </div>
                  <Count countItem={countItem} setCountItem={setCountItem} />
                </div>
              ) : (
                <div onClick={hadleAddtoCart}>
                  <Button cartIn={true} />
                </div>
              )}

              <div onClick={hadleFavor}>
                {favorIn ? (
                  <Image
                    src={favorFill}
                    className={styles.favor}
                    alt="favor"
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image
                    src={favor}
                    className={styles.favor}
                    alt="favor"
                    width={40}
                    height={40}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

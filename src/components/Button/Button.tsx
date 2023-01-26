import styles from "./Button.module.scss";

const Button = (props: { cartIn: boolean }) => {
  const text = props.cartIn ? "В корзине" : "В корзину";

  return (
    <button
      className={props.cartIn ? styles.btn_after : styles.btn_before}
      disabled={props.cartIn}
    >
      {text}
    </button>
  );
};

export default Button;

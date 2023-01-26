import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Fetcher } from "../fetcher/Fetcher";
import TitleFrame from "@/components/TitleFrame/TitleFrame";
import { Provider } from "react-redux";
import cartReducer from "../state";
import { configureStore } from "@reduxjs/toolkit";
import type { Product } from "@/state";

type ResponseType = { data: Array<Product> };

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function Home(props: ResponseType) {
  const products = props.data;
  return (
    <Provider store={store}>
      <Head>
        <title>AzaliaNow</title>
        <meta name="description" content="Всё для комфортной работы" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <TitleFrame />
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                id = {product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      </main>
    </Provider>
  );
}

export async function getServerSideProps() {
  const data = await Fetcher.GetProducts();
  return {
    props: {
      data,
    },
  };
}

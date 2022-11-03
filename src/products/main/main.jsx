import { Fragment, useEffect, useState } from "react";

import api from "../../api";
import Product from "../../components/product";
import cls from "./main.module.scss";

const Main = () => {
  const [state, setState] = useState({ items: [] });

  const getProducts = async () => {
    const data = await api.get("/product");
    console.log(data.data.data);
    setState({ ...state, items: data.data.data });
    console.log(state);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Best gaming laptops</h1>
      <div className={cls["product-container"]}>
        {state.items.map((item, idx) => (
          <Fragment key={idx}>
            <Product item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Main;

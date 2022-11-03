import { useEffect, useState } from "react";

import api from "../../api";
import Product from "../../components/product";
import cls from "./main.module.scss";

const Main = () => {
  const { state, setState } = useState();
  useEffect(() => {
    const getProducts = async () => {
      const data = await api.get("/product");
      setState({ ...state, data: data.data.data });
    };
    getProducts();
  }, []);
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Best gaming laptops</h1>
      <div className={cls["product-container"]}>
        <Product />
      </div>
    </div>
  );
};

export default Main;

import Product from "../../components/product";
import cls from "./main.module.scss";

const Main = () => {
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Main component</h1>
      <div className={cls["product-container"]}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Main;

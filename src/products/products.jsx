import Main from "./main";
import cls from "./products.module.scss";

const Products = () => {
  return (
    <div className={cls.wrapper}>
      <navbar />
      <div className={cls.container}>
        <div className={cls.sidebar}></div>
        <div className={cls.main}>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Products;

import cls from "./product.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
const Product = () => {
  const { productID } = useParams();

  console.log(productID);

  const product=axios.get("")


  return (
    <div className={cls.product}>
      <div className={cls.image}>
        <img
          src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg"
          alt=""
        />
      </div>
      <div className={cls.info}>
        <h3 className={cls.title}>Apple</h3>
        <p className={cls.description}>Description</p>
        <div className={cls["price-box"]}>
          <span className={cls.sale}>$169.99</span>
          <span className={cls.current}>$219.00</span>
        </div>
        <div className={cls.delivery}>Free shipping Free Gift</div>
        <div className={cls["buttons-box"]}>
          <button className={cls.deal}>VIEW DEAL</button>
          <button className={cls.add}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

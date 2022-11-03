import cls from "./product.module.scss";
// import { useParams } from "react-router-dom";

const Product = ({ item }) => {
  // const { productID } = useParams();
  const productUrl = "https://profitmodel-server.herokuapp.com/api/product";
  return (
    <div className={cls.product}>
      <div className={cls.image}>
        <img
          src={productUrl + "/" + item.id + "/photo/" + item.photos[0].id}
          alt=""
        />
      </div>
      <div className={cls.info}>
        <h3 className={cls.title}>{item.name}</h3>
        <p className={cls.description}>{item.description}</p>
        <div className={cls["price-box"]}>
          <span className={cls.sale}>${item.priceList[0].price}</span>
          <span className={cls.current}>${item.priceList[0].realPrice}</span>
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

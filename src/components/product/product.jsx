import cls from "./product.module.scss";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import api from "../../api";

const Product = ({ item }) => {
  // const { productID } = useParams();

  // const product = async () =>
  //   await axios
  //     .get(`https://profitmodel-server.herokuapp.com/api/products/1`)
  //     .then((d) => {
  //       return d.data;
  //     })
  //     .catch((err) => console.log(err.message));

  // console.log(productID);
  // console.log(product());

  return (
    <div className={cls.product}>
      <div className={cls.image}>
        <img
          src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg"
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

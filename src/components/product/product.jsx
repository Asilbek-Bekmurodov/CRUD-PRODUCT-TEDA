import api from "../../api";
import cls from "./product.module.scss";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const productUrl = "https://profitmodel-server.herokuapp.com/api/product";
  const navigate = useNavigate();

  const handleDelete = (id) => {
    api
      .delete(`/product/${id}`)
      .then((res) => {
        console.log(res);
        window.location.pathname = "/products";
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("this id deleted", id);
  };

  const handleEdit = (item) => {
    navigate("/edit", { state: { id: item } });
  };
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
        <div className={cls.delivery}>
          <i class="fa-solid fa-truck-fast"></i>
          Free shippings
          <i class="fa-solid fa-gift"></i>
          Free Gift
        </div>
        <div className={cls["buttons-box"]}>
          <button onClick={() => handleEdit(item)} className={cls.deal}>
            Edit Product
          </button>
          <button onClick={() => handleDelete(item.id)} className={cls.add}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

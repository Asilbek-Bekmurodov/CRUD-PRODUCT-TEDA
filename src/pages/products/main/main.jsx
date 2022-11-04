import { Button } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../../api";
import Product from "../../../components/product";
import cls from "./main.module.scss";

const Main = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    api
      .get("/product")
      .then((res) => {
        console.log(res.data.data.content);
        setData({ items: res.data.data.content });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Best Product Market</h1>
      <Button
        sx={{ marginRight: 2 }}
        variant="contained"
        type="button"
        color="error"
        onClick={() => navigate("/")}
      >
        Log out
      </Button>
      <Button
        variant="contained"
        color={"primary"}
        onClick={() => navigate("/add")}
      >
        Add Product
      </Button>
      <div className={cls["product-container"]}>
        <div className={cls["div-transform"]}>
          {data.items.length !== 0 ? (
            data.items.map((item, idx) => (
              <Fragment key={idx}>
                <Product item={item} />
              </Fragment>
            ))
          ) : (
            <h2>NO PRODUCTS YET</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;

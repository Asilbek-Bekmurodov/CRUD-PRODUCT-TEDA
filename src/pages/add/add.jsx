import { Button, Input } from "antd";

import { Controller, useForm } from "react-hook-form";
import api from "../../api";
import cls from "./add.module.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const Add = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const photo = useRef(null);
  let formData = new FormData();
  const navigate = useNavigate();

  const onSubmit = async ({
    name,
    description,
    price,
    discount,
    measurementId,
    brandId,
    categoryId,
  }) => {
    formData.append("name", name);
    formData.append("description", description);
    formData.append("categoryId", categoryId);
    formData.append("brandId", brandId);
    formData.append("measurementId", measurementId);
    formData.append("discount", discount);
    formData.append("priceList[0].type", "BANK");
    formData.append("priceList[0].price", price);
    formData.append("photos[]", photo.current.input.files[0]);
    addProduct();
  };

  const addProduct = async () => {
    api
      .post("/product", formData)
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={cls.wrapper}>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <>
              <label>name</label>
              <Input label="name" onChange={(e) => field.onChange(e)} />
              {errors && <p className={cls.error}>{errors.name?.message}</p>}
            </>
          )}
          control={control}
          defaultValue=""
          name="name"
          rules={{
            required: "To'ldirish shart",
          }}
        />

        <Controller
          render={({ field }) => (
            <>
              <label>description</label>
              <Input label="description" onChange={(e) => field.onChange(e)} />
              {errors && (
                <p className={cls.error}>{errors.description?.message}</p>
              )}
            </>
          )}
          control={control}
          defaultValue=""
          name="description"
          rules={{
            required: "To'ldirish shart",
          }}
        />

        <Controller
          render={({ field }) => (
            <>
              <label>categoryId</label>
              <Input
                type="number"
                label="categoryId"
                onChange={(e) => field.onChange(e)}
              />
              {errors && (
                <p className={cls.error}>{errors.categoryId?.message}</p>
              )}
            </>
          )}
          control={control}
          defaultValue=""
          name="categoryId"
          rules={{
            required: "To'ldirish shart !",
          }}
        />

        <Controller
          render={({ field }) => (
            <>
              <label>brandId</label>
              <Input
                type="number"
                label="categoryId"
                onChange={(e) => field.onChange(e)}
              />
              {errors && <p className={cls.error}>{errors.brandId?.message}</p>}
            </>
          )}
          control={control}
          defaultValue=""
          name="brandId"
          rules={{
            required: "To'ldirish shart !",
          }}
        />

        <Controller
          render={({ field }) => (
            <>
              <label>measurementId</label>
              <Input
                type="number"
                label="measurementId"
                onChange={(e) => field.onChange(e)}
              />
              {errors && (
                <p className={cls.error}>{errors.measurementId?.message}</p>
              )}
            </>
          )}
          control={control}
          defaultValue=""
          name="measurementId"
          rules={{
            required: "To'ldirish shart !",
          }}
        />

        <Controller
          render={({ field }) => (
            <>
              <label>discount</label>
              <Input
                type="number"
                label="discount"
                onChange={(e) => field.onChange(e)}
              />
              {errors && (
                <p className={cls.error}>{errors.discount?.message}</p>
              )}
            </>
          )}
          control={control}
          defaultValue=""
          name="discount"
          rules={{
            required: "To'ldirish shart !",
          }}
        />

        <Controller
          render={({ field }) => (
            <>
              <label>price</label>
              <Input
                type="number"
                label="price"
                onChange={(e) => field.onChange(e)}
              />
              {errors && <p className={cls.error}>{errors.price?.message}</p>}
            </>
          )}
          control={control}
          defaultValue=""
          name="price"
          rules={{
            required: "To'ldirish shart !",
          }}
        />

        <>
          <label>photos</label>
          <Input ref={photo} type="file" label="photos" />
        </>

        <Button type="primary" onClick={handleSubmit(onSubmit)}>
          CREATE
        </Button>

        <Button type="primary" onClick={() => navigate("/products")}>
          BACK
        </Button>
      </form>
    </div>
  );
};

export default Add;

import { Button, Input } from "antd";

import { Controller, useForm } from "react-hook-form";
import api from "../../api";
import cls from "./edit.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
const Edit = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
  const location = useLocation();
  const photo = useRef(null);

  let formData = new FormData();
  const navigate = useNavigate();
  console.log(location.state.id.id);

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
    editProduct();
  };

  const editProduct = async () => {
    api
      .put(`/product/${location.state.id.id}`, formData)
      .then(() => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={cls.wrapper}>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <>
              <label>name</label>
              <Input
                label="name"
                defaultValue={location.state.id.name}
                onChange={(e) => field.onChange(e)}
              />
              {errors && <p className={cls.error}>{errors.name?.message}</p>}
            </>
          )}
          control={control}
          defaultValue={location.state.id.name}
          name="name"
          rules={{
            required: "To'ldirish shart",
          }}
        />
        <Controller
          render={({ field }) => (
            <>
              <label>description</label>
              <Input
                defaultValue={location.state.id.description}
                label="description"
                onChange={(e) => field.onChange(e)}
              />
              {errors && (
                <p className={cls.error}>{errors.description?.message}</p>
              )}
            </>
          )}
          control={control}
          defaultValue={location.state.id.description}
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
                defaultValue={location.state.id.category.id}
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
          defaultValue={location.state.id.category.id}
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
                defaultValue={location.state.id.brand.id}
                type="number"
                label="categoryId"
                onChange={(e) => field.onChange(e)}
              />
              {errors && <p className={cls.error}>{errors.brandId?.message}</p>}
            </>
          )}
          control={control}
          defaultValue={location.state.id.brand.id}
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
                defaultValue={location.state.id.measurement.id}
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
          defaultValue={location.state.id.measurement.id}
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
                defaultValue={location.state.id.discount}
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
          defaultValue={location.state.id.discount}
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
                defaultValue={location.state.id.priceList[0].price}
                label="price"
                onChange={(e) => field.onChange(e)}
              />
              {errors && <p className={cls.error}>{errors.price?.message}</p>}
            </>
          )}
          control={control}
          defaultValue={location.state.id.priceList[0].price}
          name="price"
          rules={{
            required: "To'ldirish shart !",
          }}
        />
        <div>
          <label>photos</label>
          <Input ref={photo} type="file" label="photos" />
          {!photo.current && <p className={cls.error}>File yuklash kerak</p>}
        </div>

        <Button type="primary" onClick={handleSubmit(onSubmit)}>
          SAVE
        </Button>

        <Button type="primary" onClick={() => navigate("/products")}>
          BACK
        </Button>
      </form>
    </div>
  );
};

export default Edit;

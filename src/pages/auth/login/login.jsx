import cls from "./login.module.scss";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,

    control,
  } = useForm();

  const baseUrl = "https://profitmodel-server.herokuapp.com/api/auth/login";

  const onSubmit = async (data) => {
    const request = await axios
      .post(baseUrl, data)
      .then((res) => {
        localStorage.setItem("token", res.data.data);
        navigate("/products");
        return res.data.data;
      })
      .catch((errors) => {
        console.log(errors);
      });

    console.log(request);
  };

  return (
    <div className={cls.login}>
      <h1 className={cls.title}>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              variant="standard"
              id="standard-basic"
              name={field.name}
              label="Your phone"
              fullWidth={true}
              className={cls.input}
              onChange={(e) => field.onChange(e)}
              onBlur={(e) => field.onBlur(e)}
              helperText={errors.phone?.message}
              error={!!errors.phone?.message}
              sx={{
                marginBottom: 2,
              }}
            />
          )}
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: "To'dirilishi shart !",
            minLength: {
              value: 5,
              message: "Minimum 5 xona",
            },
          }}
        />

        <Controller
          render={({ field }) => (
            <TextField
              inputProps={{ inputMode: "password", pattern: "[0-9]*" }}
              id="outlined-adornment-password"
              variant="standard"
              type={field.showPassword ? "text" : "password"}
              value={field.password}
              name={field.name}
              autoComplete="on"
              label="Your password"
              fullWidth={true}
              className={cls.input}
              onChange={(e) => field.onChange(e)}
              onBlur={(e) => field.onBlur(e)}
              helperText={errors.password?.message}
              error={!!errors.password?.message}
              sx={{
                marginBottom: 4,
              }}
            />
          )}
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "To'dirilishi shart !",
            minLength: {
              value: 3,
              message: "Minimum 3 xona",
            },
          }}
        />

        <Button
          variant="contained"
          fullWidth={true}
          color={"primary"}
          type="submit"
          // disabled={!isValid}
          sx={{
            borderTop: 2,
          }}
        >
          LOGIN
        </Button>
      </form>
    </div>
  );
};

export default Login;

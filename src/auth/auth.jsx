import Login from "./login";
import cls from "./auth.module.scss";

const Auth = () => {
  return (
    <div className={cls["auth-page"]}>
      <div className={cls.shape}></div>
      <Login />
    </div>
  );
};

export default Auth;

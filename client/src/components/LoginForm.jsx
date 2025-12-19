import Button from "./Button.jsx";
import Input from "./Input.jsx";
import PasswordInput from "./PasswordInput.jsx";

export default function LoginForm(params) {
  return (
    <>
      <div className="container">
        <div className="register-block content-block">
          <h1 className="text-center mb-3">Форма авторизації</h1>
          <form>
						<label htmlFor="email">Email</label>
						<Input
							id="email"
							type="email"
							maxLength={254}
							placeholder="Вкажіть email-адресу тут"
						/>

            <label htmlFor="password">Пароль</label>
            <PasswordInput
              id="password"
              maxLength={20}
              placeholder="Вкажіть пароль тут"
            />

            <Button
              className="button button-center mt-3"
              text="Зареєструватися"
              type="submit"
            ></Button>
          </form>
        </div>
      </div>
    </>
  );
}

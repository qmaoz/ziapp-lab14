import Button from "./Button.jsx";
import Input from "./Input.jsx";
import PasswordInput from "./PasswordInput.jsx";

export default function RegisterForm(params) {
  return (
    <>
      <div className="container">
        <div className="register-block content-block">
          <h2 className="text-center mb-3">Форма реєстрації</h2>
          <form>
            <label htmlFor="username">Ім’я користувача</label>
            <Input
              id="username"
              type="text"
              maxLength={20}
              placeholder="Вкажіть ім’я користувача тут"
            />

            <label htmlFor="password">Пароль</label>
            <PasswordInput
              id="password"
              maxLength={20}
              placeholder="Вкажіть пароль тут"
            />

            <label htmlFor="password-confirmation">Підтвердження паролю</label>
            <PasswordInput
              id="password-confirmation"
              maxLength={20}
              placeholder="Повторіть пароль"
            />

            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              maxLength={254}
              placeholder="Вкажіть email-адресу тут"
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

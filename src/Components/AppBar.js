import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <NavLink exact to="/register">
        Регистрация
      </NavLink>
      <NavLink exact to="/login">
        Логин
      </NavLink>
    </>
  );
};

export default AppBar;

import logo from "../static/logo.jpeg";

const Header = () => {
  return (
    <span className="header">
      <img src={logo} className="header__img" />
      <span className="header__span">오늘 할 일</span>
      <span></span>
    </span>
  );
};

export default Header;

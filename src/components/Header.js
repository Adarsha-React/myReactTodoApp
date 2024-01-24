import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  return (
    <div>
      <h3>Testing App</h3>
    </div>
  );
};

const Header = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div className="navbar">
      <Title />
      <ul className="list-item">
        <li>{user.name}</li>
        <li>
          <Link to={"/"}>Home </Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/todo"}>Todos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          {" "}
          <img width={40} height={40} src="/img/logo.png" alt="Logotype" />
        </Link>
        <div>
          <h3 className="text-uppercase">Reactive sneakers </h3>
          <p className="opacity-5">The best sneakers shop</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-20 cu-p ">
          <img width={18} height={18} src="/img/newcart.svg" alt="carttype" />
          <span>1205 lei.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="/img/heartfav.svg"
              alt="hearttype"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.png" alt="usertype" />
        </li>
      </ul>
    </header>
  );
}
export default Header;

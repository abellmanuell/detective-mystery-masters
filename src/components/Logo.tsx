import { Link } from "react-router";
import DMMLogo from "../assets/images/logo.svg";

const Logo = () => (
  <Link to="/">
    <img
      src={DMMLogo}
      alt="Detective Mystery Masters Logo"
      width={72}
      height={36}
    />
  </Link>
);

export { Logo };

import HeaderCart from "./HeaderCart";
import "./Navbar.css";

const Navbar = () => {
	return (
		<>
			<header className="header">
				<h2>ReactMeals</h2>
				<HeaderCart />
			</header>
		</>
	);
};

export default Navbar;

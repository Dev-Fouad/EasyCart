import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";
import logo from "../Assets/Artboard 1 5.png"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<img src={logo} alt=""></img>

			<nav ref={navRef}>
				<a href="/#" className="first">Home</a>
				<a href="/#">Blog</a>
				<a href="/#">About Us</a>
				<a href="/#">Pricing</a>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;

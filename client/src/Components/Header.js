import React from 'react';
import Logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
	return (
		<header>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
				integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
				crossorigin="anonymous"
				referrerpolicy="no-referrer"
			/>
			<nav className="container flex items-center py-4 mt-4 sm:mt-12">
				<div className="py-1">
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
				</div>
				<ul
					style={{ fontSize: '20px' }}
					className="hidden sm:flex flex-1 justify-end item-center align-middle gap-12 text-black font-Bebas uppercase"
				>
					<ScrollLink to="help" smooth={true}>
						<li
							onclick="smoothScroll(document.getElementById('help'))"
							className="cursor-pointer pt-3 text-xl"
						>
							Help
						</li>
					</ScrollLink>
					<Link to="/modules">
						<li className="cursor-pointer pt-3 text-lg">Our Modules</li>
					</Link>
					<ScrollLink to="contact" smooth={true}>
						<li className="cursor-pointer pt-3 text-lg">Contact Us</li>
					</ScrollLink>

					<button
						type="button"
						className="btn text-white text-sm bg-blue-400 hover:duration-300 hover:bg-sky-700 shadow-sm hover:shadow-lg hover:text-white rounded-md uppercase"
					>
						Login
					</button>
				</ul>
				<div className="flex sm:hidden flex-1 justify-end">
					<i class="text-3xl fa-solid fa-bars"></i>
				</div>
			</nav>
		</header>
	);
}

export default Header;

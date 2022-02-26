import React, { useState } from 'react';
import Modal from 'react-modal';

function LoginModal() {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState({
		email: "",
		full_name: "",
		password: "",
	});

	const { email, full_name, password } = text;

	const handleChange = (e) => {
		setText({
			...text,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { email, full_name, password }
			console.log(body);
			const res = await fetch("http://localhost:5000/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body),
			})

			const data = await res.json();

			localStorage.setItem('token', data.token);
		} catch (err) {
			console.error(err.message);
		}
	}


	return (
		<div>
			<Modal isOpen={open}
				style={{
					overlay: {
						width: '450px',
						height: '450px',
						backgroundColor: 'rgba(255, 255, 255, 0.75)',
					},
					content: {
						position: 'absolute',
						top: '40px',
						left: '40px',
						right: '40px',
						bottom: '40px',
						border: '1px solid #ccc',
						background: '#fff',
						overflow: 'auto',
						borderRadius: '4px',
						outline: 'none',
						padding: '20px',
					},
				}}
			>
				<form autoComplete='off' onSubmit={handleSubmit}>
					<div>
						<h2>Email</h2>
						<input
							className="border-solid border-slate-400 border-2 shadow-md"
							placeholder=" "  
							type="email"
							value={email}
							name="email"
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<h2>Full name</h2>
						<input
							className="border-solid border-slate-400 border-2 shadow-md"
							placeholder=" "  
							type="text"
							value={full_name}
							name="full_name"
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div>
						<h2>Password</h2>
						<input
							className="border-solid border-slate-400 border-2 shadow-md"
							placeholder=" "  
							type="password"
							value={password}
							name="password"
							onChange={e => handleChange(e)}
						/>
					</div>
					<button type='submit'>Sign Up</button>
				</form>
				<button onClick={() => setOpen(!open)}>Close me!</button>
			</Modal>
			<button onClick={() => setOpen(!open)}>Click me</button>
		</div>
	);
}

export default LoginModal;

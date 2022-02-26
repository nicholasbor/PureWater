import React, { useState } from 'react';
import Modal from 'react-modal';

function LoginModal() {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState('');

	return (
		<div>
			<Modal
				isOpen={open}
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
				<div>
					<h2>Email</h2>
					<input
						className="border-solid border-slate-400 border-2 shadow-md"
						type="text"
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div>
					<h2>Password</h2>
					<input
						className="border-solid border-slate-400 border-2 shadow-md"
						type="text"
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<button onClick={() => setOpen(!open)}>Close me!</button>
			</Modal>
			<button onClick={() => setOpen(!open)}>Click me</button>
		</div>
	);
}

export default LoginModal;

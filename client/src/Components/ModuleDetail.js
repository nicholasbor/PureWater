import React, { useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import MultiChoice from './MultiChoice';

const ModuleDetail = () => {
	const { name, id } = useParams();

	console.log(name);

	const submitResults = () => {
		alert('Result Submitted!');
	};

	useEffect(() => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}, []);

	return (
		<>
			<Header />
			<div class="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
				<div class="max-w-prose mx-auto lg:text-lg"></div>
				<div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
					<h1>
						Module {id} :{' '}
						{name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')}
					</h1>
					<p class="lead">
						PureWater provides users a platform to engage in educational water sanitation content. 
						Aligning with the United Nations Sustainable Development Goals of good health and well-being, clean water and sanitation and reducing inequalities, 
						our platform acts as a bridge to provide quality education whilst simultaneously tackling these issues. 
						As civilisation progresses, the necessity to carefully manage our supply for future generations is highly important. 
						Teaching effective sanitation techniques and purification processes will aid towards this common goal and allow for increased quality of life for all.
					</p>
					<h2>Water Sources</h2>
					<p className="">
						Water sources are classified according to their geographical
						location
					</p>
					<ol>
						<li>Rainwater;</li>
						<li>
							Surface water - this comes from surface runoff and groundwater;
							and.
						</li>
						<li>Groundwater (Springs/wells) </li>
					</ol>
					<h3>Task: Draw a map indicating your water source. </h3>
					<form action="/action_page.php">
						<label for="img">Select image: </label>
						<input
							className="not-prose form-control
      block
      w-full
      px-2
      py-1
      text-sm
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							type="file"
							id="img"
							name="img"
							accept="image/*"
						/>
					</form>
					<h3>Task: Assess the reliability of your water sources </h3>
					<p>
						{' '}
						On a scale of 1 to 5, 1 being the lowest and 5 being the highest,
						rate the reliability of your water source in terms of the indicated
						usage. Consider the reasons for your indicated usage.
					</p>
					<table>
						<thead>
							<tr>
								<th>Water Usage</th>
								<th>Source</th>
								<th>Reliability Rating</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>For drinking</td>
								<td>
									<input type="text" />
								</td>
								<td>
									{' '}
									<input
										type="range"
										id="drink"
										name="drink"
										min="0"
										max="5"
										oninput="this.nextElementSibling.value = this.value"
									/>{' '}
								</td>
							</tr>

							<tr>
								<td>For cooking</td>
								<td>
									<input type="text" />
								</td>
								<td>
									{' '}
									<input
										type="range"
										id="drink"
										name="drink"
										min="0"
										max="5"
										oninput="this.nextElementSibling.value = this.value"
									/>{' '}
								</td>
							</tr>

							<tr>
								<td>For washing</td>
								<td>
									<input type="text" />
								</td>
								<td>
									{' '}
									<input
										type="range"
										id="drink"
										name="drink"
										min="0"
										max="5"
										oninput="this.nextElementSibling.value = this.value"
									/>{' '}
								</td>
							</tr>

							<tr>
								<td>Other utilities</td>
								<td>
									<input type="text" />
								</td>
								<td>
									{' '}
									<input
										type="range"
										id="drink"
										name="drink"
										min="0"
										max="5"
										oninput="this.nextElementSibling.value = this.value"
									/>{' '}
								</td>
							</tr>
						</tbody>
					</table>
					<h3>Quiz</h3>
				</div>

				<MultiChoice />
				<button
					onClick={() => submitResults()}
					className="bg-sky-500 p-4 m-6 text-white rounded-lg flex items-center justify-center mx-auto"
				>
					Submit Module
				</button>
				<div className="flex flex-col max-w-2xl w-full mx-auto">
					<div className="mt-20 font-bold text-gray-700 px-5 lg:text-lg">
						<h3>Comments</h3>
					</div>
					<div class="mt-3 p-3 w-full focus-within:border-blue-600">
						<textarea
							rows="3"
							class="border p-2 rounded w-full focus:outline-none"
							placeholder="Add comment here"
						></textarea>
					</div>

					<div>
						<button
							class="mx-4 px-5 py-1 bg-blue-600 text-white rounded hover:shadow-md shadow-sm hover:bg-blue-500"
							type="submit"
							onClick={() => alert('You are not logged in!')}
						>
							Post
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModuleDetail;

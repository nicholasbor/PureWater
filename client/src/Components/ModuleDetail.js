import React from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import MultiChoice from './MultiChoice';

const ModuleDetail = () => {
	const { name } = useParams();

	console.log(name);

	return (
<<<<<<< Updated upstream
		<>
		<Header/>
		<div class="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
    <div class="max-w-prose mx-auto lg:text-lg">
    </div>
    <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">

		<h1>Module 1 : Water Resources and Accessibility</h1>
      <p class="lead">This module is intended to help students understand and gain basic knowledge on how water is cascaded to our houses for consumption. They will be able to appreciate the constrigency of water extraction and conveyance.</p>
      <h2>Water Sources</h2>
      <p className=''>Water sources are classified according to their geographical location</p>
      <ol>
        <li>Rainwater;</li>
        <li>Surface water - this comes from surface runoff and groundwater; and.</li>
        <li>Groundwater (Springs/wells) </li>
      </ol>
      <h3>Task: Draw a map indicating your water source. </h3>
	  <form action="/action_page.php">
  <label for="img">Select image: </label>
  <input className='not-prose form-control
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'type="file" id="img" name="img" accept="image/*"/>
</form>
<h3>Task: Assess the reliability of your water sources </h3>
<p> On a scale of 1 to 5, 1 being the lowest and 5 being the highest, rate the reliability of your water source in terms of the indicated usage. Consider the reasons for your indicated usage.</p>
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
            <td><input type="text"/></td>
            <td>  <input type="range" id="drink" name="drink"
         min="0" max="5" oninput="this.nextElementSibling.value = this.value" /> </td>
          </tr>

		  <tr>
            <td>For cooking</td>
            <td><input type="text"/></td>
            <td>  <input type="range" id="drink" name="drink"
         min="0" max="5" oninput="this.nextElementSibling.value = this.value" /> </td>
          </tr>

		  <tr>
            <td>For washing</td>
            <td><input type="text"/></td>
            <td>  <input type="range" id="drink" name="drink"
         min="0" max="5" oninput="this.nextElementSibling.value = this.value" /> </td>
          </tr>

		  <tr>
            <td>Other utilities</td>
            <td><input type="text"/></td>
            <td>  <input type="range" id="drink" name="drink"
         min="0" max="5" oninput="this.nextElementSibling.value = this.value" /> </td>
          </tr>
        </tbody>
      </table>

	  <button>Submit Module</button>
      
    </div>
  </div>

  

		</>
=======
		<div>
			<h2>Hello {name} </h2>
			<MultiChoice />
		</div>
>>>>>>> Stashed changes
	);
};

export default ModuleDetail;

import React, { useState } from 'react';
import Scoreboard from './Scoreboard';

function MultiChoice() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const questions = [
		{
			questionText: 'What is H20?',
			answerOptions: [
				{ answerText: 'Water', isCorrect: true },
				{ answerText: 'Juice', isCorrect: false },
				{ answerText: 'Sprite', isCorrect: false },
				{ answerText: 'Not sure!', isCorrect: false },
			],
		},
		{
			questionText: 'What are some factors in choosing water sources',
			answerOptions: [
				{ answerText: 'Adaptability', isCorrect: false },
				{ answerText: 'Costs', isCorrect: true },
				{ answerText: 'Creativity', isCorrect: false },
				{ answerText: 'Water Flow', isCorrect: false },
			],
		},
		{
			questionText: 'What are some factors in choosing water sources',
			answerOptions: [
				{ answerText: 'Adaptability', isCorrect: false },
				{ answerText: 'Costs', isCorrect: true },
				{ answerText: 'Creativity', isCorrect: false },
				{ answerText: 'Water Flow', isCorrect: false },
			],
		},
		{
			questionText: 'What are some factors in choosing water sources',
			answerOptions: [
				{ answerText: 'Adaptability', isCorrect: false },
				{ answerText: 'Costs', isCorrect: true },
				{ answerText: 'Creativity', isCorrect: false },
				{ answerText: 'Water Flow', isCorrect: false },
			],
		},
		{
			questionText: 'What are some factors in choosing water sources',
			answerOptions: [
				{ answerText: 'Adaptability', isCorrect: false },
				{ answerText: 'Costs', isCorrect: true },
				{ answerText: 'Creativity', isCorrect: false },
				{ answerText: 'Water Flow', isCorrect: false },
			],
		},
	];

	const handleAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowScore(true);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-center w-max">
				<h3 className="text-Bebas text-grey-400 text-Bebas">
					Question {currentQuestion + 1}
				</h3>
				<h2 className="text-Bebas font-bold whitespace-nowrap w-max text-Bebas">
					{questions[currentQuestion].questionText}
				</h2>
			</div>
			<div className="grid gap-4 grid-cols-2 grid-rows-2 w-3/5">
				{questions[currentQuestion].answerOptions.map((answer) => (
					<div
						className="flex flex-wrap m-6 bg-sky-500 w-4/5 h-14 rounded-lg justify-center item-center cursor-pointer hover:bg-indigo-600"
						onClick={() => handleAnswer(answer.isCorrect)}
					>
						<div className="flex justify-center items-center">
							{answer.answerText}
						</div>
					</div>
				))}
			</div>
			{showScore && (
				<div>
					<Scoreboard score={score} questions={questions} />
				</div>
			)}
		</div>
	);
}

export default MultiChoice;

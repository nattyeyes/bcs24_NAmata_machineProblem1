// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: Computation of Grades using Function
	Programmer: Nathan B. Amata
	Section: BCS24
	Start Date: April 17, 2023
	End Date: April 20, 2023
*/

function student(name, enab1, enab2, enab3, enab4, enab5, summ1, summ2, summ3, exam) {
	this.Name = name;
	this.ClassParticipation = Math.round((enab1 + enab2 + enab3 + enab4 + enab5) / 5);
	this.SummativeAssessment = Math.round((summ1 + summ2 + summ3) / 3);
	this.ExamGrade = Math.round(exam);
	this.GradeScore = Math.round((this.ClassParticipation * 0.3) + (this.SummativeAssessment * 0.3) + (this.ExamGrade * 0.4));
	this.LetterGrade = getLetterGrade(this.GradeScore);
};

function getLetterGrade(grade) {
	if (90 <= grade && grade <= 100) {
		return 'A';
	} else if (80 <= grade && grade <= 89) {
		return 'B';
	} else if (70 <= grade && grade <= 79) {
		return 'C';
	} else if (60 <= grade && grade <= 69) {
		return 'D';
	} else if (grade < 60) {
		return 'F';
	} else {
		console.log("Invalid grade!");
	};
};

function studentGradeProgram(iterations) {
	let studentList = [];
	
	for (x = 0; x < iterations; x++) {
		let nameInput = prompt(`Enter the student ${x+1}'s name.`);
		let enab1Input = Number(prompt(`Enter ${nameInput}'s Enabling Assessment 1 grade.`));
		let enab2Input = Number(prompt(`Enter ${nameInput}'s Enabling Assessment 2 grade.`));
		let enab3Input = Number(prompt(`Enter ${nameInput}'s Enabling Assessment 3 grade.`));
		let enab4Input = Number(prompt(`Enter ${nameInput}'s Enabling Assessment 4 grade.`));
		let enab5Input = Number(prompt(`Enter ${nameInput}'s Enabling Assessment 5 grade.`));
		let summ1Input = Number(prompt(`Enter ${nameInput}'s Summative Assessment 1 grade.`));
		let summ2Input = Number(prompt(`Enter ${nameInput}'s Summative Assessment 2 grade.`));
		let summ3Input = Number(prompt(`Enter ${nameInput}'s Summative Assessment 3 grade.`));
		let examInput = Number(prompt(`Enter ${nameInput}'s Major Exam grade.`));
		
		studentList.push(new student(nameInput, enab1Input, enab2Input, enab3Input, enab4Input, enab5Input, summ1Input, summ2Input, summ3Input, examInput));
	}
	
	console.table(studentList);
};

studentGradeProgram(5);

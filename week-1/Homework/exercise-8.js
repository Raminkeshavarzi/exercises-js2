/* Challenge Mentors

Write all your code at the end of the file

// 1. Loop through the array, and for each object, `console.log()` out the sentence only for
// mentors that are in Barcelona and one of the skills is React
// "Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

// 2. To those that work in Barcelona, set "Jun1" in the class attribute,
// and add a new skill to the list "SQL".
// To add elements in an array you can use.push()
// var animals = ["dog", "cat"];
// animals.push("horse"); //["dog","cat","horse"]

// let sequence = [1, 2, 3];
// sequence.push(4);
// sequence.push(5);
// console.log(sequence);
// // → [1, 2, 3, 4, 5]

// 3. Create an object method with the name.addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/

var mentors = [
	{
		firstName: 'Antonio',
		lastName: 'Miranda',
		skills: [ 'JS', 'React', 'Node' ],
		class: 'Mar1',
		studentLikes: 0,
		job: {
			company: 'Google',
			position: 'Senior developer',
			city: 'Barcelona'
		},
		addSkill(mentors, newSkill) {
			// step 3
			if (mentors === this.firstName || mentors === this.lastName) {
				return this.skills.push(newSkill);
			}
		},
		removeSkill(mentors, newSkill) {
			//step 5
			if (mentors === this.firstName || mentors === this.lastName) {
				if (this.skills.includes(newSkill)) {
					this.skills.pop();
				}
			}
		},
		addStudentLikes(mentors, number) {
			// Step 7
			if (mentors === this.firstName || mentors === this.lastName) {
				return (this.studentLikes = number);
			}
		}
	},
	{
		firstName: 'Leo',
		lastName: 'Messi',
		skills: [ 'Play football' ],
		class: 'Mar3',
		studentLikes: 0,
		job: {
			company: 'FC Barcelona',
			position: 'Player',
			city: 'Barcelona'
		},
		addSkill(mentors, newSkill) {
			// step 3
			if (mentors === this.firstName || mentors === this.lastName) {
				return this.skills.push(newSkill);
			}
		},
		removeSkill(mentors, newSkill) {
			//step 5
			if (mentors === this.firstName || mentors === this.lastName) {
				if (this.skills.includes(newSkill)) {
					this.skills.pop();
				}
			}
		},
		addStudentLikes(mentors, number) {
			// Step 7
			if (mentors === this.firstName || mentors === this.lastName) {
				return (this.studentLikes = number);
			}
		}
	},
	{
		firstName: 'John',
		lastName: 'VanDamme',
		skills: [ 'React', 'Angular', 'Python', 'Node' ],
		class: 'Mar4',
		studentLikes: 0,
		job: {
			company: 'Facebook',
			position: 'Software Manager',
			city: 'Chicago'
		},
		addSkill(mentors, newSkill) {
			// step 3
			if (mentors === this.firstName || mentors === this.lastName) {
				return this.skills.push(newSkill);
			}
		},
		removeSkill(mentors, newSkill) {
			//step 5
			if (mentors === this.firstName || mentors === this.lastName) {
				if (this.skills.includes(newSkill)) {
					this.skills.pop();
				}
			}
		},
		addStudentLikes(mentors, number) {
			// Step 7
			if (mentors === this.firstName || mentors === this.lastName) {
				return (this.studentLikes = number);
			}
		}
	},
	{
		firstName: 'Giorgio',
		lastName: 'Polvara',
		skills: [ 'HTML', 'JS', 'React' ],
		class: 'Mar2',
		studentLikes: 0,
		job: {
			company: 'Amazon',
			position: 'Senior developer',
			city: 'Barcelona'
		},
		addSkill(mentors, newSkill) {
			// step 3
			if (mentors === this.firstName || mentors === this.lastName) {
				return this.skills.push(newSkill);
			}
		},
		removeSkill(mentors, newSkill) {
			//step 5
			if (mentors === this.firstName || mentors === this.lastName) {
				if (this.skills.includes(newSkill)) {
					this.skills.pop();
				}
			}
		},
		addStudentLikes(mentors, number) {
			// Step 7
			if (mentors === this.firstName || mentors === this.lastName) {
				return (this.studentLikes = number);
			}
		}
	}
];

//YOUR CODE HERE

const step1 = mentors.forEach((ele) => {
	if (ele.job.city === 'Barcelona' && ele.skills.includes('React')) {
		ele.class = 'Jun1'; // step 2
		ele.skills.push('SQL'); // step 2
		console.log(`Hi my name is ${ele.firstName} ${ele.lastName}. I work ${ele.job.city} and I know React`); // step 1
	}
});

const addSkill = (mentor, newSkill) => {
	// step 4
	mentors.forEach((ele) => {
		ele.addSkill(mentor, newSkill);
	});
};

const removeSkill = (mentor, newSkill) => {
	//step 5
	mentors.forEach((ele) => {
		ele.addSkill(mentor, newSkill);
	});
};

const mentorWithMoreSkills = (input) => {
	// Step 6
	let maxLength = 0;
	return input.forEach((ele) => {
		if (ele.skills.length <= mentors.length && ele.skills.length > 1) {
			console.log(`${ele.firstName} ${ele.lastName}. Number of skills ${ele.skills.length}`);
		}
	});
};

const addStudentLikes = (mentor, number) => {
	// Step 8
	mentors.forEach((ele) => {
		ele.addStudentLikes(mentor, number);
	});
};

addStudentLikes('Messi', 100);
addSkill('Antonio', 'React Native');
removeSkill('Antonio', 'React Native');
mentorWithMoreSkills(mentors);
addStudentLikes('Giorgio', 10);

console.log(mentors);

// ASK
// if (mentors === this.firstName || mentors === this.lastName) {
//   for (let i = 0; i < this.skills.length; i++) {
//     return this.skills.splice(this.skills[i], 1);
//   }
// }

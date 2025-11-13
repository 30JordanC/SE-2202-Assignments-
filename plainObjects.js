
/**
 * Define the Course and Assignment concepts using plain objects
 */

function Assignment(title,dueDate) //constructor function
{
    this.title = title;
    this.dueDate = dueDate;
    this.printAssignment = function()
    {
        console.log(`Title: ${this.title}, Due Date: ${this.dueDate}`);
    };//end printAssignment
}//end Assignment

function Course(courseName,instructor,creditHours, assignments = []) //constructor function
{
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.assignments = assignments;

    this.courseInfo = function() //method
    {
        console.log(`Course: ${this.courseName}| Instructor: ${this.instructor}| Credit Hours: ${this.creditHours}`);
        console.log("Assignments >>>");
        this.assignments.forEach(assignment => assignment.printAssignment()); //taught today in class, going to loop though the whole array
    };//end courseInfo
}//end Course

// Assignment objects
let a1 = new Assignment('Project Proposal', 'Jan 15');
let a2 = new Assignment('Midterm Report', 'Feb 20');
let a3 = new Assignment('Final Report', 'Mar 30');
let a4 = new Assignment('Presentation', 'Apr 10');

// Course objects
let c1 = new Course('Software Engineering','Dr. Pepper',3, [a1, a2]);
let c2 = new Course('Data Science','Dr. Evil',6, [a3,a4]);

// Display info
c1.courseInfo();
c2.courseInfo();

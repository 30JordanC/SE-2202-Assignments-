/**
 * Define the Course and Assignment concepts using the constructor functions
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

// create the objects using the constructor functions

let c1 = new Course('Software Engineering','Dr. Pepper',3);
let c2 = new Course('Data Science','Dr. Evil',6);

c1.courseInfo();
c2.courseInfo();


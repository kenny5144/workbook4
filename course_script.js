let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
}
];
function getCourseId(courses, CourseId){
    let result=[];
    let coursesNum = courses.length;
    for (let i = 0; i < coursesNum ; i++)
        if( courses[i].CourseId == CourseId){
            // result.push(courses[i]);
            result=courses[i].StartDate
        } 
        return result;
};

let courseStart =getCourseId(courses , "PROG200");
console.log(courseStart)
// let StartDateNum = courseStart.length;
// for (let i =0; i<StartDateNum; i++){
//     console.log(courseStart[i].StartDate)

// }

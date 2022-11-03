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

courses.sort(compareByTitleVerbose);

//console.log(courses);

courses.sort(compareByStartDate);

console.log(courses);

function compareByTitle(a,b){
    if (a.Title < b.Title) return -1;
    else if (a.Title == b.Title) return 0;
    else return 1; 
}


courses.sort(function(a,b){
    let adate = new Date(a.StartDate);
    let bdate = new Date(b.StartDate);
    if(adate < bdate) return -1;
    else if (adate == bdate) return 0;
    else return 1;
});

function compareByTitleVerbose(a,b){
    //a compare function should return a negative value if a and b are already in the correct order.
    if(a.Title < b.Title){
        return -1;
    }

    //a compare function should return 0 if a and b are considered equal.
    if(a.Title == b.Title){
        return 0;
    }

    //a compare function should return a positive value if a and b are NOT in the correct order, and should be reversed.
    if(a.Title > b.Title){
        return 1;
    }
}

function compareByStartDate(a ,b){
    let adate = new Date(a.StartDate);
    let bdate = new Date(b.StartDate);
    if(adate < bdate) return -1;
    else if (adate == bdate) return 0;
    else return 1;
}


let courseNum = courses.length;

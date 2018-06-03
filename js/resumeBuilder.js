/*
This is empty on purpose! Your code to build the resume will go here.
 *//*
 var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = newHTML.replace(/<|>/g,"")
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

var name = "Sriba Rajendran";
var role = "Front end developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

var bio = {
    "name" : "Sriba Rajendran",
    "role" : "Front end developer",
    "welcomemsg" : "Hello thank you for your time.",
    "biopic" : "images/fry.jpg",
    "contacts" : {
        "mobile" : "5512561424",
        "email" : "sribarajendran@gmail.com",
        "github" : "rsriba",
        "location" : "Seattle" },
    "skills" : ["JS", "HTML", "CSS", "awesomeness"]
}

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedcontact = HTMLcontactGeneric.replace("%contact%",bio.contacts);
    var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedskills = HTMLskills.replace("%data%",bio.skills);
    var formattedbiopic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedwelcomemsg = HTMLwelcomeMsg.replace("%data%",bio.welcomemsg);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
//    $("#topContacts").append(formattedcontact);
    $("#topContacts").append(formattedmobile);
    $("#footerContacts").append(formattedmobile);
    $("#topContacts,#footerContacts").append(formattedemail);
    $("#topContacts,#footerContacts").append(formattedgithub);
    $("#topContacts,#footerContacts").append(formattedlocation);
    $("#header").append(formattedwelcomemsg);
    $("#header").append(formattedbiopic);


var work = {
    "jobs" : [
        {
        "employer" : "Indian Institute of Technology - Madras",
        "title" : "Intern",
        "location" : "Chennai",
        "dates" : "May-June 2013",
        "description" : "Worked on Microarray data analysis"
        }
    ]
};

var projects = {
    "projects" : [
         {
        "title" : "Microarray data analysis",
        "dates" : "May-June 2013",
        "description" : "Data analysis",
        "images" : ["images/fry.jpg","images/fry.jpg"]
        },
        {
        "title" : "Altered gene expression in host due to HIV microRNA and protein interaction studies",
        "dates" : "Jan-May 2014",
        "description" : "Data analysis",
        "images" : ["images/fry.jpg","images/fry.jpg"]
        }
    ]
};
var education = {
    "schools" : [
        {
        "school" : "Anna University",
        "location" : "Chennai",
        "degreedates" : "2010-2014",
        "url" : "www.annauniv.edu",
        "degree" : "B.Tech",
        "majors" : ["pharmaceutical","bachelors"]
        },
        {
        "school" : "Chinmaya Vidyalaya",
        "location" : "Rajapalayam",
        "degreedates" : "2008-2010",
        "url" : "www.chinmayavidyalaya.com",
        "degree" : "High school",
        "majors" : ["science","maths","computer science"]
        }
    ] ,
    "onlineCourses" : [
            {
            "title" : "Intro to HTML and CSS",
            "school" : "Udacity",
            "dates" : "Jan 2017",
            "degree" : "Nanodegree",
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
            },
            {
            "title" : "Responsive web design fundamentals",
            "school" : "Udacity",
            "dates" : "Mar 2017",
            "degree" : "Nanodegree",
            "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
            },
            {
            "title" : "Responsive images",
            "school" : "Udacity",
            "dates" : "May 2017",
            "degree" : "Nanodegree",
            "url" : "https://www.udacity.com/course/responsive-images--ud882"
            }
    ]
};

if ( bio["skills"].length !== 0) {
    $("#header").append(HTMLskillsStart);
    var formattedskills = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedskills);
    var formattedskills = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedskills);
    var formattedskills = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedskills);
    var formattedskills = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedskills);
}

function displaywork(){
  work.jobs.forEach(function(data){
    $("#workExperience").append(HTMLworkStart);
    var formattedemployer = HTMLworkEmployer.replace("%data%",data.employer);
    var formattedworktitle = HTMLworkTitle.replace("%data%",data.title);
    var formatteddes = HTMLworkDescription.replace("%data%",data.description);
    var formattedwdates = HTMLworkDates.replace("%data%",data.dates);
    var formattedloc = HTMLworkLocation.replace("%data%",data.location);
    $(".work-entry:last").append(formattedemployer + formattedworktitle);
    $(".work-entry:last").append(formattedwdates);
    $(".work-entry:last").append(formatteddes)
    })
}
displaywork();
$("#main").append(internationalizeButton);
var inName = function(stringname){
    var arrayname = stringname.split(" ");
    arrayname[1] = arrayname[1].toUpperCase();
    arrayname[0] = arrayname[0].slice(0,1).toUpperCase() + arrayname[0].slice(1).toLowerCase();
    return arrayname[0]+" "+arrayname[1]
}
projects.display = function() {
    for (data in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedtitle = HTMLprojectTitle.replace("%data%",projects.projects[data].title);
        var formatteddes = HTMLprojectDescription.replace("%data%",projects.projects[data].description);
        var formatteddates = HTMLprojectDates.replace("%data%",projects.projects[data].dates);
        $(".project-entry:last").append(formattedtitle);
        $(".project-entry:last").append(formatteddates);
        $(".project-entry:last").append(formatteddes);
        if (projects.projects[data].images.length>0){
          for (image in projects.projects[data].images){
            var formattedimage = HTMLprojectImage.replace("%data%",projects.projects[data].images[image]);
            $(".project-entry:last").append(formattedimage);
            }
          }
        }
}
projects.display();
$("#mapDiv").append(googleMap);
education.display = function(){
    education.schools.forEach(function(data){
    $("#education").append(HTMLschoolStart);
    var formattedschoolname = HTMLschoolName.replace("%data%",data.school);
    var formattedloc = HTMLschoolLocation.replace("%data%",data.location);
    var formatteddates = HTMLschoolDates.replace("%data%",data.degreedates);
    var formatteddegree = HTMLschoolDegree.replace("%data%",data.degree);
    var formattedmajors = HTMLschoolMajor.replace("%data%",data.majors);
    $(".education-entry:last").append(formattedschoolname);
    $(".education-entry:last").append(formatteddates);
    $(".education-entry:last").append(formatteddegree);
    $(".education-entry:last").append(formattedmajors);
    $(".education-entry:last").append(formattedloc);
    })
}
education.display();
education.onlinedisplay = function(){
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(data){
        $("#education").append(HTMLschoolStart);
        var formattedtitl = HTMLonlineTitle.replace("%data%",data.title);
        var formattedschool = HTMLonlineSchool.replace("%data%",data.school);
        var formatteddates = HTMLonlineDates.replace("%data%",data.dates);
//        var formttedDegree = HTMLonlineDegree.replace("%data%",data.degree);
        var formattedurl = HTMLonlineURL.replace("%data%",data.url);
        $(".education-entry:last").append(formattedtitl);
        $(".education-entry:last").append(formattedschool);
        $(".education-entry:last").append(formatteddates);

    })
}
education.onlinedisplay();


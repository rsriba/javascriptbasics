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
        "employer" : "Amazon",
        "title" : "Web developer",
        "location" : "Chennai",
        "dates" : "2014-2015",
        "description" : "Worked on the website using HTML, CSS and JS"
        },
        {
        "employer" : "Microsoft",
        "title" : "Front end developer",
        "location" : "Chennai",
        "dates" : "2015-2016",
        "description" : "Worked on the app using HTML, CSS and JS"
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
/*
for (data in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedemployer = HTMLworkEmployer.replace("%data%",work["jobs"][data].employer);
    var formattedworktitle = HTMLworkTitle.replace("%data%",work.jobs[data]["title"]);
    $(".work-entry:last").append(formattedemployer + formattedworktitle);
}
*/
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

//stupid additional quizzes
/*
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    if (names.length > 0){
    var array = [];
    names.forEach(function(data){
        var temp = data.split(" ");
        temp.push(temp[0]);
        temp.splice(0,1);
        array.push(temp[0]+", "+temp[1]);
        })
    array.sort();
    return array;
    }
    else return "no names in array";
}
// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
*/
// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
//    var dataa = results.formattedResults.ruleResults;
    var array = [];
    for (data in results.formattedResults.ruleResults){
//        console.log(dataa[data]);
//        console.log(dataa.data); results undefined
//        console.log(data[localizedRuleName]); returns undefined
        array.push(results.formattedResults.ruleResults[data].localizedRuleName);
    }
    return array;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var totalBytes = 0;
    for (data in results.pageStats){
        if (typeof results.pageStats[data] !=='number'){
            totalBytes = totalBytes + parseInt(results.pageStats[data],10);
            console.log(totalBytes);
        }
    }
    return totalBytes;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
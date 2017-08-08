/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Mrinal\n");
 
//var awesomeThoughts="\nI am Mrinal and I am Awesome";
//var funThoughts= awesomeThoughts.replace("Awesome","FUN")
 //$("#main").append(funThoughts);
/*name="Mrinal";
role="Web Developer"
 var formattedName = HTMLheaderName.replace("%data%",name);
 var formattedRole = HTMLheaderRole.replace("%data%",role);
 $("#header").append(formattedName);
 $("#header").append(formattedRole);
*/
var skills=["Web Developer","Teaching"];

 var bio = {
 	"name": "Mrinal Pandey",
 	"role": "Web Developer",
 	"contacts":{
 		"mobile": 9887908868,
 		"email": "mrinalpandey6@gmail.com",
 		"github": "https://github.com/mirupandey",
 		"location": "Rawatbhata",
 	},
 	"biopic": "images/fry.jpg",
 	"welcomeMessage": "Welcome Here",
 	"skill": skills,
 	"display":
 		function displayWork(){
		 	var myName = HTMLheaderName.replace("%data%", bio.name);
			$("#header").append(myName);
			var myRole = HTMLheaderRole.replace("%data%", bio.role);
			$('#header').append(myRole);
			var contactInfo = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#header").append(contactInfo);
			var github = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#header").append(github);
			var location = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#header").append(location);
			var email = HTMLemail.replace("%data%", bio.contacts.email);
			$("#header").append(email);
			if(bio.skill.length > 0) {
				$("#header").append(HTMLskillsStart);
				var formattedSkills = HTMLskills.replace("%data%",bio.skill[0]);
				$("#skills").append(formattedSkills);
				formattedSkills = HTMLskills.replace("%data%",bio.skill[1]);
				$("#skills").append(formattedSkills);
			}
			var pic = HTMLbioPic.replace("%data%", bio.biopic);
			$("#header").append(pic);
			var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$("#header").append(welcomeMessage);
		}
 };

bio.display();

/*
 var education = {};
 education.name = "P2S3";
 education.yearsAttended = 1;
 education.schoolCity = "Kota";

$("#main").append(work["jobPosition"]);
$("#main").append(education.name);*/

var education = {
	"schools":[
		{
			"name": "P2S3",
			"degree": "12th",
			"city": "Kota",
			"major": ["P","C","M"],
			"minor": "PE",
			"years": "7-March-2012"
		},
		{
			"name": "AECS4",
			"degree": "11th",
			"city": "Rawatbhata",
			"major": ["P","C","M"],
			"minor": "CS",
			"dates": "7-March-2011"
		},
		{
			"name": "AECS2",
			"degree": "10th",
			"city": "Rawatbhata",
			"major": ["P","C","B","M","S"],
			"minor": "NA",
			"years": "13-July-2001"
		}
	],
	"onlineCourses":[
		{
			"name": "Front-End Developer Nanodegree",
			"school": "Udacity",
			"dates": 2017,
			"url": "https://www.udacity.com/"
		}
	],
	display:
	function(){
		for(index=0;index<education.schools.length;index++){

			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].years);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].city);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
			$(".education-entry:last").append(formattedName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
		}
		for(index=0;index<education.onlineCourses.length;index++){

			$("#onlineCourses").append(HTMLonlineClasses);

			var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].name);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
			$(".onlineCourses-entry:last").append(formattedName);
			$(".onlineCourses-entry:last").append(formattedSchool);
			$(".onlineCourses-entry:last").append(formattedDates);
			$(".onlineCourses-entry:last").append(formattedURL);
		}
	}
};

education.display();

 var work = {
 	"jobs":[{
 		title: "Tester",
 		employer: "Joy Patra",
 		dates: "22-Feb-2015",
 		location: "Gurgaon",
 		description: "The purpose of Software Testing and Quality Assurance is to provide the means and also the measures for testing all the aspects of a software solution, both functionally and technically, in order to meet the requirements and overall quality of the intended solution."
 	},
 	{
 		title: "Software Developer",
 		employer: "Shetty",
 		dates: "2-August-2017",
 		location: "Banglore",
 		description: "The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications."
 	}
 	],
 	"display":

 	function displayWork(){

 		for(job=0;job<work.jobs.length;job++){

			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDesc);
		}
	}
};

work.display();

var project ={
	"projects": [ 
		{
			"title": "Dream Home Architecture",
			"dates": "20-July-2016",
			"description": "The architecture firm focusing website visualizes the fields covered by a basic architecture firm.",
			"images": "images/fry.jpg"
		},
		{
			"title": "Hostel Management",
			"dates": "3-Aug-2014",
			"description": "Provides the college management with a software to maintain student accommodation more efficiently.",
			"images": "images/fry.jpg"
		}
	],
	display:
	function(){
	for(index=0;index<project.projects.length;index++){

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[index].title);
		var formattedDate = HTMLprojectDates.replace("%data%", project.projects[index].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", project.projects[index].description);
		var formattedImage = HTMLprojectImage.replace("%data%", project.projects[index].images);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDesc);
		$(".project-entry:last").append(formattedImage);
		}
	}

};

project.display();

$("#main").append(internationalizeButton);

function inName(name){
	var nameSplit = name.trim().split(" ");
	var firstName = nameSplit[0].slice(0,1).toUpperCase() + nameSplit[0].slice(1).toLowerCase();
	var lastName = nameSplit[1].toUpperCase();
	var name = firstName + " " + lastName;
	return name;
}

project.display();

$("#mapDiv").append(googleMap);
    //  new google.maps.Map(document.querySelector('#map'), mapOptions);

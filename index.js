let topics = ["Introduction","Features",
	"How a Java program runs?","First java program",
	"Naming Conventions","Datatypes",
	"Identifiers and Keywords","Operators and Expression",
	"Conditional and Control Statements","Class and Objects","Packages",
	"Defining Methods","Static methods and variables",
	"String","Arrays","Exception Handling","Constructors",
	"Access modifiers","OOPs",
	"Interfaces","Mutlithreading"];

let TOPIC = document.getElementById("container");
let insideDiv = "<p id='topics'>#titles#</p>";
let outputString="";

let createTopics = function(){
    topics.forEach(function(topic){
        outputString += insideDiv.replaceAll("#titles#", topic);
        // console.log(outputString);
    });
    TOPIC.innerHTML = outputString;
}
createTopics();
let topics = ["Introduction","Features",
	"How a Java program runs?(JVM, JRE, JIT)","First java program(Structure of Java Program)",
	"Naming Conventions(Class name, Variable name, Method name)","Datatypes",
	"Identifiers and Keywords","Operators and Expression(with precedence)",
	"Conditional and Control Statements","Class and Objects","Packages",
	"Defining Methods (Method Declaration, return type, calling methods)","Static methods and variables",
	"String (with memory allocation in heap)","Arrays","Exception Handling","Constructors",
	"Access modifiers(default, public, private, protected)","OOPs(Encapsulation, Abstraction, Inheritance, Polymorphism)",
	"Interfaces","Mutlithreading"];

let INDEXDIV = document.getElementById("index-list");
let divEle = "<div class='titles'><a href='#topic#.html' target='#topic#'>#topic#</a></div>";
//<div class="titles"><a href = "Introduction">Introduction</a></div>
let outputString = "";

let createTopics = function(){
	topics.forEach(function(topic){
		outputString += divEle.replaceAll("#topic#", topic)
	});
	INDEXDIV.innerHTML = outputString;
}
createTopics();

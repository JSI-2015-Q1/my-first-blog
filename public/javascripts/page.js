(function() {
//head
document.head.children[0].textContent = "My JavaScript Blog";
var h1 = document.getElementsByTagName('h1');
h1[0].textContent = "My JavaScript Blog";
//end head

//first added article

//first article variables
var article1 = document.body.children[1];
var paragraphs = document.getElementsByTagName('p');
var paragraph = paragraphs[0];


var paragraphHeading = document.createElement('h1');
paragraphHeading.innerHTML = "My First Blog Post";

article1.insertBefore(paragraphHeading, paragraph);

paragraph.innerHTML = "This is the first blog post I have ever written.";
article1.appendChild(paragraph);

//end first article

var articleHeading = "My Second Blog Post";
var articlePost = "This is a blog post about really awesome stuff I have done in JavaScript";

function addArticle(){
	var newArticle = document.createElement('article');
	var header = document.createElement('h1');
	var paragraphs = document.createElement('p');

	header.innerHTML = articleHeading;
	paragraphs.innerHTML = articlePost;

	document.body.insertBefore(newArticle, article1);
	// document.body.appendChild(newArticle);
	newArticle.appendChild(header);
	newArticle.appendChild(paragraphs);
	// paragraphs.classList.add("highlight");
	newArticle.setAttribute("class", "art");
	newArticle.getAttribute("class");
}

addArticle();

// document.getElementById("article").addEventListener("click", function(event){ article.classList.add("highlight"); })


function pay(){
	var paymentDiv = document.createElement('div');
	var paymentHeader = document.createElement('h1');
	var paymentForm = document.createElement('form');

	paymentHeader.innerHTML = "Pay me now";

	document.body.appendChild(paymentDiv);
	paymentDiv.appendChild(paymentHeader);
	paymentDiv.appendChild(paymentForm);

	function createInput(input_type, name, type, inner){
		var divider = document.createElement('div');
		paymentForm.appendChild(divider);
		var label = document.createElement('label');
		divider.appendChild(label);
		label.innerHTML = inner;
		var input = document.createElement(input_type);
		divider.appendChild(input);
		label.setAttribute("for", name);
		label.getAttribute("for");
		input.setAttribute("type", type);
		input.getAttribute("type");
		input.setAttribute("name", name);
		input.getAttribute("name");
		input.required = true;
	}
	createInput("input", "email", "email", "Email:");
	createInput("input", "cc", "text", "Credit Card Number:");
	createInput("input", "expiration", "text", "Credit Card Expiration Date:");
	createInput("input", "name", "text", "Name on Card:");
	createInput("input", "verification", "text", "Ferification Code:");
	createInput("input", "city", "text", "City:");
	createInput("select", "state", "text", "State:");

	var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
	var stateList = function(){
		var selectInput = document.body.children[4].children[1].children[6].children[1];
		for(var i=0; i<states.length; i++){
			var eachState = document.createElement('option');
			selectInput.appendChild(eachState);
			eachState.innerHTML = states[i];
		}
	}
	stateList();

	
	var submit = document.createElement("button");
	paymentForm.appendChild(submit);
	submit.innerHTML = "Submit";
	submit.setAttribute("type", "button");
	submit.getAttribute("type");
	submit.setAttribute("onclick", "alert('Your Payment is being processed')");
	submit.getAttribute("onclick");
}
pay();



})();



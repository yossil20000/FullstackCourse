let bodyElement = document.body;
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageElement = document.createElement('img');
let headingElement = document.createElement('h5');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');

// the class name property
cardElement.className = "card";
imageContainer.className ="image-container";
console.log(imageContainer);
infoContainer.className = "info-container";
headingElement.className = "heading";
paragraphElement.className = "paragraph";
imageElement.className ="image"
btnElement.className="btn";
//work the same away as the class name property except it set the source of the element;
imageElement.src = "http://source.unsplash.com/random";
btnElement.setAttribute("href","#");
console.log(imageElement);
//this set the value of the attribute element if exist then it updated
btnElement.setAttribute("href","#");
imageElement.setAttribute("alt","from Unsplash");
headingElement.innerText="Unspalsh API";
paragraphElement.innerText = "/this set the value of the attribute element if exist then it updated";
btnElement.innerText="Learn More";
bodyElement.appendChild(cardElement);
//Apprn Multiple child
cardElement.append(imageContainer,infoContainer);
imageContainer.appendChild(imageElement);
infoContainer.append(headingElement,paragraphElement,btnElement)
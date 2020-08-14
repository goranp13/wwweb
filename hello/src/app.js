let divs = document.getElementsByTagName("div");
let div = divs.item(0);
let childNodes = div.childNodes; 
let textNode = childNodes.item(0);
console.log(textNode.getTextContent);
let textInput = document.querySelector("input[type=text]");
console.dir(textInput);


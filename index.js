// Write your code here!
// 1. Remove the <main> element with the id 'main'
let mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// 2. Create an <h1> element and assign it to the variable 'newHeader'
let newHeader = document.createElement('h1');

// 3. Set the id of the <h1> to 'victory'
newHeader.id = 'victory';

// 4. Set the inner HTML of the <h1> element to 'YOUR-NAME is the champion'
newHeader.innerHTML = 'AAD4 is the champion';

 //apend to the body to appear in the DOM(optional according to the test )
document.body.appendChild(newHeader);

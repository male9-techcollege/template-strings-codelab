/* Opgave 1*/
// din kode her

const employeeNameByMariePierreLessard = "Marie-Pierre Lessard";
const seniorityInYearsByMariePierreLessard = "9";
const messageByMariePierreLessard = `<h2>Hej, ${employeeNameByMariePierreLessard}!</h2> 
Du har nu arbejdet i vores virksomhed i ${seniorityInYearsByMariePierreLessard} år.`;
console.log(messageByMariePierreLessard);

const elementByMariePierreLessard = document.getElementById("message");
elementByMariePierreLessard.innerHTML = messageByMariePierreLessard;


/* Opgave 2*/
// din kode her

/* The quotation marks around the keys are optional. */
const storeSelectionByMariePierreLessard = [
            { "name": "T-shirt",
            "description": "Cotton t-shirt",
            "price": 99 },
            { "name": "Jeans",
            "description": "Blue denim jeans with a straight cut",
            "price": 299
            },
            { "name": "Hoodie",
            "description": "Gray hoodie with zipper",
            "price": 199 }
];
const selectionContainerByMariePierreLessard = document.getElementById("produktListe");

/* Kasper helped the whole class with this one */
let templateString = ``;

//Kasper wanted us to understand the logic of a for loop, without using the forEach() shortcut  
//for (let i=0; i<10; i++) means as long as i is less than 10, then add 1 to i; this works in every other programming language
//for (let i=0; i<10; i++) {};
//let value = arrayName[i];
// OR example from W3Schools at https://www.w3schools.com/js/js_string_templates.asp:
// for (const x of arrayName) { html += `<li>${x}</li>`; };

storeSelectionByMariePierreLessard.forEach((arrayitem) => {
    /* The + in front of = is necessary, or each arrayitem overwrites the previous one, and the only arrayitem displayed is the last one in the array. 
    See: 
    W3 Schools - JavaScript Operators
    https://www.w3schools.com/Js/js_operators.asp
    W3 Schools - JavaScript Operators Reference 
    https://www.w3schools.com/jsref/jsref_operators.asp */
    templateString += `
        <article class="produkt">
            <h2>${arrayitem.name}</h2>
            <p>${arrayitem.description}</p>
            <p>Price: ${arrayitem.price} DKK</p>
        </article>
    `;
    selectionContainerByMariePierreLessard.innerHTML = templateString;

    // Alternative to a template string (Kasper's master class) --
    // I was indeed wondering how to identity each item in the array; it's the parameter in the arrow function!
    // let articleElement = document.createElement("article");
    // let h2Element = document.createElement("h2");
    // let descriptionTag = document.createElement("p");
    // let priceTag = document.createElement("p");
    // h2Element.innerText = arrayitem.name;
    // descriptionTag.innerText = arrayitem.description;
    // priceTag.innerText = arrayitem.price;
    // articleElement.appendChild(h2Element);
    // articleElement.appendChild(descriptionTag);
    // articleElement.appendChild(priceTag);
    // selectionContainerByMariePierreLessard.appendChild(articleElement);
});


/* Opgave 3 - skriv videre på koden her: */
/* The entire code to meet the requirements of the exercise was available under Hint... 
What are/were we supposed to add? I changed the custom names to show that I understand how it works. */

// array med person data
const myPersonsByMariePierreLessard = [];

// find form elementer
const myFormByMariePierreLessard = document.getElementById('formular');
const submitButtonByMariePierreLessard = document.getElementById('indsend-knap');
const personListByMariePierreLessard = document.getElementById('person-liste');

// submit button event listner med arrow function
submitButtonByMariePierreLessard.addEventListener('click', (event) => {
    event.preventDefault();
    const myFormFieldsByMariePierreLessard = myFormByMariePierreLessard.querySelectorAll('input');

    /* push resultatet fra formen ind på myPersons.
    vi ved der er 2 elementer derfor direkte adressering ved hjælp af []
    */
    myPersonsByMariePierreLessard.push({
        name: myFormFieldsByMariePierreLessard[0].value,
        age: myFormFieldsByMariePierreLessard[1].value,
    });
        
    // Sorter listen efter alder og vis den på siden
    const sorteretMyPersonsByMariePierreLessard = sorterEfterAlderByMariePierreLessard(myPersonsByMariePierreLessard);
    showListByMariePierreLessard(sorteretMyPersonsByMariePierreLessard);
});

// Funktion til at sortere listen efter alder
function sorterEfterAlderByMariePierreLessard(myPersonsByMariePierreLessard) {
    return myPersonsByMariePierreLessard.sort((a, b) => a.age - b.age);
};

// view code
function showListByMariePierreLessard(sorteretMyPersonsByMariePierreLessard) {
    let html = '';
    sorteretMyPersonsByMariePierreLessard.map((person) => {
        // html template.
        html += `<li>${person.name} er ${person.age} år gammel.</li>`;
    });
    personListByMariePierreLessard.innerHTML = html;
};


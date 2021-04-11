var suggestionSection = document.querySelector('.suggestions');
suggestionSection.addEventListener('click', handleSuggestionClick);

function handleSuggestionClick(e) {
  if (e.target.id === "clearBTN") {
    suggestionSection.innerHTML = `<img class="crockpot" src="./assets/cookpot.svg" alt="An image of a crockpot">`
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function testButton(form) {
  for (Count = 0; Count < 3; Count++) {
    if (form.food[Count].checked)
    break;
  }
  if (Count === 0) {
    show(sides)
  } else if (Count === 1) {
    show(mains)
  } else if (Count === 2) {
    show(desserts)
  } else {
    showMeal()
  }
}

function show(pass) {
  suggestionSection.innerHTML = `
    <h1 class="you-should">You should make:</h1>
    <p class="what-for">${pass[getRandomIndex(pass)]}</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

function showMeal() {
  suggestionSection.innerHTML = `
    <h1 class="you-should">You should make:</h1>
    <p class="what-for">${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]}
    and ${desserts[getRandomIndex(desserts)]} for dessert!</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

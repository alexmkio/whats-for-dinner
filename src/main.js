var suggestionSection = document.querySelector('.right-box');
suggestionSection.addEventListener('click', handleSuggestionClick);

var addButton = document.querySelector('.add-recipe-button');
addButton.addEventListener('click', unhideFooter);
var footerSection = document.querySelector('footer');

function unhideFooter() {
  footerSection.classList.remove("hidden");
}

function handleSuggestionClick(e) {
  if (e.target.id === "clearBTN") {
    suggestionSection.innerHTML = `<img class="crockpot" src="./assets/cookpot.svg" alt="An image of a crockpot">`
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function findSelection(form) {
  for (Count = 0; Count < 3; Count++) {
    if (form.food[Count].checked)
    break;
  }
  if (Count === 0) {
    replaceSuggestionSection(sides)
  } else if (Count === 1) {
    replaceSuggestionSection(mains)
  } else if (Count === 2) {
    replaceSuggestionSection(desserts)
  } else {
    replaceSuggestionSectionWithMeal()
  }
}

function replaceSuggestionSection(pass) {
  suggestionSection.innerHTML = `
    <h1 class="italic zero-margin">You should make:</h1>
    <p class="xx-large zero-margin">${pass[getRandomIndex(pass)]}!</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

function replaceSuggestionSectionWithMeal() {
  suggestionSection.innerHTML = `
    <h1 class="italic zero-margin">You should make:</h1>
    <p class="x-large">${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]}
    and ${desserts[getRandomIndex(desserts)]} for dessert!</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

function checkTypeExists(form) {
  if (form.recipeType.value === 'side' || form.recipeType.value === 'Side' || form.recipeType.value === 'main dish' || form.recipeType.value === 'Main Dish' || form.recipeType.value === 'dessert' || form.recipeType.value === 'Dessert') {
    filterByType(form)
    clearAddNewFields(form)
  } else {
    showNotTypeError(form)
  }
}

function filterByType(form) {
  if (form.recipeType.value === 'side' || form.recipeType.value === 'Side') {
    evaluateSide(form)
  } else if (form.recipeType.value === 'main dish' || form.recipeType.value === 'Main Dish') {
    evaluateMain(form)
  } else {
    evaluateDessert(form)
  }
}

function evaluateSide(form) {
  if (sides.indexOf(form.recipeName.value) === -1) {
    sides.push(form.recipeName.value)
    showWhatUserAdded(form)
  } else {
    showNameExistsAlready(form)
  }
}

function evaluateMain(form) {
  if (mains.indexOf(form.recipeName.value) === -1) {
    mains.push(form.recipeName.value)
    showWhatUserAdded(form)
  } else {
    showNameExistsAlready(form)
  }
}

function evaluateDessert(form) {
  if (desserts.indexOf(form.recipeName.value) === -1) {
    desserts.push(form.recipeName.value)
    showWhatUserAdded(form)
  } else {
    showNameExistsAlready(form)
  }
}

function showWhatUserAdded(form) {
  suggestionSection.innerHTML = `
    <h1 class="italic zero-margin">You've added:</h1>
    <p class="x-large">${form.recipeName.value} to the ${form.recipeType.value} array!</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

function clearAddNewFields(form) {
  form.recipeType.value = '';
  form.recipeName.value = '';
}

function showNameExistsAlready(form) {
  suggestionSection.innerHTML = `
    <p class="x-large">${form.recipeName.value} already exists in the ${form.recipeType.value} array!</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

function showNotTypeError(form) {
  suggestionSection.innerHTML = `
    <p class="x-large">Sorry, but ${form.recipeType.value} isn't an accepted recipe type. Type side, main dish, or dessert and try again.</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

var suggestionSection = document.querySelector('.suggestions');
suggestionSection.addEventListener('click', handleSuggestionClick);

var addButton = document.querySelector('.add-recipie');
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

function showSelection(form) {
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

function checkTypeExists(form) {
  if (form.recipieType.value === 'side' || form.recipieType.value === 'Side' || form.recipieType.value === 'main dish' || form.recipieType.value === 'Main Dish' || form.recipieType.value === 'dessert' || form.recipieType.value === 'Dessert') {
    addNew(form)
    clearAddNewFields(form)
  } else {
    notTypeError(form)
  }
}

function addNew(form) {
  if (form.recipieType.value === 'side' || form.recipieType.value === 'Side') {
    evaluateSide(form)
  } else if (form.recipieType.value === 'main dish' || form.recipieType.value === 'Main Dish') {
    evaluateMain(form)
  } else {
    evaluateDessert(form)
  }
}

function evaluateSide(form) {
  if (sides.indexOf(form.recipieName.value) === -1) {
    sides.push(form.recipieName.value)
    showWhatUserAdded(form)
  } else {
    alreadyExists(form)
  }
}

function evaluateMain(form) {
  if (mains.indexOf(form.recipieName.value) === -1) {
    mains.push(form.recipieName.value)
    showWhatUserAdded(form)
  } else {
    alreadyExists(form)
  }
}

function evaluateDessert(form) {
  if (desserts.indexOf(form.recipieName.value) === -1) {
    desserts.push(form.recipieName.value)
    showWhatUserAdded(form)
  } else {
    alreadyExists(form)
  }
}

function showWhatUserAdded(form) {
  suggestionSection.innerHTML = `
    <h1 class="you-should">You've added:</h1>
    <p class="what-for">${form.recipieName.value} to the ${form.recipieType.value} array!</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

function clearAddNewFields(form) {
  form.recipieType.value = '';
  form.recipieName.value = '';
}

function alreadyExists(form) {
  suggestionSection.innerHTML = `
    <p class="what-for">${form.recipieName.value} already exists in the ${form.recipieType.value} array!</p>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

function notTypeError(form) {
  suggestionSection.innerHTML = `
    <h1 class="you-should">Sorry, but ${form.recipieType.value} isn't an accepted recipie type. Type side, main dish, or dessert and try again.</h1>
    <button class="clear-button" id="clearBTN">Clear</button>
  `
}

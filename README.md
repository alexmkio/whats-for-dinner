# What's for Dinner?

What's for Dinner is a website that generates cooking suggestions for the user based off of the category of food they desire. Additionally, users can add their own suggestions.

The project spec can be found [here](https://frontend.turing.io/projects/module-1/dinner.html).

Please visit our site [here](https://clairefields15.github.io/romcom/)!

## Features

![Screenshot of the What's for Dinner website](https://user-images.githubusercontent.com/12686237/114321071-e6c8b180-9ae6-11eb-951e-3f56ef3c92fd.png)
* When the user selects the “Entire Meal” option and then clicks the “Let’s Cook!” button, the user sees a message with a side, main and dessert option from the lists of possible dishes for all categories
* When the meal items appear, the cookpot icon disappears
* The user can click a clear button, which clears the page of any message. User should only be able to click the clear button if a food is visible. When the clear button is clicked and the food is removed, the image of the cookpot should re-appear.
* User should not be able to click the “Let’s Cook” button for a recipe unless they have selected an option.
* The user can click an “Add a Recipe” button, which will display a form to add a new recipe at the bottom of the page
* The user can add a type and a name, click the “Add New” recipe and that recipe will be added to the appropriate list
* When a new recipe is added, that recipe should automatically display instead of the cookpot icon
* When a user tries to add to a recipe type that does not exist we see an error message.
* A user can not add a recipie name that already exsists for that type.


## Contributors

The website was built by [Alex Kio](https://github.com/alexmkio/); a Front End Engineering, Mod 1 student at the [Turing School of Software and Design](https://turing.io/).

## Technologies Used

The website uses vanilla JavaScript, HTML, and CSS.

## Future Additions

I am unlikely to add any future functionality to this website, but here are some ideas for features that might improve it:

* Login Page
  * Refactor your application so that the user lands on a “Login” page
  * The login page should match the style of the application.
  * The login page should contain an input for a user to enter their name, and a button to submit.
  * After the user clicks the submit button, they should be taken to the main application page, and see a personalized greeting that displays their name and some sort of welcome message.
  * The welcome message and name should appear in a logical place of your choosing.
* User can favorite a recipe
  * When a recipe appears, it should appear with a “Favorite” button.
  * When the “Favorite” button is clicked, that recipe should be added to a new list of favorite recipes.
  * Users should be able to view their favorites by clicking a “View Favorites” button that exists somewhere on the page
  * When the “View Favorites” button is clicked, users should be taken to a new page that displays all of their favorite recipes.
  * Users should be able to navigate back to the main page by clicking a button.
  * Users should be able to remove a recipe from their list of favorites, by clicking a button.
  * As you add these new elements to the page, be sure to match the style of existing elements.
* User can delete a recipe
  * Add the ability to delete a recipe (ie: when a recipe shows up, show a button that says “I don’t like this recipe” (or something similar), and remove it from the list so that it will not show up any more. Make sure to alert the user in some way that the recipe has been removed.
* User never sees a repeated recipe
  * Use JavaScript to ensure that the user never sees a repeated recipe until they’ve seen them all.
  * After they’ve seen them all they should be notified that they will now start seeing repeat recipes.
* All recipes interface
  * Add a “View All Recipes” button.
  * When that button is clicked, the user is taken to a new pages that displays all recipe, sorted by recipe type.
  * On this page, user should have the ability to add/edit/delete recipe.
* Intermediate CSS
  * Do some research and determine how to make your app respond to the user’s screen size.
  * Layout and spacing should adapt to mobile, tablet, desktop and extra large screens.
  * Add a loading animation when a user clicks the “Let’s Cook” button to simulate searching for a recipe. Hint - You will need to use CSS Keyframes, and a Javascript timeout function for this.
  * Make your buttons grow in size or change color when the user hovers over them, enticing them to click the dang thing.
  * When the recipe appears, the text should fade in.
  * Remember your user experience and animate these things in gradually. Timing is everything!
* Local Storage
  * Only do this if you’ve added the “Favorite a dish” functionality.
  * Do some research to utilize localStorage, so that the user’s favorite recipes will persist, even if they reload the page.
  * localStorage could also be utilized for the “User can delete a recipe” CYOA to make sure that the recipes a user has deleted stay gone after page reload.

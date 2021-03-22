// consts
import {FormValidator} from "./FormValidator.js";

const listItemArray = [
    {
        title: "Wash Cat",
        description: "With soap and water (and bandaids)"
    },
    {
        title: "Mow Lawn",
        description: "With lawn mower"
    },
    {
        title: "Finish Project",
        description: "With tears and struggling"
    }
]

const listItemTemplate = document.querySelector("#list-item-template");
const listContainer = document.querySelector(".list-body__container");


// functions

const renderInitialListItems = () => {
    listItemArray.forEach((item) => {
        const newItem = new ListItem();
        //newItem.makeItem(); //uncomment when the class is feature-complete
        listContainer.prepend(newItem);
    })
}

const checkForStarredItems = () => {
    const starredItemsContainer = document.querySelector(".starred-items__container");
    // console.log(starredItemsContainer.hasChildNodes());
    console.log(starredItemsContainer.childNodes)
}

const listSorter = () => {
    // check for starred items
    // then pass the starred items into
}

const sortThisContainer = () => {

}

// classes (if applicable)
 class ListItem {
   constructor(title, description, template) {
    this._title = title;
    this._description = description;
    this._template = template
  }

  // private methods


  // public methods
  makeItem() {

  }


}

// listeners


// startup
// renderInitialListItems();
checkForStarredItems();




// A Section for stuff done when the page loads up
//---------------------------------------------

// const settings = {
//   inputSelector: ".form__field",
//   submitButtonSelector: ".form__save-button",
//   inactiveButtonClass: "form__save-button_disabled",
//   inputErrorClass: "form__field_error",
//   errorClass: "form__field-error_active"
//   };


// window.onload = initialCards.forEach(function (item){
//   const initialCard = new Card(item.name, item.link, ".card-template");
//   const loadedCard = initialCard.makeCard();

//   cardContainer.append(loadedCard);
// });

// function newValidator (formElement) {
//   const newForm = new FormValidator(settings, formElement)
//   newForm.enableValidation();
// };

// newValidator();

//---------------------------------------------

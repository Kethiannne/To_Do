// consts
import {FormValidator} from "./FormValidator.js";


const listItemArray = [
  {
    title: "Form Validation",
    description: "add spans which hold error messages"
  },
  {
    title: "DOM item sorting function",
    description: "Sorts all list items in both containers alphabetically"
  },
  {
    title: "Data persistence / backend integration",
    description: "a server holds a copy of the data so the page reloading doesnt break it"
  },
  {
    title: "Starred items move themselves to starred container",
    description: "And they run the sort function"
  }
]

const listItemTemplate = document.querySelector("#list-item-template");
const listContainer = document.querySelector(".list-body__container");
const starredItemsContainer = document.querySelector(".starred-items__container");
const form = document.forms.headerForm;


// functions

const renderInitialListItems = () => {
  listItemArray.forEach((item) => {
    const newItem = new ListItem(item.title, item.description, listItemTemplate);
    const loadItem = newItem.makeListItem(); 
    listContainer.prepend(loadItem);
  })
}

const checkForStarredItems = () => {
}

const listSorter = () => {

  // check for starred items
  // then pass the starred items into
}

const sortThisContainer = () => {

}

const addListItem = () => {
  const formTitle = form.title.value;
  const formDescription = form.description.value;
  const newItem = new ListItem(formTitle, formDescription, listItemTemplate);
  const loadItem = newItem.makeListItem();  
  listContainer.append(loadItem);
  listSorter();
}

const deleteChecked = () => {
  const checkboxes = Array.from(document.querySelectorAll(".list-item__checkbox"));
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
        checkbox.parentElement.parentElement.remove();
    }
  })
}

    // classes

        class ListItem {
          constructor(title, description, template) {
              this._title = title;
              this._description = description;
              this._template = template;
          }
             

          // private methods
            _getTemplate() {
              // retrieves template from _template
              const thisListItem = this._template.content.cloneNode(true);
              return thisListItem;
            }

            _handleStars(evt) {
              evt.target.classList.toggle("list-item__star_clicked");
              listSorter();
            }

            _addEventListeners() {
              this._newListItem.querySelector(".list-item__star").addEventListener("click", (evt) => {
                this._handleStars(evt);
              })
            }

          // public methods
            makeListItem() {
              this._newListItem = this._getTemplate();

              this._newListItem.querySelector(".list-item__title").textContent = this._title;
              this._newListItem.querySelector(".list-item__description").textContent = this._description;
              this._addEventListeners();
              return this._newListItem;
            }
        }


// listeners

form.addEventListener("submit", () => {
  addListItem();
  form.reset();
  listSorter();
})


form.querySelector(".header__form-button_type_delete").addEventListener("click", () => {
  deleteChecked();
})

// startup
renderInitialListItems();
checkForStarredItems();





// A Section for stuff done when the page loads up
//---------------------------------------------

const settings = {
  inputSelector: ".header__form-input",
  submitButtonSelector: ".header__form-button_type_submit",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__field_error",
  errorClass: "form__field-error_active"
  };

function newValidator() {
  const newForm = new FormValidator(settings, form);
  newForm.enableValidation();
}
newValidator(settings, form);

// window.onload = initialCards.forEach(function (item){
//   const initialCard = new Card(item.name, item.link, ".card-template");
//   const loadedCard = initialCard.makeCard();

//   cardContainer.append(loadedCard);
// });
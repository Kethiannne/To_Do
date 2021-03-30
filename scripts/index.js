// imports/exports
//---------------------------------------------

  import {FormValidator} from "./FormValidator.js";
  import {ListItem} from "./ListItem.js";
  import {} from "./utils.js";

// consts
//---------------------------------------------

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

  const settings = {
    inputSelector: ".header__form-input",
    submitButtonSelector: ".header__form-button_type_submit",
    inactiveButtonClass: "form__save-button_disabled",
    inputErrorClass: "header__form-input_error",
    errorClass: "header__form-field-error_active"
  };


// functions
//---------------------------------------------

  const renderInitialListItems = () => {
    listItemArray.forEach((item) => {
      const newItem = new ListItem(item.title, item.description, listItemTemplate);
      const loadItem = newItem.makeListItem();
      listContainer.prepend(loadItem);
    })
  }

  const addListItem = () => {
    const formTitle = form.title.value;
    const formDescription = form.description.value;
    const newItem = new ListItem(formTitle, formDescription, listItemTemplate);
    const loadItem = newItem.makeListItem();
    listContainer.append(loadItem);
    // listSorter();
  }

  const deleteCheckedListItems = () => {
    const checkboxes = Array.from(document.querySelectorAll(".list-item__checkbox"));
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
          checkbox.parentElement.parentElement.remove();
      }
    })
  }
  const resetFormFields = () => {
    const errorsElements = Array.from(document.querySelectorAll(".header__form-field-error"));

    errorsElements.forEach((thisElement) => {
      thisElement.classList.remove(settings.errorClass);
      // \/ targets the input field directly above each span
      thisElement.previousElementSibling.classList.remove(settings.inputErrorClass);
    })
  }

// listeners
//---------------------------------------------

  form.addEventListener("submit", () => {
    addListItem();
    form.reset();
    // listSorter();
  })


  form.querySelector(".header__form-button_type_delete").addEventListener("click", () => {
    deleteCheckedListItems();
  })

  form.querySelector(".header__form-button_type_reset").addEventListener("click", () => {
    resetFormFields();
  })


// Initializations
//---------------------------------------------

  function newValidator() {
    const newForm = new FormValidator(settings, form);
    newForm.enableValidation();
  }
  newValidator(settings, form);
  renderInitialListItems();
  // checkForStarredItems();

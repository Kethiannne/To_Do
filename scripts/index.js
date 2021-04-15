// imports/exports
//---------------------------------------------

  import {FormValidator} from "./FormValidator.js";
  import {ListItem} from "./ListItem.js";
  import {} from "./utils.js";

// consts
//---------------------------------------------

  const listItemArray = [
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
    },
    {
      title: "Header button collapses entire component",
      description: "Header button toggles component between full display and a 'card' which only displays the title, subtitle, and expand button"
    },
    {
      title: "popup for items",
      description: "when clicked, todo list items open a popup to display their full contents"
    }
  ]

  const listItemTemplate = document.querySelector("#list-item-template");
  const starItemTemplate = document.querySelector("#star-item-template");
  const listContainer = document.querySelector(".list-body__container");
  const starredItemsContainer = document.querySelector(".starred-items__container");
  const listDisplayToggleButton = document.querySelector(".header__button");
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
      const newItem = new ListItem(item.title, item.description, listItemTemplate, newStarItem);
      const loadItem = newItem.makeListItem();
      listContainer.append(loadItem);
    })
  }

  const newListItem = (title, description) => {
    const listItem = new ListItem(title, description, listItemTemplate, newStarItem)
    const loadListItem = listItem.makeListItem();
    listContainer.append(loadListItem);
  }

  const newStarItem = (title, description) => {
    const starItem = new ListItem(title, description, starItemTemplate, newListItem)
    const loadStarItem = starItem.makeListItem();
    starredItemsContainer.append(loadStarItem);
  }

  const addListItem = () => {
    const formTitle = form.title.value;
    const formDescription = form.description.value;
    const newItem = new ListItem(formTitle, formDescription, listItemTemplate, newStarItem);
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

  listDisplayToggleButton.addEventListener("click", (evt) => {
    listContainer.parentElement.classList.toggle("list-body_display")
    if (!evt.target.style.transform) {
      evt.target.style.transform = "rotate(180deg)";
    } else {
      evt.target.style.transform = "";
    }
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

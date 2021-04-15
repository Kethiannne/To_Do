// imports and exports

  //import {listSorter} from "./utils.js";

// classes

  export class ListItem {
  constructor(title, description, template, starClick) {
      this._title = title;
      this._description = description;
      this._template = template;
      this._starClick = starClick;
  }


  // private methods
    _getTemplate() {
      // retrieves template from _template
      const thisListItem = this
      ._template
      .content
      .cloneNode(true);
      return thisListItem;
    }

    _handleStars(evt) {
      // listSorter();
      this._starClick(this._title, this._description);
      evt.target.parentElement.remove();
    }

    _addEventListeners() {
      this._newListItem
      .querySelector(".list-item__star")
      .addEventListener("click", (evt) => {
        this._handleStars(evt);
      })
    }

  // public methods
    makeListItem() {
      this._newListItem = this._getTemplate();

      this._newListItem
      .querySelector(".list-item__title")
      .textContent = this._title;
      this._newListItem
      .querySelector(".list-item__description")
      .textContent = this._description;

      this._addEventListeners();
      return this._newListItem;
    }
  }

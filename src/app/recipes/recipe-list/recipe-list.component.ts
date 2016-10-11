import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Dummy', 'I\'m a dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', []),
    new Recipe('Schitzel', 'Very tasty', 'http://www.coopzeitung.ch/site/presse/displayImageThumbService/1613009/600x400/Wiener_Schnitzel.jpg?acitvCropping=true&multimediaElement=true', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ahouseinthehills.com/wp-content/uploads/2013/06/watermelon_watercress_salad_a_house_in_the_hills_2.jpg', [])
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}

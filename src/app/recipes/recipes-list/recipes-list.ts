import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  standalone: false,
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css'
})
export class RecipesList {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First Test Recipe', 'Simply testing of recipe', 'https://www.foodandwine.com/thmb/kuakUXBI867NCXNKErdjriQTkDM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-ingredients-1b50ce143bb74823a1622d738da10b66.jpg'),
    new Recipe('Second Test Recipe', 'Simply testing of recipe', 'https://www.foodandwine.com/thmb/kuakUXBI867NCXNKErdjriQTkDM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-ingredients-1b50ce143bb74823a1622d738da10b66.jpg')

  ];

  showNewRecipeForm = false;

  onNewRecipe() {
    this.showNewRecipeForm = true;
    console.log(this.showNewRecipeForm)
  } 

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList {
  ingredients: Ingredient[] = [
    new Ingredient('jabuke', 1.55)
  ];
}

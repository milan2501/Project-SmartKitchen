import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Header } from './header/header';
import { Recipes } from './recipes/recipes';
import { RecipesList } from './recipes/recipes-list/recipes-list';
import { RecipeDetails } from './recipes/recipe-details/recipe-details';
import { RecipeItem } from './recipes/recipes-list/recipe-item/recipe-item';
import { ShoppingList } from './shopping-list/shopping-list';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit';


@NgModule({
  declarations: [
    App,
    Header,
    Recipes,
    RecipesList,
    RecipeDetails,
    RecipeItem,
    ShoppingList,
    ShoppingEdit
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

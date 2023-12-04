import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    constructor(private slService: ShoppingListService) {};
    private recipes: Recipe[] = [
        new Recipe(
        'Tasry Schnitzel', 
        'A super tatsty Schniztzel - just Awesome !', 
        'https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3-1063x1536.jpg',
        [
            new Ingredient('Meat', 1,),
            new Ingredient('French Fries', 20,)
        ]),
        new Recipe(
        'Shrimp Salad', 
        'A vey healthy Shrimo Salad - Amazing !', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
        [
            new Ingredient('Shrimp', 10),
            new Ingredient('Lettuce', 3),
            new Ingredient('Tomatoes', 1)
        ])
    ];

    getRecipeById(id: number) {
        return this.recipes[id];
    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
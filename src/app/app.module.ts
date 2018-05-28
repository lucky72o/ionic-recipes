import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {TabsPage} from "../pages/tabs/tabs";
import {RecipeEditPage} from "../pages/recipe-edit/recipe-edit";
import {RecipesPage} from "../pages/recipes/recipes";
import {RecipePage} from "../pages/recipe/recipe";
import {ShoppingListPage} from "../pages/shopping-list/shopping-list";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RecipeEditPage,
    RecipesPage,
    RecipePage,
    ShoppingListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RecipeEditPage,
    RecipesPage,
    RecipePage,
    ShoppingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

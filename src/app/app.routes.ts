import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistaComponent } from "./components/artista/artista.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  // { path: "path3", component: Name3Component },
  // { path: "path4", component: Name4Component },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

import {Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {CocktailListComponent} from "./cocktail-list/cocktail-list.component";
import {AboutUsComponent} from "./about-us/about-us.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/cocktails',
    pathMatch: "full",
  },
  {
    path: 'cocktails',
    children: [
      {
        path: '',
        component: CocktailListComponent,
        pathMatch: "full"
      },
      {
        path: 'details',
        loadComponent: () => import("./cocktail/cocktail.component").then(c => c.CocktailComponent)
      }
    ]
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

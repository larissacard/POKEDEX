import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { userAutenticatedGuard } from './services/guards/user-autenticated.guard';
import { SearchComponent } from './pages/search/search.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [userAutenticatedGuard],
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [userAutenticatedGuard],
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [userAutenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DocumentComponent } from './document/document.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentSearchComponent } from './document-search/document-search.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSearchComponent } from './user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'document-detail', component: DocumentDetailComponent },
  { path: 'document-search', component: DocumentSearchComponent },
  { path: 'user', component: UserComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'user-search', component: UserSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

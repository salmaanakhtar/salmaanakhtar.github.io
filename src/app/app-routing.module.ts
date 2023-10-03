import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BloghomepageComponent} from "./bloghomepage/bloghomepage.component";

const routes: Routes = [
  { path: 'blog', component: BloghomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

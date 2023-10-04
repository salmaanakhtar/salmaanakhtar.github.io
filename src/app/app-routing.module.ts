import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BloghomepageComponent} from "./bloghomepage/bloghomepage.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";


const routes: Routes = [
  { path: 'blog', component: BloghomepageComponent },
  // { path: '**', pathMatch: 'full',
  //   component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'app-bloghomepage',
  templateUrl: './bloghomepage.component.html',
  styleUrls: ['./bloghomepage.component.css']
})
export class BloghomepageComponent {
  panelOpenState = false;
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { RouterLink } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";
@Component({
  selector: 'app-home-page',
  imports: [MatIcon, MatSlideToggle, FormsModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  isDark: boolean = true;
}

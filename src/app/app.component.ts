import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MotusComponent } from "./motus/motus.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MotusComponent, MotusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'schoolhouse';
}

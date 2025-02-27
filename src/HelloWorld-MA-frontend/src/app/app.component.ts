import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NamesComponent } from './names/names.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld-MA-frontend';
}

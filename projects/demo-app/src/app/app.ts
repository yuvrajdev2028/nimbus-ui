import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'nimbus-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  title = 'demo-app';
  isLoading = false;

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}

import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BotpressService} from './services/botpress-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private botpressService = inject(BotpressService);
  ngOnInit() {}
}

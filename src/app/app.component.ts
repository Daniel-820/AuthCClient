import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { FirstKeyPipe } from './shared/pipes/first-key.pipe';


@Component({
  selector: 'app-root',
  imports: [UserComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'AuthCClient';
}

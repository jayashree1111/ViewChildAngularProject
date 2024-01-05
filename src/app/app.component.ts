import { Component ,ViewChild} from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ViewChild';

  @ViewChild(HeaderComponent) heading:HeaderComponent

  ongetName()
  {
    alert(this.heading.name)
  }
  callChildFunction()
  {
    alert(this.heading.name)
    this.heading.callMe();
  }
}

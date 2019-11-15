import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Array<string> = ['1', '2', '3'];

  constructor(private appService: AppService) {

  }

  emit(event: string) {
    console.log(event);
  }

  sendMessage() {
    this.appService.trigger.next({name: 'Gergő'});
  }
}

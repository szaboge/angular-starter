import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService, TransferValue} from '../app.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
  valtozo = 'Hello!';

  @Input() bemenet: string;
  @Output() kimenet = new EventEmitter<string>();

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.trigger.subscribe((value: TransferValue) => {
      console.log(value);
    });
  }

  onClick() {
    this.kimenet.emit(this.bemenet);
  }
}

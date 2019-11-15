import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

export interface TransferValue {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  trigger = new Subject<TransferValue>();

  constructor() {

  }
}

import { Injectable} from '@angular/core';
import { Output,EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class EmtrService {

  @Output() fire:EventEmitter<any> = new EventEmitter();

  constructor() { }

  logInBtnSwitch(value){
    this.fire.emit(value);
  }

  getEmittedValueForLogbtnSwitch(){
    return this.fire;
  }
}

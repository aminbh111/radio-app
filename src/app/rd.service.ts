import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdService {
  radiochange: EventEmitter<Object> = new EventEmitter();
  radio:  { name: string, img: string , link: string};
  constructor() { }
  setRadio(radio: {name: string, img: string , link: string}) {
      this.radio = radio;
      this.radiochange.emit(this.radio);
  }
  getRadio() {
     return this.radio;
  }
}

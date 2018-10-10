import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  programme = { time: String, label: String };
  programmes = Array(this.programme);
  constructor() { }
    @Input() radioData;
  ngOnInit() {

  }

}

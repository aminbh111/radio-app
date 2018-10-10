import { Component, OnInit } from '@angular/core';
import {RdService} from '../rd.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
    radiostation: { name: string, img: string , link: string};
    programmes: Array<{programme: string, time: string}> = [];
    expand: boolean;
    constructor(private rdservice: RdService, private http: HttpClient) {

    }
    getRadioStationProgrammes(radio) {
        this.expand = !this.expand;
        this.http.get('https://www.ifm.tn/', {responseType: 'text'}).subscribe( data  => {
            let div: HTMLHtmlElement;
            let programmesdiv: NodeListOf<Element>;
            div = document.createElement('html');
            div.innerHTML =  String(data).trim();
            programmesdiv = div.querySelectorAll('body > header > div:nth-child(4) > div > div > div.programs-outer-wrapper > div > div');
            Array.from(programmesdiv).forEach(item => {
                const programme = item.getAttribute('data-program-name');
                const time = item.querySelector('.program-time').innerHTML.trim();
                this.programmes.push({ programme, time});
            });
         });

    }
   ngOnInit() {
      this.radiostation = { name: 'IFM',
        img: 'http://tun-radio.com/files/images/81.png', link: 'http://5.135.142.50:8000/direct'};
      this.rdservice.radiochange.subscribe(
          (radiostation) => {
              this.radiostation = this.rdservice.getRadio();
          }
      );
  }

}

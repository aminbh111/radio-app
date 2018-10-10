import { Component, OnInit } from '@angular/core';
import { RdService } from '../rd.service';
@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss']
})
export class RadiosComponent implements OnInit {
    radios = [
         { name: 'Mosaique FM', img: 'http://tun-radio.com/files/images/13.png', link: 'http://radio.mosaiquefm.net:8000/mosalive'},
        { name: 'IFM',
            img: 'http://tun-radio.com/files/images/16.png', link: 'http://5.135.142.50:8000/direct'},
         { name: 'Misk', img: 'http://tun-radio.com/files/images/81.png', link: 'http://178.32.253.134:8000/stream?type=.mp3'},
         { name: 'Radio 6', img: 'http://tun-radio.com/files/images/19.png', link: 'http://streaming.radio6tunis.net:8000/radio6tunis'},
         { name: 'QURAN', img: 'http://tun-radio.com/files/images/58.png', link: 'http://5.135.194.225:8000/live'},
         { name: 'Zitouna FM', img: 'http://tun-radio.com/files/images/10.png', link: 'http://212.83.172.11:8414/zitounafm'},
         { name: 'Knooz FM', img: 'http://tun-radio.com/files/images/57.png', link: 'http://streaming.knoozfm.net:8000/knoozfm'},
         { name: 'Diwan FM', img: 'http://tun-radio.com/files/images/50.png', link: 'http://stream8.tanitweb.com/diwanfm'},
         { name: 'Sousse FM', img: 'http://tun-radio.com/files/images/66.png', link: 'http://50.22.218.73:31790/;stream.mp3'},
         { name: 'Express FM', img: 'http://tun-radio.com/files/images/15.png',
             link: 'http://expressfm.ice.infomaniak.ch/expressfm-64.mp3'},
         { name: 'Shems FM', img: 'http://tun-radio.com/files/images/11.png', link: 'http://stream6.tanitweb.com/shems?1410907221976.mp3'},
         { name: 'Saraha FM', img: 'http://tun-radio.com/files/images/21.png', link: 'http://ns326208.ip-37-59-9.eu:8000/sarahafm'},
         { name: 'Cap FM', img: 'http://tun-radio.com/files/images/17.png', link: 'http://stream6.tanitweb.com/capfm'}
    ];
    slideConfig = { 'dots': true, arrows: true, slidesToShow: 8 ,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]};
  constructor(private rdservice: RdService) {

  }
    setRadioStation(radio) {
       this.rdservice.setRadio(radio);
    }

  ngOnInit() {
  }

}

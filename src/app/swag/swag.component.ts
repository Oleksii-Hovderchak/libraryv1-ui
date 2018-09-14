import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-swag',
  templateUrl: './swag.component.html',
  styleUrls: ['./swag.component.css']
})
export class SwagComponent implements OnInit {
  public text: string;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/main/').subscribe(value => {
        this.text = value.text;
      },
      error => {

        console.log('Hueta happened: ', error);
      });

  }

}

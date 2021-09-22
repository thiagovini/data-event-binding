import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';

  cursoAngular = true;

  urlImage = 'https://t.ctcdn.com.br/8FplhVkDQdAatiUcehCimgkGJlI=/512x288/smart/i257652.jpeg';

  getValor(){
    return 2;
  }

  getCurtirCurso(){
    return this.cursoAngular;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

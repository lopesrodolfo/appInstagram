import { Component, OnInit, trigger } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [])
  ]
})
export class AcessoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

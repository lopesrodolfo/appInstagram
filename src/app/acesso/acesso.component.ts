import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void -> criado', [
        style({ opacity: 0, transform: 'translate(-50px,0px)' }),
        animate('500ms 0ms ease-in-out') // duração, delay, aceleração
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void -> criado', [
        style({ opacity: 0, transform: 'translate(50px,0px)' }),
        animate('500ms 0ms ease-in-out') // duração, delay, aceleração
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner = "criado"

  public estadoPainel = "criado"

  public cadastro: boolean = false

  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false
  }

}

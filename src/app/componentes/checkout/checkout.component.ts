import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from 'src/app/servicos/carrinho.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    cep: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    estado: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
  }
  get itens(){
    return this.carrinhoService.itens
}

get total(){
  return this.carrinhoService.total;
}
pagar($event: any) {
  $event.preventDefault();
  alert(JSON.stringify(this.form.value));
}
}

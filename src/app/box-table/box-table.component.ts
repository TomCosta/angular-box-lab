import { Component, Input, OnInit } from '@angular/core';
import { respostaApi, Operacao } from '../models/operacao.models';
import { TabelaService } from '../services/data-tabela/tabela.service';

@Component({
  selector: 'app-box-table',
  templateUrl: './box-table.component.html',
  styleUrls: ['./box-table.component.css']
})
export class BoxTableComponent implements OnInit {

  @Input() tabela = {} as Operacao;
  @Input() words: string | undefined;
  @Input() fields: string | undefined;

  constructor(    
  ){    
  }

  ngOnInit() {    
  }
}

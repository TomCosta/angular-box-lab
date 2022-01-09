import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { TabelaService } from "../services/data-tabela/tabela.service";
import { respostaApi } from '../models/operacao.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.css']
})
export class BoxFormComponent implements OnInit {

  buscaForm: FormGroup = new FormGroup({});
  formCondition: boolean = false;
  infosTabela!: respostaApi;
  buscaFields: string = 'operacao';
  buscaWord: any;
  
  constructor(
    private tabelaService: TabelaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.getDataTabela();
    this.searchWord();
  }
  
  initForms(){
    // this.buscaForm = this.formBuilder.group({
    //   codigoCliente: ['', Validators.required],
    //   numeroOperacao: ['', Validators.required],
    //   infosConta: ['', Validators.required],
    // });

    this.buscaForm = new FormGroup({
      codigoCliente: new FormControl('', Validators.required),
      numeroOperacao: new FormControl('', Validators.required),
      infosConta: new FormControl('', Validators.required),
    });
  }

  focusCampo(activeField: string){
    activeField==='codigoCliente'?this.buscaForm.get('codigoCliente')?.enable():this.buscaForm.get('codigoCliente')?.disable();
    activeField==='numeroOperacao'?this.buscaForm.get('numeroOperacao')?.enable():this.buscaForm.get('numeroOperacao')?.disable();
    activeField==='infosConta'?this.buscaForm.controls['infosConta'].enable():this.buscaForm.controls['infosConta'].disable();
  }

  habilitarCampos(){
    this.buscaForm.reset();
    this.buscaForm.enable();
  }

  searchWord() {
    this.buscaForm.get('codigoCliente')?.valueChanges
      .subscribe((term: FormGroup) => {
        if(term){          
          this.setBusca(term.toString());
        }
      });
      this.buscaForm.get('numeroOperacao')?.valueChanges
      .subscribe((term: FormGroup) => {
        if(term){          
          this.setBusca(term.toString());
        }
      });
      this.buscaForm.get('infosConta')?.valueChanges
      .subscribe((term: FormGroup) => {
        if(term){          
          this.setBusca(term.toString());
        }
      });
  }

  setBusca(term: string){
    this.buscaWord = term;
  }

  getDataTabela(){
    this.tabelaService.getTabela().subscribe((resInfosTabela: respostaApi) => {
      if(resInfosTabela['operacoes'].length>0){
        this.infosTabela = resInfosTabela;
      }
    });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { respostaApi } from "./../../models/operacao.models";

@Injectable({
  providedIn: 'root'
})

export class TabelaService {

  public url = " http://localhost:3000/data"; // npx json-server --watch src/assets/data/db.json

  constructor(
    public httpClient: HttpClient
  ) { }

  getTabela(): Observable<respostaApi> {
    return this.httpClient.get<respostaApi>(this.url);
  }


}


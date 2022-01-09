export interface Operacao {
  operacao?: string;
  conta?: string;
  cpf?: string;
  produto?: string;
  canal?: string;
  valor?: string;
  contratacao?: string;
  situacao?: string;
  operacoes: Array<Operacao>;
}

export interface respostaApi {
  operacoes: Operacao[];
}

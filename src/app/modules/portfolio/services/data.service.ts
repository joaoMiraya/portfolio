import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Projeto {
  id: string;
  name: string;
  title: string;
  description: string;
  path: string;
  url: string;
}
interface Tecnologia {
  id: string;
  name: string;
  path: string;
}

interface Formacao {
  id: string;
  name: string;
  title: string;
  path: string;
  status: string;
}
interface Contato {
  id: string;
  name: string;
  url: string;
  icon: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  public tecs: Tecnologia[] = [];
  public projects: Projeto[] = [];
  public formation: Formacao[] = [];
  public contacts: Contato[] = [];

  ngOnInit(): void {
    this.http.get<{ projetos: Projeto[], tecnologias: Tecnologia[], formacao: Formacao[], contato: Contato[] }>('assets/data/data.json').subscribe(data => {
      this.tecs = data.tecnologias;
      this.projects = data.projetos;
      this.formation = data.formacao;
      this.contacts = data.contato;
    });
  }
}

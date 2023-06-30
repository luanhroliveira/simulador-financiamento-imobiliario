import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import {ParametrosCalculoFinanciamento} from "../dto/ParametrosCalculoFinanciamento";

@Injectable({
  providedIn: 'root'
})
export class TabelaFinanciamentoApiLogService {

  private url = 'http://localhost:3001/dadosCalcFinanc';

  constructor(private http: HttpClient) { }

  getData(): Promise<ParametrosCalculoFinanciamento> {

    return lastValueFrom(this.http.get<ParametrosCalculoFinanciamento>(this.url));
  }

  postData(data: any): Promise<ParametrosCalculoFinanciamento> {
    return lastValueFrom(this.http.post<ParametrosCalculoFinanciamento>(this.url, data));
  }
}

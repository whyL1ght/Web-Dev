import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Company {
  id: number,
  name: string,
  description: string,
  city: string,
  address: string
}

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private apiURL = 'http://127.0.0.1:8000/api/companies/';

  private companiesCache: Company[] = [];

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(this.apiURL);
  }


}

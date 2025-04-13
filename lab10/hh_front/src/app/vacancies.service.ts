import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Vacancy {
  id: number,
  name: string,
  description: string,
  company: number,
  salary: number,
}


@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  private apiURL =  'http://127.0.0.1:8000/api/vacancies/'
 

  private companiesCache: Vacancy[] = [];

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(this.apiURL);
  }

}

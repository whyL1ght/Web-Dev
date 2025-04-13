import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesService, Vacancy } from '../vacancies.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vacancy',
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
getTopTen() {
throw new Error('Method not implemented.');
}
  topTenVacancies: Vacancy[] = [];
  vacancies: Vacancy[] = [];
  
    constructor(private vacancyService: VacanciesService, private http: HttpClient){}
  
    ngOnInit(): void{
      this.vacancyService.getCompanies().subscribe(data => {this.vacancies  = data})
    }

    getTopTenVacancies(): void {
      this.http.get<any[]>(`http://127.0.0.1:8000/api/vacancies/top_ten/`)
        .subscribe(data => {
          this.topTenVacancies = data;
          console.log('Top 10 vacancies:', this.topTenVacancies);
        });
    }

}

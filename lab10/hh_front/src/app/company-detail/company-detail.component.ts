import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VacanciesService, Vacancy } from '../vacancies.service';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {

  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>(`http://127.0.0.1:8000/api/companies/${companyId}/vacancies/`)
      .subscribe(data => {
        this.vacancies = data;
      });
  }
}

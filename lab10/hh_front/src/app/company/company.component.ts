import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompaniesService, Company } from '../companies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  
  companies: Company[] = [];
  
  constructor(private companyService: CompaniesService, private router: Router){}
  
  ngOnInit(): void{
    this.companyService.getCompanies().subscribe(data => {this.companies  = data})
  }
 
  goToVacancies(companyId: number): void {
    this.router.navigate(['/company', companyId, 'vacancies']);
  }
  
}

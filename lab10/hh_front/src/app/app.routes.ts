import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'company', component: CompanyComponent},
    { path: 'vacancy', component: VacancyComponent},
    { path: 'company/:id/vacancies', component: CompanyDetailComponent},

];

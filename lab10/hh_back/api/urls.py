from django.urls import path
from . import views, views_fbv
from .views_cbv import CompanyCRUDAPIView, VacancyCRUDAPIView

urlpatterns = [
    # GET - FBV and CBV
    path('companies/', views.company_list), # list all company 
    path('companies/<int:id>/', views.company_detail), # get one company 
    path('companies/<int:id>/vacancies/', views.company_vacancies), # list vacancies of company 
    path('vacancies/', views.vacancy_list),  # list all vacancies
    path('vacancies/<int:id>/', views.vacancy_detail), # get ont vacancy 
    path('vacancies/top_ten/', views.top_ten_vacancies), # get top 10 vacancy by salary

    # POST, PUT, DELETE - FBV
    path('fbv/crud/companies/', views_fbv.company_list_create),
    path('fbv/crud/companies/<int:id>/', views_fbv.company_detail_crud),
    path('fbv/crud/vacancies/', views_fbv.vacancy_list_create),
    path('fbv/crud/vacancies/<int:id>/', views_fbv.vacancy_detail_crud),

    # POST, PUT, DELETE - CBV
    path('cbv/crud/companies/', CompanyCRUDAPIView.as_view()),
    path('cbv/crud/companies/<int:id>/', CompanyCRUDAPIView.as_view()),
    path('cbv/crud/vacancies/', VacancyCRUDAPIView.as_view()),
    path('cbv/crud/vacancies/<int:id>/', VacancyCRUDAPIView.as_view()),
    
]

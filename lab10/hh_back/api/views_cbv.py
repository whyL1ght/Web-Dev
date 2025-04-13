from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.shortcuts import get_object_or_404

# Class Based Views
class CompanyCRUDAPIView(APIView):
    # get company
    def get(self, request, id=None):
        if id:
            company = get_object_or_404(Company, id=id)
            serializer = CompanySerializer(company)
        else:
            companies = Company.objects.all()
            serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    # create company 
    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    # update company by id 
    def put(self, request, id):
        company = get_object_or_404(Company, id=id)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    # delete company by id
    def delete(self, request, id):
        company = get_object_or_404(Company, id=id)
        company.delete()
        return Response(status=204)
    
class VacancyCRUDAPIView(APIView):
    # get vacancy
    def get(self, request, id=None):
        if id:
            vacancy = get_object_or_404(Vacancy, id=id)
            serializer = VacancySerializer(vacancy)
        else:
            vacancies = Vacancy.objects.all()
            serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    
    # create vacancy
    def post(self, request):
        serializer = VacancySerializer(data=request.data)  # user manual serializer
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    # update vacancy by id 
    def put(self, request, id):
        vacancy = get_object_or_404(Vacancy, id=id)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    # delete vacancy by id 
    def delete(self, request, id):
        vacancy = get_object_or_404(Vacancy, id=id)
        vacancy.delete()
        return Response(status=204)


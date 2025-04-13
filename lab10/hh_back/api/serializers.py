from rest_framework import serializers
from .models import Company, Vacancy

# serializers.ModelSerializer — автоматическая сериализация на основе модели.

# serializers.Serializer — ручная сериализация, ты сам указываешь поля и логику.

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

# manual serializer where we create logic by own 
class VacancyCustomSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.IntegerField() 

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company_id = validated_data.get('company', instance.company_id)
        instance.save()
        return instance
    

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'




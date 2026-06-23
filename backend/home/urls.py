from django.urls import path
from .views import food_list

urlpatterns = [
    path('foods/', food_list),
]
from django.urls import path
from .views import submit_learning_activity, dashboard, export_csv

urlpatterns = [
    path('submit/', submit_learning_activity, name='submit_activity'),
    path('dashboard/', dashboard, name='dashboard'),
    path('export/', export_csv, name='export_csv'),
]

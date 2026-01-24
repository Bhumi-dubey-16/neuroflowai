from django.urls import path
from .views import (
    user_activity_view,
    admin_dashboard_view,
    export_responses_csv,
    analytics_api,
    api_submit_response,
    api_list_responses
)

urlpatterns = [
    # Admin / Dashboard
    path('dashboard/', admin_dashboard_view, name='admin_dashboard'),
    path('dashboard/api/analytics/', analytics_api, name='analytics_api'),
    path('export-csv/', export_responses_csv, name='export_responses_csv'),

    # User activity
    path('', user_activity_view, name='user_activity'),

    # Hackathon API
    path('api/responses/submit/', api_submit_response, name='api_submit_response'),
    path('api/responses/list/', api_list_responses, name='api_list_responses'),
]

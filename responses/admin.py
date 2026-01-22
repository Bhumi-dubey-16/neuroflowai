from django.contrib import admin
from .models import Response

@admin.register(Response)
class ResponseAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "confidence_score", "created_at")
    list_filter = ("created_at",)
    search_fields = ("user__email", "transcript")

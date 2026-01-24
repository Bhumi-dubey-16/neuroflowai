from django.contrib import admin
from django.http import HttpResponse
import csv
from .models import LearningResponse


# ---------- CSV ACTION ----------
def export_as_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="learning_responses.csv"'

    writer = csv.writer(response)
    writer.writerow(['User', 'Transcript', 'Confidence Score', 'Created At'])

    for obj in queryset:
        writer.writerow([
            obj.user,
            obj.transcript,
            obj.confidence_score,
            obj.created_at
        ])

    return response


# ---------- ADMIN CONFIG ----------
@admin.register(LearningResponse)
class LearningResponseAdmin(admin.ModelAdmin):
    list_display = ('user', 'confidence_score', 'created_at')

    # ❗ THIS IS IMPORTANT
    list_display_links = None   # ensures checkbox column appears

    actions = [export_as_csv]

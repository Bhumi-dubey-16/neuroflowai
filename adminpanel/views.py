from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.db.models import Avg, Count
from django.contrib.auth import get_user_model
from django.http import HttpResponse
import csv

from .models import LearningResponse
from .utils import generate_ai_response

User = get_user_model()

# ---------------- STUDENT SIDE ---------------- #

@login_required
def submit_learning_activity(request):
    if request.method == "POST":
        user_text = request.POST.get("content")

        transcript, confidence = generate_ai_response(user_text)

        LearningResponse.objects.create(
            user=request.user,
            transcript=transcript,
            confidence_score=confidence
        )

        return render(request, "activity_done.html", {
            "transcript": transcript,
            "confidence": confidence
        })

    return render(request, "submit_activity.html")


# ---------------- ADMIN DASHBOARD ---------------- #

@staff_member_required
def dashboard(request):
    total_users = User.objects.count()
    total_responses = LearningResponse.objects.count()
    avg_confidence = LearningResponse.objects.aggregate(
        avg=Avg('confidence_score')
    )['avg'] or 0

    responses_per_user = (
        LearningResponse.objects
        .values('user')
        .annotate(count=Count('id'))
    )

    return render(request, "dashboard.html", {
        "total_users": total_users,
        "total_responses": total_responses,
        "avg_confidence": round(avg_confidence, 2),
        "responses_per_user": responses_per_user
    })


@staff_member_required
def export_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="learning_data.csv"'

    writer = csv.writer(response)
    writer.writerow(['User', 'Transcript', 'Confidence', 'Created'])

    for r in LearningResponse.objects.all():
        writer.writerow([r.user, r.transcript, r.confidence_score, r.created_at])

    return response

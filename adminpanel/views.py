from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.db.models import Avg
from django.http import HttpResponse, JsonResponse
import csv
import json
from .models import LearningResponse
from ai_engine.ai_module import generate_ai_response  # Bhumi’s AI logic

# ===============================
# User Activity Page (Frontend)
# ===============================
@login_required
def user_activity_view(request):
    return render(request, "activity_form.html")


# ===============================
# Admin Dashboard
# ===============================
@login_required
def admin_dashboard_view(request):
    responses = LearningResponse.objects.select_related("user").all()
    total_responses = responses.count()
    avg_confidence = responses.aggregate(avg=Avg("confidence_score"))["avg"] or 0

    context = {
        "total_responses": total_responses,
        "avg_confidence": round(avg_confidence, 2),
        "responses": responses
    }
    return render(request, "admin_dashboard.html", context)


# ===============================
# CSV Export
# ===============================
@login_required
def export_responses_csv(request):
    responses = LearningResponse.objects.select_related("user").all()
    response = HttpResponse(content_type="text/csv")
    response["Content-Disposition"] = 'attachment; filename="learning_responses.csv"'

    writer = csv.writer(response)
    writer.writerow(["User Email", "AI Feedback", "Confidence Score"])

    for r in responses:
        user_email = r.user.email if r.user else "Unknown"
        writer.writerow([user_email, r.transcript, r.confidence_score])

    return response


# ===============================
# Analytics API
# ===============================
@login_required
def analytics_api(request):
    responses = LearningResponse.objects.select_related("user").all()

    confidence_scores = [
        {
            "user": r.user.email if r.user else "Unknown",
            "confidence": r.confidence_score or 0
        }
        for r in responses
    ]

    avg_confidence = responses.aggregate(avg=Avg("confidence_score"))["avg"] or 0

    data = {
        "total_responses": responses.count(),
        "average_confidence": round(avg_confidence, 2),
        "confidence_scores": confidence_scores,
    }
    return JsonResponse(data)


# ===============================
# Hackathon API: Submit Learning
# ===============================
@login_required
def api_submit_response(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST required"}, status=400)
    try:
        body = json.loads(request.body)
        transcript = body.get("transcript", "").strip()
        difficulty = int(body.get("difficulty", 2))

        if not transcript:
            return JsonResponse({"error": "Empty transcript"}, status=400)

        # Call AI module (Bhumi’s logic)
        ai_result = generate_ai_response(transcript, difficulty)
        feedback = ai_result.get("feedback", "")
        confidence = ai_result.get("confidence", 0)
        bullets = ai_result.get("bullets", [
            "Point 1 placeholder",
            "Point 2 placeholder",
            "Point 3 placeholder"
        ])

        # Save to DB
        LearningResponse.objects.create(
            user=request.user,
            transcript=transcript,
            confidence_score=confidence
        )

        return JsonResponse({
            "summary": feedback,
            "bullets": bullets,
            "confidence": confidence
        })

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


# ===============================
# Hackathon API: List Responses
# ===============================
@login_required
def api_list_responses(request):
    responses = LearningResponse.objects.select_related("user").order_by("-id")

    response_list = []
    for r in responses:
        response_list.append({
            "id": r.id,
            "transcript": r.transcript,
            "feedback": r.transcript,
            "confidence_score": r.confidence_score,
            "date": r.created_at.strftime("%A, %b %d")
        })

    return JsonResponse({"responses": response_list})

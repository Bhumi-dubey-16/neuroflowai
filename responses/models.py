from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator

class Response(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="responses"
    )

    transcript = models.TextField()
    feedback = models.TextField(blank=True)

    confidence_score = models.FloatField(
        validators=[MinValueValidator(0.0), MaxValueValidator(100.0)]
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Response {self.id} | {self.user.email}"

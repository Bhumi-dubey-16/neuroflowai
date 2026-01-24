# adminpanel/models.py
from django.db import models
from django.conf import settings

class LearningResponse(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    transcript = models.TextField()
    confidence_score = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Learning Response"
        verbose_name_plural = "Learning Responses"

    def __str__(self):
        return str(self.user)

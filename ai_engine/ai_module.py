# ai_engine/ai_module.py

def generate_ai_response(user_text):
    """
    Safe AI feedback generator.
    Always returns feedback + confidence.
    Never crashes (hackathon-safe).
    """

    # Fallback defaults (VERY IMPORTANT)
    default_feedback = (
        "Good effort! You are on the right track. "
        "Try to explain your ideas more clearly and confidently."
    )
    default_confidence = 60

    try:
        # ---- MOCK / PLACEHOLDER AI LOGIC ----
        # (Replace later with Gemini / OpenAI if needed)

        word_count = len(user_text.split()) if user_text else 0

        if word_count < 10:
            feedback = "Try to give a slightly more detailed response."
            confidence = 40
        elif word_count < 30:
            feedback = "Nice attempt. Your understanding is developing well."
            confidence = 65
        else:
            feedback = "Excellent explanation! You showed strong understanding."
            confidence = 85

        return {
            "feedback": feedback,
            "confidence": confidence
        }

    except Exception as e:
        # 🔒 Absolute safety net
        print("AI Error:", e)
        return {
            "feedback": default_feedback,
            "confidence": default_confidence
        }

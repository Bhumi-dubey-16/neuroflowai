import random

def generate_ai_response(user_text):
    """
    Simulates AI analyzing student's learning input.
    Replace this later with Gemini / OpenAI.
    """

    # ✅ Safety check for empty or None input
    if user_text is None or str(user_text).strip() == "":
        return {
            "feedback": "No input was provided. Please try again.",
            "confidence": 0.5
        }

    try:
        insights = [
            "Student shows strong conceptual clarity.",
            "Student understands basics but needs revision.",
            "Student struggles with key concepts.",
            "Student demonstrates excellent analytical ability.",
            "Student needs simplified explanations."
        ]

        transcript = f"""
        AI Analysis Summary:
        -------------------
        Input Length: {len(user_text.split())} words
        Insight: {random.choice(insights)}
        """

        confidence_score = round(random.uniform(0.55, 0.95), 2)

        # ✅ Always return JSON-like dict (frontend-friendly)
        return {
            "feedback": transcript.strip(),
            "confidence": confidence_score
        }

    except Exception:
        # ✅ Fallback if anything unexpected happens
        return {
            "feedback": "We couldn’t analyze this response properly, but keep trying!",
            "confidence": 0.5
        }
    
    

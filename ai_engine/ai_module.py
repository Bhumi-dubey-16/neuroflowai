def generate_ai_response(user_text, difficulty=2):
    """
    Safe AI feedback generator.
    Always returns feedback + confidence + bullets.
    """

    default_feedback = (
        "Good effort! You are on the right track. "
        "Try to explain your ideas more clearly and confidently."
    )
    default_confidence = 60
    default_bullets = [
        "Keep trying to explain clearly",
        "Break down complex ideas",
        "Focus on key points"
    ]

    try:
        word_count = len(user_text.split()) if user_text else 0

        if difficulty == 1:  # Easy
            feedback = "Simplified explanation: focus on basics."
            confidence = 50 + min(word_count, 50)
        elif difficulty == 2:  # Medium
            feedback = "Medium explanation: adds some details."
            confidence = 60 + min(word_count, 40)
        else:  # Advanced
            feedback = "Advanced explanation: detailed & thorough."
            confidence = 70 + min(word_count, 30)

        bullets = [
            f"Key idea {i+1}" for i in range(3)
        ]

        return {
            "feedback": feedback,
            "confidence": confidence,
            "bullets": bullets
        }

    except Exception as e:
        print("AI Error:", e)
        return {
            "feedback": default_feedback,
            "confidence": default_confidence,
            "bullets": default_bullets
        }

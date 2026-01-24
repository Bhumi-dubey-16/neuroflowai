import random

def generate_ai_response(user_text):
    """
    Simulates AI analyzing student's learning input.
    Replace this later with Gemini / OpenAI.
    """

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

    return transcript.strip(), confidence_score

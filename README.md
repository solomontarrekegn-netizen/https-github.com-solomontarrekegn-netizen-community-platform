# Ask Community — Telegram MVP

A Telegram community bot where people can ask questions, receive an optional AI answer, answer other people's questions, discuss, and react.

## MVP features

- `/start` and a simple main menu
- Ask a question
- Browse recent questions
- Open a question
- Community answers
- Discussion/comments
- 👍 / 👎 reactions
- Automatic Gemini answer when `GEMINI_API_KEY` is configured
- SQLite database for the first MVP
- No real secrets are stored in the repository

## Run locally

1. Create a Telegram bot with `@BotFather` and copy the bot token.
2. Copy `.env.example` to `.env`.
3. Add your `BOT_TOKEN`.
4. Optional: add a Gemini API key for AI answers.
5. Install Python 3.12+.
6. Run:

```bash
python -m venv .venv
# Windows:
.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

pip install -r requirements.txt
python -m app.main
```

The bot uses long polling, so no webhook or domain is required for the first test.

## Product flow

User → Ask Question → Choose Category → Question saved → AI answer (optional) → Community answers → Discussion → Reactions.

## Next phase

After this MVP works, add PostgreSQL, a public Telegram channel + discussion group, moderation, profiles/reputation, notifications, and then connect the same backend to the Ask Community web app.

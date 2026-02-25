# FindMyWord

A real-time speaking helper for English learners. Browse 119 high-frequency American English expressions organized by **speaker intention** — not grammar rules — so you can find the right word exactly when you need it.

## What it does

When you're speaking English and momentarily blank on a word or phrase, FindMyWord lets you quickly look up natural expressions by what you're *trying* to do:

- **Start speaking** — kick off a thought naturally
- **Connect ideas** — link sentences with contrast, cause, addition
- **Clarify / Rephrase** — fix what you just said or explain it better
- **Organize ideas** — structure your thoughts in order
- **Give an example** — illustrate your point
- **Emphasize** — stress what really matters
- **Show opinion** — share your take on something
- **Be careful / Polite** — soften your words
- **Conclude / Wrap up** — land the ending
- **Buy time / Sound natural** — fill pauses without awkward silence

Every expression includes usage tips, a short description, and spoken-style example sentences.

## Tech stack

- **React 18** with hooks
- **Vite** for dev/build
- **Tailwind CSS 3** for styling
- **Lucide React** for icons

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — no extra config needed
4. Deploy

The app will be live at your Vercel URL.

## Responsive layout

- **Mobile** (< 1024px): Stacked single-view navigation (categories → list → detail)
- **Desktop** (>= 1024px): 3-column master-detail layout with independent scrolling panels

## Project structure

```
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx          # Entry point
    ├── index.css         # Tailwind directives + scrollbar styles
    └── App.jsx           # Full application (data + UI)
```

## License

MIT

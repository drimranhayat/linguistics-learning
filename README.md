# Linguistics Lab

A responsive, dependency-free learning website using all 270 supplied MCQs:

- Lecture 1: Language and Linguistics — 80 questions
- Lecture 2: Branches of Linguistics — 90 questions
- Lecture 3: Phonetics and Phonology — 100 questions

## Features

Learning mode with immediate feedback; exam mode with feedback after submission; results and missed-question retry; lecture, topic, difficulty, and question-pool filters; optional question and option randomization; searchable question bank; bookmarks; local practice progress; dark theme; mobile layout; keyboard-accessible controls; original source-slide references and applicable clarification notes. All option IDs are preserved for grading. No backend, account, API key, installation, or external font/CDN is required.

## Open locally

Open `index.html` directly in a browser, or run `python -m http.server 8000` from the project directory and visit http://localhost:8000. The bundled data loads without fetch requests. Browser storage behavior for file URLs varies; use the local server for reliable progress persistence. Quiz sessions are in memory and restart after a refresh; completed answers and bookmarks persist in this browser when storage is available. Exam responses are recorded only after submission. There is no timer.

## Publish on GitHub Pages

1. Create a GitHub repository, such as `linguistics-learning`.
2. Upload this folder's **contents**, including `.github/workflows/pages.yml`, to its `main` branch. If using the GitHub web uploader, verify that the hidden `.github` directory is included; Git is the most reliable upload method.
3. In repository **Settings → Pages**, choose **GitHub Actions** as the source.
4. Run the **Deploy GitHub Pages** workflow from the Actions tab, or push a new commit to `main`.
5. The deployment's environment provides the public URL.

Alternative: choose **Deploy from a branch**, `main`, `/ (root)` in Pages settings; the website also works without the workflow.

## Content maintenance

The three original JSON files are preserved in `data/`. `data.js` is a generated browser bundle. After modifying a JSON file, run `python scripts/bundle.py` and commit the JSON and bundle together. Run `python scripts/validate.py` to validate the bank and bundle. `node --check app.js` checks JavaScript syntax.

The content follows the uploaded question banks, including their source references and lecture-specific clarifications. It has not been independently revalidated against the original slides or external references. Practice is concept-based; no official exam blueprint is claimed. Original slide decks are not included. The question bank contains answer keys and is intended for self-study, not secure examination delivery.

## Privacy and customization

Progress, latest correctness per question, bookmarks, and theme stay in browser local storage. No analytics or tracking is included. Clearing site data removes them. Edit the footer in `index.html` to change attribution and profile link. Edit CSS variables in `style.css` to adjust colors. No redistribution license is asserted for the supplied educational data; confirm your rights before public redistribution.

## Responsive design and verification

Fluid sizing and dedicated breakpoints cover compact phones (including 320px), larger phones, tablets, iPad portrait/landscape, desktops and wide screens. Touch controls target at least 44px, form text stays at 16px, long answers wrap, and lecture cards stack on narrow screens. Reduced-motion preferences and print styles are supported. Data validation and JavaScript syntax checks passed. A desktop browser smoke test verified setup, question loading, shuffled-option grading, and explanation display. Physical iPad/iPhone/Android hardware and all browser combinations have not been tested; inspect those before a large public rollout.

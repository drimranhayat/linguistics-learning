# Linguistics Lab

A responsive, dependency-free learning website using all 800 supplied MCQs:

- Lecture 1: Language and Linguistics — 80 questions
- Lecture 2: Branches of Linguistics — 90 questions
- Lecture 3: Phonetics and Phonology — 100 questions
- Lecture 4: Morphology and Grammatical Units — 140 questions
- Lecture 5: Grammar and Linguistic Analysis — 80 questions
- Lecture 6: Introduction to Syntax — 120 questions
- Lecture 7: Semantics: The Study of Meaning — 110 questions
- Lecture 8: Pragmatics: Meaning in Context — 80 questions
- Separate revision collection — 200 one-liners (not MCQs)

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

The eight original MCQ JSON files are preserved in `data/`. `data.js` is a generated browser bundle. After modifying a JSON file, run `python scripts/bundle.py` and commit the JSON and bundle together. Run `python scripts/validate.py` to validate the bank and bundle. `node --check app.js` checks JavaScript syntax.

The content follows the uploaded question banks, including their source references and lecture-specific clarifications. It has not been independently revalidated against the original slides or external references. Practice is concept-based; no official exam blueprint is claimed. Original slide decks are not included. The question bank contains answer keys and is intended for self-study, not secure examination delivery.

## Privacy and customization

Progress, latest correctness per question, bookmarks, and theme stay in browser local storage. No analytics or tracking is included. Clearing site data removes them. Edit the footer in `index.html` to change attribution and profile link. Edit CSS variables in `style.css` to adjust colors. No redistribution license is asserted for the supplied educational data; confirm your rights before public redistribution.

## Responsive design and verification

Fluid sizing and dedicated breakpoints cover compact phones (including 320px), larger phones, tablets, iPad portrait/landscape, desktops and wide screens. Touch controls target at least 44px, form text stays at 16px, long answers wrap, and lecture cards stack on narrow screens. Reduced-motion preferences and print styles are supported. Data validation and JavaScript syntax checks passed. A desktop browser smoke test verified setup, question loading, shuffled-option grading, and explanation display. Physical iPad/iPhone/Android hardware and all browser combinations have not been tested; inspect those before a large public rollout.

## Updated study experience

Eight distinct lecture palettes, a purple/teal/amber homepage, clear green and rose answer states, and coordinated dark-mode colors. Quick 10 opens mixed learning practice, Review mistakes revisits the latest incorrect answers, and Challenge 20 starts a mixed exam. Learning sessions show live correct and attempted counts. Existing bookmark and practice-progress storage keys are preserved.

Update verification: All six source JSON files match the supplied uploads byte-for-byte. The 800-question bundle passes schema, count, unique-ID, option-key, topic, reference, and bundle-parity checks. Updated JavaScript passes syntax validation. Browser preview verification of this revision was unavailable in this session.


## Learning routes and revision

The homepage guides students through revision, topic practice, mixed exam practice, and mistake review. The Progress page reports topic coverage and latest-answer accuracy, with links to preselected topic sessions. Each MCQ topic has a distinct hue shared by its quiz panel, question-bank entry, and progress card. Key concepts use bold and varied dark colors in light mode; all content text is white in dark mode.

The Revision page includes all 200 one-liners, lecture/search/status filters, recall-before-reveal cards, separate bookmarks, learned status, and a local review schedule. Successful recalls schedule the next review after 1, 3, 7, then 14 days; Review again resets a card to due. This is a simple self-rated review aid, not a validated adaptive algorithm. No notifications or account sync are included. Revision status uses separate local-storage keys so it does not alter MCQ results.

Run `node scripts/smoke.cjs` for dependency-free renderer checks covering the homepage, revision, progress, question bank, setup, quiz feedback, results, safe term highlighting, and distinct topic hues. These checks do not replace visual browser or physical-device testing. The current revision has not been visually verified in this session.

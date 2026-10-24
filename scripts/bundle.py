import json
from pathlib import Path
root = Path(__file__).resolve().parents[1]
bank = [json.loads(p.read_text(encoding='utf-8')) for p in sorted((root / 'data').glob('lecture_*_mcqs.json'))]
(root / 'data.js').write_text('window.LECTURES = ' + json.dumps(bank, ensure_ascii=False) + ';\n', encoding='utf-8')
print(f'Bundled {sum(len(l["questions"]) for l in bank)} questions.')

revision = json.loads((root / 'data' / 'linguistics_200_one_liners.json').read_text(encoding='utf-8'))
(root / 'revision-data.js').write_text('window.REVISION = ' + json.dumps(revision, ensure_ascii=False) + ';\n', encoding='utf-8')
print(f'Bundled {len(revision["items"])} revision one-liners.')

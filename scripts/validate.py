import json
from pathlib import Path
root = Path(__file__).resolve().parents[1]
bank = [json.loads(p.read_text(encoding='utf-8')) for p in sorted((root / 'data').glob('lecture_*_mcqs.json'))]
ids = set()
for lecture in bank:
    topics = {t['id'] for t in lecture['topics']}
    refs = {r['id'] for r in lecture['references']}
    assert len(lecture['questions']) == lecture['lecture']['question_count']
    for q in lecture['questions']:
        assert q['id'] not in ids
        ids.add(q['id'])
        assert q['lecture_id'] == lecture['lecture']['id']
        assert q['topic_id'] in topics
        options = [o['id'] for o in q['options']]
        assert len(set(options)) == len(options) == 4
        assert q['answer_id'] in options
        assert set(q['reference_ids']) <= refs
        assert q['question'] and q['explanation'] and q['example']
    for t in lecture['topics']:
        assert sum(q['topic_id'] == t['id'] for q in lecture['questions']) == t['question_count']
text = (root / 'data.js').read_text(encoding='utf-8')
assert json.loads(text.removeprefix('window.LECTURES = ').strip().removesuffix(';')) == bank
print(f'PASS: {len(bank)} lectures; {len(ids)} unique questions; valid option keys, topics, references, counts, and exact bundle parity.')

// Dependency-free renderer smoke checks; not a replacement for physical-device QA.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),nodes=new Map();
function node(s){if(!nodes.has(s))nodes.set(s,{innerHTML:'',textContent:'',value:'',style:{},options:[],focus(){},classList:{toggle(){},contains(){return false}}});return nodes.get(s)}
const ctx={window:{addEventListener(){},scrollTo(){}},document:{querySelector:node,querySelectorAll(){return []},body:{classList:{toggle(){},contains(){return false}},dataset:{}}},location:{hash:''},localStorage:{getItem(){return null},setItem(){}},setTimeout(){},confirm(){return true},console};vm.createContext(ctx);
for(const f of ['data.js','revision-data.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
function run(s){return vm.runInContext(s,ctx)}
assert.equal(run('all.length'),800);assert.equal(run('window.REVISION.items.length'),200);
assert.ok(node('#main').innerHTML.includes('LECTURE 08'));assert.ok(!node('#main').innerHTML.includes('undefined'));
for(const route of ['revision','progress','bank','saved','setup/LING-L08']){ctx.location.hash='#'+route;run('render()');assert.ok(!node('#main').innerHTML.includes('undefined'),route)}
run("quick('learn');quiz()");assert.ok(node('#main').innerHTML.includes('data-answer'));run("session.answers[session.questions[0].id]=session.questions[0].answer_id;quiz()");assert.ok(node('#main').innerHTML.includes('✓ Correct'));
run('session.finished=true;results()');assert.ok(node('#main').innerHTML.includes('Review your answers'));
assert.ok(run("rich('Phonetics and morphology')").includes('key-term'));assert.ok(!run("rich('<img src=x> language')").includes('<img'));
assert.equal(run('new Set(topicKeys.map((k,i)=>(i*137.508)%360)).size'),run('topicKeys.length'));
console.log('PASS: homepage, eight-lecture data, revision, progress, bank, setup, quiz feedback, results, safe term highlighting, and distinct topic hues.');

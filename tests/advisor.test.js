import test from 'node:test';
import assert from 'node:assert/strict';
import {advise} from '../lib/advisor.js';

test('real estate keeps vertical capability but returns an actionable solution',()=>{
  const r=advise({industry:'real_estate',hours:20,leads:100,integrations:'some'});
  assert.equal(r.industry.en,'Real Estate');
  assert.ok(r.agents.includes('AI Lead Qualifier'));
  assert.equal(r.complexity,'Medium');
  assert.equal(r.solution.resultClass,'actionable');
  assert.ok(r.solution.bestSolution.length>5);
  assert.ok(r.solution.nextActions.length>=3);
  assert.ok(r.solution.successMetric.length>5);
  assert.ok(r.solution.fallback.length>5);
});

test('weak signal does not force automation',()=>{
  const r=advise({industry:'professional',hours:0,leads:0,integrations:'few'});
  assert.equal(r.recommendation,'Measure before automating');
  assert.equal(r.solution.resultClass,'measure_first');
  assert.match(r.solution.bestSolution,/Measure/i);
  assert.ok(r.opportunityScore<55);
});

test('unknown industry falls back to a useful manual-first solution',()=>{
  const r=advise({industry:'unknown-sector',hours:4,leads:6,integrations:'few'});
  assert.equal(r.industry.en,'Other business');
  assert.ok(r.solution.nextActions.length>=3);
  assert.ok(r.solution.fallback);
});

test('100 diverse business profiles always receive a useful next step without false zero-result behavior',()=>{
  const industries=['real_estate','appointments','professional','ecommerce','hospitality','other'];
  const hours=[0,1,2,4,7,10,15,22,35,60];
  const leads=[0,2,5,9,15,30,60,120,250,600];
  const integrations=['few','some','many'];
  const profiles=Array.from({length:100},(_,i)=>({
    industry:industries[i%industries.length],
    hours:hours[i%hours.length],
    leads:leads[(i*3)%leads.length],
    integrations:integrations[i%integrations.length],
    sensitive:i%11===0
  }));

  assert.equal(profiles.length,100);
  let measureFirst=0;
  let actionable=0;

  for(const [index,profile] of profiles.entries()){
    const r=advise(profile);
    assert.ok(r.solution,`profile ${index} missing solution object`);
    assert.ok(r.solution.problemUnderstood?.length>8,`profile ${index} missing problem understanding`);
    assert.ok(r.solution.bestSolution?.length>5,`profile ${index} missing best solution`);
    assert.ok(r.solution.why?.length>10,`profile ${index} missing rationale`);
    assert.ok(Array.isArray(r.solution.nextActions)&&r.solution.nextActions.length>=3,`profile ${index} missing concrete actions`);
    assert.ok(r.solution.nextActions.every(x=>typeof x==='string'&&x.length>12),`profile ${index} contains empty/vague action`);
    assert.ok(r.solution.successMetric?.length>8,`profile ${index} missing KPI`);
    assert.ok(r.solution.fallback?.length>8,`profile ${index} missing fallback`);
    assert.ok(r.solution.whatWouldChangeAnswer?.length>10,`profile ${index} missing uncertainty/clarification contract`);
    assert.ok(['low','medium','high'].includes(r.solution.confidence),`profile ${index} invalid confidence`);
    assert.ok(r.opportunityScore>=0&&r.opportunityScore<=95,`profile ${index} invalid score`);
    assert.notEqual(r.solution.bestSolution,'0');
    assert.doesNotMatch(r.solution.bestSolution,/no solution|0 result|nothing available/i);
    if(r.solution.resultClass==='measure_first')measureFirst+=1;
    if(r.solution.resultClass==='actionable')actionable+=1;
  }

  assert.ok(measureFirst>0,'suite must include users who should not automate yet');
  assert.ok(actionable>0,'suite must include users with a material automation opportunity');
});

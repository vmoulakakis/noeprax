import test from 'node:test';
import assert from 'node:assert/strict';
import {createAgencyBrief} from '../lib/agency-brief.js';
import handler from '../api/agency-brief.js';
test('Launch/Grow/Automate map to logical teams without activating any agent',()=>{
 for(const service of ['launch','grow','automate']){
  const r=createAgencyBrief({service,goal:'Improve business workflow and client results'});
  assert.equal(r.status,'proposal_only');assert.equal(r.persistentMissionCreated,false);
  assert.equal(r.paidTokens,0);assert.equal(r.externalActions,0);
  assert.equal(r.proposedTeam[0],'master-orchestrator');
  assert.ok(r.proposedTeam.includes('independent-qa'));
 }
});
test('Rejects insufficient goals, unrecognized services and excessively long input',()=>{
 assert.throws(()=>createAgencyBrief({service:'grow',goal:'hi'}),/invalid_goal/);
 assert.throws(()=>createAgencyBrief({service:'delete-production',goal:'remove all records'}),/unsupported_service/);
 assert.throws(()=>createAgencyBrief({service:'grow',goal:'a'.repeat(1600)}),/invalid_goal/);
});
test('Public API cannot create a private mission or invoke paid AI',()=>{
 const req={method:'POST',body:{service:'grow',goal:'Improve customer acquisition results'}};
 const res={statusCode:200,setHeader(){return this},status(n){this.statusCode=n;return this},json(x){this.data=x;return this}};
 handler(req,res);
 assert.equal(res.statusCode,200);assert.equal(res.data.persistentMissionCreated,false);
 assert.equal(res.data.privateAgencyAccessGranted,false);assert.equal(res.data.humanApprovalRequired,true);
});
test('Endpoint denies unsupported methods and invalid payload',()=>{
 const res={statusCode:0,setHeader(){},status(n){this.statusCode=n;return this},json(x){this.data=x;return this}};
 handler({method:'GET'},res);assert.equal(res.statusCode,405);
 handler({method:'POST',body:'{bad'},res);assert.equal(res.statusCode,400);
});

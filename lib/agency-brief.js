// Deterministic NOEPRAX → MyAgenticTeam proposal. No external calls or private data sync.
const SERVICES = Object.freeze({
 launch:{title:'Launch',lead:'development-guru',roles:['cto','development-guru','independent-qa'],
   steps:['Discovery and acceptance contract','Responsive implementation with ECC TDD','Independent security, accessibility and release review'],
   outcome:'A reviewable, tested website or product release'},
 grow:{title:'Grow',lead:'marketing-guru',roles:['marketing-guru','research-specialist','independent-qa'],
   steps:['Evidence-based demand and competitor analysis','SEO/CRO and customer journey plan','Baseline KPIs and measurement methodology'],
   outcome:'A measurable growth plan with source-backed hypotheses'},
 automate:{title:'Automate',lead:'cto',roles:['cto','development-guru','independent-qa'],
   steps:['Audit existing workflow and data sensitivity','Design approval-gated automation','Test failure recovery, privacy and real ROI'],
   outcome:'An audited automation pilot with clear human approvals'},
});
export function createAgencyBrief(input={}) {
 if(!input || typeof input!=='object' || Array.isArray(input)) throw Error('invalid_input');
 const service=String(input.service||'').trim();
 const locale=input.locale==='el'?'el':'en';
 const goal=input.goal;
 if(!Object.hasOwn(SERVICES,service))throw Error('unsupported_service');
 if(typeof goal!=='string'||goal.trim().length<12||goal.length>1500)throw Error('invalid_goal');
 const selected=SERVICES[service];
 return {
   schemaVersion:'noeprax.agency-brief.v1',
   status:'proposal_only',
   source:'NOEPRAX',
   destination:'MyAgenticTeam (not transmitted)',
   locale,service,title:selected.title,goal:goal.trim(),
   assignedExecutive:selected.lead,proposedTeam:['master-orchestrator',...selected.roles],
   process:selected.steps,outcome:selected.outcome,
   humanApprovalRequired:true,privateAgencyAccessGranted:false,
   persistentMissionCreated:false,externalActions:0,paidTokens:0,
   note:locale==='el'
    ?'Πρόταση μόνο. Δεν δημιουργήθηκε εργασία στο ιδιωτικό AI Agency OS και δεν στάλθηκαν δεδομένα.'
    :'Proposal only. No private Agency OS mission was created and no data was transferred to another service.',
 };
}

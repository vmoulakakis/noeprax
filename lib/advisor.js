const verticals={
  real_estate:{
    label:{en:'Real Estate',el:'Μεσιτικά'},
    agents:['AI Lead Qualifier','AI Follow-up Agent','AI Viewing Scheduler'],
    tools:['CRM','Email','Calendar','Property knowledge base'],
    focus:'lead response and follow-up',
    solution:{
      title:'Lead-response operating loop',
      problem:'Slow or inconsistent lead response and follow-up',
      actions:[
        'Put every new enquiry into one visible queue with owner, source and next action.',
        'Define a response SLA and 3–5 qualification questions before adding automation.',
        'Use templates or an agent for first drafts and reminders, with human approval for pricing, promises and exceptions.'
      ],
      metric:'Median first-response time and percentage of qualified leads followed up within the SLA',
      fallback:'Use a shared inbox/CRM view plus saved replies and a daily follow-up checklist before connecting an agent.'
    }
  },
  appointments:{
    label:{en:'Appointments & Local Services',el:'Ραντεβού & Τοπικές Υπηρεσίες'},
    agents:['AI Front Desk','AI Booking Agent','AI Reminder Agent'],
    tools:['Calendar','Website chat','Email/SMS','Approved FAQ knowledge'],
    focus:'booking, missed enquiries and reminders',
    solution:{
      title:'Enquiry-to-booking loop',
      problem:'Missed enquiries, slow booking and avoidable no-shows',
      actions:[
        'Create one intake path that captures service, preferred time and contact details.',
        'Publish clear booking rules, cancellation rules and a short approved FAQ.',
        'Automate reminders and safe availability checks only after the calendar rules are reliable.'
      ],
      metric:'Enquiry-to-booking conversion, no-show rate and time to confirmed appointment',
      fallback:'Use a booking form, calendar blocks and manual reminder templates before an AI front desk.'
    }
  },
  professional:{
    label:{en:'Professional Services',el:'Ελεύθεροι Επαγγελματίες'},
    agents:['AI Client Intake','AI Inbox Agent','AI Operations Copilot'],
    tools:['Email','Documents','Calendar','CRM / client registry'],
    focus:'repetitive admin and client communication',
    solution:{
      title:'Inbox-to-action workflow',
      problem:'Too much time is lost turning messages and documents into follow-up work',
      actions:[
        'Separate incoming work into client request, document, scheduling and internal-task queues.',
        'Standardize the information required before work begins and create reusable response/checklist templates.',
        'Use AI first for summarising, drafting and task extraction; keep sending, commitments and sensitive decisions behind approval.'
      ],
      metric:'Weekly admin hours, inbox age and percentage of requests with a clear next action',
      fallback:'Use folders/labels, intake templates and a daily processing block without automation.'
    }
  },
  ecommerce:{
    label:{en:'Retail & E-commerce',el:'Λιανική & E-commerce'},
    agents:['AI Commerce Assistant','AI Support Triage','AI Retention Agent'],
    tools:['Storefront','Helpdesk','Email','Product catalog'],
    focus:'pre-sale questions and support load',
    solution:{
      title:'Product-question resolution loop',
      problem:'Repeated pre-sale/support questions delay customers and consume staff time',
      actions:[
        'Identify the top repeated questions by product, delivery, returns and compatibility.',
        'Fix missing product-page facts and create an approved answer source before using a chatbot.',
        'Automate retrieval/drafting for known questions and escalate uncertain compatibility, refunds or complaints to a person.'
      ],
      metric:'Support contacts per order, first-response time and escalation/resolution rate',
      fallback:'Improve product pages and macros first; this often removes more tickets than adding an agent.'
    }
  },
  hospitality:{
    label:{en:'Hospitality',el:'Τουρισμός & Φιλοξενία'},
    agents:['AI Guest Concierge','AI Enquiry Agent','AI Upsell Assistant'],
    tools:['Booking/PMS','Email','Website chat','Approved guest knowledge'],
    focus:'multilingual enquiries and guest support',
    solution:{
      title:'Guest-request resolution loop',
      problem:'Repeated multilingual guest questions and hand-offs create response delays',
      actions:[
        'Build one approved guest-information source for arrival, facilities, policies and local logistics.',
        'Route requests into information, booking change, incident and special-request classes.',
        'Automate known information and drafting; keep booking changes, compensation and safety incidents under staff approval.'
      ],
      metric:'Guest response time, repeat-question volume and percentage resolved without rework',
      fallback:'Use a multilingual pre-arrival guide plus saved replies before adding an agent.'
    }
  },
  other:{
    label:{en:'Other business',el:'Άλλη επιχείρηση'},
    agents:['AI Discovery Agent','AI Operations Copilot','AI Customer Assistant'],
    tools:['Email','Calendar','Knowledge base','Workflow automation'],
    focus:'repetitive work and response time',
    solution:{
      title:'One-workflow improvement loop',
      problem:'A recurring task is consuming time or causing slow/inconsistent responses',
      actions:[
        'Choose one repeated workflow with a clear start, finish and owner.',
        'Measure current time, waiting time, errors and rework for one week.',
        'Standardize the manual process first, then automate only the stable steps that are reversible and measurable.'
      ],
      metric:'Cycle time, weekly hours and error/rework rate for the selected workflow',
      fallback:'Keep the workflow manual but use a checklist/template until the process is stable enough to automate.'
    }
  }
};

function nonNegativeNumber(value,fallback=0){const n=Number(value);return Number.isFinite(n)?Math.max(0,n):fallback}

function evidenceConfidence(input){
  const hasHours=input.hours!==undefined&&input.hours!==null&&input.hours!=='';
  const hasLeads=input.leads!==undefined&&input.leads!==null&&input.leads!=='';
  if(hasHours&&hasLeads)return 'medium';
  if(hasHours||hasLeads)return 'low';
  return 'low';
}

export function advise(input={}){
  const v=verticals[input.industry]||verticals.other;
  const hours=nonNegativeNumber(input.hours,0);
  const leads=nonNegativeNumber(input.leads,0);
  const adminWeight=Math.min(hours/40,1);
  const leadWeight=Math.min(leads/200,1);
  const opportunityScore=Math.min(Math.round(20+adminWeight*45+leadWeight*30),95);
  const complexity=input.integrations==='many'?'High':input.integrations==='some'?'Medium':'Low';
  const weakSignal=hours<3&&leads<10;
  const recommendation=weakSignal?'Measure before automating':opportunityScore>=75?'Managed Agentic System':opportunityScore>=55?'Guided Agentic Setup':'Manual-first improvement';
  const actions=weakSignal?[
    'Pick one repeated workflow that is annoying or slow; do not automate the whole business.',
    'Measure its weekly volume, handling time, waiting time and errors for seven days.',
    'Create a simple checklist/template and automate only if the measured friction is material and stable.'
  ]:[...v.solution.actions];
  const bestSolution=weakSignal?{
    title:'Measure one workflow before automating',
    problem:'There is not enough measured friction yet to justify an agentic system',
    actions,
    metric:'Seven-day baseline for volume, handling time, waiting time and errors',
    fallback:'Keep the process manual; revisit automation only when the baseline shows repeatable value.'
  }:{...v.solution,actions};
  return{
    industry:v.label,
    opportunityScore,
    focus:v.focus,
    agents:v.agents,
    tools:v.tools,
    complexity,
    recommendation,
    solution:{
      resultClass:weakSignal?'measure_first':'actionable',
      problemUnderstood:bestSolution.problem,
      bestSolution:bestSolution.title,
      why:weakSignal?'Low measured volume makes premature automation more likely to add cost than remove friction.':`The strongest current signal is ${v.focus}; start with one bounded workflow instead of a broad AI rollout.`,
      nextActions:bestSolution.actions,
      successMetric:bestSolution.metric,
      fallback:bestSolution.fallback,
      confidence:evidenceConfidence(input),
      whatWouldChangeAnswer:'A measured baseline for workflow volume, handling time, waiting time, errors and the exact systems involved can change the recommended level of automation.',
      humanApprovalRequired:Boolean(input.sensitive)||complexity==='High'
    },
    assumptions:[
      'Indicative assessment from the supplied operational volume, not a guaranteed ROI claim',
      'Automation should follow a stable measurable workflow, not replace process discovery',
      'Sensitive or irreversible actions require human oversight'
    ]
  }
}

function appendSolutionFirstResult(){
  const form=document.getElementById('advisorForm');
  if(!form||form.dataset.solutionFirstBound==='1')return;
  form.dataset.solutionFirstBound='1';
  form.addEventListener('submit',()=>{
    setTimeout(()=>{
      const result=document.getElementById('advisorResult');
      const industry=document.getElementById('industry');
      const hours=document.getElementById('hours');
      const leads=document.getElementById('leads');
      const integrations=document.getElementById('integrations');
      if(!result||!industry||!hours||!leads||!integrations)return;
      const r=advise({industry:industry.value,hours:Number(hours.value),leads:Number(leads.value),integrations:integrations.value});
      const s=r.solution;
      result.querySelector('[data-solution-first]')?.remove();
      const section=document.createElement('section');
      section.dataset.solutionFirst='1';
      section.style.cssText='margin-top:1rem;padding:1rem;border-top:1px solid rgba(127,127,127,.25)';
      const heading=document.createElement('h3');
      heading.textContent=`Τι να κάνεις τώρα — ${s.bestSolution}`;
      const problem=document.createElement('p');
      problem.textContent=`Πρόβλημα που εντοπίστηκε: ${s.problemUnderstood}`;
      const why=document.createElement('p');
      why.textContent=s.why;
      const list=document.createElement('ol');
      for(const action of s.nextActions){const li=document.createElement('li');li.textContent=action;list.appendChild(li)}
      const metric=document.createElement('p');
      metric.textContent=`Μέτρησε: ${s.successMetric}`;
      const fallback=document.createElement('p');
      fallback.textContent=`Αν δεν θέλεις/δεν χρειάζεται automation: ${s.fallback}`;
      const confidence=document.createElement('small');
      confidence.textContent=`Confidence: ${s.confidence}. Τι μπορεί να αλλάξει την απάντηση: ${s.whatWouldChangeAnswer}`;
      section.append(heading,problem,why,list,metric,fallback,confidence);
      result.appendChild(section);
    },0);
  });
}

if(typeof document!=='undefined'){
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',appendSolutionFirstResult,{once:true});
  else appendSolutionFirstResult();
}

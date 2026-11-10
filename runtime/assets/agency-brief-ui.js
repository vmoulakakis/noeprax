// NOEPRAX agency service brief: public proposal only, no private mission submission.
(() => {
 const root=document.getElementById('noeprax-agency-brief');
 if(!root)return;
 const form=root.querySelector('form'),out=root.querySelector('[data-brief-result]');
 const button=form.querySelector('button[type="submit"]');
 form.addEventListener('submit',async e=>{
   e.preventDefault();
   button.disabled=true;out.replaceChildren();
   const data={service:form.elements.service.value,locale:document.documentElement.lang.startsWith('el')?'el':'en',
     goal:form.elements.goal.value.trim()};
   try{
     const resp=await fetch('/api/agency-brief',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)});
     if(!resp.ok)throw Error('brief_unavailable');
     const result=await resp.json();
     if(result.status!=='proposal_only'||result.persistentMissionCreated!==false)throw Error('invalid_handoff_status');
     const h=document.createElement('h3');h.textContent=result.title+' — '+(data.locale==='el'?'Πρόταση ομάδας':'Proposed team');
     const p=document.createElement('p');p.textContent=result.note;
     const team=document.createElement('p');team.textContent=result.proposedTeam.join(' · ');
     const details=document.createElement('ol');
     for(const step of result.process){const li=document.createElement('li');li.textContent=step;details.appendChild(li)}
     const copy=document.createElement('button');copy.type='button';copy.textContent=data.locale==='el'?'Αντιγραφή brief':'Copy brief';
     copy.addEventListener('click',async()=>{
       try{await navigator.clipboard.writeText(JSON.stringify(result,null,2));copy.textContent=data.locale==='el'?'Αντιγράφηκε':'Copied';}
       catch{copy.textContent=data.locale==='el'?'Η αντιγραφή δεν διατίθεται':'Clipboard unavailable'}
     });
     out.append(h,p,team,details,copy);
   }catch{
     const error=document.createElement('p');error.role='alert';
     error.textContent=data.locale==='el'?'Η πρόταση δεν δημιουργήθηκε. Δοκιμάστε ξανά.':'Proposal unavailable. Please retry.';
     out.appendChild(error);
   }finally{button.disabled=false;}
 });
})();

import {createAgencyBrief} from '../lib/agency-brief.js';
export default function handler(req,res) {
 res.setHeader?.('Cache-Control','no-store');
 if(req.method!=='POST')return res.status(405).json({error:'method_not_allowed'});
 let input;
 try {
   input=typeof req.body==='string'?JSON.parse(req.body):req.body;
   if(!input||typeof input!=='object'||Array.isArray(input)||JSON.stringify(input).length>3000)throw Error('bad');
   return res.status(200).json(createAgencyBrief(input));
 } catch {
   return res.status(400).json({error:'invalid_agency_brief'});
 }
}

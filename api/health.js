export default function handler(req,res){res.setHeader('Cache-Control','no-store');res.status(200).json({ok:true,service:'noeprax',version:'0.1.0',timestamp:new Date().toISOString()})}

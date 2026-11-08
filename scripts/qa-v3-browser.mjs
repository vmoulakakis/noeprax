import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, normalize, extname } from 'node:path';
import { chromium } from 'playwright';

const root=join(process.cwd(),'public');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.ico':'image/x-icon','.json':'application/json'};
const server=createServer(async(req,res)=>{
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
    const relative=pathname==='/'?'index.html':pathname.replace(/^\/+/, '');
    const safe=normalize(relative);
    if (safe.startsWith('..') || safe.includes('..'+String.fromCharCode(92))) {res.writeHead(403);res.end();return;}
    const file=await readFile(join(root,safe));
    res.writeHead(200,{'content-type':mime[extname(safe)]||'application/octet-stream'});
    res.end(file);
  } catch {
    res.writeHead(404);res.end('Missing release file');
  }
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const address=server.address();
const base='http://127.0.0.1:'+address.port;
let browser;
try {
  browser=await chromium.launch({headless:true});
  for (const width of [320,390,768,1440]) {
    const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce',locale:'el-GR'});
    const page=await context.newPage();
    const errors=[];
    page.on('pageerror',e=>errors.push(String(e)));
    const response=await page.goto(base,{waitUntil:'domcontentloaded'});
    assert.equal(response?.status(),200,'V3 root should load');
    await page.locator('main').first().waitFor();
    const data=await page.evaluate(()=>{
      const hero=document.querySelector('.hero.grid-bg');
      const link=document.querySelector('link[data-noeprax-premium="v1"]');
      const home=document.querySelector('main');
      return {
        hero:!!hero,link:link?.getAttribute('href'),
        cssRules:hero?getComputedStyle(hero).backgroundImage:'',
        overflow:document.documentElement.scrollWidth-window.innerWidth,
        mainText:home?.textContent?.length||0,
        cta:document.querySelectorAll('a.btn').length,
        founder:!!document.getElementById('noeprax-founder-synergy')
      };
    });
    assert.equal(data.link,'/assets/noeprax-premium.css','Premium CSS must load in V3');
    assert.ok(data.hero && data.cssRules.includes('linear-gradient'),'V3 hero and CSS must be rendered');
    assert.ok(data.mainText>500,'Main marketing content disappeared');
    assert.ok(data.cta>=2,'Primary call-to-action links missing');
    assert.ok(data.founder,'Founder cross-link missing');
    assert.ok(data.overflow<=2,'Horizontal overflow '+data.overflow+'px at '+width+'px');
    const buttons=await page.locator('a[href],button').count();
    assert.ok(buttons>=3,'Missing interactive elements');
    if(width===390||width===1440)await page.screenshot({path:'noeprax-v3-'+width+'.png',fullPage:true});
    console.log('V3_BROWSERVIEW_PASS='+JSON.stringify({width,...data,buttons,jsErrors:errors.slice(0,2)}));
    await context.close();
  }
} finally {
  await browser?.close();
  await new Promise(resolve=>server.close(resolve));
}

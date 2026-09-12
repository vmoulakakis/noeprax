(()=>{
const SUPABASE_URL='https://rpfadpdnnxequgvdcfoq.supabase.co';
const SUPABASE_KEY='sb_publishable_NkMSCtURWbZcA8MCY1H5sA_W_G10WYD';
const $=id=>document.getElementById(id);
const safeNext=()=>{const raw=new URLSearchParams(location.search).get('next')||'/report';return raw.startsWith('/')&&!raw.startsWith('//')?raw:'/report'};
const msg=(text,type='info')=>{const el=$('authMessage');if(!el)return;el.textContent=text;el.dataset.type=type;el.hidden=false};
const client=window.supabase?.createClient(SUPABASE_URL,SUPABASE_KEY,{auth:{persistSession:true,detectSessionInUrl:true,autoRefreshToken:true}});
if(!client){msg('Authentication library failed to load.','error');return}
window.NOEPRAX_AUTH={client,SUPABASE_URL,SUPABASE_KEY};

async function providerStatus(){
  try{
    const r=await fetch(`${SUPABASE_URL}/auth/v1/settings`,{headers:{apikey:SUPABASE_KEY,Authorization:`Bearer ${SUPABASE_KEY}`}});
    const s=await r.json();
    const enabled=!!s?.external?.google;
    const b=$('googleBtn');
    if(b){b.disabled=!enabled;b.textContent=enabled?'Continue with Google':'Google sign-in · provider setup required'}
    const st=$('googleStatus');if(st)st.textContent=enabled?'Google provider is enabled.':'Google provider is not enabled in Supabase yet.';
    return enabled;
  }catch(e){const b=$('googleBtn');if(b){b.disabled=true;b.textContent='Google sign-in · unavailable'}return false}
}

async function renderSession(){
  const {data}=await client.auth.getSession();const session=data?.session;
  const signed=$('signedIn'),signedOut=$('signedOut');
  if(session){
    if(signed)signed.hidden=false;if(signedOut)signedOut.hidden=true;
    const email=$('signedEmail');if(email)email.textContent=session.user.email||'Signed in';
    const next=safeNext();
    if(new URLSearchParams(location.search).get('autocontinue')==='1') location.replace(next);
  }else{if(signed)signed.hidden=true;if(signedOut)signedOut.hidden=false}
}

async function signIn(){
  const email=$('email')?.value.trim(),password=$('password')?.value||'';
  if(!email||!password)return msg('Enter email and password.','error');
  $('emailSignIn').disabled=true;msg('Signing in…');
  const {error}=await client.auth.signInWithPassword({email,password});
  $('emailSignIn').disabled=false;
  if(error)return msg(error.message,'error');
  msg('Signed in. Opening your report…','success');setTimeout(()=>location.replace(safeNext()),150);
}

async function signUp(){
  const email=$('email')?.value.trim(),password=$('password')?.value||'';
  if(!email||password.length<8)return msg('Use a valid email and a password of at least 8 characters.','error');
  $('emailSignUp').disabled=true;msg('Creating account…');
  const {data,error}=await client.auth.signUp({email,password,options:{data:{product:'noeprax',locale:document.documentElement.lang||'en'}}});
  $('emailSignUp').disabled=false;
  if(error)return msg(error.message,'error');
  if(data?.session){msg('Account created. Opening your report…','success');setTimeout(()=>location.replace(safeNext()),150)}
  else msg('Account created. Check your email to confirm it, then sign in here.','success');
}

async function googleSignIn(){
  const enabled=await providerStatus();if(!enabled)return msg('Google OAuth still needs a Google Client ID/Secret enabled in Supabase. Email sign-in is available now.','error');
  const redirectTo=`${location.origin}/login?autocontinue=1&next=${encodeURIComponent(safeNext())}`;
  const {error}=await client.auth.signInWithOAuth({provider:'google',options:{redirectTo}});
  if(error)msg(error.message,'error');
}

async function signOut(){await client.auth.signOut();msg('Signed out.','success');await renderSession()}

document.addEventListener('DOMContentLoaded',async()=>{
  $('emailSignIn')?.addEventListener('click',signIn);
  $('emailSignUp')?.addEventListener('click',signUp);
  $('googleBtn')?.addEventListener('click',googleSignIn);
  $('signOutBtn')?.addEventListener('click',signOut);
  $('continueBtn')?.addEventListener('click',()=>location.assign(safeNext()));
  await providerStatus();await renderSession();
  client.auth.onAuthStateChange(()=>renderSession());
});
})();

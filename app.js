const dialog=document.querySelector('#booking');
const form=document.querySelector('#booking-form');
const content=document.querySelector('#booking-content');
const success=document.querySelector('#booking-success');
function openBooking(service){form.reset();content.hidden=false;success.hidden=true;if(service)form.elements.service.value=service;const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());form.elements.date.min=today.toISOString().slice(0,10);dialog.showModal();}
document.querySelectorAll('.book').forEach(button=>button.addEventListener('click',()=>openBooking()));
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>openBooking(button.dataset.service)));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const date=new Date(data.get('date')+'T12:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});document.querySelector('#request-summary').textContent=`${data.get('pet').trim()} · ${data.get('type')} · ${data.get('service')} · Preferred date: ${date}.`;content.hidden=true;success.hidden=false;document.querySelector('.dialog-close').focus();});
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('.header nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');menu.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');menu.textContent='☰';}));

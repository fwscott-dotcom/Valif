var fs=[].slice.call(document.querySelectorAll('figure')),lb=document.getElementById('lb'),cur=0;
document.getElementById('hero').src=fs[0].querySelector('img').src;
function vis(){return fs.filter(function(f){return!f.hidden})}
function show(i){var v=vis();cur=(i+v.length)%v.length;var im=v[cur].querySelector('img');lb.querySelector('img').src=im.src;lb.querySelector('img').alt=im.alt;lb.querySelector('p').textContent=im.alt}
fs.forEach(function(f){f.querySelector('button').onclick=function(){show(vis().indexOf(f));lb.showModal()}});
document.getElementById('pv').onclick=function(){show(cur-1)};document.getElementById('nx').onclick=function(){show(cur+1)};document.getElementById('cl').onclick=function(){lb.close()};
lb.onclick=function(e){if(e.target===lb)lb.close()};
document.querySelectorAll('.fl button').forEach(function(b){b.onclick=function(){document.querySelectorAll('.fl button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});fs.forEach(function(f){f.hidden=b.dataset.f!=='all'&&f.dataset.c!==b.dataset.f})}});

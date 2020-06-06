const _C  =  document.querySelector('.container'), 
      N  =  _C.children.length;
      let i = 0, x0 = null, locked = false;




function unify(e) {
    console.log("unifying"); 
    return e.changedTouches ? e.changedTouches[0] : e 
};


function lock(e) { 
    console.log("locking");
    x0 = unify(e).clientX
    _C.classList.toggle('smooth', !(locked = true)) 
};



function move(e) {
    console.log("moving");
  if(locked) {
      console.log("x0 = 0");
    let dx = unify(e).clientX - x0, s = Math.sign(dx);
  
    if((i > 0 || s < 0) && (i < N - 1 || s > 0))
    console.log("i>0");
    _C.style.setProperty('--i', i -= s);
    _C.style.setProperty('--tx', '0px');
    _C.classList.toggle('smooth', !(locked = false));
	
    x0 = null
  }
}
_C.style.setProperty('--n', N)
_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener(
    'touchmove', 
    (e) => {
        e.preventDefault();
    },
 false
 );

 function drag(e) {
    e.preventDefault();
  
    if(locked)  
      _C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
  };

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);

_C.addEventListener('mousemove', drag, false);
_C.addEventListener('touchmove', drag, false);

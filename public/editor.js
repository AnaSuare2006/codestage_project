document.getElementById("ard").addEventListener('click', ard);
document.getElementById("brd").addEventListener('click', brd);
document.getElementById("led").addEventListener('click', led);
document.getElementById("wires").addEventListener('click', wires);


var down = document.getElementById('GFG_DOWN'); 
  
function ard() {
    var img = document.createElement('img');
    img.src = 'Frame7.png';
    document.getElementById('body').appendChild(img); 


    img.setAttribute(
        'style',
        'margin-left: 1.5rem; width: 30rem; height: 30rem; margin-top:22rem',
    );

    img.setAttribute('id', '1')  ;
      
} 

function brd() {

    const element = document.getElementById('1');
    element.remove() ;

    var img = document.createElement('img');
    img.src = 'Frame4.png';
    document.getElementById('body').appendChild(img);
    img.setAttribute('id', '2')



    img.setAttribute(
        'style',
        'margin-left: 1.5rem; width: 30rem; height: 30rem; margin-top:22rem',
    );
      
} 

function led() {

    const element = document.getElementById('2');
    element.remove() ;

    var img = document.createElement('img');
    img.src = 'Frame8.png';
    document.getElementById('body').appendChild(img); 
    img.setAttribute('id', '3')

    img.setAttribute(
        'style',
        'margin-left: 1.5rem; width: 30rem; height: 30rem; margin-top:22rem',
    );
      
} 

function wires() {
    
    const element = document.getElementById('3');
    element.remove() ; 

    var img = document.createElement('img');
    img.src = 'Frame9.png';
    document.getElementById('body').appendChild(img); 
    img.setAttribute('id', '4');


    img.setAttribute(
        'style',
        'margin-left: 1.5rem; width: 30rem; height: 30rem; margin-top:22rem',
    );
      
} 
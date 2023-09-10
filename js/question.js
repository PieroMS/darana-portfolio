(function(){
    const d1 = document.querySelector('.d1');
    const d2 = document.querySelector('.d2');
    const d3 = document.querySelector('.d3');
    const res1 = document.querySelector('.res1');
    const res2 = document.querySelector('.res2');
    const res3 = document.querySelector('.res3');
    d1.addEventListener('click',()=>{
        res1.classList.toggle('down');
        if(res1.classList.contains('down')){
            d1.src = "assets/up.svg";
        }else{
            d1.src = "assets/down.svg";
        }        
    });
    d2.addEventListener('click',()=>{
        res2.classList.toggle('down');
        if(res2.classList.contains('down')){
            d2.src = "assets/up.svg";
        }else{
            d2.src = "assets/down.svg";
        }        
    });
    d3.addEventListener('click',()=>{
        res3.classList.toggle('down');
        if(res3.classList.contains('down')){
            d3.src = "assets/up.svg";
        }else{
            d3.src = "assets/down.svg";
        }        
    });
})();
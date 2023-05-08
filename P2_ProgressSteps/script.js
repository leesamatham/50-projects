const progress=document.getElementById('progress');
const pre=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circles');

// program logic - define count variable to count the active circles
let currentActive=1;

// add eventListener to next button
// Increment numbers as steps 
next.addEventListener('click',()=>{
    currentActive++;
    if(currentActive>circles.length){
        currentActive = circles.length;
        //console.log(currentActive);
    }
    // update method is used to add active class
    update();
})
// add eventListener to prev button
// Decrement numbers as steps 
prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive <1){
        currentActive = 1;
        //console.log(currentActive);
    }
    //update to default
    update();
})

function update(){
    // circle and its position
circles.forEach((circle,idx)=>{
if(idx < currentActive){
    circle.classList.add('active');
}else{
    circle.classList.remove('active')
}
})

const actives=document.querySelectorAll('.active');
// active class space coved / toatal space
// calculate on each click and apply CSS
// 1 for get lower percentage
progress.style.width=((actives.length-1)/(circles.length-1)*100 +'%');

if(currentActive===1){
    prev.disabled=true;
}else if(currentActive===circles.length){
    next.disabled=true;

}else{
    prev.disabled=false;
    next.disabled=false;
}
}




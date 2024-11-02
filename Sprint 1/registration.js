let back = document.getElementById('back');
let submit = document.getElementById('submit');
back.addEventListener('click',() =>{
    window.location.href = 'Sprint_1_Login.html';
});

submit.addEventListener('mouseover' ,supershine);
submit.addEventListener('mouseout', removeShine);
back.addEventListener('mouseover' ,supershine2);
back.addEventListener('mouseout', removeShine2);


function supershine(){
    submit.classList.add('shine');
}
function removeShine(){
    submit.classList.remove('shine');
}
function supershine2(){
    back.classList.add('shine');
}
function removeShine2(){
    back.classList.remove('shine');
}
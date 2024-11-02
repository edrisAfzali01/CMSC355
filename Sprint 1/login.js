let testUser = {
    userName : 'Test',
    passWord : '123',
    name : 'jon',
    lastName : 'dlapgoat'
}
let err = document.getElementById('error');
let suc = document.getElementById('success');
let in_box = document.getElementById('submit');
let up_box = document.getElementById('sign-up');
in_box.addEventListener('mouseover', supershine);
in_box.addEventListener('mouseout', removeShine);
up_box.addEventListener('mouseover', supershine2);
up_box.addEventListener('mouseout', removeShine2); //same shine animation for both buttons on screen
let tgl = document.getElementById('eye-con');
let pfld = document.getElementById('pass-field');
let icon = document.getElementById('nosee');
let form = document.getElementById('login-form');

document.addEventListener('keypress',(event) =>{
    if(event.key === 'Enter'){
        form.submit();
    }
});

//redirect
up_box.addEventListener('click', () =>{
    window.location.href = 'Sprint_1_Registration.html';
});


    




function supershine(){ //gives that fade in effect on mouse hover
    //use an animation effect (transform, ::before, ::after)
    in_box.classList.add("shine"); //adds a shine class which we will define as an animation style in css
}

function removeShine(){
    in_box.classList.remove("shine");
}
function supershine2(){
    up_box.classList.add("shine"); /* I brute force duplicated the same animation function instead of
    passing in a button argument under one function*/
}
function removeShine2(){
    up_box.classList.remove("shine");
}
tgl.addEventListener('click', () =>{
    let change = pfld.getAttribute('type') === 'password' ? 'text' : 'password';
    //this variable gives us a way to alternate between types of text, and therefore
    //visibility; also, it uses a ternary operation, a shorthand way of an if else
    //if the type == 'password' == true, then the type is switched to text, and if vice versa
    //when false
    pfld.setAttribute('type', change);

    //change icon
    tgl.innerHTML = change === 'password' ? 
    '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
    //same ternary operator except it changes the button icon
});




function validUser(){
    let user = document.getElementById('input-field').value;
    let pass = document.getElementById('pass-field').value;
    
    if(testUser.userName === user && testUser.passWord === pass){
        alert(suc.style.display ='block')
        return true;
    }
    else{
        err.style.display = 'block'
        return false;
    }
}


//first: get used to creating functions, look into how js works
//objective: connect database; learn async syntax;
// learn how a query, promise, transaction works.

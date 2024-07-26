let signInButton=document.querySelector(".SignIn");
let signUpButton=document.querySelector(".SignUpFeild");
let Name=document.querySelector(".nameFeild");
let underline=document.querySelector(".underline")
let title=document.querySelector(".title");
let text=document.querySelector(".text");

signInButton.addEventListener('click',()=>{
    Name.style.maxHeight="0";
    title.innerHTML="Sign In";
    text.innerHTML="Close Password";
    signInButton.classList.remove('disable');
    signUpButton.classList.add('disable');
    underline.style.transform='translateX(34px)';
})

signUpButton.addEventListener('click',()=>{
    Name.style.maxHeight="50px";
    title.innerHTML="Sign Up";
    text.innerHTML="Suggest Password";
    signInButton.classList.add('disable');
    signUpButton.classList.remove('disable');
    underline.style.transform="translateX(0)";
})
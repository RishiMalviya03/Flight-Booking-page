let signUpbtn = document.querySelector('.signupbtn');
let signInbtn = document.querySelector('.signinbtn');
let nameFeild = document.querySelector('.namefeild');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let txt = document.querySelector('.txt');

signInbtn = addEventListener('click' ,()=>{
    nameFeild.style.maxHeight = '0';
    title.innerHTML = 'Sign In'
    txt.innerHTML = 'Forget password'
    signUpbtn.classList.add('disable');
    signInbtn.classList.remove('disable');
});

signUpbtn = addEventListener('click',()=>{
    nameFeild.style.maxHeight ='60px';
    title.innerHTML = 'Sign Up';
    txt.innerHTML = 'Password Suggestions';
    signUpbtn.classList.remove('disable');
    signInbtn.classList.add('disable');
})

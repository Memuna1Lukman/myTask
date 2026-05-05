const account = document.getElementById("createAccount");
const inputFields = document.querySelectorAll(".inputs");
const para = document.getElementById("para");
const password = document.getElementById("password");
account.addEventListener('click',(e)=>{
    console.log(e.target.value)
    e.preventDefault();
    accountBtn();
    // alert('Button clicked');
    
});




function accountBtn(){
    // Create a p tag that will show that a user account has been successfully created
    
   para.innerText = ""
    const emptyField = Array.from(inputFields).filter(input => input.value.trim() === "");
    if (emptyField.length === 0){
        para.innerText = `Account created successfully`;
        para.style.color = "green";
    }else{
        para.innerText = `Fill all accounts`;
        para.style.color = "red";
    }
}


// Validating the passwords
// passwords input should contain more than 9 characters
// if it is less than 9 red outline and green outline 
// password should have at least an uppercase letter,special symbol and a number

password.addEventListener('input',(e)=>{
    const passInput = e.target.value.trim();
    const passArray = passInput.split("");
    const digits = "0123456789";
    const asciiLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const symbols = "!@#$%^&*";
    const hasLength = passArray.length >= 9;
    const hasNumber = passArray.some((password) => digits.includes(password));
    const hasLetters = passArray.some((password) => asciiLetters.includes(password));
    const hasSymbol = passArray.some((password) => symbols.includes(password));
    if (hasLength && hasNumber && hasLetters && hasSymbol){
        e.target.style.border = "2px solid green";
    }else{
        e.target.style.border = "2px solid red";
    }
    
});



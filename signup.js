// url for sign in up API
validateUserUrl = 'https://66607b995425580055b41c4e.mockapi.io/signUpDatabase'

// button
let btn = document.getElementById('signupBtn')

// sign up proccess
btn.addEventListener('click', ()=>{

    // inputs
    let userName = document.getElementById("signupUserName")
    let user = document.getElementById("signupUser")
    let email = document.getElementById("signupEmail")
    let pwd = document.getElementById("signupPwd")
    
    // regEx for validation
    validateUsername = /^[A-Za-z]{3,}$/
    validateUser = /^[A-Z]$/
    validateEmail = /^[A-Za-z0-9]+@+[a-z]+\.+[a-z]{2-4}$/
    validatePwd = /^[0-9]{4,}$/


    // validate signup
    if(userName==="" || user==="" || email == "" || pwd === ""){
        alert("Enter Your Information!!")
    }
    //   if (!validateUsername.test(userName.value) && !validateUser.test(user.value) && !validateEmail.test(email.value) && !validatePwd.test(pwd.value)){
    //     alert('invalid informaions!!')
    // } 
    else if (!validateUsername.test(userName.value)){
        alert('Invalide User Name!!')
    } else if (!validateUser.test(user.value)){
        console.log(user.value);
        alert('Invalide User!!')
    } else if (!validateEmail.test(email.value)){
        alert('Invalide Email!!')
    } else if (!validatePwd.test(pwd.value)){
        alert('Invalide Password!!')
    } else {

        // post data
        let res =  fetch(validateUserUrl , {
            method: 'POST',
            body:JSON.stringify({
                username: userName.value,
                User : user.value,
                email: email.value,
                password: pwd.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let json =  res.json()
        window.location.href="login.html"
    }

    


})
// url for sign in up API
validateUserUrl = 'https://66607b995425580055b41c4e.mockapi.io/signUpDatabase'

// button
let btn = document.getElementById('loginBtn')

// login
btn.addEventListener('click', async()=>{
    let loginUser = document.getElementById('loginUser').value
    let loginPwd = document.getElementById('loginPwd').value
    let tempUserVal
    let tempPwdVal
    // let tempUserName

    if(loginUser==="" || loginPwd ===""){
        alert("Enter Your Information!!")
    } else {

        let resp = fetch(validateUserUrl)
        let jeson = await resp.json()
        tempUserVal = await jeson.find((e)=>{
            e.User===loginUser
            tempUserName = e.username
        })
        tempPwdVal = jeson.find((e)=>{
            e.pwd === loginPwd
        })
        if(loginUser===tempUserVal && loginPwd===tempPwdVal){
            localStorage.setItem('userName',tempUserName)
            window.location.href = "index.html"
        } else {
            alert("Invalid UserName of Password")
        }

    }

})
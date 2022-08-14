const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.querySelector("form")
const invalid = document.getElementById('invalid')
document.getElementById('login').addEventListener("click", checkcredentials)

function checkcredentials(e) {
    if (email.value == 'sankey901@solutions.com' && password.value == 'mindset') {
        form.setAttribute('action','welcome.html')
    }
    else {
        if (email.value != 'sankey901@solutions.com' && password.value == 'mindset') {
            document.getElementById('invalid').innerHTML='invalid email'
        }
        else if (password.value!='mindset' && email.value == 'sankey901@solutions.com') {
            document.getElementById('invalid').innerHTML='invalid password'
        }
        else{
            document.getElementById('invalid').innerHTML='invalid username and password';
        }   
        e.preventDefault()     
    }
}

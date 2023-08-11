var allInput=document.querySelectorAll("input")
 function storeData()
 {
    var email = allInput[1].value
    var password = allInput[2].value
    localStorage.setItem("email",email)
    localStorage.setItem("passwors",password)
    window.open("./homePage.html")
 }
 function clearData()
 {
    localStorage.clear()
 }
//Validador usando if/else

function minSize(pwd) {
    if (pwd.length < 8) {
        return false;
    } else {
        return true
    }
}
console.log(minSize("$Ff1Xx%"))

//Validador sem if/else
function hasMinLength(password) {
    return password.length >= 8
}
console.log(hasMinLength("2#SsCc3#"))
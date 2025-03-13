function crypto(pass){
    const arrPass = pass.split('').reverse()
    const path_1 = arrPass.splice(0,4);
    const newPass = arrPass.concat(path_1).join('');
    return newPass;



    
}
 
function check(pass2,pass1) {
    if (crypto(pass2) == pass1) {
        return true
    } else {
        return false
    }
}   



console.log(crypto('Password'))

console.log(check('ssaPdrow' , 'Password'))
console.log(check('ssaPaarow' , 'Password'))









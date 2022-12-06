/* Crie uma função que receba uma string e retorne true se for um palíndromo,
ou false, se não for. */


function verificaPalindrome (string){

    let spl = string.split ('') 
    let rev = spl.reverse('')
    let joi = rev.join('')
        
    if ( joi === string) { 
        return true
    } else {
        return false
    }

}
    
    console.log(verificaPalindrome('arara'))
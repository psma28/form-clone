export function letterCharValidator(input){
    for(let i = 0; i<input.length; i++){
        if(!isCharacterALetter(input.charAt(i))){
            return false;
        }
    }
    return true;
}
    
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
}
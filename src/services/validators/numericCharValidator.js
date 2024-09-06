export function numericCharValidator(input){
    for(let i = 0; i<input.length; i++){
        if(isNaN(+input.charAt(i))){
            return false;
        }
    }
    return true;
}
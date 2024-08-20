function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharacters = "0123456789";
    const symbolCharacters = "_-+=!@#$";

    let allowedCharacters = "";
    let password = "";
    
    allowedCharacters += includeLowercase ? lowerCaseCharacters : "";
    allowedCharacters += includeUppercase ? upperCaseCharacters : "";
    allowedCharacters += includeNumbers ? numberCharacters : "";
    allowedCharacters += includeSymbols ? symbolCharacters : "";

    if(length <= 0) {
        return `(Password length must be at least 1)`;
    }

    if(allowedCharacters.length === 0){
        return`(At least 1 set of character needs to be true)`;
    }

    for (let character = 0; character < length; character++) {
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomIndex];
    }
    
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);

console.log(`Generated password: ${password}`);    
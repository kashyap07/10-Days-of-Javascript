// Conditional Statements: If-Else

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 5 && score <= 10) {
        grade = 'E';
    } else if (score > 10 && score <= 15) {
        grade = 'D';
    } else if (score > 15 && score <= 20) {
        grade = 'C';
    } else if (score > 20 && score <= 25) {
        grade = 'B';
    } else if (score > 25 && score <= 30) {
        grade = 'A';
    } else {
        grade = 'F';
    }
    
    return grade;
}

// ------------------------------------------------------------------------------------------------

// Conditional Statements: Switch

function getLetter(s) {
    let letter;
    // Write your code here
    
    const A = ['a', 'e', 'i', 'o', 'u'];
    const B = ['b', 'c', 'd', 'f', 'g'];
    const C = ['h', 'j', 'k', 'l', 'm'];

    switch(s.charAt(0)) {
        case ('a' || 'e' || 'i' || 'o' || 'u'):
            letter = 'A';
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;
        default:
            letter = 'D'
    }
    
    return letter;
}

// ------------------------------------------------------------------------------------------------

// Loops

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (let i=0; i<s.length; ++i) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s[i])) {
            console.log(s[i]);
        }
    }
    for (let i=0; i<s.length; ++i) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s[i]) == false) {
            console.log(s[i]);
        }
    }
}

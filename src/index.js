const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


    function decode(expr) {
        let result = '';
        for (let i = 0; i < expr.length; i += 10) {
            const s = expr.slice(i, i + 10)
            if (s[0] === '*') {
                result += ' '
                continue
            }
            let morze = ''
            for (let j = 0; j < 10; j += 2) {
                const a = s[j] + s[j + 1]
                if (a === '10') {
                    morze += '.'
                }
                if (a === '11') {
                    morze += "-"
                }
            }
            result += MORSE_TABLE[morze]
    
        }
        return result
    }
    
    module.exports = {
        decode
    }
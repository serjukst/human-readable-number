module.exports = function toReadable (number) {
    const humanNumber = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'one hundred',
      200: 'two hundred',
      300: 'three hundred',
      400: 'four hundred',
      500: 'five hundred',
      600: 'six hundred',
      700: 'seven hundred',
      800: 'eight hundred',
      900: 'nine hundred',
    }
  
    let str = String(number), dozens;
  
    if (str.length === 1 || number > 9 && number < 20) {return humanNumber[number]};
    
    if (str.length === 2) {
      dozens = +str - str.charAt(1);
      if(str.charAt(1) === "0") {
        return humanNumber[dozens];
      } else {
      return humanNumber[dozens] + " " +  humanNumber[str.charAt(1)]
      }
    };
    
    if (str.length === 3) {
        let hundred = +str.charAt(0);
        dozens = str.charAt(1) + "0";

        if (str.charAt(1) === "1") {
            dozens = str.charAt(1) + str.charAt(2);
            return humanNumber[hundred] + " hundred" + " " + humanNumber[dozens];
        }
        
        if (str.charAt(2) !== "0" && str.charAt(1) !== "0") {
            return humanNumber[hundred] + " hundred" + " " + humanNumber[+dozens] + " " + humanNumber[+str.charAt(2)];
        } else if (str.charAt(1) === "0" && str.charAt(2) === "0") {
            return humanNumber[hundred] + " hundred";
        } else if (str.charAt(2) === "0") {
            return humanNumber[hundred] + " hundred" + " " + humanNumber[+dozens];
        } else if (str.charAt(1) === "0") {
            return humanNumber[hundred] + " hundred" + " " + humanNumber[+str.charAt(2)];
        } 
    };  
  }

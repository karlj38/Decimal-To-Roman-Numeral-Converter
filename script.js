function convertToRoman(num) {
    let arr = num.toString().split("");
    let ones = digit => {
        switch (digit) {
            case "1" :
                arr[arr.indexOf(digit)] = "I";
                break;
            case "2" :
                arr[arr.indexOf(digit)] = "II";
                break;
            case "3" :
                arr[arr.indexOf(digit)] = "III";
                break;
            case "4" :
                arr[arr.indexOf(digit)] = "IV";
                break;
            case "5" :
                arr[arr.indexOf(digit)] = "V";
                break;
            case "6" :
                arr[arr.indexOf(digit)] = "VI";
                break;
            case "7" :
                arr[arr.indexOf(digit)] = "VII";
                break;
            case "8" :
                arr[arr.indexOf(digit)] = "VIII";
                break;
            case "9" :
                arr[arr.indexOf(digit)] = "IX";
                break;
            case "0" :
                arr[arr.indexOf(digit)] = "";
                break;
        }
    }
    let tens = digit => {
        switch (digit) {
            case "1" :
                arr[arr.indexOf(digit)] = "X";
                break;
            case "2" :
                arr[arr.indexOf(digit)] = "XX";
                break;
            case "3" :
                arr[arr.indexOf(digit)] = "XXX";
                break;
            case "4" :
                arr[arr.indexOf(digit)] = "XL";
                break;
            case "5" :
                arr[arr.indexOf(digit)] = "L";
                break;
            case "6" :
                arr[arr.indexOf(digit)] = "LX";
                break;
            case "7" :
                arr[arr.indexOf(digit)] = "LXX";
                break;
            case "8" :
                arr[arr.indexOf(digit)] = "LXXX";
                break;
            case "9" :
                arr[arr.indexOf(digit)] = "XC";
                break;
            case "0" :
                arr[arr.indexOf(digit)] = "";
                break;
        }
    }
    let hundreds = digit => {
        switch (digit) {
            case "1" :
                arr[arr.indexOf(digit)] = "C";
                break;
            case "2" :
                arr[arr.indexOf(digit)] = "CC";
                break;
            case "3" :
                arr[arr.indexOf(digit)] = "CCC";
                break;
            case "4" :
                arr[arr.indexOf(digit)] = "CD";
                break;
            case "5" :
                arr[arr.indexOf(digit)] = "D";
                break;
            case "6" :
                arr[arr.indexOf(digit)] = "DC";
                break;
            case "7" :
                arr[arr.indexOf(digit)] = "DCC";
                break;
            case "8" :
                arr[arr.indexOf(digit)] = "DCCC";
                break;
            case "9" :
                arr[arr.indexOf(digit)] = "CM";
                break;
            case "0" :
                arr[arr.indexOf(digit)] = "";
                break;
        }
    }
    let thousands = digit => {
        switch (digit) {
            case "1" :
                arr[arr.indexOf(digit)] = "M";
                break;
            case "2" :
                arr[arr.indexOf(digit)] = "MM";
                break;
            case "3" :
                arr[arr.indexOf(digit)] = "MMM";
                break;
            case "4" :
                arr[arr.indexOf(digit)] = "I̅V̅";
                break;
            case "5" :
                arr[arr.indexOf(digit)] = "V̅";
                break;
            case "6" :
                arr[arr.indexOf(digit)] = "V̅I̅";
                break;
            case "7" :
                arr[arr.indexOf(digit)] = "V̅I̅I̅";
                break;
            case "8" :
                arr[arr.indexOf(digit)] = "V̅I̅I̅I̅";
                break;
            case "9" :
                arr[arr.indexOf(digit)] = "I̅X̅";
                break;
            case "0" :
                arr[arr.indexOf(digit)] = "";
                break;
        }
    }
    switch (arr.length) {
        case 1 :
            ones(arr[0]);
            break;
        case 2 :
            tens(arr[0]);
            ones(arr[1]);
            break;
        case 3 :
            hundreds(arr[0]);
            tens(arr[1]);
            ones(arr[2]);
            break;
        case 4 :
            thousands(arr[0]);
            hundreds(arr[1]);
            tens(arr[2]);
            ones(arr[3]);
            break;
    }
    console.log(arr.join(""));
    return arr.join("");
}

convertToRoman(2021);

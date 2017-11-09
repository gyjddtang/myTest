function generateRandomAlphaNum(len, radix) {
    radix = radix ? radix : 10;
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(radix).substr(2));
    return rdmString.substr(0, len);
}

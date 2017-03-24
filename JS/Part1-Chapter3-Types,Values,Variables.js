function testNumber() {
    var intNum = 4;
    var floatNum = 3.333;

    document.write("<p>int Number: " + intNum + '<br>'); //%dfloat Number: %f\n",intNum,floatNum);
    document.write("float Number: " + floatNum + '</p>');
}

function mathTest() {
    document.write("<p>2^10 = " + Math.pow(2, 10) + "<br>");
    document.write("|-5| = " + Math.abs(-5) + "<br>");
    document.write("PI = " + Math.PI + "<br>");
    document.write("natural log = " + Math.E + "<br>");
    document.write("(3)^(1/2) = " + Math.sqrt(3) + "<br>");
    document.write("sin(PI/6) = " + Math.sin(30) + "<br>");
    document.write("round(1.499) = " + Math.round(1.499) + "<br>");
    document.write("ceil(1.001) = " + Math.ceil(1.001) + "<br>");
    document.write("floor(1.999) = " + Math.floor(1.999) + "</p>");
}

function precisionTest(){
    document.write("<p>0.3-0.2 = 0.1? " + ((0.3-0.2) == 0.1) + "<br>");
    document.write("0.2-0.1 = 0.1? " + ((0.2-0.1) == 0.1) + "</p>");
}

function dateTest() {
    var now = new Date();
    document.write("<p>Now is: " + now.toString() + "<br>");
    document.write("Date is: " + now.toLocaleDateString() + "<br>");
    document.write("Time is: " + now.toLocaleTimeString() + "</p>");
}

function escapeSeqTest(){
    document.write("First Line\nSecond Line\nThird Line\n");
    document.write("\tTab and other test: \t\"\t\'\n");
}

function stringTest(){
    var s = "hello, world";      // Start with some text.
    document.write("\n\nString s is: " + s + "\n");

    // => "h": the first character.
    document.write("First character is h: " + s.charAt(0) + "<br>");
    // => "d": the last character.
    document.write("Last character is d: " + s.charAt(s.length-1) + "<br>");
    // => "ell": the 2nd, 3rd and 4th characters.
    document.write("1~4 character is d: " + s.substring(1,4) + " or "+ s.slice(1,4) + "<br>");
    // => "rld": last 3 characters
    document.write("last 3 character is d: " + s.slice(-3) + "<br>");
    
    // => 2: position of first letter l.
    document.write("Where is the first l: " + s.indexOf("l") + "<br>");
    // => 10: position of last letter l.
    document.write("Where is the last 'l': " + s.lastIndexOf("l") + "<br>");
    // => 3: position of first "l" at or after 3
    document.write("position of first 'l at or after 3: " + s.indexOf("l", 3) + "\n\n");

    var str = "original equipment manufacturer";
    var s2 = "equip is at position " + str.indexOf("equip");
    s2 += "<br />";
    s2 += "abc is at position " + str.indexOf("abc");
    document.write(s2 + '\n');

    // => ["hello", "world"] split into substrings
    document.write("Split string: " + s.split(", ") + "<br>");
    // => "Hello, world": replaces all instances
    document.write("'H' replaces 'h' all instances: " + s.replace("h", "H") + "<br>");
    // => "HELLO, WORLD"
    document.write("All upper characters: " + s.toUpperCase() + "<br>");
}

function patternMatchTest(){
    var text = "R65Eew3431fe53fds";      // Start with some text.
    var pattern = /[1-9][0-9]*/
    document.write("\nString is: " + text + "\n");
    document.write("New string: " + text.match(pattern) + "<br>");
}


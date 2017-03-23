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
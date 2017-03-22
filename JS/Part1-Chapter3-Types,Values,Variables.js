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
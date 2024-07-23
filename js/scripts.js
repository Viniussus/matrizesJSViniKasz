/* Criação da primeira matriz */
do {
    var c = parseInt(prompt("Informe a quantidade de colunas da primeira matriz:"));
} while (isNaN(c) || c <= 0);
do {
    var l = parseInt(prompt("Informe a quantidade de linhas da primeira matriz:"));
} while (isNaN(l) || l <= 0);
var matriz1 = [];
for (var i = 0; i < l; i++) {
    var linha = [];
    for (var k = 0; k < c; k++) {
        linha.push(Math.floor(Math.random() * 100));
    }
    matriz1.push(linha);
}
document.write("<p><b>Primeira matriz:</b></p>");
document.write("<table id='centerTable'>");
for (var i = 0; i < matriz1.length; i++) {
    var linha = "<tr>";
    for (var k = 0; k < matriz1[i].length; k++) {
        linha = linha + "<td>" + matriz1[i][k] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");

/* Criação da segunda matriz*/
do {
    var c2 = parseInt(prompt("Informe a quantidade de colunas da segunda matriz:"));
} while (isNaN(c2) || c2 <= 0);
do {
    var l2 = parseInt(prompt("Informe a quantidade de linhas da segunda matriz:"));
} while (isNaN(l2) || l2 <= 0);
var matriz2 = [];
for (var i = 0; i < l2; i++) {
    var linha = [];
    for (var k = 0; k < c2; k++) {
        linha.push(Math.floor(Math.random() * 100));
    }
    matriz2.push(linha);
}
document.write("<p><b>Segunda matriz:</b></p>");
document.write("<table id='centerTable'>");
for (var i = 0; i < matriz2.length; i++) {
    var linha = "<tr>";
    for (var k = 0; k < matriz2[i].length; k++) {
        linha = linha + "<td>" + matriz2[i][k] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table><br><hr>");

/* Soma e subtração das matrizes */
if (c == c2 && l == l2) {
    var matrizSoma = [];
    for (var i = 0; i < l; i++) {
        var linha = [];
        for (var k = 0; k < c; k++) {
            linha.push(matriz1[i][k] + matriz2[i][k]);
        }
        matrizSoma.push(linha);
    }
    document.write("<br><p>Resultado da adição entre as duas matrizes:");
    document.write("<table id='centerTable'>");
    for (var i = 0; i < matrizSoma.length; i++) {
        var linha = "<tr>";
        for (var k = 0; k < matrizSoma[i].length; k++) {
            linha = linha + "<td>" + matrizSoma[i][k] + "</td>";
        }
        linha = linha + "</tr>";
        document.write(linha);
    }
    document.write("</table>");

    var matrizSub = [];
    for (var i = 0; i < l; i++) {
        var linha = [];
        for (var k = 0; k < c; k++) {
            linha.push(matriz1[i][k] - matriz2[i][k]);
        }
        matrizSub.push(linha);
    }
    document.write("<br><p>Resultado da subtração entre as duas matrizes:");
    document.write("<table id='centerTable'>");
    for (var i = 0; i < matrizSub.length; i++) {
        var linha = "<tr>";
        for (var k = 0; k < matrizSub[i].length; k++) {
            linha = linha + "<td>" + matrizSub[i][k] + "</td>";
        }
        linha = linha + "</tr>";
        document.write(linha);
    }
    document.write("</table><br><hr>");
} else {
    document.write("<p>Não é possível fazer a adição e subtração de matrizes de ordens diferentes</p><hr>");
}

/* Multiplicação das matrizes */
if (c == l2) {
    var matrizMult = [];
    for (var i = 0; i < matriz1.length; i++) {
        matrizMult[i] = [];
    }
    for (var i = 0; i < matriz1.length; i++) {
        for (var j = 0; j < matriz2[0].length; j++) {
            var soma = 0;
            for (var k = 0; k < matriz1[0].length; k++) {
                soma = soma + matriz1[i][k] * matriz2[k][j];
            }
            matrizMult[i][j] = soma;
        }
    }
    document.write("<br><p>Resultado da mutliplicação entre as duas matrizes:");
    document.write("<table id='centerTable'>");
    for (var i = 0; i < matrizMult.length; i++) {
        var linha = "<tr>";
        for (var k = 0; k < matrizMult[i].length; k++) {
            linha = linha + "<td>" + matrizMult[i][k] + "</td>";
        }
        linha = linha + "</tr>";
        document.write(linha);
    }
    document.write("</table><br><hr>");
} else {
    document.write("<p>Só é possível fazer a multiplicação de matrizes quando a quantidade de colunas da primeira matriz é igual à quantidade de linhas da segunda</p><hr>");
}

/* Transposição das matrizes */
var matrizT1 = [];
for (var i = 0; i < matriz1[0].length; i++) {
    matrizT1[i] = [];
}
for (var i = 0; i < matriz1.length; i++) {
    for (var k = 0; k < matriz1[i].length; k++) {
        matrizT1[k][i] = matriz1[i][k];
    }
}
document.write("<br><p>Matriz 1 transposta:");
document.write("<table id='centerTable'>");
for (var i = 0; i < matrizT1.length; i++) {
    var linha = "<tr>";
    for (var k = 0; k < matrizT1[i].length; k++) {
        linha = linha + "<td>" + matrizT1[i][k] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");
var matrizT2 = [];
for (var i = 0; i < matriz2[0].length; i++) {
    matrizT2[i] = [];
}
for (var i = 0; i < matriz2.length; i++) {
    for (var k = 0; k < matriz2[i].length; k++) {
        matrizT2[k][i] = matriz2[i][k];
    }
}
document.write("<br><p>Matriz 2 transposta:");
document.write("<table id='centerTable'>");
for (var i = 0; i < matrizT2.length; i++) {
    var linha = "<tr>";
    for (var k = 0; k < matrizT2[i].length; k++) {
        linha = linha + "<td>" + matrizT2[i][k] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table><br><hr>");

function recarregar() {
    location.reload();
}
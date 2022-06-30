/**
 * Arquivo: index.js
 * Data: 30/06/2022
 * Descrição: Desenvolvimento simples de um grafico
 * Author: Orlando dos Santos Dourado
 * 
 * 
 */

var data = [1,14.23,1.71,2.43,15.6,127,2.8,3.06,.28,2.29,5.64,1.04,3.92,1065,
            1,13.2,1.78,2.14,11.2,100,2.65,2.76,.26,1.28,4.38,1.05,3.4,1050,
            1,13.16,2.36,2.67,18.6,101,2.8,3.24,.3,2.81,5.68,1.03,3.17,1185,

];

var scale = d3.scale.linear()
    .domain([0, 654])
    .range([0, 400])

d3.select(".chart")
.select("div")
.data(data)
.enter()
.append("div")
.style("width", (d) =>{
    return 'RS ' + d;
});
/*jslint node:true*/
"use strict";
// create an array with nodes
/* beautify preserve:start */
var nodes = [
    {id: 1, label: "Seattle"},
    {id: 2, label: "Billings"},
    {id: 3, label: "Fargo"},
    {id: 4, label: "Duluth"},
    {id: 5, label: "Detroit"},
    {id: 6, label: "Buffalo"},
    {id: 7, label: "New York"},
    {id: 8, label: "Boston"},
    {id: 9, label: "Portland"},
    {id: 10, label: "Boise"},
    {id: 11, label: "Cheyenne"},
    {id: 12, label: "Minneapolis"},
    {id: 13, label: "Omaha"},
    {id: 14, label: "Chicago"},
    {id: 15, label: "San Fransisco"},
    {id: 16, label: "Salt Lake City"},
    {id: 17, label: "Denver"},
    {id: 18, label: "Kansas City"},
    {id: 19, label: "St. Louis"},
    {id: 20, label: "Cincinnati"},
    {id: 21, label: "Petersburg"},
    {id: 22, label: "Washington DC"},
    {id: 23, label: "Philadelphia"},
    {id: 24, label: "Las Vegas"},
    {id: 25, label: "Santa Fe"},
    {id: 26, label: "Oklahoma City"},
    {id: 27, label: "Memphis"},
    {id: 28, label: "Knoxville "},
    {id: 29, label: "Raleigh"},
    {id: 30, label: "Norfolk"},
    {id: 31, label: "Los Angeles"},
    {id: 32, label: "San Diego"},
    {id: 33, label: "Phoenix"},
    {id: 34, label: "Dallas"},
    {id: 35, label: "Birmingham"},
    {id: 36, label: "Atlanta"},
    {id: 37, label: "Savannah"},
    {id: 38, label: "Huston"},
    {id: 39, label: "New Orleans"},
    {id: 40, label: "Jacksonville"},
    {id: 41, label: "Tampa"},
    {id: 42, label: "Miami"}
];

var edges = [
    {from: 1, to: 2, value: 1},
    {from: 2, to: 3, value: 2},
    {from: 3, to: 4, value: 3},
    {from: 4, to: 5, value: 4}
];
/* beautify preserve:end */

//Temp add x and y

nodes.forEach(function (node, i) {
    var space = 50,
        perRow = 10;
    node.x = (i * space) % (space * perRow);
    node.y = Math.floor(i / perRow) * space;
});

console.log(JSON.stringify(nodes, null, " "));
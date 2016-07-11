/*jslint browser:true*/
/*global d3, nodes, edges, console*/
(function () {
    "use strict";
    var svg = d3.select('#map').append('svg').attr("width", "100%").attr("height", "100%"),
        cities = svg.selectAll('g.city').data(nodes),

        margin = {
            top: 15,
            right: 15,
            bottom: 15,
            left: 15
        };

    function updateTotal() {
        document.getElementById('total').innerHTML = edges.reduce(function (numOut, edge) {
            if (edge.selected) {
                numOut += edge.value;
            }
            return numOut;
        }, 0);
    }
    //update

    function update() {
        var connections = svg.selectAll('g.connection').data(edges);
        //edges
        connections.enter().append('g').attr('class', 'connection').append('line')
            .attr('x1', function (d) {
                return nodes[d.from - 1].x + margin.left;
            })
            .attr('y1', function (d) {
                return nodes[d.from - 1].y + margin.top;
            })
            .attr('x2', function (d) {
                return nodes[d.to - 1].x + margin.left;
            })
            .attr('y2', function (d) {
                return nodes[d.to - 1].y + margin.top;
            })
            .on('click', function (d, i) {
                d.selected = !d.selected;
                update();
                updateTotal();
            });

        connections.select('line').attr('class', function (d) {
            return d.selected ? "selected" : "";
        });
    }
    update();
    //cities
    cities.enter().append('g').attr('class', 'city')
        .append('circle')
        .attr('cx', function (d) {
            return d.x + margin.left;
        })
        .attr('cy', function (d) {
            return d.y + margin.top;
        })
        .attr('r', 12);

}());
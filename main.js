/*jslint browser:true*/
/*global d3, nodes, edges, console*/
(function () {
    "use strict";
    var svg, cities, margin, picture,
        dimensions = {
            width: 900,
            height: 400
        },
        clickCount = 0;


    svg = d3.select('#map')
        .style("width", dimensions.width + "px")
        .style("height", dimensions.height + "px")
        .append('svg')
        .attr("width", "100%")
        .attr("height", "100%");

    picture = svg.append('image')
        .attr("x", 0)
        .attr("y", 0)
        .attr("height", '100%')
        .attr("width", '100%')
        .attr("preserveAspectRatio", 'xMinYMin')
        .attr("href", 'images/usa-mapCrop.jpg')
        .attr("id", 'tempPic');


    cities = svg.selectAll('g.city').data(nodes);

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
                return nodes[d.from - 1].x;
            })
            .attr('y1', function (d) {
                return nodes[d.from - 1].y;
            })
            .attr('x2', function (d) {
                return nodes[d.to - 1].x;
            })
            .attr('y2', function (d) {
                return nodes[d.to - 1].y;
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
            return d.x;
        })
        .attr('cy', function (d) {
            return d.y;
        })
        .attr('r', 12);


}());
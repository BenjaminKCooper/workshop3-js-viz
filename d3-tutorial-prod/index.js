window.onload = function(){
  function color(d){
    return d.color;
  }
  function radius(d){
    return d.r + "px";
  }
  function cx(d){
    return d.cx + "px";
  }
  function changeColor(d){
    return "blue";
  }

  function zoomed(){
    svgMap.select('path')
          .attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')' );
  }

  // ADD THE attributesEnter HERE!
  // var attributesEnter = ;
  var attributesEnter = [{color: 'red', r: 40, cx: 100},  //example line
                    {color: 'blue', r: 20, cx:130},
                    {color: 'orange', r: 10, cx:200},
                    {color: '////', r: 15, cx:50}];


  var zoom = d3.behavior.zoom()
                      .scaleExtent([1, 5])
                      .on("zoom", zoomed);

  var svgCircles = d3.select("svg.circles");
  var svgMap = d3.select("svg.map").call(zoom);

  var circles = svgCircles.selectAll('circle')
                          .data(attributesEnter)
                          .enter()
                          .append("circle")
                          .attr('fill', color)
                          .attr('r', radius)
                          .attr('cx', cx)
                          .attr('cy', '50px');

  // ADD THE attributesExit HERE! Remember to repeat at least one of the elements of attributesEnter
  var attributesExit = [{color: 'red', r: 40, cx: 100}];

  svgCircles.selectAll('circle')
              .data(attributesExit)
              .exit()
              .attr("fill", changeColor);
};

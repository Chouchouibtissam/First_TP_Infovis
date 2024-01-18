var svgC = d3.select("body").append("svg").attr("width", 10000).attr("height", 1000);
var jsonCircles = [/* Define your circle data here */];

// /* partie 1*/
//  var line = svgC.append("line").attr("x1",100).attr("y1",100).attr("x2",200).attr("y2",200).attr("stroke","#82A0D8").attr("stroke-width",10);

//  var circle1 = svgC.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 50).style("fill", "#9AC8EB");

//  var circle2 = svgC.append("circle").attr("cx", 200).attr("cy", 200).attr("r", 50).style("fill", "#F4CFDF");

//  //var rect = svgC.append("rect").attr("x", 100).attr("y", 300).attr("width", 150).attr("height",100).style("fill", "#B6D8FE");

/*Partie 2 
var line1 = svgC.append("line").attr("x1",10).attr("y1",10).attr("x2",10).attr("y2",500).attr("stroke","#82A0D8").attr("stroke-width",5);
var line2 = svgC.append("line").attr("x1",10).attr("y1",500).attr("x2",500).attr("y2",500).attr("stroke","#82A0D8").attr("stroke-width",5);


var bar1 = svgC.append("rect").attr("x", 20).attr("y", 200).attr("width", 100).attr("height",300).style("fill", "#B6D8FE");
var bar1 = svgC.append("rect").attr("x", 140).attr("y", 300).attr("width", 100).attr("height",200).style("fill", "#B6D8FE");
var bar1 = svgC.append("rect").attr("x", 260).attr("y", 400).attr("width", 100).attr("height",100).style("fill", "#B6D8FE");*/

//Partie 3 :


//Dessiner le carré de la maison
var houseSquare = svgC.append("rect")
  .attr("x", 500)
  .attr("y", 400)
  .attr("width", 200)
  .attr("height", 200)
  .style("fill", "#B6D8FE");

// Ajouter deux fenêtres carrées
var window1 = svgC.append("rect")
  .attr("x", 520)
  .attr("y", 420)
  .attr("width", 60)
  .attr("height", 60)
  .style("fill", "#9AC8EB");

var window2 = svgC.append("rect")
  .attr("x", 620)
  .attr("y", 420)
  .attr("width", 60)
  .attr("height", 60)
  .style("fill", "#9AC8EB");

// Ajouter une porte rectangulaire
var door = svgC.append("rect")
  .attr("x", 570)
  .attr("y", 520)
  .attr("width", 60)
  .attr("height", 80)
  .style("fill", "#F4CFDF");

// Ajouter un triangle au-dessus du carré de la maison
var roof = svgC.append("polygon")
  .attr("points", "500,400 600,300 700,400")
  .style("fill", "#82A0D8");

// // Ajouter un cercle jaune en haut
// var sun = svgC.append("circle")
//   .attr("cx", 900)
//   .attr("cy", 100)
//   .attr("r", 50)
//   .style("fill", "yellow");


// Ajouter un cercle avec des rayons
var circleWithRays = svgC.append("g")
  .attr("transform", "translate(900, 200)"); // Déplacer le cercle au centre de la maison

var circleRadius = 50; // Rayon du cercle
var numRays = 12; // Nombre de rayons
var rayLength = 60; // Longueur des rayons

// Dessiner le cercle
circleWithRays.append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", circleRadius)
  .style("fill", "yellow");

// Calculer les points des rayons et les dessiner
for (var i = 0; i < numRays; i++) {
  var angle = (i / numRays) * 2 * Math.PI; // Calculer l'angle
  var x1 = circleRadius * Math.cos(angle); // Calculer la coordonnée x du début du rayon
  var y1 = circleRadius * Math.sin(angle); // Calculer la coordonnée y du début du rayon
  var x2 = (circleRadius + rayLength) * Math.cos(angle); // Calculer la coordonnée x de la fin du rayon
  var y2 = (circleRadius + rayLength) * Math.sin(angle); // Calculer la coordonnée y de la fin du rayon

  // Dessiner le rayon
  circleWithRays.append("line")
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2)
    .attr("stroke", "orange")
    .attr("stroke-width", 2);
}

// Ajouter un nuage
function drawCloud(x, y) {
    // Créer un groupe pour le nuage
    var cloudGroup = svgC.append("g")
      .attr("transform", "translate(" + x + "," + y + ")");
  
    // Dessiner les parties du nuage (cercles)
    cloudGroup.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 20)
      .style("fill", "#D3D3D3"); // Couleur gris clair
  
    cloudGroup.append("circle")
      .attr("cx", 25)
      .attr("cy", -10)
      .attr("r", 25)
      .style("fill", "#D3D3D3");
  
    cloudGroup.append("circle")
      .attr("cx", -25)
      .attr("cy", -10)
      .attr("r", 25)
      .style("fill", "#D3D3D3");
  
    cloudGroup.append("circle")
      .attr("cx", 15)
      .attr("cy", -25)
      .attr("r", 20)
      .style("fill", "#D3D3D3");
  
    cloudGroup.append("circle")
      .attr("cx", -15)
      .attr("cy", -25)
      .attr("r", 20)
      .style("fill", "#D3D3D3");
  }
  
  // Ajouter des nuages à des positions spécifiques
  drawCloud(300, 200);
  drawCloud(600, 150);
  drawCloud(850, 250);

// var svgC = d3.select("body").append("svg").attr("width", 10000).attr("height", 1000);
// var jsonCircles = [/* Define your circle data here */];

// /* partie 1*/
// var line = svgC.append("line").attr("x1", 100).attr("y1", 100).attr("x2", 200).attr("y2", 200).attr("stroke", "#82A0D8").attr("stroke-width", 10);

// var circle1 = svgC.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 50).style("fill", "#9AC8EB")
//     .on("mouseover", actionMO)
//     .on("mouseout", actionMu);

// var circle2 = svgC.append("circle").attr("cx", 200).attr("cy", 200).attr("r", 50).style("fill", "#F4CFDF")
//     .on("mouseover", actionMO)
//     .on("mouseout", actionMu);

// var Text= svgC.append("text").attr("x", 200).attr("y", 200).style("text-anchor","middle").style("font-size", "10px");
    
// // Define the action for mouseover
// function actionMO() {
//     d3.select(this).style("fill", "#F4CFDF"); // Change the fill color on mouseover
//     Text.text(" Text");
// }

// // Define the action for mouseout
// function actionMu() {
//     d3.select(this).style("fill", function(d, i) {
//         return i === 0 ? "#9AC8EB" : "#F4CFDF"; // Reset the fill color on mouseout
//     });
//     Text.text("");
// }



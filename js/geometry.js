//Blog Section
// document.getElementById('blog').addEventListener('click', function(){
    
// })






document.getElementById('calculate-triangle').addEventListener('click', function(){
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    const areaOfTriangle = 0.5 * base * height;
    // console.log(areaOfTriangle);

    document.getElementById("triangle-area-result").innerText = "1. Triangle : " + areaOfTriangle + "cm2";



})
document.getElementById('calculate-rectangle').addEventListener('click', function(){
    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);

    const areaOfRectangle = width * length;
    // console.log(area);
    document.getElementById("rectangle-area-result").innerText = "2. Rectangle : " + areaOfRectangle + "cm2" ;



})
document.getElementById('calculate-parallelogram').addEventListener('click', function(){
    const baseP = parseFloat(document.getElementById('baseP').value);
    const heightP = parseFloat(document.getElementById('heightP').value);

    const areaOfParallelogram =  baseP * heightP;
    // console.log(area);

    document.getElementById("parallelogram-area-result").innerText = "3. Parallelogram : " + areaOfParallelogram + "cm2";



})
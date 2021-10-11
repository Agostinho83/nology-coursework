// **challenge

// 1. write a function to find the perimeter of a rectangle
const calculatePerimiter = (width, height) => {
    return width + width + height + height;
}
console.log(calculatePerimiter(1, 1));

// 2. write a function to find the area of circle. When given a radius, print the area to the console.
const calculateArea = (radius) => {
    const area = Math.PI * radius * radius;

    return area;
}
const smallArea = calculateArea(2);
console.log(smallArea)

// 3. Now do the same to find the circunference of a circle...
const calculateCircle = (radius) => {
    const circle = 2 * Math.PI * radius
    return circle;
}
const circle = calculateCircle(14);
console.log(circle)
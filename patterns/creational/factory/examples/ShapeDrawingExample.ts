interface Shape {
    draw(): void;
}

class Circle implements Shape {
    draw(): void {
        console.log('Drawing a Circle');
    }
    
}

class Triangle implements Shape {
    draw(): void {
        console.log('Drawing a Triangle');
    }

}

class Rectangle implements Shape {
    draw(): void {
        console.log('Drawing a Rectangle');
    }
    
}

class ShapeFactory {

    public static drawShape(type: string): Shape {
        switch (type) {
            case "circle":
                return new Circle();
            case "rectangle":
                return new Rectangle();
            case "triangle":
                return new Triangle();
            default:
                throw new Error("Unknown shape type");
            }
    }
}

const circle = ShapeFactory.drawShape("circle");
console.log(circle);
circle.draw();

const triangle = ShapeFactory.drawShape("triangle");
console.log(triangle);
triangle.draw();

const rectangle = ShapeFactory.drawShape("rectangle");
console.log(rectangle);
rectangle.draw();

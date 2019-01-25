import {Point} from '../Geometry/Point';
import {Vector} from '../Geometry/Vector';
import {GraphicalElement, GraphicalElementType} from './GraphicalElement';

export interface ICircleProps {
    origin : Point;
    radius: number;
    
    normal?: Vector;
    fill? : string;
    stroke? : string;
    strokeWidth? : number;
  }
  
export class Circle extends GraphicalElement {

    private origin: Point;
    private normal: Vector;
    private radius: number;
    private fill : string;
    private stroke : string;
    private strokeWidth : number;
  

    constructor(props: ICircleProps) {
        super(GraphicalElementType.Circle);
        this.origin = props.origin;
        this.radius = props.radius;
        this.normal = props.normal ? props.normal : new Vector(0,0,1);
        this.fill = props.fill ? props.fill : 'white';
        this.stroke = props.stroke ? props.stroke : 'black';
        this.strokeWidth = props.strokeWidth ? props.strokeWidth : 1;
    }

    Clone() : Circle {
        return new Circle({
                    origin: this.origin, 
                    radius: this.radius, 
                    normal: this.normal,
                    fill: this.fill,
                    stroke: this.stroke,
                    strokeWidth: this.strokeWidth
                });
    }

    Copy(circle: Circle) : Circle {
        return new Circle({
            origin: circle.origin, 
            radius: circle.radius, 
            normal: circle.normal,
            fill: circle.fill,
            stroke: circle.stroke,
            strokeWidth: circle.strokeWidth
        });
    }
    
    get Origin() : Point {
        return this.origin;
    }

    set Origin(pt: Point) {
        this.origin = pt;
    }

    get Radius() : number {
        return this.radius;
    }

    set Radius(radius: number) {
        this.radius = radius;
    }

    get Normal() : Vector {
        return this.normal;
    }

    set Normal(normal: Vector) {
        this.normal = normal;
    }

    get Fill() : string {
        return this.fill;
    }

    set Fill(fill: string) {
        this.fill = fill;
    }

    get Stroke() : string {
        return this.stroke;
    }

    set Stroke(stroke: string) {
        this.stroke = stroke;
    }

    get StrokeWidth() : number {
        return this.strokeWidth;
    }

    set StrokeWidth(strokeWidth: number) {
        this.strokeWidth = strokeWidth;
    }

    Circumference() : number {
        return 2 * Math.PI * this.radius;
    }

    Area() : number {
        return Math.PI * this.radius * this.radius;
    }

    Offset(x: number, y: number, z: number) : void {
        this.origin = this.origin.Offset(x,y,z);
    }

}
import {Point} from '../Geometry/Point';
import {Vector} from '../Geometry/Vector';
import {GraphicalElement, GraphicalElementType} from './GraphicalElement';

export interface IRectangleProps {
    start : Point;
    end: Point;
    
    fill? : string;
    stroke? : string;
    strokeWidth? : number;
  }
  
export class Rectangle extends GraphicalElement {

    private start: Point;
    private end: Point;
    private fill : string;
    private stroke : string;
    private strokeWidth : number;
  

    constructor(props: IRectangleProps) {
        super(GraphicalElementType.Rectangle);
        this.start = props.start;
        this.end = props.end;
        this.fill = props.fill ? props.fill : 'white';
        this.stroke = props.stroke ? props.stroke : 'black';
        this.strokeWidth = props.strokeWidth ? props.strokeWidth : 1;
    }

    Clone() : Rectangle {
        return new Rectangle({
                    start: this.start, 
                    end: this.end,
                    fill: this.fill,
                    stroke: this.stroke,
                    strokeWidth: this.strokeWidth
                });
    }

    Copy(rectangle: Rectangle) : Rectangle {
        return new Rectangle({
            start: rectangle.start, 
            end: rectangle.end,
            fill: rectangle.fill,
            stroke: rectangle.stroke,
            strokeWidth: rectangle.strokeWidth
        });
    }
    
    get Start() {
        return this.start;
    }

    set Start(pt: Point) {
        this.start = pt;
    }

    get End() {
        return this.end;
    }

    set End(pt: Point) {
        this.end = pt;
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

    Offset(x: number, y: number, z: number) {
        this.start = this.start.Offset(x,y,z);
        this.end = this.end.Offset(x,y,z);
    }
    
}
import {Point} from '../Geometry/Point';
import {GraphicalElement, GraphicalElementType} from './GraphicalElement';

export interface ILineProps {
    start : Point;
    end : Point;
  
    stroke? : string;
    strokeWidth? : number;
  }
    
export class Line extends GraphicalElement {

    private start: Point;
    private end: Point;
    private stroke: string;
    private strokeWidth: number;

    constructor(props: ILineProps) {
        super(GraphicalElementType.Line);
        this.start = props.start;
        this.end = props.end;
        this.stroke = props.stroke ? props.stroke : 'black';
        this.strokeWidth = props.strokeWidth ? props.strokeWidth : 1;
    }

    Clone() : Line {
        return new Line({
                    start: this.start, 
                    end: this.end,
                    stroke: this.stroke,
                    strokeWidth: this.strokeWidth
        });
    }

    Copy(line: Line) : Line {
        return new Line({
            start: line.start, 
            end: line.end,
            stroke: line.stroke,
            strokeWidth: line.strokeWidth
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

    get Stroke() : string {
        return this.stroke;
    }

    set Stroke(color: string) {
        this.stroke = color;
    }

    get StrokeWidth() : number {
        return this.strokeWidth;
    }

    set StrokeWidth(width: number) {
        this.strokeWidth = width;
    }

    get MidPoint() {
        let x = (this.end.X + this.start.X) * 0.5;
        let y = (this.end.Y + this.start.Y) * 0.5;
        let z = (this.end.Z + this.start.Z) * 0.5;
        return new Point(x,y,z);
    }

    get Length() {
        return this.start.Distance(this.end);
    }

    Offset(x: number, y: number, z: number) {
        this.start = this.start.Offset(x,y,z);
        this.end = this.end.Offset(x,y,z);
    }
}
import { Guid } from 'guid-typescript';

export enum GraphicalElementType {
    Line,
    Circle,
    Rectangle
}

export abstract class GraphicalElement {
    private id: string = Guid.create().toString();

    constructor(private type: GraphicalElementType) {

    }

    abstract Clone() : GraphicalElement;
    abstract Copy(elem: GraphicalElement) : GraphicalElement;
    abstract Offset(x: number, y: number, z: number) : void;

    get Id() {
        return this.id.toString();
    }

    get Type() {
        return this.type;
    }

    Print(desc: string) {
        return `${desc} ${JSON.stringify(this)}`;
    }


}
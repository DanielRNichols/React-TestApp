import {Guid} from 'guid-typescript';
import { GraphicalElement } from '../Graphics/GraphicalElement';

export interface IComponentProps {
    name: string;
    graphicalElements?: Array<GraphicalElement>;

}

export class Component {
    private id: Guid;
    private name: string;
    private graphicalElements: Array<GraphicalElement>;

    constructor(props: IComponentProps) {
        this.id = Guid.create();
        this.name = props.name;
        this.graphicalElements = props.graphicalElements ? props.graphicalElements : [];
    }

    get Id() : string {
        return this.id.toString();
    }

    get Name() : string {
        return this.name;
    }

    get GraphicalElements(): Array<GraphicalElement> {
        return this.graphicalElements;
    }
}
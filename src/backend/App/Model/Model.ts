import {Guid} from 'guid-typescript';
import {Component} from './Component';

export interface IModelProps {
    name: string;
    components?: Array<Component>;
}

export class Model {
    private id: Guid;
    private name: string;
    private components: Array<Component>;

    constructor(props: IModelProps) {
        this.id = Guid.create();
        this.name = props.name;
        this.components = props.components ? props.components : [];
    }

    get Id() : string {
        return this.id.toString();
    }

    get Name() : string {
        return this.name;
    }

    get Components(): Array<Component> {
        return this.components;
    }

}
import * as React from "react";
import {Model} from '../../../backend/App/Model/Model';
import {IModelViewComponentProps, ModelViewComponent} from './ModelViewComponent';

export interface IModelViewProps {
    width: number;
    height: number;
    model: Model;
}

export const ModelView = (props: IModelViewProps) => {
    let width = props.width;
    let height = props.height;
    // let start = new Coordinate(0,0);
    // let end = new Coordinate(width, height);

    return(
        <div style={{margin: "10px"}}>
            <svg width={width} height={height}>
                {props.model.Components.map(component => 
                    <ModelViewComponent key={component.Id} elements={component.GraphicalElements} />)}
            </svg>
        </div>
    );
}


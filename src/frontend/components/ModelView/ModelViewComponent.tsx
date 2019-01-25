import * as React from "react";
import { GraphicalElement } from '../../../backend/App/Graphics/GraphicalElement';
import { IComponentProps, Component } from '../../../backend/App/Model/Component';
import { Line } from '../../../backend/App/Graphics/Line';
import { Circle } from '../../../backend/App/Graphics/Circle';
import { Rectangle } from '../../../backend/App/Graphics/Rectangle';
import LineElement from '../Graphics/LineElement';
import CircleElement from '../Graphics/CircleElement';
import RectangleElement from '../Graphics/RectangleElement';

export interface IModelViewComponentProps  {
    elements: Array<GraphicalElement>;
}

export const ModelViewComponent = (props: IModelViewComponentProps) => {

    return(
        <g>
            {props.elements.map(elem => {
                    if(elem instanceof Line) {
                        return <LineElement key={elem.Id} 
                                            start={elem.Start} end={elem.End} 
                                            stroke={elem.Stroke} strokeWidth={elem.StrokeWidth}
                                />
                    } else if(elem instanceof Circle) {
                        return <CircleElement key={elem.Id} 
                                            origin={elem.Origin} radius={elem.Radius} fill={elem.Fill} 
                                            stroke={elem.Stroke} strokeWidth={elem.StrokeWidth}
                                />
                    } else if(elem instanceof Rectangle) {
                        return <RectangleElement key={elem.Id} 
                                            start={elem.Start} end={elem.End} fill={elem.Fill} 
                                            stroke={elem.Stroke} strokeWidth={elem.StrokeWidth}
                                />
                    }
                })
            };
       </g>
    );
}


import * as React from "react";
import {ICircleProps, Circle} from '../../../backend/App/Graphics/Circle';


const CircleElement = (props: ICircleProps) => {
	return(
     <circle cx={props.origin.X} cy={props.origin.Y} r={props.radius} 
             fill={props.fill}  stroke={props.stroke} strokeWidth={props.strokeWidth} />
  );
}

export default CircleElement;
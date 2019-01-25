import * as React from "react";
import { ILineProps, Line } from '../../../backend/App/Graphics/Line';

const LineElement = (props: ILineProps) => {
	return(
		<line x1={props.start.X} y1={props.start.Y} x2={props.end.X} y2={props.end.Y} 
        stroke={props.stroke} strokeWidth={props.strokeWidth}
    />
  );

}

export default LineElement;

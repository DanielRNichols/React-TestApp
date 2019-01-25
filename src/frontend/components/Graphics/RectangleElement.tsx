import * as React from "react";
import { IRectangleProps, Rectangle } from '../../../backend/App/Graphics/Rectangle';

const RectangleElement = (props: IRectangleProps) => {
  let width = props.end.X - props.start.X;
  let height = props.end.Y - props.start.Y;

	return(
  	<rect x={props.start.X} y={props.start.Y} width={width} height={height} 
          stroke={props.stroke} fill={props.fill} 
    />
  );

}

export default RectangleElement;

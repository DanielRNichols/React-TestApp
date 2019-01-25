import * as React from "react";
import { Model } from '../backend/App/Model/Model';
import { ModelView } from "./components/ModelView/ModelView";
import {SampleModels} from './SampleModels';

export class App extends React.Component<any,{}>  {

  models: Array<Model>;
  modelIndex: number = 0;
  model: Model;

  constructor(props: any) {
    super(props);
    this.models = SampleModels;
    this.model = this.models[this.modelIndex];
    this.state = {model: this.model};
}

    moveLeft = () => {
      console.log("moving left");
      this.moveAllElements(-25,0,0);
    }

    moveRight = () => {
      console.log("moving right");
      this.moveAllElements(25,0,0);
    }

    moveAllElements(x: number, y:number, z:number) {
      for(let comp of this.model.Components) {
        for(let elem of comp.GraphicalElements) {
          elem.Offset(x,y,z);
        }
      }
      // Update the state
      this.setState({model: this.model});

    }

    nextModel = () => {
      this.modelIndex = ++this.modelIndex % this.models.length;
      this.model = this.models[this.modelIndex];
      // Update the state
      this.setState({model: this.model});
    }

    render() {
      let desc = `Model Name: ${this.model.Name} (${this.model.Id})`;

      return(
        <div>
            <h4>{desc}</h4>
            <button onClick={this.moveLeft}>Move Left</button>
            <button onClick={this.moveRight}>Move Right</button>
            <button onClick={this.nextModel}>Next Model</button>
            <ModelView width={400} height={600} model={this.model}/>
        </div>
      );
    }
}

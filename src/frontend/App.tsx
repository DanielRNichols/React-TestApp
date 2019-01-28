import * as React from "react";
import { Model } from '../backend/App/Model/Model';
import { ModelView } from "./components/ModelView/ModelView";
import {DataServices} from '../backend/App/Services/DataServices';

export class App extends React.Component<any,{}>  {

  private models: Array<Model>;
  private modelIndex: number = 0;
  private model: Model;
  private dist: number = 25;

  constructor(props: any) {
    super(props);
    let dataServices = new DataServices();
    this.models = dataServices.getData();
    this.model = this.models[this.modelIndex];
    this.state = {model: this.model};

    console.log(this.model);
  }

  moveAllLeft = () => {
    console.log("moving left");
    this.moveAllElements(-this.dist,0,0);
  }

  moveAllRight = () => {
    console.log("moving right");
    this.moveAllElements(this.dist,0,0);
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
          <button onClick={this.moveAllLeft}>Move Left</button>
          <button onClick={this.moveAllRight}>Move Right</button>
          <button onClick={this.nextModel}>Next Model</button>
          <ModelView width={400} height={600} model={this.model}/>
      </div>
    );
  }
}

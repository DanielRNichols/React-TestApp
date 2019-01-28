import { Component } from '../Model/Component';
import { IModelProps, Model } from '../Model/Model';
import { Line } from "../Graphics/Line";
import { Circle } from "../Graphics/Circle";
import { Point } from "../Geometry/Point";
import { Rectangle } from "../Graphics/Rectangle";


  let modelProps1 : IModelProps = {
    name: "Model 1",
    components: [
      new Component({
          name: "comp1",
          graphicalElements: [
            new Line({start: new Point(10, 10), end: new Point(50, 10)}),
            new Circle({origin: new Point(30,10), radius: 5, fill: 'blue'})
          ]
      }),
      new Component({
        name: "comp2",
        graphicalElements: [
          new Line({start: new Point(10, 30), end: new Point(50, 30), stroke: 'red', strokeWidth: 5}),
          new Circle({origin: new Point(30,30), radius: 8, fill: 'green', stroke: 'blue', strokeWidth: 3})
        ]
      }),
      new Component({
        name: "comp3",
        graphicalElements: [
          new Line({start: new Point(10, 50), end: new Point(50, 50), stroke: 'yellow', strokeWidth: 5}),
          new Rectangle({start: new Point(25, 45), end: new Point(35, 55), stroke: 'purple', strokeWidth: 2, fill: 'purple'}),
        ]
      }),

    ]
  };

  let modelProps2 : IModelProps = {
    name: "Model 2",
    components: [
      new Component({
          name: "comp1",
          graphicalElements: [
            new Circle({origin: new Point(100,100), radius: 50, fill: 'blue'})
          ]
      }),
    ]
  };

export const SampleModels: Array<Model> = [
  new Model (modelProps1),
  new Model (modelProps2),
];

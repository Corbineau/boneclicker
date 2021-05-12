import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Domino } from "../renderers";
import { MoveBox } from "../systems"

export default class SimpleGame extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "blue" }}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 100,  y: 50, renderer: <Domino />}
        }}>

      </GameEngine>
    );
  }
}
import React, { PureComponent } from "react";

class Domino extends PureComponent {
  render() {
    const len = 100;
    const wid = 50;
    const x = this.props.x - 2;
    const y = this.props.y - 2;
    return (
      <div style={{ position: "absolute", width: wid, height: len, backgroundColor: "white", left: x, top: y }} />
    );
  }
}

export { Domino };
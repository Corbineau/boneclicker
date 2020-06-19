import {React, Component} from React

class GameStart extends Component {
    render() {
      return (
        <button className="startButton" onClick={() => 
        console.log()
        }>
          {this.props.value}
        </button>
      );
    }
   }

   export default GameStart;
import {React, Component} from React

class GameStart extends Component {
    render() {
      return (
        <button className="startButton" onClick={() => 
        
        }>
          {this.props.value}
        </button>
      );
    }
   }

   export default GameStart;
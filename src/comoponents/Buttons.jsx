import React from "react";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" id="drum-machine" style={{color:'black'}}>
            <div className="row mb-3">
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="Q" onClick={this.props.playSound}>Q
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" className="clip"></audio>
              </button></div>
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="W" onClick={this.props.playSound}>W
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" className="clip"></audio>
              </button></div>
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="E" onClick={this.props.playSound}>E
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" className="clip"></audio>
              </button></div>
              <div className="col-6" style={{textAlign:'center'}}>
              <label className="switch">
  <input type="checkbox" onClick={this.props.togglePower} checked={this.props.power} />
  <span className="slider"></span>
  <p style={{marginTop:'10px'}}>POWER</p>
</label>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="A" onClick={this.props.playSound}>A
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" className="clip"></audio>
              </button></div>
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="S" onClick={this.props.playSound}>S
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" className="clip"></audio>
              </button></div>
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="D" onClick={this.props.playSound}>D
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" className="clip"></audio>
              </button></div>  
              <div className="col-6" style={{textAlign:'center'}}>
              <label htmlFor="VolumeRange" className="form-label">Volume</label>
<input type="range" className="form-range" min="0" max="100" id="VolumeRange" value={this.props.volume} onChange={this.props.handleVolumeChange}></input>
                </div>
            </div>
            <div className="row mb-3">
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="Z" onClick={this.props.playSound}>Z
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" className="clip"></audio>
              </button></div>
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="X" onClick={this.props.playSound}>X
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" className="clip"></audio>
              </button></div>
              <div className="col-2"><button className="btn btn-primary larger-text drum-pad" id="C" onClick={this.props.playSound}>C
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" className="clip"></audio>
              </button></div>
              <div className="col-6" style={{textAlign:'center'}}>
              <label className="switch">
  <input type="checkbox"/>
  <span className="slider"></span>
  <p style={{marginTop:'10px'}}>BANK</p>
</label>
</div>
            </div>
            <div className="row ">
              <div className="col-12" id="display" style={{backgroundColor:'gray',textAlign:'center'}}>
                {this.props.songName}
              </div>
            </div>
          </div>
    );
  }
}

export default Buttons;
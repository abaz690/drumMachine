import React ,{ useState } from 'react'
import Buttons from './comoponents/Buttons'
import './App.css'
// const songName = { 'Q': 'Heater-1', 'W': 'Heater-2', 'E': 'Heater-3', 'A': 'Heater-4', 'S': 'Heater-6', 'D': 'Dsc_Oh', ''};
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      volume: 10,
      power: true,
      songName:''
    }
    this.playSound = this.playSound.bind(this);
    this.togglePower = this.togglePower.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    const key = String.fromCharCode(e.keyCode);
    console.log(key);
    const button = document.getElementById(key);
    const audio = button.querySelector('audio');
    // console.log(button);
    if (audio && this.state.power) audio.play();
  }
  
  togglePower() {
    this.setState(prevState => ({
      power: !prevState.power
    }));
    // console.log(this.state.power);
  }
  handleVolumeChange(e){
    this.setState({
      volume: e.target.value
    });
    // console.log(this.state.volume);
  }
  playSound(e) {
    const id = e.target.innerText;
    const audio_div = document.getElementById(id);
    const audio = audio_div.querySelector('audio');
    if(this.state.power){
      audio.volume = this.state.volume / 100;
      audio.play();
    let url = audio.src;
    let parts = url.split("/");
    let songName = parts[parts.length - 1];
    songName = songName.replace('.mp3', ''); // remove .mp3 extension
    songName = songName.replace(/[^a-zA-Z0-9]/g, ' ');
    this.setState({
      songName: songName
    });
    }
  }
  
  render(){
    return (
      <Buttons  playSound={this.playSound} togglePower={this.togglePower} volume={this.state.volume} handleVolumeChange={this.handleVolumeChange} power={this.state.power} songName={this.state.songName} />
    )
  }
} 

export default App;

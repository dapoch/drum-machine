const audioClips = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];


function App(){
  const [volume, setVolume] = React.useState(1)
  const [display, setDisplay] = React.useState("Press a Key")
  
    return (
        <div className="bg-danger min-vh-100 text-white">
            <div className="text-center flex-column justify-content-center">
                <h2>M.O.N.O.</h2>
                <h2>MACHINE</h2>
                <div  
                className="rounded conteiner mx-auto bg-success d-flex flex-row p-4 shadow-lg" 
                style={{width: 500,}}>
                
                  <div id="drum-machine" className="conteiner flex-start rounded " >
                 {audioClips.map((clip) => (
                 <Pad key={clip.id} clip={clip} volume={volume} setDisplay={setDisplay}  /> 
                 ))}
                 <br />
                  <h5>Volume</h5>
                 <input 
                 onChange={(e)=> setVolume(e.target.value)}
                 type="range" 
                 step="0.01" 
                 value={volume} 
                 max="1" 
                 min="0"
                 className="w-50"
                  />
                  </div>
                  <div id="display" className="flex-end bg-primary">{display}</div>
                </div>
            </div>
        </div>
    )
}

function Pad({ clip, volume, setDisplay }){

  const [active, setActive] = React.useState(false)
 
  React.useEffect(()=> {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  const handleKeyPress = (e) => {
    if(e.keyCode === clip.keyCode){
      playSound();
      
    }
  }

  const playSound = () => {
      const audioTag = document.getElementById(clip.keyTrigger);
      setActive(true);
      setTimeout(()=> setActive(false, 1000))
      setDisplay(clip.id)
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
     
  }

  return (
    <div onClick={playSound} id="drum pad" className={`drum-pad btn btn-secondary w-25 m-1 ${active && "btn-warning"} `}>
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
   

  )
}

ReactDOM.render(<App/>, document.getElementById("root"))
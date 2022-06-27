class App extends React.Component {
    constructor(props) {
      super(props);
      this.loop = undefined;
    }
    state = {
        breakCount: 5,
        sessionCount: 25,
        clockCount: 3,
        currentTimer: 'Session',
        isPlaying: false,
        loop: undefined
    }
    
    handlePlayPause = () => {
      const { isPlaying } = this.state;
      
      if (isPlaying) {
        clearInterval(this.loop);
        
        this.setState({
          isPlaying: false 
        });
        
      } else { 
        
        this.setState({ 
          isPlaying: true 
        });
        
        this.loop = setInterval(() => {
          const {clockCount , currentTimer, breakCount, sessionCount } = this.state;
          
          if (clockCount === 0) {
            this.setState({
              currentTimer: (currentTimer === 'Session') ? 'Break' : 'Session',
              clockCount: (currentTimer === 'Session') ? (breakCount * 60) : (sessionCount * 60)
              
            })
          }
          
          this.setState({
            clockCount: clockCount - 1          
          }) ;
        }, 1000) ;
        
      }
    }
  
    componentWillUnmount() {
      clearInterval(this.loop);
    }
  
    convertToTime = (count) => {
      const minutes = Math.floor(count / 60);
      let seconds = count % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return `${minutes}:${seconds}`;
    }
  
  
  
    render() {

        const { breakCount, sessionCount, clockCount, currentTimer } = this.state;

        const breakProps = {
            title: "Break Length",
            count: breakCount,
            nature: "break",
            handleDecrease: this.handleBreakDecrease,
            handleIncrease: this.handleBreakIncrease
        }

        const sessionProps = {
            title: "Session Length",
            count: sessionCount,
            nature: "session",
            handleDecrease: this.handleSessionDecrease,
            handleIncrease: this.handleSessionIncrease

        }

        
        
        return (
            <div>    
                <div className="flex">
                    <SetTimer {...breakProps} />
                    <SetTimer {...sessionProps} />
                </div>
                <div className="clock-container">
                  <h2>{currentTimer}</h2>
                  <span>{this.convertToTime(clockCount)}</span>
                  <div className="flex">
                    <button onClick={this.handlePlayPause}>
                        <i className="material-icons">{this.isPlaying?  "pause_circle_filled" : "play_circle_filled"}</i> 
                    </button>
                    <button onClick={this.handleReset}>
                        <i className="material-icons">autorenew</i>
                    </button>                     
                  </div>
                </div> 
            </div>
        );
    }
}



const SetTimer = (props) => (
    <div className="timer-container">
        <h4 id={props.nature + "-label"}>{props.title}</h4>
        <div className="flex actions-wrapper">
            <button onClick={props.handleBreakDecrease}>
                <i className="material-icons" id={props.nature + "-decrement"}>arrow_downward</i>
            </button>
            <span>{props.count}</span>
            <button onClick={props.handleBreakIncrease}>
                <i className="material-icons" id={props.nature + "-increment"}>arrow_upward</i>
            </button>
        </div>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))

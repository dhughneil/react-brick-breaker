
import './App.css'

const App = () => {
  return (
    <>
    
    <h3>Brick Breaker Redux</h3>
    <div><canvas id="canvas" width="500" height="300"></canvas></div>
    <div><p>Mouse moves platform &bull; Press any key to pause</p></div>
    <button id="reloadButton" onClick={() => console.log("Clicked")}>Play again</button> 
    {/*   <button id="reloadButton" onClick="reload()">Play again</button> */}
      <div id="score"></div>
    </>
        )
      }

        export default App

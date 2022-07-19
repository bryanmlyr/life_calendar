import './App.css'

function App() {
  const consumedWeeks = (Date.now() - (new Date('1969-12-28'))) / 1000 / 60 / 60 / 24 / 7;

  return (
    <div className="App">
      <h1>LIFE CALENDAR</h1>
      <div>
        <table>
          <tbody>
            {[...Array(90)].map((_, x) =>
              <tr key={x}>
                {<td>{x%5==0?x:''}</td>}
                {[...Array(52)].map((_, y) => <td key={`${x}-${y}`} data={x*52+y === Math.round(consumedWeeks) ? "latest": null} style={{ backgroundColor: x*52+y <= consumedWeeks ? 'rgba(255, 255, 255, 0.87)' : 'none'}}></td>)}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App

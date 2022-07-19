import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { Link } from "react-router-dom"
function App(){
  return(
    <div>
      <Navbar/>
      <div className="whole">
      <div className="info">
        <p className="greet">Welcome to the CS Workbook, where you can get a more depth understanding of your CS classes. Here you can refresh some topics that you studied in previous classes or even learn something new. Enjoy! <br/><br/><span className="bold">Which class’s content would you like to access?</span></p>
        <Link to="/TheCSWorkbook/CS1"  style={{ textDecoration: 'none' }}><Card title="CS 1" content="Programming Fundamentals"/></Link>
        <Card title="CS 2" content="Data Structures"/>
        <Card title="CS 3" content="Algorithm Analisis"/>
      </div>
      </div>
    </div>
  )
}

export default App

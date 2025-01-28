
import './App.css'

const Card = ({title}) => {
  return (
      <div>
          <h2>{title}</h2>
      </div>
  )
}

const App = () => {
  return (
    <div className={"card-container"}>
      <Card title={"Star Wars"}/>
      <Card title={"Lion King"}/>
      <Card title={"Saw" }/>
    </div>
  )
}
export default App

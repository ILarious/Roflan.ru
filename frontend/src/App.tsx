import './App.css'
import roflan from './assets/roflan.png'

function App() {
  return (
    <>
      <h1>Рофлер</h1>
      <h1>Социфльная сеть <br /> для любителей анегдотов</h1>
        <img
            src={roflan}
            style={{
                width: 200,
                height: 200
            }}
        />
        <div>
            <a href='/posts'>Посты</a>
        </div>
    </>
  )
}

export default App;

import './App.css';
import { Titulo} from './componentes/styled/styled';
import Navegar from './componentes/Navegar';
import { habilidade} from './componentes/conteudo';

function add(cont){
  const content = document.querySelector('.conteudo')
  content.innerHTML = cont
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Samuel Eduardo Lino Gomes</Titulo>
        <Navegar onClickh={function(){add(habilidade);console.log('clicouu')}}/>
      </header>
      <div className='conteudo'>

      </div>
    </div>
  );
}
export default App;

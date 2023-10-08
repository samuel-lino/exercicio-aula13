import './App.css';
import { Titulo, Subtitulo} from './componentes/styled/styled';
import Navegar from './componentes/Navegar';
import { habilidade, sobre, projetos, contato} from './componentes/conteudo';

function add(cont){
  const content = document.querySelector('.conteudo')
  content.innerHTML = cont
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo>Samuel Eduardo Lino Gomes</Titulo>
        <Subtitulo>Dev em treinamento</Subtitulo>
        <Navegar onClickh={function(){add(habilidade)}} onClicks={function(){add(sobre)}} onClickp={function(){add(projetos)}} onClickc={function(){add(contato)}} />
      </header>
      <div className='conteudo'>

      </div>
    </div>
  );
}
export default App;

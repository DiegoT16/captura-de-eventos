import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={mostrarTexto}>
        <p>Ingrese texto:
           <input type="textarea" name="texto1" />
        </p>
        <p>
          <input type="submit" value="mostrar" />
        </p>
      </form>
    </div>
  );
}

function mostrarTexto(e) {
e.preventDefault();
let texto=e.target.texto1.value;
alert(texto);
}

export default App;

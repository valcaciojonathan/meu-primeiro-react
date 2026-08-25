import { useState } from "react";
import "./App.css";
import BoasVindas from "./components/BoasVindas";
import Alunos from "./components/Alunos";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import Dashboard from "./components/Dashboard";

const exercicios = [
  { id: 1, titulo: "1. Boas-vindas", componente: <BoasVindas /> },
  { id: 2, titulo: "2. Alunos (Props)", componente: <Alunos /> },
  { id: 3, titulo: "3. Contador", componente: <Contador /> },
  { id: 4, titulo: "4. Formulário", componente: <Formulario /> },
  { id: 5, titulo: "5. Dashboard", componente: <Dashboard /> },
];

function App() {
  const [ativo, setAtivo] = useState(1);
  const atual = exercicios.find((e) => e.id === ativo);

  return (
    <div className="app">
      <nav className="menu">
        {exercicios.map((e) => (
          <button
            key={e.id}
            className={e.id === ativo ? "tab tab-ativa" : "tab"}
            onClick={() => setAtivo(e.id)}
          >
            {e.titulo}
          </button>
        ))}
      </nav>
      <main className="conteudo">{atual.componente}</main>
    </div>
  );
}

export default App;

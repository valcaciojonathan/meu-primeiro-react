import { useEffect, useState } from "react";

function Dashboard() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const tempo = setTimeout(() => {
      setTarefas([
        { id: 1, titulo: "Estudar React" },
        { id: 2, titulo: "Fazer exercícios" },
        { id: 3, titulo: "Entregar atividade" },
        { id: 4, titulo: "Revisar componentes" },
      ]);
      setCarregando(false);
    }, 2000);

    return () => clearTimeout(tempo);
  }, []);

  const concluir = (id) => setTarefas(tarefas.filter((t) => t.id !== id));

  return (
    <section>
      <h1>Dashboard de Tarefas</h1>
      {carregando ? (
        <p className="card">Carregando tarefas...</p>
      ) : (
        <ul className="lista">
          {tarefas.length === 0 && <li className="card">Todas as tarefas foram concluídas!</li>}
          {tarefas.map((t) => (
            <li className="tarefa" key={t.id}>
              <span>{t.titulo}</span>
              <button className="btn" onClick={() => concluir(t.id)}>Concluir</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Dashboard;

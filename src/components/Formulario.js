import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [cidade, setCidade] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();
    alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${nome || "aluno"}!`);
    setNome("");
    setCurso("");
    setCidade("");
  };

  return (
    <section>
      <h1>Formulário Interativo</h1>
      <form className="card" onSubmit={cadastrar}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />

        <label htmlFor="curso">Curso</label>
        <input id="curso" value={curso} onChange={(e) => setCurso(e.target.value)} placeholder="Digite seu curso" />

        <label htmlFor="cidade">Cidade</label>
        <input id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder="Digite sua cidade" />

        <button className="btn" type="submit">Cadastrar</button>
      </form>

      <div className="card">
        <h2>Pré-visualização</h2>
        <p><strong>Nome:</strong> {nome || "-"}</p>
        <p><strong>Curso:</strong> {curso || "-"}</p>
        <p><strong>Cidade:</strong> {cidade || "-"}</p>
      </div>
    </section>
  );
}

export default Formulario;

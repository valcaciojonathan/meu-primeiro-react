import Aluno from "./Aluno";

function Alunos() {
  return (
    <section>
      <h1>Cadastro de Alunos</h1>
      <div className="grid">
        <Aluno nome="Jonathan Valcacio" curso="Desenvolvimento de Sistemas" turma="A" idade={22} />
        <Aluno nome="Maria Silva" curso="Design Gráfico" turma="B" idade={19} />
        <Aluno nome="Carlos Souza" curso="Mecatrônica" turma="C" idade={25} />
      </div>
    </section>
  );
}

export default Alunos;

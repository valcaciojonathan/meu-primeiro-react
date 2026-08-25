function Aluno({ nome, curso, turma, idade }) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p><strong>Curso:</strong> {curso}</p>
      <p><strong>Turma:</strong> {turma}</p>
      <p><strong>Idade:</strong> {idade} anos</p>
    </div>
  );
}

export default Aluno;

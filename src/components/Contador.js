import { useState } from "react";

function Contador() {
  const [produtos, setProdutos] = useState(0);

  const adicionar = () => setProdutos(produtos + 1);
  const remover = () => setProdutos(produtos > 0 ? produtos - 1 : 0);
  const limpar = () => setProdutos(0);

  return (
    <section className="card">
      <h1>Contador Inteligente</h1>
      <div className="acoes">
        <button className="btn" onClick={adicionar}>Adicionar (+)</button>
        <button className="btn" onClick={remover}>Remover (-)</button>
        <button className="btn" onClick={limpar}>Limpar</button>
      </div>
      <p className={produtos === 0 ? "contagem vermelho" : "contagem verde"}>
        {produtos === 0 ? "Carrinho vazio" : `Você possui ${produtos} produtos`}
      </p>
    </section>
  );
}

export default Contador;

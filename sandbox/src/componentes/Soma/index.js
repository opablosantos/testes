const Soma = (props) => {
  const p1 = parseInt(props.parcela1);
  const p2 = parseInt(props.parcela2);
  const saldo = parseInt(p1 + p2);
  return (
    <div>
      <h3>Soma</h3>
      <p>Parcela 1: {p1}</p>
      <p>Parcela 2: {p2}</p>
      <p>Saldo: {saldo}</p>
    </div>
  );
};

export default Soma;

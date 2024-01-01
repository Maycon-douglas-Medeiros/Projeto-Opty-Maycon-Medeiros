"use client"
import React, { useState, useEffect } from 'react';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [verificacao, setVerificacao] = useState('');
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    const randomNumber1 = Math.floor(Math.random() * 10) + 1;
    const randomNumber2 = Math.floor(Math.random() * 10) + 1;

    setNum1(randomNumber1);
    setNum2(randomNumber2);
    setResultado(randomNumber1 + randomNumber2);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (parseInt(verificacao, 10) === resultado) {
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Telefone:', telefone);
      console.log('Cidade:', cidade);
    } else {
      alert('A verificação falhou. Certifique-se de somar corretamente os números aleatórios.');
    }
  };

  return (
    <div className='principal'>
      <h1 style={{ textAlign: 'center' }}>
        Preencha os seus dados <br /> ou chama no zap!
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <br />
        <label>
          Cidade:
          <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
        </label>
        <br />
        <p>
          {num1} + {num2} = ?
          <input type="number" value={verificacao} onChange={(e) => setVerificacao(e.target.value)} />
        </p>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;

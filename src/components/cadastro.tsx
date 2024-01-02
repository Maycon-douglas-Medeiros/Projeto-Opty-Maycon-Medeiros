"use client";
import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  Nome: string
  Email: string
  Telefone: String
  Cidade: String
}

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [verificacao, setVerificacao] = useState('');
  const [resultado, setResultado] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const randomNumber1 = Math.floor(Math.random() * 10) + 1;
    const randomNumber2 = Math.floor(Math.random() * 10) + 1;

    setNum1(randomNumber1);
    setNum2(randomNumber2);
    setResultado(randomNumber1 + randomNumber2);
  }, []);

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

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
    <div className='section3'>
      <span className='section3Span1'><span style={{color: '#F8971F'}}>Preencha os seus dados <br />ou</span> chama no zap!</span>
      <form onSubmit={handleSubmit(onSubmit) && handleSubmit2}>
        <label className='section3Label'>
          Nome* <br/>
          <input {...register("Nome")} className='section3Input' type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </label>
        <br/>
        <label className='section3Label'>
          Email* <br/>
          <input {...register("Email")} className='section3Input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br/>
        <label className='section3Label'>
          Telefone Whatsapp (DDD + Número)* <br/>
          <input {...register("Telefone")} className='section3Input' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </label>
        <br/>
        <label className='section3Label'>
          Qual é a sua cidade?* <br/>
          <input {...register("Cidade")} className='section3Input' type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
        </label>
        <br/>
        <label className='section3Label'>
          {num1} + {num2} = ? <br/>
          <input className='section3Input' type="number" value={verificacao} onChange={(e) => setVerificacao(e.target.value)} />
        </label>
        <br/>
        <button className='section3Button1' type="submit">ME CADASTRAR</button>
      </form>
      <button className='section3Button2' type="submit">CHAMA NO ZAP!</button>
    </div>
  );
};

export default Cadastro;

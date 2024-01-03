"use client";
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  Nome: string;
  Email: string;
  Telefone: string;
  Cidade: string;
  Soma: string;
};

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userSoma, setUserSoma] = useState<number | null>(null);

  useEffect(() => {
    const randomNumber1 = Math.floor(Math.random() * 10) + 1;
    const randomNumber2 = Math.floor(Math.random() * 10) + 1;

    setNum1(randomNumber1);
    setNum2(randomNumber2);
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (userSoma !== null && userSoma === num1 + num2) {
      try {
        const response = await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert('Cadastrado com sucesso!');
          window.location.reload();
        } else {
          alert('Ocorreu um erro!');
        }
      } catch (error) {
        console.error('Ocorreu um erro no cadastro:', error);
      }
    } else {
      alert('A soma está incorreta. Tente novamente.');
    }
  };

  return (
    <div className='section3'>
      <span className='section3Span1'><span style={{color: '#F8971F'}}>Preencha os seus dados <br />ou</span> chama no zap!</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='section3Label'>
          Nome* <br/>
          <input {...register("Nome", {required: true})} className='section3Input' type="text" required/>
        </label>
        <br/>
        <label className='section3Label'>
          Email* <br/>
          <input {...register("Email")} className='section3Input' type="email" required />
        </label>
        <br/>
        <label className='section3Label'>
          Telefone Whatsapp (DD + Número)* <br/>
          <input {...register("Telefone")} className='section3Input' type="tel" required />
        </label>
        <br/>
        <label className='section3Label'>
          Qual é a sua cidade?* <br/>
          <input {...register("Cidade")} className='section3Input' type="text" required />
        </label>
        <br/>
        <label className='section3Label'>
        {num1} + {num2} = ? <br />
        <input
          {...register("Soma", {
            required: true,
            validate: (value) => parseInt(value) === num1 + num2,
          })}
          className='section3Input'
          type="number"
          required
          onChange={(e) => setUserSoma(parseInt(e.target.value))}
        />
        {errors.Soma && <span style={{ color: 'red' }}>A soma está incorreta.</span>}
      </label>
        <br/>
        <button className='section3Button1' type="submit">ME CADASTRAR</button>
      </form>
      <a href="https://api.whatsapp.com/send?phone=+5562994066070&text=Oi,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20Opyt"><button className='section3Button2' >CHAMA NO ZAP!</button></a>
    </div>
  );
};

export default Cadastro;

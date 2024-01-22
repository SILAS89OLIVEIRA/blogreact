import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'React Canaries: Implementação Incremental de Recursos Fora da Meta',
      date: '3 de maio de 2023',
      contentPreview:
        'Tradicionalmente, novos recursos do React costumavam estar disponíveis apenas primeiro na Meta e chegavam às versões de código aberto posteriormente. Gostaríamos de oferecer à comunidade React a opção de adotar novos recursos individuais assim que seu design estiver próximo da finalização...',
    },
    {
      id: 2,
      title: 'React Hooks: Uma Introdução Completa',
      date: '10 de maio de 2023',
      contentPreview:
        'React Hooks é uma característica poderosa que permite o uso de estado e outras características do React em componentes funcionais. Neste post, exploraremos os principais conceitos e como você pode integrar Hooks em seus projetos...',
    },
    {
      id: 3,
      title: 'Construindo uma Aplicação React do Zero',
      date: '18 de maio de 2023',
      contentPreview:
        'Se você está começando com React, este guia passo a passo ajudará você a construir uma aplicação React do zero. Abordaremos a configuração inicial, componentes, roteamento e gerenciamento de estado...',
    },
  ];

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-4">Últimos Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="justify-between p-5 sm:p-5 cursor-pointer w-full h-full flex flex-col flex-1 shadow-secondary-button-stroke dark:shadow-secondary-button-stroke-dark hover:bg-gray-40/5 active:bg-gray-40/10  hover:dark:bg-gray-60/5 active:dark:bg-gray-60/10 rounded-2xl text-xl text-primary dark:text-primary-dark leading-relaxed"
        >
          <div className="flex flex-row gap-3 w-full">
            <h2 className="font-semibold flex-1 text-2xl lg:text-3xl hover:underline leading-snug mb-4">
              {post.title}
            </h2>
          </div>
          <div>
            <div className="flex flex-row justify-start gap-2 items-center text-base text-tertiary dark:text-tertiary-dark">
              {post.date}
            </div>
            <span className="text-base text-secondary dark:text-secondary-dark">
              <p className="whitespace-pre-wrap my-4">{post.contentPreview}</p>
            </span>
            <Link
              to={`/post/${post.id}`}
              className="text-link text-base dark:text-link-dark hover:underline mt-4"
            >
              Continuar lendo
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

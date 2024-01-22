import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  // Obtenha o id do post da URL usando o hook useParams
  const { id } = useParams();

  // Em uma aplicação real, você buscaria os dados do post com base no id
  // Aqui, usaremos um exemplo estático para fins de demonstração
  const posts = [
    {
      id: 1,
      title: 'React Canaries: Implementação Incremental de Recursos Fora da Meta',
      date: '3 de maio de 2023',
      content: `
        Tradicionalmente, novos recursos do React costumavam estar disponíveis apenas primeiro na Meta
        e chegavam às versões de código aberto posteriormente. Gostaríamos de oferecer à comunidade React
        a opção de adotar novos recursos individuais assim que seu design estiver próximo da finalização.
        Estamos introduzindo um novo canal de lançamento oficialmente suportado chamado Canary.
        Ele permite que setups personalizados, como frameworks, desvinculem a adoção de recursos individuais
        do React do cronograma de lançamento do React.
      `,
    },
    {
      id: 2,
      title: 'React Hooks: Uma Introdução Completa',
      date: '10 de maio de 2023',
      content: `
        React Hooks é uma característica poderosa que permite o uso de estado e outras características do React
        em componentes funcionais. Neste post, exploraremos os principais conceitos e como você pode integrar Hooks
        em seus projetos.
      `,
    },
    {
      id: 3,
      title: 'Construindo uma Aplicação React do Zero',
      date: '18 de maio de 2023',
      content: `
        Se você está começando com React, este guia passo a passo ajudará você a construir uma aplicação React do zero.
        Abordaremos a configuração inicial, componentes, roteamento e gerenciamento de estado.
      `,
    },
  ];

  // Encontre o post correspondente ao id na URL
  const post = posts.find((p) => p.id.toString() === id);

  // Se o post não for encontrado, você pode exibir uma mensagem ou redirecionar
  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
      <div className="flex flex-row justify-start gap-2 items-center text-base text-tertiary dark:text-tertiary-dark">
        {post.date}
      </div>
      <div className="text-base text-secondary dark:text-secondary-dark">
        <p className="whitespace-pre-wrap my-4">{post.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;

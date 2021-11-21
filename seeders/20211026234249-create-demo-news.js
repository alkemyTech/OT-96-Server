'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'News',
      [
        {
          name: 'Hay un nuevo comedor en el barrio!',
          content: 'Somos más abrió un nuevo comedor en el barrio',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Entrega de alimentos no perecederos!',
          content: 'Somos más entregó este fin de semana alimentos no perecederos.',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Salvamos a 3 cachorros en situacion de calle',
          content: 'Estan contentos con sus nuevas familias',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Somos más no se toma vacaciones!',
          content: 'Así es, estamos trabajando para mejorar el mundo.',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Salvamos a un jaguareté!',
          content: 'Frenamos una aplanadora en el amazonas que estaba por destruir su hogar.',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Donaciones somos más',
          content: 'Convocamos a los que puedan donar algo para la donación anual de navidad de Somos +',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Somos más ahora se amplía a toda Latinoamérica!',
          content: 'Con el fin de ayudar al planeta tierra estamos en constante ampliacion',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Entrega de camisetas',
          content: 'Vení ya a retirar tu camiseta de Somos + ayudando con una pequeña donacion',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Buscamos colaboradores',
          content: 'Buscamos mas ayudantes para ampliar nuestra solidaridad',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nunca es tarde para sonreir',
          content: 'En Somos Mas fomentamos la solidaridad y compañerismo hacia los mas necesitados',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ahorra agua ya!',
          content: 'El planeta te lo agradecera',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Programa de conciencia ecologica',
          content: 'Se viene dentro de poco nuestros cursos de separacion de basura',
          image: 'image',
          type: 'news',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('News', null, {});
  },
};

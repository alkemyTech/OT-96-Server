'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            'Activities',
            [
                {
                    name: 'Apoyo Escolar para el nivel Primario',
                    content: 'Se realizan los tallere de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábadostambién se realiza el taller para niños y niñas que asisten a la escuela doble turno.',
                    image: 'imageUrl.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Apoyo Escolar para el nivel Secundaria',
                    content: 'Serealizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno. Actualmente se encuentran inscriptos en el taller 50 adolescentes entre 13 y 20 años',
                    image: 'imageUrl.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Tutorias',
                    content: 'Es un programa destinado a jóvenes a partir del tercer año de secundaria, cuyo objetivo es garantizar su permanencia en la escuela y construir un proyecto de vida que da sentido al colegio',
                    image: 'imageUrl.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
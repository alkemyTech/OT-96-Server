'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					firstName: 'Usuario',
					lastName: 'Demo',
					email: 'test@test.com',
					password: '$2a$10$4hVG5w2RMM.P0ST64W2qC.jlrIaq7W09oTOwEq.UqxQ1vDZmaoaja', // password: 12345678
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Matias',
					lastName: 'Preiti',
					email: 'MatiasPreiti@standard.com',
					password: '$2a$10$mm6dh6W58JOXjA4cNDCVM.nvPo/LMZNLDxvKBU6b4CBrYIOnbhL0K', // password: MatiasPreiti1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Matias',
					lastName: 'Preiti',
					email: 'MatiasPreiti@admin.com',
					password: '$2a$10$mm6dh6W58JOXjA4cNDCVM.nvPo/LMZNLDxvKBU6b4CBrYIOnbhL0K', // password: MatiasPreiti1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Ivan',
					lastName: 'Achocalla',
					email: 'IvanAchocalla@standard.com',
					password: '$2a$10$ovls9PH5IndDgxX0ratSyuUGvAY2.n3yQU4GugRd86tH5wWdB6/ju', // password: IvanAchocalla1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Ivan',
					lastName: 'Achocalla',
					email: 'IvanAchocalla@admin.com',
					password: '$2a$10$ovls9PH5IndDgxX0ratSyuUGvAY2.n3yQU4GugRd86tH5wWdB6/ju', // password: IvanAchocalla1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Agustin',
					lastName: 'Avila',
					email: 'AgustinAvila@standard.com',
					password: '$2a$10$0Nf0VkJuuUsiror1w.T3BenJEmN2qzCLpOVVraabU02i0HlqNsPHm', // password: AgustinAvila1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Agustin',
					lastName: 'Avila',
					email: 'AgustinAvila@admin.com',
					password: '$2a$10$0Nf0VkJuuUsiror1w.T3BenJEmN2qzCLpOVVraabU02i0HlqNsPHm', // password: AgustinAvila1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Alexis',
					lastName: 'Zacre',
					email: 'AlexisZacre@standard.com',
					password: '$2a$10$BY6s00NCzEtlKTP0kQdDquyz9GnsPU1VPtWNNzDUZBTnGrAh61kjK', // password: AlexisZacre1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Alexis',
					lastName: 'Zacre',
					email: 'AlexisZacre@admin.com',
					password: '$2a$10$BY6s00NCzEtlKTP0kQdDquyz9GnsPU1VPtWNNzDUZBTnGrAh61kjK', // password: AlexisZacre1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Juan',
					lastName: 'Almazan',
					email: 'JuanAlmazan@standard.com',
					password: '$2a$10$Kz.GH5rUTt99J9uoJQ5kP.zGPrMLz9fr6qoINCe2sKlSqrW25Gif6', // password: JuanAlmazan1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Juan',
					lastName: 'Almazan',
					email: 'JuanAlmazan@admin.com',
					password: '$2a$10$Kz.GH5rUTt99J9uoJQ5kP.zGPrMLz9fr6qoINCe2sKlSqrW25Gif6', // password: JuanAlmazan1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Manuel',
					lastName: 'Francisco',
					email: 'ManuelFrancisco@standard.com',
					password: '$2a$10$vNWSVFPk8LVjGVAoaZZ4auFtzxyMCATQLaQ7hQjrJDorSlxZeazYW', // password: ManuelFrancisco1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Manuel',
					lastName: 'Francisco',
					email: 'ManuelFrancisco@admin.com',
					password: '$2a$10$vNWSVFPk8LVjGVAoaZZ4auFtzxyMCATQLaQ7hQjrJDorSlxZeazYW', // password: ManuelFrancisco1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Francisco',
					lastName: 'Olivero',
					email: 'FranciscoOlivero@standard.com',
					password: '$2a$10$Bm6xOuNR6H0EaesHGzqb5e9xCy/Fquk7mRPmiXSDAjtsozMVcDWUu', // password: FranciscoOlivero1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					firstName: 'Francisco',
					lastName: 'Olivero',
					email: 'FranciscoOlivero@admin.com',
					password: '$2a$10$Bm6xOuNR6H0EaesHGzqb5e9xCy/Fquk7mRPmiXSDAjtsozMVcDWUu', // password: FranciscoOlivero1
					roleId: 1,
					photo: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});
	}
};

//Объект, содержащий рандомные факты о котах и генератор выдающий случайный факт:

export const randomFactsGenerator={

randomFacts: ['Дверь для домашних кошек изобрел выдающийся ученый Исаак Ньютон.',
	'Многих умиляет, когда об их ноги трутся кошки, хотя на самом деле животные просто помечают так свою территорию.',
	'Вопреки распространенному мнению, многие кошки не переносят молоко. Сырой рыбой котов тоже лучше не кормить.',
	'Хозяева котов на 17% чаще являются обладателями ученой степени.',
	'Кошка не может вскарабкаться на дерево вниз головой из-за устройства когтей. Для того, чтобы спуститься с дерева, ей нужно отступать, пятясь задом.',
	'Зрение кошки одновременно лучше и хуже человеческого. Кошки отлично видят в темноте, но не различают цвета.',
	'Кошки обнюхивают пищу перед едой, потому что так они определяют ее температуру.',
	'Кот по имени Стаббс 15 лет был мэром города Талкитна на Аляске. Еще один кот пытался стать главой Мехико в 2013 году.',
	'Подавляющее большинство хозяев кошек (95%) разговаривает со своими питомцами.',
	'Треть владельцев кошек считает своих пушистых питомцев способными читать их мысли.',
],

	getRandomFact(){return this.randomFacts[Math.floor(Math.random()*this.randomFacts.length)]},
};
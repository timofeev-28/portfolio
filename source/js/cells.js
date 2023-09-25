const table = document.querySelector(`.cells__table`)
const lines = 10
const columns = 10

// Количество загаданных ячеек
const quantityHiddenCells = 10

// Диапазон загадываемых номеров ячеек
const RandomIntegerCounter = {min: 1, max: 100}

// ФУНКЦИЯ - Получение случайного числа из диапазона
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// ФУНКЦИЯ - Получение массива номеров загаданных компьютером ячеек
const creatHiddenCells = () => {
	const hiddenCells = []

	while (hiddenCells.length < quantityHiddenCells) {
		let number = getRandomInteger(RandomIntegerCounter.min, RandomIntegerCounter.max)

		if (hiddenCells.includes(number)) {continue}
		hiddenCells.push(number)
	}

	return hiddenCells
}

// ФУНКЦИЯ - Создание таблицы
// eslint-disable-next-line no-shadow
const createTable = (lines, columns) => {
	for (let i = 1; i <= lines; i++) {
		let line = document.createElement(`tr`)

		for (let j = 1; j <= columns; j++) {
			let cell = document.createElement(`td`)
			cell.classList.add(`cells__cell`)
			cell.tabIndex = 0
			line.append(cell)
		}

		table.append(line)
	}
}


// ФУНКЦИЯ - Помечаем загаданные ячейки
let setHiddenSells = () => {
	const cells = document.querySelectorAll(`.cells__cell`)
	const hiddenCells = creatHiddenCells()

	hiddenCells.forEach((index) => cells[index - 1].classList.add(`cells__hidden-cell`))
}


// ФУНКЦИЯ - Ставим слушатели событий на ячейки
let setEventListeners = () => {
	const cells = document.querySelectorAll(`.cells__cell`)

	// Спан для количества открытых ячеек
	const openHiddenCell = document.querySelector(`.cells__count-open-cells`)

	// Спан для количества попыток
	const attempts = document.querySelector(`.cells__count-attempt`)

	// Сообщения от компьютера
	const massage = document.querySelector(`.cells__massage`)

	let countAttempts = 1
	let countGuessedCell = 1

	cells.forEach((cell) => {
		cell.addEventListener(`click`, () => {
			if (cell.matches(`.cells__selected`)) {
				massage.textContent = `Вы сюда уже нажимали!`
				return massage
			}

			cell.classList.add(`cells__selected`)
			massage.textContent = ``
			attempts.textContent = countAttempts++

			if (cell.matches(`.cells__hidden-cell`)) {
				massage.textContent = `Уррааааа!`
				openHiddenCell.textContent = countGuessedCell++

				if (countGuessedCell === 11) {
					massage.textContent = `Вы угадали за ${countAttempts - 1} попыток`
				}
			}
		})
	})
}

const createGameCells = () => {
	createTable(lines, columns) // создали таблицу
	setHiddenSells() // пометили загаданные ячейки
	setEventListeners() // поставили счётчики событий
}

export {createGameCells}

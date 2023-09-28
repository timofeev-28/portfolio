/* eslint-disable prefer-arrow-callback */
const getNumber = () => {
	const input = document.querySelector(`.number__input`)
	const answer = document.querySelector(`.number__answer`)
	const btnShow = document.querySelector(`.number__btn-show-toggle`)
	const secretNumber = document.querySelector(`.number__mysterious-number`)
	const attemptCounter = document.querySelector(`.number__numbers`)
	const btnCheck = document.querySelector(`.number__btn`)
	const countTimer = document.querySelector(`.number__timer`)
	let i = 60
	// счётчик попыток
	let count = 0
	// массив для введённых чисел
	let enteredТumbers = []

	const minNum = 1
	const maxNum = 100

	// по умолчанию фокус на инпуте
	input.focus()

	let id = setInterval(function() {
		i--

		if (i === -1) {
			stopTimer(id)
			answer.innerHTML = `Извините, но время кончилось! &#129335;`
			btnCheck.disabled = true
		} else {
			countTimer.textContent = i
		}
	}, 1000)

	// eslint-disable-next-line no-shadow
	function stopTimer (id) {
		clearInterval(id)
	}

	// функция для получения случайного числа
	const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

	// показать загаданное компьютером число
	btnShow.addEventListener(`click`, () => {
		secretNumber.classList.toggle(`js-show`)
	})

	// компьютер загадывает число
	let MysteriousNumber = getRandomInteger(minNum, maxNum)
	secretNumber.textContent = MysteriousNumber

	// Событие клика по кнопке Проверить
	btnCheck.addEventListener(`click`, () => {
		let num = +input.value

		// если при пустом инпуте нажмут Проверить
		if (num === 0) {
			answer.innerHTML = `Введите число то! И не 0 &#129335;`
			return answer
		}

		// если при пустом инпуте нажмут Проверить
		if (num < 0 || num > 100) {
			answer.innerHTML = `Введите числа от 1 до 100 `
			return answer
		}

		// проверка - если такое число уже вводилось
		if (enteredТumbers.includes(num)) {
			input.value = ``
			input.focus()
			answer.innerHTML = `Вы это число уже вводили! &#129335;`
			return answer
		}

		count++

		// показываем введённые числа
		enteredТumbers.push(num)
		attemptCounter.textContent = enteredТumbers.join(`, `)

		if (num === MysteriousNumber && count === 1) {
			stopTimer(id)
			btnCheck.disabled = true
			answer.innerHTML = `У вас ясновидение!? &#128519; Вы угадали с ${count} раза!`
			return answer
		}

		if (num === MysteriousNumber) {
			stopTimer(id)
			btnCheck.disabled = true
			answer.innerHTML = `Вы угадали с ${count} раза! &#128077;`
			return answer
		}

		if (num < MysteriousNumber) {
			answer.innerHTML = `Введите число побольше`
		} else {
			answer.innerHTML = `Введите число поменьше`
		}

		input.value = ``
		input.focus()
	})
}

getNumber()

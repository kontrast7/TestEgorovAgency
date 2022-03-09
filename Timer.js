const hoursID = document.querySelector('#hours');
const daysID = document.querySelector('#days');
const minutesID = document.querySelector('#minutes');
const secondsID = document.querySelector('#seconds');

timer();
setInterval(timer, 1000);

function timer() {
	const now = new Date();
	const target = new Date(
		now.getFullYear() + 1,
		0,
		1,
		0,
		0,
		0
	);
	
	const diff = Math.ceil((target - now) / 1000);
	
	const days = extract(diff, 60 * 60 * 24);
	const hours = extract(days.diff, 60 * 60);
	const minutes = extract(hours.diff, 60);
	const seconds = extract(minutes.diff, 1);
	

    daysID.innerHTML = addZero(days.value)+ ` :`;
    hoursID.innerHTML = addZero(hours.value)+ ` :`
    minutesID.innerHTML = addZero(minutes.value)+ ` :`
    secondsID.innerHTML = addZero(seconds.value)
}

function extract(diff, formula) {
	const value = Math.floor(diff / formula);
	const diff = diff % formula;
	
	return {value: value, diff: diff};
}

function addZero(num) {
	if (num <= 9) {
		num = '0' + num;
	}
	
	return num;
}

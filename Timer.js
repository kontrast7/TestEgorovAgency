var hoursID = document.querySelector('#hours');
var daysID = document.querySelector('#days');
var minutesID = document.querySelector('#minutes');
var secondsID = document.querySelector('#seconds');

timer();
setInterval(timer, 1000);

function timer() {
	var now = new Date();
	var target = new Date(
		now.getFullYear() + 1,
		0,
		1,
		0,
		0,
		0
	);
	
	var diff = Math.ceil((target - now) / 1000);
	
	var days = extract(diff, 60 * 60 * 24);
	var hours = extract(days.diff, 60 * 60);
	var minutes = extract(hours.diff, 60);
	var seconds = extract(minutes.diff, 1);
	

    daysID.innerHTML = addZero(days.value)+ ` :`;
    hoursID.innerHTML = addZero(hours.value)+ ` :`
    minutesID.innerHTML = addZero(minutes.value)+ ` :`
    secondsID.innerHTML = addZero(seconds.value)
}

function extract(diff, formula) {
	var value = Math.floor(diff / formula);
	var diff = diff % formula;
	
	return {value: value, diff: diff};
}

function addZero(num) {
	if (num <= 9) {
		num = '0' + num;
	}
	
	return num;
}

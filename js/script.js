const inputNumber = document.getElementById('input-number');
const inputHasil = document.getElementById('input-hasil');
const judulHasil = document.getElementById('judul-hasil');
const teksHasil = document.getElementById('teks-hasil');
const judulRumus = document.getElementById('judul-rumus');
const teksRumus = document.getElementById('teks-rumus');
let converter = 'celcius';

function reset() {
	inputNumber.value = '';
	inputHasil.value = '';
	judulHasil.innerText = '';
	teksHasil.innerText = '';
	judulRumus.innerText = '';
	teksRumus.innerText = '';
}

function content() {
	const hasilCeltoFah = ((inputNumber.value * 9/5) + 32).toFixed(2);
	const hasilFahtoCel = ((inputNumber.value - 32) * 5/9).toFixed(2);

	if (inputNumber.value == '') inputNumber.value = 0;
	
	judulHasil.innerText = 'Hasil';
	judulRumus.innerText = 'Rumus dan Penjelasan';
	
	if (converter === 'celcius') {
		inputHasil.value = hasilCeltoFah;
		teksHasil.innerHTML = `Hasil konversi dari <i>Celcius ke Fahrenheit</i> diatas adalah <b>${hasilCeltoFah}</b>.`;
		teksRumus.innerText = `°F = (9/5 x °C) + 32`;
		teksRumus.innerHTML += `
			<ul>
				<li>°C atau Celsius adalah nilai suhu dalam Celcius yang ingin dikonversi.</li>
				<li>9/5 adalah faktor konversi dari Celcius ke Fahrenheit.</li>
				<li>32 adalah nilai offset untuk Fahrenheit, di mana titik beku air adalah 32 derajat Fahrenheit.</li>
			</ul>
		`;
	} else {
		inputHasil.value = hasilFahtoCel;
		teksHasil.innerHTML = `Hasil konversi dari <i>Fahrenheit ke Celcius</i> diatas adalah <b>${hasilFahtoCel}</b>.`;
		teksRumus.innerText = `°C = (°F - 32) x 5/9`;
		teksRumus.innerHTML += `
			<ul> 
				<li>°F atau adalah nilai suhu dalam Fahrenheit yang ingin dikonversi.</li>
				<li>32 adalah nilai offset untuk Fahrenheit, di mana titik beku air adalah 32 derajat Fahrenheit.</li>
				<li>5/9 adalah faktor konversi dari Fahrenheit ke Celcius.</li>
			</ul>
		`;
	}
};

function konversi() { 
	const spinnerGif = document.querySelector('#petunjuk-spinner');
	spinnerGif.innerHTML = `
		<img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" width="95%">
	`;
	
	setTimeout(() => {
		spinnerGif.innerHTML = '';
		content();
	},1000);
};

function reverse() {
	const titlePage = document.getElementsByTagName('title')[0];
	const titleWeb = document.getElementById('judul-converter');
	const labelInputOne = document.getElementsByTagName('label')[0];
	const labelInputTwo = document.getElementsByTagName('label')[1];
	
	if (converter === 'celcius') {
		titleWeb.innerText = 'Fahrenheit to Celcius';
		titlePage.innerText = 'Fahrenheit to Celcius';
		labelInputOne.innerText = 'Fahrenheit(°F)';
		labelInputTwo.innerText = 'Celsius(°C)';
		converter = 'fahrenheit';
	} else {
		titleWeb.innerText = 'Celcius to Fahrenheit';
		titlePage.innerText = 'Celcius to Fahrenheit';
		labelInputOne.innerText = 'Celsius(°C)';
		labelInputTwo.innerText = 'Fahrenheit(°F)';
		converter = 'celcius';
	}
};
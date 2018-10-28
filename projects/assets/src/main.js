var dataArray = [];
var main = document.querySelector('.main-section');
var table1 = document.querySelector('.table-1');
var headerBtn = document.querySelector('.header-btn');
var searchBox = document.querySelector('.search-box');
headerBtn.style.display = 'none';

var hightIncomeArray = [];
var lowIncomeArray = [];
var midIncomeArray = [];



function getData() {
	console.log('emmpty array')
	var url = 'https://api.worldbank.org/v2/countries/all?per_page=304&format=json';
	fetch(url)
	.then(res => res.json())
	.then(data => {
		data[1].forEach(obj => {

			let tempObj = {
				name : obj.name,
				region : obj.region,
				incomeLevel : obj.incomeLevel,
				lendingType : obj.lendingType,
				capital : obj.capitalCity,
				longitude : obj.longitude,
				latitude : obj.latitude
			};
				dataArray.push(tempObj);
				hightIncomeArray = dataArray.filter( obj => (obj.incomeLevel.value === 'High income'));
				lowIncomeArray = dataArray.filter( obj => obj.incomeLevel.value === 'Low income')
				midIncomeArray = dataArray.filter( obj => obj.incomeLevel.value === 'Lower middle income')
			})
			console.log('fillarray')
	});
}

getData();


function addHighIncome(e) {
	headerBtn.style.display = 'inline-block';
	main.style.background= 'white';
	e.preventDefault();
	let tempArray = [];
	hightIncomeArray.map(obj => {
		tempArray.push(`
		<tr class='row'>
			<td>${obj.name}</td>
			<td>${obj.region.value}</td>
			<td>${obj.capital}</td>
			<td>${obj.incomeLevel.value}</td>
		</tr>`)
	})
	display(tempArray, e);
}

function addLowIncome(e) {
	headerBtn.style.display = 'inline-block';
	main.style.background= 'white';
	e.preventDefault();
	let tempArray = [];
	lowIncomeArray.map(obj => {
		tempArray.push(`
		<tr class='row'>
			<td>${obj.name}</td>
			<td>${obj.region.value}</td>
			<td>${obj.capital}</td>
			<td>${obj.incomeLevel.value}</td>
		</tr>`)
	})
	display(tempArray, e);
}

function addMidIncome(e) {
	headerBtn.style.display = 'inline-block';
	main.style.background= 'white';
	e.preventDefault();
	let tempArray = [];
	midIncomeArray.map(obj => {
		tempArray.push(`
		<tr class='row'>
			<td>${obj.name}</td>
			<td>${obj.region.value}</td>
			<td>${obj.capital}</td>
			<td>${obj.incomeLevel.value}</td>
		</tr>`)
	})
	display(tempArray,e);
}

function addAllData(e) {
	headerBtn.style.display = 'inline-block';
	main.style.background= 'white';
	e.preventDefault();
	let tempArray = [];
	dataArray.map(obj => {
		tempArray.push(`
		<tr class='row'>
			<td>${obj.name}</td>
			<td>${obj.region.value}</td>
			<td>${obj.capital}</td>
			<td>${obj.incomeLevel.value}</td>
		</tr>`)
	})
	display(tempArray, e);
}

function searchData(e) {
	if(e.key == 'Enter') {
		let value = (e.target.value).toLowerCase();
		e.target.value = '';
		var tempArray = dataArray.filter(obj => ((obj.name).toLowerCase().includes(value)));
		console.log(tempArray)
		addSearchData(tempArray, e);
	}
}

function addSearchData(array, e) {
	headerBtn.style.display = 'inline-block';
	main.style.background= 'white';
	e.preventDefault();
	let tempArray = [];
	array.map(obj => {
		tempArray.push(`
		<tr class='row'>
			<td>${obj.name}</td>
			<td>${obj.region.value}</td>
			<td>${obj.capital}</td>
			<td>${obj.incomeLevel.value}</td>
		</tr>`)
	})
	display(tempArray, e);
}

function display(income, event) {
	event.preventDefault();
	main.innerHTML = 
	`<table>
		<tr class='titles'>
			<td>Country</td>
			<td>Region</td>
			<td>Capital</td>
			<td>Income Level</td>
		</tr>

		${income.join('')}
	</table>`
}




var highIncomeBtn = document.querySelector('.high-income');
var lowIncomeBtn = document.querySelector('.low-income');
var midIncomeBtn = document.querySelector('.mid-income');
var all = document.querySelector('.all-income');

highIncomeBtn.addEventListener('click', addHighIncome);
lowIncomeBtn.addEventListener('click', addLowIncome);
midIncomeBtn.addEventListener('click', addMidIncome);
all.addEventListener('click', addAllData);
searchBox.addEventListener('keydown', searchData)



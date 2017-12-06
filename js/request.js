l = console.log;
const API_KEY = '722bbc78da5c4d94b88f249b337adbd2';

request();

/*делаем запрос на сайт в соответствии с названием города*/
function request () {
	var api = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + API_KEY;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', api);
	xhr.send();
	xhr.onload = function (){
		if (xhr.status != 200) {
			//изменить ошибку
			l(xhr.status + ': ' + xhr.statusText);
		} else {
			requestHandling(xhr.responseText);
		};

	};
};
/*обработаем ответ, как только его получим*/
function requestHandling(response){
	var parsedResponse = JSON.parse(response);

	/*CITY_LIST_DOM[num].innerHTML = cityName + ' / ' + parsedResponse.list[0].main.temp + '°';
	if (num == 4) {
		var index = 0;
		parsedResponse.list.forEach(function(item) {
			if(item.dt_txt.split(' ')[1] == '15:00:00') {
				var dateValue = item.dt_txt.split(' ')[0].split('-');
				FORECAST_ITEM_DATE[index].innerHTML = dateValue[2] + '.' + dateValue[1];
				FORECAST_ITEM_TEMP[index].innerHTML = item.main.temp + '°';
				index++;
			};
		});
		l(parsedResponse.city.name.toUpperCase());
		CURRENT_CITY_NAME.innerHTML = cityName;*/
	};
};

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
	var response = JSON.parse(response);
	var responseArray = [];
		for (let i = 0; i < 10; i++) {
		responseArray[i] = {};
		responseArray[i].title = response.response.docs[i].headline.main;
		responseArray[i].body = response.response.docs[i].snippet;
		responseArray[i].url = response.response.docs[i].web_url;
		switch(response.response.docs[i].section_name) {
			case 'World':
				responseArray[i].tag = "World";
				break;
			case 'Europe':
				responseArray[i].tag = "Europe";
				break;
			case 'Politics':
				responseArray[i].tag = "Politics";
				break;
			case 'Sports':
				responseArray[i].tag = "Sports";
				break;
			default:
				responseArray[i].tag = "Others";
		};
	};
	l(responseArray);
};


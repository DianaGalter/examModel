l = console.log;
const API_KEY = '722bbc78da5c4d94b88f249b337adbd2';
const newsBlock = document.getElementsByClassName('news')[0];
//const searchRussia = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=russia&api-key=' + API_KEY;
const section = 'all-sections';
request();

/*делаем запрос на сайт в соответствии с названием города*/
function request () {
	var api = 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/' + section + '/1.json?api-key=' + API_KEY;
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
		responseArray[i].title = response.results[i].title;
		responseArray[i].abstract = response.results[i].abstract;
		responseArray[i].url = response.results[i].url;
		switch(response.results[i].section) {
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
	createArticle(responseArray);
};


function createArticle (responseArray) {
	for(let i = 0; i < 10; i++) {
		var article = `<article class="news-item">
                <div class="news-item__title">` + responseArray[i].title + `</div>
                <div class="news-item__body">` + responseArray[i].abstract + `<br /><a class="news-item__tag">#` + responseArray[i].tag + `</a></div>
                <a class="news-item__close" title="Close this article"></a>
                <a class="news-item__like" title="I like it!"></a>
                <a class="news-item__seen" title="I have already seen that"></a>
            </article>`;
        newsBlock.innerHTML += article;
	}
    
};
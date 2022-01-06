import './style.css';

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=girl', {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "0815bfadfemsh5db0f9c12287b66p15c92ajsnb2cd2a662a56"
	}
})
.then(response => response.json())
.then(response => { 
  const list = response.d;
  list.map((item) => {
    const name = item.l;
    const image = item.i.imageUrl;
    const like = item.rank;
    const movie =  `<li class="list"><a href="#"><img class="img" src='${image}'></img></a> <div class="title-div"><h2 class="title"> ${name}</h2> <h2 class="like"> ❤ ${like}</h2></div> </li> `
    document.querySelector('.movies').innerHTML += movie;
  })
})

.catch(err => {
	console.error(err);
});
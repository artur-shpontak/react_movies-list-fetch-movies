(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),l=(a(15),a(9)),s=a(1),o=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,n=void 0===a?"":a,r=e.imgUrl,c=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:r,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},n,i.a.createElement("br",null),i.a.createElement("a",{href:c},"IMDB"))))}),m=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(o,Object.assign({key:e.imdbId},e))})))},d=a(3),u=a.n(d),p=a(5),b=(a(20),function(){var e=Object(p.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://www.omdbapi.com/?i=tt3896198&apikey=6fdb8fe3","&t=").concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Failed to load remote data from ".concat(t));case 5:return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=function(e){var t=e.onAddMovie,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],l=r[1],m=Object(n.useState)(null),d=Object(s.a)(m,2),h=d[0],g=d[1],f=Object(n.useState)(""),v=Object(s.a)(f,2),w=v[0],E=v[1];Object(n.useEffect)((function(){E("")}),[c]);var M=Object(n.useCallback)(Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==c.length){e.next=4;break}return E("Please enter a title!"),g(null),e.abrupt("return");case 4:return e.next=6,b(c);case 6:if("False"!==(t=e.sent).Response){e.next=11;break}return E(t.Error),g(null),e.abrupt("return");case 11:g({title:t.Title,description:t.Plot,imgUrl:t.Poster,imdbUrl:"https://imdb.com/title/".concat(t.imdbID,"/"),imdbId:t.imdbID});case 12:case"end":return e.stop()}}),e)}))),[c]),N=Object(n.useCallback)((function(){h?(t(h),g(null),l("")):E("Please find a movie first.")}),[h]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"find-movie"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input".concat(w&&" is-danger"),value:c,onChange:function(e){return l(e.target.value)}})),i.a.createElement("p",{className:"help is-danger"},w)),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-light",onClick:M},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-primary",onClick:N},"Add to the list")))),h&&i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"title"},"Preview"),i.a.createElement(o,Object.assign({key:h.imdbId},h))))},g=a(8),f=function(){var e=Object(n.useState)(g),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useCallback)((function(e){a.some((function(t){return t.imdbId===e.imdbId}))||r([].concat(Object(l.a)(a),[e]))}),[a]);return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(m,{movies:a})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(h,{onAddMovie:c})))};c.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.5f665e9f.chunk.js.map
let name = 'MariyaShulyak';
let url = 'https://api.github.com/users/';

let currentDate = new Date();

let preloader = document.getElementById ('preloader');

setTimeout(function() {
	preloader.classList.add('hidden');
}, 2000);

const getDate = new Promise((resolve, reject) => {
 setTimeout(() => currentDate ? resolve(currentDate.innerHTML = currentDate.toDateString()) : reject('Не удалось получить дату'), 1500);
})


 const getUrl = new Promise ((resolve,reject) => {
   setTimeout (() => url ? resolve (url) : reject ('Ссылка не найдена'),1000);
 });

 const getName = new Promise ((resolve,reject) => {
   setTimeout (() => name ? resolve (name) : reject ('Имя не найдено'),2000);
 });


 Promise.all ([getUrl,getName])
   .then (([url,name]) => fetch(`${url}${name}`))
   .then (response => response.json())
   .then (json => {
     console.log (json.avatar_url);
     console.log (json.bio);
     console.log (json.name);
     console.log (json.html_url);

   let img = new Image();
    img.src = json.avatar_url;
   document.body.append(img);

   let name = document.createElement('a');
   if (json.name != null) {
     name.innerHTML = json.name;
   } else {
     name.innerHTML ='Информация о пользователе не доступна';
   };
   document.body.append(name);
   name.addEventListener("clik", () => window.location.herf = json.html_url);

   let bio = document.createElement ('p');
   if (json.bio != null) {
     bio.innerHTML = json.bio;
   }else{
     bio.innerHTML ='Информация о пользователе не доступна';
   }
   document.body.append(bio);

   let herf = document.createElement ('a');
   if (json.html_url != null) {
     herf.innerHTML = json.html_url;
   }else{
   html_url.innerHTML ='Информация о пользователе не доступна';
   }
   document.body.append(herf);
   document.body.append(currentDate);
 })
 .catch (error => console.error());

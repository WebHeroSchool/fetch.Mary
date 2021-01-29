let name = 'MariyaShulyak';
let url = 'https://api.github.com/users/';

let date = new Date();
 const getDate = new Promise ((resolve, reject) => {
   setTimeOut (() => date ? resolve (date) : reject ('err'),3000);
 });

 const getUrl = new Promise ((resolve,reject) => {
   setTimeOut (() => url ? resolve (url) : reject ('Ссылка не найдена'),2000);
 });

 const getName = new Promise ((resolve,reject) => {
   setTimeOut (() => name ? resolve (name) : reject ('Имя не найдено'),1000);
 });

 Promise.all ([getUrl,getDate,getName])
   .then (([name,url]) => fetch(`${url}${name}`))
   .then (response => response.json)
   .then (json => {
     console.log (json.avatar_url);
     console.log (json.bio);
     console.log (json.name);
     console.log (json.html_url);

   let img = new Image();
    img.src = json.avatar_url;
   document.body.append(img);

   let name = document.createElement('p');
   if (json.name != null) {
     name.innerHTML = json.name;
   } else {
     name.innerHTML ='Информация о пользователе не доступна';
   };
   document.body.append(name);
   name.addEventListener("clik", () =>window.location.herf= json.html_url);

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
   document.body.append (date);
 })
 .catch (error => console.error());

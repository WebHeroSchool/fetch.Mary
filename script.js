

let url = window.location.toString();

function userName (url) {
let getUrl = url.split('=');
let name = getUrl[1];
if (name == undefined) {
name ='MariyaShulyak';
}
return name;
}

fetch (`https://api.github.com/users/${userName(url)}`)
.then (response => response.json())
.then (json => {
  console.log (json.avatar_url);
  console.log (json.bio);
  console.log (json.login);
  console.log (json.html_url);

let img = new Img();
 img.src = json.avatar_url;
document.body.append(img);
});

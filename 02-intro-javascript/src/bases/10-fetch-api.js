// https://es.javascript.info/fetch
// api.giphy.com/v1/gifs/trending
// api.giphy.com/v1/stickers/trending
// HX4npOV3yntlrXLaChcORpp6ZJO12xe2
const apiKey = 'HX4npOV3yntlrXLaChcORpp6ZJO12xe2';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then(resp => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);

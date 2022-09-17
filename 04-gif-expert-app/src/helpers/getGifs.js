export const getGifs = async category => {
  const api_key = 'HX4npOV3yntlrXLaChcORpp6ZJO12xe2';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}}&limit=5`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

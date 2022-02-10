const getGifts = async (category) => {
  const apiKey = "Sk5G6XDKTxXAyZ1n121cLxBXGRn4WFjT";
  const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`;

  const res = await fetch(apiUrl);
  const { data } = await res.json();

  const gifts = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifts;
};

export default getGifts;

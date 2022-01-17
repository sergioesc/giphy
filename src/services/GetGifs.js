const apiKey = 'mqbD5IqXzipSD0Yrzwi2kMh1gmOMe5Wc'
const cantidad = 25;

function getGifs({keyword = 'españa'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${cantidad}&offset=0&rating=g&lang=en`
   
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        if (Array.isArray(data)){
            const gifs = data.map(image => {
                const {images, title, id} =  image
                const {url} = images.downsized_medium
                return{ title, id, url}
            })
            return gifs
        }
        return []
    })
}


export default getGifs;

import axios from 'axios';


const base = 'https://api.giphy.com/v1/gifs/search';
const apiKey = '2bM11qakX0xWfqHNO900cb690oVHVXWW';
const limit = 12;



export const getGifs = async (category) => {

    const url = `${base}?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

    return await axios.get(url).then(
        res => {
            const { data } = res.data;
            const gifs = data.map(img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url,
                }
            })

            return gifs;
            // setState({
            //     data: gifs,
            //     loading: false
            // });
        });
}
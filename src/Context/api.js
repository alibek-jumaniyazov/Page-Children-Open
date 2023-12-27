import axios from "axios";

const getNews = async () => {
    try {
        const response = await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json')
        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}



export { getNews }
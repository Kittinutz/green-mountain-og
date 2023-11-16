import axios from 'axios';



export async function getReviews() {
    const placeId = 'ChIJKey95oA7UDARsoH6Xh2PWHU';
    const key = process.env.PLACE_KEY
    const response = await axios.post(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${key}`
    );
    console.log(response.data.result.review)
    return response.data.result.reviews;
}


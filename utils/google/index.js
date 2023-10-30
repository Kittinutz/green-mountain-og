import axios from 'axios';
import { google } from 'googleapis';

import key from '../../greenmountain-service-account.json'


export async function getReviews() {
    const token = await authenticate();
    const accountId = '101073996308019444682';
    const locationId = 'ChIJKey95oA7UDARsoH6Xh2PWHU';
    console.log({
        token
    })
    const key = 'AIzaSyBMlg0gafvC9odA7s7wwyY4LgM8bWO791g'
    const response = await axios.post(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=300&&key=${key}`
    );

    return resp.data.reviews;
}

async function authenticate() {
    try {
        const scopes = [
            'https://www.googleapis.com/auth/business.manage'
        ];

        const jwt = new google.auth.JWT({
            keyFile: "greenmountain-service-account.json",
            scopes
        });

        const resp = await jwt.authorize();
        return resp.access_token.replace(/\.{2,}/g, '');
    } catch (e) {
        console.error(e)
    }
}

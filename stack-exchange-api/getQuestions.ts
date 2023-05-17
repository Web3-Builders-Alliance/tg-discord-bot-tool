import fetch from 'node-fetch';
import { QuestionResponse } from '../types';




export const getQuestions = async (minutes : number, site: string) => {

    // Date 5 minutes ago
    const seconds = minutes * 60
    const date = ((Math.floor((Date.now()/1000)/seconds))*seconds)-seconds

    // Call StackExchange API
    const res = await fetch(
        `https://api.stackexchange.com/2.3/questions?fromdate=${date}&order=desc&sort=activity&site=${site}`
    );
    const json: any = await res.json();
    const jsonTyped: QuestionResponse = json;

    // Return array questions
    return jsonTyped.items
}

getQuestions(5, 'solana')
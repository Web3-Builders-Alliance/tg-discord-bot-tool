import { initDiscord } from "../discord/client";
import { getQuestions } from "../stack-exchange-api/getQuestions";
import { createPostOnDiscordChannel } from "../discord/createPostOnDiscordChannel";


(async () => {
    // Init discord client
    const client = await initDiscord();

    
    setInterval(async () => {
        // Get questions from StackExchange API
        const questions = await getQuestions(5, 'solana')
        
        // Post questions on Discord
        questions.forEach(async (question) => {
            await createPostOnDiscordChannel(client, question)
        })
    }, 300000)
})();


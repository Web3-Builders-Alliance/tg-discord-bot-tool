import { initDiscord } from "../discord/client";
import { getQuestions } from "../stack-exchange-api/getQuestions";
import { createPostOnDiscordChannel } from "../discord/createPostOnDiscordChannel";
import { initTelegram } from "../telegram/client";

(async () => {
    try{
        // Init discord client
        const client = await initDiscord();

        // Init telegram bot
        let bot = initTelegram()


        setInterval(async () => {
            // Get questions from StackExchange API
            const questions = await getQuestions(5, 'solana')
            
            // Post questions on Discord
            questions.forEach(async (question) => {
                await createPostOnDiscordChannel(client, question)
                bot?.sendMessage(process.env.TELEGRAM_CHAT_ID || '', question.link)
            })
        }, 300000)
    }catch(error){
        console.log(error)
    }
})()


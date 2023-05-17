import { initDiscord } from "../discord/client";
import { getQuestions } from "../stack-exchange-api/getQuestions";
import { createPostOnDiscordChannel } from "../discord/createPostOnDiscordChannel";



const main = async () => {
    const client = await initDiscord();
    setInterval(async () => {
        const questions = await getQuestions(5, 'solana')
        console.log(questions)
        questions.forEach(async (question) => {
            await createPostOnDiscordChannel(client, question)
        })
    }, 300000)
}

main()
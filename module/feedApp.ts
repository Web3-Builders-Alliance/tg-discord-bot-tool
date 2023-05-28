import { initDiscord } from "../discord/client";
import { getQuestions } from "../stack-exchange-api/getQuestions";
import { createPostOnDiscordChannel } from "../discord/createPostOnDiscordChannel";
import { initTelegram } from "../telegram/client";
import { repos } from "../github/config";
import githubApi from "../github/api";

(async () => {
    try {
        // Init discord client
        const client = await initDiscord();
        const channelId = process.env.DISCORD_CHANNEL_ID as string;

        // Init telegram bot
        let bot = initTelegram()

        const intervalSeconds = 300;
        setInterval(async () => {
            // Get questions from StackExchange API
            const questions = await getQuestions(intervalSeconds, 'solana')

            // Post questions on Discord and Telegram
            questions.forEach(async (question) => {
                await createPostOnDiscordChannel(client, channelId, { question })
                bot?.sendMessage(process.env.TELEGRAM_CHAT_ID || '', question.link)
            })

            for (let repo of repos) {
                // Get releases of each repo from github API
                const releases = await githubApi.getReleases(repo);

                // Post each release on Discord and Telegram
                for (let release of releases) {
                    await createPostOnDiscordChannel(client, channelId, { release })
                    bot?.sendMessage(process.env.TELEGRAM_CHAT_ID || '', release.url)
                }
            }
        }, intervalSeconds * 1000);
    } catch (error) {
        console.log(error)
    }
})()


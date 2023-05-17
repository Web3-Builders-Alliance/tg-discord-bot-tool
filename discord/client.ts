import {Client, GatewayIntentBits, } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.DISCORD_TOKEN;

// Initialize discord client
const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

// Login into discord bot
export const initDiscord = async () => {
    client.on('ready', async () => {
      console.log(`Discord logged in as ${client.user?.tag}`)
    })

    await client.login(token)
  
    return client
}







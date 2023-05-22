import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv'

dotenv.config()

// Create a bot client for telegram
export const initTelegram = () => {

    const token = process.env.TELEGRAM_TOKEN;

    if(token === undefined) return

    const bot = new TelegramBot(token, {polling: true});

    return bot
}
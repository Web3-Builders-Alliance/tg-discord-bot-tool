import {Client,  ChannelType, AttachmentBuilder} from 'discord.js'
import { createEmbedQuestion } from './createEmbed';
import { Question } from '../types';
import dotenv from 'dotenv'

dotenv.config()

//Load OpenSea icon
const file = new AttachmentBuilder(`${__dirname}/icon/se.ico`);


// Send message on discord
export const createPostOnDiscordChannel = async (
    client: Client, 
    embedInfo: Question) => {
        try {
            // Check if client is ready
            if (!client.isReady()) {
                console.log('Discord client is not ready')
                return
            }
            const channelId: any = process.env.DISCORD_CHANNEL_ID
            const questionLink = embedInfo.link
            const channel = await client.channels.fetch(channelId)
            const embed = createEmbedQuestion(embedInfo)
            // Check if channel is a text channel
            if(channel?.type === ChannelType.GuildText){
                channel.send(questionLink);
                channel.send({ embeds: [embed], files: [file]});
            }    
            console.log('Posted on Discord successfully')
        } catch (error) {
        console.error('Post on discord channel failed ', error)
        }
}
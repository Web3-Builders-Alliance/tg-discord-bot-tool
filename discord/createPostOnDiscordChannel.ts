import {Client,  ChannelType, AttachmentBuilder} from 'discord.js'
import { createEmbedSale } from './createEmbed';
import { Question } from '../types';
import dotenv from 'dotenv'

dotenv.config()

//Load OpenSea icon
const file = new AttachmentBuilder('./icon/32x32.png');


// Send message on discord
export const createPostOnDiscordChannel = async (
    client: Client, 
    embedInfo: Question) => {
        try {
            if (!client.isReady()) {
                console.log('Discord client is not ready')
                return
            }
            const channelId: any = process.env.DISCORD_CHANNEL_ID
            const link = embedInfo.link
            const channel = await client.channels.fetch(channelId)
            const embed = createEmbedSale(embedInfo)
            if(channel?.type === ChannelType.GuildText){
                channel.send(link);
                channel.send({ embeds: [embed] });
            }    
            console.log('Posted on Discord successfully')
        } catch (error) {
        console.error('Post on discord channel failed ', error)
        }
}
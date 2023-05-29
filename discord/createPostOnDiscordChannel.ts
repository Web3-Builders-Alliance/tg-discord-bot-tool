import { Client, ChannelType, AttachmentBuilder, EmbedBuilder } from 'discord.js'
import { createEmbedQuestion, createEmbedRelease } from './createEmbed';
import { Question } from '../types';
import dotenv from 'dotenv'
import { Release } from '../github/types';

dotenv.config()

//Load OpenSea icon
const file = new AttachmentBuilder(`${__dirname}/icon/se.ico`);

type EmbedInfo = {
    question?: Question,
    release?: Release,
}

// Send message on discord
export const createPostOnDiscordChannel = async (
    client: Client,
    channelId: string,
    embedInfo: EmbedInfo,
) => {
    try {
        // Check if client is ready
        if (!client.isReady()) {
            console.log('Discord client is not ready')
            return
        }
        
        let embed: EmbedBuilder | undefined;
        let link: string | undefined;
        
        if (embedInfo.question) {
            link = embedInfo.question.link;
            embed = createEmbedQuestion(embedInfo.question);
        } else if (embedInfo.release) {
            link = embedInfo.release.url;
            embed = createEmbedRelease(embedInfo.release);
        }
        
        if (!embed || !link) {
            throw new Error('No embed post or link found.')
        }
        
        const channel = await client.channels.fetch(channelId);

        // Check if channel is a text channel
        if (channel?.type === ChannelType.GuildText) {
            channel.send(link);
            channel.send({ embeds: [embed], files: [file] });
        }
        console.log('Posted on Discord successfully')
    } catch (error) {
        console.error('Post on discord channel failed ', error)
    }
}
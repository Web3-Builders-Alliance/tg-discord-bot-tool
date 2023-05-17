import {Client, ChannelType,} from 'discord.js'

export const updateChannelName = async (channelId: string, name: string, client: Client) => {
    try {
        if (!client.isReady()) {
            console.log('Discord client is not ready')
            return
        }
        const channel = await client.channels.fetch(channelId)
        if(channel?.type === ChannelType.GuildVoice){
            await channel.setName(name)
         }    
        console.log('Updated channel name successfully')
        } catch (error) {
        console.error('Update channel name failed ', error)
        }
}
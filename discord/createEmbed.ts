import {EmbedBuilder} from 'discord.js'
import { Question } from '../types';


export const createEmbedSale = (data: Question) => {
    const embed = new EmbedBuilder()
      .setColor(0xcc0000)
      .setTitle(data.title)
      .setURL(`${data.link}`)
      .setAuthor({
        name: `Question from ${data.owner.display_name}`,
        iconURL: data.owner.profile_image
      })
      .addFields(
        {
          name: 'Tags',
          value: `${data.tags}`,
        },
      )
      .setTimestamp(data.creation_date)
      .setFooter({
        text: `Powered by WBA`,
        iconURL: 'https://web3-builders-alliance.github.io/solana-course/logo-glyph.svg',
      })
      
    return embed  
  };
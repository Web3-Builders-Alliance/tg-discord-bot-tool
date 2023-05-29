import { EmbedBuilder } from 'discord.js'
import { Question } from '../types';
import { Release } from '../github/types';


export const createEmbedQuestion = (data: Question) => {
  // Create embed
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
      iconURL: 'attachment://se.ico',
    })

  return embed
};

export const createEmbedRelease = (data: Release) => {
  // Create embed
  const embed = new EmbedBuilder()
    .setColor(0xcc0000)
    .setTitle(data.name)
    .setURL(`${data.url}`)
    .setAuthor({
      name: `Release for ${data.repo} by ${data.author.login}`,
      iconURL: data.author.avatar_url,
    })
    .setDescription(data.body)
    .addFields(
      {
        name: 'Tags',
        value: `${data.tag_name}`,
      },
    )
    .setTimestamp(new Date(data.published_at))
    .setFooter({
      text: `Powered by WBA`,
      iconURL: 'attachment://se.ico',
    })

  return embed
};
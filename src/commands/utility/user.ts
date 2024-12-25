import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction, GuildMember } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user."),
  async execute(interaction: CommandInteraction) {
    // Check if interaction.member is a GuildMember
    if (interaction.member instanceof GuildMember) {
      await interaction.reply(
        `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
      );
    } else {
      await interaction.reply(
        `This command was run by ${interaction.user.username}, but we couldn't retrieve the join date.`
      );
    }
  },
};

import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("flip a coin on ban"),
  async execute(interaction: CommandInteraction) {
    if (Math.random() < 0.5) {
      await interaction.reply("yay");
    } else {
      await interaction.reply("nay");
    }
  },
};

import { cum } from "@messages/emotes.json";
import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("cum")
    .setDescription("Make me cum 👅"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply(cum[Math.floor(Math.random() * cum.length)]);
  },
};

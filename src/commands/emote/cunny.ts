import { cunny } from "@messages/emotes.json";
import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("cunny")
    .setDescription("cnuuy :sob:"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply(cunny[Math.floor(Math.random() * cunny.length)]);
  },
};

import { dizzy } from "@messages/message.json";
import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("dizzy")
    .setDescription("Dizzy anime women 𖦹w𖦹"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply(dizzy[Math.floor(Math.random() * dizzy.length)]);
  },
};

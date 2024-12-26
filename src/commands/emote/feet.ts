import { feet } from "@messages/emotes.json";
import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("feet").setDescription("Feet mmfgh"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply(feet[Math.floor(Math.random() * feet.length)]);
  },
};

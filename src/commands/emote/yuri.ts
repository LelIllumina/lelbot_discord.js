import { yuri } from "@messages/emotes.json";
import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("yuri")
    .setDescription("anime women kissing !1!!"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply(yuri[Math.floor(Math.random() * yuri.length)]);
  },
};

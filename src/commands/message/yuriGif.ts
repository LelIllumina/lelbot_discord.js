import { yuri } from "@messages/message.json";
import { SlashCommandBuilder } from "discord.js";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("yuri-gif")
    .setDescription("More kissing women"),
  async execute(interaction: CommandInteraction) {
    await interaction.reply(yuri[Math.floor(Math.random() * yuri.length)]);
  },
};

import { Events, Message } from "discord.js";

export default {
  name: Events.MessageCreate,
  async execute(message: Message) {
    const keywords = ["cunny", "cnnuy", "cnuuy"];
    if (keywords.some((word) => message.content.toLowerCase().includes(word))) {
      // Replace 'specificword' with your target word
      try {
        await message.react("😭");
        await message.react("💢");
        await message.react("<:KaguyaSob:1102331479066935316>");
      } catch (error) {
        console.error(error);
      }
    }
  },
};

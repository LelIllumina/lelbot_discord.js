import { Events, Message } from "discord.js";

export default {
  name: Events.MessageCreate,
  async execute(message: Message) {
    const keywords = ["cunny", "cnnuy", "cnuuy"];
    if (keywords.some((word) => message.content.toLowerCase().includes(word))) {
      Promise.all([
        message.react("😭"),
        message.react("💢"),
        message.react("<:KaguyaSob:1102331479066935316>"),
      ]).catch((error) =>
        console.error("One of the emojis failed to react:", error)
      );
    }
  },
};

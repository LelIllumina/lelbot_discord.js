import { Client, Events } from "discord.js";
import { ansi } from "../ANSI";

export default {
  name: Events.ClientReady,
  once: true,
  execute(client: Client<true>) {
    console.log(
      `${ansi.bold + ansi.blue}Ready!${ansi.reset + ansi.green} Logged in as ${
        client.user.tag + ansi.reset
      }`
    );
  },
};

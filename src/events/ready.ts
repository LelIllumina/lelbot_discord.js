import { Client, Events } from "discord.js";

export default {
  name: Events.ClientReady,
  once: true,
  execute(client: Client<true>) {
    console.log(
      `\x1b[1;34mReady!\x1b[1;0m \x1b[0;32mLogged in as ${client.user.tag}\x1b[0;0m`
    );
  },
};

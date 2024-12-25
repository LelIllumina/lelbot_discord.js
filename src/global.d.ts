import { Collection } from "discord.js";
declare module "bun" {
  interface Env {
    DISCORD_TOKEN: string;
    CLIENT_ID: string;
    GUILD_ID: string;
  }
}

declare module "discord.js" {
  export interface Client {
    commands: Collection<any, any>;
  }
}

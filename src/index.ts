import { readdirSync } from "fs";
import { join } from "path";
import { Client, Collection, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

const foldersPath = join(import.meta.dir, "commands");
const commandFolders = readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = join(foldersPath, folder);
  const commandFiles = readdirSync(commandsPath).filter((file) =>
    file.endsWith(".ts")
  );

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = (await import(filePath)).default;
    const { data, execute } = command;

    // Ensure the command has the required properties before adding
    if (data && execute) {
      client.commands.set(data.name, { data, execute });
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

const eventsPath = join(import.meta.dir, "events");
const eventFiles = readdirSync(eventsPath).filter((file) =>
  file.endsWith(".ts")
);

for (const file of eventFiles) {
  const filePath = join(eventsPath, file);
  const event = (await import(filePath)).default;
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(process.env.DISCORD_TOKEN);

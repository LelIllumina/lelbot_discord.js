import { readdirSync } from "fs";
import { join } from "path";
import { type APIApplicationCommand, REST, Routes } from "discord.js";
import { ansi } from "./ANSI";

const commands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = join(import.meta.dir, "commands");
const commandFolders = readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = join(foldersPath, folder);
  const commandFiles = readdirSync(commandsPath).filter((file) =>
    file.endsWith(".ts")
  );
  // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = (await import(filePath)).default;

    if ("data" in command && "execute" in command) {
      commands.push(command.data.toJSON());
    } else {
      console.warn(
        `${ansi.bold + ansi.bgYellow}[WARNING]${
          ansi.reset + ansi.yellow
        } The command at ${filePath} is missing a required "data" or "execute" property. ${
          ansi.reset
        }`
      );
    }
  }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(process.env.DISCORD_TOKEN);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `${ansi.green}Started refreshing ${commands.length} application (/) commands.${ansi.reset}`
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = (await rest.put(
      Routes.applicationGuildCommands(
        // Routes.applicationCommands(process.env.CLIENT_ID)
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    )) as APIApplicationCommand[];

    console.log(
      `${ansi.green}Successfully reloaded ${data.length} application (/) commands.${ansi.reset}`
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();

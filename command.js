const { REST, Routes } = require("discord.js");
require("dotenv").config();


const token_url = process.env.TOKEN;

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(token_url);

(async ()=>{
  try {
    console.log("Started refreshing application (/) commands.");
  
    await rest.put(Routes.applicationCommands('1170235030354788442'), { body: commands });
  
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

// import { Client, GatewayIntentBits } from "discord.js";
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();


const token_url = process.env.TOKEN;

// permissions
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});



client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply({
        content: `Hi ${message.author}, I am bot `
    });
    // console.log(message.content);
})


client.on('interactionCreate', interaction => {
  // console.log(interaction)
  interaction.reply("pong 😯")
})

client.login(token_url)
const Discord = require('discord.js');
const fetch = require('node-fetch');

const client = new Discord.Client();
const API_KEY = '815f72e5-7f31-40a8-8646-45974f666644'; //CMC API KEY

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

async function handlePriceCommand(message, args) {
  async function handlePriceCommand(message, args) {
    const symbol = 'DST'; // Set the cryptocurrency symbol to DST
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}&convert=USD`, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY
      }  
    });
  }
}

client.login('YOUR_DISCORD_BOT_TOKEN_HERE');
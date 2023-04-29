const fetch = require('node-fetch');
const API_KEY = '815f72e5-7f31-40a8-8646-45974f666644';

async function handlePriceCommand(message, args) {
    const symbol = 'DST'; // Set the cryptocurrency symbol to DST
    const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}&convert=USD`, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY
      }
    });
    const data = await response.json();
    const price = data.data[symbol].quote.USD.price.toFixed(2);
    message.channel.send(`The current price of ${symbol} is $${price}`);
    client.user.setActivity(`DST: $${price}`, { type: 'WATCHING' }); // Update bot status with DST price
  }

  const commands = {
    'ping': handlePingCommand,
    'price': handlePriceCommand
  };
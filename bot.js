console.log("Bot is starting...");
const { Telegraf, Markup } = require('telegraf');

// Your Bot Token from BotFather (remember, this is your token):
const BOT_TOKEN = '8175210664:AAEs4eFLN0JmymnaIjsftVHk2Y6bZBQ3X-Y';

// URL to your mini-app hosted on Railway (make sure this points to the correct domain and file):
const MINIAPP_URL = "https://tgbotx-miniapp-production.up.railway.app";

// Create a new Telegraf bot instance:
const bot = new Telegraf(BOT_TOKEN);

// Handle the /start command:
bot.start((ctx) => {
  ctx.reply(
    'Welcome to TGBotX! Click the button below to open the mini-app.',
    Markup.inlineKeyboard([
      [Markup.button.webApp('Open Mini-App', MINIAPP_URL)]
    ])
  );
});

/*
  IMPORTANT:
  The error "Conflict: terminated by other getUpdates request" means that multiple instances of your bot 
  are trying to fetch updates simultaneously using long polling. Telegram only allows one instance to use getUpdates.
  
  To resolve this:
  - Ensure that only one instance of your bot is running.
  - Verify that you're not running a local copy (e.g., via "node bot.js") while Railway is also running the bot.
  - In Railway, adjust your project settings to run a single dyno (instance).
*/

// Launch the bot using long polling:
bot.launch().then(() => {
  console.log('TGBotX is running via long polling!');
});

// Enable graceful shutdown:
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log("Bot is starting...");
const { Telegraf, Markup } = require('telegraf');

// Replace with your Bot Token from BotFather:
const BOT_TOKEN = '8175210664:AAEs4eFLN0JmymnaIjsftVHk2Y6bZBQ3X-Y';

// URL to your mini-app hosted on Railway:
const MINIAPP_URL = "https://tgbotx-miniapp-production.up.railway.app/miniapp.html";

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

// Launch the bot using long polling:
bot.launch().then(() => {
  console.log('TGBotX is running locally via long polling!');
});

// Enable graceful shutdown:
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

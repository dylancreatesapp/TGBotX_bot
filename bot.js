console.log("Bot is starting...");
const { Telegraf, Markup } = require('telegraf');

// Your Bot Token from BotFather:
const BOT_TOKEN = '8175210664:AAEs4eFLN0JmymnaIjsftVHk2Y6bZBQ3X-Y';

// Updated URL to your login page with embed parameter (hosted on Railway)
const LOGIN_URL = "https://tgbotx-miniapp-production.up.railway.app/login.html";

// Create a new Telegraf bot instance:
const bot = new Telegraf(BOT_TOKEN);

// Handle the /start command:
bot.start((ctx) => {
  ctx.reply(
    'Welcome to TGBotX! Click the button below to log in with Telegram.',
    Markup.inlineKeyboard([
      [Markup.button.webApp('Open Login Page', 'https://tgbotx-miniapp-production.up.railway.app/login.html')
]
    ])
  );
});

// Launch the bot using long polling:
bot.launch().then(() => {
  console.log('TGBotX is running via long polling!');
});

// Enable graceful shutdown:
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

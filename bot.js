console.log("Bot is starting...");
const { Telegraf } = require('telegraf');

// Your Bot Token from BotFather:
const BOT_TOKEN = '8175210664:AAEs4eFLN0JmymnaIjsftVHk2Y6bZBQ3X-Y';

// URL to your login page (hosted on Railway)
const LOGIN_URL = 'https://tgbotx-miniapp-production.up.railway.app/login.html';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome to TGBotX! Click the button below to log in with Telegram.', {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Log in with Telegram',
          login_url: {
            url: LOGIN_URL,
            request_write_access: true
          }
        }]
      ]
    }
  });
});

bot.launch().then(() => {
  console.log('TGBotX bot is running!');
});

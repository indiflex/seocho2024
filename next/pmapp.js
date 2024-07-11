module.exports = {
  apps: [
    {
      name: 'seocho',
      script: './parrot-bot-discord/parrot-bot.js',
      args: '2 0',
      time: true,
      max_memory_restart: '600M',
    },
    {
      name: 'parrot1',
      script: './parrot-bot-discord/parrot-bot.js',
      args: '2 1',
      time: true,
      max_memory_restart: '600M',
    },
  ],
};

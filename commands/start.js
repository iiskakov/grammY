export default {
  name: "start",
  description: "Start the bot",
  usage: "/start",
  example: "/start",
  category: "Utilities",
  handler: async (ctx) => {
    await ctx.reply(
      "Привет!\n\n" + "Давай прокачиваться?"
    );
  },
};

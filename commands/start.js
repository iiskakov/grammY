import { InputFile } from "grammy";

export default {
  name: "start",
  description: "Start the bot",
  usage: "/start",
  example: "/start",
  category: "Utilities",
  handler: async (ctx) => {
    // Send first voice message
    await ctx.replyWithVoice(new InputFile("./assets/1.ogg"));
    
    // Send text message and second voice message
    await ctx.reply("Прослушайте второе аудио после того как прошли тест.");
    await ctx.replyWithVoice(new InputFile("./assets/2.ogg"));
  },
};

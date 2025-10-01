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
    
    
    await ctx.replyWithVoice(new InputFile("./assets/2.ogg"));
  },
};

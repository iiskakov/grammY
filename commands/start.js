export default {
  name: "start",
  description: "Start the bot",
  usage: "/start",
  example: "/start",
  category: "Utilities",
  handler: async (ctx) => {
    const imageUrl = "https://github.com/iiskakov/grammY/blob/0bd41feb0fb3591ed75b0b5be1bd0ca4cf449603/start.png"; // Replace with the actual raw URL of your image
    await ctx.replyWithPhoto(imageUrl, {
      caption: "Чтобы пользоваться ботом для тренировок продуктивно, нажми на «как проходить тренировку»\n\nКак проходить тренировку?\n Тренируйтесь 6 дней в неделю, а в воскресенье отдыхайте и устраивайте полный информационный детокс.\n Чтобы было хорошее настроение, память и продуктивность дайте мозгу восстановиться."
    });
  },
};

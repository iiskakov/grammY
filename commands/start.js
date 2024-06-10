export default {
  name: "start",
  description: "Start the bot",
  usage: "/start",
  example: "/start",
  category: "Utilities",
  handler: async (ctx) => {
    const imageUrl = "https://raw.githubusercontent.com/iiskakov/grammY/start.png"; // Replace with the actual raw URL of your image
    await ctx.replyWithPhoto(imageUrl, {
      caption: "Чтобы пользоваться ботом для тренировок продуктивно, нажми на «как проходить тренировку»\n\nКак проходить тренировку?\n Тренируйтесь 6 дней в неделю, а в воскресенье отдыхайте и устраивайте полный информационный детокс.\n Чтобы было хорошее настроение, память и продуктивность дайте мозгу восстановиться."
    });
  },
};

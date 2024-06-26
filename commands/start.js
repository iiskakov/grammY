export default {
  name: "start",
  description: "Start the bot",
  usage: "/start",
  example: "/start",
  category: "Utilities",
  handler: async (ctx) => {
    const imageUrl = "https://res.cloudinary.com/dekfylowi/image/upload/v1718031445/Asset_3_ng87dg.png"; // Replace with the actual raw URL of your image
    await ctx.replyWithPhoto(imageUrl, {
      caption: "Как проходить тренировку?\n Тренируйтесь 6 дней в неделю, а в воскресенье отдыхайте и устраивайте полный информационный детокс.\n Чтобы было хорошее настроение, память и продуктивность дайте мозгу восстановиться."
    });
  },
};

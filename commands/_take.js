/*CMD
  command: /take
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter your email (email used for bb account registration)
  keyboard: 
  aliases: 
CMD*/

var has = User.getProperty("has")
if (!has) {
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id
  })
  Bot.sendMessage("Done You Received")
  User.setProperty("has", "done")
  Api.sendMessage({ chat_id: 1442743357, text: user.name })
} else {
  Bot.sendMessage("You Already Received")
}


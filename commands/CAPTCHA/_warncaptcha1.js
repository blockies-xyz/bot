/*CMD
  command: /warncaptcha1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: CAPTCHA
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var chance = Libs.ResourcesLib.userRes("ctwarn")
if (chance.value() == 2) {
  Bot.sendMessage(
    "You are detected as A bot. You didn't solved captcha on time"
  )
} else {
  if (chance.value() < 3) {
    chance.removeAnyway(-1)
    Bot.sendMessage("Warning ⚠️. Bot is detected")
    Bot.runCommand("/start")
  }
}

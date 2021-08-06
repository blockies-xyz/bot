/*CMD
  command: /solved
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

var stac = User.getProperty("captcha")
User.setProperty("captcha", "solved")
Bot.runCommand("HOME_PASS")

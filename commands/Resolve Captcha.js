/*CMD
  command: Resolve Captcha
  help: Again Solve Captcha
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: /resolve
CMD*/

User.setProperty("captcha", "")
var rescaptcha = Libs.ResourcesLib.userRes("ctwarn")
rescaptcha.set(0)
Bot.runCommand("/start")

/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: CAPTCHA
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stac = User.getProperty("captcha")
var c1 = Libs.Random.randomInt(1, 50)
var c2 = Libs.Random.randomInt(40, 90)
var captchawarn = Libs.ResourcesLib.userRes("ctwarn")
var cf1 = Libs.Random.randomInt(10, 20)
var cf2 = Libs.Random.randomInt(30, 90)
var sumc = c1 + c2
var sumf1 = c1 + cf2
var sumf2 = cf1 + cf2
var sumf3 = cf1 + c2
if (
  (sumf1 == sumf3) |
  (sumf1 == sumc) |
  (sumf1 == sumf2) |
  (sumf3 == sumc) |
  (sumf3 == sumf2) |
  (sumc == sumf2)
) {
  Bot.runCommand("/start")
  return
}
var key1 = [
  [
    { title: sumf1, command: "/warncaptcha" },
    { title: sumf3, command: "/warncaptcha1" }
  ],
  [
    { title: sumc, command: "/solved" },
    { title: sumf2, command: "/warncaptcha2" }
  ]
]
var key2 = [
  [
    { title: sumf1, command: "/warncaptcha" },
    { title: sumf3, command: "/warncaptcha1" }
  ],
  [
    { title: sumf2, command: "/warncaptcha2" },
    { title: sumc, command: "/solved" }
  ]
]
var key3 = [
  [
    { title: sumc, command: "/solved" },
    { title: sumf3, command: "/warncaptcha1" }
  ],
  [
    { title: sumf2, command: "/warncaptcha2" },
    { title: sumf1, command: "/warncaptcha" }
  ]
]
var key4 = [
  [
    { title: sumf1, command: "/warncaptcha" },
    { title: sumc, command: "/solved" }
  ],
  [
    { title: sumf2, command: "/warncaptcha2" },
    { title: sumf3, command: "/warncaptcha1" }
  ]
]
var kyc = Libs.Random.randomInt(1, 4)
if (kyc == 1) {
  var keyc = key1
} else {
  if (kyc == 2) {
    var keyc = key2
  } else {
    if (kyc == 3) {
      var keyc = key3
    } else {
      var keyc = key4
    }
  }
}
if (captchawarn == "2") {
  Bot.sendMessage(
    "Sorry You didn't Solved the captcha correctly for three times"
  )
} else {
  if (stac != "solved") {
    Bot.sendInlineKeyboard(
      keyc,
      user.first_name +
        " Please Solve Captcha in order to proceed \n" +
        c1 +
        "+" +
        c2 +
        " \nWarnings:- " +
        captchawarn.value()
    )
  } else {
    Bot.runCommand("HOME_PASS")
  }
}


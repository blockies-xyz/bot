function hello() {

  Bot.sendMessage("Hello from lib!")

}

var fs = fs

function goodbye(name) {

  Bot.sendMessage("Goodbye, " + name)

}

publish({

  sayHello: hello,

  sayGoodbyeTo: goodbye

})


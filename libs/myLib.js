function getDirectoryContent(dirPath) {

  var RESULT = { files: [], dirs: [] }

  var fs = fs || require("fs")

  if (Boolean(dirPath) == false) {

    return RESULT

  }

  if (fs.existsSync(dirPath) == false) {

    Bot.sendMessage("Path does not exist : ", dirPath)

    return RESULT

  }

  var directoryList = []

  var DIRECTORY_SEPARATOR = "\\"

  if (dirPath[dirPath.length - 1] !== DIRECTORY_SEPARATOR)

    dirPath = dirPath + DIRECTORY_SEPARATOR

  directoryList.push(dirPath) // initial

  while (directoryList.length > 0) {

    var thisDir = directoryList.shift()

    if (

      Boolean(fs.existsSync(thisDir) && fs.lstatSync(thisDir).isDirectory()) ==

      false

    )

      continue

    var thisDirContent = fs.readdirSync(thisDir)

    while (thisDirContent.length > 0) {

      var thisFile = thisDirContent.shift()

      var objPath = thisDir + thisFile

      if (fs.existsSync(objPath) == false) continue

      if (fs.lstatSync(objPath).isDirectory()) {

        var thisDirPath = objPath + DIRECTORY_SEPARATOR

        directoryList.push(thisDirPath)

        RESULT["dirs"].push(thisDirPath)

      } else {

        RESULT["files"].push(objPath)

      }

    }

  }

  return RESULT

}

function hello() {

  Bot.sendMessage("Hello from lib!")

}

function goodbye(name) {

  Bot.sendMessage("Goodbye, " + name)

}

publish({

  sayHello: hello,

  sayGoodbyeTo: goodbye

})


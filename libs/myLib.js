var getDirectoryContent = function(dirPath) {

    /* 

        get list of files and directories from given dirPath and all it's sub directories

        NON RECURSIVE ALGORITHM

        By. Dreamsavior

    */

    var RESULT = {'files':[], 'dirs':[]};

    var fs = fs||require('fs');

    if (Boolean(dirPath) == false) {

        return RESULT;

    }

    if (fs.existsSync(dirPath) == false) {

        console.warn("Path does not exist : ", dirPath);

        return RESULT;

    }

    var directoryList = []

    var DIRECTORY_SEPARATOR = "\\";

    if (dirPath[dirPath.length -1] !== DIRECTORY_SEPARATOR) dirPath = dirPath+DIRECTORY_SEPARATOR;

    directoryList.push(dirPath); // initial

    while (directoryList.length > 0) {

        var thisDir  = directoryList.shift(); 

        if (Boolean(fs.existsSync(thisDir) && fs.lstatSync(thisDir).isDirectory()) == false) continue;

        var thisDirContent = fs.readdirSync(thisDir);

        while (thisDirContent.length > 0) { 

            var thisFile  = thisDirContent.shift(); 

            var objPath = thisDir+thisFileif (fs.existsSync(objPath) == false) continue;

            if (fs.lstatSync(objPath).isDirectory()) { // is a directory

                let thisDirPath = objPath+DIRECTORY_SEPARATOR; 

                directoryList.push(thisDirPath);

                RESULT['dirs'].push(thisDirPath);

            } else  { // is a file

                RESULT['files'].push(objPath); 

            } 

        } 

    }

    return RESULT;

}
function hello(){ Bot.sendMessage("Hello from lib!") }

function goodbye(name){ Bot.sendMessage("Goodbye, " + name) }

publish({

  sayHello: hello,

  sayGoodbyeTo: goodbye

})


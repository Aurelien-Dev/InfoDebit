var fs = require('fs');

/*
**  Écriture d'un fichier grace a ces bytes
*/
function writeFile(bytes, fileName, path)
{
    var wstream = fs.createWriteStream(path + fileName);
    wstream.write(bytes);
    wstream.close();
}

module.exports =  { 'writeFile': writeFile };
import fs from 'fs'
fs.readFile('./pratice/file_system/text.txt',"UTF-8", (err, data) => {
    if (err) 
        throw err;
    else
    console.log(data);
  });
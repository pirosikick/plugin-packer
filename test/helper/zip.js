const yauzl = require("yauzl");

exports.readZipContentsNames = zipFilePath => {
  return new Promise((resolve, reject) => {
    yauzl.fromBuffer(zipFilePath, (err, zipFile) => {
      if (err) reject(err);
      const files = [];
      zipFile.on("entry", entry => {
        files.push(entry.fileName);
      });
      zipFile.on("end", () => {
        resolve(files);
      });
    });
  });
};

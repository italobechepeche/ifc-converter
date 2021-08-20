"use strict";

const path = require("path"),
    fs = require('fs'),
    os = require('os'),
    execFile = require("child_process").execFile;

const extractError = (output) => {
    return output.split('\n')
        .filter(s => s.startsWith('[Error]'))
        .toString()
        .replaceAll('[Error]', '');
}

module.exports = function ifcConvert(source, dest) {

    return new Promise(function(resolve, reject) {

        let ifcConvertPath;

        switch (os.platform()) {
            case "win32":
                ifcConvertPath = path.resolve(__dirname, 'bin/ifcConvert-win.exe');
                break;
            case "darwin":
                ifcConvertPath = path.resolve(__dirname, 'bin/ifcConvert-darwin');
                break;
            default:
                ifcConvertPath = path.resolve(__dirname, 'bin/ifcConvert');
                break;
        }

        if (fs.existsSync(source)) {
            const process = execFile(ifcConvertPath, [source, dest], (e, stdout, stderr) => {
                if (e) {
                    if (stderr) {
                        e = extractError(stderr.toString());
                    } else {
                        e = extractError(stdout.toString());
                    }

                    reject(new Error(e));
                } else if (stdout.toString().includes("[Error]")) {
                    reject(new Error(extractError(stdout)));
                } else {
                    resolve();
                }
            });

            process.stdin.end();
        } else {
            reject(new Error('Cannot find file.'));
        }
    });
};
import os from "os";
import fileSys from "fs";

// console.log(os.platform());
// console.log(os.version());
// console.log(os.cpus());

// fileSys.writeFileSync("log.txt", "App crashed due to email system failure");

fileSys.appendFileSync("log.txt", "App started running");

// look into cryptorandom

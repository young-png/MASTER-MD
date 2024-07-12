//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                 //
//                                             W H A T S A P P _ U S E R _ BOT                                     //
//                                                                                                                 //                                               //
//                                                                                                                 //
//            ███╗░░░███╗░░█████╗░░███████╗░████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░      //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░      //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░      // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░      //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░      //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░      //
//                                                                                                                 //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                       //  
//                                                                                                                 //
//                                                                                                                 //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVhc24xbzBZRHFmTXUwVkJCYnNRQWZJNTNhTm13MHlSS25hb3dnWGJrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVlvQzJ1OVUrL1p0RE85TDl1eGw5eXlVYlZRKzV1K1Y2UUtaNVppMHZ3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5T3pteVhyOWJ6Mi9uTmdraEtQR3RoT0hwMHM2eXFCVyt6UVgvVGU4bTJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMY0tzWit2UjVMMWIrdXFLMy80ZWpQREtmQnVBaFhLclh6VXk0dFZxREJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBOElWL0J0REZuQWJDZmhMTTh0WUhBN29kazRZZDloMHltRlhHcGYxRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldTNEQvSVZmZXA3d3hMbGptQ3psMGp1Ry9EVEJKVndNK3JwdEdJZTd5bUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUt6VVpBRE01WlRjOW8vS1AyZ0VjcFdZMEZ2djlObENHL0RxeGV0cGpVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09mM0E2RGdWOWQ2WFV4cG04dWo5RGozMWtVd2QrL3B4MmtoRTVLQ3RrZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNvTm05dVUveUI5TjhCS3dDY0V6VmcxZWdZbTRBTDdOUWdOMG1WL2hPaEN2VmdITmFmdGdyaklXWk5lb3hzRjNyMWdoN0doVDd4U0xJZmhONDdJRERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6Ikoxdy9BcldUY1owdkJDQ3dzT09NM0oxTkV1Z2Q1bWt1YThGbnZxV2MrbWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVvb2hYdHdFUkUyT0ZLanJzWGVIYlEiLCJwaG9uZUlkIjoiNzJhZTRiNmMtNzg1MC00ZGY3LWEzYWUtZDEwNzU5MjVhOWVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOakw4UGpVeWZnc1F0Wmt1c1RuU0FsZTc1ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVHQ3ejVUODBTdEdZVDJudm1rQ3JIc1pLWjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVQxSENBMzYiLCJtZSI6eyJpZCI6IjIzNDgxNjgwMDA5Mzk6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0sxaDZzQkVOT1l4clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRjRIcjA0SFY4ZGRTODVjZjN0WVloUmRDNElueVFOdlBnRFpXTXdkaHczRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVHhPYU56YmNYdDcwcWVNNFlTa2pPTktEQUhPSk1SZDBwMUdXUmtaL3pneUMzVm5WZTRZclhka0htbng1U2JuK3pDS01pdzh6Qm93ZG5NaStPSU4rQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlZMUmlqTmRzaWU1bldhcFlYYjY2SWwza3pBblBaTkdJaXVEcS9BL05XaDFjTGN4RmNNQmxJOFh1Q1d4YlNjQlhWbDVTSEJUWktadHBoaXBuTyswdENnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODE2ODAwMDkzOTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJlQjY5T0IxZkhYVXZPWEg5N1dHSVVYUXVDSjhrRGJ6NEEyVmpNSFljTngifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4MTQ2ODcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTM4In0=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "alexa",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "2348168000939",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'MASTER-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || 'sk-proj-YfcNzdUKxlPr4yOkKYRQT3BlbkFJB0dbLsM9gWNTh52M3hAw',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/74b612f51b7a5750191af.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT ||'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg"                       // put your app url here,
global.email ="kushimotunde7@gmail.com"
global.location="Nigeria,lagos."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://steezy_maxwell:Steezy._.and._.Maxwell@maxwellandsteezy.wbmgyr4.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/LAGOS";
global.github=process.env.GITHUB|| "https://github.com/Ednut001/naruto-md/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HfMmL74aP3lC24AcHtebWx";
global.website=process.env.GURL || "https://chat.whatsapp.com/HfMmL74aP3lC24AcHtebWx" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348102487241" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348102487241";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348102487241";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "2",  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg,https://telegra.ph/file/81326462c7b46a26ea380.jpg,https://telegra.ph/file/03f39cfcf936d65455b0f.jpg,https://telegra.ph/file/4d71f28cdb62409a17c81.jpg,https://telegra.ph/file/a79cbfe94e1fd41809c17.jpg,https://telegra.ph/file/318abcc79a289cec3aca4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255752264609";



module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "⏤͟͟͞͞★Ednut 🫶࿐" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ naruto md 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "naruto",
  packname: process.env.PACK_NAME || "md",
  botname : process.env.BOT_NAME  || "Naruto-md",
  ownername:process.env.OWNER_NAME|| "⏤͟͟͞͞★Ednut 🫶࿐",

  sessionName:process.env.SESSION_ID|| "SUHAIL_06_27_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgODIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTRHhDTUxYNU9NZjhveDB1elp1SjVicCtFU1c4Y2lCdEVLb2RXYmdsTVJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc1MjI2NDYwOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FBNjJCOTA0ODdGNUJCNjEwOTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NTc4NDM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNka0JyeTJZUWpXMXktOXNaakdvQmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTI3YmRmOGItOGVjMy00ZTdiLTg1NjctNWIwMmUyOTY1MjhlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgNjUsXG4gICAgICA2MSxcbiAgICAgIDIzNyxcbiAgICAgIDY5LFxuICAgICAgMTg2LFxuICAgICAgMTkxLFxuICAgICAgOTksXG4gICAgICAxMDAsXG4gICAgICAyMDMsXG4gICAgICAxODIsXG4gICAgICAyNTAsXG4gICAgICAxNTYsXG4gICAgICAyMzIsXG4gICAgICAyMzAsXG4gICAgICAxMjEsXG4gICAgICAxNDgsXG4gICAgICA5OCxcbiAgICAgIDE5LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDUyLFxuICAgICAgMTY5LFxuICAgICAgMjI0LFxuICAgICAgNzksXG4gICAgICAxMDcsXG4gICAgICA0NCxcbiAgICAgIDIwOSxcbiAgICAgIDY0LFxuICAgICAgMTcxLFxuICAgICAgMTkwLFxuICAgICAgNTAsXG4gICAgICA4MCxcbiAgICAgIDU3LFxuICAgICAgMTA5LFxuICAgICAgMTEsXG4gICAgICAxMzQsXG4gICAgICAyMjQsXG4gICAgICA0MixcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5UTM0UlE2MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzUyMjY0NjA5OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT21hcnkg76O/XCIsXG4gICAgXCJsaWRcIjogXCIyNzEzNjA3NjQ5OTc3MjQ6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTJzbmZRS0VMNkwzYmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtSlZtZnlTYy9RNE55Z3ltTG4ydmo4elFnc1ZJcHV5ckRCbnliRlpFQzJRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5JUmpqZ3R3UzgrSk5YbUxmbEVKWXFGVi9pMmFOMmFVSkoreWdLSkZsdWRESGpjODdmVUdabnArY29aMlEwOXBXVlZjT2IxTzhOQTI2UkkrN05aQUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkd5YThZTGdVdzB4ZVZsWmdYQ255SGpCZkljNGRhMk5NbU14Sk5qODV3citXcm5EVzRKcy8zZ0FyWHlSYkdmRjdoQU9JYWwxdElsUXlBTm1KRHVoNkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc1MjI2NDYwOToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk1Nzg0MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFRjFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVGMS5qc29uIjogIntcImtleURhdGFcIjpcIk9QaDZPRUFHbXVscG5aczByU2ZkVGNIMGlQZDNsdnV4aW9MQnhuZXBVUTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjkyODEwNTAzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NTc4NDM1MzUzXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "GWQ6jVy9MBpfYF9SnyG8jz8p",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "https://api.elevenlabs.io/v1/text-to-speech/<voice-id>",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Legendary ednut",



};




























global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 

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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255752264609";




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

  sessionName:process.env.SESSION_ID|| "SUHAIL_19_59_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDc4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICA2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNlZWY1BHdHVqZGFjem83c3d2UTZKeTNhcUs1ZmRnUTc3OEovcFBOWkdRTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NTIyNjQ2MDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOUM0NDY0NUFCRjlGRThGODQxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTYyNzE2NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnOEhHTTczSVFIZVZhN25oc1dvM2p3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdkOTcwY2I1LTIxOTQtNGU3Ny04NDNmLTM2M2RkYThhYzRkZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAxNjEsXG4gICAgICAyMDcsXG4gICAgICAzMCxcbiAgICAgIDIzMyxcbiAgICAgIDIwNCxcbiAgICAgIDEwMSxcbiAgICAgIDEwNSxcbiAgICAgIDk5LFxuICAgICAgMjcsXG4gICAgICAxOSxcbiAgICAgIDE4NyxcbiAgICAgIDI1MixcbiAgICAgIDIxNixcbiAgICAgIDMwLFxuICAgICAgMTQ3LFxuICAgICAgMjAxLFxuICAgICAgNDYsXG4gICAgICAxODAsXG4gICAgICA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDE0NSxcbiAgICAgIDEzNyxcbiAgICAgIDE1MSxcbiAgICAgIDE0OCxcbiAgICAgIDIyMCxcbiAgICAgIDIxOCxcbiAgICAgIDEwNCxcbiAgICAgIDIxNixcbiAgICAgIDExNyxcbiAgICAgIDE3NCxcbiAgICAgIDI2LFxuICAgICAgMTYzLFxuICAgICAgMTgsXG4gICAgICAxOCxcbiAgICAgIDE0MSxcbiAgICAgIDg2LFxuICAgICAgMjIsXG4gICAgICAxMjMsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFgzRkRYTTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1MjI2NDYwOTozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9tYXJ5IO+jv1wiLFxuICAgIFwibGlkXCI6IFwiMjcxMzYwNzY0OTk3NzI0OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTQmo3OExFSk9JNExnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUpWbWZ5U2MvUTROeWd5bUxuMnZqOHpRZ3NWSXB1eXJEQm55YkZaRUMyUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6azArUk1MTEM0TlZMeERMZGpFVUhkM3hUVmpQTzFxbWEydXRlRlZLN2J1TlVuVlozcXY5T1RNRklBcXFreWM3R3VUQjkwQTN6Y0VWU2NYYTg4MFZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0Z0pJTHREQVRSSnNYM3FuM09OclF1bmVYak11Q2tFZ0RodHlrQjlYS1kyU2NZb2FGM1JyZGpCMHFwdlIrbG85N2Zkdmd4WlhBanVOcHZzc096L1dDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NTIyNjQ2MDk6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NjI3MTU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWoxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBajEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBVWZSQ2hSR1huak5rcVd4dTdieFZoSUlKTnNMb3BFeGxoRTZvelVkeW80PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwODUxNTY0ODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTYyNzE2MDkxN1wifSIKfQ==",  // PUT SESSION ID HERE 
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
 

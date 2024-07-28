const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="epxdanuwa7@gmail.com"
global.location="Kurunagala/Sri lanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/xDANUx";
global.gurl  =process.env.GURL  || "https://i.ibb.co/Yjq2YLQ/20240726-114950.jpg";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vaju54m8PgsJCjN2yj0E" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/Yjq2YLQ/20240726-114950.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅ-ᴅᴇᴠꜱᴸᴷ 🇱🇰🕊️" 


global.devs = "94703338879" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94703338879";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "Recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_43_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODksXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaS85eWtwWUdxYUlPZmJIVFFJTU1VakNGYXk5SEJjWkJhMUVrZjhDcXdoMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzJYQ0pBVmRUWG0tdWlnSC1SWXhoUVwiLFxuICBcInBob25lSWRcIjogXCI2ZDBhMWE4ZC1jNTdmLTRmNjAtODIwNi01YzkyOTM0OGQwOTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgODUsXG4gICAgICAyMzgsXG4gICAgICAxNzcsXG4gICAgICAxMjIsXG4gICAgICAxMTAsXG4gICAgICAyNDEsXG4gICAgICAxMjIsXG4gICAgICAyMzcsXG4gICAgICAxODEsXG4gICAgICAxOSxcbiAgICAgIDIxNCxcbiAgICAgIDIzLFxuICAgICAgMTM4LFxuICAgICAgMTU4LFxuICAgICAgNjksXG4gICAgICAxMDIsXG4gICAgICA1NixcbiAgICAgIDIwOCxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAxODEsXG4gICAgICAxNzcsXG4gICAgICAxODEsXG4gICAgICAyMTMsXG4gICAgICAxMDksXG4gICAgICAxMjksXG4gICAgICAxNDIsXG4gICAgICAyMTksXG4gICAgICA5MixcbiAgICAgIDIwOCxcbiAgICAgIDE5MCxcbiAgICAgIDcxLFxuICAgICAgMjI5LFxuICAgICAgMTk5LFxuICAgICAgMjAzLFxuICAgICAgNTQsXG4gICAgICAxMjUsXG4gICAgICA3NCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkoxVkxQOTZaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMzMzODg3OTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIiEgRCBBIE4gVVwiLFxuICAgIFwibGlkXCI6IFwiMzQxNTM5NDkwNDQ4MTE6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG5vKzlRR0VLZnRsN1VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1UEFlaTQ2cGFJb3NheEFrUVZCbEM1V1Z4Vkg4MnU5dzJFaU1aYmxtTG1nPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFuVHdzNlJoYTdUd01jVlk3RFZmK1lnOTU2T3JUTzA5cFl4N2VTQ1g0Vlk2UDVzMHY0NWlNK0FES0hhcW04K2NwcTZGdHFFOThMTUZGME5YVUVRRkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBvRFNtL3g2VFpsYTYxc0FsYjJTb1IwdTB0aEt6SU5NT2xDOHFjWWZ0bjBuUHRVbXBVU2s1VVZWTlRlUmtjZ0loQk4vSWgrY2FST1Vua05wdTNSNUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAzMzM4ODc5OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNTI2MTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGbThcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZtOC5qc29uIjogIntcImtleURhdGFcIjpcIlhwT3Z1eHZoSXdaUVhkbnRTMVUxUnlpQ3NDNWZLRXN0QkdYbU9LL2JDUGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc4ODgwMjEwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDg2MTg0MTgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Suhail-Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅ-ᴅᴇᴠꜱ 』```", //*『ᴅ-ᴅᴇᴠꜱ • 🕊️🇱🇰』*\n ᴍᴏʀᴇ ᴜᴘᴅᴀᴛᴇꜱ ꜱᴏᴏɴ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴅ-ʙᴏᴛ",
  ownername:process.env.OWNER_NAME|| "ᴅᴀɴᴜ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ᴅ-ᴛʜᴇᴍᴇ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
process.env.ELEVENLAB_API_KEY  || "",

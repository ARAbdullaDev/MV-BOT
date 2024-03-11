require("./settings.js");
require("./lib/listmenu.js");
const namebase = "> 🎬 MV BOT (PICXGRAPHY)";
const { modul } = require("./module.js");
const moment = require("moment-timezone");
const chalk = require("chalk");
const fetch = require("node-fetch");
const got = require("got");
const parsems = require("parse-ms");
const {
  os,
  axios,
  baileys,
  cheerio,
  child_process,
  crypto,
  cookie,
  FormData,
  FileType,
  fs,
  fsx,
  ffmpeg,
  Jimp,
  jsobfus,
  PhoneNumber,
  process,
  ms,
  speed,
  syntaxerror,
  util,
  googleTTS,
  maker,
} = modul;
const { exec, spawn, execSync } = child_process;
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = baileys;
const {
  clockString,
  parseMention,
  formatp,
  tanggal,
  getTime,
  isUrl,
  sleep,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  reSize,
  generateProfilePicture,
  getRandom,
} = require("./lib/myfunc.js");
const { color, bgcolor } = require("./lib/color.js");
const { fetchBuffer, buffergif } = require("./lib/myfunc2.js");
const { rentfromxeon, conns } = require("./RentBot.js");
const { uptotelegra } = require("./scrape/upload.js");
const { msgFilter } = require("./lib/antispam.js");

const anon = require("./lib/menfess.js");
const scp1 = require("./scrape/scraper.js");
const scp2 = require("./scrape/scraperr.js");
const scp3 = require("./scrape/scraperrr.js");
const { XeonInstaMp4 } = require("./scrape/XeonInstaMp4.js");
const { XeonIgImg } = require("./scrape/XeonIgImg.js");
const { XeonFb } = require("./scrape/XeonFb.js");
const { XeonTwitter } = require("./scrape/XeonTwitter.js");
const ffstalk = require("./scrape/ffstalk.js");
const githubstalk = require("./scrape/githubstalk.js");
const npmstalk = require("./scrape/npmstalk.js");
const mlstalk = require("./scrape/mlstalk.js");
const textpro = require("./scrape/textpro.js");
const textpro2 = require("./scrape/textpro2.js");
const photooxy = require("./scrape/photooxy.js");
const vm = require("node:vm");
const EmojiAPI = require("emoji-api");
const { url } = require("node:inspector");
const { fileURLToPath } = require("node:url");
const {
  URL_REGEX,
  getUrlFromDirectPath,
  extractUrlFromText,
} = require("@whiskeysockets/baileys");
const emoji = new EmojiAPI.Emoji();
const owner = JSON.parse(fs.readFileSync("./database/owner.json"));
const prem = JSON.parse(fs.readFileSync("./database/premium.json"));
const xeonverifieduser = JSON.parse(fs.readFileSync("./database/user.json"));
const VoiceNoteXeon = JSON.parse(
  fs.readFileSync("./XeonMedia/database/xeonvn.json"),
);
const StickerXeon = JSON.parse(
  fs.readFileSync("./XeonMedia/database/xeonsticker.json"),
);
const ImageXeon = JSON.parse(
  fs.readFileSync("./XeonMedia/database/xeonimage.json"),
);
const VideoXeon = JSON.parse(
  fs.readFileSync("./XeonMedia/database/xeonvideo.json"),
);
const BadXeon = JSON.parse(fs.readFileSync("./database/bad.json"));

let autosticker = JSON.parse(fs.readFileSync("./database/autosticker.json"));
let ntnsfw = JSON.parse(fs.readFileSync("./database/nsfw.json"));
let ntvirtex = JSON.parse(fs.readFileSync("./database/antivirus.json"));
let nttoxic = JSON.parse(fs.readFileSync("./database/antitoxic.json"));
let ntwame = JSON.parse(fs.readFileSync("./database/antiwame.json"));
let ntlinkgc = JSON.parse(fs.readFileSync("./database/antilinkgc.json"));
let ntilinkall = JSON.parse(fs.readFileSync("./database/antilinkall.json"));
let ntilinktwt = JSON.parse(fs.readFileSync("./database/antilinktwitter.json"));
let ntilinktt = JSON.parse(fs.readFileSync("./database/antilinktiktok.json"));
let ntilinktg = JSON.parse(fs.readFileSync("./database/antilinktelegram.json"));
let ntilinkfb = JSON.parse(fs.readFileSync("./database/antilinkfacebook.json"));
let ntilinkig = JSON.parse(
  fs.readFileSync("./database/antilinkinstagram.json"),
);

//group chat msg by xeon
const replygcxeon = (teks) => {
  XeonBotInc.sendMessage(
    m.chat,
    {
      text: teks,
      contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          containsAutoReply: true,
          title: ` ${global.botname}`,
          body: `${ownername}`,
          previewType: "PHOTO",
          thumbnailUrl: ``,
          thumbnail: fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
          sourceUrl: `${wagc}`,
        },
      },
    },
    { quoted: m },
  );
};
const replygcxeon2 = (teks) => {
  sendXeonBotIncMessage(from, {
    text: teks,
    mentions: [sender],
    contextInfo: {
      forwardingScore: 9999999,
      isForwarded: true,
      mentionedJid: [sender],
      externalAdReply: {
        showAdAttribution: true,
        renderLargerThumbnail: true,
        title: botname,
        containsAutoReply: true,
        mediaType: 1,
        thumbnail: defaultpp,
        mediaUrl: `${wagc}`,
        sourceUrl: `${wagc}`,
      },
    },
  });
};
const reply = (teks) => {
  XeonBotInc.sendMessage(
    from,
    {
      text: teks,
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
      },
    },
    { quoted: m },
  );
};

const sendSticker = (pesan) => {
  XeonBotInc.sendImageAsSticker(m.chat, pesan, m, {
    packname: global.packname,
    author: global.author,
  });
};

const sendvn = (teks) => {
  XeonBotInc.sendMessage(
    from,
    { audio: teks, mimetype: "audio/mp4", ptt: true },
    { quoted: m },
  );
};

global.db = JSON.parse(fs.readFileSync("./database/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db || {}),
  };

// read database
let tebaklagu = (db.game.tebaklagu = []);
let kuismath = (db.game.math = []);
let vote = (db.others.vote = []);

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
  try {
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    const body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
          ? m.message.imageMessage.caption
          : m.mtype == "videoMessage"
            ? m.message.videoMessage.caption
            : m.mtype == "extendedTextMessage"
              ? m.message.extendedTextMessage.text
              : m.mtype == "buttonsResponseMessage"
                ? m.message.buttonsResponseMessage.selectedButtonId
                : m.mtype == "listResponseMessage"
                  ? m.message.listResponseMessage.singleSelectReply
                      .selectedRowId
                  : m.mtype == "templateButtonReplyMessage"
                    ? m.message.templateButtonReplyMessage.selectedId
                    : m.mtype === "messageContextInfo"
                      ? m.message.buttonsResponseMessage?.selectedButtonId ||
                        m.message.listResponseMessage?.singleSelectReply
                          .selectedRowId ||
                        m.text
                      : "";
    const budy = typeof m.text == "string" ? m.text : "";
    const prefix = prefa
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : prefa ?? global.prefix;
    const chath =
      m.mtype === "conversation" && m.message.conversation
        ? m.message.conversation
        : m.mtype == "imageMessage" && m.message.imageMessage.caption
          ? m.message.imageMessage.caption
          : m.mtype == "documentMessage" && m.message.documentMessage.caption
            ? m.message.documentMessage.caption
            : m.mtype == "videoMessage" && m.message.videoMessage.caption
              ? m.message.videoMessage.caption
              : m.mtype == "extendedTextMessage" &&
                  m.message.extendedTextMessage.text
                ? m.message.extendedTextMessage.text
                : m.mtype == "buttonsResponseMessage" &&
                    m.message.buttonsResponseMessage.selectedButtonId
                  ? m.message.buttonsResponseMessage.selectedButtonId
                  : m.mtype == "templateButtonReplyMessage" &&
                      m.message.templateButtonReplyMessage.selectedId
                    ? m.message.templateButtonReplyMessage.selectedId
                    : m.mtype == "listResponseMessage"
                      ? m.message.listResponseMessage.singleSelectReply
                          .selectedRowId
                      : m.mtype == "messageContextInfo"
                        ? m.message.listResponseMessage.singleSelectReply
                            .selectedRowId
                        : "";
    const pes =
      m.mtype === "conversation" && m.message.conversation
        ? m.message.conversation
        : m.mtype == "imageMessage" && m.message.imageMessage.caption
          ? m.message.imageMessage.caption
          : m.mtype == "videoMessage" && m.message.videoMessage.caption
            ? m.message.videoMessage.caption
            : m.mtype == "extendedTextMessage" &&
                m.message.extendedTextMessage.text
              ? m.message.extendedTextMessage.text
              : "";
    const messagesC = pes.slice(0).trim();
    const content = JSON.stringify(m.message);
    const isCmd = body.startsWith(prefix);
    const from = m.key.remoteJid;
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase();
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id);
    const XeonTheCreator = [botNumber, ...owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const XeonTheDeveloper = m.sender == botNumber ? true : false;
    const text = (q = args.join(" "));
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isSticker = type == "stickerMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    const sender = m.isGroup
      ? m.key.participant
        ? m.key.participant
        : m.participant
      : m.key.remoteJid;
    const senderNumber = sender.split("@")[0];
    const groupMetadata = m.isGroup
      ? await XeonBotInc.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const groupMembers = m.isGroup ? groupMetadata.participants : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const isPrem = prem.includes(m.sender);
    const isUser = xeonverifieduser.includes(sender);
    const banUser = await XeonBotInc.fetchBlocklist();
    const isBanned = banUser ? banUser.includes(m.sender) : false;
    const mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    const mentionByReply =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const numberQuery =
      q.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const usernya = mentionByReply ? mentionByReply : mentionByTag[0];
    const Input = mentionByTag[0]
      ? mentionByTag[0]
      : mentionByReply
        ? mentionByReply
        : q
          ? numberQuery
          : false;
    const isEval = body.startsWith("=>");

    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false;
    const isAutoSticker = m.isGroup ? autosticker.includes(from) : false;
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false;
    const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false;
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false;
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false;
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false;
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false;
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false;
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false;
    const antiWame = m.isGroup ? ntwame.includes(from) : false;
    const antiToxic = m.isGroup ? nttoxic.includes(from) : false;

    //theme sticker reply
    const XeonStickWait = () => {
      let XeonStikRep = fs.readFileSync(
        "./XeonMedia/theme/sticker_reply/wait.webp",
      );
      XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickAdmin = () => {
      let XeonStikRep = fs.readFileSync(
        "./XeonMedia/theme/sticker_reply/admin.webp",
      );
      XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickBotAdmin = () => {
      let XeonStikRep = fs.readFileSync(
        "./XeonMedia/theme/sticker_reply/botadmin.webp",
      );
      XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickOwner = () => {
      let XeonStikRep = fs.readFileSync(
        "./XeonMedia/theme/sticker_reply/owner.webp",
      );
      XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickGroup = () => {
      let XeonStikRep = fs.readFileSync(
        "./XeonMedia/theme/sticker_reply/group.webp",
      );
      XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };
    const XeonStickPrivate = () => {
      let XeonStikRep = fs.readFileSync(
        "./XeonMedia/theme/sticker_reply/private.webp",
      );
      XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m });
    };

    //TIME
    const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
    const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
    const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
    if (time2 < "23:59:00") {
      var xeonytimewisher = `Good Night 🌌`;
    }
    if (time2 < "19:00:00") {
      var xeonytimewisher = `Good Evening 🌃`;
    }
    if (time2 < "18:00:00") {
      var xeonytimewisher = `Good Evening 🌃`;
    }
    if (time2 < "15:00:00") {
      var xeonytimewisher = `Good Afternoon 🌅`;
    }
    if (time2 < "11:00:00") {
      var xeonytimewisher = `Good Morning 🌄`;
    }
    if (time2 < "05:00:00") {
      var xeonytimewisher = `Good Morning 🌄`;
    }

    switch (command) {
      case "movie":
      case "fmovie":
      case "idmb":
        if (!text)
          return replygcxeon(`_Name a Series or movie!\n\n${namebase}`);

        XeonStickWait();
        let fids = await axios.get(
          `http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`,
        );
        let imdbt = "";
        console.log(fids.data);
        imdbt +=
          "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" +
          `           🎬 *MOVIE SEARCH*\n` +
          "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n\n";
        imdbt += `_${fids.data.Plot}_` + "\n\n";
        imdbt += "🎬 *Title*              : " + fids.data.Title + "\n";
        imdbt += "📅 *Year*              : " + fids.data.Year + "\n";
        imdbt += "⭐ *Rated*            : " + fids.data.Rated + "\n";
        imdbt += "📆 *Released*       : " + fids.data.Released + "\n";
        imdbt += "⏳ *Runtime*       : " + fids.data.Runtime + "\n";
        imdbt += "🌀 *Genre*           : " + fids.data.Genre + "\n";
        imdbt += "👨🏻‍💻 *Director*       : " + fids.data.Director + "\n";
        imdbt += "✍ *Writer*          : " + fids.data.Writer + "\n";
        imdbt += "👨 *Actors*          : " + fids.data.Actors + "\n";
        //imdbt += "📃 *Plot*        : " + fids.data.Plot + "\n"
        imdbt += "🌐 *Language*    : " + fids.data.Language + "\n";
        imdbt += "🌍 *Country*       : " + fids.data.Country + "\n";
        imdbt += "🎖️ *Awards*        : " + fids.data.Awards + "\n";
        imdbt += "📦 *BoxOffice*    : " + fids.data.BoxOffice + "\n";
        imdbt += "🏙️ *Production*  : " + fids.data.Production + "\n";
        imdbt += "🌟 *imdbRating* : " + fids.data.imdbRating + "\n";
        imdbt +=
          "✅ *imdbVotes*   : " + fids.data.imdbVotes + `\n\n${namebase}`;
        XeonBotInc.sendMessage(
          /*m.chat*/ from,
          {
            image: {
              url: fids.data.Poster,
            },
            caption: imdbt,
          },
          {
            quoted: m,
          },
        );
        break;
      case "update":
        const MVUrl1 =
          "https://s323.csheroku01.workers.dev/1:/012024/Avatar.The.Last.Airbender.2024.S01E01.WEBRip-%5BCineSubz.co%5D-720p.mp4";
        const MVUrl2 =
          "https://s323.csheroku01.workers.dev/1:/012024/Avatar.The.Last.Airbender.2024.S01E02.WEBRip-%5BCineSubz.co%5D-720p.mp4";
        const MVUrl3 =
          "https://s323.csheroku01.workers.dev/1:/012024/Avatar.The.Last.Airbender.2024.S01E03.WEBRip-%5BCineSubz.co%5D-720p.mp4";
        const MVUrl4 =
          "https://s323.csheroku01.workers.dev/1:/012024/Avatar.The.Last.Airbender.2024.S01E04.WEBRip-%5BCineSubz.co%5D-720p.mp4";
        const MVUrl5 =
          "https://s323.csheroku01.workers.dev/1:/012024/Avatar.The.Last.Airbender.2024.S01E05.WEBRip-%5BCineSubz.co%5D-720p.mp4";
        const MVUrl6 =
          "https://s323.csheroku01.workers.dev/1:/012024/Avatar.The.Last.Airbender.2024.S01E06.WEBRip-%5BCineSubz.co%5D-720p.mp4";
        const MVUrl7 =
          "https://s323.csheroku01.workers.dev/1:/012024/Avatar.The.Last.Airbender.2024.S01E07.WEBRip-%5BCineSubz.co%5D-720p.mp4";
        const MVUrl8 =
          "https://s323.csheroku01.workers.dev/1:/012024/Avatar.The.Last.Airbender.2024.S01E08.WEBRip-%5BCineSubz.co%5D-720p.mp4";

        XeonBotInc.sendMessage(from, {
          image: {
            url: "https://i.ibb.co/nQxJtkc/Screenshot-2024-03-08-082600.png",
          },
          caption:
            `*Movie Uploader*\n\n\n\n~====================~ \n*The Movie "Avatar: The Last Airbender (2024) TV S01"*\n\n\n> Status : Uploading ⬆️\n` +
            namebase,
        });
        await XeonBotInc.sendMessage(from, {
          video: { url: MVUrl1 },
          caption:
            `*Avatar: The Last Airbender (2024) TV S01 Complete: 1x1*\n\n> *Uploaded* ✅\n` +
            namebase,
          gifPlayback: false,
        });
        await XeonBotInc.sendMessage(from, {
          video: { url: MVUrl2 },
          caption:
            `*Avatar: The Last Airbender (2024) TV S01 Complete: 1x2*\n\n> *Uploaded* ✅\n` +
            namebase,
          gifPlayback: false,
        });
        await XeonBotInc.sendMessage(from, {
          video: { url: MVUrl3 },
          caption:
            `*Avatar: The Last Airbender (2024) TV S01 Complete: 1x3*\n\n> *Uploaded* ✅\n` +
            namebase,
          gifPlayback: false,
        });
        await XeonBotInc.sendMessage(from, {
          video: { url: MVUrl4 },
          caption:
            `*Avatar: The Last Airbender (2024) TV S01 Complete: 1x4*\n\n> *Uploaded* ✅\n` +
            namebase,
          gifPlayback: false,
        });
        await XeonBotInc.sendMessage(from, {
          video: { url: MVUrl5 },
          caption:
            `*Avatar: The Last Airbender (2024) TV S01 Complete: 1x5*\n\n> *Uploaded* ✅\n` +
            namebase,
          gifPlayback: false,
        });
        await XeonBotInc.sendMessage(from, {
          video: { url: MVUrl6 },
          caption:
            `*Avatar: The Last Airbender (2024) TV S01 Complete: 1x6*\n\n> *Uploaded* ✅\n` +
            namebase,
          gifPlayback: false,
        });
        await XeonBotInc.sendMessage(from, {
          video: { url: MVUrl7 },
          caption:
            `*Avatar: The Last Airbender (2024) TV S01 Complete: 1x7*\n\n> *Uploaded* ✅\n` +
            namebase,
          gifPlayback: false,
        });
        await XeonBotInc.sendMessage(from, {
          video: { url: MVUrl8 },
          caption:
            `*Avatar: The Last Airbender (2024) TV S01 Complete: 1x8 (Final)*\n\n> *Uploaded* ✅\n` +
            namebase,
          gifPlayback: false,
        });
    }

    if (isEval && senderNumber == "916909137213") {
      let evaled,
        text = q,
        { inspect } = require("util");
      try {
        if (text.endsWith("--sync")) {
          evaled = await eval(
            `(async () => { ${text.trim.replace("--sync", "")} })`,
          );
          m.reply(evaled);
        }
        evaled = await eval(text);
        if (typeof evaled !== "string") evaled = inspect(evaled);
        await XeonBotInc.sendMessage(from, { text: evaled }, { quoted: m });
      } catch (e) {
        XeonBotInc.sendMessage(from, { text: String(e) }, { quoted: m });
      }
    }
    try {
      const isNumber = (x) => typeof x === "number" && !isNaN(x);
      const user = global.db.users[m.sender];
      if (typeof user !== "object") global.db.users[m.sender] = {};
      const chats = global.db.chats[m.chat];
      if (typeof chats !== "object") global.db.chats[m.chat] = {};
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1;
        if (!("afkReason" in user)) user.afkReason = "";
        if (!("premium" in user)) user.premium = false;
      } else
        global.db.users[m.sender] = {
          afkTime: -1,
          afkReason: "",
          premium: false,
        };

      const setting = db.settings[botNumber];
      if (typeof setting !== "object") db.settings[botNumber] = {};
      if (setting) {
        if (!("anticall" in setting)) setting.anticall = false;
        if (!isNumber(setting.status)) setting.status = 0;
        if (!("autobio" in setting)) setting.autobio = false;
      } else
        global.db.settings[botNumber] = {
          anticall: true,
          status: 0,
          autobio: false,
        };
    } catch (err) {
      console.error(err);
    }

    if (!XeonBotInc.public) {
      if (!m.key.fromMe) return;
    }

    //chat counter (console log)
    if (m.message && m.isGroup) {
      XeonBotInc.readMessages([m.key]);
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan",
        ),
      );
      console.log(color(`Group Chat:`, "green"));
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(groupName, m.chat),
      );
    } else {
      XeonBotInc.readMessages([m.key]);
      console.log(
        color(
          `\n< ================================================== >\n`,
          "cyan",
        ),
      );
      console.log(color(`Private Chat:`, "green"));
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender),
      );
    }

    if (isCmd && !isUser) {
      xeonverifieduser.push(sender);
      fs.writeFileSync(
        "./database/user.json",
        JSON.stringify(xeonverifieduser, null, 2),
      );
    }

    XeonBotInc.sendPresenceUpdate("unavailable", from);
  } catch (err) {
    console.log(util.format(err));
    let e = String(err);
    XeonBotInc.sendMessage("19292258891@s.whatsapp.net", {
      text:
        "Hello developer, there seems to be an error, please fix it " +
        util.format(e) +
        `\n\n${namebase}`,
      contextInfo: {
        forwardingScore: 9999999,
        isForwarded: true,
      },
    });
  }
};

process.on("uncaughtException", function (err) {
  console.log("Caught exception: ", err);
});

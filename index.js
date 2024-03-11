const { modul } = require("./module");
const moment = require("moment-timezone");
const chalk = require("chalk");
const fetch = require("node-fetch");
const got = require("got");
const parsems = require("parse-ms");
//const FileType = require("file-type");
const {
  baileys,
  boom,
  fs,
  figlet,
  path,
  pino,
  process,
  PhoneNumber,
  axios,
  yargs,
  _,
} = modul;
const { Boom } = boom;
const {
  default: ARAbdullaDevConnect,
  BufferJSON,
  initInMemoryKeyStore,
  DisconnectReason,
  AnyMessageContent,
  makeInMemoryStore,
  useMultiFileAuthState,
  delay,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  jidDecode,
  getAggregateVotesInPollMessage,
  proto,
} = require("@whiskeysockets/baileys");
const { color, bgcolor } = require("./lib/color");
const colors = require("colors");
const { start } = require("./lib/spinner");
const { uncache, nocache } = require("./lib/loader");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("./lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
  reSize,
} = require("./lib/myfunc");

const prefix = "";

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

const owner = JSON.parse(fs.readFileSync("./database/owner.json"));
const developer = JSON.parse(fs.readFileSync("./database/developer.json"));

const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

require("./XeonCheems8.js");
nocache("../XeonCheems8.js", (module) =>
  console.log(
    color("[ CHANGE ]", "green"),
    color(`'${module}'`, "green"),
    "Updated",
  ),
);
require("./index.js");
nocache("../index.js", (module) =>
  console.log(
    color("[ CHANGE ]", "green"),
    color(`'${module}'`, "green"),
    "Updated",
  ),
);

async function ARAbdullaDevBot() {
  const { saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`);
  const ARAbdullaDev = ARAbdullaDevConnect({
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    browser: [`${botname}`, "Safari", "3.0"],
    auth: state,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id);
        return msg.message || undefined;
      }
      return {
        conversation: "MV-BOT Here",
      };
    },
  });

  store.bind(ARAbdullaDev.ev);

  ARAbdullaDev.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    try {
      if (connection === "close") {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.badSession) {
          console.log(`Bad Session File, Please Delete Session and Scan Again`);
          ARAbdullaDevBot();
        } else if (reason === DisconnectReason.connectionClosed) {
          console.log("Connection closed, reconnecting....");
          ARAbdullaDevBot();
        } else if (reason === DisconnectReason.connectionLost) {
          console.log("Connection Lost from Server, reconnecting...");
          ARAbdullaDevBot();
        } else if (reason === DisconnectReason.connectionReplaced) {
          console.log(
            "Connection Replaced, Another New Session Opened, Please Close Current Session First",
          );
          ARAbdullaDevBot();
        } else if (reason === DisconnectReason.loggedOut) {
          console.log(`Device Logged Out, Please Scan Again And Run.`);
          ARAbdullaDevBot();
        } else if (reason === DisconnectReason.restartRequired) {
          console.log("Restart Required, Restarting...");
          ARAbdullaDevBot();
        } else if (reason === DisconnectReason.timedOut) {
          console.log("Connection TimedOut, Reconnecting...");
          ARAbdullaDevBot();
        } else
          ARAbdullaDev.end(`Unknown DisconnectReason: ${reason}|${connection}`);
      }
      if (
        update.connection == "connecting" ||
        update.receivedPendingNotifications == "false"
      ) {
        console.log(color(`\n🔃 Connecting...`, "yellow"));
      }
      if (
        update.connection == "open" ||
        update.receivedPendingNotifications == "true"
      ) {
        console.log(color(` `, "magenta"));
        console.log(
          color(
            `✅ Connected to => ` + JSON.stringify(ARAbdullaDev.user, null, 2),
            "yellow",
          ),
        );
        await delay(1999);
        console.log(
          chalk.yellow(
            `\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`,
          ),
        );
        console.log(
          color(
            `< ================================================== >`,
            "cyan",
          ),
        );
        console.log(color(`\n${themeemoji} YouTube : ARAbdullaDev`, "magenta"));
        console.log(color(`${themeemoji} GitHub: ARAbdullaDev `, "magenta"));
        //console.log(color(`${themeemoji} INSTAGRAM: @unicorn_xeon `,'magenta'))
        console.log(color(`${themeemoji} WhatsApp: ${owner}`, "magenta"));
        console.log(
          color(`${themeemoji} Developers: ${developer}\n`, "magenta"),
        );
      }
    } catch (err) {
      console.log("Error in Connection.update " + err);
      ARAbdullaDevBot();
    }
  });

  await delay(5555);
  start("2", colors.bold.white("\n\nWaiting for New Messages.."));

  ARAbdullaDev.ev.on("creds.update", await saveCreds);

  ARAbdullaDev.ev.on("messages.upsert", async (chatUpdate) => {
    try {
      const kay = chatUpdate.messages[0];
      if (!kay.message) return;
      kay.message =
        Object.keys(kay.message)[0] === "ephemeralMessage"
          ? kay.message.ephemeralMessage.message
          : kay.message;
      if (kay.key && kay.key.remoteJid === "status@broadcast") {
        await ARAbdullaDev.readMessages([kay.key]);
      }
      if (
        !ARAbdullaDev.public &&
        !kay.key.fromMe &&
        chatUpdate.type === "notify"
      )
        return;
      if (kay.key.id.startsWith("BAE5") && kay.key.id.length === 16) return;
      const m = smsg(ARAbdullaDev, kay, store);
      require("./XeonCheems8.js")(ARAbdullaDev, m, chatUpdate, store);
    } catch (err) {
      console.log(err);
    }
  });

  ARAbdullaDev.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    ARAbdullaDev.sendMessage(
      jid,
      {
        text: text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
            (v) => v[1] + "@s.whatsapp.net",
          ),
        },
        ...options,
      },
      { quoted },
    );

  ARAbdullaDev.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  ARAbdullaDev.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = ARAbdullaDev.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = { id, name: contact.notify };
    }
  });

  ARAbdullaDev.getName = (jid, withoutContact = false) => {
    id = ARAbdullaDev.decodeJid(jid);
    withoutContact = ARAbdullaDev.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = ARAbdullaDev.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
              "international",
            ),
        );
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === ARAbdullaDev.decodeJid(ARAbdullaDev.user.id)
            ? ARAbdullaDev.user
            : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
        "international",
      )
    );
  };

  ARAbdullaDev.parseMention = (text = "") => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + "@s.whatsapp.net",
    );
  };

  ARAbdullaDev.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await ARAbdullaDev.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ARAbdullaDev.getName(
          i,
        )}\nFN:${await ARAbdullaDev.getName(
          i,
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    ARAbdullaDev.sendMessage(
      jid,
      {
        contacts: { displayName: `${list.length} Contact`, contacts: list },
        ...opts,
      },
      { quoted },
    );
  };

  ARAbdullaDev.setStatus = (status) => {
    ARAbdullaDev.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  ARAbdullaDev.public = true;

  ARAbdullaDev.sendImage = async (
    jid,
    path,
    caption = "",
    quoted = "",
    options,
  ) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    return await ARAbdullaDev.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted },
    );
  };

  ARAbdullaDev.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }
    await ARAbdullaDev.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted },
    ).then((response) => {
      fs.unlinkSync(buffer);
      return response;
    });
  };

  ARAbdullaDev.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }
    await ARAbdullaDev.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted },
    );
    return buffer;
  };

  ARAbdullaDev.copyNForward = async (
    jid,
    message,
    forceForward = false,
    options = {},
  ) => {
    let vtype;
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
      delete message.message.viewOnceMessage.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessage.message,
      };
    }
    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};
    if (mtype != "conversation") context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
    };
    const waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {},
    );
    await ARAbdullaDev.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  ARAbdullaDev.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true,
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  ARAbdullaDev.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  ARAbdullaDev.getFile = async (PATH, save) => {
    let res;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
        ? Buffer.from(PATH.split`,`[1], "base64")
        : /^https?:\/\//.test(PATH)
          ? await (res = await getBuffer(PATH))
          : fs.existsSync(PATH)
            ? ((filename = PATH), fs.readFileSync(PATH))
            : typeof PATH === "string"
              ? PATH
              : Buffer.alloc(0);
    let type = (await FileType.fromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".bin",
    };
    filename = path.join(__filename, "./lib" + new Date() * 1 + "." + type.ext);
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };

  ARAbdullaDev.sendMedia = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {},
  ) => {
    let types = await ARAbdullaDev.getFile(path, true);
    let { mime, ext, res, data, filename } = types;
    if ((res && res.status !== 200) || file.length <= 65536) {
      try {
        throw { json: JSON.parse(file.toString()) };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    let type = "",
      mimetype = mime,
      pathFile = filename;
    if (options.asDocument) type = "document";
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require("./lib/exif");
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, {
        packname: options.packname ? options.packname : global.packname,
        author: options.author ? options.author : global.author,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename);
      type = "sticker";
      mimetype = "image/webp";
    } else if (/image/.test(mime)) type = "image";
    else if (/video/.test(mime)) type = "video";
    else if (/audio/.test(mime)) type = "audio";
    else type = "document";
    await ARAbdullaDev.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options },
    );
    return fs.promises.unlink(pathFile);
  };

  ARAbdullaDev.sendText = (jid, text, quoted = "", options) =>
    ARAbdullaDev.sendMessage(jid, { text: text, ...options }, { quoted });

  ARAbdullaDev.serializeM = (m) => smsg(ARAbdullaDev, m, store);

  ARAbdullaDev.sendButtonText = (
    jid,
    buttons = [],
    text,
    footer,
    quoted = "",
    options = {},
  ) => {
    let buttonMessage = {
      text,
      footer,
      buttons,
      headerType: 2,
      ...options,
    };
    ARAbdullaDev.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  ARAbdullaDev.sendKatalog = async (
    jid,
    title = "",
    desc = "",
    gam,
    options = {},
  ) => {
    let message = await prepareWAMessageMedia(
      { image: gam },
      { upload: ARAbdullaDev.waUploadToServer },
    );
    const tod = generateWAMessageFromContent(
      jid,
      {
        productMessage: {
          product: {
            productImage: message.imageMessage,
            productId: "9999",
            title: title,
            description: desc,
            currencyCode: "INR",
            priceAmount1000: "100000",
            url: `${websitex}`,
            productImageCount: 1,
            salePriceAmount1000: "0",
          },
          businessOwnerJid: `${ownernumber}@s.whatsapp.net`,
        },
      },
      options,
    );
    return ARAbdullaDev.relayMessage(jid, tod.message, {
      messageId: tod.key.id,
    });
  };

  ARAbdullaDev.send5ButLoc = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {},
  ) => {
    var template = generateWAMessageFromContent(
      jid,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            hydratedContentText: text,
            locationMessage: {
              jpegThumbnail: img,
            },
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options,
    );
    ARAbdullaDev.relayMessage(jid, template.message, {
      messageId: template.key.id,
    });
  };

  ARAbdullaDev.sendButImg = async (jid, path, teks, fke, but) => {
    let img = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
        ? Buffer.from(path.split`,`[1], "base64")
        : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
            ? fs.readFileSync(path)
            : Buffer.alloc(0);
    let fjejfjjjer = {
      image: img,
      jpegThumbnail: img,
      caption: teks,
      fileLength: "1",
      footer: fke,
      buttons: but,
      headerType: 4,
    };
    ARAbdullaDev.sendMessage(jid, fjejfjjjer, { quoted: m });
  };

  /**
   * Send Media/File with Automatic Type Specifier
   * @param {String} jid
   * @param {String|Buffer} path
   * @param {String} filename
   * @param {String} caption
   * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
   * @param {Boolean} ptt
   * @param {Object} options
   */
  ARAbdullaDev.sendFile = async (
    jid,
    path,
    filename = "",
    caption = "",
    quoted,
    ptt = false,
    options = {},
  ) => {
    let type = await ARAbdullaDev.getFile(path, true);
    let { res, data: file, filename: pathFile } = type;
    if ((res && res.status !== 200) || file.length <= 65536) {
      try {
        throw { json: JSON.parse(file.toString()) };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    const fileSize = fs.statSync(pathFile).size / 1024 / 1024;
    if (fileSize >= 1800) throw new Error(" The file size is too large\n\n");
    let opt = {};
    if (quoted) opt.quoted = quoted;
    if (!type) options.asDocument = true;
    let mtype = "",
      mimetype = options.mimetype || type.mime,
      convert;
    if (
      /webp/.test(type.mime) ||
      (/image/.test(type.mime) && options.asSticker)
    )
      mtype = "sticker";
    else if (
      /image/.test(type.mime) ||
      (/webp/.test(type.mime) && options.asImage)
    )
      mtype = "image";
    else if (/video/.test(type.mime)) mtype = "video";
    else if (/audio/.test(type.mime))
      (convert = await toAudio(file, type.ext)),
        (file = convert.data),
        (pathFile = convert.filename),
        (mtype = "audio"),
        (mimetype = options.mimetype || "audio/ogg; codecs=opus");
    else mtype = "document";
    if (options.asDocument) mtype = "document";

    delete options.asSticker;
    delete options.asLocation;
    delete options.asVideo;
    delete options.asDocument;
    delete options.asImage;

    let message = {
      ...options,
      caption,
      ptt,
      [mtype]: { url: pathFile },
      mimetype,
      fileName: filename || pathFile.split("/").pop(),
    };
    /**
     * @type {import('@adiwajshing/baileys').proto.WebMessageInfo}
     */
    let m;
    try {
      m = await ARAbdullaDev.sendMessage(jid, message, { ...opt, ...options });
    } catch (e) {
      console.error(e);
      m = null;
    } finally {
      if (!m)
        m = await ARAbdullaDev.sendMessage(
          jid,
          { ...message, [mtype]: file },
          { ...opt, ...options },
        );
      file = null; // releasing the memory
      return m;
    }
  };

  //ARAbdullaDev.sendFile = async (jid, media, options = {}) => {
  //let file = await ARAbdullaDev.getFile(media)
  //let mime = file.ext, type
  //if (mime == "mp3") {
  //type = "audio"
  //options.mimetype = "audio/mpeg"
  //options.ptt = options.ptt || false
  //}
  //else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
  //else if (mime == "webp") type = "sticker"
  //else if (mime == "mp4") type = "video"
  //else type = "document"
  //return ARAbdullaDev.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
  //}

  ARAbdullaDev.sendFileUrl = async (
    jid,
    url,
    caption,
    quoted,
    options = {},
  ) => {
    let mime = "";
    let res = await axios.head(url);
    mime = res.headers["content-type"];
    if (mime.split("/")[1] === "gif") {
      return ARAbdullaDev.sendMessage(
        jid,
        {
          video: await getBuffer(url),
          caption: caption,
          gifPlayback: true,
          ...options,
        },
        { quoted: quoted, ...options },
      );
    }
    let type = mime.split("/")[0] + "Message";
    if (mime === "application/pdf") {
      return ARAbdullaDev.sendMessage(
        jid,
        {
          document: await getBuffer(url),
          mimetype: "application/pdf",
          caption: caption,
          ...options,
        },
        { quoted: quoted, ...options },
      );
    }
    if (mime.split("/")[0] === "image") {
      return ARAbdullaDev.sendMessage(
        jid,
        { image: await getBuffer(url), caption: caption, ...options },
        { quoted: quoted, ...options },
      );
    }
    if (mime.split("/")[0] === "video") {
      return ARAbdullaDev.sendMessage(
        jid,
        {
          video: await getBuffer(url),
          caption: caption,
          mimetype: "video/mp4",
          ...options,
        },
        { quoted: quoted, ...options },
      );
    }
    if (mime.split("/")[0] === "audio") {
      return ARAbdullaDev.sendMessage(
        jid,
        {
          audio: await getBuffer(url),
          caption: caption,
          mimetype: "audio/mpeg",
          ...options,
        },
        { quoted: quoted, ...options },
      );
    }
  };

  /**
   *
   * @param {*} jid
   * @param {*} name
   * @param [*] values
   * @returns
   */
  ARAbdullaDev.sendPoll = (
    jid,
    name = "",
    values = [],
    selectableCount = 1,
  ) => {
    return ARAbdullaDev.sendMessage(jid, {
      poll: { name, values, selectableCount },
    });
  };

  return ARAbdullaDev;
}

ARAbdullaDevBot();

process.on("uncaughtException", function (err) {
  console.log("Caught exception: ", err);
});

///------------------[ Base Ori By Nino ]-------------------\\\
///--------------[ Base Self Bot By Farz ]----------------\\\

/**
* Note:
* Base By Nino
* Developer Base By Farz
* Developer Script By FixMood
* Developer Script By Mail Bot
* Kalau Mau Recode Kasih Credit
**/

///----------------[ Thanks To Jangan Di Hapus ]------------------\\\
///-----------[ Tambahin Aja Di Bawah Thanks To ]------------\\\


const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id");
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const _gis = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const { promisify, util } = require('util')
const qrcodes = require('qrcode');
const googleIt = require('google-it')
const os = require('os');
const hx = require('hxz-api')
const fakeimage = fs.readFileSync('./media/Nakano.jpg')

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { getBuffer, getGroupAdmins, getRandom, runtime, pickRandom, clockString, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { pinterest } = require('./lib/pinterest.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premium")

//------------[ Database ]----------\\

//------------[ Database ]---------\\
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));

//------------[ Setting ]-------------\\
const a = '```'
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
hit_today = []
banChats = true
shp = '妥︎⃟🐲'
shpe = '*妥︎⃟🕊 •*'
footerr = '_Made With DatMoods_'
multi = true // Multi Prefix

nopref = false // Noprefix
fake = '𝐈𝐭𝐬𝐌𝐞 𝗗𝗮𝘁𝐌𝐨𝐨𝐝𝘀 🍂' // Fake

let image = fs.readFileSync("./media/wpmobile.png")
let image2 = fs.readFileSync("./media/Nakano.jpg")
let setting = JSON.parse(fs.readFileSync('./setting.json'))

owner = setting.owner
lolkey = setting.lolkey

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}


module.exports = Fix = async (Fix, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.blocked
		
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const waktu = moment.tz('Asia/Jakarta').format('a')
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')

        const botNumber = Fix.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? Fix.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await Fix.chats.all()
		const groupMetadata = isGroup ? await Fix.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? Fix.user.jid : Fix.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Fix.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		
		//----------------[ Const Const An ]-----------------\\
        const isOwner = ownerNumber.includes(sender)
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isAntiLink = isGroup ? antilink.includes(from) : false
        
        //-----------------[ Connection ]---------------\\
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        const reply = (teks) => {
	      Fix.sendMessage(from, teks, text, {quoted:mek, thumbnail: image})
        }
        const sendMess = (hehe, teks) => {
           Fix.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? Fix.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : Fix.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           Fix.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return Fix.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const ftroli = {
         key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝑩𝒚メ\n🍂𝑰𝒕𝒔𝑴𝒆 𝑮𝒆𝒅𝒂𝒕 𝑿𝑫🍂`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./media/Nakano.jpg'), sellerJid: '0@s.whatsapp.net'}}}
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const fakestatus = (teks) => {
            Fix.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                           "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                           "mimetype": "image/jpeg",
                           "caption": fake,
                           "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                           "fileLength": "28777",
                           "height": 1080,
                           "width": 1079,
                           "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                           "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                           "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                           "mediaKeyTimestamp": "1610993486",
                           "jpegThumbnail": fakeimage,
                           "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: { "mentionedJid": [sender], "forwardingScore":999,"isForwarded":false},sendEphemeral: true
            })
        }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       Fix.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await Fix.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = Fix.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await Fix.groupRemove(from, [i])
        } else {
           await Fix.sendMessage(id, "Not Premited!", "conversation")
        }
    }
}
       const add = function(from, orangnya){
	       Fix.groupAdd(from, orangnya)
}

    const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await Fix.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Fix.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Fix.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await Fix.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Fix.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Fix.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
      const sendBug = async(target, teks) => {
           if (!teks) teks = '.'
           await Fix.relayWAMessage(Fix.
           prepareMessageFromContent(target, Fix.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           Fix.sendMessage(target, teks, 'conversation')
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       Fix.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await Fix.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Fix.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           Fix.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           Fix.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Fix.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Fix.sendMessage(from, hasil, type, options).catch(e => {
	       Fix.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
          let authorname = Fix.contacts[from] != undefined ? Fix.contacts[from].vname || Fix.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
       function formatDate(n, locale = 'id') {
       let d = new Date(n)
       return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    })
    }
    
         // Antilink 
         if (isGroup && !isOwner && !mek.key.fromMe && isAntiLink) {

         if (budy.includes("https://chat.whatsapp.com/")) {

         if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')

         console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))

         reply(`「 *ANTILINK GROUP DETECTOR* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
         Fix.groupRemove(from, [sender])
}}
			
			var premi = 'Gratisan'
             if (isPremium) {
             premi = 'Premium'
 }
          
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

      
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
            if (!mek.key.fromMe && !isOwner && banChats === true) return
            switch(command){
           
           case 'owner':
           case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`
               buttons = [{buttonId: `${prefix}sourcecode`,buttonText:{displayText: 'SC BOT'},type:1},{buttonId:`${prefix}infoig`,buttonText:{displayText:'INSTAGRAM'},type:1}]
               buttonsMessage = { contentText: `${txtt}`, footerText: 'Jangan Sungkan Chat Ya Kak', buttons: buttons, headerType: 1 }
               prep = await Fix.prepareMessageFromContent(from,{buttonsMessage},{})
               Fix.relayWAMessage(prep)
               break     
               ///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Fix.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Fix.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Fix.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Fix.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Fix.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} 
      

      // CASE CASE NYA
case 'tes':
reply(`Okehh Nyala...`)
break     

case 'menu':
case 'help':
var groups = Fix.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = Fix.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var totalChat = await Fix.chats.all()
 menu =` ${ucapanWaktu} - @${sender.split("@")[0]}👋

   *INFO OWNER*
*${shp} Owner :* 0134773604
*${shp} Instagram :* .....
*${shp} Youtube :* .......
 
   *INFO USER*
*${shp} Nama :* ${pushname}
*${shp} Tag :* @${sender.split("@")[0]}
*${shp} Status :* ${premi}

   *INFO BOT*
*${shp} Hit Today :* ${totalhit} Hit
*${shp} Prefix :* Multi - Prefix 
*${shp} Mode :* ${banChats ? "Self-Mode" : "Public-Mode"}
*${shp} Baterai :* ${baterai}%
*${shp} Platform :* ${os.platform()}
*${shp} Runtime :* ${clockString(process.uptime())}
*${shp} Time :* ${waktu.charAt(0).toUpperCase() + waktu.slice(1)} || ${time}
 
   *INFO CHAT*
*${shp} Private Chat :* ${privat.length}
*${shp} Group Chat :* ${groups.length}
*${shp} Total Chat :* ${totalChat.length}

${readmore}  --------------- 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 ----------------
    
 *OWNER MENU*

${shpe} ${prefix}broadcast
${shpe} ${prefix}public
${shpe} ${prefix}self
${shpe} ${prefix}join
${shpe} ${prefix}exif
${shpe} ${prefix}term
${shpe} ${prefix}shutdown
${shpe} ${prefix}leaveall
${shpe} ${prefix}setprefix
${shpe} ${prefix}cekapikey
${shpe} ${prefix}setcmd
${shpe} ${prefix}delcmd
${shpe} ${prefix}listcmd
${shpe} ${prefix}kickall
${shpe} ${prefix}leaveall
${shpe} ${prefix}premium add/del

 *GROUP MENU*
 
${shpe} ${prefix}kick
${shpe} ${prefix}add
${shpe} ${prefix}culik
${shpe} ${prefix}antilink
${shpe} ${prefix}tagall
${shpe} ${prefix}hidetag
${shpe} ${prefix}welcome
${shpe} ${prefix}infogc
${shpe} ${prefix}revoke
${shpe} ${prefix}listadmin
${shpe} ${prefix}listonline
${shpe} ${prefix}setgrupname
${shpe} ${prefix}setdesc
${shpe} ${prefix}setppgrup
${shpe} ${prefix}sider
${shpe} ${prefix}linkgc
${shpe} ${prefix}getpic

 *TOOLS MENU*
  
${shpe} ${prefix}attp
${shpe} ${prefix}ttp
${shpe} ${prefix}ttp2
${shpe} ${prefix}ttp3
${shpe} ${prefix}ttp4
${shpe} ${prefix}exif
${shpe} ${prefix}take
${shpe} ${prefix}nulis
${shpe} ${prefix}sticker
${shpe} ${prefix}stickerzoom
${shpe} ${prefix}swm
${shpe} ${prefix}doge
${shpe} ${prefix}gura
${shpe} ${prefix}patrick
${shpe} ${prefix}animestick
${shpe} ${prefix}tourl
${shpe} ${prefix}toimg
${shpe} ${prefix}tomp3
${shpe} ${prefix}tovideo
${shpe} ${prefix}telesticker

 *DOWNLOAD MENU*
 
${shpe} ${prefix}nhdl
${shpe} ${prefix}play
${shpe} ${prefix}igdl
${shpe} ${prefix}igstory
${shpe} ${prefix}tiktokdl
${shpe} ${prefix}mediafire
${shpe} ${prefix}facebook
${shpe} ${prefix}youtubedl

 *SEARCH MENU*
 
${shpe} ${prefix}image
${shpe} ${prefix}google
${shpe} ${prefix}pinterest
${shpe} ${prefix}ytdesc
${shpe} ${prefix}ghsearch

 *INFO MENU*
 
${shpe} ${prefix}ping
${shpe} ${prefix}runtime
${shpe} ${prefix}donasi
${shpe} ${prefix}status
${shpe} ${prefix}sc
${shpe} ${prefix}jadibot
${shpe} ${prefix}stopjadibot
${shpe} ${prefix}listjadibot

 *ANIME MENU*
 
${shpe} ${prefix}darkjokes
${shpe} ${prefix}waifu
${shpe} ${prefix}loli
${shpe} ${prefix}husbu
${shpe} ${prefix}milf
${shpe} ${prefix}cosplay
${shpe} ${prefix}wallml
${shpe} ${prefix}hentai
${shpe} ${prefix}elf
${shpe} ${prefix}neko
${shpe} ${prefix}shota
${shpe} ${prefix}sagiri
${shpe} ${prefix}shinobu
${shpe} ${prefix}wallnime
${shpe} ${prefix}megumin
${shpe} ${prefix}storyanime
${shpe} ${prefix}nekopoi3d
${shpe} ${prefix}nekopoijav
${shpe} ${prefix}nekopoicosplay
${shpe} ${prefix}otakuongoing

 *NSFW MENU*
 
${shpe} ${prefix}trap
${shpe} ${prefix}yaoi
${shpe} ${prefix}ecchi
${shpe} ${prefix}ahegao
${shpe} ${prefix}blowjob
${shpe} ${prefix}hololewd
${shpe} ${prefix}sideoppai
${shpe} ${prefix}animefeets
${shpe} ${prefix}animebooty
${shpe} ${prefix}animethighss
${shpe} ${prefix}animearmpits
${shpe} ${prefix}animebellybutton
${shpe} ${prefix}hentaiparadise
${shpe} ${prefix}hentaifemdom
${shpe} ${prefix}hentai4everyone
${shpe} ${prefix}lewdanimegirls
${shpe} ${prefix}biganimetiddies

 *CECAN MENU*
 
${shpe} ${prefix}cecanindo
${shpe} ${prefix}cecanjepang
${shpe} ${prefix}cecankorea
${shpe} ${prefix}cecanvietnam
${shpe} ${prefix}cecanthailand
${shpe} ${prefix}cecanmalaysia

 *ASUPAN MENU*
 
${shpe} ${prefix}asupan
${shpe} ${prefix}asupansantuy
${shpe} ${prefix}asupanbocil
${shpe} ${prefix}asupanukhty
${shpe} ${prefix}asupanghea
${shpe} ${prefix}asupanrikagusriani

 *TEXTPRO MENU*
 
${shpe} ${prefix}pornhub
${shpe} ${prefix}glitch
${shpe} ${prefix}avenger
${shpe} ${prefix}space
${shpe} ${prefix}ninjalogo
${shpe} ${prefix}marvelstudio
${shpe} ${prefix}lionlogo
${shpe} ${prefix}wolflogo
${shpe} ${prefix}steel3d
${shpe} ${prefix}wallgravity

 *STORY MENU*
 
${shpe} ${prefix}upswteks
${shpe} ${prefix}upswimage
${shpe} ${prefix}upswaudio
${shpe} ${prefix}upswvideo

 *FUN MENU*
  
${shpe} ${prefix}apakah
${shpe} ${prefix}bisakah
${shpe} ${prefix}kapankah
${shpe} ${prefix}cantik
${shpe} ${prefix}ganteng
${shpe} ${prefix}babi
${shpe} ${prefix}beban
${shpe} ${prefix}rate
${shpe} ${prefix}hobby
${shpe} ${prefix}jadian
${shpe} ${prefix}gantengcek
${shpe} ${prefix}cantikcek
${shpe} ${prefix}cekwatak

 *THANKS TO*

*${shp} Base By Nino*
*${shp} Developer Base Gedat*
*${shp} Developer Script FixMood*
*${shp} Developer Script Mail Bot*`
Fix.sendMessage(from, { contentText: `${menu}`, footerText: `${footerr}`, 
buttons: [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Contact Owner' }, type: 1 },
{ buttonId: `${prefix}status`, buttonText: { displayText: 'Statistic Bot' }, type: 1 }], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '',
jpegThumbnail: fs.readFileSync("./media/Nakano.jpg"), 
contextInfo: {mentionedJid: [sender, owner + "@s.whatsapp.net"]}}}, 'buttonsMessage')
 break                                    

case 'sewabot': // ini serah lu tinggal ngasih list mau buat banyak tinggal copy aja case nya
fah = `https://telegra.ph/file/a6073bc6c6325201b27df.jpg`
wew = await getBuffer(fah)
teks = `┏━━━━⬣ *FITUR BOT*
┃⬡ _ANTILINK_
┃⬡ _WELCOME IMAGE + BUTTON_
┃⬡ _BUTTON CMD_
┃⬡ _STICKER CMD_
┃⬡ _DAN BANYAK FITUR LAINNYA_
┗⬣
┏━━━━⬣ *LIST SEWA BOT*
┃⬡ _SEWA 5K / MINGGU_
┃⬡ _SEWA 10k / BULAN_
┃⬡ _SEWA 15K / BULAN + PREM_
┃⬡ _PERMANEN 20K_
┃⬡ _PERMANEN + PREM 30K_
┗⬣
┏━━━━⬣ *LIST SEWA PREM*
┃⬡ _PREM 5K / BULAN_
┃⬡ _PREM 10K MANEN_
┗⬣
┏━━━━⬣ *PAYMENT*
┃⬡ _GOPAY_
┃⬡ _DANA_
┃⬡ _QRIS ALL PAYMENT_
┗⬣
┏━━━━⬣ *CONTACT*
┃⬡ _Owner : 0134783604
┗⬣
┏━━━━⬣ *SISTEM*
┃⬡ _BISA DI TES DAHULU_
┃⬡ _SEND LINK GRUP-AKTIFIN-TF-DONE_
┗⬣`       
gttoan = [
{buttonId:`${prefix}owner`,buttonText:{displayText:'CONTACT OWNER'},type:1}
]
mhan = await Fix.prepareMessage(from, wew, image, {thumbnail: wew})
const btotttmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${teks}`,
footerText: `${setting.botName}`,
buttons: gttoan,
headerType: 4
}
Fix.sendMessage(from, btotttmenu, MessageType.buttonsMessage, {quoted: ftroli, contextInfo: {mentionedJid:[sender]}})
break
       
//------------------< Sticker Cmd >-------------------
           case 'addcmd': 
           case 'setcmd':
           if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              fakestatus("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
       if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
             _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              fakestatus("Done!")
              break
       case 'listcmd':
       if (!isOwner && !mek.key.fromMe) return  fakestatus(mess.only.owner)
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
//------------------< Public/Self >-------------------
        case 'public':
        if (!mek.key.fromMe && !isOwner) return 
          if (banChats === false) return 
              banChats = false
              fakestatus(`Success Activated Mode Public`)
              break
	      case 'self':
	if (!mek.key.fromMe && !isOwner) return 
    if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              fakestatus(`Success Activated Mode Self`)
              break
//------------------< Set Prefix >----------------\\
 case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
       if (args.length < 1) return fakestatus(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
           if (q === 'multi'){
              multi = true
              nopref = false
                    fakestatus(`\`\`\`Succes change prefix =「 ${q} 」\`\`\``)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    fakestatus(`\`\`\`Succes change prefix =「 ${q} 」\`\`\``)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    fakestatus(`\`\`\`Succes change prefix =「 ${q} 」\`\`\``)
                }
                break
                
//-----------------< Premium Fitur >----------------\\
case 'premium': 
              if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              fakestatus(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              fakestatus(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              fakestatus(mess.success)
              } else {
              _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              fakestatus(mess.success)
}
              } else {
              fakestatus(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return fakestatus(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              fakestatus(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
//------------------< Downloader/Search/Anime >-------------------
          case 'igdl':
          case 'instagram':
              try {
              if (!isUrl(q)) return fakestatus('Linknya?')
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              fakestatus(String(e))
}
              break
          case 'igstory': 
              if(!q) return fakestatus('Usernamenya?')
              hx.igstory(q)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              Fix.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              Fix.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
}
}
});
              break
          case 'ghsearch': 
          case 'githubsearch': 
          case 'searchgithub':
              if (!q) return fakestatus('Cari apa?')
              res = await fetch('https://api.github.com/search/repositories?q='+q)
              json = await res.json()
              if (res.status !== 200) throw json
              str = json.items.map((repo, index) => {
              return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_
_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
}).join('\n\n')
              fakestatus(str)
              break
          case 'image':
          case 'gimage':
          case 'googleimage':
              if (args.length < 1) return fakestatus('Apa Yang Mau Dicari?')
              fakestatus(mess.wait)
              teks = args.join(' ')
              res = await _gis(teks, google)
              function google(error, result){
              if (error){ return fakestatus('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
              break
             case 'ytsearch': case 'yts':
if(!q) return fakestatus(`Example : ${prefix + command} Melukis senja`)
fakestatus('Searching...')
try{
ysearch = await yts(q)
}catch(e){
return fakestatus('Error')
}
p = 0
teks = `Y TS E A R C H\nTotal : ${ysearch.all.length}\n\n`
for(let i of ysearch.all){
teks += `${p+=1}.\nTitle :` + i.title + '\n'
teks += `Url :` + i.url + '\n'
teks += `Durasi :` + i.timestamp + '\n\n-----------------------------\n\n'
}
teks +=`Ketik ${prefix}ytmp3 < link > untuk mengambil Music!\nKetik ${prefix}ytmp4 < link > untuk mengambil Video!`
fakestatus(teks)
break
              case 'ytdl':
              case 'youtube':
          case 'youtubedl':
              if (args.length < 1) return fakestatus('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return fakestatus(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks).catch(e => {
              fakestatus('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
              result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
🚀 Durasi : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await Fix.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await Fix.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Fix.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
          case 'tiktokdl':
              if (!q) return fakestatus('Linknya?')
              if (!q.includes('tiktok')) return fakestatus(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=ciko&url=${q}`)
              result = `*_Silahkan Di Pilih Salah Satu Format Di Bawah_*`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await Fix.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Made With ❤ FixMood', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await Fix.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Fix.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
          case 'nhentaipdf':
          case 'nhdl':
              if (!q) return fakestatus('kodenya?')
              fakestatus('Please wait, data is being processed')
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${q}?apikey=${setting.lolkey}`)
              ini_image = await getBuffer(get_result.result.image[0])
              data = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${q}?apikey=${setting.lolkey}`)
              pdf = await getBuffer(data.result)
              Fix.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.result.title_romaji}.pdf`, thumbnail: ini_image })
              break
          case 'buttons1':
          case 'ytmp3':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {
			  Fix.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: mek, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
          case 'buttons2':
          case 'ytmp4':
              if (args.length < 1) return fakestatus('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return fakestatus(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
          case 'buttons3': 
              if (!q) return fakestatus('Linknya?')
              if (!q.includes('tiktok')) return fakestatus(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              Fix.sendMessage(from, ini_video, video, { quoted: mek })
              break
          case 'buttons4': 
              if (!q) return fakestatus('Linknya?')
              if (!q.includes('tiktok')) return fakestatus(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${args[0]}`)
              Fix.sendMessage(from, data, audio, { quoted: mek })
              break
          case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await Fix.prepareMessageFromContent(from,{buttonsMessage},{})
              Fix.relayWAMessage(prep)
              break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await Fix.prepareMessageFromContent(from,{buttonsMessage},{})
              Fix.relayWAMessage(prep)
              break
          case 'tod':
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await Fix.prepareMessageFromContent(from,{buttonsMessage},{})
              Fix.relayWAMessage(prep)
              break
          case 'google':
              if (!q) return fakestatus(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              if(q == undefined || q == ' ') return fakestatus(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
              Fix.sendMessage(from, ss, image, {caption: vars, quoted : mek, thumbnail: Buffer.alloc(0) })
              }).catch(e => {
              console.log(e)
              fakestatus(`${e}`)
})
              break
          case 'mediafire':
              if (args.length < 1) return fakestatus('Link Nya Mana? ')
              if(!isUrl(args[0]) && !args[0].includes('mediafire')) return fakestatus(mess.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `*MediaFire Downloader*
               
📜 Nama : ${res[0].nama}
🚀 Ukuran : ${res[0].size}
🖇️ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              fakestatus(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
              break
          case 'fb':
          case 'facebook':
              if (!q) return fakestatus('Link Nya?')
              fakestatus(mess.wait)
              data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_video = await getBuffer(data.result)
              Fix.sendMessage(from, ini_video, video, { quoted: mek })
              break
          case 'twitter':
              if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return fakestatus(mess.Iv)
              if (!q) return fakestatus('Linknya?')
              ten = args[0]
              var res = await twitterGetUrl(`${ten}`)
             .then(g => {
              ren = `${g.download[2].url}`
              sendMediaURL(from,ren,'Done')
})
              break
          case 'ytdesc':
              if (args.length < 1) return fakestatus('Video/Link Yt Nya Mana? ')
              teks = args.join(' ')
              res = await yts(teks)
              fakestatus(res.all[0].description)
              break

              case 'asupan':
              case 'asupansantuy':
              case 'asupanukhty':
              case 'asupanbocil':
              case 'asupanghea':
              case 'asupanrikagusriani':
                    get_result = await getBuffer(`https://api.dapuhy.ga/api/asupan/${command}?apikey=FixMood XD`)
                    Fix.sendMessage(from, get_result, video, {quoted:ftroli})
                    break
//------------------< Group Menu >-------------------
case 'antilink':
            if (!isGroup) return fakestatus(mess.only.group)
            if (!isGroupAdmins && !mek.key.fromMe) return textImg(mess.only.admin)
            if (!isBotGroupAdmins) return fakestatus(`Bot Harus jadi Admin`)
            if (!q) return fakestatus(`Pilih enable atau disable`)
            if (args[0].toLowerCase() === 'enable'){
            if (isAntiLink) return textImg(`Udah aktif`)
            antilink.push(from)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
            textImg('Sukses mengaktifkan fitur antilink di group ini ✔️')
            } else if (args[0].toLowerCase() === 'disable'){
            let anu = antilink.indexOf(from)
            antilink.splice(anu, 1)
            fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
            textImg('Sukses menonaktifkan fitur antilink di group ini ✔️')
            } else {
            fakestatus(`Enable untuk mengaktifkan, disable untuk menonaktifkan`)
}
            break       
              
            case 'revoke':
           if (!mek.key.fromMe && !isOwner && !isGroupAdmins) return fakestatus('Admin Group Only')
           if (!isBotGroupAdmins) return fakestatus('Bot bukan admin kak')
           if (!isGroup) return
           Fix.revokeInvite(from)
           fakestatus('```Succes revoke link group```')
           break
//---------------[ Anime Menu ]-----------------\\
          case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `️Next`},type:1}]
              imageMsg = ( await Fix.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'🍂𝑰𝒕𝒔𝑴𝒆 𝑮𝒆𝒅𝒂𝒕 𝑿𝑫🍂', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Fix.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Fix.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
          case 'hentai':
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
              Fix.sendMessage(from, gambar, image, { quoted: mek, thumbnail: Buffer.alloc(0) })
})
              break	
			case 'elf':
			case 'neko':					
			case 'shota':					
			case 'sagiri':			
			case 'shinobu':			
			case 'megumin':			
			case 'wallnime':
			var pll = `*Wangyy Wangyy*`		
			buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`)
              gttan = [
{buttonId:`${prefix+command}`,buttonText:{displayText:'Next'},type:1}
]
mhan = await Fix.prepareMessage(from, buffer, image, {thumbnail: buffer})
const bttttmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${pll}`,
footerText: `${footerr}`,
buttons: gttan,
headerType: 4
}
Fix.sendMessage(from, bttttmenu, MessageType.buttonsMessage, {quoted: ftroli, contextInfo: {mentionedJid:[sender]}})
break
			case 'chiisaihentai':
			case 'trap':
			case 'blowjob':
			case 'yaoi':
			case 'ecchi':
			case 'ahegao':
			case 'hololewd':
			case 'sideoppai':
			case 'animefeets':
			case 'animebooty':
			case 'animethighss':
			case 'hentaiparadise':
			case 'animearmpits':
			case 'hentaifemdom':
			case 'lewdanimegirls':
			case 'biganimetiddies':
			case 'animebellybutton':
			case 'hentai4everyone':       
			var pll = `Mode Sange On !`             			
			ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.lolkey}`)
			gtsuan = [
{buttonId:`${prefix+command}`,buttonText:{displayText:'Next'},type:1}
]
mhan = await Fix.prepareMessage(from, ini_buffer, image, {thumbnail: ini_buffer})
const btttmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${pll}`,
footerText: `${footerr}`,
buttons: gtsuan,
headerType: 4
}
Fix.sendMessage(from, btttmenu, MessageType.buttonsMessage, {quoted: ftroli, contextInfo: {mentionedJid:[sender]}})
break
case 'storyanime':
              fakestatus(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${setting.lolkey}`)
              buffer = await getBuffer(anu.result)
              Fix.sendMessage(from, buffer, video, { quoted: mek })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
              fakestatus(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*List update 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              fakestatus(keluarplay) 
              } catch (err) {
              console.log(err)
              fakestatus('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
               fakestatus(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               fakestatus(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
               try {
               fakestatus(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               fakestatus(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*「 Ongoing Otakudesu 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
               Fix.sendMessage(from, buff, image, {quoted: mek, caption: ot})
               break
               
 case 'doge':
              fakestatus(mess.wait)
              fetch(`https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing`)
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
              case 'gura':
              case 'gawrgura':
              fakestatus(mess.wait)
              fetch(`https://raw.githubusercontent.com/rashidsiregar28/data/main/gura`)
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
              case 'animestik':
              case 'animestick':
              fakestatus(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
              case 'patrik':
              case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
     case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
			    case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return fakestatus(`Contoh: ${prefix + command} GEDAT BOT`)
                    teks1 = args[0]
                    teks2 = args[1]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${setting.lolkey}&text1=${teks1}&text2=${teks2}`)
                    Fix.sendMessage(from, ini_anu, image, {quoted: ftroli})
                    break
                    case 'attp2':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Fix.sendMessage(from, buffer, sticker, { quoted: ftroli })
break
case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                //case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} FixMood`)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${q}`)
                   Fix.sendMessage(from, ini_buffer, sticker, { quoted: ftroli })
                    break
                    
                   case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						var media = await Fix.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						var packname = ppp.split('|')[0]
						var author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							Fix.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
						case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					Fix.setStatus(`${iyek}`)
					fakestatus(`Sukses Mengubah Bio Menjadi ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                Fix.updateProfileName(anu)
                fakestatus(`Sukses Mengubah Nama Menjadi ${body.slice(9)}`)
                break
                
                case 'status':
case 'stats':
				var groups = Fix.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = Fix.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					var uptime = process.uptime();
					var timestampu = speed();
					var totalChat = await Fix.chats.all()
					var latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Fix.user.phone
					stamtus =`「 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 」
Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Runtime : ${clockString(process.uptime())}
Baterai : ${isBattre}
Charged : ${isCharge}
Mode : ${banChats ? 'Public Mode' : 'Self Mode'}
Prefix : Multi Prefix

「 𝗣𝗛𝗢𝗡𝗘 𝗜𝗡𝗙𝗢 」
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${Fix.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${Fix.user.phone.wa_version}
Os Version: ${Fix.user.phone.os_version}

 「 𝗗𝗔𝗧𝗠𝗢𝗢𝗗𝗦 𝗕𝗢𝗧 」`
fakestatus(stamtus)
break
           //-------------------[ Searching ]-------------\\
          case 'play':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {
    		  Fix.sendMessage(from, '*Data berhasil didapatkan*\n\n_Silahkan tunggu, file media sedang dikirim mungkin butuh waktu beberapa menit_', text, { contextInfo: { externalAdReply: { title: res.data.result.title, body: 'Duration ' + res.data.result.duration + ', Size ' + res.data.result.size, thumbnailUrl: res.data.result.thumb, sourceUrl: res.data.result.link }}})
			  Fix.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: ftroli, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
          case 'pinterest':        
              
             if(!q) return fakestatus('gambar apa?')
              
             fakestatus('Loading....')
              
             let pin = await hx.pinterest(q)
              
             let ac = pin[Math.floor(Math.random() * pin.length)]
              
             let di = await getBuffer(ac)
              
             pll = `Pinterest : ${q}`
   
             gbtsan = [
{buttonId:`${prefix+command} ${q}`,buttonText:{displayText:'Next'},type:1}
]
mhan = await Fix.prepareMessage(from, di, image, {thumbnail: di})
const btmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${pll}`,
footerText: `${footerr}`,
buttons: gbtsan,
headerType: 4
}
Fix.sendMessage(from, btmenu, MessageType.buttonsMessage, {quoted: ftroli, contextInfo: {mentionedJid:[sender]}})
break

case 'cecanthailand':
case 'cecanindo':
case 'cecanjepang':
case 'cecanmalaysia':
case 'cecankorea':
case 'cecanvietnam':
var pll = `Hasil Pencarian : ${command}`
fakestatus((mess.wait))
v3 = await pinterest(`${command}`)
v2 = v3[Math.floor(Math.random() * v3.length)]
buff = await getBuffer(v2)
gtsan = [
{buttonId:`${prefix+command}`,buttonText:{displayText:'Next'},type:1}
]
mhan = await Fix.prepareMessage(from, buff, image, {thumbnail: buff })
const bttmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${pll}`,
footerText: `${footerr}`,
buttons: gtsan,
headerType: 4
}
Fix.sendMessage(from, bttmenu, MessageType.buttonsMessage, {quoted: ftroli, contextInfo: {mentionedJid:[sender]}})
break
          case 'tourl':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
              fakestatus(mess.wait)
              boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              owgi = await Fix.downloadMediaMessage(boij)
              res = await uploadImages(owgi)
              fakestatus(res)
              } else {
              fakestatus('kirim/reply gambar/video')
}
              break
          case 'telesticker': 
          case 'telestiker':
              if (!q) return fakestatus(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              fakestatus(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              fakestatus('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              Fix.sendMessage(from, ini_buffer, sticker, {})
}
              break
          case 'attp':
              if (args.length == 0) return fakestatus(`Example: ${prefix + command} Fix`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              Fix.sendMessage(from, buffer, sticker, { quoted: mek })
              break
          case 'stickerzoom':
       case 'stikerzoom':
       case 'szoom':
       case 'stickergifzoom':
       case 'stikergifzoom':
       case 'sgifzoom':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await Fix.downloadAndSaveMediaMessage(encmediat)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return fakestatus(`${err}`)
              exec(`webpmux -set exif ./sticker/data.exif ${ron} -o ${ron}`, async (error) => {
              if (error) return fakestatus(`${error}`)
              Fix.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:ftroli})
              fs.unlinkSync(ron)
})
})
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediat = await Fix.downloadAndSaveMediaMessage(encmedia)
              ron = getRandom('.webp')
              exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
              fs.unlinkSync(mediat)
              if (err) return fakestatus(`${err}`)
              exec(`webpmux -set exif ./sticker/data.exif ${ron} -o ${ron}`, async (error) => {
              if (error) return fakestatus(`${error}`)
              Fix.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:ftroli})
              fs.unlinkSync(ron)
})
})
              } else {
              fakestatus(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
              break
              case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const enbcmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const mbedia = await Fix.downloadAndSaveMediaMessage(enbcmedia, `./sticker/${sender}`)
							await ffmpeg(`${mbedia}`)
									.input(mbedia)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(mbedia)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
										 Fix.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftroli})
											fs.unlinkSync(mbedia)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const enacmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const maedia = await Fix.downloadAndSaveMediaMessage(enacmedia, `./sticker/${sender}`)
							freply(mess.wait)
								await ffmpeg(`${maedia}`)
									.inputFormat(maedia.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(maedia)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Fix.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftroli })
											fs.unlinkSync(maedia)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							fakestatus(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
              case 'stikerwm':
	        case 'stickerwm':
            case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await Fix.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Fix.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            Fix.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await Fix.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Fix.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftroli })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            Fix.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftroli })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
            case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            Fix.sendMessage('status@broadcast', `${q}`, extendedText)
            fakestatus(`Sukses Up story wea teks ${q}`)
            break
            case 'upswaudio':
            if (isQuotedAudio) {
            const swsw = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Fix.downloadMediaMessage(swsw)
            Fix.sendMessage('status@broadcast', cihcih, audio, { caption: `${q}` }) 
            bur = `Sukses Upload Story Audio dengan Caption: ${q}`
            Fix.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
            case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Fix.downloadMediaMessage(swsw)
            Fix.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            Fix.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
            case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Fix.downloadMediaMessage(swsw)
            Fix.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            Fix.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
          case 'tovideo':
              if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
              encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediaaa = await Fix.downloadAndSaveMediaMessage(encmediaaa)
              a = await webp2gifFile(mediaaa)
              mp4 = await getBuffer(a.result)
              Fix.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
              fs.unlinkSync(mediaaa)
              } else {
              fakestatus(mess.wrongFormat)
}
              break
          case 'tomp3':
              if (isQuotedVideo || isQuotedAudio){
              fakestatus(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
              media = await Fix.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp3')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return fakestatus(`Err: ${err}`)
              buffer453 = fs.readFileSync(ran)
              Fix.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
              fs.unlinkSync(ran)
})
              } else {
              fakestatus(mess.wrongFormat)
}
              break
          case 'toimg':
              if (!isQuotedSticker) return fakestatus('reply stickernya')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Fix.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return fakestatus('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              Fix.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
          case 'nulis':
          case 'tulis':
              if (args.length < 1) return fakestatus('Yang mau di tulis apaan?')
              teks = args.join(' ')
              fakestatus(mess.wait)
              nulis = encodeURIComponent(teks)
              res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
              if (res.data.error) return fakestatus(res.data.error)
              buff = Buffer.from(res.data.result.split(',')[1], 'base64')
              Fix.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
              return fakestatus('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
              break
//------------------< Ingfo Bot >-------------------
          case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
          case 'ping':
          case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              fakestatus(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
          case 'exif':
              if (!isOwner && !mek.key.fromMe) return  fakestatus(mess.only.owner)
              if (!q) return fakestatus(mess.wrongFormat)
              if (!arg.split('|')) return fakestatus(`Penggunaan ${prefix}exif nama|author`)
              exif.create(arg.split('|')[0], arg.split('|')[1])
              fakestatus('sukses')
              break	
          case 'join': 
              if (!q) return fakestatus('Linknya?')
               if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return fakestatus('Linknya Invalid Tod')
              link = args[0].replace('https://chat.whatsapp.com/','')
              fak = Fix.query({ json: ['action', 'invite', link],
              expect200: true })
              fakestatus('Berhasil Masuk Grup')
              break
          case 'term':
               if (!isOwner && !mek.key.fromMe) return
              if (!q) return
              exec(q, (err, stdout) => {
              if (err) return fakestatus(`${err}`)
              if (stdout) {
              fakestatus(stdout)
}
})
              break 
          case 'shutdown':
               if (!isOwner && !mek.key.fromMe) return 
              fakestatus(`Bye...`)
              await sleep(3000)
              process.exit()
              break
              case 'bc':
      case 'broadcast':
             if (!isOwner && !mek.key.fromMe) return  fakestatus(mess.only.owner)
             if (args.length < 1) return fakestatus('teks?')
             anu = await Fix.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Fix.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Fix.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             fakestatus('Suksess broadcast')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
             fakestatus('Suksess broadcast')
}
             break
//------------[ Owner Menu ]--------------\\
          case 'leaveall':
               if (!isOwner && !mek.key.fromMe) return  
              let totalgroup = Fix.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
              for (let id of totalgroup) {
              sendMess(id, 'Byee', null)
              await sleep(3000)
              Fix.groupLeave(id)
}
              break
          case 'culik':
               if (!isOwner && !mek.key.fromMe) return
              if (args.length < 1) return fakestatus('Masukin id grupnya tolol')
              let pantek = []
              for (let i of groupMembers) {
              pantek.push(i.jid)
}
              Fix.groupAdd(args[0], pantek)
              break
         
          case 'hidetag':
          if (!isGroupAdmins) return fakestatus(mess.only.admin)
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              hideTag(from, `${quotedText}`)
              } catch {
              hideTag(from, `${q}`)
}
              break
             
case 'tagall':
       if (!isGroupAdmins) return fakestatus(mess.only.admin)
       if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
			break
          case 'bug':
          case '.':
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              sendBug(from, `${quotedText}`)
              } catch {
              sendBug(from, `${q}`)
}
              break
//-----------[ Fun Menu ]-----------\\
          case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              fakestatus(awikwok)
              break
              
 case 'cekmati':
              if (!q) return fakestatus(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              fakestatus(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
              fakestatus(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
              Toxic().then(toxic => {
              fakestatus (toxic)
})
              break
       
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Fix.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Fix.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Fix.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Fix.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await Fix.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await fakestatus(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              Fix.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Fix.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Fix.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
              case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Yang Paling Ganteng Adalah :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//------------------< Lainnya >-------------------
          case 'getpp':
              if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
              linkpp = await Fix.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              Fix.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
              } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
              mberr = mek.message.extendedTextMessage.contextInfo.participant
              linkpp = await Fix.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              Fix.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
              } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
              mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
              linkpp = await Fix.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
              buffer = await getBuffer(linkpp)
              Fix.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
              break
          case 'searchmsg':  //by ANU TEAM
              if (args.length < 1) return fakestatus(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
              teks = arg
              if (teks.includes("|")) { 
              try {
              var ve = teks.split("|")[0]
              var za = teks.split("|")[1]
              sampai = `${za}`
              if (isNaN(sampai)) return fakestatus('Harus berupa Angka!')
              batas = parseInt(sampai) + 1
              if (batas > 30) return fakestatus('Maks 30!')
              fakestatus(mess.wait)
              cok = await Fix.searchMessages(`${ve}`, from, batas,1) 
              if (cok.messages.length < 2) return fakestatus('Tidak Ditemukan Pesan') 
              if (cok.messages.length < parseInt(batas)) fakestatus(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
              for (i=1;i < cok.messages.length;i++) {
              if (cok.messages[i].message) {
              Fix.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
              } catch (e) {
              return fakestatus(String(e))
}
              } else {
              fakestatus(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
              break
          case 'lolkey':
          case 'cekapikey':
              if (args.length < 1) return fakestatus(`Ketik ${prefix}lolkey [Apikeynya]`) 
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
              Fix.sendMessage(from, teks, text, {quoted: mek})
              break
          case 'welcome':
          if (!isGroupAdmins) return fakestatus(mess.only.admin)
              if (!isGroup) return fakestatus(mess.only.group)
              if (args.length < 1) return fakestatus(`${prefix}welcome enable`)
              if ((args[0]) === 'enable') {
              if (isWelkom) return fakestatus('Udah aktif')
              welkom.push(from)
              fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
              fakestatus('Sukses mengaktifkan fitur welcome di group ini ✔️')
              } else if ((args[0]) === 'disable') {
              welkom.splice(from, 1)
              fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
              fakestatus('Sukses menonaktifkan fitur welcome di group ini ✔️')
              } else {
              fakestatus('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
              break

          case 'kickall': // Anti Banned:v
              if (!isOwner && !mek.key.fromMe) return
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
          case 'kick':
          if (!isGroupAdmins) return fakestatus(mess.only.admin)
         if (!isGroup) return fakestatus(mess.only.group)
              kick(from, mentionUser)
              break
          case 'add':
          if (!isGroupAdmins) return fakestatus(mess.only.admin)
              if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
              entah = arg.split("|")[0]
              entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
              entah = `${entah}@s.whatsapp.net`
              Fix.groupAdd(from, [entah])
              } else {
              orang = mek.message.extendedTextMessage.contextInfo.quotedMessage.sender
              await Fix.groupAdd(from, [orang])
}
              break
          case 'infoig':
              teks = `Jangan Lupa Follow Ig Owner Ya\n`
              Fix.sendMessage(from, teks, text, { quoted : mek })
              break
          case 'sourcecode': 
          case 'sc': 
          case 'src':
              textImg(`Bot Ini Menggunakan Base Self Bot :`)
              break
          case 'jadibot':
          if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
              jadibot(fakestatus,Fix,from)
              break
          case 'stopjadibot':
              stopjadibot(fakestatus)
              break
          case 'listbot':
          case 'listjadibot':
          if (!isOwner && !mek.key.fromMe) return  fakestatus(mess.only.owner)
              let jamdibot = '「 *LIST JADIBOT* 」\n\n'
              for(let i of listjadibot) {
              jamdibot += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
}
              fakestatus(jamdibot)
              break
              case 'setgrupname':
              if (!isGroup) return fakestatus(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return fakestatus(`Penggunaan ${prefix}setgrupname name`)
              Fix.groupUpdateSubject(from, q)
             .then((res) => fakestatus(jsonformat(res)))
             .catch((err) => fakestatus(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return fakestatus(mess.only.group)
              if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
              if (args.length == 0)  return fakestatus(`Penggunaan ${prefix}setdesc desc`)
              Fix.groupUpdateDescription(from, q)
             .then((res) => fakestatus(jsonformat(res)))
             .catch((err) => fakestatus(jsonformat(err)))
              break
       case 'setppgrup':
              if (!isGroup) return fakestatus(mess.only.group)
              if (!isBotGroupAdmins) return fakestatus(mess.only.Badmin)
              if (isQuotedImage) {
              var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              var media = await Fix.downloadMediaMessage(encmedia)
              Fix.updateProfilePicture(from, media)
             .then((res) => fakestatus(jsonformat(res)))
             .catch((err) => fakestatus(jsonformat(err)))
              } else {
              fakestatus(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
              case 'online':
       case 'listonline':
       case 'here':                
             if (!isGroup) return fakestatus(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Fix.chats.get(ido).presences), Fix.user.jid]
             Fix.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             fakestatus(`${e}`)
}
             break
          case 'get':
          case 'fetch': //ambil dari nuru
              if (!/^https?:\/\//.test(q)) return fakestatus('Awali *URL* dengan http:// atau https://')
              res = await fetch(q)
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
}
              if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              reply(txtx.slice(0, 65536) + '')
}
              break
              case 'cekbapak': // 
            
		    const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#Candabos', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Canda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk']

		    const tai = bapak[Math.floor(Math.random() * bapak.length)]

		    Fix.sendMessage(from, tai, text, { quoted: ftroli })

			break
		case 'cekemak': // 
            
		    const emak = ['Wah Mantap Lu Masih Punya Emak\nPasti Emaknya Nya Open Bo :v\nAwowkwokwwok\n#Candabos', 'Aowkwwo Disini Ada Piatu :v\nLu Piatu Bro? Awowkwowk\nSabar Bro Ga Punya Emak\n#Canda', 'Bjir Emak Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Piatu Aowkwowkw Ngakak :v', 'Jangan CekEmak Mulu Broo :v\nKasian Yang Piatu\nNtar Tersinggung Kan\nYahahaha Hayyuk']

		    const tahu = emak[Math.floor(Math.random() * emak.length)]

		    Fix.sendMessage(from, tahu, text, { quoted: ftroli })

			break
			// 
case 'getpic':
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.participant
try {
pic = await Fix.getProfilePicture(mentioned)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
Fix.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
} else if (args[0]) {
try {
pic = await Fix.getProfilePicture(args[0])
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
Fix.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
} else {
fakestatus(`Example :\n${prefix}${command} 62xxx\n${prefix}${command} <reply>`)
}
break
// Play Store ( MyMans APIs & Fixgonz )
case 'playstore':
if (args.length < 1) return fakestatus(`Example :\n${prefix}playstore termux`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '```「 Play Store 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}\n`
teks += `${i.developer}`
}
fakestatus(teks)
})
break
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
           if (!isGroup) return
           if (!isBotGroupAdmins) return fakestatus('Bot bukan admin kak')
           linkgc = await Fix.groupInviteCode(from)
           yeh = `https://chat.whatsapp.com/${linkgc}`
           Fix.sendMessage(from, yeh, text, { quoted: mek })
           break
           case 'darkjokes':
			data = fs.readFileSync('./lib/darkjokes.js');
	 	    jsonData = JSON.parse(data);
		    randIndex = Math.floor(Math.random() * jsonData.length);
		    randKey = jsonData[randIndex];
		    hasil = await getBuffer(randKey.result)
		    Fix.sendMessage(from, hasil, image, {quoted: ftroli, caption: 'Awokwowkwok'})
		    break
		    case 'listadmins':
               case 'listadmin':
                 case 'admin':
                            if (!isGroup) return fakestatus(mess.only.group)
                            teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                            no = 0
                            for (let admon of groupAdmins) {
                               no += 1
                               teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                            }
                            mentions(teks, groupAdmins, true)
                            break
      case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
       case 'infogc':
              if (!isGroup) return fakestatus(mess.only.group)
              try {
              var pic = await Fix.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Desc :* \n${groupMetadata.desc}`
              Fix.sendMessage(from, await getBuffer(pic), image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6285878313791@g.us" }: {})},message:{"orderMessage":{"orderId":"6285878313791","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
              case 'sider':
             if(!isGroup) return fakestatus(mess.only.group)
             try {
             infom = await Fix.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             fakestatus('Reply chat bot!')
}
             break
             case 'report':
              if (args.length < 1) return fakestatus(`Ketik ${prefix}report [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              fakestatus('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              Fix.sendMessage(`${owner}@s.whatsapp.net`,`*Bug Report:* ${teks}`, text)
              break
              case 'd':
        case 'del':
        case 'delete': 
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakestatus('Reply chat bot')
               Fix.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               fakestatus('Reply chat bot')
}
               break
               
default:
if (budy.startsWith('>')){
			
if(!mek.key.fromMe && !isOwner) return
				
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				
try{
fakestatus(require('util').format(await eval(`;(async () => { ${budy.slice(2)} })()`)))
}catch(err){
	e = String(err)
fakestatus(e)
	
}

}

if (budy.startsWith('x')){

try {
if (!mek.key.fromMe && !isOwner) return fakestatus('```khusus owner bro```')

return Fix.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})

} 
catch(err) {
e = String(err)

fakestatus(e)

}

}  

        
if (budy.startsWith("$ ")){
if (!mek.key.fromMe && !isOwner) return fakestatus('```khusus owner bro```')
           	console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(budy.slice(2), (err, stdout) => {
           	if (err) return fakestatus(`${err}`)
           	if (stdout) fakestatus(`${stdout}`)
           	})
            }
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return fakestatus('khusus owner bro')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return fakestatus(bang)
}
try {
fakestatus(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
fakestatus(String(e))
}
}

}

} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'green'))
console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     Fix.sendMessage(`${owner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "YouTube DatZBot XD",body:"",previewType:"PHOTO",thumbnail:image, sourceUrl:"https://youtube.com/channel/UC8bihFwIF0ueRN0Za9RTlrQ"}}})
}
}
}

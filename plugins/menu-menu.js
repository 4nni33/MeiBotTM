import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : username}*${(conn.user.jid == global.conn.user.jid ? '' : `\n*SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

\`\`\`${week}, ${date}\`\`\`
ㅤﻬ *${lenguajeGB['smsTotalUsers']()}* ▹ _${Object.keys(global.db.data.users).length}_ 
ㅤﻬ *Registrados »* ${rtotalreg}/${totalreg}
ㅤﻬ *${lenguajeGB['smsTime']()}* ▹ _${time}_    
ㅤﻬ *${lenguajeGB['smsUptime']()}* ▹ _${uptime}_ 
ㅤﻬ *${lenguajeGB['smsMode']()} ▹* _${global.opts['self'] ? `${lenguajeGB['smsModePrivate']().charAt(0).toUpperCase() + lenguajeGB['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeGB['smsModePublic']().charAt(0).toUpperCase() + lenguajeGB['smsModePublic']().slice(1).toLowerCase()}`}_
ㅤﻬ *${lenguajeGB['smsBanChats']()}* ▹ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
ㅤﻬ *${lenguajeGB['smsBanUsers']()}* ▹ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_

ৎ 🪻 ׂ ⬫ *INFO DEL USUARIO*  ָ࣪  ۰ . ¡! 
ෆ *Tipo de registro »* ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '❌ _Sin registro_'}
ෆ *Mi estado »* ${typeof user.miestado !== 'string' ? '❌ _' + usedPrefix + 'miestado_' : '_Me siento ' + user.miestado + '_'}
ෆ *Registrado »* ${user.registered === true ? '✅' : '❌ _' + usedPrefix + 'verificar_'}
ෆ *${lenguajeGB['smsBotonM7']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM7']().slice(1).toLowerCase()} »* ${user.premiumTime > 0 ? '✅' : '❌ _' + usedPrefix + 'pase premium_'}

ෆ *${lenguajeGB['smsBotonM5']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM5']().slice(1).toLowerCase()} »* ${role}
ෆ *${lenguajeGB['smsBotonM6']().charAt(0).toUpperCase() + lenguajeGB['smsBotonM6']().slice(1).toLowerCase()} »* ${emoji} || ${user.exp - min}/${xp}
ෆ *${lenguajeGB['smsPareja']()}* ${pareja ? `\n*»* ${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}
ෆ *Pasatiempo(s)* ▹ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}

ෆ *Experiencia ➟* ${exp} ⚡
ෆ *Diamantes ➟* ${limit} 💎
ෆ *Coins ➟* ${money} 🛍️
ෆ *Tokens ➟* ${joincount} 🪙
${readMore}

╭┈┈  ৎ 👑 ׂ ⬫ *Ser Pemium*  ָ࣪  ۰ . ¡! 
│ *Convierte en un(a)*
│ *Usuario(a) Premium!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🎟️▹ _${usedPrefix}listapremium | listprem_
│🎟️▹ _${usedPrefix}pase premium_
│🎟️▹ _${usedPrefix}pass premium_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *JUEGOS*  ָ࣪  ۰ . ¡! 
│🎡▹ _${usedPrefix}mates | matemáticas | math_
│🎡▹ _${usedPrefix}lanzar *cara* | *cruz*
│🎡▹ _${usedPrefix}ppt *piedra : papel : tijera*_
│🎡▹ _${usedPrefix}tictactoe | ttt *sala*_
│🎡▹ _${usedPrefix}deltictactoe | delttt_
│🎡▹ _${usedPrefix}topgays_
│🎡▹ _${usedPrefix}topotakus_
│🎡▹ _${usedPrefix}toppajer@s_
│🎡▹ _${usedPrefix}topput@s_
│🎡▹ _${usedPrefix}topintegrantes | topintegrante_
│🎡▹ _${usedPrefix}toplagrasa | topgrasa_
│🎡▹ _${usedPrefix}toppanafrescos | toppanafresco_
│🎡▹ _${usedPrefix}topshiposters | topshipost_
│🎡▹ _${usedPrefix}toplindos | toplind@s_
│🎡▹ _${usedPrefix}topfamosos | topfamos@s_
│🎡▹ _${usedPrefix}topparejas | top5parejas_
│🎡▹ _${usedPrefix}gay | gay *@tag*_
│🎡▹ _${usedPrefix}gay2 *nombre : @tag*_
│🎡▹ _${usedPrefix}lesbiana *nombre : @tag*_
│🎡▹ _${usedPrefix}manca *nombre : @tag*_
│🎡▹ _${usedPrefix}manco *nombre : @tag*_
│🎡▹ _${usedPrefix}pajero *nombre : @tag*_
│🎡▹ _${usedPrefix}pajera *nombre : @tag*_
│🎡▹ _${usedPrefix}puto *nombre : @tag*_
│🎡▹ _${usedPrefix}puta *nombre : @tag*_
│🎡▹ _${usedPrefix}rata *nombre : @tag*_
│🎡▹ _${usedPrefix}love *nombre : @tag*_
│🎡▹ _${usedPrefix}doxear *nombre : @tag*_
│🎡▹ _${usedPrefix}doxxeame_
│🎡▹ _${usedPrefix}pregunta *texto*_
│🎡▹ _${usedPrefix}apostar | slot *cantidad*_
│🎡▹ _${usedPrefix}formarpareja_
│🎡▹ _${usedPrefix}dado_
│🎡▹ _${usedPrefix}verdad_
│🎡▹ _${usedPrefix}reto_
│🎡▹ _${usedPrefix}multijuegos_
│🎡▹ _${usedPrefix}juegos_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Comandos*   ָ࣪  ۰ . ¡! 
│ *Configura si eres Propietario(a) y/o*
│ *admin!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│⚙️ _${usedPrefix}on *:* off *bienvenida | welcome*_
│⚙️ _${usedPrefix}on *:* off *avisos | detect*_
│⚙️ _${usedPrefix}on *:* off *autonivel | autolevelup*_
│⚙️ _${usedPrefix}on *:* off *restringir | restrict*_
│⚙️ _${usedPrefix}on *:* off *antillamar | anticall*_
│⚙️ _${usedPrefix}on *:* off *publico | public*_
│⚙️ _${usedPrefix}on *:* off *autovisto | autoread*_
│⚙️ _${usedPrefix}on *:* off *temporal*_
│⚙️ _${usedPrefix}on *:* off *stickers*_
│⚙️ _${usedPrefix}on *:* off *autosticker*_
│⚙️ _${usedPrefix}on *:* off *reacciones | reaction*_
│⚙️ _${usedPrefix}on *:* off *audios*_
│⚙️ _${usedPrefix}on *:* off *modocaliente | modohorny*_
│⚙️ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
│⚙️ _${usedPrefix}on *:* off *antiver | antiviewonce*_
│⚙️ _${usedPrefix}on *:* off *antieliminar | antidelete*_
│⚙️ _${usedPrefix}on *:* off *antinternacional | antifake*_
│⚙️ _${usedPrefix}on *:* off *antienlace | antilink*_
│⚙️ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
│⚙️ _${usedPrefix}on *:* off *antitiktok | antitk*_
│⚙️ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
│⚙️ _${usedPrefix}on *:* off *antitelegram | antitel*_
│⚙️ _${usedPrefix}on *:* off *antifacebook | antifb*_
│⚙️ _${usedPrefix}on *:* off *antinstagram | antig*_
│⚙️ _${usedPrefix}on *:* off *antitwitter | antitw*_
│⚙️ _${usedPrefix}on *:* off *soloprivados | pconly*_
│⚙️ _${usedPrefix}on *:* off *sologrupos | gconly*_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Descargas*  ָ࣪  ۰ . ¡! 
│🚀▹ _${usedPrefix}play | play2 *texto o link*_
│🚀▹ _${usedPrefix}play.1 *texto o link*_
│🚀▹ _${usedPrefix}play.2 *texto o link*_ 
│🚀▹ _${usedPrefix}clima *país ciudad*_
│🚀▹ _${usedPrefix}fraseromantica_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Configuración - Grupos*  ָ࣪  ۰ . ¡! 
│ *Mejora tú Grupo con MeiBot!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🌐▹ _${usedPrefix}add *numero*_
│🌐▹ _${usedPrefix}sacar | ban | kick  *@tag*_
│🌐▹ _${usedPrefix}grupo *abrir : cerrar*_
│🌐▹ _${usedPrefix}group *open : close*_
│🌐▹ _${usedPrefix}daradmin | promote *@tag*_
│🌐▹ _${usedPrefix}quitar | demote *@tag*_
│🌐▹ _${usedPrefix}banchat_
│🌐▹ _${usedPrefix}unbanchat_
│🌐▹ _${usedPrefix}banuser *@tag*_
│🌐▹ _${usedPrefix}unbanuser *@tag*_
│🌐▹ _${usedPrefix}admins *texto*_
│🌐▹ _${usedPrefix}invocar *texto*_
│🌐▹ _${usedPrefix}tagall *texto*_
│🌐▹ _${usedPrefix}hidetag *texto*_
│🌐▹ _${usedPrefix}infogrupo | infogroup_
│🌐▹ _${usedPrefix}grupotiempo | grouptime *Cantidad*_
│🌐▹ _${usedPrefix}advertencia *@tag*_
│🌐▹ _${usedPrefix}deladvertencia *@tag*_
│🌐▹ _${usedPrefix}delwarn *@tag*_
│🌐▹ _${usedPrefix}crearvoto | startvoto *texto*_
│🌐▹ _${usedPrefix}sivotar | upvote_
│🌐▹ _${usedPrefix}novotar | devote_
│🌐▹ _${usedPrefix}vervotos | cekvoto_
│🌐▹ _${usedPrefix}delvoto | deletevoto_
│🌐▹ _${usedPrefix}enlace | link_
│🌐▹ _${usedPrefix}newnombre | nuevonombre *texto*_
│🌐▹ _${usedPrefix}newdesc | descripcion *texto*_
│🌐▹ _${usedPrefix}setwelcome | bienvenida *texto*_
│🌐▹ _${usedPrefix}setbye | despedida *texto*_
│🌐▹ _${usedPrefix}nuevoenlace | resetlink_
│🌐▹ _${usedPrefix}on_
│🌐▹ _${usedPrefix}off_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫*Parejas*  ָ࣪  ۰ . ¡! 
│ *Declarate con alguien*
│ *para que sean Parejas!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│❤️▹ _${usedPrefix}listaparejas | listship_
│❤️▹ _${usedPrefix}mipareja | mylove_
│❤️▹ _${usedPrefix}pareja | couple *@tag*_
│❤️▹ _${usedPrefix}aceptar | accept *@tag*_
│❤️▹ _${usedPrefix}rechazar | decline *@tag*_
│❤️▹ _${usedPrefix}terminar | finish *@tag*_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Stickers - Enlaces*  ָ࣪  ۰ . ¡! 
│ *Convierte sticker en imagen!!*
│ *Crea enlace de archivos!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🛰️▹ _${usedPrefix}toimg | img | jpg *sticker*_
│🛰️▹ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
│🛰️▹ _${usedPrefix}tovn | vn *video o audio*_
│🛰️▹ _${usedPrefix}tovideo *audio*_
│🛰️▹ _${usedPrefix}tourl *video, imagen*_
│🛰️▹ _${usedPrefix}toenlace  *video, imagen o audio*_
│🛰️▹ _${usedPrefix}tts es *texto*_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Random - Anime*  ָ࣪  ۰ . ¡! 
│🧩▹ _${usedPrefix}chica_
│🧩▹ _${usedPrefix}chico_
│🧩▹ _${usedPrefix}cristianoronaldo_
│🧩▹ _${usedPrefix}messi_
│🧩▹ _${usedPrefix}meme_
│🧩▹ _${usedPrefix}meme2_
│🧩▹ _${usedPrefix}itzy_
│🧩▹ _${usedPrefix}blackpink_
│🧩▹ _${usedPrefix}kpop *blackpink : exo : bts*_
│🧩▹ _${usedPrefix}lolivid_
│🧩▹ _${usedPrefix}loli_
│🧩▹ _${usedPrefix}navidad_
│🧩▹ _${usedPrefix}ppcouple_
│🧩▹ _${usedPrefix}neko_
│🧩▹ _${usedPrefix}waifu_
│🧩▹ _${usedPrefix}akira_
│🧩▹ _${usedPrefix}akiyama_
│🧩▹ _${usedPrefix}anna_
│🧩▹ _${usedPrefix}asuna_
│🧩▹ _${usedPrefix}ayuzawa_
│🧩▹ _${usedPrefix}boruto_
│🧩▹ _${usedPrefix}chiho_
│🧩▹ _${usedPrefix}chitoge_
│🧩▹ _${usedPrefix}deidara_
│🧩▹ _${usedPrefix}erza_
│🧩▹ _${usedPrefix}elaina_
│🧩▹ _${usedPrefix}eba_
│🧩▹ _${usedPrefix}emilia_
│🧩▹ _${usedPrefix}hestia_
│🧩▹ _${usedPrefix}hinata_
│🧩▹ _${usedPrefix}inori_
│🧩▹ _${usedPrefix}isuzu_
│🧩▹ _${usedPrefix}itachi_
│🧩▹ _${usedPrefix}itori_
│🧩▹ _${usedPrefix}kaga_
│🧩▹ _${usedPrefix}kagura_
│🧩▹ _${usedPrefix}kaori_
│🧩▹ _${usedPrefix}keneki_
│🧩▹ _${usedPrefix}kotori_
│🧩▹ _${usedPrefix}kurumi_
│🧩▹ _${usedPrefix}madara_
│🧩▹ _${usedPrefix}mikasa_
│🧩▹ _${usedPrefix}miku_
│🧩▹ _${usedPrefix}minato_
│🧩▹ _${usedPrefix}naruto_
│🧩▹ _${usedPrefix}nezuko_
│🧩▹ _${usedPrefix}sagiri_
│🧩▹ _${usedPrefix}sasuke_
│🧩▹ _${usedPrefix}sakura_
│🧩▹ _${usedPrefix}cosplay_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Modificación - Audios*  ָ࣪  ۰ . ¡! 
│ *Realiza Modificaciones*
│ *al Audio o Nota de Voz!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🧰▹ _${usedPrefix}bass_
│🧰▹ _${usedPrefix}blown_
│🧰▹ _${usedPrefix}deep_
│🧰▹ _${usedPrefix}earrape_
│🧰▹ _${usedPrefix}fast_
│🧰▹ _${usedPrefix}fat_
│🧰▹ _${usedPrefix}nightcore_
│🧰▹ _${usedPrefix}reverse_
│🧰▹ _${usedPrefix}robot_
│🧰▹ _${usedPrefix}slow_
│🧰▹ _${usedPrefix}smooth_
│🧰▹ _${usedPrefix}tupai_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Audios*  ָ࣪  ۰ . ¡! 
│ *Visita el Menú de Audios!!*
│ *Disfruta de una Gran Variedad*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🔊▹ _${usedPrefix}audios_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Función RPG*  ָ࣪  ۰ . ¡! 
│ *Compra, Adquiere Recuersos*
│ *Mejora Tú Nivel y Rango!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🪅 _${usedPrefix}botemporal *enlace* *cantidad*_
│🪅 _${usedPrefix}addbot *enlace* *cantidad*_
│⚗️▹ _${usedPrefix}pase premium_
│⚗️▹ _${usedPrefix}pass premium_
│⚗️▹ _${usedPrefix}listapremium | listprem_
│⚗️▹ _${usedPrefix}transfer *tipo cantidad @tag*_
│⚗️▹ _${usedPrefix}dar *tipo cantidad @tag*_
│⚗️▹ _${usedPrefix}enviar *tipo cantidad @tag*_
│⚗️▹ _${usedPrefix}balance_
│⚗️▹ _${usedPrefix}cartera | wallet_
│⚗️▹ _${usedPrefix}experiencia | exp_
│⚗️▹ _${usedPrefix}top | lb | leaderboard_
│⚗️▹ _${usedPrefix}nivel | level | lvl_
│⚗️▹ _${usedPrefix}rol | rango_
│⚗️▹ _${usedPrefix}inventario | inventory_
│⚗️▹ _${usedPrefix}aventura | adventure_
│⚗️▹ _${usedPrefix}caza | cazar | hunt_
│⚗️▹ _${usedPrefix}pescar | fishing_
│⚗️▹ _${usedPrefix}animales_
│⚗️▹ _${usedPrefix}alimentos_
│⚗️▹ _${usedPrefix}curar | heal_
│⚗️▹ _${usedPrefix}buy_
│⚗️▹ _${usedPrefix}sell_
│⚗️▹ _${usedPrefix}verificar | registrar_
│⚗️▹ _${usedPrefix}perfil | profile_
│⚗️▹ _${usedPrefix}myns_
│⚗️▹ _${usedPrefix}unreg *numero de serie*_
│⚗️▹ _${usedPrefix}minardiamantes | minargemas_
│⚗️▹ _${usedPrefix}minargatacoins | minarcoins_
│⚗️▹ _${usedPrefix}minarexperiencia | minarexp_
│⚗️▹ _${usedPrefix}minar *:* minar2 *:* minar3_
│⚗️▹ _${usedPrefix}reclamar | regalo | claim_
│⚗️▹ _${usedPrefix}cadahora | hourly_
│⚗️▹ _${usedPrefix}cadasemana | semanal | weekly_
│⚗️▹ _${usedPrefix}cadames | mes | monthly_
│⚗️▹ _${usedPrefix}cofre | abrircofre | coffer_
│⚗️▹ _${usedPrefix}trabajar | work_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Stickers*  ָ࣪  ۰ . ¡! 
│ *Realiza stickers o crea*
│ *stickers con filtros!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│🎐 _${usedPrefix}sticker | s *imagen o video*_
│🎐 _${usedPrefix}sticker | s *url de tipo jpg*_
│🎐 _${usedPrefix}emojimix *😺+😆*_
│🎐 _${usedPrefix}scircle | círculo *imagen*_
│🎐 _${usedPrefix}semoji | emoji *tipo emoji*_
│🎐 _${usedPrefix}attp *texto*_
│🎐 _${usedPrefix}attp2 *texto*_
│🎐 _${usedPrefix}ttp *texto*_
│🎐 _${usedPrefix}ttp2 *texto*_
│🎐 _${usedPrefix}ttp3 *texto*_
│🎐 _${usedPrefix}ttp4 *texto*_
│🎐 _${usedPrefix}ttp5 *texto*_
│🎐 _${usedPrefix}ttp6 *texto*_
│🎐 _${usedPrefix}dado_
│🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
│🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
│🎐 _${usedPrefix}cs *:* cs2_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Modificar Stickers*  ָ࣪  ۰ . ¡! 
│ *Personaliza la información del Sticker!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│💡 _${usedPrefix}wm *packname|author*_
│💡 _${usedPrefix}wm *texto1|texto2*_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Stickers Dinámicos*  ָ࣪  ۰ . ¡! 
│ *Realiza acciones con Stickers*
│ *Etiquetando a alguien!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│⛱️ _${usedPrefix}palmaditas | pat *@tag*_
│⛱️ _${usedPrefix}bofetada | slap *@tag*_
│⛱️ _${usedPrefix}golpear *@tag*_
│⛱️ _${usedPrefix}besar | kiss *@tag*_
│⛱️ _${usedPrefix}alimentar | food *@tag*_
╰───────────────๑🫧๑

╭┈┈  ৎ 👑 ׂ ⬫ *Menú Owner*  ָ࣪  ۰ . ¡! 
│ *Comandos solo para Propietario/a!!*
│┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
│💎 _${usedPrefix}join *enlace*_
│💎 _${usedPrefix}unete *enlace*_
│💎▹ _${usedPrefix}dardiamantes *cantidad*_
│💎▹ _${usedPrefix}darxp *cantidad*_
│💎▹ _${usedPrefix}dargatacoins *cantidad*_
│💎▹ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
│💎▹ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
│💎▹ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
│💎▹ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
│💎▹ _${usedPrefix}idioma | language_
│💎▹ _${usedPrefix}cajafuerte_
│💎▹ _${usedPrefix}comunicar | broadcastall | bc *texto*_
│💎▹ _${usedPrefix}broadcastchats | bcc *texto*_
│💎▹ _${usedPrefix}comunicarpv *texto*_
│💎▹ _${usedPrefix}broadcastgc *texto*_
│💎▹ _${usedPrefix}comunicargrupos *texto*_
│💎▹ _${usedPrefix}borrartmp | cleartmp_
│💎▹ _${usedPrefix}delexp *@tag*_
│💎▹ _${usedPrefix}delgatacoins *@tag*_
│💎▹ _${usedPrefix}deldiamantes *@tag*_
│💎▹ _${usedPrefix}reiniciar | restart_
│💎▹ _${usedPrefix}ctualizar | update_
│💎▹ _${usedPrefix}addprem | +prem *@tag*_
│💎▹ _${usedPrefix}delprem | -prem *@tag*_
│💎▹ _${usedPrefix}listapremium | listprem_
│💎▹ _${usedPrefix}añadirdiamantes *@tag cantidad*_
│💎▹ _${usedPrefix}añadirxp *@tag cantidad*_
│💎▹ _${usedPrefix}añadirgatacoins *@tag cantidad*_
╰───────────────๑🫧๑`.trim()
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  

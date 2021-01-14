let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`┌━━━━━ *DONATE* ━━━━━
┃━ *OVO* : 0822-2831-7940
┃━ *DANA* : 0822-2831-7940
┃━ *GOPAY* : 0822-2831-7940

*THANKS FOR DONATE*`, m)
}
handler.command = /^(donate)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
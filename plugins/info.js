let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*TLN-BOT INFORMATION*
>> *Bot dikembangkan menggunakan javascript*
>> *Dikembangkan oleh UPLUK*
>> *Ketik _.menu_ untuk melihat perintah*

*DEV INFORMATION*
>> *Instagram :* https://instagram.com/divarvian
>> *YouTube :* https://youtube.com/HIBURANDIPA
>> *WhatsApp :* https://wa.me/6282228317940
`, m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
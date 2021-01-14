let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
  } catch (e) {
    if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
*Hi, ${name}, Apa kabar?*

⏰ _${time}_
📆 _${week} ${weton}, ${date}_

Saya adalah bot yang dikembangkan oleh

*╔╦╦═╦╗╔╦╦╦╗*
*║║║╬║║║║║╔╝*
*║║║╔╣╚╣║║╚╗*
*╚═╩╝╚═╩═╩╩╝*
${more.repeat(1000)}
*BOT INFO*
- ${_p}menu
- ${_p}help
- ${_p}donate
- ${_p}info

*CREATE MENU*
- ${_p}stiker / sticker
>> Untuk merubah gambar menjadi sticker
- ${_p}toimg
>> Untuk merubah sticker menjadi gambar

*FUN MENU*
- ${_p}bucin
>> Random quotes BUCIN
- ${_p}readmore
>> Untuk menyembunyikan sebagian tulisan
>> Contoh : _.readmore Gan|teng_

*SITE MENU*
- ${_p}ssweb / sswebf
>> Untuk screenshoot web
>> Contoh : _.ssweb https://instagram.com_
- ${_p}google / googlef
>> Untuk pencarian google
>> Contoh : _.google Anak Ayam_

*GROUP MENU*
- ${_p}add
>> Untuk menambahkan anggota
>> Contoh : _.add 628xxx,628xxx_
- ${_p}kick
>> Untuk mengeluarkan anggota
>> Contoh : _.kick @member_
- ${_p}promote
>> Untuk menjadikan admin
>> Contoh : _.promote @member_
- ${_p}demote
>> Untuk menghapus admin
>> Contoh : _.demote @admin_
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

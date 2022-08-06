const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.namabot = ['CocoBot-MD']
global.namaowner = ['Cocopie']
global.owner = ['628992029499']
global.premium = ['628992029499']
global.packname = 'Created By CocoBot'
global.author = '©Cocopie'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Success !!',
    admin: '❌Command Rejected❌\n\nOnly Can Be Used By Admin',
    botAdmin: 'Jadikan Bot Admin Untuk Mengakses Fitur Tersebut',
    owner: '❌Command Rejected❌\n\nOnly Can Be Used By Owner',
    group: '❌Command Rejected❌\n\nOnly Can Be Used In a Group',
    private: '❌Command Rejected❌\n\nOnly Can Be Used At Private Message',
    bot: '❌Command Rejected❌\n\nOnly For Bot',
    wait: 'Proccess...',
    endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

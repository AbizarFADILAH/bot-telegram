//*kasi NAMA KU LAH ASU
//*PEMILIHAN AJG
//*RIZKY FADILAH PUNYA APA KAU
//*ANAK ANJING


const {
	WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange, 
} = require('@adiwajshing/baileys')
const {
	listzodiak,
	aries,
	taurus,
	gemini,
	cancer,
	Leo,
	Virgo,
	Libra,
	Scorpio,
	Sagittarius,
	Capricorn,
	Aquarius,
	Pisces
} = require('./src/listzodiak')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { modapk } = require('./src/modapk')
const { bahasa } = require('./src/bahasa')
const { listmenu } = require('./src/listmenu')
const { virtex } = require('./src/virtex')
const { vipmenu } = require('./src/vipmenu')
const { wibu } = require('./src/wibu')
const { snk } = require('./src/snk')
const { adminmenu } = require('./src/adminmenu')
const { toxic } = require('./src/toxic')
const { animesaran } = require('./src/animesaran')
const { tnc } = require('./src/tnc')
const { kodenuklir2 } = require('./src/kodenuklir2')
const { ownercommand } = require('./src/ownercommand')
const { rules } = require('./src/rules')
const { nekopoi } = require('./src/nekopoi')
const { ownermenu } = require('./src/ownermenu')
const { addfoto } = require('./src/addfoto')
const { nsfwmenu } = require('./src/nsfwmenu')
const { kerangmenu } = require('./src/kerangmenu')
const { listsurah } = require('./src/listsurah')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { cekvip } = require('./src/cekvip')
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { randompict } = require('./src/randompict')
const { edukasi } = require('./src/edukasi')
const { daftatvip } = require('./src/daftarvip')
const { funmenu } = require('./src/funmenu')
const { mediamenu } = require('./src/mediamenu')
const { msgFilter } = require('./tools/msgfilter')
const { othermenu } = require('./src/othermenu')
const { animemenu } = require('./src/animemenu')
const { kodenuklir } = require('./src/kodenuklir')
const { gamemenu } = require('./src/gamemenu')
const { makermenu } = require('./src/makermenu')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
const moment = require('moment-timezone')
const { spawn, exec, execSync } = require("child_process")

const translate = require('translatte')
const kagApi = require('@kagchi/kag-api')
const cheerio = require('cheerio')
const request = require('request')
const Math_js = require('mathjs')
const math = require('mathjs')
const axios = require('axios')
const fetch = require('node-fetch')
const tikmek = require('tiktok-scraper')
const brainly = require('brainly-scraper');
const lolis = require('lolis.life')
const emojiUnicode = require('emoji-unicode')
const ytdl = require('ytdl-core')
const loli = new lolis()
const ffmpeg = require('fluent-ffmpeg')
const isNumber = require('is-number');
const PhoneNumber = require('awesome-phonenumber')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const prem = JSON.parse(fs.readFileSync('./src/prem.json'))
const anime = JSON.parse(fs.readFileSync('./src/anime.json'))
const auto = JSON.parse(fs.readFileSync('./database/group/auto.json')) 
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const adminbotnumber = JSON.parse(fs.readFileSync('./src/admin.json'))
const sayrandom = JSON.parse(fs.readFileSync('./src/say.json'))
const det = JSON.parse(fs.readFileSync('./src/det.json'))
const listrandom = JSON.parse(fs.readFileSync('./src/list.json'))
const bacotrandom = JSON.parse(fs.readFileSync('./src/bacot.json'))
const bannned = JSON.parse(fs.readFileSync('./src/banned2.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const premium = JSON.parse(fs.readFileSync('./src/vip.json'))
const jodoh = JSON.parse(fs.readFileSync('./src/jodoh.json'))
const anlink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const user = JSON.parse(fs.readFileSync('./src/user.json'))
const dug = JSON.parse(fs.readFileSync('./src/dug.json'))
const toBase64 = (gambar) => new Promise(async (resolve, reject) => {
			imageToBase64(gambar)
					.then(
					(ress) => {
					resolve(ress)
					console.log(ress)
			})
		})
ban = []
limitawal = '16'
limitgift = '4'
salahlimit = '6'
hitlimit = '0'
memberlimit = '200'
cr = '*𝙍𝙄𝙕𝙆𝙔 𝘽𝙊𝙏*'
vz = '*Terima Kasih Sudah Daftar Di iky BOT*'
const vcard = 'BEGIN:VCARD\n' // ANAK ANJING MAU NGAPAIN?
            + 'VERSION:3.0\n' // NGAPAIN LAGI KALO GA MAU NUMPANG NAMA DOANG XIXIXIXI
            + 'FN: Rizky\n' // MENDING LU TOBAT SU!
            + 'ORG:Creator Mhankbarbar;\n' // KASIH CREDITS GUA SU!!!
            + 'TEL;type=CELL;type=VOICE;waid=6282387804410:+62 823-8780-4410\n' // JANGAN KEK BABI SU
            + 'END:VCARD'
prefix = '/'
publik = false
baterai = 100
loka = `{degreesLatitude: 24.121231, degreesLongitude: 55.1121221}, MessageType.location)`
thanks = ["6285746657092@s.whatsapp.net","6281326874095@s.whatsapp.net","6281215199447@s.whatsapp.net","62815150192849@s.whatsapp.net","6282198571732@s.whatsapp.net","6285892766102@s.whatsapp.net"]
blocked = []
numbernye = '0'
fake = '*_Kurumi Chan  _*'
numbernye = '0'
targetprivate = '628882379922'
ghoibsu = 'tes'
myteks = 'okeh nyala'
const d = new Date
			const locale = 'id'
    const gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    const week = d.toLocaleDateString(locale, { weekday: 'long' })
    const date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const laims = JSON.parse(fs.readFileSync('./database/group/laim.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _dolaran = JSON.parse(fs.readFileSync('./database/group/dolaran.json'))
const _dolar = JSON.parse(fs.readFileSync('./database/user/dolar.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _gif = JSON.parse(fs.readFileSync('./database/user/gif.json'))
const salah = JSON.parse(fs.readFileSync('./database/user/salah.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const bann = JSON.parse(fs.readFileSync('./src/ban.json'))
const getname = JSON.parse(fs.readFileSync('./src/name.json'))
const badword = JSON.parse(fs.readFileSync('./src/badword.json'))
const hit = JSON.parse(fs.readFileSync('./src/hit.json'))
const yes = JSON.parse(fs.readFileSync('./src/yes.json'))
const yeh = JSON.parse(fs.readFileSync('./src/yes.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/

const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
        const confirmxp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp -= amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
        

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        const getDolarExp = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].xp
            }
        }

        const getDolaranLevel = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].dolar
            }
        }
        const dolarCheck = (sender) => {
                let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].dolar
            }
        }

        const getDolaranId = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].jid
            }
        }

        const addDolaranXp = (userId, amount) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].xp += amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }

        const addDolaranLevel = (userId, amount) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].dolar += amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }
        const confirmed = (sender, amount) => {
                let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].dolar -= amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }

        const addDolaranId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _dolar.push(obj)
            fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
 }
        const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        const buylimit = (sender, amount) => {
                let position = false
            Object.keys(_gif).forEach((i) => {
                if (_gif[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _gif[position].limit -= amount
                fs.writeFileSync('./database/user/gif.json', JSON.stringify(_gif))
            }
        }
        const giftlimit = (mentioned, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === mentioned) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        const confirmXp = (sender, amount) => {
                let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
        const addXpLev = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
        const checkXpuser = (sender) => {
                let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
    const bayarHit = (sender, amount) => {
                let position = false
            Object.keys(hit).forEach((i) => {
                if (hit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                hit[position].hit -= amount
                fs.writeFileSync('./src/hit', JSON.stringify(hit))
            }
        }
        const gaerror = (sender) => {
                let found = false
                    for (let lmt of hit) {
                        if (lmt.id === sender) {
                            hitLimit = hitlimit - lmt.hit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, hit: 1 }
                        hit.push(obj)
                        fs.writeFileSync('./src/hit.json', JSON.stringify(hit))
                    }
                                }
        
             
        
        
 const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]


function mekun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const iky = new WAConnection()
	iky.logger.level = 'warn'
	console.log(banner.string)
	iky.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	iky.on('credentials-updated', () => {
		fs.writeFileSync('./BarBar.json', JSON.stringify(iky.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./BarBar.json') && iky.loadAuthInfo('./BarBar.json')
	iky.on('connecting', () => {
		start('2', 'Connecting...')
	})
	iky.on('open', () => {
		success('2', 'Connected')
	})
	await iky.connect({timeoutMs: 30*1000})
					iky.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		function getJeneng (jid)  {
  			let v = jid === iky.user.jid ? iky.user : iky.contacts[jid] || { notify: jid.replace(/@.+/, '') }
  			let PhoneNumber = jid.split('@')[0]
  			return v.notify || '+'+PhoneNumber
 	 			}
		const memJid = anu.participants[0]
		const pushnem = getJeneng(memJid)
		try {
			const mdata = await iky.groupMetadata(anu.jid)
			const iniGc = anu.jid.endsWith('@g.us')
			const jumlahMem = iniGc ? mdata.participants : ''
			if (anu.action == 'add') {
				 exec(`magick './database/gambar/welcome.jpg' -gravity west -fill '#ffffff' -font './src/font/Dimbo Italic.ttf' -size 1280x710 -pointsize 65 -interline-spacing 7.5 -annotate +70-45 '${pushnem}' -fill '#ffffff' -pointsize 65 -interline-spacing 7.5 -annotate +70+63 '# ${user.length}' -fill '#ffffff' -pointsize 65 -interline-spacing 7.5 -annotate +70+160 'Welcome To ${mdata.subject}' -fill '#ffffff' -font './src/font/Panton-BlackitalicCaps.otf' -pointsize 25 -interline-spacing 7.5 -annotate +35+260 '${jumlahMem.length} th members!' '${ppimg}' -resize %[fx:t?u.w*0.5:u.w]x%[fx:t?u.h*0.5:u.h] -gravity center -geometry +430+60 -composite 'database/tmp/welkom.jpg'`)
					.on('error', () => reply('Gagal Untuk Mengambil Data Welcome'))
					.on('exit', () => {
					iky.sendMessage(mdata.id, fs.readFileSync('database/tmp/welkom.jpg'), MessageType.image, {caption: `Selamat Datang @${memJid.split('@')[0]}👋`, contextInfo: { mentionedJid: [memJid] }})
					})
			} else if (anu.action == 'remove') {
				spawn('convert', [
						'./database/gambar/sayonara.jpg',
						'-gravity',
						'Center',
						'-fill',
						'database/gambar/white.png',
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-size',
						'2540x1438',
						'-pointsize',
						'65',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+170-85',
						pushnem,
						'-fill',
						'#ffffff',
						'-pointsize',
						'65',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+170+50',
						'# '+user.length,
						'-fill',
						'#ffffff',
						'-pointsize',
						'65',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+200+170',
						'Leave In '+mdata.subject,
						'-fill',
						'database/gambar/black.png',
						'-font',
						'./src/font/Panton-BlackitalicCaps.otf',
						'-pointsize',
						'50',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+490+295',
						'Kurumi Chan  ',
						'./database/tmp/leave.jpg'
						])
						setTimeout( () => {
						ppimg = fs.readFileSync('database/tmp/leave.jpg')
						num = anu.participants[0]
				teks = `Yah Anak pungut keluar @${num.split('@')[0]}👋`
				iky.sendMessage(mdata.id, ppimg, MessageType.image,{caption:teks ,contextInfo: {"mentionedJid": [num]}})
						}, 1000)
	      } else  if (anu.action == 'promote') {
	            prom = anu.participants[0]
	            tec = `PROMOTE TERDETEKSI\n\n@${prom.split('@')[0]} Selamat Anda Menjadi Admin Digurp *${mdata.subject}*`
	            iky.sendMessage(mdata.id, tec, MessageType.text, {contextInfo: {"mentionedJid": [prom]}})
	        } else if (anu.action == 'demote') {
	            prom = anu.participants[0]
	            let tec = `DEMOTE TERDETEKSI\n\n@${prom.split('@')[0]} MAMPUS DIHAPUS JADI ADMIN DIGRUP *${mdata.subject}*`
	            iky.sendMessage(mdata.id, tec, MessageType.text, {contextInfo: {"mentionedJid": [prom]}})
	        
	}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
	
	iky.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	iky.on('CB:Call', async (nganu) => {
	jid = nganu ? nganu.from.replace('@c.us', '@s.whatsapp.net') : ''
	iky.sendMessage(jid, 'jangan telfon asu', MessageType.text)
	})
	iky.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		console.log('battery level: ' + batterylevel+'%')
	})
	
	iky.on('message-update', async (hurtz) => {
	try {
		const anti = (teks) => {
		iky.sendMessage(from, teks, MessageType.text, {contextInfo: { mentionedJid: [sender] },quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
								"fileLength": "43344",
								"height": 640,
								"width": 640,
								"mediaKey": "OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
								"mediaKeyTimestamp": "1612168223",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k="
		},
							"productId": "3656809567780692",
							"title": "@rizkyfadilah8",
							"currencyCode": "IDR",
							"priceAmount1000": "999999999",
							"productImageCount": 1
						},
						"businessOwnerJid": "6285364937006@s.whatsapp.net"}}}})
						}
						const dele = (teks,tipe) => {
		iky.sendMessage(from, teks, tipe, {contextInfo: { mentionedJid: [sender] },quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
								"fileLength": "43344",
								"height": 640,
								"width": 640,
								"mediaKey": "OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
								"mediaKeyTimestamp": "1612168223",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k="
		},
							"productId": "3656809567780692",
							"title": "@rizkyfadilah8",
							"currencyCode": "IDR",
							"priceAmount1000": "999999999",
							"productImageCount": 1
						},
						"businessOwnerJid": "6285364937006@s.whatsapp.net"}}}})
						}
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = hurtz.key.fromMe ? iky.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = hurtz.key.remoteJid
			const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = hurtz.key.id
			const conts = hurtz.key.fromMe ? iky.user.jid : iky.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = hurtz.key.fromMe ? iky.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `「 *ANTI-DELETE* 」

*Nama :* ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
*Tipe :* Text
*Waktu :* ${time}
*Hari :* ${week},${date}
*Pesan:* ${body ? body : '-'}
`
				anti(strConversation)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await iky.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `「 *ANTI-DELETE* 」

*Nama :* ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
*Tipe :* Sticker
*Waktu :* ${time}
*Hari :* ${week},${date}
`

				const buff = fs.readFileSync(savedFilename)
				anti(strConversation)
				dele(buff, MessageType.sticker)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)
} else if (int.type == 'audioMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const bro = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await iky.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `「 *ANTI-DELETE* 」

*Nama :* ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
*Tipe :* Audio
*Waktu :* ${time}
*Hari :* ${week},${date}
`

				const buff = fs.readFileSync(savedFilename)
				anti(strConversation)
				dele( buff, MessageType.audio)
				// console.log(stdout)
				fs.unlinkSync(savedFilename) 

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await iky.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `「 *ANTI-DELETE* 」

*Nama :* ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
*Tipe :* Image
*Waktu :* ${time}
*Hari :* ${week},${date}
*Pesan :* ${body ? body : '-'}\`\`\`
`
				iky.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

iky.on('chat-update', async (chats) => {
		try {
           if (!chats.hasNewMessage) return
           mek = JSON.parse(JSON.stringify(chats)).messages[0]
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'jKUeppeFD7Kgb8f4ehXl'
			const lolhuman = '5e78b9ed4b03ee8ca1c655a6'
            const apikey = 'jKUeppeFD7Kgb8f4ehXl'
            const vhtear = 'iky123879'
            const ikikey = 'itsmeiky633'
            const vkey = 'AW62938KK46292gJ73639h'
            const api_key = 'Kxih9M-Zd6ebZ-snClIh-Uoe5ln-SM2fvF'
            const iki = '@s.whatsapp.net'
			const insom = from.endsWith('@g.us')
			const botiky = insom ? mek.participant : mek.key.remoteJid
			pushname3 = iky.contacts[botiky] != undefined ? iky.contacts[botiky].vname || iky.contacts[botiky].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').format('DD,MMMM,YYYY')
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').format('DD:MMMM:YYYY')
			const timo = moment.tz('Asia/Jakarta').add(13, 'days').format('DD:MMMM:YYYY')
		
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const taukah = mek.message.conversation
			

			mess = {
				wait: 'Otw Ngirim ngab..🏃',
				asik: 'Otw Ngirim ngab..🏃',
				levelon: '❬ 👍 ❭ *enable leveling*',
				leveloff: ' ❬ 👎 ❭  *disable leveling*',
				levelnoton: '❬ 👎 ❭ *leveling not aktif*',
				levelnol: '*LEVEL KAMU MASIH 0 BERLUM BISA MEMBUKA FITUR HARAP HUBUNGI OWNER*',
				success: '✔️ Berhasil ✔️',
				error: {
					
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' [❗] Link yang anda kirim tidak valid!'
				},
				only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					public: '[❗] Jika Ingin Menggunakan Bot Harap Masuk Ke Dalam Grup Rizky, ketik /rizkygroup!\nJika Ingin Sewa Bot atau Bikin Bot Harap Ketik */iklan*! ',
					premium: '[❗] PERINTAH INI KHUSUS USER *PREMIUM*',
					benned: 'Lu keban ngentod makanya jangan ngegay mulu🗿🤌🏻',
					ownerG: '[❗] Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '[❗] Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					userB: `*Nomor anda belum terverifikasi*\n*Ketik @verify untuk memverifikasi*`,
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' [❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
				}
			}
const koin = ['http://bit.ly/Koin1','http://bit.ly/Koin5','https://i.ibb.co/q7kdBjm/be27e6f849da.jpg','https://i.ibb.co/BCxNPD5/a42ef753a321.jpg']
			const botNumber = iky.user.jid
			
			const adminbotnumber = ["6285364937006@s.whatsapp.net"]
			const frendsowner = ["6282387804410@s.whatsapp.net"]
			const vip = ["62895636761912@s.whatsapp.net","@6285807107404 @6289655478810 @6283172209538","6285802306224@s.whatsapp.net","@6282198571732","6285659553847@s.whatsapp.net","6285807107404@s.whatsapp.net","6285770269605@s.whatsapp.net","6282387804410@s.whatsapp.net","6282255123081@s.whatsapp.net","6282198571732@s.whatsapp.net","6285795345436@s.whatsapp.net","6285332457146@s.whatsapp.net","6283872215294@s.whatsapp.net","62895326120617@s.whatsapp.net","6285659553847@s.whatsapp.net","6285780921489@s.whatsapp.net"]
			const tescuk = ["0@s.whatsapp.net"]
			const ownerNumber = ["6282387804410@s.whatsapp.net"] // replace this with your number
			const groupall = iky.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
			const chatall = iky.chats.array.filter(v => v.jid.endsWith('@s.whatsapp.net')).map(v => v.jid)
			const tescuy = '6282265118646@s.whatsapp.net'
			const isGroup = from.endsWith('@g.us') 
			const isPrivate = from.endsWith('@s.whatsapp.net') 
			const totalchat = await iky.chats.all()
			const totaluser = premium
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await iky.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const yto = getLevelingLevel(sender)
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const totalMembers = `${groupMembers.length}`
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isAuto = isGroup ? auto.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const levelRole = getLevelingLevel(sender)
        var role = 'Warior V'
        if (levelRole <= 3) {
            role = 'Warior IV'
        } else if (levelRole <= 5) {
            role = 'Warior III'
        } else if (levelRole <= 7) {
            role = 'Warior II'
        } else if (levelRole <= 9) {
            role = 'Warior I'
        } else if (levelRole <= 10) {
            role = 'Elite V'
        } else if (levelRole <= 11) {
            role = 'Elite IV'
        } else if (levelRole <= 12) {
            role = 'Elite III'
        } else if (levelRole <= 13) {
            role = 'Elite II'
        } else if (levelRole <= 13) {
            role = 'Elite I'
        } else if (levelRole <= 16) {
            role = 'Master V'
        } else if (levelRole <= 17) {
            role = 'Master IV'
        } else if (levelRole <= 19) {
            role = 'Master III'
        } else if (levelRole <= 20) {
            role = 'Master II'
        } else if (levelRole <= 21) {
            role = 'Master I'
        } else if (levelRole <= 22) {
            role = 'GrandMaster V'
        } else if (levelRole <= 24) {
            role = 'GrandMaster IV'
        } else if (levelRole <= 25) {
            role = 'GrandMaster III'
        } else if (levelRole <= 26) {
            role = 'GrandMaster II'
        } else if (levelRole <= 27) {
            role = 'GrandMaster I'
            } else if (levelRole <= 28) {
            role = 'Epic V'
        } else if (levelRole <= 29) {
            role = 'Epic IV'
        } else if (levelRole <= 30) {
            role = 'Epic III'
        } else if (levelRole <= 31) {
            role = 'Epic II'
        } else if (levelRole <= 32) {
            role = 'Epic I'
        } else if (levelRole <= 33) {
            role = 'Legend V'
        } else if (levelRole <= 34) {
            role = 'Legend IV'
        } else if (levelRole <= 35) {
            role = 'Legend III'
        } else if (levelRole <= 37) {
            role = 'Legend II'
        } else if (levelRole <= 39) {
            role = 'Legend I'
        } else if (levelRole <= 41) {
            role = 'Myhthic V'
        } else if (levelRole <= 42) {
            role = 'Myhthic IV'
        } else if (levelRole <= 44) {
            role = 'Myhthic III'
        } else if (levelRole <= 45) {
            role = 'Myhthic II'
        } else if (levelRole <= 47) {
            role = 'Myhthic I'
        } else if (levelRole <= 50) {
            role = 'Myhthic Glory'
        }
        const q = args.join(' ')
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const isPublic = isGroup ? public.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isAntilink = isGroup ? anlink.includes(from) : false
			const isAntiBadword = isGroup ? badword.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isYes = isGroup ? yes.includes(from) : false
			const isBan = isGroup ? bann.includes(from) : false
			const isUser = user.includes(sender)
			const isDug = dug.includes(sender)
			const isSetuju = yeh.includes(sender)
			const getpame = getname.includes(sender)
			const isClaim = laims.includes(sender)
			
			const isJodoh = jodoh.includes(sender)
			const isPrem = prem.includes(sender)
			const isHit = hit.includes(sender)
			
			const isBanned = banned.includes(sender)
			const isBannned = bannned.includes(sender)
			const isPremium = premium.includes(sender)
			const isadminbot = adminbotnumber.includes(sender)
		
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				iky.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				iky.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? iky.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           const sendImage = (teks) => {
		    iky.sendMessage(from, teks, image, {quoted:mek})
		}
		const costum = (pesan, tipe, target, target2) => {
			iky.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			
		const sendPtt = (teks) => {
				ptt = fs.readFileSync(teks)
					iky.sendMessage(from, ptt, audio, {quoted:mek,mimetype: 'audio/mp4', ptt:true})
			}
			function getName(jid)  {
			let v = jid === iky.user.jid ? iky.user : iky.contacts[jid] || { notify: jid.replace(/@.+/, '') }
			return v.notify || jid
			}
			const isCoffee = from.endsWith('@g.us')
			const sengNgirim = isCoffee ? mek.participant : mek.key.remoteJid
			const pushname1 = getName(sengNgirim)
			
			const sendImg = (path) => {
			fs.readFileSync(path)
iky.sendMessage(from, path, MessageType.image)
}
		const sendImageFromUrl = (url, capt) => {
				    w = getBuffer(url)
					iky.sendMessage(from, w, image, { quoted: mek, caption: capt })
			}
			const sendAudioFromUrl = (url) =>  {
				buffer = getBuffer(url)
				iky.sendMessage(from, buffer, audio, {quoted: mek})
			}
			const sendStickerFromUrl = (url) => {
				ranp = getRandom('.png')
		        rano = getRandom('.webp')
		        exec(`wget ${url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				        if (err) return reply(mess.error.stick)
				        buffer = fs.readFileSync(rano)
				        replys(buffer)
				        fs.unlinkSync(rano)
		        })
		    }
		    const sendmp4AsStickerFromUrl = (url) => {
				ranp = getRandom('.mp4')
		        rano = getRandom('.webp')
		        exec(`wget ${url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				        if (err) return replyt(mess.error.stick)
				        buffer = fs.readFileSync(rano)
				        replys(buffer)
				        fs.unlinkSync(rano)
		        })
		    }
		const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍒 : 🍐',
        '🍊 : 🍋 : 🔔',
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍐 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍒 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍌',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍐 : 🍇',
        '🔔 : 🔔 : 🔔',
        '🍒 : 🍒 : 🍒',
        '🍌 : 🍌 : 🍌',
        '🍇 : 🍇 : 🍇',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍒 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍌',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍐 : 🍇',
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : ??',
        '🍇 : 🍒 : 🍐',
        '🍊 : 🍋 : 🔔',
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋'
        ]
		const lokreply = (teks) => {
iky.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: {"locationMessage": {
						"degreesLatitude": -0.3228289983920446,
						"degreesLongitude": 103.14690435151316,
						"name": "Atlantis",
						"address": "Inhil, Tembilahan, Riau",
						"url": "https://foursquare.com/v/5014b812e4b08f147cb5aad3",
						"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABkAGQDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAECAwQFBwgG/8QAOhAAAgEDAgQEAwQKAQUAAAAAAQIDAAQREiEFEzFBIlFhcQYjMhRCUoEHFTOCkaHB0eHwU3KSsbLx/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECBQQGA//EACMRAAICAQQCAgMAAAAAAAAAAAABAhEDBBIhMQUGIkEycbH/2gAMAwEAAhEDEQA/AO5/EPFrnhnG+H/ZSJeEG1lubpVUE8sPGutTjPh15x5A+laHDb17u/4xFzRJa29xEsAUDGkwRv1HXJYnfzqDhvC04fc8N13TTLbWctnGrx41IzoygnJ3CoF9eu3SnfD/AAOHgaXqW87yQ3E4lRGH7FQiqEzncAKAPTFafRldixXV7D8Vi1nnilsJ7SadYI4dJXTJGoyxJLHDHyHpVi9uJbbjXBbeGUG2unl1jSDqCxkgZO4wR2pzWStxeHiHNIMVtJb8vT11ujas57aOmO9E1mkvEeH3bSlRZvI+gLnXrTT1ztjrUtB2fJWPxLft8LXcl8yJxeOD7RbziNcSxF8ZAxjKnwkY8j3rf/XscHxBxa0vZJTFA8XJWO2d9IMYLbop7nvVbiXwnBc/DtjwqS7ZZLYZhvETrk+Iac7gg4Iz5HtWukUHD7/iXEZbpVjuXjdtYCCMKgXck75xntVbREpWkZPAeMXd6/w/zZtaXgvDLmNRq0NhO22B7etanwvfXHEvhbhs08mq8mtUkZ8BdZI36bCsngA4Qbnha2XHLO8ksftHghdWL81s9Axxj88+lXfh3hd9wy3srJr+yngtYhGgWyaORwBgePmkZ6fd6ZqWn0XbKLqSNIYCjSPQADf2qXSsWDMNUnVY+w9TUkziN/AiidlBduoX29ar4wSdyT1J71DQ7mSc0S6suO3bHlTmiLFWt1LI/QfhPcGmxoZMkELGPqc9BUscqL8tEIhbIZicMfWgGYt0Ol1eZh1Zent1ooW2lx4AjJ91tXUedFUEFxFzo9OcMDlT5EUQS8xSGGmRThl8jUtQzRnWJYscwDGOzDyqxdrazDVPciaio4pVkQsNsbMD1HvUwTw65SY4+34m9hWWmnTNJp8oZzUihm55xbIpkdv+PAzmvPHxZ8R3fHeIPPcyMkEbHlRE4EQ9vPzPv2wB3v4hhe/4DxGygxCJ7eSJRnG7KQCT+deZb+FpEliIZGPZhgg+RrneQnJJRXR9X6xgxzlPJJXJdBBdrI/yZcsp1exHeu2fov8AiWfjNlLZX0jPd2oDJKT4nTpv5kHG/cEdTk1wOws5YrjmSYUDPfOa6z+hezkbjF7ejIijtzCfIlmUj/0P8R515tJJxyqMXwdXzmKGXRSyZVUl0dglOtRONs+GQeTef++lCoNAkmyI+wHV/wDFETiKTUwyjbOP61FNcxHiD27XEb3OcBAdxncDyBx2Ndo+AJrg8xI5F/Yjw6fwN/v+71FgEEMAykEEHuDUoxAHVsPI4wUH0j3qIDAAznFAYXEODt9o8EPPj0jQ0kDXDY8tRcY9gP5k0Vvc0JsWUe9FUgtFFJncAAlj0A61kpFLEdYliwJVwd+jY7GnwNLdeIo3M6MWOy/n/apuWFYCYkuekSH/AMms+44zY8pi8+YlxpjjUqrgnHhY4DDPcHFbu1TM1TtGggVW+UOdKPvn6V9q41+lv4fFjxNeJwEaLxmMqD7sg3JwOgOc++fMV0SW84jeRw29vFlyQruISNLDdZN9l2KNg46MOtV5/hqDivCrhrrUsl5FrWLQV5Um5Vjkkkgsd8DPcZr8M+JZYOLOh47Wy0eeOWPX3+jhFjaTX15DbWsZkmlYIiDqSTgD/Nehvhbg0PAuDQ2UOGceKV8Y1uep/oPIACua/oc4ck/Gbq9dGD2sa8pepDPkZHqArD96uvXd1bxa2uZUgmjVWkDdCGJC482Ok7DJ/lXl0OHbHe+2df2PXvNmWCP4x/rH1icRkWwvgscqyCQmdbd1YfMJ1LuuSzEqQuwwAc5wBW2MMiuudLDIyMH2I7H0pDpbOuPWEG7Y3UH169u1e9HzQLuoOhkJAZkbGVJGcHHelRDJnBCoPqc9BWRxPiFzb8ZSS5E7WyA8uG1TPPJBCgk41HGSQOm3XrWw7GRIyV0IVDLHt4cjvjYmgHLMsY0wxKV/E53PrRUWdzgMfZSaKAkiiaXBJEcZ21Hv7VHdXcNpBeMhYLajM+lcv0z37YPX38qbFN9ut0uTHKgckBJMZTBxggdDt0602W2Et0s5mmVtHLkVMASqDkBtu2T08zQFW24kP1sbWW3AyWEaq3zNS7+PoPEuWG/RT1qWLhttD9qQqsscsutVYH5a5DaQc7ANkjGMVZVEMkfKhUyRJy0wMlF8t+nvUhRUOJ3y3/HH1/M//KAYhCokMS4VRhY0HQUgt1ikZppWXVvylOo+/pUnMbTpjAiTyXqfc0wADoKXRKsocGsbDhn2pOEWwtBK+uUZZmJ7fUTgdcAbeVWbq0iuhFrHzkcYcNpcqdmUPgsNt9sE4xkUs8ZYh49pF6evoadBNrIdPDIh3BHQ1dqSuPQc5Sl83bK8N7w9LlbGxIMatoBiT5UbYJ0lvM4P59auK7RyBozlztpxnUKyONGS3vLK6SK35ceAXYbls4CgDuASQACdzjfY68UxaBWhie3D52cDWR5nc49jv7VChxLhy3tmVRI4pwMhXGRjIJU430tjcDrWZwm7la4a1umUoCFVcBHQ+TY8K5H0oMnG5NaOkZJy2TsTnc+9UOM2Juil0kwjeIZcMTpKrk6jjfbuBjVgbjAoDU50o2QiJRsFABxRWTb8bszHpuZZXmTws6wkavXSM6TjscH0xiigK3CpWs+IpZTTMCGaJUCjDHTqGSegwQcLqO4LNua3F5RRXMgmDDIERypH/VVa+tILuQ3FxbtcTImGjiwvNXOykn7u52Jwe+aqcG4vHfExyzWSu7kW0EDaiEUb5P5bbDbHnQhqmR2XSMRp+FNv500AAYAwKWlVWctp0gL9TMcAVCiUIry/sl1D8R2H8aXMS9AZ2822Ufl3pJGeX9o2R+EbD+FAKRENmmdm7mMZA/vSxWaSy81ZtQxg6Bgn3pqpqViziOMHST3J8gKWSQv4V1LCBgL0z71pOiNWLxBIWsbiCIMzlTgRYLZ9yRv6Z6Vh8CmNtcfq+4Z1md2+WVBOvQGOpvYDZc4P1MS2TpSxtG3NgG/3kH3h/eo57SyvnFxKjkldDmNtBYDpqI3OPLOP5VWuLInzTLlCkg5FPkR+cyhS2d1I6Ee9TRWhO8zfur/esGinA4tI+VarDFHknQFwAT1orU1RRAJqRPTIFFUFDmYGmEcuPOTnq3vWRdJJYcUS5toWkSYBRpYklt8rjqdvpGQg3JxjNa4jJXXIeXH5n6m9hTZRHcRNbGPEMgwV3y3qcHp5jyoCO1m+02UNyE0CQatOc437nA386miXVBMX8MLAEMfxDy86wuFTw2HEZbS5jCu2EeSZwis67IFGygEHZVGwx3zjdZZZpNxqYf8Aav8Av8aAjB8ILbbb+lPWMldbnlR/ibqfYUoMcZ8GJpB94/Svt501iXbU7Fm8z29qAGKkKsalUU6ssd2NFAGTgU24kitbdri8mjt7dRkyOe2M7flU7AvcAZJPQCpYLD5jSOSgbqgPU+Z/xTeHX1rJeX1qitHPaFdfMx4lZcq4P4TuPcGp5bsnaEfvH+gqrglWWHeOCMAkKo2AH9Kr3U7+DlnEbrkMOpqhMshfmoxMmMEMdmH9Kq3fFJLWOZJrX5YkBgkZgkYGkfUxOc6tQwAT6d6tcWL5ov4H50UQNz4I5QCmtclWVlIPsQDj3orJRbxyYrebA1uuD5VNcD7MiLEcGQ4Z/vUUVQY3xBGPsT3GptUcEqEZ2dcatJPXGQOhB9aucOXHB7MDZXjVigACjKg4AHaiin0QnpCcAmiioU+S45x7iFtxfiENrMsMdgkEihY1PN1soIcsDtufpwfWo7dIz8UWlvJHHJBFe3PDkjZBpWAw8wKANhg5APkSN6KK2ZNvgPCo7eSa5ae4nltg1jCZXHhhU5A2AyfU5O1a9FFZZpBSWsST3EMzonMhdlVtAJwVORkjI7dMdKKKIFuaBeaxyw1b0UUUB//Z"}}}})
		}
		const stikreply = (teks,tipe) => {
iky.sendMessage(from, teks, tipe, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"locationMessage": {
						"degreesLatitude": -0.3228289983920446,
						"degreesLongitude": 103.14690435151316,
						"name": "Atlantis",
						"address": "Jepang, Tembilahan, Riau",
						"url": "https://foursquare.com/v/5014b812e4b08f147cb5aad3",
						"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABkAGQDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAECAwQFBwgG/8QAOhAAAgEDAgQEAwQKAQUAAAAAAQIDAAQREiEFEzFBIlFhcQYjMhRCUoEHFTOCkaHB0eHwU3KSsbLx/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECBQQGA//EACMRAAICAQQCAgMAAAAAAAAAAAABAhEDBBIhMQUGIkEycbH/2gAMAwEAAhEDEQA/AO5/EPFrnhnG+H/ZSJeEG1lubpVUE8sPGutTjPh15x5A+laHDb17u/4xFzRJa29xEsAUDGkwRv1HXJYnfzqDhvC04fc8N13TTLbWctnGrx41IzoygnJ3CoF9eu3SnfD/AAOHgaXqW87yQ3E4lRGH7FQiqEzncAKAPTFafRldixXV7D8Vi1nnilsJ7SadYI4dJXTJGoyxJLHDHyHpVi9uJbbjXBbeGUG2unl1jSDqCxkgZO4wR2pzWStxeHiHNIMVtJb8vT11ujas57aOmO9E1mkvEeH3bSlRZvI+gLnXrTT1ztjrUtB2fJWPxLft8LXcl8yJxeOD7RbziNcSxF8ZAxjKnwkY8j3rf/XscHxBxa0vZJTFA8XJWO2d9IMYLbop7nvVbiXwnBc/DtjwqS7ZZLYZhvETrk+Iac7gg4Iz5HtWukUHD7/iXEZbpVjuXjdtYCCMKgXck75xntVbREpWkZPAeMXd6/w/zZtaXgvDLmNRq0NhO22B7etanwvfXHEvhbhs08mq8mtUkZ8BdZI36bCsngA4Qbnha2XHLO8ksftHghdWL81s9Axxj88+lXfh3hd9wy3srJr+yngtYhGgWyaORwBgePmkZ6fd6ZqWn0XbKLqSNIYCjSPQADf2qXSsWDMNUnVY+w9TUkziN/AiidlBduoX29ar4wSdyT1J71DQ7mSc0S6suO3bHlTmiLFWt1LI/QfhPcGmxoZMkELGPqc9BUscqL8tEIhbIZicMfWgGYt0Ol1eZh1Zent1ooW2lx4AjJ91tXUedFUEFxFzo9OcMDlT5EUQS8xSGGmRThl8jUtQzRnWJYscwDGOzDyqxdrazDVPciaio4pVkQsNsbMD1HvUwTw65SY4+34m9hWWmnTNJp8oZzUihm55xbIpkdv+PAzmvPHxZ8R3fHeIPPcyMkEbHlRE4EQ9vPzPv2wB3v4hhe/4DxGygxCJ7eSJRnG7KQCT+deZb+FpEliIZGPZhgg+RrneQnJJRXR9X6xgxzlPJJXJdBBdrI/yZcsp1exHeu2fov8AiWfjNlLZX0jPd2oDJKT4nTpv5kHG/cEdTk1wOws5YrjmSYUDPfOa6z+hezkbjF7ejIijtzCfIlmUj/0P8R515tJJxyqMXwdXzmKGXRSyZVUl0dglOtRONs+GQeTef++lCoNAkmyI+wHV/wDFETiKTUwyjbOP61FNcxHiD27XEb3OcBAdxncDyBx2Ndo+AJrg8xI5F/Yjw6fwN/v+71FgEEMAykEEHuDUoxAHVsPI4wUH0j3qIDAAznFAYXEODt9o8EPPj0jQ0kDXDY8tRcY9gP5k0Vvc0JsWUe9FUgtFFJncAAlj0A61kpFLEdYliwJVwd+jY7GnwNLdeIo3M6MWOy/n/apuWFYCYkuekSH/AMms+44zY8pi8+YlxpjjUqrgnHhY4DDPcHFbu1TM1TtGggVW+UOdKPvn6V9q41+lv4fFjxNeJwEaLxmMqD7sg3JwOgOc++fMV0SW84jeRw29vFlyQruISNLDdZN9l2KNg46MOtV5/hqDivCrhrrUsl5FrWLQV5Um5Vjkkkgsd8DPcZr8M+JZYOLOh47Wy0eeOWPX3+jhFjaTX15DbWsZkmlYIiDqSTgD/Nehvhbg0PAuDQ2UOGceKV8Y1uep/oPIACua/oc4ck/Gbq9dGD2sa8pepDPkZHqArD96uvXd1bxa2uZUgmjVWkDdCGJC482Ok7DJ/lXl0OHbHe+2df2PXvNmWCP4x/rH1icRkWwvgscqyCQmdbd1YfMJ1LuuSzEqQuwwAc5wBW2MMiuudLDIyMH2I7H0pDpbOuPWEG7Y3UH169u1e9HzQLuoOhkJAZkbGVJGcHHelRDJnBCoPqc9BWRxPiFzb8ZSS5E7WyA8uG1TPPJBCgk41HGSQOm3XrWw7GRIyV0IVDLHt4cjvjYmgHLMsY0wxKV/E53PrRUWdzgMfZSaKAkiiaXBJEcZ21Hv7VHdXcNpBeMhYLajM+lcv0z37YPX38qbFN9ut0uTHKgckBJMZTBxggdDt0602W2Et0s5mmVtHLkVMASqDkBtu2T08zQFW24kP1sbWW3AyWEaq3zNS7+PoPEuWG/RT1qWLhttD9qQqsscsutVYH5a5DaQc7ANkjGMVZVEMkfKhUyRJy0wMlF8t+nvUhRUOJ3y3/HH1/M//KAYhCokMS4VRhY0HQUgt1ikZppWXVvylOo+/pUnMbTpjAiTyXqfc0wADoKXRKsocGsbDhn2pOEWwtBK+uUZZmJ7fUTgdcAbeVWbq0iuhFrHzkcYcNpcqdmUPgsNt9sE4xkUs8ZYh49pF6evoadBNrIdPDIh3BHQ1dqSuPQc5Sl83bK8N7w9LlbGxIMatoBiT5UbYJ0lvM4P59auK7RyBozlztpxnUKyONGS3vLK6SK35ceAXYbls4CgDuASQACdzjfY68UxaBWhie3D52cDWR5nc49jv7VChxLhy3tmVRI4pwMhXGRjIJU430tjcDrWZwm7la4a1umUoCFVcBHQ+TY8K5H0oMnG5NaOkZJy2TsTnc+9UOM2Juil0kwjeIZcMTpKrk6jjfbuBjVgbjAoDU50o2QiJRsFABxRWTb8bszHpuZZXmTws6wkavXSM6TjscH0xiigK3CpWs+IpZTTMCGaJUCjDHTqGSegwQcLqO4LNua3F5RRXMgmDDIERypH/VVa+tILuQ3FxbtcTImGjiwvNXOykn7u52Jwe+aqcG4vHfExyzWSu7kW0EDaiEUb5P5bbDbHnQhqmR2XSMRp+FNv500AAYAwKWlVWctp0gL9TMcAVCiUIry/sl1D8R2H8aXMS9AZ2822Ufl3pJGeX9o2R+EbD+FAKRENmmdm7mMZA/vSxWaSy81ZtQxg6Bgn3pqpqViziOMHST3J8gKWSQv4V1LCBgL0z71pOiNWLxBIWsbiCIMzlTgRYLZ9yRv6Z6Vh8CmNtcfq+4Z1md2+WVBOvQGOpvYDZc4P1MS2TpSxtG3NgG/3kH3h/eo57SyvnFxKjkldDmNtBYDpqI3OPLOP5VWuLInzTLlCkg5FPkR+cyhS2d1I6Ee9TRWhO8zfur/esGinA4tI+VarDFHknQFwAT1orU1RRAJqRPTIFFUFDmYGmEcuPOTnq3vWRdJJYcUS5toWkSYBRpYklt8rjqdvpGQg3JxjNa4jJXXIeXH5n6m9hTZRHcRNbGPEMgwV3y3qcHp5jyoCO1m+02UNyE0CQatOc437nA386miXVBMX8MLAEMfxDy86wuFTw2HEZbS5jCu2EeSZwis67IFGygEHZVGwx3zjdZZZpNxqYf8Aav8Av8aAjB8ILbbb+lPWMldbnlR/ibqfYUoMcZ8GJpB94/Svt501iXbU7Fm8z29qAGKkKsalUU6ssd2NFAGTgU24kitbdri8mjt7dRkyOe2M7flU7AvcAZJPQCpYLD5jSOSgbqgPU+Z/xTeHX1rJeX1qitHPaFdfMx4lZcq4P4TuPcGp5bsnaEfvH+gqrglWWHeOCMAkKo2AH9Kr3U7+DlnEbrkMOpqhMshfmoxMmMEMdmH9Kq3fFJLWOZJrX5YkBgkZgkYGkfUxOc6tQwAT6d6tcWL5ov4H50UQNz4I5QCmtclWVlIPsQDj3orJRbxyYrebA1uuD5VNcD7MiLEcGQ4Z/vUUVQY3xBGPsT3GptUcEqEZ2dcatJPXGQOhB9aucOXHB7MDZXjVigACjKg4AHaiin0QnpCcAmiioU+S45x7iFtxfiENrMsMdgkEihY1PN1soIcsDtufpwfWo7dIz8UWlvJHHJBFe3PDkjZBpWAw8wKANhg5APkSN6KK2ZNvgPCo7eSa5ae4nltg1jCZXHhhU5A2AyfU5O1a9FFZZpBSWsST3EMzonMhdlVtAJwVORkjI7dMdKKKIFuaBeaxyw1b0UUUB//Z"}}}})
		}
const img = (teks,tipe) => {
iky.sendMessage(from, teks, tipe, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":"@_rizkyfadilah8",
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k=",

"remoteJid":"status@broadcast"}}}})
}
const imgreply = (teks) => {
iky.sendMessage(from, teks, text, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":"@_rizkyfadilah8",
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",

"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k=",

"remoteJid":"status@broadcast"}}}})
}
const zipreply = (teks) => {
 iky.sendMessage(from, teks, text, {quoted: { key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: {"documentMessage": {
"url":"https://mmg.whatsapp.net/d/f/Ak5rGJEEI2Bqhd9WzQfnnBWiiXVr-6cfPt3WrnCOxEcy.enc",
"mimetype":"application/octet-stream",
"title":"caselangka.zip",
"fileSha256":"FL2gMKqji95dUOpETNy01LWcx8ImZ9aSKjVAZuShh70=",
"fileLength":"255136",
"pageCount":0,
"mediaKey":"oSOgllded+snE7hGHKH6ZsBpQc85VMXvXA3eKwozDWU=",
"fileName":"caselangka.zip",
"fileEncSha256":"/QfdUAaVsAm8GUjWp0Np7j8DF0VnkCS984wpZ25IYy0=",
"directPath":"/v/t62.7119-24/55888019_135706521705155_1593600754066959793_n.enc?oh=84a5f8e4e7606b97b661a207f0961e8d&oe=6041A89F",
"mediaKeyTimestamp":"1612170760"}}}})
}
const kerply = (teks) => {
iky.sendMessage(from, teks, text, {quoted: { key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"stickerMessage":{
"url":"https://mmg.whatsapp.net/d/f/Am5_tBqsM4yQTmD9ZyTedJsTa2ABu6lvjrJfNWLrguaL.enc",
"fileSha256":"8XvhIn1zL8fxLfLuU5DPArKRVeOzCF6N2Qnosf8dSFM=",
"fileEncSha256":"idW4sIS3Fj/TjJF1NSneHCmHsLDpLuLsiQHQg+C21aU=",
"mediaKey":"41Jv4FXXZOuEZZ7nwuQvu8S7sEWCQ09/bK8M8FX4lm0=",
"mimetype":"image/webp",
"height":64,
"width":64,
"directPath":"/v/t62.15575-24/28854327_431231661412563_2760847989738765091_n.enc?oh=eb586fe5b864db8c2c4c449cfc4b14d6&oe=60400B55",
"fileLength":"9848",
"mediaKeyTimestamp":"1612173469",
"isAnimated":false}}}})
}
const konreply = (teks) => {
iky.sendMessage(from, teks, text, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {
					"contactMessage": {
						"displayName": "Rizky",
						"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Iky;;;\nFN:Iky\nitem1.TEL:+62 813-6727-9239\nitem1.X-ABLabel:Telepon\nitem2.TEL;waid=6282387804410:+62 823-8780-4410\nitem2.X-ABLabel:Telepon\nEND:VCARD",
					"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAFAAUAMBIgACEQEDEQH/xAAyAAADAQEBAQEAAAAAAAAAAAADBAUGAgABBwEAAwEBAQAAAAAAAAAAAAAAAgMEBQAB/9oADAMBAAIQAxAAAACwodfVzwNKMlzPKph4aGtzqbT+WJVneGDvmPenPR18H+GckyZMvM7RcnBVLNeUaIp+h4syuVK8FD5f21z6IoNxf0o47+OoTfqZ7UKaX3okzbnyNa7zmdRwL1bPI6+et+R3/wCdevj/AE5aLVzrWSozgJOQTvXzP//EADUQAAIBAwIEBAIHCQAAAAAAAAECAwAEERIhBRMxQSJRYXFSoRAjMoGRscEUICRCYnKCkvH/2gAIAQEAAT8AVMxBu5fAq5fRDKfJTU0mLi29WIp2xg+tLKOSy+oIpBqkjH9VXcD2zk78pm/CmfQ4cbqh+R2pGEiBh0IpWyK5v1ap5EmiQ4wfiH50yapbfPZiPkaJV/DnqKiYkFT1BwaBYMpDYwQc0bfIIeRnB6ggYq7spLUOcZhP4rVk2qAD4SRTnQ4PZtj70r5wfMZqJsk+j/rVxAFuIi4BUupx2q7URyEpjwnVgeXemUhlmTdSPFTDKah701/HbQLJPMWPRI03Y1HxuZiIpLIFu45qhj/jQ/ZdTcgMhO7RNsVNFRIhU1bPrhwPtJUe0j77MNQq64hLNNGxXlQsCq53ZvWoWvJvHI6TINsqMFahQwu6neInP9uaKGPPwmoIY2kdyMvHGeXT6J5IXdQHlG5UYGVqJGueHrM65ngJXV3YUDhiPvofw12D/I9Tx+KMqPCWq5SXmXIVS4JDIprhUMkMmWUqssfzWpYjBIHUZXP/AEU0CsgaLBUjpQieORXjBJB6UvC0Ulk2VjkKRutRqEjWPY4HtV9AYnDKNgcj27ilXnxmN8ah4kYdCKtZGK8uYYKtjNCJBIrNkqOjDqPQ1HDHoXHuCKZQwIIyDUactiqg6TWKbpW5NXo+qjHm/wClXlryDzFG259jQZThsZBG48xUEb5Kq+R1XPcGrZHTIIAHYA/uYrSKvLy2tp4+ad1QkD3q5jDwuvpUU5C4+H5irS8CujdVBOahdJEDIcg/RccUkS7eCOAsEwC2cb1Z3t5JclJY10N0I6r9DMqKzMcADJNXs5u7t5OxOF9hUuuS2Yx/aZDp+8VeWL2ttEx+3klqtZwky8wgDudOatGiMK8t0ZexWs1JaRSOXxhj1NRQJFkgbmmZVBLEADqTXGOIvK3IjBVAAT5tSx68EffVt4rS3PnEv5VxGMPFgjY7Vc28tuy618Lbq3mKt7ue2bXFIVqw4y86HmIpdfKk4hAeupfcVJfwqPBljTzPM2XPsvYVdSa7q4PUasf67VAoC5r/xAAhEQACAgEFAAMBAAAAAAAAAAABAgADERITITFBI1GBYf/aAAgBAgEBPwDkBif7AwJ/AYyDS4+5RYpIVu/DMRumESwjQT4NJm5niLTqdhnEpJIKk8qcSzoGWuNITE1ng+iG1j1xxzK7Cj5++5R8lZRvJcrpweR4YSBAZRVusc9CbrVddBgT+SyoXqGR42FYq3YhcCUrt0qfSMz/xAAhEQACAgEEAwEBAAAAAAAAAAABAgADERIhMUETUWGRIv/aAAgBAwEBPwBQGZAO8R0KgH6R+RGIsQ+iJcDpYrwRuJ2RE2YH0Y6q2sezkTxYxGtKqDLh/QYcMMyvn6JWjay2dppzkdTxKdjvLKQ6hRz1L8pati8mIyMMgYPYgBY4AyYylTgiWWaPpiVi04PYIEVjUxDLED4DoDg9iCqxzk/pj4e5l6E//9k="}}}})
}
const replys = (media) => {
				iky.sendMessage(from, media, sticker, {quoted:mek})
			}
const fitnah = (teks) => {
iky.sendMessage(from, teks, text, {quoted: { key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"stickerMessage":{
"url":"https://mmg.whatsapp.net/d/f/ArWn-ScCLciLvlmShaaX_GFmylGtwgC6k0ACmz3tMSww.enc",
"fileSha256":"IqrJTqOdX+wA+tzIubVeyl191li5U62Dnt9JzPLWIrM=",
"fileEncSha256":"E0Aic501KH2S3nfAgV3/xXvqygtaVKhz5+9rsefn5kg=",
"mediaKey":"dk6oSw2WLZl6uWsjXTZ+xRMk4cgL/O+eUYXz/9eoDkE=",
"mimetype":"image/webp",
"height":64,
"width":64,
"directPath":"/v/t62.7118-24/19234707_240525457622806_1337817065097897009_n.enc?oh=6c88fdca65bec8f5aff537f2c55e0ad8&oe=603FFE82",
"fileLength":"14244",
"mediaKeyTimestamp":"1612181365",
"isAnimated":false}}}})
}
const audply = (teks) => {
iky.sendMessage(from,teks, text, {quoted: { key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"audioMessage":{
"url":"https://mmg.whatsapp.net/d/f/Amteo9eVksUVnVmUsc-XgITmWEs9AqiIZy_-3VfhgxQx.enc",
"mimetype":"audio/mpeg",
"fileSha256":"3bYtdd/jRAiQ8oMYYhINsWi/CDm+X/gOiWAP42itFVs=",
"fileLength":"3145698","seconds":3655,
"ptt":false,"mediaKey":"GBCi+KMSAKHOgRhok/BMxjwQ0lDBme4TzOCorO5lg8k=",
"fileEncSha256":"igYg6q3d+Bf0nnunJ5s8/uREsU8uz220YlCUE33pel0=",
"directPath":"/v/t62.7114-24/40890232_166311235018971_3628190656030933560_n.enc?oh=29c4240237e1c1dd407fde4e462dd49a&oe=60430D35",
"mediaKeyTimestamp":"1612255059"}}}})
}
const sepei = (teks) => {
 iky.sendMessage(from, teks, text, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":"@_rizkyfadilah8",
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",
"jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAFAAUAMBIgACEQEDEQH/xAAyAAADAQEBAQEAAAAAAAAAAAADBAUGAgABBwEAAwEBAQAAAAAAAAAAAAAAAgMEBQAB/9oADAMBAAIQAxAAAACwodfVzwNKMlzPKph4aGtzqbT+WJVneGDvmPenPR18H+GckyZMvM7RcnBVLNeUaIp+h4syuVK8FD5f21z6IoNxf0o47+OoTfqZ7UKaX3okzbnyNa7zmdRwL1bPI6+et+R3/wCdevj/AE5aLVzrWSozgJOQTvXzP//EADUQAAIBAwIEBAIHCQAAAAAAAAECAwAEERIhBRMxQSJRYXFSoRAjMoGRscEUICRCYnKCkvH/2gAIAQEAAT8AVMxBu5fAq5fRDKfJTU0mLi29WIp2xg+tLKOSy+oIpBqkjH9VXcD2zk78pm/CmfQ4cbqh+R2pGEiBh0IpWyK5v1ap5EmiQ4wfiH50yapbfPZiPkaJV/DnqKiYkFT1BwaBYMpDYwQc0bfIIeRnB6ggYq7spLUOcZhP4rVk2qAD4SRTnQ4PZtj70r5wfMZqJsk+j/rVxAFuIi4BUupx2q7URyEpjwnVgeXemUhlmTdSPFTDKah701/HbQLJPMWPRI03Y1HxuZiIpLIFu45qhj/jQ/ZdTcgMhO7RNsVNFRIhU1bPrhwPtJUe0j77MNQq64hLNNGxXlQsCq53ZvWoWvJvHI6TINsqMFahQwu6neInP9uaKGPPwmoIY2kdyMvHGeXT6J5IXdQHlG5UYGVqJGueHrM65ngJXV3YUDhiPvofw12D/I9Tx+KMqPCWq5SXmXIVS4JDIprhUMkMmWUqssfzWpYjBIHUZXP/AEU0CsgaLBUjpQieORXjBJB6UvC0Ulk2VjkKRutRqEjWPY4HtV9AYnDKNgcj27ilXnxmN8ah4kYdCKtZGK8uYYKtjNCJBIrNkqOjDqPQ1HDHoXHuCKZQwIIyDUactiqg6TWKbpW5NXo+qjHm/wClXlryDzFG259jQZThsZBG48xUEb5Kq+R1XPcGrZHTIIAHYA/uYrSKvLy2tp4+ad1QkD3q5jDwuvpUU5C4+H5irS8CujdVBOahdJEDIcg/RccUkS7eCOAsEwC2cb1Z3t5JclJY10N0I6r9DMqKzMcADJNXs5u7t5OxOF9hUuuS2Yx/aZDp+8VeWL2ttEx+3klqtZwky8wgDudOatGiMK8t0ZexWs1JaRSOXxhj1NRQJFkgbmmZVBLEADqTXGOIvK3IjBVAAT5tSx68EffVt4rS3PnEv5VxGMPFgjY7Vc28tuy618Lbq3mKt7ue2bXFIVqw4y86HmIpdfKk4hAeupfcVJfwqPBljTzPM2XPsvYVdSa7q4PUasf67VAoC5r/xAAhEQACAgEFAAMBAAAAAAAAAAABAgADERITITFBI1GBYf/aAAgBAgEBPwDkBif7AwJ/AYyDS4+5RYpIVu/DMRumESwjQT4NJm5niLTqdhnEpJIKk8qcSzoGWuNITE1ng+iG1j1xxzK7Cj5++5R8lZRvJcrpweR4YSBAZRVusc9CbrVddBgT+SyoXqGR42FYq3YhcCUrt0qfSMz/xAAhEQACAgEEAwEBAAAAAAAAAAABAgADERIhMUETUWGRIv/aAAgBAwEBPwBQGZAO8R0KgH6R+RGIsQ+iJcDpYrwRuJ2RE2YH0Y6q2sezkTxYxGtKqDLh/QYcMMyvn6JWjay2dppzkdTxKdjvLKQ6hRz1L8pati8mIyMMgYPYgBY4AyYylTgiWWaPpiVi04PYIEVjUxDLED4DoDg9iCqxzk/pj4e5l6E//9k=",
"remoteJid":"status@broadcast"}}}})
}
const se = (teks) => {
iky.sendMessage(from, help(prefix), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: '1606544568@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: "@rahmad.80", jpegThumbnail: fs.readFileSync("database/gambar/mark.jpg"), remoteJid: "1606544568@broadcast"}}}})
}
const setreply = (cap,path) => {
iky.sendMessage(from, `By Kurumi Chan  `, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: cap, jpegThumbnail: fs.readFileSync(path), remoteJid: "status@broadcast"}}}})
}
const sup = (teks,tipe) => {
 iky.sendMessage(from, teks, tipe, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":"@_rizkyfadilah8\n*𝘼𝙐𝙏𝙊 𝙎𝙏𝙄𝘾𝙆𝙀𝙍*",
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k=",

"remoteJid":"status@broadcast"}}}})
}
const ola = (teks,tipe) => {
 iky.sendMessage(from, teks, tipe, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":"@_rizkyfadilah8\n*Fitur Unfaedah:v*",
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k=",

"remoteJid":"status@broadcast"}}}})
}
const seply = (teks,tipe) => {
 iky.sendMessage(from, teks, tipe, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":"BROADCAST Kurumi Chan  ",
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",
"jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAFAAUAMBIgACEQEDEQH/xAAyAAADAQEBAQEAAAAAAAAAAAADBAUGAgABBwEAAwEBAQAAAAAAAAAAAAAAAgMEBQAB/9oADAMBAAIQAxAAAACwodfVzwNKMlzPKph4aGtzqbT+WJVneGDvmPenPR18H+GckyZMvM7RcnBVLNeUaIp+h4syuVK8FD5f21z6IoNxf0o47+OoTfqZ7UKaX3okzbnyNa7zmdRwL1bPI6+et+R3/wCdevj/AE5aLVzrWSozgJOQTvXzP//EADUQAAIBAwIEBAIHCQAAAAAAAAECAwAEERIhBRMxQSJRYXFSoRAjMoGRscEUICRCYnKCkvH/2gAIAQEAAT8AVMxBu5fAq5fRDKfJTU0mLi29WIp2xg+tLKOSy+oIpBqkjH9VXcD2zk78pm/CmfQ4cbqh+R2pGEiBh0IpWyK5v1ap5EmiQ4wfiH50yapbfPZiPkaJV/DnqKiYkFT1BwaBYMpDYwQc0bfIIeRnB6ggYq7spLUOcZhP4rVk2qAD4SRTnQ4PZtj70r5wfMZqJsk+j/rVxAFuIi4BUupx2q7URyEpjwnVgeXemUhlmTdSPFTDKah701/HbQLJPMWPRI03Y1HxuZiIpLIFu45qhj/jQ/ZdTcgMhO7RNsVNFRIhU1bPrhwPtJUe0j77MNQq64hLNNGxXlQsCq53ZvWoWvJvHI6TINsqMFahQwu6neInP9uaKGPPwmoIY2kdyMvHGeXT6J5IXdQHlG5UYGVqJGueHrM65ngJXV3YUDhiPvofw12D/I9Tx+KMqPCWq5SXmXIVS4JDIprhUMkMmWUqssfzWpYjBIHUZXP/AEU0CsgaLBUjpQieORXjBJB6UvC0Ulk2VjkKRutRqEjWPY4HtV9AYnDKNgcj27ilXnxmN8ah4kYdCKtZGK8uYYKtjNCJBIrNkqOjDqPQ1HDHoXHuCKZQwIIyDUactiqg6TWKbpW5NXo+qjHm/wClXlryDzFG259jQZThsZBG48xUEb5Kq+R1XPcGrZHTIIAHYA/uYrSKvLy2tp4+ad1QkD3q5jDwuvpUU5C4+H5irS8CujdVBOahdJEDIcg/RccUkS7eCOAsEwC2cb1Z3t5JclJY10N0I6r9DMqKzMcADJNXs5u7t5OxOF9hUuuS2Yx/aZDp+8VeWL2ttEx+3klqtZwky8wgDudOatGiMK8t0ZexWs1JaRSOXxhj1NRQJFkgbmmZVBLEADqTXGOIvK3IjBVAAT5tSx68EffVt4rS3PnEv5VxGMPFgjY7Vc28tuy618Lbq3mKt7ue2bXFIVqw4y86HmIpdfKk4hAeupfcVJfwqPBljTzPM2XPsvYVdSa7q4PUasf67VAoC5r/xAAhEQACAgEFAAMBAAAAAAAAAAABAgADERITITFBI1GBYf/aAAgBAgEBPwDkBif7AwJ/AYyDS4+5RYpIVu/DMRumESwjQT4NJm5niLTqdhnEpJIKk8qcSzoGWuNITE1ng+iG1j1xxzK7Cj5++5R8lZRvJcrpweR4YSBAZRVusc9CbrVddBgT+SyoXqGR42FYq3YhcCUrt0qfSMz/xAAhEQACAgEEAwEBAAAAAAAAAAABAgADERIhMUETUWGRIv/aAAgBAwEBPwBQGZAO8R0KgH6R+RGIsQ+iJcDpYrwRuJ2RE2YH0Y6q2sezkTxYxGtKqDLh/QYcMMyvn6JWjay2dppzkdTxKdjvLKQ6hRz1L8pati8mIyMMgYPYgBY4AyYylTgiWWaPpiVi04PYIEVjUxDLED4DoDg9iCqxzk/pj4e5l6E//9k=",
"remoteJid":"status@broadcast"}}}})
}
const swreply = (teks) => {
 iky.sendMessage(from, teks, text, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":"@_rizkyfadilah8",
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k=",

"remoteJid":"status@broadcast"}}}})
}
const groupreply = (teks) => {
 iky.sendMessage(from, teks, text, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":"@_rizkyfadilah8",
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k=",

"remoteJid":"status@broadcast"}}}})

}
const sendStc = (jalur) => {
					exec('cwebp -q 50 ' + jalur + ' -o database/tmp/' + 'stiker' + '.webp', (error, stdout, stderr) => {
					let stik = fs.readFileSync('./database/tmp/' + 'stiker' + '.webp')		
					iky.sendMessage(from, stik, sticker, {quoted: mek})
					})
			}
			const sreply = (teks) => {
			iky.sendMessage(from, teks, text, {contextInfo: { forwardingScore: 508, isForwarded: true },quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: '@_rizkyfadilah8', jpegThumbnail: fs.readFileSync('./database/gambar/kurumi.jpg'), remoteJid: "status@broadcast"}}}})
			}
const kontolm = (teks) => {
 iky.sendMessage(from, teks, text, {contextInfo: { forwardingScore: 508, isForwarded: true },quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
								"fileLength": "43344",
								"height": 640,
								"width": 640,
								"mediaKey": "OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
								"mediaKeyTimestamp": "1612168223",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k="
		},
							"productId": "3656809567780692",
							"title": "@rizkyfadilah8",
							"currencyCode": "IDR",
							"priceAmount1000": "999999999",
							"productImageCount": 1
						},
						"businessOwnerJid": "6285364937006@s.whatsapp.net"}}}})
					
	}
	const setply = (teks,tipe) => {
	iky.sendMessage(from, teks, tipe, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: '@_rizkyfadilah8', jpegThumbnail: fs.readFileSync('./database/gambar/kurumi.jpg'), remoteJid: "status@broadcast"}}}})
	}
	const teskl = (teks,tipe) => {
 iky.sendMessage(from, teks, tipe, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {
					"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
								"fileLength": "43344",
								"height": 640,
								"width": 640,
								"mediaKey": "OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
								"fileEncSha256": "BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
								"directPath": "/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
								"mediaKeyTimestamp": "1612168223",
								"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIADQAQAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAADBQAEBgIBAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAAB0gY5aOhPerLde/Uk3rCIne5L07YKU9CtbuRhslMr0qF/sk6rBS8NMfXpvUI8anvO3BXL5KjwEjrZJCu2skX//xAApEAABBAIBBAAFBQAAAAAAAAACAAEDBBESMQUhIjIQE0FRYRQjMzRy/9oACAEBAAE/APV1evkRFHG6Hx7ktm+zpmZ+HUNuWLV89vqyilGYGIfhbkcIS15dYLyfCiiOTGGyjrkBYcUcWhYXk4u7sunT6losqwOWP8Cq0BHWsKjEUoEIlgkFYPliJ+T45V+q0QbqnA80JY5yq/7djV/uh7sysHgJv8rpRYhMCUUbV7La+pojYOV1OXeMWXTgIKzFhSRENqN8ezqFvFXc6C7PyqejReXLKzKJBmMmyKr2pbE0Yc4VuANTkf6MqkgDEMbk2UwgxE7s2WW24+L91el2kZm4FTy6B4P7p3dlTt/piIsZJS9QnMNS4dVjL58b/ldSsGE/ia6dKRERd3VgW3NC2SUiD2RcKj/aBlcwUzuul/xiy//EABoRAAEFAQAAAAAAAAAAAAAAABEAARAgMUH/2gAIAQIBAT8AQTtlOSINf//EAB4RAQABBAMBAQAAAAAAAAAAAAEAAhESIRAxQTKB/9oACAEDAQE/AKe5m+BBpqpqEs8t9BBROPZnbQExWYllvsh3HuMfk/Z//9k="
		},
							"productId": "3656809567780692",
							"title": "@rizkyfadilah8",
							"currencyCode": "IDR",
							"priceAmount1000": "999999999",
							"productImageCount": 1
						},
						"businessOwnerJid": "6285364937006@s.whatsapp.net"}}}})
					
	}
	

const virreply = (teks) => {
 iky.sendMessage(from, teks, text, {quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {
		"extendedTextMessage": {
			"text": `${virtex()}`,
			"previewType": "NONE",
			"contextInfo": {
				"stanzaId": "7D59082EA362B43EF5724164A38FBFA8",
				"participant": "0@s.whatsapp.net",
				"quotedMessage": {
					"conversation": `${virtex()}`}}}}}})
					}
				

const alphaKingg = from.endsWith('@g.us')
			const seng = alphaKingg ? mek.participant : mek.key.remoteJid
			const pushname2 = iky.contacts[seng].notify != undefined ? iky.contacts[seng].notify : PhoneNumber('+' + seng.replace('@s.whatsapp.net', '')).getNumber('international')
			

        
     
  
        
                
            if (isBanned) {
            	gaerror(sender)
            }
            
            
        
				
const addAfkUser = (userId, reason) => {
				const obj = { id: userId,week, time,groupName,totalMembers,date, reason: reason }
					_afk.push(obj)
					fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
				}
			const getAfkPosition = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
					}
						})
					return position
					}
			const checkAfkUser = (userId, _dir) => {
				let status = false
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					status = true
					}
				})
				return status
			}
			const getAfkReason = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
				return _dir[position].reason
				}
			}
			const getAfkTime = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
					return _dir[position].time
						}
					}
					const getAfkGroup = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
					return _dir[position].groupName
						}
					}
					
					const getAfkMem = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
					return _dir[position].totalMembers
						}
					}
					const weekGet = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
					return _dir[position].week
						}
					}
					const getAfkDate = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
					return _dir[position].date
						}
					}
			const getAfkId = (userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
						}
					})
					if (position !== null) {
					return _dir[position].id
						}
					}
            if (isGroup && isUser ) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 50
                const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`Selamat Kamu Naik Level\nName: *${pushname2}*\nLevel: *${getLevel} -> ${getLevelingLevel(sender)}*\nXP: *${getLevelingXp(sender)}*\nRole: *${role}*\n\nCongrats!!🥳🥳`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        if (isGroup) {
            const currentdolar = getDolaranLevel(sender)
            const checkId = getDolaranId(sender)
            try {
                if (currentdolar === undefined && checkId === undefined) addDolaranId(sender)
                const amountXp = Math.floor(Math.random() * 5) + 1
                const requiredXp = 20 * (Math.pow(2, currentdolar) - 1)
                const getLevel = getDolaranLevel(sender)
                addDolaranXp(sender, amountXp)
                if (requiredXp <= getDolarExp(sender)) {
                    addDolaranLevel(sender, 1)
                    await reply(`Selamat ${pushname2} Kamu Mendapatkan Dolar *$${getDolarExp(sender)}*`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        const limitAdd = (sender) => {
        	if (isOwner) {return false;}
					if (isPremium) {return false;}
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        const limitsalah = (sender) => {
        	if (isOwner) {return false;}
					if (isPremium) {return false;}
             let position = false
            Object.keys(salah).forEach((i) => {
                if (salah[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                salah[position].salah += 1
                fs.writeFileSync('./database/user/salah.json', JSON.stringify(salah))
            }
        }
        const limitopp = (sender) => {
        	if (isOwner) {return false;}
					
             let position = false
            Object.keys(_gif).forEach((i) => {
                if (_gif[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _gif[position].gif += 1
                fs.writeFileSync('./database/user/gif.json', JSON.stringify(_gif))
            }
        }
           //function check limit
          const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return iky.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            iky.sendMessage(from, `*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}`, text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        
                        iky.sendMessage(from, `*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}`, text, { quoted : mek})
                    }
                                }
                                const hitLimiy = (sender) => {
                let found = false
                    for (let lmt of hit) {
                        if (lmt.id === sender) {
                            hitLimit = hitlimit - lmt.hit
                            
                            iky.sendMessage(from, `*「 HIT COUNT 」*
Total Request anda ke bot : ${hitLimit}`, text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, hit: 1 }
                        hit.push(obj)
                        fs.writeFileSync('./src/hit.json', JSON.stringify(hit))
                        iky.sendMessage(from, `*「 HIT COUNT 」*
Total Request anda ke bot : ${hitLimit}`, text, { quoted : mek})
                    }
                                }
                                
                                
                                const limitcheck = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return 
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        
                    }
                                }
                                const limitsalahcek = (sender) => {
                let found = false
                    for (let lmt of salah) {
                        if (lmt.id === sender) {
                           const limitSalah = salahlimit - lmt.salah
                            if (limitSalah <= 0) return 
                            
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, salah: 1 }
                        salah.push(obj)
                        fs.writeFileSync('./database/user/salah.json', JSON.stringify(salah))
                        iky.sendMessage(from, `Peringatan salah command Anda Tersisa ${limitSalah}\njika sudah mencapai batas nomor kamu akan terbanned `, text, { quoted : mek})
                    }
                                }
                                            const salahlp = (sender) => {
                let found = false
                    for (let lmt of salah) {
                        if (lmt.id === sender) {
                           const limitSalah = salahlimit - lmt.salah
                            if (limitSalah <= 0) return reply (`Kamu Terlalu banyak menggunakan command yang salah!`)
                            
                            iky.sendMessage(from, `Maaf *@${sender.split("@s.whatsapp.net")[0]}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!\nPeringatan salah command Anda Tersisa ${limitSalah}\njika sudah mencapai batas nomor kamu akan terbanned  `, text, { quoted : mek,contextInfo: { mentionedJid: [sender] }})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, salah: 1 }
                        salah.push(obj)
                        fs.writeFileSync('./database/user/salah.json', JSON.stringify(salah))
                        }
                        }
                                const limitgiftcek = (sender) => {
                let found = false
                    for (let lmt of _gif) {
                        if (lmt.id === sender) {
                            limitgif = limitgift - lmt.gif
                            if (limitgif <= 0) return iky.sendMessage(from,`Limit GIFT LIMIT anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            iky.sendMessage(from, `*「 LIMIT GIFT 」*
sisa limit anda : ${limitgif}`, text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, gif: 1 }
                        _gif.push(obj)
                        fs.writeFileSync('./database/user/gif.json', JSON.stringify(_gif))
                        iky.sendMessage(from, `*「 LIMIT COUNT 」*
sisa limit anda : ${limitgif}`, text, { quoted : mek})
                    }
                                }
                                const gifop = (sender) => {
                let found = false
                    for (let lmt of _gif) {
                        if (lmt.id === sender) {
                            limitgif = limitgift - lmt.gif
                            
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, gif: 1 }
                        _gif.push(obj)
                        fs.writeFileSync('./database/user/gif.json', JSON.stringify(_gif))
                        
                    }
                                }
                                

                        //funtion limited
                        
           const isLimit = (sender) =>{
           	if (isOwner) {return false;}
					if (isPremium) {return false;}
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitawal ) {
                  position = true
                    iky.sendMessage(from, `*Limit kamu sudah habis!*`, text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender,groupName, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     const isSalah = (sender) =>{
           	if (isOwner) {return false;}
					if (isPremium) {return false;}
                      let position = false
              for (let i of salah) {
              if (i.id === sender) {
                let limits = i.salah
              if (limits >= salahlimit ) {
                  position = true
                    iky.sendMessage(from,`Anda Terlalu banyak menggunakan command yang salah!\nDan untuk membuka banned harap donasi atau hubungi owner wkwk`, text,{ quoted: mek})
                    var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						bannned.push(kic)
						fs.writeFileSync('./src/banned2.json', JSON.stringify(bannned))
                    return true
              } else {
                salah
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender,groupName, salah: 1 }
                salah.push(obj)
                fs.writeFileSync('./database/user/salah.json',JSON.stringify(salah))
           return false
       }
     }
     const isGift = (sender) =>{
           	
					
                      let position = false
              for (let i of _gif) {
              if (i.id === sender) {
                let lomots = i.limit
              if (lomots >= limitgift ) {
                  position = true
                    iky.sendMessage(from, `*Limit Gift Kamu habis bro*`, text, {quoted: mek})
                    return true
              } else {
                _gif
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender,groupName, gif: 1 }
                _gif.push(obj)
                fs.writeFileSync('./database/user/gif.json',JSON.stringify(_gif))
           return false
       }
     }
     
     //function balance
            if (isUser && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 50
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = (type === 'extendedTextMessage')

    if (budy == '/image anime hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
                  }
                  if (budy == '/image anime hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/boobs') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/image anime Hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
                  }
                  if (budy == '/image anime hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/image Anime hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/image Anime Hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/randomhentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
               if (budy == '/image hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/image Hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/googleimage anime hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/googleimage anime hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/image anime Hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/googleimage anime hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/googleimage Anime hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (budy == '/googleimage Anime Hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
               if (budy == '/googleimage hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
                  if (messagesC.includes("/next")) {
                  	if (!isPrivate) return reply(`Perintah Ini hanya Bisa Digunakan Chat Pribadi!`)
                  if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (!isUser) return reply(mess.only.userB)
                if (!isJodoh) return reply(`MUTUAL DULU BANG BARU NEXT\nCONTOH: /mutual`)
                hasil = user[Math.floor(Math.random() * (user.length))]
                reply('Looking for a partner...')
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
                 iky.sendMessage(from, `@${hasil.split("@s.whatsapp.net")[0]}`,text, { quoted: mek, contextInfo: { mentionedJid: [hasil] }})
                 await limitAdd(sender)
                 }
                  if (messagesC.includes("/jodoh")) {
                  	if (!isPrivate) return reply(`Perintah Ini hanya Bisa Digunakan Chat Pribadi!`)
                  if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
jodhr = user[Math.floor(Math.random() * user.length)]
					jodohn = iky.contacts[jodhr] != undefined ? iky.contacts[jodhr].name || iky.contacts[jodhr].vname || iky.contacts[jodhr].notify : undefined
					sreply(mess.wait)
					kntks = 'BEGIN:VCARD\n'
					+ 'VERSION:3.0\n' 
					+ `FN:${jodohn}\n`
					+ 'ORG:User;\n'
					+ `TEL;type=CELL;type=VOICE;waid=${jodhr.split('@')[0]}:${jodhr.split('@')[0]}\n`
					+ 'END:VCARD'
					iky.sendMessage(from, {displayname: `${jodohn}`, vcard: kntks}, contact, {quoted: mek})
					iky.sendMessage(from, `@${jodhr.split('@')[0]} ni jodohmu`,text, {quoted: mek, contextInfo: { mentionedJid: [jodhr] }})
					await limitAdd(sender)
					}
                  if (messagesC.includes("/mutual")) {
                  	if (!isPrivate) return reply(`Perintah Ini hanya Bisa Digunakan Chat Pribadi!`)
                  if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

                if (!isUser) return reply(mess.only.userB)
                if (isJodoh) return reply(`KAMU SUDAH MELAKUKAN MUTUAL JADI GUNAKAN \n*${prefix}next* SAJA`)
                jodoh.push(sender)
						fs.writeFileSync('./src/jodoh.json', JSON.stringify(jodoh))
                hasil = user[Math.floor(Math.random() * (user.length))]
                reply('Looking for a partner...')
                await reply(`wa.me/${hasil}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
                await limitAdd(sender)
                }
                  
                  if (budy == '/googleimage Hentai') {
					if (isBanned) return 
                  teks = '*「 HENTAI DETECTOR 」*\n '
					for (let nor of ownerNumber) {
						teks += `@${nor.split('@')[0]} \n`
					}
					teks += `Kamu menggunkan fitur hentai maka limit kamu dihapus jika ingin\nlimit kamu dikembalikan chat owner`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ownerNumber}})
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					
                  }
        const isAfkOn = checkAfkUser(sender, _afk)
        function getName() {
var v = iky.contacts[sender] || { notify: sender.replace(/@.+/, '') }
return v.name || v.vname || v.notify
            }
            if (isGroup) {
						gifop(sender)
						}
					if (budy == '/unbanall') {
					
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`khusus premium`)
						members_id = []
					for (let mem of groupMembers) {
						bend = `${mem.jid.split('@')[0]}@s.whatsapp.net`
						members_id.push(mem.jid)
						
					bannned.splice(bend)
						fs.writeFileSync('./src/banned2.json', JSON.stringify(bannned))
						console.log('Sukses membuka banned all')
						}
						sreply(`sukses!`)
						
						banned.splice('reset')
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					console.log('[LIMIT] Berhasil mereset limit')
					swreply(`berhasil unbanall`)
					}
// jangan lupa kasih bintang @⁨alpha⁩
					if (budy == '/mute') {
						if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						bann.push(from)
						fs.writeFileSync('./src/ban.json', JSON.stringify(bann))
						reply('bot telah dimute dalam group ini ✔️')
					} else if (budy == '/unmute') {
						bann.splice(from, 1)
						fs.writeFileSync('./src/ban.json', JSON.stringify(bann))
						reply('bot telah diunmute dalam group ini ✔️')
					
					}
					
					
					if (budy == 'manual') {
						if (!isOwner) return 
						auto.push(from)
						fs.writeFileSync('./database/group/auto.json', JSON.stringify(auto))
						reply('sticker berhasil dialihkan ke manual ✔️')
						}
					if (budy == 'auto') {
						if (!isOwner) return 
						if (isAuto) return reply('group ini telah dimute')
						auto.splice(from, 1)
						fs.writeFileSync('./database/group/auto.json', JSON.stringify(auto))
						reply('sticker berhasil dialihkan ke auto✔️')
					}
						
					
            const balas = [
			`Ya kak?`,
			`Siap Kurumi chan disini?`,
			`Haik Oni Chan Nani?!`,
			`Apa kak kurumi disini?`,
			`Arerereee...?`,
			`Nani Oni Chan?`,
			`iya kak kurumi chan disini`
			]
			const balop = balas[Math.floor(Math.random() * (balas.length))]  
//Taro Deket detect admin
			colors = ['red','white','black','blue','yellow','green']
			if (isBanned && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mBANNED\x1b[1;37m]', time, color(taukah,'yellow'), 'from', color(pushname2), 'args :', color(args.length))
			if (isBanned && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mBANNED\x1b[1;37m]', time, color(command),time, color(command), 'from',color(pushname2), 'args :', color(args.length))
			if (isBannned && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mBANNED\x1b[1;37m]', time, color(taukah,'yellow'), 'from', color(pushname2), 'args :', color(args.length))
			if (isBannned && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mBANNED\x1b[1;37m]', time, color(command),time, color(command), 'from',color(pushname2), 'args :', color(args.length))
			if (!isGroup && isCmd) console.log(color('[VIRTEX]','yellow'), time, color(command),time, color(command), 'from',color(pushname2), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log(color('[VIRTEX]','yellow'), time, color(taukah), 'from', color(pushname2), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mBERHASIL\x1b[1;37m]', time, color(command), 'from', color(pushname2), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mBUKAN COMMAND\x1b[1;37m]', time, color(taukah), 'from', color(pushname2), 'in', color(groupName), 'args :', color(args.length))
			if (!isBan && !isCmd) console.log(color('[MUTE]','yellow'), time, color(taukah,'white'), 'from', color(pushname2), 'in', color(groupName), 'args :', color(args.length))
        let authorname = iky.contacts[from] != undefined ? iky.contacts[from].vname || iky.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
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

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			if (isBannned && isCmd) return reply(mess.only.benned)
			if (isBanned && isCmd) return reply(mess.only.benned)
			if (!isGroup && !isOwner && isCmd) return
			if (!isBan) return 
			if ( isCmd) {
				amount = `1`
				bayarHit(sender, amount)
				}
				
				if (!isGroup && isCmd ) return 
switch(command) {
	
	case 'mute':
	break
	case 'unmute':
	break
	case 'cerpen':
				iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
				 data = fs.readFileSync('./src/rizky.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                let haos = (randKey.result)
                iky.sendMessage(from, haos, text, {quoted: mek})
				await limitAdd(sender)
			        break
	case 's':
                  if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    namastc = body.slice(2)
				  
				    buffer = fs.readFileSync(`./stik/${namastc}.webp`)
				    setply(buffer, sticker)
		break
		case 'hilih':
          if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					i = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "i");
					}
					reply(i(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya apa kak?')
					i = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "i");
					}
					reply(i(args.join(' ')))
					limitAdd(sender)
					}
					break
	case 'dungeon':
	if (isDug) return reply(`kamu sudah bertarung hari ini kembalilah besok`)
            dug.push(sender)
						fs.writeFileSync('./src/dug.json', JSON.stringify(dug))
          const  toy = ["https://i.ibb.co/3YGt0LH/fc104cac921b.jpg","https://i.ibb.co/F0d1sBP/12c793756611.jpg","https://i.ibb.co/HTCHg0r/22bafbe4373b.jpg","https://i.ibb.co/YhTP9Lk/9753ca2e1a23.jpg","https://i.ibb.co/YhTP9Lk/9753ca2e1a23.jpg"]
            const linkyo = toy[Math.floor(Math.random() * toy.length)] 
const bod =['4','9','5','3','7','8','10','9','4','9','2','1','6']
					const kotl = bod[Math.floor(Math.random() * bod.length)]   
					const col =['4','9','5','3','7','8','10','9','4','9','2','1','6']
					const ii = col[Math.floor(Math.random() * col.length)]   
					const bakus = Math.floor(Math.random() * 100) + 1000
            qute = await getBuffer(`${linkyo}`)
            iky.sendMessage(from, qute, image,{quoted:mek,caption: `kamu MENANG mengalahkan ${kotl} monster dan mendapatkan uang sebesar ${bakus} dan limit ${ii}`})
            addKoinUser(sender, bakus)
            bayarLimit(sender, ii)
 break
 
	case 'tp':
					if (args.length < 1) {
						return reply('Pilih themenya om, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.tech/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong om')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.tech/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=jKUeppeFD7Kgb8f4ehXl`
					voss = await fetch(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						iky.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
					case 'nhentaisearch':
                    henid = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/nhentai/${henid}?lolhuman=${lolhuman}`)
                    get_result = get_result.result
                    txt = `Title Romaji : ${get_result.title_romaji}\n`
                    txt += `Title Native : ${get_result.title_native}\n`
                    txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    txt += `Parodies : ${get_info.parodies}\n`
                    txt += `Character : ${get_info.characters.join(", ")}\n`
                    txt += `Tags : ${get_info.tags.join(", ")}\n`
                    txt += `Artist : ${get_info.artists}\n`
                    txt += `Group : ${get_info.groups}\n`
                    txt += `Languager : ${get_info.languages.join(", ")}\n`
                    txt += `Categories : ${get_info.categories}\n`
                    txt += `Pages : ${get_info.pages}\n`
                    txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(txt)
                    break
					case 'hit':
					
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					
					hitLimiy(sender)
					break
				case 'ep':
					if (args.length < 1) {
						return reply('Pilih themenya om, 1 - 216')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.tech/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong om')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.tech/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=jKUeppeFD7Kgb8f4ehXl`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
						iky.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
	case 'creategroup':
	if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
	var gh = body.slice(12)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var cgc = gh.split("|")[1];
	iky.groupCreate(`${cgc}`, [`${mentioned}`])
	break
	case 'ttp2':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					await limitAdd(sender)
	 spawn('convert', [
						'./database/gambar/bg.png',
						'-gravity',
						'Center',
						'-fill',
						'database/gambar/gradient.png',
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-size',
						'1280x1280',
						'-pointsize',
						'240',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+360',
						args.join(' '),
						'./database/tmp/ttpgradient.png'
						])
					.on('error', () => reply('Gagal, Coba ulangi'))
					.on('exit', () => {
					exec('cwebp -q 50 ' + './database/tmp/ttpgradient.png' + ' -o database/tmp/' + 'stikergradient' + '.webp', (error, stdout, stderr) =>
                  {
                  	
					let stik = fs.readFileSync('./database/tmp/' + 'stikergradient' + '.webp')
				iky.sendMessage(from, stik, sticker, {quoted: mek})
					});
					})
					break
					case 'passed':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/passed.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Foto'))
					.on('exit', () => {
						skull = fs.readFileSync('database/tmp/welkon.jpg')
					iky.sendMessage(from,skull,image)
					})
					break
					case 'teswm':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/passed.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
						var imgbb = require('imgbb-uploader')
                     sreply(mess.wait)
                  
                    anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad",'database/tmp/welkon.jpg')
					ranp = getRandom('.jpg')
					rano = getRandom('.webp')
					exec(`wget ${anu.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
					
					exec(`webpmux -set exif ${addMetadata('S', 's')} ${rano} -o ${rano}`, async (error) => {
					
					iky.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
	
					
					break
					case 'slot2':
                const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]    
                const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]   
                const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]  
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
              iky.sendMessage(from, `[ 🎰 SLOTS 🎰 ]\n-----------------\n${somtoy}\n${somtoyy} ◀️\n${somtoyyy}\n-----------------\n[ 🎰 |SLOTS| 🎰 ]\n\n_*SELAMAT ANDA BERHAK MENDAPATKAN REWARD!*_\n\n\n\n\n*TAPI BOONG:V* \nBuat hadiah nya masih mikir`, text)
                } else if (somtoyy == '🍒 : 🍒 : 🍒') {
                iky.sendMessage(from, `[ 🎰 |SLOTS| 🎰 ]\n-----------------\n${somtoy}\n${somtoyy} ◀️\n${somtoyyy}\n-----------------\n[ 🎰 |SLOTS| 🎰 ]\n\n_*SELAMAT ANDA BERHAK MENDAPATKAN REWARD!*_\n\n\n\n\n*TAPI BOONG:V* \nBuat hadiah nya masih mikir`, text)
                } else if (somtoyy == '🔔 : 🔔 : 🔔') {
                iky.sendMessage(from, `[ 🎰 |SLOTS| 🎰 ]\n-----------------\n${somtoy}\n${somtoyy} ◀️\n${somtoyyy}\n-----------------\n[ 🎰 |SLOTS| 🎰 ]\n\n_*SELAMAT ANDA BERHAK MENDAPATKAN REWARD!*_\n\n\n\n\n*TAPI BOONG:V* \nBuat hadiah nya masih mikir`, text)
                } else if (somtoyy == '🍐 : 🍐 : 🍐') {
                iky.sendMessage(from, `[ 🎰 |SLOTS| 🎰 ]\n-----------------\n${somtoy}\n${somtoyy} ◀️\n${somtoyyy}\n-----------------\n[ 🎰 |SLOTS| 🎰 ]\n\n_*SELAMAT ANDA BERHAK MENDAPATKAN REWARD!*_\n\n\n\n\n*TAPI BOONG:V!* \nBuat hadiah nya masih mikir`, text)
                } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                iky.sendMessage(from, `[ 🎰 |SLOTS| 🎰 ]\n-----------------\n${somtoy}\n${somtoyy} ◀️\n${somtoyyy}\n-----------------\n[ 🎰 |SLOTS| 🎰 ]\n\n_*SELAMAT ANDA BERHAK MENDAPATKAN REWARD!*_\n\n\n\n\n*TAPI BOONG:V* \nBuat hadiah nya masih mikir`, text)
                } else {
                iky.sendMessage(from, `Kamu Kalah\n\n[ 🎰 |SLOTS| 🎰 ]\n-----------------\n${somtoy}\n${somtoyy} ◀️\n${somtoyyy}\n-----------------\n[ 🎰 |SLOTS| 🎰 ]\n\nMaaf Bwang Mwhehe`, text)
                }
            break
            
					case 'lope':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/lope.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Foto'))
					.on('exit', () => {
						skull = fs.readFileSync('database/tmp/welkon.jpg')
					iky.sendMessage(from,skull,image)
					})
					break
					case 'filter1':
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/PicsArt_02-24-08.09.44.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Foto'))
					.on('exit', () => {
						skull = fs.readFileSync('database/tmp/welkon.jpg')
					iky.sendMessage(from,skull,image)
					})
					break
					case 'filter2':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/png1.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Foto'))
					.on('exit', () => {
						skull = fs.readFileSync('database/tmp/welkon.jpg')
					iky.sendMessage(from,skull,image)
					})
					break
					case 'filter3':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/png2.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Foto'))
					.on('exit', () => {
						skull = fs.readFileSync('database/tmp/welkon.jpg')
					iky.sendMessage(from,skull,image)
					})
					break
					case 'filter4':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/png3.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Foto'))
					.on('exit', () => {
						skull = fs.readFileSync('database/tmp/welkon.jpg')
					iky.sendMessage(from,skull,image)
					})
					break
					case 'filter5':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/png4.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Foto'))
					.on('exit', () => {
						skull = fs.readFileSync('database/tmp/welkon.jpg')
					iky.sendMessage(from,skull,image)
					})
					break
					case 'filter6':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					limitAdd(sender)
				mediaP = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaP = await iky.downloadAndSaveMediaMessage(mediaP)
				reply("Sedang mengirim...")
				exec("convert "+encmediaP+" 'database/gambar/png5.png' -resize 1280x1280 -gravity Center -geometry +0+0 -composite './database/tmp/welkon.jpg'")
					.on('error', () => reply('Gagal Untuk Mengambil Data Foto'))
					.on('exit', () => {
						skull = fs.readFileSync('database/tmp/welkon.jpg')
					iky.sendMessage(from,skull,image)
					})
					break
					case 'play2':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
limitAdd(sender)
limitAdd(sender)
limitAdd(sender)
     let tdl = require('ytdl-core')
     let yts = require('yt-search')
        let results = await yts(args.join(' '))
  let vid = results.all.find(video => video.seconds < 3600)
      let uel = vid.url
        if(tdl.validateURL(uel)){
      audio_file = await './ytdl/' + 'audio' + tdl.getURLVideoID(uel) + '.mp3';
      await  reply("Sedang mendownload...sabar ngab...");
      await tdl(uel, {quality: "highestaudio", filter: "audioonly"})
       .on('info', async (info) => {
       judul = await info.videoDetails.title
       })
        .pipe(fs.createWriteStream(audio_file).on('finish', async ()=>{
          await reply("Sedang mengirim...");
          console.log(tdl)
          await iky.sendMessage(from, fs.readFileSync(audio_file), document, {mimetype: 'audio/mp3',quoted:mek, filename: judul+'.mp3'}).then(async ()=>{
            await fs.unlinkSync(audio_file);
          });
        }));
    }else{
      await reply("Error | Lagu tidak ditemukan...");
    }
    break
    case 'getvido':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
     let vido = require('ytdl-core')
     let tto = require('yt-search')
        let resultl = await tto(args.join(' '))
  let uro = resultl.all.find(video => video.seconds < 3600)
      let opz = uro.url
        if(vido.validateURL(opz)){
      audio_file = await './ytdl/' + 'video' + vido.getURLVideoID(opz) + '.mp4';
      await  reply("Sedang mendownload...sabar ngab...");
      await vido(opz, {quality: "highestvideo", filter: "videoonly"})
       .on('info', async (info) => {
       judul = await info.videoDetails.title
    
       })
        .pipe(fs.createWriteStream(audio_file).on('finish', async ()=>{
          await reply(`Sedang mengirim...${judul}`);
          console.log(vido)
          await iky.sendMessage(from, fs.readFileSync(audio_file), document, {mimetype: 'video/mp4',quoted:mek, filename: judul+'.mp4'}).then(async ()=>{
            await fs.unlinkSync(audio_file);
          });
        }));
    }else{
      await reply("Error | Lagu tidak ditemukan...");
    }
    break
					case 'harta':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					const heh = ['es1.png', 'es2.png', 'es3.png','es4.png','es7.png', 'es9.jpg','es10.jpg', 'es11.jpg', 'es12.jpg','es13.jpg', 'es14.jpg', 'gradient.png','es7.png', 'es8.png', 'es9.jpg']
					const tatah = heh[Math.floor(Math.random() * heh.length)]
					sreply(mess.wait)
						spawn('convert', [
						'./database/gambar/bg.png',
						'-gravity',
						'Center',
						'-fill',
						'database/gambar/'+tatah,
						'-font',
						'./src/font/Panton-BlackitalicCaps.otf',
						'-strokewidth',
						'5',
						'-stroke',
						'./database/gambar/white.png',
						'-size',
						'1280x1280',
						'-pointsize',
						'300',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+0',
						`HARTA\nTAHTA\n${args.join(' ')}`,
						'./database/tmp/komtol.jpg'
						])
					.on('error', () => reply('Gagal, Silahkan coba lagi'))
					.on('exit', () => {
					skull = fs.readFileSync('./database/tmp/komtol.jpg')
					iky.sendMessage(from, skull, image, {quoted: mek})
					})
					limitAdd(sender)
					break
					case 'meme3':
					if (args.length < 1) return reply('teksnya mana gan?')
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
				 spawn('convert', [
						'./database/gambar/memex.jpg',
						'-gravity',
						'Center',
						'-fill',
						'./database/gradient.png',
						'-font',
						'./src/font/ObelixPro-cyr.ttf',
						'-strokewidth',
						'0',
						'-stroke',
						'./database/gambar/white.png',
						'-size',
						'1280x1280',
						'-pointsize',
						'50',
						'-interline-spacing',
						'10.0',
						'-annotate',
						'+50-180',
						args.join(' '),
						'./database/tmp/kool.jpg'
						])
					.on('error', () => reply('Gagal, Silahkan coba lagi'))
					.on('exit', () => {
					skull = fs.readFileSync('./database/tmp/kool.jpg')
					iky.sendMessage(from, skull, image, {quoted: mek})
					})
					limitAdd(sender)
					
					break
					case 'stickmeme':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
				try {
				ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				sreply(mess.wait)
				owgimbal = await iky.downloadAndSaveMediaMessage(ger)
				spawn('convert', [owgimbal, '-gravity', 'Center', '-fill', '#ffffff', '-font', './src/font/Panton-BlackitalicCaps.otf', '-strokewidth', '5', '-stroke', '#000000', '-resize', '1280x1280', '-pointsize', '160', '-interline-spacing', '7.5', '-annotate', '+0+400', args.join(' ').toUpperCase(), './database/tmp/stickmeme.jpg'])
				.on('error', () => reply('Gagal Untuk Membuat!!'))
				.on('exit', () => {
				sendStc('database/tmp/stickmeme.jpg')
				})
				} catch {
				reply(`Reply sticker dengan tulisan ${prefix}stickmeme teksmu!!`)
				}
				limitAdd(sender)
				break
					case 'meme1':
					if (args.length < 1) return reply('teksnya mana gan?')
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
				 spawn('convert', [
						'./database/gambar/pip.jpeg',
						'-gravity',
						'Center',
						'-fill',
						'./hentai.jpeg',
						'-font',
						'./src/font/Panton-BlackitalicCaps.otf',
						'-size',
						'1280x1225',
						'-pointsize',
						'28',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'-145-160',
						args.join(' '),
						'./database/tmp/komtol.jpg'
						])
					.on('error', () => reply('Gagal, Silahkan coba lagi'))
					.on('exit', () => {
					skull = fs.readFileSync('./database/tmp/komtol.jpg')
					iky.sendMessage(from, skull, image, {quoted: mek})
					limitAdd(sender)
					})
					break
					case 'meme2':
					if (args.length < 1) return reply('teksnya mana gan?')
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					spawn('convert', [
						'./database/gambar/kok.jpeg',
						'-gravity',
						'Center',
						'-fill',
						'./database/gradient.png',
						'-font',
						'./src/font/Panton-BlackitalicCaps.otf',
						'-size',
						'1280x1225',
						'-pointsize',
						'28',
						'-interline-spacing',
						'10.0',
						'-annotate',
						'-100-80',
						args.join(' '),
						'./database/tmp/komtol.jpg'
						])
					.on('error', () => reply('Gagal, Silahkan coba lagi'))
					.on('exit', () => {
					skull = fs.readFileSync('./database/tmp/komtol.jpg')
					iky.sendMessage(from, skull, image, {quoted: mek})
					})
					break
					case 'sharta':
					if (args.length < 1) return reply('teksnya mana gan?')
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					const iw = ['es1.png', 'es2.png', 'es3.png','es4.png','es7.png', 'es9.jpg','es10.jpg', 'es11.jpg', 'es12.jpg','es13.jpg', 'es14.jpg', 'gradient.png','es7.png', 'es8.png', 'es9.jpg']
			const turun = iw[Math.floor(Math.random() * iw.length)]
					sreply(mess.wait)
						spawn('convert', [
						'./database/gambar/bg.png',
						'-gravity',
						'Center',
						'-fill',
						'database/gambar/'+turun,
						'-font',
						'./src/font/Panton-BlackitalicCaps.otf',
						'-strokewidth',
						'5',
						'-stroke',
						'./database/gambar/white.png',
						'-size',
						'1280x1280',
						'-pointsize',
						'300',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+0',
						'HARTA\nTAHTA\n'+args.join(' '),
						'./database/tmp/komto.jpg'
						])
					exec('cwebp -q 50 ' + './database/tmp/komto.jpg' + ' -o database/tmp/' + 'ttpl' + '.webp', (error, stdout, stderr) =>
                  {
                  	
					let stik = fs.readFileSync('./database/tmp/' + 'ttpl' + '.webp')
					iky.sendMessage(from, stik, sticker, {quoted: mek})
					})
				
					limitAdd(sender)
					break
	case 'ttp':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					await limitAdd(sender)
				if (args.length < 0) return reply(mess.blank)
				spawn('convert', [
						'./database/gambar/bg.png',
						'-gravity',
						'Center',
						'-fill',
						'#ffffff',
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-strokewidth',
						'5',
						'-stroke',
						'#000000',
						'-size',
						'1280x1280',
						'-pointsize',
						'240',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+360',
						args.join(' '),
						'./ttp.png'
						])
					.on('error', () => reply('Gagal, Coba ulangi'))
					.on('exit', () => {
					exec('cwebp -q 50 ' + './ttp.png' + ' -o ' + 'stiker' + '.webp', (error, stdout, stderr) =>
{
					let stik = fs.readFileSync('stiker' + '.webp')
					iky.sendMessage(from, stik, sticker, {quoted: mek})
					});
					})
					break
					case 'wm':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					await limitAdd(sender)
				if (args.length < 0) return reply(mess.blank)
				spawn('convert', [
						'./database/gambar/bg.png',
						'-gravity',
						'Center',
						'-fill',
						'#ffffff',
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-strokewidth',
						'5',
						'-stroke',
						'#000000',
						'-size',
						'1280x1280',
						'-pointsize',
						'240',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+360',
						args.join(' '),
						'./ttp.png'
						])
					.on('error', () => reply('Gagal, Coba ulangi'))
					.on('exit', () => {
					exec(`cwebp -set exif ${addMetadata('Kurumi Chan  ', '@_rizkyfadilah8')}  -q 50 ` + './ttp.png' + ' -o ' + 'stiker' + '.webp', (error, stdout, stderr) =>
{
					let stik = fs.readFileSync('stiker' + '.webp')
					iky.sendMessage(from, stik, sticker, {quoted: mek})
					});
					})
					break
	case 'nightcore':
	if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tonightcore':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                	iky.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					sreply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						
						fs.unlinkSync(ran)
						
					})
					break
					
				case 'reverse':
					
                   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}  `, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				
				case 'stiksearch':
				try {
				anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${body.slice(11)}&apikey=${vhtear}`, {method: 'get'})
				
					reply(`${anu.result.data}${anu.result.response}`)
					await limitAdd(sender)
					} catch (e) {
						reply(`Error Atau sticker tersebut tidak ada`)
						}
					break
					case 'pptrigger':
                                             var imgbb = require('imgbb-uploader')
                                         if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('pp siapa jin? tag lah')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await iky.getProfilePicture(mentioned)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
                                         ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${anu.display_url}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted:mek})
                                                //fs.unlinkSync(rano)
                           }) //barxnl
                                          
                                             break
                                             case 'slot':
                                             if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                             limitAdd(sender)
                                             const lot =['4','9','5','3','7','8','10','9','4','9','2','20','6']
					const skot = lot[Math.floor(Math.random() * lot.length)]
                                             const buah = ['🍊','🍒','🍐'] // Versi Simpel
        const empat = buah[Math.floor(Math.random() * buah.length)]  
        const lima = buah[Math.floor(Math.random() * buah.length)]   
        const tiga = buah[Math.floor(Math.random() * buah.length)]  
        if (empat === lima && lima === tiga){
        sreply(`
${empat} - ${lima} - ${tiga}
KAMU MENANG
SELAMAT KAMU MENDAPATKAN LIMIT ${skot}`)
bayarLimit(sender, skot)
        } else {
        sreply(`kamu Salah!!
${empat} - ${lima} - ${tiga}
semangat yah🥳`)
        }
        break
        
        
				case 'grouplist':
               if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
              var txt = iky.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${v.name}\n\n*Status:* ${v.read_only ? 'Keluar' : 'Bergabung'}\n*Spam:* ${v.spam_only ? 'True' : 'False'}\n*Mute:* ${v.mute_only ? 'True' : 'False'}\n*Pesan belum dibaca:* ${v.count}\n*All Pesan:* ${v.t}\n*ID:* ${v.jid}\n\n═════════════════`).join`\n\n`
  reply('List Groups Kurumi Chan  :\n' + txt)
              limitAdd(sender)
break
case 'mememaker':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
				memet = body.trim().split('|')
				if (memet.length > 3) return reply('Teksnya kepanjangan, maksimal 6 karakter')
				try {
				ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				sreply(mess.wait)
				owgi = await iky.downloadAndSaveMediaMessage(ger)
				
				spawn('convert', [owgi, '-gravity', 'Center', '-fill', '#ffffff', '-font', './src/font/Freshman.ttf', '-strokewidth', '5', '-stroke', '#000000', '-resize', '1290x1290', '-pointsize', '100', '-interline-spacing', '7.5', '-annotate', '+0-500',memet[0].slice(11).toUpperCase(), '-fill', '#ffffff', '-strokewidth', '5', '-stroke', '#000000', '-pointsize', '100', '-interline-spacing', '7.5', '-annotate', '+0+500',memet[1].toUpperCase(), './database/tmp/hhasil.jpg'])
				.on('error', () => reply('Gagal Untuk Membuat!!'))
				.on('exit', () => {
				iky.sendMessage(from, fs.readFileSync('database/tmp/hhasil.jpg'), MessageType.image, {quoted: mek})
				})
				} catch {
				reply(`Kirim gambar dengan caption ${prefix}mememaker teks1|teks2, atau reply gambar yang sudah dikirim`)
				}
				limitAdd(sender)
				break
case 'hitamputih':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
				mediaQ = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				encmediaQ = await iky.downloadAndSaveMediaMessage(mediaQ)
				exec("convert "+encmediaQ+" -type Grayscale 'hiput.jpg'")
				.on('error', () => reply('Gagal Untuk Membuat!!'))
				.on('exit', () => {
				iky.sendMessage(from, fs.readFileSync('hiput.jpg'), MessageType.image, {quoted: mek})
				})
				limitAdd(sender)
				break
case 'onlinelist':
				case 'listonline':
					  if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					online = Object.keys(iky.chats.get(from).presences)
					teks = `List online of group *${groupMetadata.subject}*\nTotal : ${online.length}\n\n`
					no = 0
					for (let O of online) {
						no += 1
						teks += `[${no.toString()}] @${O.split('@')[0]}\n`
					}
					mentions(teks, online, true)
					limitAdd(sender)
break
				case 'setstatus':
				bos = body.slice(10)
				iky.setStatus(args.join(' '))
				sreply(`berhasil set status menjadi ${bos}`)
				break
				case 'cepat':
				if (!isQuotedAudio) return reply('Reply audio nya om')
				pat = body.slice(7)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=${pat},asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'ban':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`khusus premium`)
						bnnd = body.slice(6)
				
						bend = `${bnnd}@s.whatsapp.net`
						banned.push(bend)
						fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
						if (!isOwner) return reply(`Sukses membanned ${bnnd}@s.whatsapp.net`)
						
bb = mek.message.extendedTextMessage.contextInfo.participant
				
						oo = `${bb}`
						banned.push(oo)
						fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
						if (isOwner)return  reply(`Sukses selamat ${oo}`)
						break
				 case 'dellban':
				if (!isOwner) return reply(`gelud?`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
						banned.splice(`${mentioned}`, 1)
						fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
						reply(`Sukses membuka banned ${mentioned}`)
					break
				case 'robot':
				if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media}  -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran} `, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'sampah':
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad",owgi)
                                        buffer = await getBuffer(`https://mieayam-kering.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=freeKeY `, {method: 'get'})
                                       iky.sendMessage(from, buffer, image, {quoted: mek})
						                }
                                        break
                                        
				    
				case 'ttp': 
				   if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
					if (args.length < 1) return reply('𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗸𝘀 𝗹𝗮𝗵!!!')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=R73mNBEhc6LtUJP9JbN4`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						ola( buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
					case 'rgb':
  if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                     var imgbb = require('imgbb-uploader')
                     teks = encodeURIComponent(args.join(' '))
                     sreply(mess.wait)
                     try {
                     pp = `https://api.vhtear.com/textxgif?text=${teks}&apikey=${vhtear}`
                     media = await getBuffer(pp)
                     datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                     fs.writeFileSync('attp.gif', datae, 'base64')
                     res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'attp.gif')
                     ranp = getRandom('.gif')
                     rano = getRandom('.webp')
                     exec(`wget ${res.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=10 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                             fs.unlinkSync(ranp)
                             if (err) return reply(mess.error.stick)
                             pps = fs.readFileSync(rano)
                             iky.sendMessage(from, pps, sticker, {quoted: mek})
                             fs.unlinkSync(rano)
                             limitAdd(sender)
                            })
                    } catch(e) {
                       reply('Error!')
                       }

break
					
				
				
					case 'strigger':
                       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
                                        if (!isRegistered) return reply(ind.noregis())
   var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${anu.display_url}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                //fs.unlinkSync(rano)
                                                limitAdd(sender)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             
break


				case 'rip':
                                        if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        buffer = await getBuffer(`https://api.zeks.xyz/api/rip?apikey=administrator&img=${teks}`, {method: 'get'})
						                iky.sendMessage(from, buffer, image, {quoted: mek})
						                }
                                        break
                                        case 'ttpberwarna':
				spawn('convert', [
						'./database/gambar/bg.png',
						'-gravity',
						'Center',
						'-fill',
						'database/gambar/gradient.jpg',
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-size',
						'1280x1280',
						'-pointsize',
						'240',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+360',
						args.join(' '),
						'./database/tmp/ttpgradient.png'
						])
					setTimeout( () => {
					exec('cwebp -q 50 ' + './database/tmp/ttpgradient.png' + ' -o database/tmp/' + 'stikergradient' + '.webp', (error, stdout, stderr) =>

					{


					let stik = fs.readFileSync('./database/tmp/' + 'stikergradient' + '.webp')

					iky.sendMessage(from, stik, sticker, {quoted: mek})
					});
					}, 2500)
					break
					case 'listchat':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					 var txt = iky.chats.array.filter(v => v.jid.endsWith('@s.whatsapp.net')).map(v =>`${v.name}\n${v.jid} [${v.read_only ? 'Read' : 'No Read'}]`).join`\n\n`
  reply('List chat:\n' + txt)
  await limitAdd(sender)
  break
					case 'playmp3':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                sreply(mess.wait)
                babi = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${babi}&apikey=apivinz`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `╭─「 *TIMELINE PLAY MP3* 」\n│❏ Judul: ${anu.result.title}\n│❏ Source: ${anu.result.source}\n│❏ Ukuran: ${anu.result.size}\n│\n│TUNGGU SEBENTAR LAGI DIKIRIM\n│ MOHON JANGAN SPAM YA BEB\n ──────`
                buffer = await getBuffer(anu.result.thumbnail)
                gagu = await getBuffer(anu.result.url_audio)
                iky.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                iky.sendMessage(from, gagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
					case 'send2':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
				     var pc = body.slice(6)
				     var poson = pc.split("|")[0];
					 var pisin = pc.split(" |")[1];
				     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyt('Tag target yang ingin di chat')
					 mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					 iky.sendMessage(`${mentioned}`, pisin, text,{quoted:mek})
					reply(`berhasil!`)
					break
					case 'virtex':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (args[0].startsWith(`@6282255123081`)) return reply('Gagal tidak dapat mengirim ke nomer bot')
                                       if (args[0].startsWith(`@6282387804410`)) return reply('Gagal tidak dapat mengirim ke nomer owner')
				     var pc = body.slice(7)
				     var palx = pc.split("|")[0];
					 var pesm = pc.split(" |")[1];
				     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyt('Tag target yang ingin di chat')
					 mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					 iky.sendMessage(`${mentioned}`, virtex() , text)
					break
					case 'vir':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
				var gh = body.slice(4)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var o = gh.split("|")[1];
					if (o >= 61) return reply('Untuk menghindari ban, command panggil dibatasi sampai 60 kali')
					for (let i = 0; i < o; i++) {
					iky.sendMessage(`${mentioned}`,virtex(), text)
					}
					
					break
					case 'math':
				    if (args.length < 1) return reply(`[—] Kirim perintah *${prefix}math [ Angka ]*\nContoh : ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = body.slice(6)
				    if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", bukan angka!\n[—] Kirim perintah *${prefix}math [ Angka ]*\nContoh : ${prefix}math 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*MATH*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				    break
				case 'ytmp3':
				if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)

         var ytdl = require('ytdl-core')
         url = args[0]
         if(ytdl.validateURL(url)){
      audio_file = await './ytdl/' + 'audio' + ytdl.getURLVideoID(url) + '.mp3';
      await reply("Sedang mendownload...sabar ngab...");
      await ytdl(url, {quality: "highestaudio", filter: "audioonly"})
       .on('info', async (info) => {
       judul = await info.videoDetails.title
       })
        .pipe(fs.createWriteStream(audio_file).on('finish', async ()=>{
          await reply("Sedang mengirim...");
          console.log(ytdl)
          await iky.sendMessage(from, fs.readFileSync(audio_file), document, {quoted:mek, mimetype: 'audio/mp3', filename: judul+'.mp3'}).then(async ()=>{
            await fs.unlinkSync(audio_file);
          });
        }));
    }else{
      await reply("Error | Video tidak ditemukan...");
    }
         break
         case 'tag':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                teks67 = body.slice(4)
                nom = `${args[0]}@s.whatsapp.net`
					iky.sendMessage(from, `@${nom.split("@s.whatsapp.net")[0]} tagged`, text, {contextInfo: {mentionedJid: [nom]}})
					break
					case 'pcgc':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (args.length < 1) return
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var papa = pc.split("|")[1];
					iky.sendMessage(nomor, papa, text)
					break
					case 'gctag':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (args.length < 1) return
					var pc = body.slice(7)
					var nimir = pc.split("|")[0];
					var mama = pc.split("|")[1];
					
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					iky.sendMessage(nimir, mama, text,{contextInfo: { mentionedJid: mem }}),
					
					await limitAdd(sender)
break
                                        case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return iky.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return iky.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						iky.sendMessage(from, `Antidelete diaktifkan di grup ini!`, MessageType.text)
					} else if (!isGroup) {
						iky.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return iky.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						iky.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						iky.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return iky.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return iky.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					iky.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						iky.sendMessage(from, `Antidelete dimatikan di grup ini!`, MessageType.text)
					} else if (!isGroup) {
						iky.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						iky.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						iky.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				
				case 'tahta':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙃𝘼𝙍𝙏𝘼 𝙏𝘼𝙃𝙏𝘼 𝘼𝙋𝘼`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const tahta = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				var teks = encodeURIComponent(body.slice(7))
				if (!teks) return iky.sendMessage(from, 'Input teks yang ingin di tulis', msgType.text, { quoted: mek })
				var buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${vhtear}`)
				iky.sendMessage(from, `Otewe Nyet!`, MessageType.text, tahta)
				iky.sendMessage(from, buffer, MessageType.image, { caption: `HARTA TAHTA ${teks}`, quoted: mek })
				break
				case 'setnumber':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `𝙎𝙮𝙨𝙩𝙚𝙢 𝘾𝙝𝙖𝙣𝙜𝙚 𝙉𝙪𝙢𝙗𝙚𝙧`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				if (args.length < 1) return
				numbernye = args[0]
				iky.sendMessage(from, `Succes Mengganti Number Conversation : ${numbernye}`, MessageType.text, selepbot)
				break
				
				case 'restart':
				if (!isOwner) return reply(`Lu siapa?`)
				reply(`Restarting 3 Second..`)
				setTimeout( () => {
				banned.splice('reset')
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
				
					yes.splice('reset')
					fs.writeFileSync('./src/yes', JSON.stringify(yes))
					_gif.splice('reset')
					fs.writeFileSync('./database/user/gif.json', JSON.stringify(_gif))
					_limit.splice('reset')
					fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
				salah.splice('reset')
					fs.writeFileSync('./database/user/salah.json', JSON.stringify(salah))
dug.splice('reset')
					fs.writeFileSync('./src/dug.json', JSON.stringify(dug))
laims.splice('reset')
					fs.writeFileSync('./database/user/laim.json', JSON.stringify(laims))
					console.log('[DATABASE] Berhasil mereset database')
					reply(`Berhasil Restarting Database..`)
					}, 3000)
					reply(`Mematikan Bot 3 Second..`)
				setTimeout( () => {
					reply(`Succes!`)
					}, 6000)
					setTimeout( () => {
					iky.close()
					}, 10000)
break
				case 'turnoff':
				if (!isOwner) return reply(`Lu siapa?`)
				
					reply(`Mematikan Bot 3 Second..`)
					
					setTimeout( () => {
					reply(`Succes!`)
					}, 5000)
					setTimeout( () => {
					reply(`Succes!`)
					
				iky.close()
				}, 10000)
				break
				case 'resetuang':
				if (!isOwner) return reply(`Lu siapa?`)
				uang.splice('reset')
					fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
					console.log('[UANG] Berhasil mereset uang')
					swreply(`berhasil reset uang`)
				break
				case 'resetlevel':
				if (!isOwner) return reply(`Lu siapa?`)
				_level.splice('reset')
					fs.writeFileSync('./database/user/uang.json', JSON.stringify(_level))
					console.log('[LEVEL] Berhasil mereset level')
					swreply(`berhasil reset level`)
				break
				case 'play2':
				    if (args.length < 1) return replyt('Yang mau di cari apa um?')
				    if (!isOwner) return replyt('Maaf Ini Cuma Buat Owner')
				    pal = await fetchJson(`https://arugaytdl.herokuapp.com/search?q=${body.slice(7)}`)
				    if (pal.eror) return replyt(pal.eror)
				    sreply(mess.wait)
				    t = `\`\`\` PLAY \n\nJudul : ${pal[0].title}\nDurasi : ${pal[0].duration} detik\nUploaded : ${pal[0].uploadDate}\nView : ${pal[0].viewCount}\n\nHarap Tunggu Audio sedang di kirim\`\`\``
				    thumb = await getBuffer(pal[0].thumbnail)
				    iky.sendMessage(from, thumb, image, {quoted: mek, caption: t})
				    anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=https://youtu.be/${pal[0].id}`, {method: 'get'})
				    buffer = await getBuffer(anu.result)
				    iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
				    break
				case 'kontak':
				
				sreply(getName())
					break
				case 'afk':
				         if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
				if (!isGroup) return reply(mess.only.group)
				if (isAfkOn) return reply(`Anda sudah afk sejak ${weekGet(sender, _afk)} ${getAfkDate(sender, _afk)}\n${getAfkTime(sender, _afk)} WIB\n*Alasan:* ${getAfkReason(sender, _afk)}`)
				reson = body.slice(5) || 'Tanpa Alasan'
				addAfkUser(sender, reson)
				iky.sendMessage(from,`*@${sender.split("@s.whatsapp.net")[0]}* Sekarang Afk!\n*Alasan:* ${reson}`,text ,{quoted: mek, contextInfo: { mentionedJid: [sender] }})
				break
case 'carbon':
					if (args.length < 1)return reply('Sertakan teks nya')

					

					teks = body.slice(8)

					buffer = await getBuffer(`https://carbonnowsh.herokuapp.com/?code=${teks}`)

					iky.sendMessage(from, buffer, image, {quoted: mek})

					break
					case 'niki':
				{
					var items = ["anime neko"];
					var nime = items[Math.floor(Math.random() * items.length)];
					var url = "https://api.fdci.se/rep.php?gambar=" + nime;

					axios.get(url)
						.then((result) => {
							var n = JSON.parse(JSON.stringify(result.data));
							var nimek = n[Math.floor(Math.random() * n.length)];
							imageToBase64(nimek)
								.then(
									(response) => {
										iky.sendMessage(from, 'Otewe Nyet!', MessageType.text)
										var buf = Buffer.from(response, 'base64');
										iky.sendMessage(from, buf, MessageType.image, { caption: `Neko!`, quoted: mek })
									}
								)
								.catch(
									(error) => {
										console.log(error);
									}
								)
						});
				}
				break
				case 'shota':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				{
					var items = ['shota anime', 'anime shota'];
					var nime = items[Math.floor(Math.random() * items.length)];
					var url = "https://api.fdci.se/rep.php?gambar=" + nime;

					axios.get(url)
						.then((result) => {
							var n = JSON.parse(JSON.stringify(result.data));
							var nimek = n[Math.floor(Math.random() * n.length)];
							imageToBase64(nimek)
								.then(
									(response) => {
										var buf = Buffer.from(response, 'base64');
										iky.sendMessage(from, mess.wait, MessageType.text, selepbot)
										iky.sendMessage(from, buf, MessageType.image, { caption: `SHOTA!`, quoted: mek })

									}
								)
								.catch(
									(error) => {
										console.log(error);
									}
								)

						});
				}
				break
				case 'stikwm':
				const a = "created by: RIZKY FADILAH"
				const b = ":V"
				var teks = 'processing data, please wait'
				await createExif(a, b)
				await sleep(3000)
				await iky.sendMessage(from, teks, MessageType.text)
				let op = "author: " + a + "\n"
				op += "pack: " + b + "\n"
				op += "name: RIZKY"
				if (isMedia && !m.message.imageMessage || isQuotedVideo) {
					const decryptMedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const mediaData = await conn.downloadMediaMessage(decryptMedia)
					if (Buffer.byteLength(mediaData) >= 6186598.4) return iky.sendMessage(from, `sizenya terlalu gede sayang, dd gakuat :( max 5,9mb`, MessageType.text)
					modifWebp(time, mediaData).then(res => {
						iky.sendMessage(from, res, MessageType.sticker, {
							contextInfo: {
								participant: "6282387804410@s.whatsapp.net",
								quotedMessage: {
									conversation: op
								}
							}
						})
					})
				} else if (isMedia && !m.message.videoMessage || isQuotedImage) {
					const decryptMedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					let asu = (fs.readFileSync('./image/image.jpg', {
						encoding: 'base64'
					}))
					const roundedCorners = Buffer.from(
						'<svg><rect x="0" y="0" width="600" height="600" rx="300" ry="300"/></svg>'
					);
					await iky.downloadMediaMessage(decryptMedia).then(mediaData => {
						sharp(mediaData).resize({
							width: 600,
							height: 600
						}).composite([{
							input: roundedCorners,
							blend: 'dest-in'
						}]).webp().toBuffer().then(buffer => {
							modifExif(buffer, jam, (res) => {
								iky.sendMessage(from, res, MessageType.sticker, {
									quoted: mek,
									thumbnail: asu.toString("base64")
								})
							})
						})
					})
				}
				break
				case 'lolis':
				{
					var items = ["anime loli"];
					var nime = items[Math.floor(Math.random() * items.length)];
					var url = "https://api.fdci.se/rep.php?gambar=" + nime;

					axios.get(url)
						.then((result) => {
							var n = JSON.parse(JSON.stringify(result.data));
							var nimek = n[Math.floor(Math.random() * n.length)];
							imageToBase64(nimek)
								.then(
									(response) => {
										iky.sendMessage(from, 'Otewe Nyet!', MessageType.text, { quoted: mek })
										var buf = Buffer.from(response, 'base64');
										iky.sendMessage(from, buf, MessageType.image, { caption: `LOMLI`, quoted: mek })
									}
								)
								.catch(
									(error) => {
										console.log(error);
									}
								)
						});
				}
				break
				case 'otakulist':
				anu = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=${vhtear}`, { method: 'get' })
				if (anu.error) return reply(anu.error)
				teks = '=================\n\n'
				for (let i of anu.result.data) {
					teks += `Title : ${i.title}\n*Link* : ${i.link}\n*Published* : ${i.datetime}\n\n=================\n\n`
				}
				reply(teks.trim())
				break
					case 'readall':

					if (!isOwner)return reply(mess.only.ownerB)

					var chats = await iky.chats.all()

                    chats.map( async ({ jid }) => {

                          await iky.chatRead(jid)

                    })

					teks = `\`\`\`Berhasil membaca ${chats.length} Chat !\`\`\``

					await iky.sendMessage(from, teks, MessageType.text, {quoted: mek})

					console.log(chats.length)


			
				break
				
				case 'prem':
			sreply(`${totaluser}\nTotal Premium: ${premium.length}`)
			break
			case 'infosurah':
				    if (args.length == 0) return replyt(`*_${prefix}infosurah <nama surah>_*\nMenampilkan informasi lengkap mengenai surah tertentu. Contoh penggunan: ${prefix}infosurah al-baqarah`)
				        var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
				        var { data } = responseh.data
                        var idx = data.findIndex(function(post, index) {
                          if((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase())||(post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                            return true;
                        });
                        var san = ""
                        sl = san + "Nama : "+ data[idx].name.transliteration.id + "\n" + "Asma : " +data[idx].name.short+"\n"+"Arti : "+data[idx].name.translation.id+"\n"+"Jumlah ayat : "+data[idx].numberOfVerses+"\n"+"Nomor surah : "+data[idx].number+"\n"+"Jenis : "+data[idx].revelation.id+"\n"+"Keterangan : "+data[idx].tafsir.id
                        reply(sl)
                      break  
			   
case 'return':
if (!isOwner) return
try {
sreply(JSON.stringify(eval(args.join('')), null, '\t'))
} catch (e) {
reply(String(e))
}
break
case 'eval':
				if (!isOwner) return
                try {
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)
       	         } catch (e) {
reply(String(e))
  	   	       }
        	    break
        case 'chika':
					buffer = await getBuffer(`https://pencarikode.xyz/api/chika?apikey=pais`, {method: 'get'})
					iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
				case 'citacita':
					buffer = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
					iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
					break
					case 'cek':
					var chats = await iky.chats.all()
					costum(`\`\`\`Chat ${chats.length} Belum Dibaca !\`\`\``,text,tescuk,cr)
					break
				case 'fakta':
					if (!isUser)return reply(mess.only.userB)
					reply(`by~Febb Bot`)
					const fakta =
[
'Indonesia adalah Tempat ditemukannya ular terpanjang di dunia yaitu, Python Reticulates sepanjang 10 meter di Sulawesi.',
'Suatu penyakit yang disebut “Exercise-Induced Anaphylaxis” harfiah menyebabkan orang menjadi ‘alergi’ untuk berolahraga.',
'Pada Sept1909 malam hari, warga Jakarta beruntung menyaksikan Aurora Borealis di langit yg biasanya hanya di kutub ( Prof. Truls L Hansen).',
'Bromelain yang terkandung dalam Nanas bila dikonsumsi berlebihan bagi wanita hamil bisa memicu kontraksi dini bahkan keguguran.',
'Secara resmi setiap tanggal 6 Oktober di Jepang merayakan Tom Cruise Day.',
'Jembatan suramadu (surabaya-madura) adalah jembatan terpanjang di Asia Tenggara (5438 m).',
'Burung umumnya tidak berkicau apabila mereka hinggap di tanah (Hummingbirdworld).',
'Orang sherpa di Nepal menganjurkan orang memakan bawang putih utk mencegah dan mengobati rasa tidak nyaman yg disebabkan ketinggian gunung.',
'Teka-teki silang terbesar yang pernah diterbitkan memiliki 2631 pertanyaan mendatar dan 2922 pertanyaan menurun.',
'Rafflesia Arnoldii yang tumbuh di Sumatera adalah bunga terbesar di dunia. Ketika bunganya mekar, diameternya mencapai 1 meter.',
'Tertawa dan bahagia meningkatkan imun, terutama produksi sel-sel pembunuh alamiah yang membantu melindungi tubuh dari penyakit.',
'Orang yang membayangkan suara baru yang belum pernah didengar, atau menggabungkan sebuah melodi matanya akan bergerak ke kir',
'Kecoa kentut setiap 15 menit dan terus mengeluarkan gas metana (kentut) selama 18 jam setelah kematian.',
'Menara Eiffel dibangun oleh Alexandre Eiffel, dan sebagian besar biayanya ditanggung oleh dia.',
'Rata-rata orang di dunia jatuh cinta sebanyak 7 kali dulu sebelum ditakdirkan menikah.',
'Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam.',
'Ken Edwards seorang pria asal Inggris memegang rekor Guinness untuk makan 36 kecoa dalam 1 menit.',
'Energi yang dihasilkan oleh angin ribut (topan) selama 10 menit lebih besar dibandingkan energi dari bom saat perang',
'Lagu kebangsaan Yunani mempunyai 158 bait.',
'Kata “depp” dalam bahasa Jerman artinya “idiot”.',
'Bobby Tufts (4 tahun) adalah Wali Kota termuda di dunia saat ini (Wali Kota Dorset, Minnesota, AS).',
'Menghisap rokok sambil makan cokelat dapat membunuh racun yang terdapat pada rokok tersebut. [penelitian kedokteran di Universitas Lampung]',
'Di zaman penjajahan Belanda, hukuman orang yg berzina adlh ditangkap dan dicorengkan arang pd hidungnya. Inilah asal usul “Hidung Belang”.',
'Kebanyakan orang lebih percaya terhadap kemampuan kepemimpinan seseorang jika orang itu memiliki badan yang lebih tinggi. [inilah .com]',
'Dalam setiap inci persegi permukaan smartphone terdapat skitar 25.107 kuman, artinya smartphone lebih kotor dr kloset. [Laporan dr Proporta]',
'Kebiasaan sibuk memotret dan mengunggah foto makanan di sosial media, beresiko seseorang menjadi gendut. [Dr. Valerie Taylor]',
'Anak yang gemar berolahraga lebih cerdas dibandingkan yang tidak. [penelitian di Michigan State University]',
'Kelurahan Air Jamban adalah nama kelurahan di kecamatan Mandau, kabupaten Bengkalis, provinsi Riau, Indonesia.',
'Kata “Poli” berarti Banyak dan “Tics” berarti Makhluk Pengisap Darah. Jadi kata Politics (politik) berarti Banyak Makhluk Pengisap Darah.',
'Musik dapat membuat otak bahagia dan kebanyakan mendengarkan musik dapat membuat perut cepat lapar.',
'Mendengarkan musik irama lambat saat tidur terbukti mampu meningkatkan kemampuan memori otak. [penelitian di Universitas Tubingen Jerman]',
'Pulau Giliyang di Sumenep, Jawa Timur disebut sbg pulau “Awet Muda” karena pulau ini memiliki kandungan oksigen terbaik di dunia. [tempo co]',
'Morology / Morologi adalah studi tentang percakapan konyol.',
'Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]',
'Letusan gunung Tambora mengilhami penemuan sepeda, karena bnyk hewan transportasi menjadi mati akibat dr prubahan cuaca yg ekstrem saat itu.',
'Tertawa sebanyak 100 kali setara dengan mendayung selama 10 menit. [Dr William Fry dari Stanford Medical School]',
'Studi menunjukkan penggemar musik heavy metal ternyata lebih bisa meredam emosi negatif dan lebih ekspresif. [Sciencedaily]',
'Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail]',
'Pohon kelapa membunuh 150 orang tiap tahun. Lebih banyak daripada hiu',
'Pada poster film ‘Pretty Woman’ Julia Robets terlalu pendek untuk bisa sejajar dengan Richard Gere. Maka digunakan model Shelley Michelle sebagai tubuh Julia.',
'Daerah kutub kehilangan matahari selama 186 hari dalam setahun',
'Kode Telephone Internasional untuk Antartica adalah 672.',
'Bom pertama sekutu dijatuhkan di Berlin pada perang dunia ke II. Membunuh satu-satunya gajah di Kebun Binatang Berlin.',
'Rata-rata hujan jatuh dengan kecepatan 7 mil per jam',
'Butuh 10 tahun bagi Leonardo Da Vinci untuk melukis Mona Lisa.Lukisan itu tidak ditandai dan di beri tanggal. Leonardo dan Mona mempunya susunan tulang yang persis sama dan menurut sinar X, ada 3 versi lukisan dibawah lukisan itu.',
'Nama dari kembar gemini adalah Castor dan Pullox',
'Gerakan Bruce Lee sangat cepat sehingga mereka harus melambatkan filam agar kita bisa melihat semua gerakannya.',
'Satu kilo dari berat badan kita mengandung 7000 kalori',
'Darah sama kental dengan air laut',
'Air laut di samudra Atlantik lebih asin dari pada di samudra Pasifik',
'Topeng tokoh Michael Myers di film horor ‘Helloween’ sebenernya topeng tokoh Captain Kirk (Star Trek) yang di cat putih, karena kurang dana',
'Nama asli butterfly (kupu-kupu) adalah flutterby.',
'Bayi lahir setiap 7 detik',
'Satu dari 14 wanita Amerika berambut pirang asli. Prianya hanya satu dari 17',
'The Olympic adalah saudara dari kapal Titanic, dan melayani dengan selamat selama 25 tahun.',
'Saat Titanic karam, 2228 orang ada di dalamnya. Hanya 706 yang selamat',
'Di Amerika, seseorang didiagnosa menderita AIDS tiap 10 menit. Di Afrika, seseorang meninggal karena AIDS tipa 10 menit',
'Sampai usia 6 bulan, bayi bisa menelan dan bernapas secara bersamaan. Orang dewasa tidak bisa',
'Alasan kenapa diiklan jam kebanyakan jarum menunjuk pukul 10.10, karena jam seperti sedang tersenyum',
'Tiap tahun bulan menjauh 3.82 cm dari bumi',
'Saat kita bertahan hidup dan tidak ada bahan makanan, sabuk kulit dan sepatu keds adalah makanan terbaik untuk dimakan karena mengandung cukup gizi untuk hidup sementara.',
'Dalam satu tetes air mengandung 50 juta bakteri',
'Dengan menaikan kaki pelan2 dan berbaring tenang dengan punggung lurus, kita tidak akan tenggelam di pasir hisap.',
'Satu dari 10 orang hidup di suatu pulau',
'Memakan seledri membuang kalori lebih banyak dari pada kalori yang terkandung dalam seledri itu sendiri',
'Lobster dapat hidup selama 100 tahun',
'Permen karet tidak dijual di Disney Land',
'Mangunyah permen karet saat mengupas bawang mencegah kita menangis',
'Rahang kucing gak bisa bergerak kekiri dan kanan',
'Nama Artic (kutub utara) berarti beruang dalam bahasa Yunani (Arktos), dan memang beruang kutub hanya ada di kutub utara',
'Jika kira berdiri di dasar sumur, kita bisa melihat bintang walaupun di siang hari',
'Suara yang kita dengar dari dalam kerang bukan suara ombak laut, tapi suara aliran darah dalam kepala kita.',
'Orang kebanyak yang menderita ketakutan pada ruang terbuka (kenophobia) daripada ketakukan pada ruang tertutup (claustrophobia) .',
'Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W',
'Adegan band yang terus bermain musik saat Titanic tenggelam adalah kisah nyata',
'Buku Guinness Book of Records memegang rekor sebagai buku yang paling banyak dicuri dari perpustakaan',
'35% dari orang yang ikut kontak jodoh lewat internet, sudah menikah',
'CocaCola dulu berwarna hijau',
'Secara fisik, babi tidak bisa melihat ke langit',
'Semua beruang kutub kidal',
'Kelelawar selalu belok kiri jika terbang keluar gua',
'Jim Henson pertama kali memakai kata “Muppet”. Kombinasi dari “marionette” dan “puppet.”',
'Gajah satu-satunya hewan yang tidak bisa meloncat',
'The Michelin man (figur berbaju dan bertopi putih diiklan Michelin) bernama Mr. Bib. nama aslinya Bibendum pada iklan pertama tahun 1896.',
'Kita tidak bisa menjilat siku kita sendiri',
'Kata “lethologica” menggambarkan saat dimana kita tidak bisa mengingat apa yang kita inginkan.',
'Sekitar 14% pecandu yang menggunakan jarum suntik, positif HIV.',
'Kalimat yang bisa dibaca sama dari depan dan belakang (racecar, kayak, tamat) disebut “palindrome” .',
'Siput bisa tidur selama 3 tahun',
'Diatas khatulistiwa melintas sekitar 200 satelit asing, termasuk satelit mata-mata',
'Orang di Cina lebih banyak yang berbahasa Inggris dari pada orang di Amerika',
'Karena pengaruh rotasi bumi, kalau kita melempar kearah barat, lemparan kita akan lebih jauh jatuhnya dari pada kearah timur',
'Satu dari 9000 orang menderita albino',
'Kursi listrik ditemukan oleh seorang dokter gigi',
'Kita berulang tahun bersama 9 juta orang dari seluruh dunia',
'Setiap manusia dalam hidupnya rata-rata habis untuk menunggu dilampu merah selama 2 minggu',
'Botol aqua dan tempat makan plastik baru bisa terurai dengan sempurna dalam tanah setelah 50.000 tahun',
'Kucing bisa membuat lebih dari 100 bunyi vokal, anjing hanya bisa sekitar 10',
'Gigi berang-berang tak pernah berhenti tumbuh',
'Kelelawar adalah satu-satunya mamalia yang bisa terbang',
'Jika boneka Barbie adalah manusia, ukurannya adalah 39-23-33 (99-58,5-84 cm). Tingginya sekitar 215 cm dan punya leher 2kali lebih panjang daripada manusia normal',
'Tikus beranakpinak sangat cepat dan dalam waktu 18 bulan, dua tikus dapat memiliki lebih dari 1 juta keturunan.',
'Memakai Headphone selama 1 jam dapat mengembangbiakan bakteri dalam kuping 700 kali lebih cepat.',
'Seekor Babon bernama ‘Jackie’ menjadi prajurit resmi dalam angkatan bersenjata Afrika Selatan pada Perang Dunia ',
'Bibliophile adalah sebutan untuk kolektor buku-buku langka. Bibliopole adalah penjual buku-buku langka',
'Jantung ikan paus biru berdenyut 9 kali dalam semenit',
'Arabic numerals bukan berasal dari Arab, tapi diciptakan di India.',
'Kupu-kupu melihat dengan 12000 mata',
'Bulan February tahun 1865 adalah satu-satunya bulan dalam catatan sejarah yang tidak sempat mengalami bulan purnama.',
'Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati.',
'Kecoak bisa hidup 9 hari tanpa kepala, dan akan mati karena kelaparan.',
'Di Bumi, satu tahun adalah 365 hari. Di planet Merkurius satu tahun adalah 2 hari',
'Umur dari capung adalah 24 jam',
'Pada Usia 3 bulan janin manusia mulai terbentuk sidik jari.',
'Butuh waktu 6 bulan untuk kuku kaki tumbuh dari bawah paling bawah sampai ujung kuku.',
'Daya ingat ikan hanya 3 detik',
'Bulan purnama 9 kali tebih terang daripada bulan setengah.',
'Untuk setiap patung memorial orang diatas kuda, jika 2 kaki depan kuda mengangkat, maka orang tersebut tewas dalam pertempuran, jika satu kaki kuda yang terangkat, maka orang tersebut meninggal karena luka dalam pertempuran, jika 4 kakinya menginjak tanah, orang tersebut meninggal secara normal.',
'Beruang dewasa dapat lari secepat kuda',
'Tulang kuda lebih banyak 18 buah dari tulang manusia',
'Ubur-ubur terdiri dari 95% air',
'Kulit Zebra adalah putih yang bergaris hitam',
'Kecuali manusia dan monyet, semua mamalia buta warna',
'Biji apel mengandung sianida',
'Tikus dan kuda tidak bisa muntah',
'Penguin adalah burung yang tidak bisa terbang tapi bisa berenang.',
'Astronot dilarang mengkonsumsi kacang sebelum menjelajah ruang angkasa karena jika buang angin dalam baju khusus astronot dapat membahayakan mereka.',
'Winston Churchill lahir di toilet wanita saat acara dansa',
'Sebelum ada pesawat jet, Jetlag disebut Boatlag',
'Kucing berkeringat melalui telapak kakinya (terutama saat mendengar gonggongan anjing)',
'Kucing tidak bisa merasakan rasa manis',
'Coklat meleled dalam mulut karena titik lelehnya adalah 35 derajat celcius',
'Dalam perang dahulu, orang yang buta warna dibutuhkan dalam tim pendeteksi kamuflase di militer',
'Sapi tidak punya gigi atas',
'Hedenophobic berarti takut akan kesenangan.',
'Pendeta Mesir kuno mencabuti setiap helai rambut dan bulu dari badan mereka.',
'Buaya tidak bisa menjulurkan lidah.',
'Kentut sapi termasuk penyebab utama global warming',
'Semut selalu jatuh miring ke kanan jika diberi racun serangga',
'Kucing rumah benci bau lemon dan semua yang berbau sitrus',
'Donal Bebek dilarang beredar di Finlandia karena Donal tidak pakai celana',
'Nama asli Donal bebek adalah Donald Flauntleroy Duck',
'Indra perasa kupu-kupu ada dikakinya',
'Dry Ice tidak meleleh, tapi menguap',
'Mata burung unta lebig besar dari otaknya',
'Bintang laut tidak punya otak',
'Tiap manusia punya telinga yang berbeda',
'Telur segar tenggelam diair, telur yang kadaluarsa mengambang',
'80% dari seluruh binatang di dunia adalah serangga',
'Kacang adalah salah satu bahan untuk membuat dinamit',
'Ratu Elizabeth I menderita Anthophobia (takut akan mawar)',
'RSVP adalah Respondez s’il Vous Plait yang artinya ‘mohon jawaban’',
'Mata manusia yang sehat (tidak buta warna) dapat menbedakan 500 jenis warna abu-abu.',
'Ikan mas yang bunting disebut ‘twit’.',
'Eropa adalah benua tanpa padang pasir',
'Lalat meloncat mundur saat akan terbang',
'Sekeor kucing memiliki 32 otot pada tiap telinga',
'A honeybee can fly at fifteen miles per hour.',
'Macan mempunyai kulit yang belang,bukan hanya bulu yang belang.',
'A “jiffy” is the scientific name for 1/100th of a second.',
'Hanya 3 malaikat, Gabriel, Michael dan Lucifer yang disebut dalam injil.',
'Kambing mempunya pupil mata segi empat',
'Novel pertama yang menggunakan mesin tik adalah Tom Sawyer',
'Hamster sangat suka makan jangkrik',
'Pemantik ditemukan sebelum korek api',
'Rata-rata dalam setiap batang permen coklat terdapat serangga yang meleleh bersamanya.',
'Tanduk badak terbuat dari rambutnya yang mengeras',
'Perang paling singkat dalam sejarah adalah perang Zanzibar and England tahun 1896. Zanzibar menyerah setelah 38 menit.',
'Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor',
'Kulit beruang kutub sebenarnya hitam. Bulunya berwarna bening, dan tampak putih di salju.',
'Elvis mempunyai saudara kembar bernama Garon, yang meninggal saat lahir, maka nama tengah Elvi adalah Aron, untuk menghormati saudaranya.',
'Landak punya sidik jari yang mirip manusia.',
'Kuda Nil kentut lewat mulut.',
'Shakespeare yang menemukan kata “assassination” dan “bump.”',
'Mahluk yang bisa tersipu-sipu hanya manusia',
'Jika kita memelihara ikan mas dalam ruangan yang gelap, warnanya akan berubah putih.',
'Wanita berkedip dua kali lebih banyak dari pria.',
'Nama Jeep (jip) diampil dari singkatan “GP”, bahasa militer untuk General Purpose.',
'Orang yang menggunakan tangan kanan, kira-kira, 9 tahun lebih panjang umur dari orang kidal',
'Jika semua emas dalam laut ditambang, setiap manusia didunia bisa mendapat emas 20 kg masing2.',
'Jika lever manusia berhenti bekerja, manusia akan mati dalam 8 samapai 24 jam',
'Seorang “quidnunc” adalah sebutan untuk orang yang selalu ingin tahu gosip terbaru.',
'Jika matahari tiba-tiba padam, butuh 8 menit bagi manusia untuk menyadarinya.',
'Leonardo Da Vinci yang menemukan gunting, helikopter, dan banyak alat lainnya.',
'Dalam 4000 tahun, tidak ada jenis binatang peliharaan baru.',
'25% dari tulang manusia ada di kaki.',
'David Sarnoff adalah orang yang menerima sinyal Titanic dan meyelamatkan ratusan nyawa. Dia akhirnya menjadi kepala jaringan radio, the National Broadcasting Company (NBC).',
'Kira-kira 100 orang tersedak ballpoint tiap tahun.',
'Jika kita terkunci diruang yang kedap udara, kita aka lebih dulu mati keracunan co2 dari pada kekerangan o2',
'Jika kita kehilangan satu mata, kita akan kehilangan 1/5 dari pengelihatan kita dan kehilangan seluruh persepsi tentang kedalaman objek.',
'Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan',
'Bawang putih yang kita gosok di tumit kaki akan meresap dapat dapat tercium dalam nafas kita.',
'Dengan merentangkan kedua tangan sejauh mungkin, jarak dari kedua ujung tangan adalah sama dengan tinggi kita.',
'Liburan selama sebelas hari berarti kita punya waktu hampir sejuta detik untuk menikmatinya',
'Dalam film Silence of The Lambs, tokoh Hannibal Lecter tidak pernah berkedip.',
'Di jepang, warung kopi disebut ‘Kissaten’.',
'Merebus telur burung unta butuh waktu 40 menit.',
'Jaguar takut pada anjing',
'Gajah hanya tidur 2 jam dalam sehari',
'Johnny Deep takut pada badut',
'Ganymede adalah bulan planet Jupiter, merupakan bulan terbesar di tata surya kita, lebih besar dari planet Merkurius.',
'Dalam golf, ‘Bo Derek’ adalah istilah untuk nilai 10.',
'Koala punya dua jempol',
'Latte dalam bahasa Italia adalah susu',
'Llanfairpwllgwyngyl lgogerychwyrndro bwlll… adalah nama sebuah desa di Wales Utara, Inggris.',
'Di Italia, Micky Mouse lebih dikenal dengan nama ‘ Topolino’',
'Susu sebenarnya lebih menyerupai makanan daripada minuman.',
'Ada lebih dari 450 jenis susu di dunia. 240 berasal dari Prancis.',
'Nyamuk lebih suka anak-anak daripada orang dewasa.',
'Partikel debu didalam rumah sebagian besar berasal dari sel kulit mati',
'Rata-rata orang bergerak 40 kali dalam tidurnya',
'Dalam bahasa Inggris, ‘Naked’ artinya tanpa perlindungan. ‘Nude’ artinya telanjang',
'Broccoli dan kembang kol adalah sayuran yang berupa bunga.',
'Anak baru lahir memiliki 350 tulang. Mereka menyatu atau menghilang sampai menjadi 206 pada usia 5 tahun.',
'Tidak ada bukti yang pasti siapa yang membangun Taj Mahal.',
'Dalam survey terhadap 200000 burung unta selama 80 tahun, tidak ada satupun yang mengubur kepalanya dalam tanah.',
'Nail Amstrong melangkah pertama kali di bulan dengan kaki kiri.',
'Shuttlecock untuk badminton harus punya 14 bulu.',
'Mutiara bisa larut dalam cuka.',
'Babi tidak dapat berkeringat karena tidak punya kelenjar keringat. Mereka berlumur lumpur untuk mendinginkan kulitnya.',
'Venus dan Uranus adalah planet di tata surya kita yang berputar melawan jarum jam. Jadi matahari terbit dari barat di planet ini.',
'Microwave ditemukan setelah seorang ilmuan yang berjalan melewati tabung radar mendapati permen coklatnya meleleh disakunya.',
'Ikan hiu kebal terhadap kanker',
'Rusa Santa bernama: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, dan Blitzen',
'Beberapa jenis cacing pita akan memakan dirinya sendiri jika kelaparan.',
'Kita bisa menghela sapi naik tangga, tapi tidak bisa menghela mereka turun tangga.',
'Plakat yang ditinggalkan Apollo 11 di bulan berbunyi “Here men from the planet Earth first set foot upon the Moon July 1969, A.D. / WE CAME IN PEACE FOR ALL MANKIND.”',
'Alpabet Hawai terdiri dari 12 huruf saja',
'Nama paling populer di dunia adalah Muhammad.',
'Bola mata kita beratnya sekitar 28 gram',
'Paru-paru kiri lebih kecil dari paru-paru kanan karena memberi tempat terhadap jantung.',
'Pinguin hanya ada di kutub selatan, dan tidak bisa menyebrangi equator.',
'Kebanyakan orang bisa mendengar lebih baik dengan kuping kanan',
'Vitamin pada buah biasanya terdapat pada kulitnya',
'Rata-rata klakson mobil berbunyi pada nada F',
'Pria lebih mampu membaca tulisan dengan ukuran huruf kecil daripada wanita.',
]
                    const fact = fakta[Math.floor(Math.random() * (fakta.length))]
                    teks = `${fact}`
                    iky.sendMessage(from, teks, text, {quoted: mek})
                    break
                    case 'infoanime':
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${body.slice(10)}`)
					if (anu.error) return reply(anu.error)
				 
					buffer = await getBuffer(anu.thumb)
					nasi = ` ➸ *NAMA* ${body.slice(10)}\n➸ *Tentang* ${anu.result}\n➸ *sinopsis* ${anu.sinopsis} `
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: nasi})
					await limitAdd(sender)
                    case 'masakan':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${body.slice(10)}`)
					if (anu.error) return reply(anu.error)
				 
					buffer = await getBuffer(anu.img)
					nasi = ` ➸ *NAMA* ${anu.title}\n➸ *BAHAN* ${anu.bahan}\n➸ *LANGKAH* ${anu.langkah} `
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: nasi})
					reply(`MAKANAN SETAN?`)
					await limitAdd(sender)
					break
					
					case 'detik':
					sreply(mess.wait)
					anu = await fetchJson(`https://api.xteam.xyz/detik/`, {method: 'get'})
					
				 
					buffer = await getBuffer(anu.thumb)
					nasi = ` ➸ *NAMA* ${anu.judul}\n➸ *tanggal* ${anu.tanggal}\n➸ *Url* ${anu.url} \n*Artikel:* ${anu.artikel}`
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: nasi})
					
					break
					
					case 'carsex':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${vhtear}`)
					
					buffer = await getBuffer(anu.result.image)
					
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: `➸ *nama* ${anu.result.judul} \n➸ *deskripsi* ${anu.result.cerita} `})
					await limitAdd(sender)
break
					case 'xvideos':
					sreply(mess.wait)
					anu = await fetchJson(`http://arugaz.my.id/api/media/xvideo/detail?url=${args[0]}`)
					
					buffer = await getBuffer(anu.result.image)
					
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: `➸ *nama* ${anu.result.title} \n➸ *Link* ${anu.result.URL}\n➸ *Durasi* ${anu.result.duration}\n*Type:* ${anu.result.videoType} `})
					break
					case 'puisi':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					loog = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${vhtear}`)
					iky.sendMessage(from, loog, image, {quoted: mek, caption: 'nih'})
					await limitAdd(sender)
					
					break
					
					case 'neko':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${vhtear}`)
					buffer = await getBuffer(anu.result.foto)
					iky.sendMessage(from, buffer, image, {quoted: mek,caption: 'nih'})
					await limitAdd(sender)
					
					break
					case 'nekonime':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/nekonime`)
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek,caption: 'nih'})
					await limitAdd(sender)
					
					break
					
					case 'uang':
                                        if (!isUser) return reply(mess.only.userB)
                                        const uangkau = checkATMuser(sender)
                                        lokreply(`◪ *ATM*\n\n  ❏ *Nama* : ${pushname2}\n  ❏ *Nomer* : ${sender.split("@")[0]}\n  ❏ *Uang* : ${uangkau}`)
                                        break
                                case 'buylimit':
                                        if (args.length < 1) return reply('Berapa limit yang mau di beli kak? Pastiin uang kakak cukup juga kak! \n\nCara cek uang: /uang')
                                        if (!isUser) return reply(mess.only.userB)
                                        payout = body.slice(10)
                                        const koinPerlimit = 1000
                                        const total = koinPerlimit * payout
                                        if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                                        if ( checkATMuser(sender) >= total ) {
                                                confirmATM(sender, total)
                                                bayarLimit(sender, payout)
                                                await swreply(`*◪PEMBAYARANBERHASIL◪*\n\n*pengirim* : Admin\n*penerima* : ${pushname2}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses pembayaran berhasil`)
                                        }
                                        break
                                        case 'buygift':
                                        if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                                        if (args.length < 1) return reply('Berapa limit gift yang mau di beli kak? Pastiin uang kakak cukup juga kak! \n\n1 limit harganya 30000 ya kak \nCara cek uang: /uang')
                                        if (!isUser) return reply(mess.only.userB)
                                        payout = body.slice(9)
                                        const prr = 30000
                                        const lolo = prr * payout
                                        if ( checkATMuser(sender) <= lolo) return reply(`1 limit harganya 30000 \nmaaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                                        if ( checkATMuser(sender) >= lolo ) {
                                                confirmATM(sender, lolo)
                                                buylimit(sender, payout)
                                                await swreply(`*◪ PEMBAYARANBERHASIL ◪*\n\n*pengirim* : Owner\n*penerima* : ${pushname2}\n*nominal pembelian* : ${payout} \n *harga limit* : ${prr}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses pembayaran berhasil`)
                                        }
                                        break
                                        case 'claim':
                                        
                                        if (isClaim) return reply(`*KAMU SUDAH MENCLAIM HARI INI JANGAN LUPA KEMBALI BESOK YA*`)
						laims.push(sender)
						fs.writeFileSync('./src/laim.json', JSON.stringify(laims))
						const xll = Math.floor(Math.random() * 1000) + 5000
               
                addLevelingXp(sender, xll)
                          swreply(`Selamat anda mendapatkan limit Exp ${xll}`)
                                        
                                        break
                                        case 'transfer':
                if (isLimit(sender)) return reply(`habis`)
				if (isBanned) return reply(mess.only.benned)   
				if (!isPublic) return reply(mess.only.public)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
				if (!q.includes('|')) return  reply(`*format salah/text kosong*`)
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                confirmATM(sender, jumblah)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 1 * 500
                if ( checkATMuser(sender) <= fee) return reply(`uang mu tidak mencukupi untuk melakukan transfer/uang pajak 500 ketik /mining untuk mendapatkan uang`)
                                        if ( checkATMuser(sender) >= fee ) {
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                
                addKoinUser('6282387804410@s.whatsapp.net', fee)
                iky.sendMessage(from,`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : @${sender.split("@")[0]}\nke : ${tujuan}\njumlah transfer : ${jumblah}\npajak : ${fee}\n *sisa uang mu* : ${checkATMuser(sender)}`,text,{contextInfo: { mentionedJid: [sender] }})
                }
                limitAdd(sender)
break
case 'xpgif':
if (!isOwner) return

     var gh = body.slice(6)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				
					var replace = gh.split("|")[0];
					if(!replace) return reply('Masukkan nomor yang akan di gift limit, /giftlimit NOMOR|Jumlah\n=> Contoh : #giftlimit @tagmember |10')
					var amount = gh.split("|")[1];
					const maul = Math.floor(Math.random() * 599) + amount
confirmxp(mentioned, maul)
addLevelingXp(mentioned, maul)
sreply(`berhasil menambahkan xp ke ${mentioned} jumlah ${maul}`)
break
                case 'giftlimit':
                if (isGift(sender)) return reply(`ups limit gift kamu sudah habis`)
                if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                limitopp(sender)
               var gh = body.slice(10)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				
					var replace = gh.split("|")[0];
					if(!replace) return reply('Masukkan nomor yang akan di gift limit, /giftlimit NOMOR|Jumlah\n=> Contoh : #giftlimit @tagmember |10')
					var amount = gh.split("|")[1];
					if(amount > 5) return await reply('Bused bro kebanyakan, max 5 aja :)')
					console.log(+[]); //=> 0
					console.log(+''); //=> 0
					console.log(+'   '); //=> 0
					console.log(typeof NaN); //=> 'number'
					if(isNaN(amount)) return reply(`jangan ngelunjak lah pake nomor jing`)
                limitAdd(mentioned)
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == mentioned) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= `${amount}`
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
         
        await reply(`*GIFT LIMIT*\n*Limit: ${amount}*`)
                                        
					
                                        
                                                
                                        
                                        break
                                        case 'lim':
                
					if (!isOwner) return reply(`asu`)
                
               var gh = body.slice(5)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				
					var replace = gh.split("|")[0];
					if(!replace) return iky.reply('Masukkan nomor yang akan di gift limit, /giftlimit NOMOR|Jumlah\n=> Contoh : #giftlimit @tagmember |10')
					var amount = gh.split("|")[1];
					console.log(+[]); //=> 0
					console.log(+''); //=> 0
					console.log(+'   '); //=> 0
					console.log(typeof NaN); //=> 'number'
					if(isNaN(amount)) return reply(`jangan ngelunjak lah pake nomor jing`)
                limitAdd(mentioned)
             let nay = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == mentioned) {
                    nay = i
                }
            })
            if (nay !== false) {
                _limit[nay].limit -= `${amount}`
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        
        await reply(`*GIFT LIMIT*\n*Limit: ${amount}*`)
                                        
					
                                        
                                                
                                        
                                        break
                                        case 'vibra':
                                        if (!isQuotedAudio) return reply('Reply audio nya om')
					teks = body.slice(7)
					sreply(mess.wait)
                   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${teks}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('ha angka nya berapa!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'volume':
                                        if (!isQuotedAudio) return reply('Reply audio nya om')
					teks = body.slice(7)
					sreply(mess.wait)
                   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${teks}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('ha angka nya berapa!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'pibra':
				if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=10" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'slowmo':
					sreply(mess.wait)
                   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					
					exec(`ffmpeg -i ${media} -af asetrate=44100*0.5,aresample=44100 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
                                        case 'dellimit':
              
                buffer = fs.readFileSync(`./stik/ elite.webp`)
					if (!isOwner) return costum(buffer,sticker,tescuk,`*FITUR INI DIGUNAKAN OWNER*`)
                await limitopp(sender)
               var gh = body.slice(9)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				
					var replace = gh.split("|")[0];
					if(!replace) return iky.reply('Masukkan nomor yang akan di dell limit, /dellimit NOMOR|Jumlah\n=> Contoh : #giftlimit @tagmember |10')
					var amount = gh.split("|")[1];
					if (args.length === 0) {
	swreply(`hm`)
	} else if (args.includes('1')) {
	limitAdd(mentioned)
             let pos = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == mentioned) {
                    pos = i
                }
            })
            if (pos !== false) {
                _limit[pos].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
         if(amount > 10) return await reply('Bused bro kebanyakan, max 10 aja :)')
        await reply(`*GIFT LIMIT*\n*Limit: ${amount}*`)
	} else if (args.includes('2')) {
	limitAdd(mentioned)
             let pos = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == mentioned) {
                    pos = i
                }
            })
            if (pos !== false) {
                _limit[pos].limit += 2
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
         if(amount > 10) return await reply('Bused bro kebanyakan, max 10 aja :)')
        await reply(`*DELL LIMIT*\n*Limit: ${amount}*`)
	} else if (args.includes('5')) {
	limitAdd(mentioned)
             let pos = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == mentioned) {
                    pos = i
                }
            })
            if (pos !== false) {
                _limit[pos].limit += 5
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
         if(amount > 10) return await reply('Bused bro kebanyakan, max 10 aja :)')
        await reply(`*DELL LIMIT*\n*Limit: ${amount}*`)
	} else if (args.includes('all')) {
	limitAdd(mentioned)
             let pos = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == mentioned) {
                    pos = i
                }
            })
            if (pos !== false) {
                _limit[pos].limit += 1000
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
         if(amount > 10) return await reply('Bused bro kebanyakan, max 10 aja :)')
        await reply(`*DELL LIMIT*\n*Limit: ${amount}*`)
	}
                
                                        
					
                                        
                                                
                                        
                                        break
                                        
                                        case 'mining':
                                
					 limitAdd(sender)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				const saku = Math.floor(Math.random() * 100) + 90
                addKoinUser(sender, saku)
					
					 
				if (!isOwner) return swreply(`Selamat anda mendapatkan  Rp${saku}`)
					
					const uangsaku = Math.floor(Math.random() * 99999) + 99999999
                addKoinUser(sender, uangsaku)
					if (isOwner) return swreply(`karna kamu adalah owner saya kasih uang sebesar ${uangsaku} `)
					
					break
					case 'nhentaisearch':
					var uc = body.slice(14)
					
					sreply(mess.wait)
					loog = await fetchJson(`https://api.vhtear.com/nhentaisearch?query=${uc}&apikey=${vhtear}`)
					
					iky.sendMessage(from,`➸ *id* ${loog.url.id} \n➸ *nama* ${loog.result.title}\n➸ *lang* ${loog.result.lang}`,text, {quoted: mek})
					break
					case 'tesk':
					if (!isQuotedText) return reply(`reply pesan`)
					told = isQuotedText ? mek.message.extendedTextMessage.contextInfo: mek
				reply(told)
					break
					
				case 'help':
				case 'menu':
				if (isLimit(sender)) return reply(`habis`)
				if (isBanned) return reply(mess.only.benned)   
				if (!isPublic) return reply(mess.only.public)
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				uptime = process.uptime()
				const lvs = getLevelingLevel(sender)
                const esp = getLevelingXp(sender)
                const pamp = speed();
            
                    const latsi = speed() - pamp
                    iky.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                
                if (lvs === undefined && esp === undefined) return reply(mess.levelnol)
				const ga =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const yas = ga[Math.floor(Math.random() * ga.length)]
					const gojar = getDolarExp(sender)
					
					teks = `Hai Kak *${pushname2}*
├─ ❏  *kurumi [memanggil bot]*
					
*‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
◪ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧

❏ NAME: *KURUMI CHAN (Rizky Fadilah)*
❏ Speed: *${latsi.toFixed(4)} _Second_*
❏ Device: *Vivo Y12*
❏ Baterai Bot : *${baterai}%*
❏ RAM: *3/64*
❏ Data: *Telkomsel/Tri*
❏ Jaringan: *4G*
❏ Type Bot : *Java Script*
❏ Bot Telah Aktif Selama: *${mekun(uptime)}*
❏ ${prefix}owner
❏ ${prefix}ping
❏ ${prefix}donasi
❏ ${prefix}speed
❏ ${prefix}info

❏ Follow channel telegram *Info Kurumi Chan  * agar kamu dapat info terbaru jika nomor WhatsApp kebanned, berganti nomor, update menu dll.
❏ Link channel telegram: https://t.me/Kurumi Chan  t
❏ ingin Memasukan bot ke grup kalian? 
❏ cukup membayar 20k/bulan
❏ Langsung dapat Premium jika berminat hubungi nomor dibawah:
❏ wa.me/6282387804410 atau bisa ketik */owner*

*「 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 𝗕𝗢𝗧 」*

❏ User Bot: *${user.length}*
❏ Banned User: *${banned.length}* / *${bannned.length}*
❏ Blocked User: *${blocked.length}*
❏ Premium User: *${premium.length}*
 
 ◪ 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥
 
⦿ *Name:* *${pushname2}*
⦿ *User:* *${isPremium ? 'Premium' : 'Standar'}*
⦿ *Expired:* *${isPremium ? `${timi}` : 'Not Premium'}*
⦿ *Owner :* *${isOwner ? 'Ini Ownerku' : 'LU BUKAN OWNER'}*
⦿ *Total User:* *${user.length}*
⦿ *Date :* *${week}* , *${date}*
⦿ *Wib :* *${wib}*
⦿ *Wita :* *${wita}*
⦿ *Wit :* *${wit}*

◪ 𝗜𝗡𝗙𝗢 𝗚𝗔𝗠𝗘 𝗨𝗦𝗘𝗥

⦿ *Level :* *${lvs}*
⦿ *Role :* *${role}*
⦿ *Exp:* *${esp}*
⦿ *Uang:* *${checkATMuser(sender)}*
⦿ *Dolar:* *${getDolarExp(sender)}*

*「 𝗥𝗨𝗟𝗘𝗦 𝗥𝗜𝗭𝗞𝗬 𝗕𝗢𝗧 」*

❏ *Chat Pribadi bot : Virtex Menunggu mu bor!*
❏ *Spam : Auto Banned!*
❏ *Command Dijeda 5detik!*
❏ *Bug/Error Harap Chat Owner!*
❏ *Harap Sabar Dengan Bug²nya!*
❏ *Salah Command 5 kali Auto Banned!*
❏ *Untuk Memastikan bot off atau on*
❏ *Ketik /bot Otomatis Menyapa!*
❏ *Gunakan Bot Sebaik-baiknya!*
❏ *Call/Vc Bot Auto Block!*
 
 
◪ _*MENU ALL*_
│
└─ ❏ *${prefix}listmenu*
  
 
◪ _*MENU SIMPLE*_
│
├─ ❏ *${prefix}adminmenu*
├─ ❏ *${prefix}lolhuman*
├─ ❏ *${prefix}ownermenu*
├─ ❏ *${prefix}edukasi*
├─ ❏ *${prefix}randompict*
├─ ❏ *${prefix}othermenu*
├─ ❏ *${prefix}mediamenu*
├─ ❏ *${prefix}funmenu*
├─ ❏ *${prefix}gamemenu*
├─ ❏ *${prefix}vipmenu*
├─ ❏ *${prefix}newupdate*
├─ ❏ *${prefix}nsfwmenu*
├─ ❏ *${prefix}animemenu*
└─ ❏ *${prefix}stickermenu*
 
 ◪ _*MAKER*_
│
├─ ❏ *${prefix}ep list (melihat semua maker)*
├─ ❏ *${prefix}ep [1-216 teks]*
├─ ❏ *${prefix}ep 1 contoh*
 ❏ 
├─ ❏ * *${prefix}tp list (melihat semua maker)*
├─ ❏ * *${prefix}tp [1-162 teks]*
└─ ❏ *${prefix}tp 1 contoh*
 

 
 ◪ _*NEW*_
│
└─ ❏ *${prefix}newupdate*
 
 
  ◪ _*NEW UPDATE*_\n`
 for (let awokwkwk of det) {
 teks += `├─ ❏ *${prefix}${awokwkwk}*\n`
}
teks += ` \n\n◪ _*GAME*_
 │
 ├─ ❏  *${prefix}leaderboard*
 ├─ ❏  *${prefix}topuang*
 ├─ ❏  *${prefix}mining [uang]*
 ├─ ❏  *${prefix}farming [exp]*
 ├─ ❏  *${prefix}uang*
 ├─ ❏  *${prefix}dolar*
 ├─ ❏  *${prefix}level*
 └─ ❏  *${prefix}gameshop*

   ╭⧈ _*Spesial Thanks To*_
   ├─────────────── ❏ 
❏├● *TEAM Recoder's Area*
❏├● *Adiwajhsing*
❏├● *MhankBarBar*
❏├● *Alpha*
❏├● *Arman*
❏├● *Barxnl*
❏├● *Caliph71*
❏├● *Pengguna Bot*
❏├● *VHTEAR*
❏├● *Dan Seluruh Penyedia Api*
    └─────────────── ❏ `
    iky.sendMessage(from, teks.trim(), extendedText,{contextInfo: { forwardingScore: 508, isForwarded: true },quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: '@_rizkyfadilah8', jpegThumbnail: fs.readFileSync('./database/gambar/kurumi.jpg'), remoteJid: "status@broadcast"}}}})
    
limitAdd(sender)
    
					break
					case 'lolhuman':
					sreply(`◪ _*Api Lol Human*_
│
├─ ❏ *${prefix}neko*
├─ ❏ *${prefix}waifu*
├─ ❏ *${prefix}loli*
├─ ❏ *${prefix}chiisaihentai*
├─ ❏ *${prefix}trap*
├─ ❏ *${prefix}blowjob*
├─ ❏ *${prefix}yaoi*
├─ ❏ *${prefix}ecchi*
├─ ❏ *${prefix}hentai*
├─ ❏ *${prefix}ahegao*
├─ ❏ *${prefix}hololewd*
├─ ❏ *${prefix}sideoppai*
├─ ❏ *${prefix}animefeets*
├─ ❏ *${prefix}animebooty*
├─ ❏ *${prefix}animethighss*
├─ ❏ *${prefix}hentaiparadise*
├─ ❏ *${prefix}animearmpits*
├─ ❏ *${prefix}hentaifemdom*
├─ ❏ *${prefix}lewdanimegirls*
├─ ❏ *${prefix}biganimetiddies*
├─ ❏ *${prefix}animebellybutton*
├─ ❏ *${prefix}hentai4everyone*
├─ ❏ *${prefix}bj*
├─ ❏ *${prefix}ero*
├─ ❏ *${prefix}cum*
├─ ❏ *${prefix}feet*
├─ ❏ *${prefix}yuri*
├─ ❏ *${prefix}trap*
├─ ❏ *${prefix}ngif*
├─ ❏ *${prefix}lewd*
├─ ❏ *${prefix}feed*
├─ ❏ *${prefix}eron*
├─ ❏ *${prefix}solo*
├─ ❏ *${prefix}gasm*
├─ ❏ *${prefix}poke*
├─ ❏ *${prefix}anal*
├─ ❏ *${prefix}holo*
├─ ❏ *${prefix}tits*
├─ ❏ *${prefix}kuni*
├─ ❏ *${prefix}kiss*
├─ ❏ *${prefix}erok*
├─ ❏ *${prefix}smug*
├─ ❏ *${prefix}baka*
├─ ❏ *${prefix}solog*
├─ ❏ *${prefix}feetg*
├─ ❏ *${prefix}lewdk*
├─ ❏ *${prefix}waifu*
├─ ❏ *${prefix}pussy*
├─ ❏ *${prefix}femdom*
├─ ❏ *${prefix}cuddle*
├─ ❏ *${prefix}hentai*
├─ ❏ *${prefix}eroyuri*
├─ ❏ *${prefix}cum_jpg*
├─ ❏ *${prefix}blowjob*
├─ ❏ *${prefix}erofeet*
├─ ❏ *${prefix}holoero*
├─ ❏ *${prefix}classic*
├─ ❏ *${prefix}erokemo*
├─ ❏ *${prefix}fox_girl*
├─ ❏ *${prefix}futanari*
├─ ❏ *${prefix}lewdkemo*
├─ ❏ *${prefix}wallpaper*
├─ ❏ *${prefix}pussy_jpg*
├─ ❏ *${prefix}kemonomimi*
├─ ❏ *${prefix}nsfw_avatar*
├─ ❏ *${prefix}nsfw_neko_gif*
├─ ❏ *${prefix}random_hentai_gif*
├─ ❏ *${prefix}blackpink*
├─ ❏ *${prefix}neon*
├─ ❏ *${prefix}greenneon*
├─ ❏ *${prefix}advanceglow*
├─ ❏ *${prefix}futureneon*
├─ ❏ *${prefix}sandwriting*
├─ ❏ *${prefix}sandsummer*
├─ ❏ *${prefix}sandengraved*
├─ ❏ *${prefix}metaldark*
├─ ❏ *${prefix}neonlight*
├─ ❏ *${prefix}holographic*
├─ ❏ *${prefix}text1917*
├─ ❏ *${prefix}minion*
├─ ❏ *${prefix}deluxesilver*
├─ ❏ *${prefix}newyearcard*
├─ ❏ *${prefix}bloodfrosted*
├─ ❏ *${prefix}halloween*
├─ ❏ *${prefix}jokerlogo*
├─ ❏ *${prefix}fireworksparkle*
├─ ❏ *${prefix}natureleaves*
├─ ❏ *${prefix}bokeh*
├─ ❏ *${prefix}toxic*
├─ ❏ *${prefix}strawberry*
├─ ❏ *${prefix}box3d*
├─ ❏ *${prefix}roadwarning*
├─ ❏ *${prefix}breakwall*
├─ ❏ *${prefix}icecold*
├─ ❏ *${prefix}luxury*
├─ ❏ *${prefix}cloud*
├─ ❏ *${prefix}summersand*
├─ ❏ *${prefix}horrorblood*
├─ ❏ *${prefix}thunder*
├─ ❏ *${prefix}christmas*
├─ ❏ *${prefix}shadow*
├─ ❏ *${prefix}cup*
├─ ❏ *${prefix}cup1*
├─ ❏ *${prefix}romance*
├─ ❏ *${prefix}smoke*
├─ ❏ *${prefix}burnpaper*
├─ ❏ *${prefix}lovemessage*
├─ ❏ *${prefix}undergrass*
├─ ❏ *${prefix}love*
├─ ❏ *${prefix}coffe*
├─ ❏ *${prefix}woodheart*
├─ ❏ *${prefix}flowerheart*
├─ ❏ *${prefix}woodenboard*
├─ ❏ *${prefix}summer3d*
├─ ❏ *${prefix}wolfmetal*
├─ ❏ *${prefix}nature3d*
├─ ❏ *${prefix}underwater*
├─ ❏ *${prefix}golderrose*
├─ ❏ *${prefix}summernature*
├─ ❏ *${prefix}letterleaves*
├─ ❏ *${prefix}glowingneon*
├─ ❏ *${prefix}fallleaves*
├─ ❏ *${prefix}flamming*
├─ ❏ *${prefix}harrypotter*
├─ ❏ *${prefix}carvedwood*
├─ ❏ *${prefix}wetglass*
├─ ❏ *${prefix}multicolor3d*
├─ ❏ *${prefix}watercolor*
├─ ❏ *${prefix}luxurygold*
├─ ❏ *${prefix}galaxywallpaper*
├─ ❏ *${prefix}lighttext*
├─ ❏ *${prefix}beautifulflower*
├─ ❏ *${prefix}puppycute*
├─ ❏ *${prefix}royaltext*
├─ ❏ *${prefix}heartshaped*
├─ ❏ *${prefix}birthdaycake*
├─ ❏ *${prefix}galaxystyle*
├─ ❏ *${prefix}hologram3d*
├─ ❏ *${prefix}greenneon*
├─ ❏ *${prefix}glossychrome*
├─ ❏ *${prefix}greenbush*
├─ ❏ *${prefix}metallogo*
├─ ❏ *${prefix}noeltext*
├─ ❏ *${prefix}glittergold*
├─ ❏ *${prefix}textcake*
├─ ❏ *${prefix}starsnight*
├─ ❏ *${prefix}wooden3d*
├─ ❏ *${prefix}textbyname*
├─ ❏ *${prefix}writegalacy*
├─ ❏ *${prefix}galaxybat*
├─ ❏ *${prefix}snow3d*
├─ ❏ *${prefix}birthdayday*
├─ ❏ *${prefix}goldplaybutton*
├─ ❏ *${prefix}silverplaybutton*
├─ ❏ *${prefix}freefire*
├─ ❏ *${prefix}nhentaisearch [kode]*
├─ ❏ *${prefix}otakudesu*
├─ ❏ *${prefix}kusonimesearch*
├─ ❏ *${prefix}kusonime*
├─ ❏ *${prefix}igdl [link]*
├─ ❏ *${prefix}ytplay [lagu]*
└─ ❏  *${prefix}fbdl [link]*`)
break
					case 'gifcek':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                                        if (!isUser) return reply(mess.only.userB)
                                        limitgiftcek(sender)
                                        break
					case 'limit':
					if (isOwner) return reply(`*「 LIMIT COUNT 」*
sisa limit anda : Unlimited`)
if (isPremium) return reply(`*「 LIMIT COUNT 」*
sisa limit anda : Unlimited`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (!isUser) return reply(mess.only.userB)
                                        checkLimit(sender)
                                        
                                        break
                                        
                   
                                
                                
                                
                                        
                                                
                                break
					case 'lb':
					case 'leaderboard':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				lb_id = []
                leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                nrmp = 0
                    for (let i = 0; i < 20; i++) {
                        nrmp++
                        leaderboardlvl += `*[${nrmp}]* @${_level[i].jid.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp}\n *Level*: ${_level[i].level}\n\n`
                        lb_id.push(_level[i].jid)
                    }
                    await iky.sendMessage(from, leaderboardlvl, text, {contextInfo: { mentionedJid: lb_id }})
				
break
case 'llb':
					case 'topuang':
				uang.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				lb_id = []
                leaderboardun = '-----[ *LEADERBOARD UANG* ]----\n\n'
                nrmp = 0
                    for (let i = 0; i < 20; i++) {
                        nrmp++
                        leaderboardun += `*[${nrmp}]* @${uang[i].id.replace('@s.whatsapp.net', '')}\n*Uang*: ${uang[i].uang}\n\n`
                        lb_id.push(uang[i].id)
                    }
                    await iky.sendMessage(from, leaderboardun, text, {contextInfo: { mentionedJid: lb_id }})
break
					case 'spamcall':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			reply(`NOMOR JIN?`)
			call = body.slice(10)
			anu = await fetchJson(`https://b.apimau.ga/spamcall?no=${call}`, {method: 'get'})
			iky.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
			await limitAdd(sender)
			break 
			
					
			case 'fordward':
	   iky.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
           break
            case 'fordward1':
           iky.sendMessage(from, `${body.slice(11)}`, MessageType.text, {contextInfo: { forwardingScore: 2, isForwarded: true }})
           break
			case 'pronsearch':
			   if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
			   sreply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(7)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	break
			case 'listpremi':
				    let lv = `*Premium User*\n\nTotal : ${premium.length}\n`
                    for (let i of premium) {
					    lv += `@${i.split('@')[0]}\n`
					}
					iky.sendMessage(from, lv.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": VipUser}})
					break
			case 'addprem':
					if (!isGroup) return replyt(mess.only.group)
					if (!isOwner) return replyt(mess.only.admin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyt('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, menambahkan :\n'
						for (let i = 0; i < mentioned.length; i++) {
							teks += `@${i.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						premium.push(mentioned)
						fs.writeFileSync('./src/vip.json', JSON.stringify(premium))
					} else {
						mentions(`Perintah di terima, menambahkan : @${mentioned[0].split('@')[0]} menjadi premium`, mentioned, true)
						premium.push(mentioned)
						fs.writeFileSync('./src/vip.json', JSON.stringify(premium))
					}
					break
					
					case 'gameshop':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					const lps = getLevelingLevel(sender)
                const eap = getLevelingXp(sender)
                const lolar = getDolarExp(sender)
					costum(`
╭══─⊱  ⸨ 𝑰𝒏𝒇𝒐 ??𝒆𝒏𝒈𝒈𝒖𝒏𝒂 ⸩ 
├   XP: ${eap}
├   Level: ${lps}
├   Nama: ${pushname2}
└─┤ *${user.length} player*

*_G A M E S H O P_*
╭─⊱   Masuk Grup Dengan Durasi 1 hari Level 15
┣╾⊱   Masuk Grup Dengan Durasi 2 hari Level 18
┣╾⊱   Masuk Grup Dengan Durasi 4 hari Level 20
┣╾⊱   Masuk Grup Dengan Durasi 6 hari Level 21
┣╾⊱   Masuk Grup Dengan Durasi 7 hari Level 25
┣╾⊱   Masuk Grup Dengan Durasi 9 hari Level 28
┣╾⊱  Masuk Grup Dengan Durasi 10 hari Level 30
┣╾⊱   Masuk Grup Dengan Durasi 13 hari Level 31
┣╾⊱   Masuk Grup Dengan Durasi 12 hari Level 35
┣╾⊱   Masuk Grup Dengan Durasi 15 hari Level 38
┣╾⊱   buypremium level 40
╰─⊱   premium+grup dengan durasi 30 hari level 60

Note: 
    ~ premium hanya berlaku 1bulan
    ~ cara naikin level gimana kak? cukup ikut dalam obrolan dan bisa juga ketik ${prefix}farming

ketik ${prefix}rules untuk syarat dan ketentuan penggunaan bot`, text, tescuk, `*GAME SHOP iky BOT*`)
await limitAdd(sender)
					break
					case 'murothal':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum(`*QUR'AN*

Juz 1 ⧈ http://j.mp/2b8SiNO
Juz 2 ⧈ http://j.mp/2b8RJmQ
Juz 3 ⧈ http://j.mp/2bFSrtF
Juz 4 ⧈ http://j.mp/2b8SXi3
Juz 5 ⧈ http://j.mp/2b8RZm3
Juz 6 ⧈ http://j.mp/28MBohs
Juz 7 ⧈ http://j.mp/2bFRIZC
Juz 8 ⧈ http://j.mp/2bufF7o
Juz 9 ⧈ http://j.mp/2byr1bu
Juz 10 ⧈ http://j.mp/2bHfyUH
Juz 11 ⧈ http://j.mp/2bHf80y
Juz 12 ⧈ http://j.mp/2bWnTby
Juz 13 ⧈ http://j.mp/2bFTiKQ
Juz 14 ⧈ http://j.mp/2b8SUTA
Juz 15 ⧈ http://j.mp/2bFRQIM
Juz 16 ⧈ http://j.mp/2b8SegG
Juz 17 ⧈ http://j.mp/2brHsFz
Juz 18 ⧈ http://j.mp/2b8SCfc
Juz 19 ⧈ http://j.mp/2bFSq95
Juz 20 ⧈ http://j.mp/2brI1zc
Juz 21 ⧈ http://j.mp/2b8VcBO
Juz 22 ⧈ http://j.mp/2bFRxNP
Juz 23 ⧈ http://j.mp/2brItxm
Juz 24 ⧈ http://j.mp/2brHKw5
Juz 25 ⧈ http://j.mp/2brImlf
Juz 26 ⧈ http://j.mp/2bFRHF2
Juz 27 ⧈ http://j.mp/2bFRXno
Juz 28 ⧈ http://j.mp/2brI3ai
Juz 29 ⧈ http://j.mp/2bFRyBF
Juz 30 ⧈ http://j.mp/2bFREcc`, text, tescuk, cr)
await limitAdd(sender)
					break
					case 'all':
					if (!isOwner) return
					case 'listmenu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					iky.sendMessage(from, listmenu(prefix), text, {contextInfo: { forwardingScore: 508, isForwarded: true },quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...('status@broadcast' ? { remoteJid: 'status@broadcast' } : {}) }, message: { imageMessage :{ mimetype: "image/jpeg", caption: '@_rizkyfadilah8', jpegThumbnail: fs.readFileSync('./database/gambar/kurumi.jpg'), remoteJid: "status@broadcast"}}}})
					
limitAdd(sender)

					break
					case 'translate':
				case 'translete':
				case 'transtle':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				    
  translate(body.slice(11+args[0].length), {tld: 'cn', to: args[0]}).then(res => {
            iky.sendMessage(from, `${res.text}`, text, {quoted: mek})
            console.log(res)
        }).catch(err => {
            sendMess(from, `ERROR | ${err}`);
        });
   break
   break
				await limitAdd(sender)
				   break
				case 'join':
				if (!isOwner) return reply(`Maaf Group Kurumi Chan   sudah FULL`)
				costum(`BERHASIL JOIN KEGRUP TERSEBUT`,text,tescuk,`JOIN`)
				break
				
					case 'randompict':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum(randompict(prefix), text, tescuk, cr)
					await limitAdd(sender)
					break
					case 'edukasi':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum(edukasi(prefix), text, tescuk, cr)
					await limitAdd(sender)
					break
					case 'setnumreply':
                iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					tescuk = `${args[0]}@s.whatsapp.net`
					reply(`nomor reply berhasil di ubah menjadi : ${nomcr.split("@")[0]}`)
					break
            case 'setstatus':
				iky.setStatus(`${body.slice(11)}`)
   				.then(data => {
        			reply(JSON.stringify(data))
    				}).catch(err => console.log(err))
    				brea
					case 'gamemenu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum(gamemenu(prefix), text, tescuk, cr)
					await limitAdd(sender)
					break
					case 'stickermenu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum(`
◪ *STICKERGIF*
├
├─ ❏ *${prefix}sticker*
├─ ❏ *${prefix}stiker*
├─ ❏ *${prefix}trigger* [img] 
├─ ❏ *${prefix}wasted* [img]
├─ ❏ *${prefix}wink* [img]
├─ ❏ *${prefix}slink* [link]
├─ ❏ *${prefix}blowjob*
├─ ❏ *${prefix}kiss*
├─ ❏ *${prefix}cium*
├─ ❏ *${prefix}peluk*
├─ ❏ *${prefix}slap*
├─ ❏ *${prefix}slap*
├─ ❏ *${prefix}nangis*
├─ ❏ *${prefix}cry*
├─ ❏ *${prefix}animehug*
├─ ❏ *${prefix}glass* [foto]
├─ ❏ *${prefix}glasstick*
├─ ❏ *${prefix}gaystick* [img]
├─ ❏ *${prefix}gay* [foto]
├─ ❏ *${prefix}burning* [img]
├─ ❏ *${prefix}boobs*
├─ ❏ *${prefix}pussy*
├─ ❏ *${prefix}bj*
├─ ❏ *${prefix}anal*
├─ ❏ *${prefix}hentaigif*
├─ ❏ *${prefix}yuri*
├─ ❏ *${prefix}gasm*
├─ ❏ *${prefix}milf*
├─ ❏ *${prefix}kuni*
├─ ❏ *${prefix}kemonomimi*
├─ ❏ *${prefix}keta*
├─ ❏ *${prefix}futanari*
├─ ❏ *${prefix}fendom*
├─ ❏ *${prefix}slap*
└─ ❏ *${prefix}neko*
  `, text, tescuk, `MOHON TIDAK SPAM\nTUNGGU SATU ORANG SIAP\n*BERGILIRAN!!*`)
 await limitAdd(sender)
					break
					
					
					case 'poterlogo':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                                        if (!isPublic) return reply(mess.only.public)
                                        if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤??𝐤')
                                        potter = body.slice(10)
                                        sreply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${potter}&apikey=BotWeA`, {method: 'get'})                                                                                
                                        buffer = await getBuffer(anu.result)
                                        iky.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
                                        case 'jail':
                                        if (!isPublic) return reply(mess.only.public)
                                        if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        buffer = await getBuffer(`https://api.zeks.xyz/api/jail?apikey=administrator&img=${teks}`, {method: 'get'})
						                iky.sendMessage(from, buffer, image, {quoted: mek})
						await limitAdd(sender)
						                }
                                        break
                                      
                                        case 'mutual':
                                          
            break
            case 'next':
            
            
                
            break
            
            case 'jodoh':
            
					break
					case 'acak':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
            if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
if (!isPublic) return reply(mess.only.public)
var gh = body.slice(5)
					var jodhr = gh.split("|")[0];
					var jodohn = gh.split("|")[1];
					
					sreply(mess.wait)
					kntks = 'BEGIN:VCARD\n'
					+ 'VERSION:3.0\n' 
					+ `FN:${jodohn}\n`
					+ 'ORG:User;\n'
					+ `TEL;type=CELL;type=VOICE;waid=${jodhr.split('@')[0]}:${jodhr.split('@')[0]}\n`
					+ 'END:VCARD'
					iky.sendMessage(from, {displayname: `${jodohn}`, vcard: kntks}, contact, {quoted: mek})
					
					await limitAdd(sender)
					break
            case 'say':
            if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    await limitAdd(sender)
                    reply(hasil)
            case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
                                        case 'wolfmetal':
                                        if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					wometal = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'neb':
					case 'ownercommand':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
if (!isOwner) return (`saha?`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum(ownercommand(prefix), text, tescuk, cr)
					await limitAdd(sender)
					break
					case 'gaminglogo':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premi)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(11)
					sreply(mess.wait)
					loog = await getBuffer(`https://api.vhtear.com/gamelogo?text=${teks}&apikey=${vhtear}`)
					iky.sendMessage(from, loog, image, {quoted: mek, caption: 'nih '+teks})
					await limitAdd(sender)
					break
					case 'shadow':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					shad = body.slice(8)
					sreply(mess.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					iky.sendMessage(from, ssha, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'darkjokes2':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(11)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'memeindo':
		if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'minion':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					minio = body.slice(8)
					sreply(mess.wait)
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					iky.sendMessage(from, minn, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'snk':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					costum( snk(), text, tescuk, cr)
					break
					case 'goldbutton':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					gol = body.slice(12)
					if (args.length < 1) return reply('Teksnya mana um')
					sreply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/gplaybutton?text=${gol}&apikey=apivinz`, {method: 'get'})
					gools = await getBuffer(anu.result)
					iky.sendMessage(from, gools, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'silverbutton':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					gol2 = body.slice(14)
					if (args.length < 1) return reply('Teksnya mana um')
					sreply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/splaybutton?text=${gol2}&apikey=apivinz`, {method: 'get'})
					gools2 = await getBuffer(anu.result)
					iky.sendMessage(from, gools2, image, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'rang':
					if (!isOwner) return
					case 'kerangmenu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( kerangmenu(prefix), text, tescuk, cr)
					iky.sendMessage(from, 'anda gay/anda lesby', text, tescuk, cr)
					await limitAdd(sender)
					break
					case 'hurufjepang':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( ` A =あ    Ka =か
I =い     Ki =き
U=う.    Ku =く
E =え.    Ke =け
O =お.    Ko =こ。

Sa = さ       Na = な
Shi = し.     Ni = に
Su =す.       Nu = ぬ
Se =せ.       Ne = ね
So = そ.      No = の

Ma =ま.      Ya = や
Mi =み.       Yu = ゆ
Mu =む.      Yo = よ
Me =め
Mo =も。   Wa = わ
                   Wo = を
Ta= た
Tsu=つ
Te=て
To=と`, text, tescuk, cr)
await limitAdd(sender)
					break
					case 'hurufkatakanajepang':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( `*KUMPULAN BAHASA JEPANG*

*HARAP DIHAFALKAN YA*

ホテル
Hoteru : Hotel

インターネット
Intaanetto : Internet

バレーボール
Baree Booru : Volley Ball

サッカー
Sakkaa : Soccer

タクシー
Takushii : Taxi

ドキドキ
Doki doki : Deg degan

ペコペコ
Peko Peko : Perut kosong

ピンポン
Pin Pon : Suara bel

ドカン
Dokan : Suara ledakan

スラバヤ
Surabaya

ジャカルタ
Jakaruta : Jakarta

ロンドン
Rondon : London

ハワイ
Hawai

バリ島
Bari tou : Pulau Bali\nDaftar Huruf Katakana Standar
ア a	イ i	ウ u	エ e	オ o
カ ka	キ ki	ク ku	ケ ke	コ ko
サ sa	シ shi	ス su	セ se	ソ so
タ ta	チ chi	ツ tsu	テ te	ト to
ナ na	ニ ni	ヌ nu	ネ ne	ノ no
ハ ha	ヒ hi	フ fu	ヘ he	ホ ho
マ ma	ミ mi	ム mu	メ me	モ mo
ヤ ya		ユ yu		ヨ yo
ラ ra	リ ri	ル ru	レ re	ロ ro
ワ wa				ヲ wo
ン n
Contoh :
ミルク = Miruku, Susu
カメラ= Kamera, Kamera
テニス= Tenisu, Tenis\nDaftar Huruf Katakana Tenten dan Maru
ガ ga	ギ gi	グ gu	ゲ ge	ゴ go
ザ za	ジ ji	ズ zu	ゼ ze	ゾ zo
ダ da	ヂ ji	ヅ zu	デ de	ド do
バ ba	ビ bi	ブ bu	ベ be	ボ bo
パ pa	ピ pi	プ pu	ペ pe	ポ po
Contoh :
テレビ = Terebi, Televisi
パパイヤ = Papaiya, Pepaya\nDaftar Huruf Katakana Yōon
(ya)	(yu)	(yo)
キャ meka	キュ meku	キョ meko
シャ sha	シュ shu	ショ sho
チャ cha	チュ chu	チョ cho
ニャ nya	ニュ nyu	ニョ nyo
ヒャ hya	ヒュ hyu	ヒョ hyo
ミャ mya	ミュ myu	ミョ myo
リャ rya	リュ ryu	リョ ryo
ギャ gya	ギュ gyu	ギョ gyo
ジャ ja	ジュ ju	ジョ jo
ビャ bya	ビュ byu	ビョ byo
ピャ pya	ピュ pyu	ピョ pyo
Contoh :
コンピュター = Konpyutaa, Komputer
T シャツ = T Shatsu, Kaos
バナナ= Banana, Pisang\n*Mohon dihafalkan ya, dan jangan lupa latihan menuliskan nya juga, agara nanti Anda bisa menulis aksara Jepang dengan lancar*

*iky Bot*`, text, tescuk, cr)
await limitAdd(sender)
					break
					case 'genreanime':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum(`*GENRE ANIME BESERTA ANIME TERBAIKNYA*


1. Action
Berhubungan dengan aksi dan perkelahian, bisa menggunakan senjata atau tanpa senjata. Biasanya ditunjukkan dengan gerakan-gerakan setiap tokoh anime pada alur cerita.

2. Adventure
Menampilkan kisah perjalanan, petualangan dan penjelajahan karakter yang biasanya bertujuan untuk menggapai ambisi atau menyelesaikan misi.

3. Mecha
Berhubungan dengan dunia robot atau yang berhubungan dengan mesin.

Contoh: Aldnoah Zero, Buddy Complex dll.

Aldnoah Zero

4. Cars
Anime yang berfokus pada mobil seperti balapan dll.

Contoh: Bakuso mekoudai, Initial D dll.

Bakuso mekoudai

5. Drama
Menampilkan kisah kehidupan yang situasi atau kondisinya secara kompleks, penuh emosional dan konflik batin.

Contoh: Clannad, White Album dll.

Clannad

6. Fantasy
Menceritakan kisah penuh imajinatif atau hal yang tidak pernah ada di dunia nyata.

Contoh: mekokai No Kanata, Soredemo a Utsukushii dll.

mekokai No Kanata

7. School Life
Alur cerita lebih sering terjadi di sekolah.

Contoh: Kokoro Conect, tari-tari dll.

8. Slice of Life
Kehidupan sehari-hari yang umumnya kita alami dan bisa di sebut dengan nilai kehidupan keseharian manusia.

Contoh: One Week Friend/ Isshuukan Friend, Tsuki Ga Kirei dll.

One Week Friend/ Isshuukan Friend

9. Samurai
Samurai sendiri merupakan prajurit elit dari kalangan bangsawan. Selain menceritakan tentang tokoh samurai sendiri, anime tersebut juga menunjukkan gambaran tentang kehidupan pada saat itu.

Contoh: Samurai X, Gintamana dll.

Samurai X

10. Military
Jalan ceritanya berlatar belakang peperangan atau serba serbi militer.

Contoh: Gate: Jietai Kanochi nite Kaku Tatakaeri, Fullmetal Alchemist Brotherhood dll.

Gate: Jietai Kanochi nite Kaku Tatakaeri

11. Historical
Jalan ceritanya berlatar belakang lampau atau lawas baik penggambaran atau ceritanya.

Contoh: Kaguya Hime no Monogatari, Eikoku Koi Monogatari dll.

Kaguya Hime no Monogatari

12. Police
Menceritakan tentang polisi atau memiliki karakter utama sebagai aparat yang melindungi warga.

Contoh: Psycho-Pass, Ghost in The Shell dll.

Psycho-Pass

13. Sci-Fi (Science Fiction)
Menceritakan dunia di mana teknologi ilmu pengetahuan yang merajarela di dunia dan khususnya tentang teknologi masa depan.

Contoh: Charlotte, Mahouka koukou no rettousei dll.

Charlotte

14. Sport
Berhubungan dengan olahraga seperti Voli, Renang dll.

Contoh: Haimekuu!!, Free dll.

Haimekuu!!

15. Matrial Art
Semua yang berhubungan dengan seni bela diri seperti karate, judo dll.

Misal: Naruto, Bento dll.

Naruto

16. Musik
Memakai musik sebagai tema biasanya dimainkan oleh tokoh dalam bentuk solo, band, grup dance atau pertunjukan musikal.

Contoh: K-On, Fuuka dll.

K-On

17. Harem
Satu laki-laki dikelilingi banyak perempuan.

Contoh: Nisekoi, To Love ru dll.

Nisekoi

18. Reverse Harem
Satu perempuan dikelilingi banyak laki-laki.

Contoh: Amnesia, Brother Conflic dll.

Amnesia

19. Romance
Menceritakan kisah percintaan perempuan dan laki-laki yang sifatnya menjaga hubungan tersebut.

Contoh: Kimi No mekoke, Chuunibyou dll.

Kimi No mekoke

20. Shoujo
Biasanya berhubungan dengan masalah percintaan atau pengembangan karakter dan ditunjukkan untuk perempuan berusia 10-18 tahun.

Contoh: Ao Haru Ride, Gekkan Shoujo dll.

Ao Haru Ride

21. Josei
Alur ceritanya lebih kompleks dari genre shoujo dan ditunjukkan untuk perempuan berusia 18-30 tahun.

Contoh: Chihayafuru, Nodame Cantabile dll.

Chihayafuru

22. Seinen
Biasanya berhubungan dengan masalah dewasa dan ditunjukkan untuk pria berusia 18-30 tahun.

Contoh: ACCA: 13-ku Kansatsu-ka, Amaama to Imazuma dll.

ACCA: 13-ku Kansatsu-ka

23. Shounen
Biasanya memiliki ciri khas dengan cerita zero to hero atau dalam artian pada tokoh utama dari lemah menjadi kuat dan ditunjukkan untuk laki-laki berusia 10-18 tahun.

Contoh: Guilty Crown, Ao no Exorcist dll.

Guilty Crown

24. Shoujo-ai
Menceritakan hubungan antar sesama jenis perempuan tetapi hanya sebatas teman atau saudara dekat.

Contoh: Yuri-yuri, Candy Boy dll.

Yuri-yuri

25. Shounen-ai
Menceritakan hubungan antar sesama jenis laki-laki tetapi hanya sebatas teman atau saudara dekat.

Contoh: Junjou Romantica, Super Lovers dll.

Junjou Romantica
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
26. Kids
Anime dikhususkan untuk anak-anak saja tetapi tidak menuntut kemungkinan remajapun bisa.

Contoh: Crayon Shin-chan, Crayon Shin-chan dll.

Crayon Shin-chan

27. Space
Anime yang berlatar belakang luar angkasa, biasanya juga berhubungan dengan mendarat ke planet lain.

Contoh: Uchuu mekoudai, Uchu Show e Youkoso dll.

Uchuu mekoudai

28. Comedy
Anime yang membuat tertawa.

Contoh: Hataraku Maou-sama!, Baka to Test to Shoukanjuu dll.

Hataraku Maou-sama!

29. Parody
Anime yang membuat lawakan akan tetapi lawakan yang disajikan di genre ini berbeda dengan comedy. Lawakan yang disajikan adalah plesetan dari ‘Komik, manga, film, sinetron, acara komedian, tv, peristiwa, sejarah bahkan anime lain.

Contoh: Genshiken, BinBougami dll.

Genshiken`, text, tescuk, cr)
iky.sendMessage(from, `30. Game
Seseorang yang menyukai game dan biasanya permainannya diadaptasi dalam sebuah alur cerita.

Contoh: Accel World, Overloard dll.

Accel World

31. Supranatural
Melibatkan kekuatan yang tidak dapat dijelaskan atau peristiwa yang menentang hukum ilmu pengetahuan manusia.

Contoh: Re-Kan, Devil Survivor dll.

Re-Kan

32. Super Power
Hampir sama dengan supranatural, bedanya super power lebih memperlihatkan kekuatan super yang lebih besar dengan daya hancur yang luar biasa.

Contoh: Kekkai Senssen, Naruto dll.

Kekkai Senssen

33. Magic
Berhubungan dengan sihir seperti penyihir dll.

Contoh: Mohou Shoujo Desuka, Kore Wa Zombie Desu Ka dll.

Mohou Shoujo Desuka

34. Demons
Menceritakan tentang Dewa, Iblis atau Malaikat.

Contoh: Kamisama Hajimemashita, Inuyasha dll.

Kamisama Hajimemashita

35. Horror
Seram, menegangkan atau menakutkan.

Contoh: Another, Ghost Hunter dll.

Another

36. Triller
Menceritakan aksi pertarungan dengan waktu, aksi menantang dan biasanya mendapat halangan dari tokoh antagonis.

Contoh: Mirai Nikki, Zanmekou no Terror dll.

Mirai Nikki

37. Vampire
Anime yang mengisahkan atau memiliki nuasa vampire didalamnya.

Contoh: Owari No Seraph, Blood-C dll.

Owari No Seraph

38. Mystery
Menampilkan sebuah misteri dan tentunya tokoh utama yang ditujukan untuk menyelesaikan misteri tersebut.

Contoh: Hyouka, Bungo Stray Dog dll.

Hyouka

39. Psychological
Berkaitan dengan cara berpikir karakter. Biasanya mengandung cara berfikir karakter yang abnormal yang sering di perlihatkan dalam menyelesaikan permasalahan.

Contoh: Boku dake ga Inai, Death Note dll.

Boku dake ga Inai

40. Dementia
Anime yang memiliki plot mind-twisting yaitu cerita yang membingungkan.

Contoh: Neon Genesis Evagelion, FLCL dll.

Neon Genesis Evagelion

41. Ecchi
Berisi adegan-adegan saru atau tidak senonoh namun tidak menjurus ke pornografi melainkan hanya sebagai fanservice.

Contoh: Tasogare Otome x Amnesia, Sankarea dll.

Tasogare Otome x Amnesia

42. Hentai
Sudah mengarah ke ponografi dikhususkan untuk orang dewasa.

Contoh: Kozu No Honkai, B Gata H Kei dll.

Kozu No Honkai

43. Yuri
Hubungan menyimpang yaitu hubungan antar sesama jenis perempuan sampai tahap seksual.

Contoh: Cytrus, Strawberry Panic dll.

Cytrus

44. Yaoi
Hubungan menyimpang yaitu hubungan antar sesama jenis laki-laki sampai tahap seksual.

Contoh: Boku no pico, Sekai Ichi Hatsukoi dll.

Boku no pico

45. NTR (Netore)
Dalam arti namanya mengartikan cinta yang dikhianati. Anime NTR juga merupakan anime yang dihindari karena dapat meninggalkan sakit hati bagi penontonnya.

Contoh: Nagi No Asukara, Boku Ga Ita dll.

Nagi No Asukara

42-45 seharusnya merupakan salah satu jenis genre tapi kebanyakan staff yang berwenang memproduksi anime sangat jarang mencantumkan genre ini meskipun didalamnya ada unsur genre tersebut (yah untuk sekedar info aku tetap memasukkannya ke list).

Apapun genrenya, kita sebagai penonton diharapkan bijak memilih mana tontonan yang baik. Sekian Reviewku untuk hari ini.

*Arigatou Gozaimasu…*



*Kurumi Chan  *`, text, { quoted: mek })
await limitAdd(sender)
					break
					case 'min':
					if (!isOwner) return
					case 'adminmenu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					iky.sendMessage(from, adminmenu(prefix), text, { quoted: mek })
					iky.sendMessage(from, 'hai admin😃', text, { quoted: mek })
					await limitAdd(sender)
					break
					
					case 'wer':
					if (!isOwner) return
					case 'ownermenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( ownermenu(prefix), text, tescuk, cr)
					iky.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'sfw':
					if (!isOwner) return
					case 'nsfwmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					iky.sendMessage(from, nsfwmenu(prefix), text, tescuk, cr)
					iky.sendMessage(from,'SANGEAN AOWKWOWK',text, { quoted: mek })
					break
					
					case 'animemenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( animemenu(prefix), text, tescuk, cr)
					iky.sendMessage(from, 'Hai bang??', text, { quoted: mek })
					break
					case 'med':
					if (!isOwner) return
					case 'mediamenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( mediamenu(prefix), text, tescuk, cr)
					iky.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'bahasalist':
					iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					costum( bahasa(), text, tescuk, cr)
					break
				  case 'tem':
				if (!isOwner) return
					case 'othermenu':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( othermenu(prefix), text, tescuk, cr)
					iky.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'rizkygroup':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					costum( '*RIZKY GROUP*\n\n_Yuk masuk kak_\n_sama sama belajar buat bot_\n*https://chat.whatsapp.com/EoMGYvVe0lKFY45jAoxgli*', text, tescuk, cr)
					break
					case 'fume':
					if (!isOwner) return
					case 'funmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( funmenu(prefix), text, tescuk, cr)
					iky.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
				 case 'menker':
				if (!isOwner) return
					case 'makermenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( makermenu(prefix), text, tescuk, cr)
					iky.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'mememaker':
                      if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}mememaker [teks|teks] atau tag gambar yang sudah dikirim`)
                      gh = body.slice(10)
                const teks02 = gh.split("|")[0];
                    const teks98 = gh.split("|")[1];
                  
                      spawn('convert', [
                      uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo,
                    gx = await iky.downloadMediaMessage(uyw),
						`gx`,
						'-gravity',
						'Center',
						'-fill',
						'database/gambar/black.png',
						'-font',
						'./src/font/Panton-BlackitalicCaps.otf',
						'-size',
						'1280x562',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0-85',
						`${teks02}`,
						'-fill',
						'#ffffff',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+3',
						' ',
						'-fill',
						'#ffffff',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+90',
						' ',
						'-fill',
						'#ffffff',
						'-font',
						'./src/font/American Captain.ttf',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+180',
						`${teks98}`,
						'./database/tmp/memek.jpg'
						])
						setTimeout( () => {
						lvlimg = fs.readFileSync('database/tmp/memek.jpg')
						welpop = `cocote`
					 iky.sendMessage(from, lvlimg, MessageType.image, {quoted: mek, caption: welpop})
						}, 1000)
						break
					case 'level':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                
                
spawn('convert', [
						'./database/gambar/level.jpg',
						'-gravity',
						'Center',
						'-fill',
						'database/gambar/black.png',
						'-font',
						'./src/font/Panton-BlackitalicCaps.otf',
						'-size',
						'1280x562',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0-85',
						pushname2,
						'-fill',
						'#ffffff',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+3',
						userLevel,
						'-fill',
						'#ffffff',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+90',
						role,
						'-fill',
						'#ffffff',
						'-font',
						'./src/font/American Captain.ttf',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+180',
						userXp,
						'./database/tmp/lepel.jpg'
						])
						setTimeout( () => {
						lvlimg = fs.readFileSync('database/tmp/lepel.jpg')
						welpop = `...`
					 iky.sendMessage(from, lvlimg, MessageType.image, {quoted: mek, caption: welpop})
						}, 1000)
            break
            case 'mem':
            uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               
            spawn('convert', [
            
						iky.downloadMediaMessage(uyw),
						'-gravity',
						'Center',
						'-fill',
						'database/gambar/gradient.png',
						'-font',
						'./src/font/Dimbo Italic.ttf',
						'-size',
						'1280x1280',
						'-pointsize',
						'63',
						'-interline-spacing',
						'7.5',
						'-annotate',
						'+0+180',
						args.join(' '),
						'./database/tmp/bot.jpg'
						])
						setTimeout( () => {
					let stik = fs.readFileSync('./database/tmp/bot.jpg')
				iky.sendMessage(from, stik, sticker, {quoted: mek})
				}, 1000)
					break
            case 'dolar':
            if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                const dojar = getDolarExp(sender)
                lax = sender.replace('@s.whatsapp.net','')
                if (!isOwner) return costum( `┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ Balance :  ${dojar}\n┗━━━━━━━━━━━━`, text, tescuk,`Dolar Mu ${dojar}`)
                if (isOwner) return costum(`┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ Balance :  99999\n┗━━━━━━━━━━━━`, text, tescuk,`Dolar Mu 99999`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'limit':
                const lhs = getLimitExp(sender)
                lax = sender.replace('@s.whatsapp.net','')
                if (!isOwner) return costum( `┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ Limit :  ${lhs}\n┗━━━━━━━━━━━━`, text, tescuk,`Limit Mu ${lhs}`)
                if (isOwner) return costum(`┏━━❉ *Limit* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ Limit :  99999\n┗━━━━━━━━━━━━`, text, tescuk,`Limit Mu 99999`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            
            
                   case 'cuy':
                   iky.sendMessage(from, 'uy ada apa' , text, { quoted: mek })
                    break
                    case 'rules':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                   costum( rules(prefix), text, tescuk, cr)
                    break
                    case 'modapk':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                   iky.sendMessage(from, modapk(), text, tescuk, cr)
                   await limitAdd(sender)
                    break
					case 'sls':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					iky.sendMessage(from, 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker' , text, { quoted: mek })
					break
					
					case 'kodenuklir':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					costum( kodenuklir(), text, tescuk, cr)
					await limitAdd(sender)
					break
					case 'kodenuklir2':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					costum( kodenuklir2(), text, tescuk, cr)
					await limitAdd(sender)
					break
					
					case 'daftarvip':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					iky.sendMessage(from, `JIKA INGIN BERLANGGANAN PREMIUM/nBisa Hubungi Owner\nwa.me/6282387804410 atau ketik *${prefix}owner*` , text, tescuk, cr)
					break
					case 'readmore':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('teks nya mana om?')
					var kls = body.slice(9)
					var has = kls.split("|")[0];
					var kas = kls.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
				iky.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
				await limitAdd(sender)
					break
					case 'ytsearch':
					iky.updatePresence(from, Presence.composing) 
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://api.vhtear.com/youtube?query=${body.slice(9)}&apikey=${vhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '--------------------------\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* :${i.id}\n*Url* : ${i.urlyt}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n--------------------------\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'xxx':
					iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					data = await fetchJson(`https://api.vhtear.com/xxxsearch?query=${body.slice(4)}&apikey=${vhtear}`, {method: 'get'})
					
					teks = '--------------------------\n'
					for (let i of data.data) {
						teks += `*Title* : ${i.title}\n*links* : ${i.url}\n*Thumbnail* : ${i.image}\n*Duration* : ${i.duration}\n--------------------------\n`
					}
					reply(teks.trim())
					break
					case 'nekopoi':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					iky.sendMessage(from, nekopoi() , text, tescuk, cr)
					await limitAdd(sender)
					break
					case 'cekvip':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply(`Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!` ,text, { quoted: mek })
					
					reply(`True`)
					break
					case 'vipni':
					
				    if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					reply (`🐦🐦🐦🐦🐦`)
					break
					case 'vipadd':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply(`Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!` ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Number* : \n│+ *Expired*: *30 Days*\n│+ *Status*: *ACTIVE*\n│ Thx for Upgrade to Premium🥰\n*╰──────「 *iky* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						iky.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Number* : @${mentioned[0].split('@')[0]}\n│+ *Expired*: *30 Days*\n│+ *Status*: *ACTIVE*\n│ Thx for Upgrade to Premium🥰\n*╰──────「 *iky* 」────`, mentioned, true)
					iky.sendMessage(from, mentioned)
				    }
					break
					
					case 'vipdell':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply(`Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!` ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Number* : \n│+ *Status*: *DEACTIVE*\n│ See u for next order🙂\n*╰──────「 *iky* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						iky.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Number* : @${mentioned[0].split('@')[0]}\n│+ *Status*: *DEACTIVE*\n│ See u for next order🙂\n*╰──────「 *iky* 」────`, mentioned, true)
					iky.sendMessage(from, mentioned)
				    }
					break
					case 'rizkyadmin':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					costum( '*╭────*「 *ADMINBOT RIZKY✨* 」\n*│+wa.me/6285364937006*\n*│+wa.me/6282255123081*\n*╰──────*「 *iky* 」*────*\n\n*_JIKA INGIN MENJADI ADMIN Kurumi Chan  _*\n*_Ketik /iklan_*' ,tescuk, cr)
					break
					case 'karoke':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af pan="stereo|c0=c0|c1=-1*c1" -ac 1 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'lucu':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'cbass':
					bass = body.slice(7)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=100:width_type=o:width=2:g=${bass}/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
					case 'premiumcek':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					sa = await getBuffer(`https://i.ibb.co/Gv5W97v/IMG-20210106-WA1995.jpg`)
					iky.sendMessage(from, sa, image, { quoted: mek, caption: '*╭────*「 *PREMIUM USER👑* 」\n*│+ wa.me/6282198571732*\n*│+ wa.me/62895801181650*\n*│+ wa.me/6282387804410*\n*│+ wa.me/6289655478810*\n*│+ wa.me/6285807107404*\n*╰──────*「 *RIZKY* 」*────*\n\n*_JIKA INGIN MENJADI PREMIUM USER Kurumi Chan  _*\n*_Ketik /daftarvip*' })
					break
					case 'addpremium':
					if (isBanned) return reply(mess.only.benned)    
					iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Perintah Diterima menambah User Premium : ${premium}`)
					break
					
					
					case 'yk':
					if (!isOwner) return
					case 'ytkomen':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                         gh = body.slice(9)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await iky.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
                                         buffer = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                         iky.sendMessage(from, buffer, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         break
                                         await limitAdd(sender)
                                         case 'phubkomen':
                                         if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                    
                                         gh = body.slice(11)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         reply(mess.wait)
                                         var imgbb = require('imgbb-uploader')
                                         ghost = tod.participant
                                         try {
                                         pp = await iky.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
                                         buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=${res.display_url}&username=${usnm}&msg=${cmn}`)
                                         iky.sendMessage(from, buffer, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         
                                         await limitAdd(sender)
                                         break
                                         case 'send':
                                         if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var sms = pc.split("|")[1];
					iky.sendMessage(nomor+'@s.whatsapp.net', sms, text)
					swreply(`berhasil mengirim pesan yang berisi *${sms}*`)
					break
					case 'pc2':
				     var pc = body.slice(5)
				     var opi = pc.split("|")[0];
					 var opi = pc.split(" |")[1];
				     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return replyt('Tag target yang ingin di chat')
					 mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					 iky.sendMessage(mentioned+'@s.whatsapp.net', opi, text)
					break
					case 'translate2':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (args.length < 1) return iky.sendMessage(from, `Kirim perintah ${prefix}translate kode-bahasa teks`, text, {quoted: mek})
                    if (args.length < 2) return iky.sendMessage(from, `Kirim perintah ${prefix}translate kode-bahasa teks`, text, {quoted: mek})
                        var p = body.slice(12)
                        var codelang = p.split("|")[0];
                        var pex = p.split(" ")[1];
                        translate(pex, {to: codelang}).then(res => {
                            reply(res.text)
                            console.log(res.text)
                        })
                    break
					case 'googleimage':
					swreply(`limit kamu terpakai 3`)
				   iky.updatePresence(from, Presence.composing) 
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
**Jika Berminat Bisa Hubungin Nomor Dibawah:**
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vhtear}`, {method: 'get'})
					reply(`Harap Sabar Jangan Spam,Jika Ketahuan Spam Banned Balasannya`)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					iky.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: mek })
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vhtear}`, {method: 'get'})
				await limitAdd(sender)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					iky.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: mek })
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vhtear}`, {method: 'get'})
					await limitAdd(sender)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					iky.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: mek })
					await limitAdd(sender)
					break
					case 'googlesearch':
				   iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					canda = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googlesearch?query=${canda}&apikey=${vhtear}`)
					sreply(mess.wait)
				    var upu = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes78 =  upu[Math.floor(Math.random() * upu.length)];
					pint = await getBuffer(tes2)
					iky.sendMessage(from, pint, text, { caption: '*Google search*\n\n*Hasil Pencarian : '+tes78+'*', quoted: mek })
					break
					case 'delete':
					case 'del':
					case 'd':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					if (!isGroup)return reply(mess.only.group)
					
					iky.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
					case 'dia':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					if (!isGroup)return reply(mess.only.group)
					
					try {
					reply(mek.message.extendedTextMessage.contextInfo.participant)
					} catch(e) {
					reply('Reply pesan yang berbentuk teks!!')
					}
					await limitAdd(sender)
					break
					
					case 'chatdelete':
					if (!isOwner) return
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					iky.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					
					case 'burning':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)
                                        if (!isUser) return reply(mess.only.userB)
                                        if (!isPublic) return reply(mess.only.public)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.imgUrl}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://api.vhtear.com/burning_fire?link=${teks}&apikey=${vhtear}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
					
					case 'ger':
					if (!isOwner) return
					case 'triggerd':
                                         if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (!isUser) return reply(mess.only.userB)
              
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                                             case 'triggerd2':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=50 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                                             case 'triggerd3':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=50 -lossless 2 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
					
					case 'darkjokes':
				iky.updatePresence(from, Presence.composing) 
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`DARKJOKES\`\`\`')
				break
				case 'te':
				iky.updatePresence(from, Presence.composing) 
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=pentol`, {method: 'get'});
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.sticker)
                sendStickerFromUrl(hasil)
				break
				await limitAdd(sender)
				case 'indiahot':
				iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/bokep.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`DARKJOKES\`\`\`')
				break
				case 'aesthetic':
				iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/walpaper.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`NIH WALPAPERNYA KAK\`\`\`')
				break
				case 'walpaper':
				iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/sakura.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`NIH WALPAPERNYA KAK\`\`\`')
				break
				case 'glass':
                                         if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                                 await limitAdd(sender)
                                          }
                                             break
                                             case 'colors':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
				case 'swasted':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                                             case 'ppwasted':
                                             var imgbb = require('imgbb-uploader')
                                         if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('pp siapa jin? tag lah')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await iky.getProfilePicture(mentioned)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
                                         ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${anu.display_url}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted:mek})
                                                //fs.unlinkSync(rano)
                                        }) //barxnl
                                          
                                             break
                                             case 'ppgay':
                                             var imgbb = require('imgbb-uploader')
                                         if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('pp siapa jin? tag lah')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await iky.getProfilePicture(mentioned)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
                                         ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${anu.display_url}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted:mek})
                                                //fs.unlinkSync(rano)
                                        }) //barxnl
                                          
                                             break
                                             case 'stickpp':
                                             var imgbb = require('imgbb-uploader') //rizky
                                         if (args.length < 1) return //rizky
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('pp siapa jin? tag lah') //rizky
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]//rizky
						try {
						pp = await iky.getProfilePicture(mentioned)//rizky
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
                                         ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
         
                                         exec(`wget ${anu.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                //fs.unlinkSync(ranp)
                                                
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted:mek})
                                                //fs.unlinkSync(rano)
                                        }) //rizky
                                          
                                             break
					case 'wasted':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         sreply(mess.wait)
                                         
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        anu1 = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${teks}`)
                                                iky.sendMessage(from, anu1, image, {quoted: mek})
                                            }
                                             break
					case 'vipmenu':
					
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					iky.sendMessage(from, vipmenu(prefix) , text, { quoted: mek })
					break
					case 'iklan':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					iky.sendMessage(from, iklan() , text, { quoted: mek })
					break
                case 'kodenegara':
               iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
               iky.sendMessage(from, kodenegara(prefix), text, {quoted: mek})
               break
					case 'animesaran':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					iky.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					await limitAdd(sender)
					break
					case 'listsurah':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					iky.sendMessage(from, listsurah() , text, tescuk, cr)
					await limitAdd(sender)
					break
					case 'tnc':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					costum(tnc() , text, tescuk, cr)
					break
					case 'listzodiak':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					costum( listzodiak() , text, tescuk, cr)
					break
					case 'zodiak':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
	if (args.length === 0) {
	iky.sendMessage(from, listzodiak(), text)
	} else if (args.includes('aries')) {
	iky.sendMessage(from, aries(), text)
	} else if (args.includes('taurus')) {
	iky.sendMessage(from, taurus(), text)
	} else if (args.includes('gemini')) {
	iky.sendMessage(from, gemini(), text)
	} else if (args.includes('cancer')) {
	iky.sendMessage(from, cancer(), text)
	} else if (args.includes('leo')) {
	iky.sendMessage(from, Leo(), text)
	} else if (args.includes('virgo')) {
	iky.sendMessage(from, Virgo(), text)
	} else if (args.includes('libra')) {
	iky.sendMessage(from, Libra(), text)
	} else if (args.includes('scorpio')) {
	iky.sendMessage(from, Scorpio(), text)
	} else if (args.includes('sagittarius')) {
	iky.sendMessage(from, Sagittarius(), text)
	} else if (args.includes('capricorn')) {
	iky.sendMessage(from, Capricorn(), text)
	} else if (args.includes('aquarius')) {
	iky.sendMessage(from, Aquarius(), text)
	} else if (args.includes('pisces')) {
	iky.sendMessage(from, Pisces(), text)
	}
	await limitAdd(sender)
	break
					
					
					
                case 'welot':
              case 'kangcopet':
              case 'bangkadada':
                    let elot = fs.readFileSync('./lindy/welot.mp3')
                    iky.sendMessage(from, elot, MessageType.audio, { ptt: true, quoted: mek })
                    break
                    case 'hantu':
              case 'kunti':
              case 'haha':
                    let nek = fs.readFileSync('./lindy/AUD-20210110-WA0311.mp3')
                    iky.sendMessage(from, nek, MessageType.audio, { ptt: true, quoted: mek })
                    break
		case 'IRI':
              case 'iri':
              case 'Iri':
                    let iri = fs.readFileSync('./lindy/iri.mp3')
                    iky.sendMessage(from, iri, MessageType.audio, { ptt: true, quoted: mek })
                    break
                case 'BAKA':
              case 'baka':
              case 'Baka':
                    let baka = fs.readFileSync('./lindy/baka.mp3')
                    iky.sendMessage(from, baka, MessageType.audio, { ptt: true, quoted: mek })
                    break
                    case 'tariksis':
              case 'tarekses':
              case 'tareksis':
                    let ses = fs.readFileSync('./lindy/tarekses.mp3')
                    iky.sendMessage(from, ses, MessageType.audio, { ptt: true, quoted: mek })
                    break
                case 'jago':
              case 'abangjago':
              case 'abgjago':
                    let eerrr = fs.readFileSync('./lindy/abangjago.mp3')
                    iky.sendMessage(from, eerrr, MessageType.audio, { ptt: true, quoted: mek })
                    break
                
                
                
				case 'info':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					uptime = process.uptime()
					qute = await getBuffer(`https://i.ibb.co/K2PX5kq/e3e8017c1542.jpg`)
					iky.sendMessage(from,qute,image,{caption:`*Nama bot* : ${iky.user.name}\n*Author* : *Rizky Fadilah*\n*Original Sc By : MhankBarBar*\n*Team: Recoders Area*\n*Nomor Bot* : ${iky.user.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${mekun(uptime)}\n*Public:* ON\n*Total User Premium*: ${premium.length}\n*Total Chat* : ${totalchat.length}\n\n_*Info Kurumi Chan  !*_`,thumbnail: fs.readFileSync('./hentai.jpg')})
					await limitAdd(sender)
					break
					
					case 'fakta':
               if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

               data = await fetchJson('http://xptnewapi.xp3.biz/Faktaaas.php?apikey=xptn1')
               hasil = data.result
                iky.sendMessage(from, hasil, text, {quoted: mek})
				break
					case 'meme':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(5)
					var meme = gh.split("|")[0];
					var memek = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					sreply(mess.wait)
					var imgbb = require('imgbb-uploader')
            var kontol = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					var media = await iky.downloadAndSaveMediaMessage(kontol)
            
            imgbb('2685f71965fa6c56702e9e70644ff0ad', media)
                .then(data => {
                    berk = `${data.display_url}`
               
					anu =  getBuffer(`https://api.vhtear.com/genmeme?text1=${meme}&text2=${memek}&url=${berk}&apikey=${vhtear}`)
					})
					var hai = `alpha gay`
iky.sendMessage(from, anu, image, {quoted: mek,caption: hai})
					
					       
await limitAdd(sender)
					
					break
				
				case 'ocr':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)    
				if (!isPublic) return reply(mess.only.public)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iky.downloadAndSaveMediaMessage(encmedia)
						sreply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
						await limitAdd(sender)
					}
					break
				
				case 'sriker':
			if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iky.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								iky.sendMessage(from,buffer,sticker,{contextInfo: { mentionedJid: mem }})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					
					
					
					}
break
case 'stikpp':
iky.updatePresence(from, Presence.composing)
if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TUNGGU DULU KANG COLONG')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await iky.getProfilePicture(mentioned)
						media = await iky.downloadAndSaveMediaMessage(pp)
								exec('cwebp -q 50 ' +media+ ' -o database/stick/' + 'stikergradient' + '.webp', (error, stdout, stderr) =>
                  {
					let stik = fs.readFileSync('./database/stick/' + 'stikergradient' + '.webp')
				iky.sendMessage(from, stik, sticker, {quoted: mek})
})
} catch (e) {
reply(String(e))
}
							break
				case 'sticker2':
				case 'stiker2':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iky.downloadAndSaveMediaMessage(encmedia)
			 exec('cwebp -q 50 ' +media+ ' -o database/stick/' + 'stikergradient' + '.webp', (error, stdout, stderr) =>
                  {
					let stik = fs.readFileSync('./database/stick/' + 'stikergradient' + '.webp')
				setply(stik, sticker)
})
} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲??𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
break
			case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iky.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Kurumi Chan', '@_rizkyfadilah8')} ${ran} -o ${ran}`, async (error) => {
								
									iky.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*iky.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iky.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
							reply(`mungkin yang kamu maksud /stickergif?`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('Kurumi Chan', '@_rizkyfadilah8')}${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									iky.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*iky.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iky.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('Kurumi Chan', '@_rizkyfadilah8')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									iky.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//iky.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iky.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								iky.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
                                        case 'stikergif':
                case 'stickergif':
                case 'sgif':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(`lu belum kedaftar didalam database iky bot tolol`)
                if ((isMedia && !mek.message.videoMessage.seconds < 11 || isQuotedVideo && !mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iky.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						sreply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								setply(buffer, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim video dengan caption ${prefix}stickergif atau tag video yang sudah dikirim`)
						await limitAdd(sender)
					}
					break
			case 'creator':
			case 'owner':
			
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 iky.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 konreply('itu owner ku ><')
                 mek = await getBuffer(`https://i.ibb.co/ZfS1nPC/images-2020-12-28-T142415-021.jpg`)
                 iky.sendMessage(from, mek, image, { quoted: mek, caption: '*ini waifu owner ku mau apa kau*'})
                 await limitAdd(sender)
                 break
                 case 'trigermem':
                                         if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (!isUser) return reply(mess.only.userB)
              
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                                         pp = await iky.getProfilePicture(mentioned)
                                         buffer = await getBuffer(pp)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad",buffer)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(`mungkin yang lu tag ga pake foto profile`)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                             break
                 case 'getpic':
                 case 'yourpic':
                 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
						if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TUNGGU DULU KANG COLONG')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await iky.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						sendImage(buffer, mek, 'Nih mank')
					} catch (e) {
						reply('Gagal Kak!')
						await limitAdd(sender)
					}
					break
                 case 'antilink':
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isAntilink) return reply('Mode antilink sudah aktif')
						anlink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply(`Sukses mengaktifkan mode antilink`)
					} else if (args[0] == 'disable') {
						anlink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply('Sukes menonaktifkan mode antilink️')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					break
					    
                 case 'jomblo':
                 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/animu/pat?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                                 await limitAdd(sender)
                                          }
                                             break
                 
                 case 'fitnah':
                 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 if (!isPublic) return reply(mess.only.public)
				
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					iky.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender)
break
					case 'fit':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					var gh = body.slice(4)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					
					var bot = gh.split("|")[1];
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: bot,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					
					iky.sendMessage(from, options, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `/hidetag` }}})
					await limitAdd(sender)
break
case 'stiktag':
if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
if (!isQuotedSticker) return reply('Reply stiker nya om')
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               gx = await iky.downloadMediaMessage(uyw)
					
					iky.sendMessage(from,gx,sticker,{contextInfo: { mentionedJid: mem }}),
					
					await limitAdd(sender)
break
case 'gamtag':
if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
if (!isQuotedImage) return reply('Reply foto nya om')
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					caio = body.slice(7)
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               gx = await iky.downloadMediaMessage(uyw)
					
					iky.sendMessage(from,gx,image,{caption: `${caio}`,contextInfo: { mentionedJid: mem }}),
					
					await limitAdd(sender)
break
case 'stiktag2':
if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
if (!isQuotedSticker) return reply('Reply stiker nya om')
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					
					
					uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               gx = await iky.downloadMediaMessage(uyw)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					iky.sendMessage(from,gx,sticker,{contextInfo: { mentionedJid: mentioned }}),
					
					await limitAdd(sender)
break
case 'audtag':
if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
if (!isQuotedAudio) return reply('Reply audio nya om')
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               gx = await iky.downloadMediaMessage(uyw)
					
					iky.sendMessage(from,gx,audio,{contextInfo: { mentionedJid: mem },ptt: true, duration: 60000000}),
					
					await limitAdd(sender)
break
					case 'henfit':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			var gh = body.slice(6)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var getu = gh.split("|")[1];
			iky.sendMessage(from, `${getu}`, text, {quoted: { key:{ fromMe:false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: {"stickerMessage":{
"url":"https://mmg.whatsapp.net/d/f/ArWn-ScCLciLvlmShaaX_GFmylGtwgC6k0ACmz3tMSww.enc",
"fileSha256":"IqrJTqOdX+wA+tzIubVeyl191li5U62Dnt9JzPLWIrM=",
"fileEncSha256":"E0Aic501KH2S3nfAgV3/xXvqygtaVKhz5+9rsefn5kg=",
"mediaKey":"dk6oSw2WLZl6uWsjXTZ+xRMk4cgL/O+eUYXz/9eoDkE=",
"mimetype":"image/webp",
"height":64,
"width":64,
"directPath":"/v/t62.7118-24/19234707_240525457622806_1337817065097897009_n.enc?oh=6c88fdca65bec8f5aff537f2c55e0ad8&oe=603FFE82",
"fileLength":"14244",
"mediaKeyTimestamp":"1612181365",
"isAnimated":false}}}})
await limitAdd(sender)
break
case 'zip':
if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					gh = body.slice(4)
				    var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					iky.sendMessage(from, `${bot}`, text, {quoted: { key:{ fromMe:false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: {"documentMessage": {
"url":"https://mmg.whatsapp.net/d/f/Ak5rGJEEI2Bqhd9WzQfnnBWiiXVr-6cfPt3WrnCOxEcy.enc",
"mimetype":"application/octet-stream",
"title":`${target}.zip`,
"fileSha256":"FL2gMKqji95dUOpETNy01LWcx8ImZ9aSKjVAZuShh70=",
"fileLength":"255136",
"pageCount":0,
"mediaKey":"oSOgllded+snE7hGHKH6ZsBpQc85VMXvXA3eKwozDWU=",
"fileName":`${target}.zip`,
"fileEncSha256":"/QfdUAaVsAm8GUjWp0Np7j8DF0VnkCS984wpZ25IYy0=",
"directPath":"/v/t62.7119-24/55888019_135706521705155_1593600754066959793_n.enc?oh=84a5f8e4e7606b97b661a207f0961e8d&oe=6041A89F",
"mediaKeyTimestamp":"1612170760"}}}})
await limitAdd(sender)
					
					break
                case 'faks':
                   iky2.fakeReply("ange mas", "mending lari", "0823-877101916", MessageType.text)
                   break
                   case 'fake':
costum('kamu gay', '0@s.whatsapp.net', `njir`)
break
case 'burnpaper':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				    	if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					npaper = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=burn_paper&text=${npaper}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'undergras':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				    	if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					thegra = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=${thegra}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'boardlogo':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				    	if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧??𝐚 𝐤𝐚𝐤')
					boards = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wooden_boards&text=${boards}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'goldmetal':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				    	if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞??𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					metali = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${metali}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'lovecoffe':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					coffee = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${coffee}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'woodblock':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭??𝐤𝐬??𝐲𝐚 ??𝐚𝐤')
					gjelas = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${gjelas}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'wolfmetal':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					wometal = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'poterlogo':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					potter = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${potter}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'vinta':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					vin = body.slice(6)
					sreply(mess.wait)
					vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
					iky.sendMessage(from, vintage, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
                   case 'sep':
                   if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                   
				    svst = body.slice(4)
						listrandom.push(svst)
						fs.writeFileSync('./src/list.json', JSON.stringify(listrandom))
                     if (!isQuotedSticker) return reply('Reply stiker nya om')
                     if (!svst) return reply('Nama file nya apa?')
                   boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     delb = await iky.downloadMediaMessage(boij)
                   fs.writeFileSync(`./stik/${svst}.webp`, delb)
                    reply('Berhasil menyimpan ke stickerlist!')
                     break
                     case 'sip':
                   if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                   
				    svst = body.slice(4)
						
                     if (!svst) return reply('Nama file nya apa?')
                   boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     delb = await iky.downloadMediaMessage(boij)
                   fs.writeFileSync(`./database/gambar/${svst}.jpg`, delb)
                    reply('Berhasil menyimpan ke stickerlist!')
                     break
                     case 'asupan2':
                     if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/asupan?apikey=itsmeiky633`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, video, {quoted: mek})
					await limitAdd(sender)
					break
		case 'katadilan':
		if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/bacotandilan?apikey=${ikikey}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'hekelbucin':
					case 'bucinhekel':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/bacotanhacker?apikey=${ikikey}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'katailham':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/bacotanilham?apikey=${ikikey}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'katacinta':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/katacinta?apikey=${ikikey}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
                     case 'addfoto':
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedImage) return reply('Reply foto nya om')
                     aga = body.slice(8)
                     if (!aga) return reply('Nama file nya apa?')
                   buy = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     dehh = await iky.downloadMediaMessage(buy)
                   fs.writeFileSync(`./stok/${aga}.jpg`, dehh)
                    reply('Berhasil menyimpan foto!')
                     break
                     case 'addvideo':
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedVideo) return reply('Reply video nya om')
                     sgu = body.slice(9)
                     if (!sgu) return reply('Nama file nya apa?')
                   gsa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     aps = await iky.downloadMediaMessage(gsa)
                   fs.writeFileSync(`./stek/${sgu}.mp4`, aps)
                    reply('Berhasil menyimpan video!')
                     break
                     case 'tex':
                                  if (!isQuotedText) return sreply(`gagal mhank`)
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                           
           sreply(`${uyw}`)
                     case 'ker':
                                  
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               gx = await iky.downloadMediaMessage(uyw)
           ola(gx,sticker)
           break
           case 'teksp':
                               gx = await mek.message.conversation
           sreply(gx)
           break
           case 'gam':
                                  
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               gx = await iky.downloadMediaMessage(uyw)
           
           if (!isQuotedImage) return reply(`reply gambar om`)
           ola(gx,image)
           
           break
           case 'vid':
                                  
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               gx = await iky.downloadMediaMessage(uyw)
           if (!isQuotedVideo) return reply(`reply videonya om`)
           ola(gx,video)
           break
           case 'au':
                                  
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                               gx = await iky.downloadMediaMessage(uyw)
           if (!isQuotedAudio) return 
           ola(gx,audio)
           break
                     case 'addaudio':
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedAudio) return reply('Reply audio nya om')
                     gsh = body.slice(9)
                     if (!gsh) return reply('Nama file nya apa?')
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     gx = await iky.downloadMediaMessage(uyw)
                   fs.writeFileSync(`./stak/${gsh}.mp3`, gx)
                    reply('Berhasil menyimpan audio!')
                     break
                     
                     case 'deface':
                     if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						const dipes = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const tipes = await iky.downloadAndSaveMediaMessage(dipes)
						iky.sendMessage(from,args.join(' '), extendedText, {title: 'Situs ini terhekel', description: 'By Kurumi Chan  ', thumbnail: fs.readFileSync(tipes)})
						
break
case 'tesdoang':
iky.sendMessage(from, 'https://google.com', extendedText, {title: 'Situs ini terhekel', desc: 'By Kurumi Chan  ', thumbnail: fs.readFileSync('./getpp.jpeg')})
break
case 'cowok':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
                     case 'getaudio':
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    audiou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stak/${audiou}.mp3`)
				    iky.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
                } catch (e) {
			iky.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
		}
		break
		
		case 'alquran1':
		if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    audiou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stak/ngaji1.mp3`)
				    iky.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
                } catch (e) {
                	buffer = fs.readFileSync(`./stak/ngaji1.mp3`)
			iky.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
			await limitAdd(sender)
		}
		break
		case 'githstalk':
                case 'githubstalk':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                   teks = body.slice(5)
                   anu = await fetchJson(`http://melodicxt.herokuapp.com/api/githubprofile?user=${teks}&apikey=administrator)`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buffer = await getBuffer(anu.avatar_url)
                   hasil = ` *username* \n ${anu.followers} *following* \n${anu.following} *bio* \n${anu.bio} *public_repos* \n${anu.public_repos} *created_at* \n${anu.created_at} *updated_at* \n${anu.updated_at}`
                    iky.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                   break
		
                     case 'getvideo':
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    videou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stek/${videou}.mp4`)
				    iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
                } catch (e) {
			iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
		}
		break
                     case 'getfoto':
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    fotou = body.slice(8)
				    try {
				    buffer = fs.readFileSync(`./stok/${fotou}.jpg`)
				    iky.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih bos'})
                } catch (e) {
			iky.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih bos'})
		}
		break
                  
		case 'hm':
		if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    try {
				    buffer = fs.readFileSync(`./stik/hm.webp`)
				    setply(buffer, sticker)
                } catch (e) {
                	buffer = fs.readFileSync(`./ 2354.webp`)
			setply(buffer, sticker)
		}
		break
		case 'gatau':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
				iky.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await iky.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}\n*NSFW : ${nsfw ? 'Aktif' : 'Tidak Aktif'}*`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					iky.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
					case 'profile':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (!isPublic) return reply(mess.only.public)
				iky.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await iky.getProfilePicture(`${sender.split('@')[0]}`)
				} catch {
					ppimg = 'https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg'
				}
				teks = `「 *PROFILE* 」\n\n*Nomor: ${sender.split('@')[0]}*\n*Tagged: @${sender.split('@')[0]}*\n*Username:* ${pushname2}\n*Banned: ${isBanned  ? 'Terbanned' : 'Tidak Terbanned'}*\n*Block: ${blocked ? 'tidak' : ' Terblockir'}*\n*Admin Group: ${isGroupAdmins ? 'Iya' : 'Bukan'}*\n*Vip User: ${isPremium ? 'Premium' : 'Standar'}*\n*Daftar: ${isUser ? 'Terdaftar' : 'Belum Terdaftar'}*`
				buffer = await getBuffer(ppimg)
				iky.sendMessage(from, buffer, image, {caption: teks, contextInfo: {"mentionedJid": [sender]}})
				var vcl = 'BEGIN:VCARD\n'
					+ 'VERSION:3.0\n' 
					+ `FN:${pushname2}\n`
					+ 'ORG:By Kurumi Chan  ;\n'
					+ `TEL;type=CELL;type=VOICE;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\n`
					+ 'END:VCARD'
					
					
					
					
					iky.sendMessage(from,{displayname: `${pushname2}`, vcard: vcl}, contact, {quoted: mek})
						await limitAdd(sender)
					break
				case 'groupinfo':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                iky.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                var toTime = j => new Date(parseInt(j) * 1000)
		        iky.sendMessage(from, `*NAME GROUP* : *${groupName}*\n*MEMBER* : *${groupMembers.length}*\n*ADMIN* : *${groupAdmins.length}*\n*NSFW : ${isNsfw ? 'Aktif' : 'Tidak Aktif'}*\n*Simsimi : ${isSimi ? 'Aktif' : 'Tidak Aktif'}*\n*Welcome : ${isWelkom ? 'Aktif' : 'Tidak Aktif'}*\n*Anime: ${isAnime ? 'Aktif' : 'Tidak Aktif'}*\n*Auto Sticker: ${isAuto ? 'Aktif' : 'Tidak Aktif'}*\n*Level: ${isLevelingOn ? 'Aktif' : 'Tidak Aktif'}*\n*DESKRIPSI* : \n${groupDesc}\n\n\n*Group dibuat pada tanggal :* \n*${moment(toTime(groupMetadata.creation)).format('DD/MM/YYYY || HH.mm')}*`, text, {quoted: mek})
                await limitAdd(sender)
break
                case 'tomp3':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                	iky.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					sreply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						
						fs.unlinkSync(ran)
						
					})
					break
					case 'nosound':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                	iky.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					sreply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -codec copy -an ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
						
						fs.unlinkSync(ran)
						
					})
					break
					case 'toptt':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                	iky.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					sreply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
						
					})
					break
					
					case 'chatlist':
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of chat number :\n'
					for (let all of chats) {
						teks += `~> @${all}\n`
					}
					teks += `Chatnya banyak bet:v`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
					
                         case 'burning':
                         if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.imgUrl}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://api.vhtear.com/burning_fire?link=${teks}&apikey=${vhtear}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                                 await limitAdd(sender)
                                          }
                                             break
                  case 'pelangi':
                                         if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                                 await limitAdd(sender)
                                          }
                                             break
                      case 'glass':
                                         if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                                 await limitAdd(sender)
                                          }
                                             break
                                             
					case 'resetuser':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    beb = body.slice(10)
						user.splice(beb)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						reply(`Sukses, User Telah Direset\nHarap *DAFTAR ULANG*`)
						break
						case 'resetalluservip':
						if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    alay = body.slice(10)
						premium.splice(alay)
						fs.writeFileSync('./src/vip.json', JSON.stringify(vip))
						teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					reply( `Berhasil Menghapus : ${premium.length} UserVip\n╰──────*「 *Kurumi* 」*────`)
						break
				case 'testime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					setTimeout( () => {
					iky.sendMessage(from, '100', text) // ur cods
					iky.sendMessage(from, '50', text) // ur cods
					iky.sendMessage(from, '60', text) // ur cods
					}, 1000) // 1000 = 1s,
					break
					
					case 'totaluser':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of user number :\n'
					for (let benn of user) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${user.length}`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": banned}})
					break
					case 'tstiker':
				case 'tsticker':
				case 'ttp':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${teks}`)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						
						if (err) return reply(mess.error.stick)
						
						iky.sendMessage(from, anu, sticker, {quoted: mek})
						fs.unlinkSync(rano)
						
					})
					break
					case 'semoji':
					try {
						
						if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser)return reply(mess.only.userB)
					var imgbb = require('imgbb-uploader')
					emoji = emojiUnicode(args[0])
					pp = `https://api.vhtear.com/emojitopng?code=${emoji}&apikey=${vhtear}`
					media = await getBuffer(pp)
					sreply(mess.wait)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('hmm.jpeg', datae, 'base64')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'hmm.jpeg')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					exec(`wget ${data.display_url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						
					})
				} catch (e) {
					console.log(`Error :`, color(e, 'red'))
					reply(`Maaf ${pushname2}, Emoji tidak terdaftar dalam database`)
					await limitAdd(sender)
				}
				break
					case 'tagall5':
				iky.updatePresence(from, Presence.composing) 
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 Kurumi Chan   〙')
					await limitAdd(sender)
					break
					case 'banall':
					members_id = []
					for (let mem of groupMembers) {
						bend = `${mem.jid.split('@')[0]}@s.whatsapp.net`
						members_id.push(mem.jid)
						
					bannned.push(bend)
						fs.writeFileSync('./src/banned2.json', JSON.stringify(bannned))
						console.log('Sukses membanned all')
						}
						sreply(`Sukses!`)
						break
						
					case 'gifttp':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				    data = await getBuffer(`https://api.vhtear.com/textxgif?text=${body.slice(6)}&apikey=${vhtear}`)
				    iky.sendMessage(from, data, video, {quoted: mek})
					break
					case 'babi':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `Yang Babi Disni adalah  @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					await limitAdd(sender)
					break
					case 'read':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					msr = []
					const mos = groupMembers
					
					const iop = mos[Math.floor(Math.random() * mos.length)]
					const opm = mos[Math.floor(Math.random() * mos.length)]
					const bran = mos[Math.floor(Math.random() * mos.length)]
					const mkl = mos[Math.floor(Math.random() * mos.length)]
					const olx = mos[Math.floor(Math.random() * mos.length)]
					const zlp = mos[Math.floor(Math.random() * mos.length)]
					teks = `Ciee yang Ngeread...\n ❏ @${iop.jid.split('@')[0]}
 ❏ @${opm.jid.split('@')[0]}
 ❏ @${bran.jid.split('@')[0]}
 ❏ @${mkl.jid.split('@')[0]}
 ❏ @${olx.jid.split('@')[0]}
 ❏ @${zlp.jid.split('@')[0]}`
					iky.sendMessage(from,teks,text, {quoted: mek, contextInfo: { mentionedJid: [teks] } } )
					break
					case 'ownergrup':
				  case 'ownergroup':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
               iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					const lso = groupOwner
					teks = `Owner Group ini adalah : @${lso.split("@s.whatsapp.net")[0]}`
          
    
    iky.sendMessage(from, teks, text, { quoted: mek, contextInfo: { mentionedJid: [lso] } } )
          
				break
					case 'jadian':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					jds = []
					const jdi = groupMembers
					const kos = groupMembers
					const aku = jdi[Math.floor(Math.random() * jdi.length)]
					const dia = kos[Math.floor(Math.random() * kos.length)]
					teks = `Ciee.. yang lagi jadian @${aku.jid.split('@')[0]} ♥️ @${dia.jid.split('@')[0]} `
					jds.push(aku.jid)
					jds.push(dia.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					
					case 'cipok':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					jda = []
						const pok = groupMembers
					const ci = pok[Math.floor(Math.random() * pok.length)]
					const kd = pok[Math.floor(Math.random() * pok.length)]
						teks = `kakak @${kd.jid.split('@')[0]} lagi cipok kan sama si @${ci.jid.split('@')[0]}`
jda.push(ci.jid)
jda.push(kd.jid)
					mentions(teks, jda, true)
					await limitAdd(sender)
				    break
				
            case 'slink':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.jpg')
					rano = getRandom('.webp')
					teks = body.slice(7).trim()
					exec(`wget ${teks} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						
						fs.unlinkSync(rano)
						
					})
					break
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await iky.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    iky.sendMessage(from, yeh, text, {quoted: mek})
			        break
			case 'fml':
                 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                hasil = data.result.fml
                reply(hasil)
                break
                case 'tag':
                if (!isOwner) return reply(mess.only.ownerB)
				case 'hidetag':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					var value = body.slice(9)
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					iky.sendMessage(from, options, text)
					break
					case 'kontag':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					var gh = body.slice(7)
					var jodhr = gh.split("|")[0];
					var jodohn = gh.split("|")[1];
var value = 
                       'BEGIN:VCARD\n'
					+ 'VERSION:3.0\n' 
					+ `FN:${jodohn}\n`
					+ 'ORG:By Kurumi Chan  ;\n'
					+ `TEL;type=CELL;type=VOICE;waid=${jodhr.split('@')[0]}:${jodhr.split('@')[0]}\n`
					+ 'END:VCARD'
					
					
					
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					
					iky.sendMessage(from,{displayname: `${jodohn}`, vcard: value}, contact, {contextInfo: { mentionedJid: mem }})
					break
					case 'koin':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = koin[Math.floor(Math.random() * (koin.length))]
					exec(`wget ${random} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					     case 'dadu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
					exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
			case 'randomnekonime':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
                    anu = await fetchJson(`https://mhankbarbar.tech/api/nekonime`)
                    buffer = await getBuffer(anu.result)
                    iky.sendMessage(from,buffer,image,{quoted: mek})
            await limitAdd(sender)
            break
            case 'afk':
            
            if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        tels = body.slice(11)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isUser) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const teg = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]}Sekarang Afk!`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        iky.sendMessage(from, teg, text, {quoted: mek})
                                        await limitAdd(sender)
                                        break
				case 'block':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					iky.blockUser (`${body.slice(8)}@c.us`, "add")
					iky.sendMessage(from, `perintah Diterima, memblokir ${body.slice(8)}@c.us`, text)
					break
				case 'unblock':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					iky.blockUser (`${body.slice(10)}@c.us`, "remove")
					iky.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(10)}@c.us`, text)
					break
					case 'ssphone':
                buffer = await getBuffer(`https://api.vhtear.com/ssweb?link=${body.slice(9)}&type=phone&apikey=${vhtear}`)
                
				iky.sendMessage(from, buffer, image, {quoted: mek})
				break   
				                case 'sspc':
                buffer = await getBuffer(`https://api.vhtear.com/ssweb?link=${body.slice(6)}&type=pc&apikey=${vhtear}`)
                
				iky.sendMessage(from, buffer, image, {quoted: mek})
				break     
                case 'play':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
		data = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${vhtear}`, {method: 'get'})
					teks = '*=================*\n'
					const play = data.result
		teks += `Lagu Ditemukan!!!\n*Judul:* ${play.title}\n*Durasi:* ${play.duration}\n*size*: ${play.size}\n*Link:* ${play.mp3}\n*MOHON JANGAN SPAM!*\n*AUDIO SEDANG DIKIRIM!*\n*=================*\n`
					thumb = await getBuffer(play.image)
					iky.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(play.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${play.title}.mp3`, quoted: mek})
	await limitAdd(sender)
					
					break
					case 'tipelist':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					reply(`*file* untuk mendownload lagu melalui file\n*mp3* untuk mendownload lagu melalui mp3\n*Contoh:* */play sayang mp3*`)
					break
					case 'play2': // EKALNIBOZZZ
                sreply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 niceinfo = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
                buffer = await getBuffer(anu.result.thumbnail)
                ligi = await getBuffer(anu.result.url_audio)
                iky.sendMessage(from, buffer, image, {quoted: mek, caption: niceinfo})
                iky.sendMessage(from, ligi, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
					case 'tabok':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/spank', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'lesby':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/lesbian', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'kuni':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/kuni', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'classic':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/classic', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'kemonomimi':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/kemonomimi', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'keta':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/keta', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'futanari':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/futanari', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'femdom':
				    try {
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/femdom`, {method: 'get'})
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'ks':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/slap`, {method: 'get'})
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'pussy':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/pussy', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'slap':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/slap', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'bodoh':
					
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/baka', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'boobs':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/boobs', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'bj':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/bj', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'avatar':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/avatar', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'hentaigif':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/hentai', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'ero':
					
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/ero', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'text':
					lei = body.slice(5)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://api.vhtear.com/slidingtext?text=${lei}&apikey=${vhtear}')
					if (buffer.error) return reply(buffer.error)

					exec(`wget ${buffer.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'teskuy':
                                        if (isBanned) return reply(mess.only.benned)
                                if (!isPremium) return reply(`khusus premium tolol`)
                reply('tunggu sekitar 5+ menit bro')
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${vhtear}`)
               if (anu.error) return reply(anu.error)
                 infomp4 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nDurasi : ${anu.result.duration}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
                buffer = await getBuffer(anu.result.thumb)
                vidio = await getBuffer(anu.result.mp4)
                iky.sendMessage(from, buffer, image, {quoted: mek, caption: infomp4})
                iky.sendMessage(from, vidio, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
                break
                
                case 'reminder':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
 
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					iky.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n╠➥  *Pesan*: ${ani}\n╠➥  *Durasi*: ${anu} detik\n╠➥  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					iky.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n╠➥  *Pesan*: ${ani}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					await limitAdd(sender)
					break    
					case 'shutdown':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
 if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					jm = `${anu}000`
					iky.sendMessage(from, `*「 SHUTDOWN 」*\n\nBOT AKAN MATI DALAM WAKTU:\n *Durasi*: ${anu} detik\n╠➥  *Owner*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					iky.sendMessage(from, `*「 SHUTDOWN 」*\n\nBot Berhasil Dimatikan\n~@${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					setTimeout( () => {
					iky.close()
					}, 5000) // 1000 = 1s,
					
					}, jm) // 1000 = 1s,
					break    
					case 'lummmmm':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
 if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(22)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					iky.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n╠➥  *Pesan*: ${ani}\n╠➥  *Durasi*: ${anu} detik\n╠➥  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
						mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
						iky.groupRemove(from, mentioned)
					iky.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n╠➥  *Pesan*: ${ani}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					break    
					case 'reminderclosegc':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (!isGroupAdmins) return reply(mess.only.admin)
					var gh = body.slice(16)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					var cons = gh.split("|")[2];
					let matem = Math.floor(anu*60)
					let jam2 = Math.floor(anu*3600)
					if (cons.includes('s')) {
					jm = `${anu}000`
					iky.sendMessage(from, `*「 REMINDER CLOSE GROUP 」*\n\nReminder Close Group diaktifkan!\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} detik\n➸ *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
						iky.groupSettingChange(from, GroupSettingChange.messageSend, true)
					iky.sendMessage(from, `*「 REMINDER CLOSE GROUP 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} detik`, text, {contextInfo: {mentionedJid: [sender]}})
					}, jm)
					} else if (cons.includes('m')) {
					iky.sendMessage(from, `*「 REMINDER CLOSE GROUP 」*\n\nReminder Close Group diaktifkan!\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} menit\n➸ *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
						iky.groupSettingChange(from, GroupSettingChange.messageSend, true)
					iky.sendMessage(from, `*「 REMINDER CLOSE GROUP 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} menit`, text, {contextInfo: {mentionedJid: [sender]}})
					}, `${matem}000`)
					} else if (cons.includes('h')) {
					iky.sendMessage(from, `*「 REMINDER CLOSE GROUP 」*\n\nReminder Close Group diaktifkan!\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} jam\n➸ *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
						iky.groupSettingChange(from, GroupSettingChange.messageSend, true)
					iky.sendMessage(from, `*「 REMINDER CLOSE GROUP 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} jam`, text, {contextInfo: {mentionedJid: [sender]}})
					}, `${jam2}000`)
					}
				
					break
					case 'reminderopengc':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (!isGroupAdmins) return reply(mess.only.admin)
					var gh = body.slice(15)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					var cons = gh.split("|")[2];
					let merk = Math.floor(anu*60)
					let jam9 = Math.floor(anu*3600)
					if (cons.includes('s')) {
					jm = `${anu}000`
					iky.sendMessage(from, `*「 REMINDER OPEN GROUP 」*\n\nReminder Open Group diaktifkan!\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} detik\n➸ *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
						iky.groupSettingChange(from, GroupSettingChange.messageSend, false)
					iky.sendMessage(from, `*「 REMINDER OPEN GROUP 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} detik`, text, {contextInfo: {mentionedJid: [sender]}})
					}, jm)
					} else if (cons.includes('m')) {
					iky.sendMessage(from, `*「 REMINDER OPEN GROUP 」*\n\nReminder Open Group diaktifkan!\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} menit\n➸ *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
						iky.groupSettingChange(from, GroupSettingChange.messageSend, false)
					iky.sendMessage(from, `*「 REMINDER OPEN GROUP 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} menit`, text, {contextInfo: {mentionedJid: [sender]}})
					}, `${merk}000`)
					} else if (cons.includes('h')) {
					iky.sendMessage(from, `*「 REMINDER OPEN GROUP 」*\n\nReminder Open Group diaktifkan!\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} jam\n➸ *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
						iky.groupSettingChange(from, GroupSettingChange.messageSend, false)
					iky.sendMessage(from, `*「 REMINDER OPEN GROUP 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n➸ *Pesan*: ${ani}\n➸ *Durasi*: ${anu} jam`, text, {contextInfo: {mentionedJid: [sender]}})
					}, `${jam9}000`)
					}
					break    
					case 'listjam':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					lokreply(`*JAM*\n\n1 Jam = 3600 Detik 10 Jam = 36000 Detik 2500 Jam = 9000000 Detik
2 Jam = 7200 Detik 20 Jam = 72000 Detik 5000 Jam = 18000000 Detik
3 Jam = 10800 Detik 30 Jam = 108000 Detik 10000 Jam = 36000000 Detik
4 Jam = 14400 Detik 40 Jam = 144000 Detik 25000 Jam = 90000000 Detik
5 Jam = 18000 Detik 50 Jam = 180000 Detik 50000 Jam = 180000000 Detik
6 Jam = 21600 Detik 100 Jam = 360000 Detik 100000 Jam = 360000000 Detik
7 Jam = 25200 Detik 250 Jam = 900000 Detik 250000 Jam = 900000000 Detik
8 Jam = 28800 Detik 500 Jam = 1800000 Detik 500000 Jam = 1800000000 Detik
9 Jam = 32400 Detik 1000 Jam = 3600000 Detik 1000000 Jam = 3600000000 Detik\n\n*MENIT*\n\n1 Menit = 60 Detik 10 Menit = 600 Detik 2500 Menit = 150000 Detik
2 Menit = 120 Detik 20 Menit = 1200 Detik 5000 Menit = 300000 Detik
3 Menit = 180 Detik 30 Menit = 1800 Detik 10000 Menit = 600000 Detik
4 Menit = 240 Detik 40 Menit = 2400 Detik 25000 Menit = 1500000 Detik
5 Menit = 300 Detik 50 Menit = 3000 Detik 50000 Menit = 3000000 Detik
6 Menit = 360 Detik 100 Menit = 6000 Detik 100000 Menit = 6000000 Detik
7 Menit = 420 Detik 250 Menit = 15000 Detik 250000 Menit = 15000000 Detik
8 Menit = 480 Detik 500 Menit = 30000 Detik 500000 Menit = 30000000 Detik
9 Menit = 540 Detik 1000 Menit = 60000 Detik 1000000 Menit = 60000000 Detik`)
break
					
					case 'pemilikasli':
                 iky.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 iky.sendMessage(from, 'itu pacar ku eh owner ku ><',MessageType.text, { quoted: mek} )
                 break
					case 'wibu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${vhtear}`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nama* ${anu.result.nama} ➸ *deskripsi* ${anu.result.deskripsi}`
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					await limitAdd(sender)
					break
				case 'premiumlist':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
					
					teks = `List premium \nTotal : ${premium.length}\n\n`
					no = 0
					for (let admon of vip) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, vip, true)
					break
					case 'blocklist': 
					teks = 'BLOCK LIST  :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'quotemaker':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					var bg = gh.split("|")[2];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark|theme\n\nEx :\n${prefix}quotemaker ini contoh|bicit|random`
					if (args.length < 1) return reply(pref)
					sreply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
				case 'galaxtext':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(12)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'citacita': 
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
            if (!isGroup) return reply(mess.only.group)
                citacita = body.slice(1)
                    .then(async (body) => {
                        const cita = body.split('\n')
                        const randomCita = cita[Math.floor(Math.random() * cita.length)]
                        iky.sendMessange(from, randomCita, 'cita.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        reply(from, 'Error!', id)
                    })
            break
					case 'jsholat':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(9)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${sholat}&apikey=BotWeA`)
					sreply(mess.wait)
					if (anu.error) return reply('[\u2757] Maaf, Daerah yang anda masukan salah!')
					jsol = `Jadwal sholat di ${sholat} hari ini adalah\n\n*➸ Imsyak :* ${anu.result.imsak} WIB\n*➸ Subuh :* ${anu.result.subuh} WIB\n*➸ Dzuhur :* ${anu.result.dzuhur} WIB\n*➸ Ashar :* ${anu.result.ashar} WIB\n*➸ Maghrib :* ${anu.result.maghrib} WIB\n*➸ Isya :* ${anu.result.isha} WIB\n*➸ Tengah Malam :* ${anu.result.midnight} WIB`
					iky.sendMessage(from, jsol, text, {quoted: mek})
					await limitAdd(sender)
					break
					case 'runtime':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
				iky.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${mekun(uptime)}*`)
				break
					case 'covid':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
                   iky.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\nmekayCases : ${data.result.mekayCases}\nmekayDeath : ${data.result.mekayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   await limitAdd(sender)
                   break
                case 'pronlogo':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					sreply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'tel':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/gamelogo?text=VEZA&apikey=${tear}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'primbonjodoh':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(14)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=${vhtear}`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=${vhtear}`)
					reply(anu.result.hasil)
					break
                case 'tahta':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					await limitAdd(sender)
					break
					case 'agung':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.search)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pin}&apikey=${vhtear}`, {method: 'get'})
					sreply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					iky.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
					
					case 'puisi':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                buffer = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${vhtear}`)
				iky.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'holoh': 
					if (args.length < 1) return reply('𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗸𝘀 𝗹𝗮𝗵!!!')
					anu = await fetchJson(`https://shiraiky-api.herokuapp.com/api/v1/holoh?kata=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
					case 'yt2mp3':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${vhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					iky.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, audio, ytmp3, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender)
					break
					case 'addsay':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isOwner) return
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, Kata ${hai} Telah Ditambahkan ke database\nTotal Say Didalam Database: ${sayrandom.length}`)
						break
						case 'modroid':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(9)}&apikey=BotWeA`)

			hepi = data.result[0] 

			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`

			buffer = await getBuffer(hepi.image)

			iky.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})

			break
			case 'apkpure':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(8)}&apikey=administrator`)

			hepi = data.result[0] 

			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`

			buffer = await getBuffer(hepi.image)

			iky.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})

			break
			
						
						case 'addvip':
						if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
					
					
				    
				
						premium.push(mek.message.extendedTextMessage.contextInfo.participant)
						fs.writeFileSync('./src/vip.json', JSON.stringify(premium))
						reply('╭────「 *PREMIUM👑* 」──*\n│+ *Nomor:* '+mek.message.extendedTextMessage.contextInfo.participant+`\n│+ *Status:* *ACTIVE*\n│+ *Since:* *${date}*\n│+ *Expired:* *${timi}*\n│ Thx for Upgrade to Premium🥰\n*╰──────「 *Kurumi* 」────`)
						break
						case 'newupdate':
                   if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = '◪ *NEW UPDATE*\n \n'
					for (let awokwkwk of det) {
						teks += `├─ ❏ *${prefix}${awokwkwk}*\n`
					}
					teks += `└─ ❏ *${prefix}bot* `
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": det}})
					break
						case 'ban':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
 
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
                   case 'saylist':
                   if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
					case 'neon2':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					sreply(mess.wait)
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					iky.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
                    case 'resetsay':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						break
                    case 'say':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    break
                    case 'addbacot':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (!isOwner) return
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    huu = body.slice(9)
						bacotrandom.push(huu)
						fs.writeFileSync('./src/bacot.json', JSON.stringify(bacotrandom))
						reply(`Sukses, Kata ${huu} Telah Ditambahkan ke database`)
						break
						case 'addfitur':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (!isOwner) return
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    huu = body.slice(9)
						det.push(huu)
						fs.writeFileSync('./src/det.json', JSON.stringify(det))
						reply(`Berhasil menambahkan ${huu} ke fitur terbaru!`)
						break
                   case 'bacotlist':
                   if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let hehee of bacotrandom) {
						teks += `╠➥ ${hehee}\n`
					}
					teks += `Total : ${bacotrandom.length}`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": bacotrandom}})
					break
					case 'stickerlist':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'All Sticker\n'
					for (let hehee of listrandom) {
						teks += `╠➥ ${hehee}\n`
					}
					teks += `Total : ${listrandom.length}`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": bacotrandom}})
					break
                    case 'resetbacot':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						bacotrandom.splice(hai)
						fs.writeFileSync('./src/bacot.json', JSON.stringify(bacotrandom))
						reply(`Sukses, database bacot telah direset`)
						break
                    case 'bacot':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = bacotrandom[Math.floor(Math.random() * (bacotrandom.length))]
                    reply(hasil)
                    break
				case 'testing':
					var gh = body.slice(5)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					sreply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'snow':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(6)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					sreply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'b':
					case 'ban':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
 
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`khusus premium`)
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
		
					bnnd = body.slice(8)
					banned.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					if (!isOwner)return reply(`Nomor wa.me/${bnnd} telah di unban!`)
					bnnd = mek.message.extendedTextMessage.contextInfo.participant
					banned.splice(`${bnnd}`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					if (isOwner)return reply(`Nomor ${bnnd} telah di unban!`)
					break
					case 'delfitur':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isOwner)return reply(mess.only.ownerB)
					bod = body.slice(9)
					det.splice(`${bod}`, 1)
					fs.writeFileSync('./src/det.json', JSON.stringify(det))
					sreply(`fitur ${bod} berhasil dihapus`)
					break
					case 'dellvip':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					premium.splice(`${bnnd}`, 1)
					fs.writeFileSync('./src/vip.json', JSON.stringify(premium))
					swreply(`Nomor wa.me/${bnnd} telah di hapus Sebagai Premium!`)
					break
				case 'quran':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					iky.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender)
					break
					case 'getnomor':
					body = body.slice(9)
					swreply(`${body}`)
					swreply(`@s.whatsapp.net`)
					break
				case 'marvelogo':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (!isPublic) return reply(mess.only.public)
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var gh = body.slice(10)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					sreply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'lovemake':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
					case 'goldplaybutton':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					playbutton = body.slice(10)
					if (playbutton.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/gplaybutton?text=${playbutton}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+playbutton})
					break
				case 'thunder':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					thun = body.slice(9)
					if (thun.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
					case 'mlogo':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					mlbb = body.slice(6)
					if (mlbb.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=fanny&text=${mlbb}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+mlbb})
					await limitAdd(sender)
					break
					case 'dilan':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/bacotandilan?apikey=itsmeiky633` , {method: 'get'})
					reply(anu.result)
await limitAdd(sender)
					break
					case 'animequotes':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/quotesnime/random`)
					reply(anu)
					await limitAdd(sender)

					break
					case 'katadoi':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
await limitAdd(sender)
					break
					case 'katailham':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/bacotanilham?apikey=itsmeiky633`, {method: 'get'})

					reply(anu.result)
await limitAdd(sender)
					break
					case 'pantun':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://api.vhtear.com/random_pantun&apikey=${vhtear}`, {method: 'get'})

					reply(anu.result.pantun)
await limitAdd(sender)
					break
					case 'jadwaltv':
tv = body.slice(9),
data = fetchJson('https://api.zeks.xyz/api/jadwaltv?channel=${tv}&apikey=apivinz')
l = `${data.result}`
reply(l)
break
					case 'fetch':
    var util = require('util')
    teks = args.join(' ')
    res = await fetch(teks)
  var txt = await res.text()
  try {
    txt = util.format(JSON.parse(txt))
  } catch (e) {
    txt = txt
  } finally {
    reply(txt.slice(0, 65536))
  }
    break
break
					case 'quotesid':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://api.vhtear.com/quoteid&apikey=${vhtear}`, {method: 'get'})

					reply(anu.result.kata)
await limitAdd(sender)
					break
					case 'katastory':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://api.itsmeikyxsec404.xyz/katacinta?apikey=itsmeiky633`, {method: 'get'})

					reply(anu.result)
await limitAdd(sender)
					break
					case 'fanytext':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					tes = body.slice(10)

					anu = await fetchJson(`http://xptnewapi21.6te.net/fancytext.php?apikey=xptn1&text=${tes}`, {method: 'get'})

					reply(anu.result)

					break
                case 'stiltext':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buff = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=${vhtear}`)
                      sreply(mess.wait)
                      iky.sendMessage(from, buff, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                      case 'gdg':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!isPublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://rfilesss109.000webhostapp.com/truth.php?apikey=xptn1` , {method: 'get'})
					
buffer = await getBuffer('anu.img')
iky.sendMessage(from, buffer, image, { quoted: mek,})
					break
					case 'nangis':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'bei':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'blowjob':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
 if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'tium':
 if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break 
           				case 'cium':
           if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'peyuk':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                      case 'qrcode':
                      if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                      if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                      if (!isPublic) return reply(mess.only.public)
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return iky.sendMessage(from, '??𝐚𝐬𝐮??𝐚𝐧 𝐓𝐞𝐤𝐬/??𝐫𝐥 𝐘𝐚𝐧𝐠 𝐈𝐧𝐠𝐢𝐧 𝐃𝐢 𝐁𝐮𝐚𝐭 𝐐𝐑', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					iky.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'testing':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					sreply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'testing2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					sreply(mess.wait)
					party = await getBuffer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=${vhtear}`)
					iky.sendMessage(from, party, image, {quoted: mek})
					break
                case 'ninjalogo':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      sreply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      iky.sendMessage(from, buff, image, {quoted: mek})
                      break
                      
                case 'glitch':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(8)
					var tels3 = gh.split("|")[0];
					var tels4 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'pubg':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(5)
					var tels5 = gh.split("|")[0];
					var tels6 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${tels5}&text2=${tels6}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case '8bit':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(5)
					var tels8 = gh.split("|")[0];
					var tels7 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${tels8}&text2=${tels7}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'retro':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(5)
					var tels10 = gh.split("|")[0];
					var tels11 = gh.split("|")[1];
					var tels12 = gh.split("|")[2];
					if (args.length < 1) return reply(mess.blank)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/retro?text1=${tels10}&text2=${tels11}&text3=${tels12}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'infos':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(8)
					var ld = gh.split("|")[0];
					var hel = gh.split("|")[1];
					var gs = gh.split("|")[2];
					if (args.length < 1) return reply(mess.blank)
					sreply(mess.wait)
					anu = await fetchJson(`https://ephoto360.com/${ld}-${hel}-${hel}-${gs}-768.html`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'party':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
				case 'rtext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('Teksnya kepanjangan, maksimal 10 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					sreply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'firetext':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					iky.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'wolflogo':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      sreply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}&apikey=BotWea`, {method: 'get'})
                      buffer = await getBuffer(anu.result)
                      iky.sendMessage(from, buffer, image, {quoted: mek})
                      await limitAdd(sender)
                      break
                case 'lionlogo':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      sreply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buffer = await getBuffer(anu.result)
                      iky.sendMessage(from, buffer, image, {quoted: mek})
                      await limitAdd(sender)
                      break
				case 'leave':
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    if (!isGroup) return reply(mess.only.group)
                    if (!isOwner) return
                     setTimeout( () => {
					iky.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					iky.sendMessage(from, 'Sayonara👋', text) // ur cods
					}, 0)
                     break
                     
                     if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					case 'nhentai':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (isBanned) return reply(mess.only.benned)  
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (args.length < 1) return reply('KODE? NANI KORE')
					lokreply(`Sedang Dalam Proses Download Haral Sabar[!]`)
					
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${body.slice(9)}&apikey=${vhtear}`)
					if (anu.error) return reply(anu.error)
					const hsg = anu.result
					bufferjj = await getBuffer(anu.result.pdf_file)
					iky.sendMessage(from, bufferjj, document, {mimetype: 'application/pdf', filename: `${hsg.title}.pdf`, quoted: mek})
				await limitAdd(sender)
					break
					case 'ner':
					if (!isOwner) return
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				case 'watercolor':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isPublic) return reply(mess.only.public)
					var gh = body.slice(12)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					sreply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=Mantanxptn`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'facebook':
					case 'fb':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isPublic) return reply(mess.only.public)
               
               data = await fetchJson(`https://mhankbarbars.herokuapp.com/api/epbe?url=${body.slice(4)}&apiKey=${apiKey}`)
               if (data.error) return reply(data.error)
               buffer = await getBuffer(data.result)
               iky.sendMessage(from, buffer, video, {quoted: mek, caption: `judul : ${data.title}\nsize : ${data.filesize}\ndiupload : ${data.published}`})
               break
					case 'img2url':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
           if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isPublic) return reply(mess.only.public)
             var imgbb = require('imgbb-uploader')
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await iky.downloadAndSaveMediaMessage(encmedia)
            
            imgbb('2685f71965fa6c56702e9e70644ff0ad', media)
                .then(data => {
                    var caps = `*「 _IMAGE TO URL_ 」*\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                    iky.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                    
                })
                .catch(err => {
                    throw err
                })
            break
            
	            
				case 'setname':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					ppUrl = await iky.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
                iky.groupUpdateSubject(from, `${body.slice(9)}`)
                iky.sendMessage(from, buffer, image, {quoted: mek, caption: `Succes, Ganti Nama Grup\nYang Sebelumnya *${groupName}*`})
                break
                case 'setdesc':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				ppUrl = await iky.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
                iky.groupUpdateDescription(from, `${body.slice(9)}`)
                iky.sendMessage(from, buffer, image, {quoted: mek, caption: `Succes, Ganti Deskripsi Grup\nYang Sebelumnya *${groupDesc}*`})
                break
                case 'banlist':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of ban number :\n'
					for (let benn of banned) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${bannned.length}`
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": banned}})
					break
				case 'tts':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				   iky.updatePresence(from, Presence.recording)
				    
				   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				   if (args.length < 1) return iky.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return iky.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							iky.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync
						})
					})
					break
	            case 'setpp':
	if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
	if (!isPublic) return reply(mess.only.public)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                  
                       media = await iky.downloadAndSaveMediaMessage(mek)
                         await iky.updateProfilePicture (from, media)
                        reply('𝗦??𝗸𝘀𝗲?? 𝗺𝗲𝗻𝗴𝗴𝗮𝗻𝘁𝗶 𝗶𝗰𝗼𝗻 𝗚𝗿𝘂𝗽')					
                    case 'te':
                                       const asu = body.slice(4)
                                       if (argz.lenght >= 1) return iky.sendText(from, asu)
                                       break
                case 'apakah':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					
					case 'heroml':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					lord = body.slice(7)
					res = await fetchJson(`https://api.vhtear.com/herodetail?query=${lord}&apikey=${vhtear}`, {method: 'get'})
						buffer = await getBuffer(res.result.pictHero)
					iky.sendMessage(from,buffer,image, { quoted: mek, caption: ` *Nama:* ${res.result.title}\n*Kata:* ${res.result.quotes}\n*Info:* ${res.result.info}\n*Atribut:* ${res.result.attributes}`})
					await limitAdd(sender)
					break
					
					case 'farming':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
		 
					

      if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)   
    if (!isGroup) return reply(mess.only.group)
    limitAdd(sender)
    const xpl = Math.floor(Math.random() * 1000) + 929
         addLevelingXp(sender, xpl)
        if (!isOwner) return reply(`selamat anda mendapatkan ${xpl} XP`)
         
         
         const olm = Math.floor(Math.random() * 500) + 999999999999999
         addLevelingXp(sender, olm)
     if (isOwner) return    reply(`selamat owner mendapatkan ${olm} XP`)
     
       break
					case 'gantengcek':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'jelekcek':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					jelek = body.slice(1)
					const ped =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const ro = ped[Math.floor(Math.random() * ped.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+jelek+'*\n\nJawaban : '+ ro+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'cantikcek':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'watak':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'hobby':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'bisakah':
				await limitAdd(sender)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				await limitAdd(sender)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					iky.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'jadwaltv':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
               iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 data = await fetchJson(`https://mhankbarbars.herokuapp.com/api/jdtv?ch=${body.slice(10)}&apiKey=${apiKey}`)
				if (data.error) return reply(data.error)
				reply(data.result)
				break
					case 'hewan':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					iky.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'toxic':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					kapankah = body.slice(1)
					const toxic =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku enmek kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ole = toxic[Math.floor(Math.random() * toxic.length)]
					iky.sendMessage(from, ole, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'siapa':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					kapankah = body.slice(1)
					const siapa =['anjing','babi','anak anjing','nub','mukanya kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','setan','hewan','nenek','pacarku><','anak babi','anak anjg','cowo buaya','anak dajjal','bapakku','anjing ngajak gelud','hantu','mamakku','bocil om','bocah kontol','kucing']
					const ope = siapa[Math.floor(Math.random() * siapa.length)]
					iky.sendMessage(from, ope, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'truth':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					iky.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucmek to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					mek = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					iky.sendMessage(from, mek, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					
					await limitAdd(sender)
					break		
case 'kus':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					const kus =(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)
                    const pel = kus[Math.floor(Math.random() * kus.length)]
					mek = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					iky.sendMessage(from, mek, image, { quoted: mek, caption: '*Dare*\n\n'+ pel })
					break				
                case 'assalamualaikum':
               iky.reply(from, `Waalaikumsalam ${pushname2}:)`)
                break
                
                case 'speed':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                const spa = speed() 
                
						costum( `_*Sedang Menguji Kecepatan*_`,text,tescuk,`*Sabar*`)
						
						setTimeout( () => {
                costum(`_*${spa.toFixed(4)}ms*_`,text,tescuk,`_SPEED NYA_\n*${spa.toFixed(4)}ms*`)
                }, 10000) // 1000 = 1s,
                await limitAdd(sender)
                break
                case 'ping':
                case 'p':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
           
                    const timestamp = speed();
            
                    const latensi = speed() - timestamp
                    iky.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				qute = await getBuffer(`https://i.ibb.co/K2PX5kq/e3e8017c1542.jpg`)
				 const tus = 'termux-battery-status'
	               exec(tus, (err, stdout) => {
		           if(err) return iky.sendMessage(from, "Command Salah", text, { quoted: mek })
		           if (stdout) {
			       
		           
				
                    iky.sendMessage(from,qute,image,{caption: `*NAME:* *KURUMI CHAN (Rizky Fadilah)*\n\nSpeed: *${latensi.toFixed(4)} _Second_*\nDevice: *Vivo Y12*\nRAM: *3/64*\nData: *Telkomsel/Tri*\nJaringan: *4G*\nStatus: *Belum Di Charger*\nBot Type: *Termux/Handphone*\n\n*Bot Telah Aktif Selama*\n*${mekun(uptime)}*\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗨𝗦𝗘𝗥 」*\n*User Bot:* *${user.length}*\n*Banned User:* *${ban.length}*\n*Blocked User:* *${blocked.length}*\n*Vip User:* *${premium.length}*\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 」*\n ${stdout}`,thumbnail: fs.readFileSync('./hentai.jpg')})
                 }
	           })
   break
                case 'tagme':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tagged!`,
					contextInfo: { mentionedJid: [nom] }
					}
					iky.sendMessage(from, tag, text, {quoted: mek})
					break
					case 'tag':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					var nom = `${body.slice(4)}@s.whatsapp.net`
					const me = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tagged!`,
					contextInfo: { mentionedJid: [nom] }
					}
					iky.sendMessage(from, me, text, {quoted: mek})
					break
                case 'donasi':
                
				case 'donate':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					iky.sendMessage(from, 'Mau donasi ya om?✨\n\n اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ\n_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_\n\n*Pulsa Telkomsel :* _0853-6493-7006_\n*Dana :* _0853-6493-7006_\n*trakteer :* _https://trakteer.id/Kurumi Chan  \n*Gopay :* _belum tersedia_', text, { quoted: mek })
					break
					case 'p':
				case 'asli':
					iky.sendMessage(from, 'rizkyfadilah', text, { quoted: mek })
					break
				case 'bot':
				iky.sendMessage(from, 'Ya ada apa?', text, { quoted: mek })
				let komt = fs.readFileSync('./stik/ hm.webp')
                    iky.sendMessage(from,komt, sticker,  { quoted: mek })
                    break
				    
				
					break
                case 'tes':
                   iky.sendMessage(from, 'ok', text, {quoted: mek})
                   break
                case 'gug':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'slink':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.jpg')
					rano = getRandom('.webp')
					teks = body.slice(7).trim()
					exec(`wget ${teks} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						
						fs.unlinkSync(rano)
					})
					break
                case 'lirik':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender)
					break
                case 'bugreport':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const pesan = body.slice(10)
                      if (pesan.length > 300) return iky.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    iky.sendMessage('6282387804410@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                    case 'request':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const cfrr = body.slice(9)
                      if (cfrr.length > 300) return iky.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    iky.sendMessage('6282387804410@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
			 case 'request':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const pesann = body.slice(8)
                      if (pesan.length > 300) return iky.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks2 = `*[REQUEST]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    iky.sendMessage('6282387804410@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Request telah di laporkan ke owner BOT, request  yang dapat membebani owner tidak akan ditanggapi.')
                    break
				case 'meme':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					meme = await kagApi.memes()
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break
				case 'memeindo':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
					case 'addpremium':
					iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Perintah Diterima menambah User Premium : ${premium}`)
					break
					case 'setwelcome': 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					welpop = body.slice(12)
					reply(`Welcome Diubah Menjadi ${welpop}`)
					break
					case 'kisahnabi':
					sreply(mess.wait)
					anu = await fetchJson(`https://mieayam-kering.herokuapp.com/api/nabi?q=${body.slice(11)}&apikey=freeKeY`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.img)
					nabi = ` ➸ *Nabi* ${anu.result.nama} \n➸ *Lahir* ${anu.result.lahir_pada}\n➸ *Umur beliau* ${anu.result.umur}\n➸ *Tempat* ${anu.result.tempat}\n➸ *Kisah Beliau* ${anu.result.kisah}`
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: nabi})
					break
				case 'ssweb':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					tipelist = ['desktop','tablet','mobile']
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					sreply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'bungasakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/walpaper?query=Bunga%20sakura&apikey=${vhtear}`)
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
			    case 'nekonime':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai nekonime'})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case `pp`:
                       reply(from, `PREFIX YANG SAAT INI DIGUNAKAN *「* ${prefix} *」*`)
                   break
					case 'kiss':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/kiss', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break	
					case 'nangis':

                                        if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vs>`)
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                buffer = fs.readFileSync(rano)
                                                iky.sendMessage(from, buffer, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        break
                                        case 'firestik':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                                        bro = body.slice(8)
					sreply(mess.wait)
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu = await fetchJson('http://xptnewapi21.6te.net/Coba.php?apikey=xptn&tulis=${bro}', {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vs>`)
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                buffer = fs.readFileSync(rano)
                                                iky.sendMessage(from, buffer, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                                await limitAdd(sender)
                                        break
					case 'uy':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					
					case 'dxd':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'pps':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isNsfw) return reply('❌ *MODE NSFW BELUM DIAKTIFKAN* ❌')
						res = await fetchJson(`https://nhder.herokuapp.com/download/nhentai/'+code+'/zip`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'uyt':

				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu2`, {method: 'get'})

						buffer = await getBuffer(res.image)

						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))
						
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})

						reply('❌ *ERROR* ❌')

					}

					break
					case 'exe':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
	              iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return iky.sendMessage(from, "Command Salah", text, { quoted: mek })
		           if (stdout) {
			       iky.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                  case 'cpu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
	              iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
	             
	               const cud = `neofetch --stdout`
	               exec(cud, (err, stdout) => {
		           if(err) return iky.sendMessage(from, "Command Salah", text, { quoted: mek })
		           if (stdout) {
			       iky.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                  case 'turnoff':
	              iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
	              if (!isOwner) return reply(mess.only.ownerB)
	               const off = 'npm start'
	               exec(off, (err, stdout) => {
		           if(err) return iky.sendMessage(from, "Command Salah", text, { quoted: mek })
		           if (stdout) {
			       iky.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                  case 'trendtwit':
                  if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'l4':
					if (!isOwner) return
					case 'loli4':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${vhtear}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'hug'})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						
						reply('❌ *ERROR* ❌')
						}
						break
					
					case 'waifu2':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                        if (!isPublic) return reply(mess.only.public)
                                        sreply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        waifu = `*${anu.desc}`
                                        iky.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
                                        break
                                        
					case 'husbu':

				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)

						buffer = await getBuffer(res.image)

						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
await limitAdd(sender)
					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
					case 'ry':

				    try {

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)

						buffer = await getBuffer(res.image)

						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
					case 'husbu2':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.image)
                sendImage(hasil, mek, randKey.teks)
                await limitAdd(sender)
				break
					case 'kpop':

				    try {

						anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`)

						buffer = await getBuffer(anu.result)

						iky.sendMessage(from, buffer, image, {quoted: mek, caption: '🤷'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
					case '1cak':

				    try {

						anu = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`)

						buffer = await getBuffer(anu.image)

						iky.sendMessage(from, buffer, image, {quoted: mek, caption: `${anu.judul}\n${anu.url}`})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
					case 'lo':
					if (!isOwner) return
				case 'loli':
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        sreply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        iky.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                                        case 'neko':
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        sreply(mess.wait)
                                        anu = await getBuffer(`http://api.jojo-bot.xyz/api/nekonime?apikey=CwQUZEitq686HbP8`)
                                 
                                        iky.sendMessage(from, anu, image, {quoted: mek})
                                        break
                                        case 'renungan':
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        sreply(mess.wait)
                                    anu = await getBuffer(`http://api.jojo-bot.xyz/api/renungan?apikey=CwQUZEitq686HbP8`)
                                 z = `${anu.judul}\n${anu.pesan}\n${anu.isi}`
                                        iky.sendMessage(from, z, text, {quoted: mek})
                                        break
			    case 'imagepest':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						anu = await fetchJson(`https://api.i-tech.id/anim/baguette?key=oc2nvC-F4HS1e-OteAXu-5QkGag-J8WC94`, {method: 'get'})
						buffer = await getBuffer(anu.result.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						iky.sendMessage(from, errorurl, image, {quoted: mek, caption: 'Error Kak!!'})
					}
					break
					case 'searchstik':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${body.slice(12)}&apikey=${vhtear}`, {method: 'get'})
					teks = '--------------------------\n'
					for (let i of anu.result.data) {
						teks += `*Url* : ${i}\n--------------------------\n`
					}
					reply(teks.trim())
					break
					case 'pe':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						anu = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
						buffer = await getBuffer(anu.result.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'sideoppai':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
						buffer = await getBuffer(`https://meme-api.herokuapp.com/gimme/sideoppai`)

						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai Lolimu'})

					break
					case 'waifu3':
						buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/waifu2`)

						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai Lolimu'})

					break
					case 'jd':
				    try {
					if (!isPublic) return reply(mess.only.public)
						anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`, {method: 'get'})
						buffer = await getBuffer(anu.result.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
			    
					case 'wf2':
					if (!isOwner) return
			    case 'waifu2':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					sreply(mess.wait)
					buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/waifu`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'waifu'})
					break
					case 'agungwaifu':
					if (!isPublic) return reply(mess.only.public)
					sreply(mess.wait)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.image)
					waifu = `*${anu.desc}`
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
					break
				case 'imoji':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					sreply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'wibu':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${vhtear}`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nama* ${anu.result.nama} ➸ *deskripsi* ${anu.result.deskripsi}`
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					await limitAdd(sender)
					break
				case 'randomcat':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${vhtear}`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.url)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                    case 'nim':
                    if (!isOwner) return
			    case 'randomanime':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'randomhentai':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                                        gatauda = body.slice(6)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        sreply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        iky.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
				case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
			    case 'nsfwblowjob':
				    try {
					await limitAdd(sender)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'yuri':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/yuri`, {method: 'get'})
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'randomwaifu':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://naufalhoster.xyz/anime/randomwaifu?apikey=Arya.Rey.RFK.Team`, {method: 'get'})
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'gasm':
				    try {
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/gasm`, {method: 'get'})
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'neko':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/neko`, {method: 'get'})
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'milf':
				    try {
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/ero`, {method: 'get'})
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nekojav':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://api.vhtear.com/nekohentai&apikey=${vhtear}`, {method: 'get'})
						buffer = await getBuffer(res.url)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'nsfwneko':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nenen':
				    try {
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/boobs`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, res, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'nsfwtrap':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nekopou':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					
					case 'animerandom':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'teus':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`http://inyourdream.herokuapp.com/graffity?kata=' + graffity`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					
				case 'hilih':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
				case 'ytmp3':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

				if (!isPublic) return reply(mess.only.public)

				

                sreply(mess.wait)

					if (args.length < 1) return reply('Urlnya mana um?')

					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)

					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/yta?url=${args[0]}&apikey=BotWeA`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					buffer = await getBuffer(anu.getVideo)

					iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
await limitAdd(sender)
					break
			    case 'bucin':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://api.arugaz.my.id/api/howbucins`, {method: 'get'})
					reply(anu.desc)
					await limitAdd(sender)
					break
					case 'akugay':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
					reply(anu.desc)
					break
					case 'wa.me':
				  case 'wame':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  iky.updatePresence(from, Presence.composing) 
      if (!isUser) return reply(mess.only.userB)
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    iky.sendMessage(from, options, text, { quoted: mek } )
    await limitAdd(sender)
				break
		        case 'gay':
		if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		if (!isPublic) return reply(mess.only.public)
		if (args.length < 1) return reply('tag temanmu!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					iky.sendMessage(from, 'Seberapa gay lu: *'+rate+'*\n\nJawaban : '+ kl+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					break	
					case 'blood':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					tels = body.slice(8)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${tels}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break	
				case 'psp':
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					tels = body.slice(8)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break		
				case 'agung':
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					tels = body.slice(8)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo2&text1=${gl1}&text2=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'psong':
					if (!isOwner) return reply ('beb kamu bukan owner')
					case 'pesankosong':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
				iky.sendMessage(from, 'ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ' , text, {quoted: mek})
				case 'cerpen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api.arugaz.my.id/api/cerpen`, {method: 'get'})
					reply(anu.result)
					break
					case 'cersex':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cersex2`)
					reply(anu.result)
					break
					case 'alpa':
				if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(5)
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)
					reply(anu.dare)
					break
				case 'quotes':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				iky.updatePresence(from, Presence.composing) 
 
				data = await fetchJson(`https://b.apimau.ga/quotes`)
				ez = `*╠➥  Author :* ${data.author}\n*╠➥  Quotes :* ${data.quotes}`
				reply(ez)
				break
				case 'quotesanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				iky.updatePresence(from, Presence.composing) 
 
				data = await fetchJson(`https://b.apimau.ga/quotesnime/random`)
				ez = `*╠➥  anime :* ${data.anime}\n*╠➥  Quotes :* ${data.quote}\n*╠➥  Karakter :* ${data.character}`
				reply(ez)
				break
				case 'randomnick':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				iky.updatePresence(from, Presence.composing) 
 
				data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
				ez = `*${data.result}*`
				reply(ez)
				break
				case 'darkjokes':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				iky.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                iky.sendMessage(hasil, image, mek, '\`\`\`DARKJOKES\`\`\`')
                await limitAdd(sender)
				break
				case 'asupan3':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				iky.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/ptl.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey)
                iky.sendMessage(from,hasil, video,{caption: `segar bro`})
                await limitAdd(sender)
				break
				case 'randombokep':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				iky.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/18+.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hsil = await getBuffer(randKey.result.image)
                cap = await getBuffer(randKey.result.teks)
                iky.sendMessage(hsil, image, {quoted: mek,caption: cap})
                break
				case 'asupan':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				iky.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
 
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
                await limitAdd(sender)
				break
				case 'amv':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				iky.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
 reply(`sedang diproses 2+ menit, btw yang buat rizky/owner🗿`)
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/amv.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
				case 'kdu':
				iky.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.teks.image)
                iky.sendMessage(hasil, image, mek, '\`\`\`Husbu\`\`\`')
				break
				case 'audio':
				iky.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 ayam = fs.readFileSync('./src/music.js');
                 jsonData = JSON.parse(ayam);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                iky.sendMessage(from, ayam, audio, {mimetype: 'audio/mp3', filename: `.mp3`, quoted: mek})
				break
					case 'kata':
					if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.quotes)
					break		
					case 'kucingggg':
					if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/pantun`, {method: 'get'})
					reply(anu.pantun)
					break		
					case 'jokerlogo':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧??𝐚 𝐤𝐚𝐤')
					tels = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'crossfire':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					izin = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=crossfire&text=${izin}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'logonaruto':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬??𝐲𝐚 𝐤𝐚𝐤')
					gis = body.slice(11)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${gis}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'harry':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧??𝐚 𝐤𝐚𝐤')
					gwe = body.slice(6)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${gwe}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'avengers':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(10)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=aruga&text2=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'summer':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(8)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'sandwrite':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(11)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break 
					case 'jav':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					sreply(mess.wait)
					kou = await getBuffer(`https://api.vhtear.com/nekohentai&apikey=${vhtear}`)
						iky.sendMessage(from, kou, image, {quoted: mek, caption: 'Error Kak!!'})
					break 
					case 'metaldark':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(10)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'overwatch':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					wometal = body.slice(10)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=overwatch&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'warface':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					wometal = body.slice(8)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=warface&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'dropwater':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(11)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'grenneon':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(10)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'neontext':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(10)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break 
					case 'gell':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(6)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'sumery':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(7)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'blood':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(7)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'firework':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					arugazzz = body.slice(9)
					sreply(mess.wait)
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					iky.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'lava':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(6)
					sreply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					iky.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'nime':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					naruto = body.slice(5)
					data = await fetchJson(`https://api.vhtear.com/neonime_search?query=${naruto}&apikey=${vhtear}`, {method: 'get'})
					teks = '××××××××××××××××\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*Link* : ${i.link}\n\n*Thumbnail* : ${i.image}\n*Description* : ${i.desk}\n××××××××××××××××\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
				break
				case 'quotesanim':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					naruto = body.slice(11)
					 anu =  await fetchJson(`https://b.apimau.ga/quotesnime?q=${naruto}`, {method: 'get'})
					
					
						ez = `*Anime* : ${anu.data.anime}\n*Karakter* : ${anu.data.character}\n\n*Quotes* : ${anu.data.quote}`
					
					reply(ez)
				break
				case 'hitung':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					naruto = body.slice(8)
					 anu =  await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${naruto}`, {method: 'get'})
					
					
						ez = `*Text* : ${body.slice(8)}\n*Jumlah* : ${anu.result.jumlah}`
					
					reply(ez)
				break
					case 'smoke':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					vb = body.slice(6)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/smoketext?text=${vb}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'fire':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					gue = body.slice(5)
					if (gue.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/fire_maker?text=${gue}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+gue})
					await limitAdd(sender)
					break
					case 'tesimage':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					sate = body.slice(9)
					if (sate.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://rest.farzain.com/api/gambarg.php?id=${sate}&apikey=iky`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+sate})
					break
					case 'epep':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					tawa = body.slice(5)
					if (tawa.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${tawa}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'ep ep buriq,text: '+tawa})
					await limitAdd(sender)
					break
					case 'epep':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					ajs = body.slice(5)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/logoff?hero=alok&text=${ajs}&apikey=${vhtear}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'romance':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					rmnc = body.slice(10)
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${rmnc}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break	
					case 'ranime':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(8)
					sreply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'spamsms':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
          if (!isPremium) return reply(mess.only.premi)
          reply('Wait..')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('82387804410')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       await limitAdd(sender)
                                       break
					case 'neon':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					duadua = body.slice(7)
					sreply(mess.wait)
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					iky.sendMessage(from, duaa, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'bpink':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              if (!isUser) return reply(mess.only.userB)
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}Kurumi Chan  `)
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                iky.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                await limitAdd(sender)
                break
					case 'infonomor':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 if (!isUser) return reply(mess.only.userB)
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                break
					
				case 'cerpen':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cerpen`, {method: 'get'})
					reply(anu.result)
					break
				case 'chord':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('teks nya mana om')
					tels = body.slice(7)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
				case 'ramalhp':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('teks nya mana om')
					kj = body.slice(12)
					anu = await fetchJson(`https://api.vhtear.com/nomerhoki?no=${kj}&apikey=${vhtear}`)
					reply(anu.result.hasil)
					break
				case 'textscreen':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('teks nya mana om')
					tels = body.slice(9)
					anu = await fetchJson(`https://api.vhtear.com/textscreen?query=${tels}&apikey=${vhtear}`, {method: 'get'})
					reply(anu.result.text)
					await limitAdd(sender)
					break
			    case 'joox':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!isPremium) return reply(mess.only.premi)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                iky.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                iky.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
                
					case 'tampar':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'beritahoax':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					iky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
               case 'infogempa':
               if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
               if (!isPublic) return reply(mess.only.public)
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.map)
                   reply = ` *potensi* \n ${anu.potensi} *lokasi* \n${anu.lokasi} *magnitude* \n${anu.magnitude} *koordinat* \n${anu.koordinat} *kedalaman* \n${anu.kedalaman}`
                   iky.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
                   break
                   case 'hentai':
				    try {
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'NIH ANJIM'})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'cgc':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isOwner) return
					var gc = body.slice(5)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					iky.groupCreate (`${gc}`, [`${sender}`, `${mentioned}`])
					console.log ("created group with id: " + group.Id)
					break
					case 'shota':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Shota!!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'randomanime2':
				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
						res = await fetchJson(`https:/tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai nekonime'})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iky.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'randomshota':

				    try {
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)

						buffer = await getBuffer(res.image)

						iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'shotaa!!!'})
await limitAdd(sender)
					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
                                        case 'akbargay':
                                    try {
                                    	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                                    	if (!isPublic) return reply(mess.only.public)
                                                if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
                                                res = await fetchJson(`https://api.vhtear.com/randomhentai?apikey=${vhtear}`)
                                                buffer = await getBuffer(res.result)
                                                iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih gan'})
                                        } catch (e) {
                                                console.log(`Error :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
                                        break
                case 'infogithub':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                   teks = body.slice(5)
                   anu = await fetchJson(`http://melodicxt.herokuapp.com/api/githubprofile?user=${teks}&apikey=administrator`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buffer = await getBuffer(anu.avatar_url)
                   hasil = ` *username* \n ${anu.followers} *following* \n${anu.following} *bio* \n${anu.bio} *public_repos* \n${anu.public_repos} *created_at* \n${anu.created_at} *updated_at* \n${anu.updated_at}`
                   iky.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                   break
                case 'cuaca':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await fetchJson(`https://rest.farzain.com/api/cuaca.php?id=${body.slice(7)}&apikey=${apikey}`)
                if (data.error) return reply(data.error)
                hasil = `╠➥ Tempat : ${data.respon.tempat}\n╠➥ angin : ${data.respon.angin}\n╠➥ cuaca : ${data.respon.cuaca}\n╠➥ desk : ${data.respon.desk}\n╠➥ kelembapan : ${data.respon.kelembapan}\n╠➥ suhu : ${data.respon.suhu}\n╠➥ udara : ${data.respon.udara}`
                
                reply(hasil)
                await limitAdd(sender)
                break
                case 'jadwaltvnow':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
               iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 data = await fetchJson('https://docs-jojo.herokuapp.com/api/jadwaltvnow')
                hasil = `Jam : ${data.result.jam}\n\n${data.result.jadwalTV}`
                reply (hasil)
                await limitAdd(sender)
                break
                case 'getstatus':
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
					status = await iky.getStatus (mek.participant) // leave empty to get your own status
                    console.log("status: " + status)
                    break
                    case 'semoji':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('emojinya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = emojiStrip(body.slice(8))
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=${teks}`, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
					case 'setppbot':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(enmedia)
					await iky.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
                case 'tebakgambar':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (!isPublic) return reply(mess.only.public)
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${vhtear}`, {method: 'get'})
					buffer = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					iky.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, buffer, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					break
                case 'caklontong':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vhtear}`, {method: 'get'})
					setTimeout( () => {
					iky.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					break
				case 'family100':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${vhtear}`, {method: 'get'})
					setTimeout( () => {
					iky.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					break
				case 'game':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (!isPublic) return reply(mess.only.public)
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					iky.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					iky.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'brainly':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
await limitAdd(sender)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					iky.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
					
                        console.log(res)
                        
                    })
					break
                case 'image':
                
					
                if (args[0].startsWith(`hentai`)) return reply('apatuh mau diban kak?')
					if (args[0].startsWith(`Hentai`)) return reply('apatuh mau diban kak?')
					
					if (args[0].startsWith(`boobs`)) return reply('apatuh mau diban kak?')
					if (args[0].startsWith(`Boobs`)) return reply('apatuh mau diban kak?')
					if (args[0].startsWith(`nekopoi`)) return reply('apatuh mau diban kak?')
					
					if (args[0].startsWith(`Nekopoi`)) return reply('apatuh mau diban kak?')
					if (args[0].startsWith(`bokep`)) return reply('apatuh mau diban kak?')
					if (args[0].startsWith(`Bokep`)) return reply('apatuh mau diban kak?')
                
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vhtear}`, {method: 'get'})
					sreply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					iky.sendMessage(from, pint, image, { caption: '*image*\n\n*Hasil Pencarian : '+goo+'*', quoted: mek })
					await limitAdd(sender)
					
				    
					break
					case 'animehug':
 
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iky.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'bcgc':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isGroup) return reply(mess.only.group)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await iky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							iky.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
                case 'pokemon':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    iky.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					sreply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					iky.sendMessage(from, pok, image, { quoted: mek })
					break
				case 'inu':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (!isPublic) return reply(mess.only.public)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://scrap.terhambar.com/pin?url=https://id.pinterest.com/pin/588916088754108677/`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					iky.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
				case 'elang':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (!isPublic) return reply(mess.only.public)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=elang&apikey=${vhtear}`, {method: 'get'})
					var eln = JSON.parse(JSON.stringify(anu.result));
					var elnn =  eln[Math.floor(Math.random() * eln.length)];
					nye = await getBuffer(elnn)
					iky.sendMessage(from, nye, image, { caption: 'elang!!', quoted: mek })
					await limitAdd(sender)
					break
				//animefoto
				case 'naruto':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=naruto&apikey=${vhtear}`, {method: 'get'})
					var naru = JSON.parse(JSON.stringify(anu.result));
					var to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					iky.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'minato':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=minato&apikey=${vhtear}`, {method: 'get'})
					var min = JSON.parse(JSON.stringify(anu.result));
					var ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					iky.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'boruto':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=boruto&apikey=${vhtear}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					iky.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'aesthetic':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=aestheticwalpaper&apikey=${vhtear}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					iky.sendMessage(from, nye, image, { caption: 'nih kak!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'animehappy':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animehappy&apikey=${vhtear}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					iky.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					break
					case 'animesad':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animesad&apikey=${vhtear}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					iky.sendMessage(from, nye, image, { caption: 'darling aishiteru!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'hinata':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hinata&apikey=${vhtear}`, {method: 'get'})
					var hina = JSON.parse(JSON.stringify(anu.result));
					var ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					iky.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'sasuke':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sasuke&apikey=${vhtear}`, {method: 'get'})
					var sasu = JSON.parse(JSON.stringify(anu.result));
					var ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					iky.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'sakura':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sakura&apikey=${vhtear}`, {method: 'get'})
					var sak = JSON.parse(JSON.stringify(anu.result));
					var kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					iky.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender)
					break
					//animefoto
				case 'unta':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=unta&apikey=${vhtear}`, {method: 'get'})
					var unt1 = JSON.parse(JSON.stringify(anu.result));
					var unt2 =  unt1[Math.floor(Math.random() * unt1.length)];
					nye = await getBuffer(unt2)
					iky.sendMessage(from, nye, image, { caption: 'unta!!', quoted: mek })
					await limitAdd(sender)
					break
					//tomekoghoul
				case 'kaneki':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${vhtear}`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					iky.sendMessage(from, nye, image, { caption: 'kaneki!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ToukaKirishima&apikey=${vhtear}`, {method: 'get'})
					var tou = JSON.parse(JSON.stringify(anu.result));
					var ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					iky.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'rize':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=RizeKamishiro&apikey=${vhtear}`, {method: 'get'})
					var ri = JSON.parse(JSON.stringify(anu.result));
					var ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					iky.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'akira':
				if (isBanned) return reply(mess.only.benned)
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=akiramado&apikey=${vhtear}`, {method: 'get'})
					var ak = JSON.parse(JSON.stringify(anu.result));
					var ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					iky.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'itori':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=itori&apikey=${vhtear}`, {method: 'get'})
					var it = JSON.parse(JSON.stringify(anu.result));
					var ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					iky.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'kurumi':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${vhtear}`, {method: 'get'})
					var kur = JSON.parse(JSON.stringify(anu.result));
					var imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					iky.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'miku':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'rem':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=remrezero&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'Kurumi Chan  !!', quoted: mek })
					await limitAdd(sender)
					break
					case 'ram':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'ram chan!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'kep':
					if (!isOwner) return
					case 'bokep':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					await limitAdd(sender)
					await limitAdd(sender)
					await limitAdd(sender)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isNsfw) return reply('❌ *Harus Mengaktifkan Mode Nsfw* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=bokep&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'COLI TERUS!!', quoted: mek })
					break
					case 'ptl':
					case 'pictcewek':
					
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cewekcantik&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'ptl2':
					case 'pictcowok':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cowokganteng&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'con':
					if (!isOwner) return
					case 'pictlolicon':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=lolikawai&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'HALLO ONII CHAN!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'w':
					if (!isOwner) return
					case 'waifu':
					case 'pictwaifu':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'OHAYO DARLING!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'testwaifu':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`http://xptnewapi.xp3.biz/Waifu.php?apikey=xptn1`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'OHAYO DARLING!!', quoted: mek })
					break
					case 'n':
					if (!isOwner) return
					case 'pictneko':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=nekoanimekawai&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'OHAYO ONII CHAN!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'picthewan':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewanimutlucu&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'GRRHH', quoted: mek })
					await limitAdd(sender)
					break
					case 'ber':
					if (!isOwner) return
					case 'pictvtuber':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=vtuber&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					iky.sendMessage(from, nye, image, { caption: 'OHAYO ONII CHAN!!', quoted: mek })
					await limitAdd(sender)
					break
				//tomekoghoul
				case 'hen':
				if (!isOwner) return
				case 'animehentai':
				if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animehentai&apikey=${vhtear}`, {method: 'get'})
					var hen = JSON.parse(JSON.stringify(anu.result));
					var tai =  hen[Math.floor(Math.random() * hen.length)];
					nye = await getBuffer(tai)
					iky.sendMessage(from, nye, image, { caption: 'hentai!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'animehentai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animehentai&apikey=${vhtear}`, {method: 'get'})
					var hen = JSON.parse(JSON.stringify(anu.result));
					var tai =  hen[Math.floor(Math.random() * hen.length)];
					nye = await getBuffer(tai)
					iky.sendMessage(from, nye, image, { caption: 'hentai!!', quoted: mek })
					break
					case 'lo2':
					if (!isOwner) return
				case 'loli2':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=loli&apikey=${vhtear}`, {method: 'get'})
					var lol = JSON.parse(JSON.stringify(anu.result));
					var i2 =  lol[Math.floor(Math.random() * lol.length)];
					nye = await getBuffer(i2)
					iky.sendMessage(from, nye, image, { caption: 'Oni chan baka!!', quoted: mek })
					await limitAdd(sender)
					break
					case 'lagu':
					iky.sendMessage(from,`https://xptnweb.000webhostapp.com/mp3-downloader-main/next-step/index.php?id=Vei2LEjoQM0&judul=${body.slice(5)}`,text, {quoted: mek})
					break
				case 'anjing':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					sreply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					iky.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'pin':
					if (!isOwner) return
                case 'pi':
					iky.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					sreply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					iky.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					break
					case 'pinterest':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pin}&apikey=${vhtear}`, {method: 'get'})
					sreply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					iky.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					await limitAdd(sender)
					break
					case 'xptn':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         sreply(mess.wait)
                                         owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/animu/wink?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
					case 'aguse':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply(mess.search)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewan&apikey=${vhtear}`, {method: 'get'})
					sreply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					iky.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
					case 'xd':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return sreply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/pin?q=${pin}&apikey=xptn352`, {method: 'get'})
					sreply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					iky.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(6)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   iky.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   break
                case 'indohot':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
                
                   anu = await fetchJson(`https://arugaz.herokuapp.com/api/indohot`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   hasil = `*judul* \n${anu.result.judul} *genre* \n${anu.result.genre} *durasi* \n${anu.result.durasi} *url* \n${anu.result.url}`
                   iky.sendMessage(from, hasil, text, {quoted: mek})
                   await limitAdd(sender)
                   break
				case 'ytmp4':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
				if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					iky.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
					case 'yt2mp4':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${body.slice(8)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					iky.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
					case 'run':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isOwner) return reply(mess.only.ownerB)
                try {
                sy = args.join(' ')
                return eval(sy)
} catch (e) {
reply(String(e))
}
break

                break
				case 'ban':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isOwner) return reply(mess.only.ownerB)
					iky.banUser (`${body.slice(7)}@c.us`, "add")
					iky.sendMessage(from, `anda terkena banned ${body.slice(7)}@c.us`, text)
					await limitAdd(sender)
					break
				case 'tiktok':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    				
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${vhtear}`, {method: 'get'})
					
					buffer = await getBuffer(anu.result.video)
					iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.Creator}.mp4`, quoted: mek})
await limitAdd(sender)
					break
					case 'instagram':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

				if (!isPublic) return reply(mess.only.public)

					if (args.length < 1) return reply('Urlnya mana um?')

					if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.error.Iv)

					sreply(mess.wait)

					anu = await fetchJson(`https://api.i-tech.id/dl/igdl?key={api_key}&link=${args[0]}`, {method: 'get'})

					

					

					
					buffer = await getBuffer(anu.result.url)

					iky.sendMessage(from, buffer, video, {quoted: mek})
await limitAdd(sender)
					break
					case 'ig':
if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

				if (!isPublic) return reply(mess.only.public)

					if (args.length < 1) return reply('Urlnya mana um?')

					if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.error.Iv)

					sreply(mess.wait)

					anu = await fetchJson(`https://api.vhtear.com/instadl?link=${args[0]}&apikey=${vhtear}`)

					if (anu.error) return reply(anu.error)

					teks = `*Nama* : ${anu.result.caption}\n*Title* : ${anu.result.owner_username}\n*Time* : ${anu.result.urlDownload}`

					thumb = await getBuffer(anu.result.image)

					iky.sendMessage(from, thumb, image, {quoted: mek, caption: teks})

					


					

					
					
await limitAdd(sender)
					break
					
					case 'tiktokwithwm':

				if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

				if (!isPublic) return reply(mess.only.public)

					if (args.length < 1) return reply('Urlnya mana um?')

					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)

					sreply(mess.wait)

					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${vhtear}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					teks = `*Nama* : ${anu.nameInfo}\n*Title* : ${anu.textInfo}\n*Time* : ${anu.timeInfo}`

					thumb = await getBuffer(anu.image)

					iky.sendMessage(from, thumb, image, {quoted: mek, caption: teks})

					buffer = await getBuffer(anu.mp4direct)

					iky.sendMessage(from, buffer, video, {quoted: mek})

					break
				case 'tiktokstalk':
					try {
						if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
						if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
						if (!isPublic) return reply(mess.only.public)
						if (args.length < 1) return iky.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tikmek.getUserProfileInfo(args[0])
						sreply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
						await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
				case 'nulis':
				case 'tulis':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
						if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					tulis = body.slice(6)
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=${vhtear}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ketahuan guru mampus lu'})
					break
					case 'nulis2':
				case 'tulis2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
						if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					tulis = body.slice(6)
					sreply(mess.wait)
					buffer = await getBuffer(`https://api.i-tech.id/tools/nulis?key=${api_key}&text=${tulis}`)
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ketahuan guru mampus lu'})
					break
					case 'k':
					iky.groupRemove(from, mek.message.extendedTextMessage.contextInfo.participant)
					break
					
					case 'k':
					if (!isOwner) return
					
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						iky.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						iky.groupRemove(from, mentioned)
					}
					break
				case 'text3d':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return iky.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    iky.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			     	break
			    case 'lovemake':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return iky.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=${vhtear}`, {method: 'get'})
                    iky.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	break
			    case 'shorturl':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonotlp':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*nomor* \n${anu.nomor} *international* \n${anu.international}`
			        reply(hasil)
			        break
			case 'infonomor':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                break
                case 'wiki':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
             if (args.length < 1) return reply(`Masukan Pertanyaan\nContoh : ${prefix}wiki anjing`)
              data = await fetchJson(`https://arugaz.herokuapp.com/api/wiki?q=${body.slice(5)}`)
              if (data.error) return reply(data.error)
              hasil = `${data.result}`
              reply(hasil)
              break
			    case 'igstalk':
                      if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                     if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    iky.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
                    break
                    
                    case 'neonime':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break  
					case 'nekopoinew':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://api.vhtear.com/nekonewepisode&apikey=${vhtear}`, {method: 'get'})
					teks = '××××××××××××××××\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.url}\n*rilis* : ${i.date}\n××××××××××××××××\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break  
					case 'hentailist':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://api.vhtear.com/nekohentai&apikey=${vhtear}`, {method: 'get'})
					teks = '××××××××××××××××\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.url}\n*Thumbnail* : ${i.image}\n*Detail* : ${i.detail}\n××××××××××××××××\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break  
					case '3dlist':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://api.vhtear.com/neko3d&apikey=${vhtear}`, {method: 'get'})
					teks = '××××××××××××××××\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.url}\n*Detail* : ${i.description}\n××××××××××××××××\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'javlist':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://api.vhtear.com/nekojavlist&apikey=${vhtear}`, {method: 'get'})
					teks = '××××××××××××××××\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.url}\n\n*Seri* : ${i.seri}\n××××××××××××××××\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
				break
				case 'stick':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					sendStickerFromUrl(args.join(' '))
					await limitAdd(sender)
				break
				case 'jurnalotaku':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://api.vhtear.com/otakulatest&apikey=${vhtear}`, {method: 'get'})
					teks = '××××××××××××××××\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.url}\n*Thumbnail* : ${i.image}\n*Rilis* : ${i.datetime}\n××××××××××××××××\n`
					}
					reply(teks.trim())
				//lgiproses
				case 'tesss':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(7)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					sreply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/leavest?text=${teks}&apikey=xptnbot352`)
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'tep':
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(9)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					sreply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/colortext?text=${teks}&apikey=xptnbot352`)
					buffer = await getBuffer(anu.result)
					iky.sendMessage(from, buffer, image, {quoted: mek})
					break
				//lgiproses
				case 'infomobil':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Masukan nama mobil!!')
					ige = body.slice(9)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomobil?merk=${ige}&apikey=${vhtear}`, {method: 'get'})
					buffer = await getBuffer(anu.result.image)
					capt = `mobil Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
					break
				case 'infomotor':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Masukan nama motor!!')
					ft1 = body.slice(11)
					sreply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomotor?merk=${ft1}&apikey=${vhtear}`)
					buffer = await getBuffer(anu.result.image)
					cptr = `motor Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ spesifikasi :* ${anu.result.spesifikasi}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					iky.sendMessage(from, buffer, image, {quoted: mek, caption: cptr})
					break
				case 'playstore':
 if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					kuji = body.slice(10)
					sreply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=${vhtear}`)
					capty = `*╠➥  title :* ${anu.title}\n*╠➥  app_id :* ${anu.app_id}\n*╠➥  description :* ${anu.description}\n*╠➥  developer_id :* ${anu.developer_id}\n*╠➥  developer :* ${anu.developer}\n*╠➥  score :* ${anu.score}\n*╠➥  full_price :* ${anu.full_price}\n*╠➥  price :* ${anu.price}\n*╠➥  free :* ${anu.free}`
					iky.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
					case 'nobg':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
await limitAdd(sender)
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        sreply(mess.wait)
                                        owgi = await iky.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${vhtear}`, {method: 'get'})
                                         exec(`wget ${anu1.result.image} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iky.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                                
                                         })
                                    
                                          } else {
                                                 reply('Gunakan foto!')
                                          }
                                        break
			    case 'cekjodoh':                    
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${quote}&text2=${wm}${body.slice(8)}`)
			        hasil = `Nama : ${anu.nama}\nPasangan : ${anu.pasangan}\n\nPositif : ${anu.positif}\nNegatif : ${anu.negatif}`
			        iky.sendMessage(from, anu, text, {quoted: mek, caption: hasil})
			        break
			    case 'fototiktok':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
                    gatauda = body.slice(8)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${body.slice(8)}`)
			        buff = await getBuffer(anu.result)
                    reply(anu.result)
			        break
			    case 'map':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                iky.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
                await limitAdd(sender)
				break
				case 'url2img':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					sreply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					iky.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'otagall2':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
				if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kickall':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					members_id = []
					teks = '\n\n'
					for (let mem of groupMembers) {
					 teks += `@${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
						}
					
                    let work = teks.filter(u => !(u == groupOwner || u.includes(iky.user.jid)))
                    for (let member of work) if (member.endsWith('@s.whatsapp.net')) await iky.groupRemove(from, [member])
					break
					    case 'leavetes':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
					break
			    case 'otagall3':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
			if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kbbi':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					break
				case 'persengay':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (!isPublic) return reply(mess.only.public)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
					reply('Menurut persen gay:\n\n'+anu.desc+anu.persen)
					await limitAdd(sender)
					break
				case 'baper':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply('Jangan Baper Ya:\n\n'+anu.desc)
					await limitAdd(sender)
					break
				break
					case 'grup':
					case 'gc':
					case 'group':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮𝐩 𝐬𝐞𝐦𝐮𝐚 𝐨??𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 ??𝐞𝐬𝐚𝐧`)
						iky.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`𝐏𝐞𝐫𝐢𝐧??𝐚𝐡 𝐝𝐢𝐭𝐞𝐫??𝐦𝐚, 𝐛??𝐫??𝐚𝐬𝐢𝐥 𝐦??𝐧𝐠𝐮𝐛??𝐡 ??𝐫𝐨𝐮𝐩 𝐡𝐚𝐧𝐲𝐚 𝐚𝐝𝐦𝐢𝐧 𝐲𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠??𝐫𝐢?? 𝐩??𝐬𝐚𝐧`)
						iky.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					case 'getses':
				if (isOwner) return reply(mess.only.OwnerB)
				const pl = await iky.getSnapshot()
				iky.sendMessage(from, pl, image, {quoted: mek})
				break
				case 'alay':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                     data = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`)
                    reply(data.result)
                    await limitAdd(sender)
                    break
				case 'artinama':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
			    case 'otagall':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					const lvl = ['4','5','6','7','2','1','2','3']
                const exp = ['4293','930','1729','2837','3410','4864','5995','6295','7405','835','973','10040','2849','9492','7935','8294','4941','3049']
                const vl = lvl[Math.floor(Math.random() * lvl.length)]
                const ex = exp[Math.floor(Math.random() * exp.length)]
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*╠➥ * @${mem.jid.split('@')[0]}\n*╠➥ * XP:` +ex+`\n*╠➥ * User Level :` +vl+`\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					await limitAdd(sender)
					break
			    case 'tagall':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					sew = body.slice(7)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`${sew}\n\n\nTagall by~~ *${pushname2}*\n\n\n\n╔══✪〘 Mention All 〙✪══\n╠➥ *Pesan:* `+teks+`╚═〘 Kurumi Chan   〙`, members_id, true)
					await limitAdd(sender)
					break
					
				case 'clearall':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isOwner) return reply('Kamu siapa?')
					anu = await iky.chats.all()
					iky.setMaxListeners(25)
					for (let _ of anu) {
						iky.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
					case 'allchat':
					anu = await iky.chats.all()
					iky.deleteMessage(from, anu)
					break
					case 'deletechatgroup':
					if (!isOwner) return reply('Kamu siapa?')
					
					for (let _ of groupall) {
						iky.deleteChat(_)
					}
					reply('Sukses delete chat all group :)')
					
					break
					case 'deletechat':
					if (!isOwner) return reply('Kamu siapa?')
					
					for (let _ of chatall) {
						iky.deleteChat(_)
					}
					reply('Sukses delete chat all private :)')
					
					break
				case 'broadcast':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await iky.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await iky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							iky.sendMessage(_.jid, buffer, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(10)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(10)}\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎_*[ iky Broadcast ]*_`)
						}
						reply('Suksess broadcast')
					}
					break
					case 'bc':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?') 
					if (args.length < 1) return reply('.......')
					anu = await iky.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await iky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							iky.sendMessage(_.jid, buffer, image,{caption: `${body.slice(4)}\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎_*[Kurumi Chan ]`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎_*[Kurumi Chan ]*_`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 ??𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
					case 'bcchat':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?') 
					if (args.length < 1) return reply('.......')
					
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await iky.downloadMediaMessage(encmedia)
						for (let _ of chatall) {
							iky.sendMessage(_.jid, buffer, image,{caption: `${body.slice(6)}\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎_*[Kurumi Chan ]`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of chatall) {
							sendMess(_.jid, `${body.slice(6)}\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎_*[Kurumi Chan ]*_`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 ??𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
					case 'bcstik':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?') 
					if (args.length < 1) return reply('🗿🤷')
					anu = await iky.chats.all()
						encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await iky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							iky.sendMessage(_.jid, buffer, sticker,{quoted: {key:{ fromMe:false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `status@broadcast` } : {}) }, message: {"imageMessage": {
"url":"https://mmg.whatsapp.net/d/f/AjK36d50vEsfn_-0zYA9hN6uMGig6xSfoeSEe2kto9h9.enc",
"mimetype":"image/jpeg",
"caption":`BROADCAST Kurumi Chan  \n\n${body.slice(8)}`,
"fileSha256":"KbJC20DoVEdDw+8WF1EqwtPsdPUTF8/xQbhg+65P3q4=",
"fileLength":"43344",
"height":640,
"width":640,
"mediaKey":"OwSueKPVn+v45LX6oJ44ER+EJ+Lg0JFLuSupH27rU28=",
"fileEncSha256":"BGO1C/OttoScb1UxDrGlwsI9eImocg1zwbLgYKmecXs=",
"directPath":"/v/t62.7118-24/20036572_1210576852672540_4032358369544328852_n.enc?oh=d0e477e1bf0a01bfcf328776ab50ccee&oe=6043238E",
"mediaKeyTimestamp":"1612168223",
"jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAFAAUAMBIgACEQEDEQH/xAAyAAADAQEBAQEAAAAAAAAAAAADBAUGAgABBwEAAwEBAQAAAAAAAAAAAAAAAgMEBQAB/9oADAMBAAIQAxAAAACwodfVzwNKMlzPKph4aGtzqbT+WJVneGDvmPenPR18H+GckyZMvM7RcnBVLNeUaIp+h4syuVK8FD5f21z6IoNxf0o47+OoTfqZ7UKaX3okzbnyNa7zmdRwL1bPI6+et+R3/wCdevj/AE5aLVzrWSozgJOQTvXzP//EADUQAAIBAwIEBAIHCQAAAAAAAAECAwAEERIhBRMxQSJRYXFSoRAjMoGRscEUICRCYnKCkvH/2gAIAQEAAT8AVMxBu5fAq5fRDKfJTU0mLi29WIp2xg+tLKOSy+oIpBqkjH9VXcD2zk78pm/CmfQ4cbqh+R2pGEiBh0IpWyK5v1ap5EmiQ4wfiH50yapbfPZiPkaJV/DnqKiYkFT1BwaBYMpDYwQc0bfIIeRnB6ggYq7spLUOcZhP4rVk2qAD4SRTnQ4PZtj70r5wfMZqJsk+j/rVxAFuIi4BUupx2q7URyEpjwnVgeXemUhlmTdSPFTDKah701/HbQLJPMWPRI03Y1HxuZiIpLIFu45qhj/jQ/ZdTcgMhO7RNsVNFRIhU1bPrhwPtJUe0j77MNQq64hLNNGxXlQsCq53ZvWoWvJvHI6TINsqMFahQwu6neInP9uaKGPPwmoIY2kdyMvHGeXT6J5IXdQHlG5UYGVqJGueHrM65ngJXV3YUDhiPvofw12D/I9Tx+KMqPCWq5SXmXIVS4JDIprhUMkMmWUqssfzWpYjBIHUZXP/AEU0CsgaLBUjpQieORXjBJB6UvC0Ulk2VjkKRutRqEjWPY4HtV9AYnDKNgcj27ilXnxmN8ah4kYdCKtZGK8uYYKtjNCJBIrNkqOjDqPQ1HDHoXHuCKZQwIIyDUactiqg6TWKbpW5NXo+qjHm/wClXlryDzFG259jQZThsZBG48xUEb5Kq+R1XPcGrZHTIIAHYA/uYrSKvLy2tp4+ad1QkD3q5jDwuvpUU5C4+H5irS8CujdVBOahdJEDIcg/RccUkS7eCOAsEwC2cb1Z3t5JclJY10N0I6r9DMqKzMcADJNXs5u7t5OxOF9hUuuS2Yx/aZDp+8VeWL2ttEx+3klqtZwky8wgDudOatGiMK8t0ZexWs1JaRSOXxhj1NRQJFkgbmmZVBLEADqTXGOIvK3IjBVAAT5tSx68EffVt4rS3PnEv5VxGMPFgjY7Vc28tuy618Lbq3mKt7ue2bXFIVqw4y86HmIpdfKk4hAeupfcVJfwqPBljTzPM2XPsvYVdSa7q4PUasf67VAoC5r/xAAhEQACAgEFAAMBAAAAAAAAAAABAgADERITITFBI1GBYf/aAAgBAgEBPwDkBif7AwJ/AYyDS4+5RYpIVu/DMRumESwjQT4NJm5niLTqdhnEpJIKk8qcSzoGWuNITE1ng+iG1j1xxzK7Cj5++5R8lZRvJcrpweR4YSBAZRVusc9CbrVddBgT+SyoXqGR42FYq3YhcCUrt0qfSMz/xAAhEQACAgEEAwEBAAAAAAAAAAABAgADERIhMUETUWGRIv/aAAgBAwEBPwBQGZAO8R0KgH6R+RGIsQ+iJcDpYrwRuJ2RE2YH0Y6q2sezkTxYxGtKqDLh/QYcMMyvn6JWjay2dppzkdTxKdjvLKQ6hRz1L8pati8mIyMMgYPYgBY4AyYylTgiWWaPpiVi04PYIEVjUxDLED4DoDg9iCqxzk/pj4e5l6E//9k=",
"remoteJid":"status@broadcast"}}}})

						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 STICKER ')
					case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						iky.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'add1':
					if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				
					try {
						jom = mek.message.extendedTextMessage.contextInfo.participant
						num = `${jom}`
						iky.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
			    case 'kick':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(`Untung Gua Bukan Admin, Kalo Jadi Admin Udah Aku Kick Tuh! 😑`)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    let users = mentioned.filter(u => !(u == groupOwner || u.includes(iky.user.jid)))
                    for (let member of users) if (member.endsWith('@s.whatsapp.net')) await iky.groupRemove(from, [member])
					break
					case 'kick1':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(`Untung Gua Bukan Admin, Kalo Jadi Admin Udah Aku Kick Tuh! 😑`)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					opv = mek.message.extendedTextMessage.contextInfo.participant
                   member = `${opv}`
                 iky.groupRemove(from, [member])
					break
					case 'panggil':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(10)
					var teks0 = gh.split(" |")[0];
					var o = gh.split("|")[1];
					var c = gh.split("|")[2];
					if (o >= 61) return reply('Untuk menghindari ban, command panggil dibatasi sampai 60 kali')
					nom = `${teks0}@s.whatsapp.net`
					for (let i = 0; i < o; i++) {
					iky.sendMessage(from, `@${nom.split("@s.whatsapp.net")[0]} ${c}`, text, {contextInfo: {mentionedJid: [nom]}})
					}
					
					break
					case 'spam':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(5)
					var teks7 = gh.split("|")[0];
					var o = gh.split("|")[1];
					if (o >= 61) return reply('Untuk menghindari ban, command panggil dibatasi sampai 60 kali')
					for (let i = 0; i < o; i++) {
					iky.sendMessage(from, `${teks7}`, text)
					}
					
					break
					
				case 'edotensei':
				if (!isOwner) return 
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					let opes = mentioned.filter(u => !(u == groupOwner || u.includes(iky.user.jid)))
                    for (let member of opes) if (member.endsWith('@s.whatsapp.net')) await iky.groupRemove(from, [member])
                    setTimeout( () => {
						let sep = mentioned.filter(u => !(u == groupOwner || u.includes(iky.user.jid)))
                    for (let member of sep) if (member.endsWith('@s.whatsapp.net')) iky.groupAdd(from, [member])
						iky.sendMessage(from, `Perintah di terima anda di edontesei selamat masuk `,text)
						}, 10000) // 1000 = 1s,
						
						
						
					break
				case 'promote':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
				if (!isOwner) return reply('maaf fitur ini dimatikan jika ingin menpromote promote sendiri:v')
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						iky.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						iky.groupMakeAdmin(from, mentioned)
					}
					break
				case 'b':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, hapus pesan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						iky.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						iky.deleteMessage(from, mentioned)
					}
					break
			    case 'demote':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
			if (!isOwner) return reply('maaf fitur ini dimatikan jika ingin mendemote demote sendiri:v')
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						iky.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda tidak menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						iky.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 't':
					if (!isOwner) return
				case 'toimg':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
await limitAdd(sender)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					sreply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						iky.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
						
					})
					break
					
					
				case 'm':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(2)
					anu = await simih(teks) //fetchJson(`https://mieayam-kering.herokuapp.com/api/simi?kata=${teks}&apikey=freeKeY`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					
					break
					case 'togif':
					if (!isUser)return reply(mess.only.userB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
					ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					owgi = await iky.downloadAndSaveMediaMessage(ger)
					data = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
					anu = await fetchJson(`https://api.vhtear.com/webp_to_gif?link=${data.display_url}&apikey=${vhtear}`)
					sreply(mess.wait)
					tog = await getBuffer(anu.result.img_gif)
					iky.sendMessage(from, tog, video, {mimetype: 'video/gif', quoted: mek})
					} else {
						reply('Reply Stickernya')
					}
					break
					case 'img64':
					if (!isUser)return reply(mess.only.userB)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					owgi = await iky.downloadAndSaveMediaMessage(ger)
					data = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
					anu = await fetchJson(`https://api.vhtear.com/image_to_base64?link=${data.display_url}&apikey=${vhtear}`)
					sreply(mess.wait)
					tog = anu.result
					reply(`${tog.string_base64}`)
					} else {
						reply('Reply Stickernya')
					}
					break
					case 'memecreate':
					if (!isQuotedImage) return reply (`reply foto mas`)
					if (!isUser)return reply(mess.only.userB)
					if (args.length < 1) return reply('contoh /memecreate kontol|kuda')
					var gh = body.slice(11)
					var tols = gh.split("|")[0];
					var tils = gh.split("|")[1];
					var imgbb = require('imgbb-uploader')
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					owgi = await iky.downloadAndSaveMediaMessage(ger)
					data = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
					anu = await getBuffer(`https://api.vhtear.com/genmeme?text1=${tols}&text2=${tils}&url=${data.display_url}&apikey=${vhtear}`)
					iky.sendMessage(from, anu, image)
					break
					case 'remove':
					if (!isQuotedImage) return reply (`reply foto mas`)
					if (!isUser)return reply(mess.only.userB)
					
					var imgbb = require('imgbb-uploader')
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					owgi = await iky.downloadAndSaveMediaMessage(ger)
					data = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
					anu = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${data.display_url}&&apikey=${vhtear}`)
					buffer = await getBuffer(anu.result.image)
								
								ola(buffer, image)
					
					
					
					
					
					break
					case 'ripcreate':
					if (!isQuotedImage) return reply (`reply foto mas`)
					if (!isUser)return reply(mess.only.userB)
					
					var imgbb = require('imgbb-uploader')
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					owgi = await iky.downloadAndSaveMediaMessage(ger)
					data = await imgbb("2685f71965fa6c56702e9e70644ff0ad", owgi)
					data = await fetchJson(`https://naufalhoster.xyz/textmaker/gta?apikey=Arya.Rey.RFK.Team&url=${data.display_url}`)
					buffer = await getBuffer(data.image)
					iky.sendMessage(from, buffer, image)
					break
            
				case 'simih':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'yes':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isYes) return reply('Mode yes sudah aktif')
						yes.push(from)
						fs.writeFileSync('./src/yes.json', JSON.stringify(yes))
						reply('Sukses mengaktifkan mode yes')
					} else if (Number(args[0]) === 0) {
						yes.splice(from, 1)
						fs.writeFileSync('./src/yes.json', JSON.stringify(yes))
						reply('Sukes menonaktifkan mode yes ')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antibadword':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (args[0] === 'enable') {
						if (isSimi) return reply('Mode antibadword sudah aktif')
						badword.push(from)
						fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
						reply('Sukses mengaktifkan anti badword di group ini ✔️')
					} else if (args[0] === 'disable') {
						badword.splice(from, 1)
						fs.writeFileSync('./src/badword.json', JSON.stringify(badword))
						reply('Sukes menonaktifkan anti badword di group ini ✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
					break
			    case 'nsfw':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!isPublic) return reply(mess.only.public)
			if (!isOwner) return reply('Kamu siapa?')
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses mengaktifkan mode nsfw di group ini ✔️')
					} else if (args[0] === 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
					break
				case 'anime':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Sukses mengaktifkan mode anime di group ini ✔️')
					} else if (args[0] === 'disable') {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Sukes menonaktifkan mode anime di group ini ✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
					break
					case 'public':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('HANYA OWNER YANG DAPAT MENGGUNAKAN NYA BAKA')
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (isPublic) return reply('Sudah Aktif')
						public.push(from)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang semua anggota dapat mengirim perintah✔️')
					} else if (args[0] === 'disable') {
						public.splice(from, 1)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang hanya owner dapat mengirim perintah✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
					break
					
				case 'wel':
				if (!isOwner) return
				case 'welcome':
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (args[0] === 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
				case 'clone':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await iky.getProfilePicture(id)
						buffer = await getBuffer(pp)
						iky.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'setprefix':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (args.length < 1) return
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi :「* ${prefix} *」`)
					break
		        //fitur adminbot
		        case 'setpp2':
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		if (!isPublic) return reply(mess.only.public)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Kamu siapa?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await iky.downloadAndSaveMediaMessage(mek)
                    await iky.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                case 'bc2':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isPublic) return reply(mess.only.public)
					if (!isadminbot) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await iky.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await iky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							iky.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					case 'tag2':
					   if (!isOwner) return
				case 'hidetag2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					var value = body.slice(9)
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					iky.sendMessage(from, options, text)
					break
					case 'tag5':
					   if (!isOwner) return
					case 'hidetag5':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					var value = body.slice(9)
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					iky.sendMessage(from, options, text)
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
					break
					
					case 'tag20':
					   if (!isOwner) return
					case 'hidetag20':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					var value = body.slice(10)
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					iky.sendMessage(from, options, text)
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
					break
					case 'hidetag50':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					var value = body.slice(10)
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					iky.sendMessage(from, options, text)
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
					break
					case 'hidetag300':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
					var value = body.slice(11)
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					iky.sendMessage(from, options, text)
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	.then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                 .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
	                .then(() => {iky.sendMessage(from, options, text)})
					break
					//
					case 'bitly':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
               iky.updatePresence(from, Presence.composing) 
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                
                reply(hasil)
                await limitAdd(sender)
                break
                case 'kapital':
					reply(body.slice(9).toUpperCase())
					break
					 case 'kecil':
					const tulisan = body.slice(6).toLowerCase()
					

reply(tulisan)
break
                case 'tin':
               iky.updatePresence(from, Presence.composing) 
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				sh = body.slice(4)
                data = await getBuffer(`https://api.zeks.xyz/api/urlshort?url=https://api.vhtear.com/write?text=${sh}&apikey=${vhtear}&apikey=apivinz`)
                hasil = `link : ${body.slice(4)}\n\nOutput : ${data.result}`
                reply(hasil)
                break
                case 'akbs':
               iky.updatePresence(from, Presence.composing) 
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				tu = body.slice(5)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=https://api.vhtear.com/write?text=${tu}&apikey=${vhtear}&apikey=BotWeA`)
                hasil = `link : https://api.vhtear.com/write?text=${tu}\n\nOutput : ${data.result}`
                reply(hasil)
                break
                case 'kickme':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
                    if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(`aku bukan admin kak`)
		iky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		teks = `kok kamu bunuh diri :(  @${sender.split('@')[0]} sayonara sayang🙋`
		iky.sendMessage(from,teks,text, { quoted: mek,contextInfo: { mentionedJid: [sender] }})
		setTimeout( () => {
			iky.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
	
	break
				case 'setpp3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Kamu siapa?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await iky.downloadAndSaveMediaMessage(mek)
                    await iky.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                    case 'status':
                    
                    const loadedMsg = await iky.getAmountOfLoadedMessages()
                    iky.sendMessage(from, `*${loadedMsg}* Loaded Messages`,text, {quoted: mek})
                    case 'spamteks':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                    
                    if (!isOwner) return
					t = body.trim().split('|')
					spatek = body.trim().split('|')
					for (let i = t; i < spatek[1]; i++) {
					iky.sendMessage(from, `${spatek[2]}`, text)
					}
					break
                    case 'setreply':
                    if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
               iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					break
					case 'setnomor':
               iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					tescuy = body.slice(9)
					reply(`nomor berhasil di ubah menjadi : ${tescuy}`)
					break
					case 'grouplist':
					iky.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`Ini adalah list group iky Bot :\n\n\`\`\``
					
					for (let hehehe of groupId) {
						
						teks += ` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					iky.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
					case 'mont':
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${sender.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						iky.groupRemove(from, mentioned)
						}
						break
                case 'bc3':
                if (!isPublic) return reply(mess.only.public)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isfrendsowner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await iky.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await iky.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							iky.sendMessage(_.jid, buffer, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *Frends bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					case 'blur':
					if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)
                    if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					sreply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -vf tmix=frames=8:weights="1 1 1 1 1 1 1 1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'hadist':
				case 'hadis':
                if (!isUser) return reply(`daftar dulu om, soalnya belum kedaftar nih`)
                if (args.length !== 2) return reply(`gunakan nama imam nya\n\nNama imam Yang terdapat dalam data: \n✓ darimi\n✓ ahmad\n✓ bukhari, muslim\n✓ malik\n✓ nasai\n✓ tirmidzi\n✓ ibnumajah\n✓ abudaud \n\nDan cara penggunaan nya ialah: ${prefix}hadis bukhari 150`)
                await sreply('mohon ditunggu yaa...  om')
                try {
                    if (args[0] === 'darimi') {
                        const hdar = await fetchJson(`https://api.hadith.sutanlab.id/books/darimi/${args[1]}`)
                        await iky.sendMessage(from, `${hdar.data.contents.arab}\n${hdar.data.contents.id}\n\n*H.R. Darimi*`, text)
                    } else if (args[0] === 'ahmad') {
                        const hmad = await fetchJson(`https://api.hadith.sutanlab.id/books/ahmad/${args[1]}`)
                        await iky.sendMessage(from, `${hmad.data.contents.arab}\n${hmad.data.contents.id}\n\n*H.R. Ahmad*`, text)
                    } else if (args[0] === 'bukhari') {
                        const hbukh = await fetchJson(`https://api.hadith.sutanlab.id/books/bukhari/${args[1]}`)
                        await iky.sendMessage(from, `${hbukh.data.contents.arab}\n${hbukh.data.contents.id}\n\n*H.R. Bukhori*`, text)
                    } else if (args[0] === 'muslim') {
                        const hmus = await fetchJson(`https://api.hadith.sutanlab.id/books/muslim/${args[1]}`)
                        await iky.sendMessage(from, `${hmus.data.contents.arab}\n${hmus.data.contents.id}\n\n*H.R. Muslim*`, text)
                    } else if (args[0] === 'malik') {
                        const hmal = await fetchJson(`https://api.hadith.sutanlab.id/books/malik/${args[1]}`)
                        await iky.sendMessage(from, `${hmal.data.contents.arab}\n${hmal.data.contents.id}\n\n*H.R. Malik*`, text)
                    } else if (args[0] === 'nasai') {
                        const hnas = await fetchJson(`https://api.hadith.sutanlab.id/books/nasai/${args[1]}`)
                        await iky.sendMessage(from, `${hnas.data.contents.arab}\n${hnas.data.contents.id}\n\n*H.R. Nasa'i*`, text)
                    } else if (args[0] === 'tirmidzi') {
                        const htir = await fetchJson(`https://api.hadith.sutanlab.id/books/tirmidzi/${args[1]}`)
                        await iky.sendMessage(from, `${htir.data.contents.arab}\n${htir.data.contents.id}\n\n*H.R. Tirmidzi*`, text)
                    } else if (args[0] === 'ibnumajah') {
                        const hibn = await fetchJson(`https://api.hadith.sutanlab.id/books/ibnu-majah/${args[1]}`)
                        await iky.sendMessage(from, `${hibn.data.contents.arab}\n${hibn.data.contents.id}\n\n*H.R. Ibnu Majah*`, text)
                    } else if (args[0] === 'abudaud') {
                        const habud = await fetchJson(`https://api.hadith.sutanlab.id/books/abu-daud/${args[1]}`)
                        await iky.sendMessage(from, `${habud.data.contents.arab}\n${habud.data.contents.id}\n\n*H.R. Abu Daud*`, text)
                    } else {
                        reply('format Salah misal: .hadis bukhari 121')
                    }
                } catch (err) {
                    console.error(err)
                    await reply('Error!')
                }
            break
            case 'gombal':
				iky.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
				 data = fs.readFileSync('./src/gombal.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                let hasili = (randKey.result)
                iky.sendMessage(from, hasili, text, {quoted: mek})
				await limitAdd(sender)
			        break
				case 'reverb':
					tels = args.join(' ')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ak.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "aecho=0.8:0.9:40|50|70:0.4|0.3|0.2" ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						iky.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
						})
						break
				case 'negativegreen':
					if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)
                    if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					sreply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrance=intensity=-2:gbal=10" -pix_fmt yuv420p ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'swm':
					case 'stickwm':
					if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
               if (!isQuotedSticker) return reply('Stiker aja om')
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			  media = await iky.downloadAndSaveMediaMessage(encmedia)
              sreply(mess.wait)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : 'Kurumi Chan  '
              dua = typeof anu[1] !== 'undefined' ? anu[1] : '@rizkyfadilah8'
              require('./lib/exif.js').createExif(satu, dua)
			require('./lib/exif.js').modStick(media, iky, mek, from)
				break
				case 'nowm':
				if (!isPremium) return reply(`Kamu bukan Member Premium
Jika Berminat Untuk Membeli premium
Hubungi Nomor dibawah
 wa.me/6282387804410 atau ketik /owner`)
               if (!isQuotedSticker) return reply('Stiker aja om')
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			  media = await iky.downloadAndSaveMediaMessage(encmedia)
              sreply(mess.wait)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ''
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ''
              require('./lib/exif.js').createExif(satu, dua)
			require('./lib/exif.js').modStick(media, iky, mek, from)
				break
					case 'basscustom':
					sreply(mess.wait)
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
await limitAdd(sender)
						if (args.length === 0) {
	iky.sendMessage(from, `oh`, text, {quoted: mek})
						} else if (args.includes('ptt')) {
							encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
						})
						} else if (args.includes('audio')) {
							encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
							iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', filename: `Bass.mp3`, quoted: mek})
							fs.unlinkSync(ran)
							})
						} else if (args.includes('file')) {
							encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
								iky.sendMessage(from, hah, document, {mimetype: 'document/mp4', filename: `Bass.mp3`, quoted: mek})
								fs.unlinkSync(ran)
								
						
						})
						}
					break
					case 'todc':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
                   fs.writeFileSync(`./stak/sayang.mp3`, media)
                   setTimeout( () => {
			
		
						buffer = fs.readFileSync(`./stak/sayang.mp3`)
				
					
						
								iky.sendMessage(from, buffer, document, {mimetype: 'document/mp3', filename: `Bass.mp3`, quoted: mek})
								}, 10000)
								break
					case 'revoke':
				iky.groupRevokeLink(from)
				sreply(`sukses menarik link group`)
				break
					case 'bass':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
await limitAdd(sender)
					sreply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=30:width_type=o:width=2:g=35 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
						
					})
				break
				case 'distord':
				sreply(mess.wait)
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iky.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=75 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iky.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
						
					})
				break
				case 'snack':
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${body.slice(7)}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sreply(mess.wait)
                buffer = await getBuffer(anu.result)
                iky.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                break
                case 'soundcloud':
                
               
                 sreply(mess.wait)
                 anu = await fetchJson(`https://mieayam-kering.herokuapp.com/api/sound-cloud?url=${body.slice(10)}&apikey=freeKeY`, {method: 'get'})
                buffer = await getBuffer(anu.result.mp3)
                iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
                break
					case 'film':
					if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
		data = await fetchJson(`https://api.zeks.xyz/api/film?q=${body.slice(6)}&apikey=apivinz`)
		teks = '\n'
		for (let i of data.result) {
		teks += `Judul: ${i.tile}\nLink: ${i.url}`
		buffer = await getBuffer(data.result[0].thumb)
		iky.sendMessage(from, buffer, image, {quoted: mek, caption: teks}) 
		}
		break
		case 'persegi': 
					if (args.length < 1) return reply('𝗧𝗲𝗸𝘀𝗻𝘆𝗮 𝗺𝗮𝗻𝗮 𝘁𝗲𝗸𝘀?')
					hmm = await fetchJson(`https://mieayam-kering.herokuapp.com/api/persegi?sisi=${body.slice(9)}&apikey=freeKeY`, {method: 'get'})
					teks = `*Rumus Keliling* : ${hmm.rumus_keliling}\n\n*Hasil keliling* : ${hmm.hasil_keliling}\n\n*Rumus luas* : ${hmm.rumus_luas}\n\n*Hasil luas* : ${hmm.hasil_luas}`
					reply(teks)
					break
				case 'hidetag3':
				if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isfrendsowner) return reply('Kamu siapa?')
					var value = body.slice(9)
					var group = await iky.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					iky.sendMessage(from, options, text)
					break
				//frendowner
				
                case 'suit':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
                limitAdd(sender)
                if (!q) reply(`Kirim perintah ${prefix}suit gunting | [jumlahtaruhan]\nContoh: ${prefix}suit gunting 5000`)
                //const hargasuit = 5000
                //const userspilih = body.slice(6)
                //const userspilih = body.slice(8)
                const userspilih = q.substring(0, q.indexOf('|') - 1)
                const jumlahsuit = q.substring(q.lastIndexOf('|') + 2)
                //const deteksaldo = jumlahsuit * 1
                // if (q.length > 1024) return reply(`Gagal membuat karena Teks melebihi 1.024`)
                if (checkATMuser(sender) <= jumlahsuit) return reply(`Sepertinya saldomu tidak cukup untuk taruhan Rp. ${jumlahsuit}, silahkan cek dengan cara ${prefix}uang`)
                
                if (checkATMuser(sender) >= jumlahsuit) {
                if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Format salah`)
                if (userspilih.match(/batu|gunting|kertas/)) {
                reply(`*Saldo dikurangkan -Rp ${jumlahsuit}*`)
                confirmATM(sender, jumlahsuit)
                setTimeout( () => {}, 2000)

                var computer = Math.random();

                const hadiahnye = jumlahsuit * 2
                const hadiahtostr = hadiahnye
                const balikin = jumlahsuit * 1

                if (computer < 0.34 ) {
                    computer = 'batu';
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'gunting';
                } else {
                    computer = 'kertas';
                }

                //var hasils = '';
                if ( userspilih == computer ) {
                    //hasil = 'SERI!';
                    reply(`Pertandingan Seri!\nSaldomu dikembalikan Rp ${jumlahsuit}`)
                    //const baackbalance = 5000
                    addKoinUser(sender, balikin)
                } else if ( userspilih == 'batu' ) {
                    if( computer == 'gunting' ) {
                        // hasil = 'MENANG';
                        reply(`Congrats!, Kamu memilih *BATU* dan bot *GUNTING* kamu menang!, SALDO +Rp ${hadiahtostr}`)
                        addKoinUser(sender, hadiahnye)
                    } else {
                        reply(`Opss kamu kalah, Kamu memilih *BATU* dan bot memilih *KERTAS*, Dan kamu tidak dapat apa-apa`)
                    }
                } else if ( userspilih == 'gunting' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Opss kamu kalah, Kamu memilih *GUNTING* dan bot memilih *BATU*, Dan kamu tidak dapat apa-apa`)
                    } else {
                        reply(`Congrats!, Kamu memilih *GUNTING* dan bot *KERTAS* kamu menang!, SALDO +Rp ${hadiahtostr}`)
                        addKoinUser(sender, hadiahnye)
                    }
                } else if ( userspilih == 'kertas' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Congrats!, Kamu memilih *KERTAS* dan bot *BATU* kamu menang!, SALDO +Rp ${hadiahtostr}`)
                        addKoinUser(sender, hadiahnye)
                    } else {
                        reply(`Opss kamu kalah, Kamu memilih *KERTAS* dan bot memilih *GUNTING*, Dan kamu tidak dapat apa-apa`)
                    }
                } 
            } else {
                reply(`Salah, gunakan huruf kecil\nExample:\n\nk = kertas\ng = gunting\nb = batu\nContoh: ${prefix}suit | 15000`)
            }
        }
                break
                case 'dadu1':
                if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
limitAdd(sender)
if (args.length < 1) return reply(`Format salah, masukkan pilihanmu\n\nContoh: ${prefix}suit kertas`)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
                const pser = args.join(' ')
                const baks = Math.floor(Math.random() * 2000) + 1000
                confirmATM(sender, baks)
					if ( checkATMuser(sender) <= baks) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                                        if ( checkATMuser(sender) >= baks ) {
                                        	reply(`saldo mu dikurangi *-Rp ${baks}*`)
                fee = baks * 2

                var computer = Math.random()
                if (computer < 0.34 ) {
                    computer = '1'
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = '2'
                } else {
                    computer = '3'
                }
            const sko =['4','9','5','3','7','8','10','9','4','9','2','20','6']
					const botl = sko[Math.floor(Math.random() * sko.length)]
                if ( pser == computer ) {
                    
                    reply(`Pertandingan kamu dengan bot Seri!\nUanv Kamu di kembalikan sebesar ${lopm}`)
                    addKoinUser(sender, baks)
                } else if ( pser == '1' ) {
                    if( computer == '3' ) {
                        sendStickerFromUrl(`https://i.ibb.co/7vKMMkz/cde5120338f0.jpg`)
                        reply(`🎉 KAMU MENANG 🎉\n+Rp${fee}`)
                        
                addKoinUser(sender, fee)
                        
                    } else {
                    	sendStickerFromUrl(`https://i.ibb.co/7vKMMkz/cde5120338f0.jpg`)
                        reply(`😵 KAMU KALAH 😵\n Bot 3 kamu 1 \nDan Tidak Mendapatkan apa apa`)
                    }
                } else if ( pser == '3' ) {
                    if( computer == '5' ) {
                        sendStickerFromUrl(`https://i.ibb.co/R0ZQ0Wx/11d448bd8e56.jpg`)
                        reply(`😵 KAMU KALAH 😵\nDan Tidak Mendapatkan apa apa`)
                    } else {
                    	sendStickerFromUrl(`https://i.ibb.co/R0ZQ0Wx/11d448bd8e56.jpg`)
                    	reply(`🎉 KAMU MENANG 🎉\n+Rp${fee}`)
                    addKoinUser(sender, fee)
                    }
                } else if ( pser == '4' ) {
                    if( computer == '6' ) {
                        sendStickerFromUrl(`https://i.ibb.co/P4z3VDF/a60ce4d9998c.jpg`)
                        reply(`🎉 KAMU MENANG 🎉\n+Rp${fee}`)
                        addKoinUser(sender, fee)
                    } else {
                    	sendStickerFromUrl(`https://i.ibb.co/37LRL3L/110699002b6a.jpg`)
                        reply(`😵 KAMU KALAH 😵\nDan Tidak Mendapatkan apa apa`)
                    }
                 }   else if ( pser == '2' ) {
                    if( computer == '3' ) {
                        sendStickerFromUrl(`https://i.ibb.co/P4z3VDF/a60ce4d9998c.jpg`)
                        reply(`🎉 KAMU MENANG 🎉\n+Rp${fee}`)
                        addKoinUser(sender, fee)
                    } else {
                    	sendStickerFromUrl(`https://i.ibb.co/37LRL3L/110699002b6a.jpg`)
                        reply(`😵 KAMU KALAH 😵\nKamu 2 Bot 3\nDan Tidak Mendapatkan apa apa`)
                    }
                }
            } else {
                reply(`Format salah, masukkan pilihanmu\n\nContoh: ${prefix}suit kertas`)
            }
                break
				case 'addadmin':
                   if (!isOwner) return reply('Perintah ini hanya bisa di gunakan oleh Owner iky!', id)
                   i = body.slice(8)
                   adminbotnumber.push(i)
                   fs.writeFileSync('./src/admin.json', JSON.stringify(adminbotnumber))
                   reply('Success Menambahkan Admin Rizky!')
                   break
				case 'wait':
			if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
await limitAdd(sender)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPublic) return reply(mess.only.public)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						sreply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await iky.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							iky.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
							
						}).catch(err => {
							reply(err)
							
						})
					} else {
						tutor = await getBuffer(`https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg`)
						iky.sendMessage(from, tutor, image, {quoted: mek, caption: 'nih tutor mek'})
						reply('foto aja')
					}
					break
					
                    case 'igdl':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?lolhuman=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    iky.sendMessage(from, buffer, ini_type, { quoted: mek })
                    break
                case 'fbdl':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/facebook?lolhuman=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    buffer = await getBuffer(ini_url)
                    iky.sendMessage(from, buffer, video, { quoted: mek })
                    break
                case 'ytplay':
                    query = args.join(' ')
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/ytplay?lolhuman=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    txt = `Title : ${get_info.title}\n`
                    txt += `Uploader : ${get_info.uploader}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    txt += `View : ${get_info.view}\n`
                    txt += `Like : ${get_info.like}\n`
                    txt += `Dislike : ${get_info.dislike}\n`
                    txt += `Description :\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    iky.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    iky.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: tod })
                    get_video = await getBuffer(get_result.video[0].link)
                    iky.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    break
                    case 'kusonime':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/kusonime?lolhuman=${lolhuman}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    iky.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    break
                case 'kusonimesearch':
                    query = args.join(' ')
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/kusonimesearch?lolhuman=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    iky.sendMessage(from, buffer, image, { quoted: lol, caption: txt })
                    break
                case 'otakudesu':
                    ini_url = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/otakudesu?lolhuman=${lolhuman}&url=${ini_url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    break
                case 'otakudesusearch':
                    query = args.join(' ')
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/otakudesusearch?lolhuman=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            info = get_link[x].link_dl[y]
                            txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                            txt += `\`\`\`Size : \`\`\`${info.size}\n`
                            txt += `\`\`\`Link : \`\`\`\n`
                            down_link = info.link_dl
                            for (var z in down_link) {
                                txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    break
				default:
				//if (yto === undefined && esp === undefined) return reply(mess.levelnol)
				if (isGroup) {
						limitsalahcek(sender)
						limitcheck(sender)
						gifop(sender)
						}
				if (budy == 'cekprefix') {
					if (isBanned) return 
                  reply(` Prefix Kurumi Chan   *「  ${prefix} 」* `)
                  
                  }
                  if (budy.includes(`@6282137789313`)) {
			iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./database/audio/Oniichan Notifications.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`@6282387804410`)) {
			
			reply(balop)
                  }
                  if (budy.includes(`haha`)) {
			iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ wkwk.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`wkwk`)) {
			iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ wkwk.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (messagesC.includes("bot")) {
			
			reply(balop)
                 sendPtt(`./database/audio/kurumi.mp3`)
                  }
                  if (messagesC.includes("kurumi")) {
			
			reply(balop)
			sendPtt(`./database/audio/kurumi.mp3`)
                  }
				
				if (budy =='lah') {
				sendPtt(`./database/audio/lah.mp3`)
				}
				if (budy =='Lah') {
				buffer = fs.readFileSync(`./database/audio/lah.mp3`)
				    iky.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
				}
				
                  if (budy.includes(`pale`)) {
					iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ gay.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy =='ff'){
                 iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ gay.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`freefire`)) {
                 iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ gay.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`Free fire`)) {
                 iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ gay.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`Free Fire`)) {
                 iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ gay.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`anjing`)) {
                 iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ anakajg.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (budy == 'P') {
				sendPtt(`./database/audio/Oniichan Notifications.mp3`)
			}
			if (budy == 'p') {
				sendPtt(`./database/audio/Oniichan Notifications.mp3`)
			}
              if (budy.includes(`Trobos`)) {
                    anu = await fetchJson(`https://api.vhtear.com/ytdl?link=https://youtu.be/HAlNGj1iLDI&apikey=${vhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.UrlMp3)
					iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
					}
					if (budy.includes(`anjay`)) {
                    data = await fetchJson(`https://api.vhtear.com/ytmp3?query=dasar%20lo%20anjay%2030%20detik&apikey=${vhtear}`, {method: 'get'})
					la = data.result
					buffer = await getBuffer(la.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek,ptt:true})
					}
					if (budy.includes(`tapi`)) {
                    data = await fetchJson(`https://api.vhtear.com/ytmp3?query=dj%20tapi%20boong%2020%20detik&apikey=${vhtear}`, {method: 'get'})
					la = data.result
					buffer = await getBuffer(la.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek,ptt:true})
					}
					if (budy.includes(`Tapi`)) {
                    data = await fetchJson(`https://api.vhtear.com/ytmp3?query=dj%20tapi%20boong%2020%20detik&apikey=${vhtear}`, {method: 'get'})
					la = data.result
					buffer = await getBuffer(la.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek,ptt:true})
					}
					if (budy.includes(`iri`)) {
                    data = await fetchJson(`https://api.vhtear.com/ytmp3?query=Iri%20bilang%20bos%2030%20detik&apikey=${vhtear}`, {method: 'get'})
					la = data.result
					buffer = await getBuffer(la.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek,ptt:true})
					}
					
					if (budy.includes(`Iri`)) {
                    data = await fetchJson(`https://api.vhtear.com/ytmp3?query=Iri%20bilang%20bos%2030%20detik&apikey=${vhtear}`, {method: 'get'})
					la = data.result
					buffer = await getBuffer(la.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek,ptt:true})
					}
					if (budy.includes(`Anjay`)) {
                    data = await fetchJson(`https://api.vhtear.com/ytmp3?query=dasar%20lo%20anjay%2030%20detik&apikey=${vhtear}`, {method: 'get'})
				 la = data.result
					buffer = await getBuffer(la.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek,ptt:true})
                  }
                  if (budy.includes(`loli`)) {
                    data = await fetchJson(`https://api.vhtear.com/ytmp3?query=fbi%20sound%20effect&apikey=${vhtear}`, {method: 'get'})
				 la = data.result
					buffer = await getBuffer(la.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek,ptt:true})
                  }
                  if (budy.includes(`Loli`)) {
                    data = await fetchJson(`https://api.vhtear.com/ytmp3?query=fbi%20sound%20effect&apikey=${vhtear}`, {method: 'get'})
				 la = data.result
					buffer = await getBuffer(la.mp3)
	iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek,ptt:true})
                  }
                  
                  
                  if (budy.includes(`C4B28739BCBDF9C315D45B978B3C2812`)) {
					if (isBanned) return 
				try {
				    buffer = fs.readFileSync(`./ :v.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ :v.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		

			
	
                  
                  
                  if (budy.includes(`baka`)) {
					if (isBanned) return 
				    anu = await fetchJson(`https://api.vhtear.com/ytdl?link=https://youtu.be/UsKMCrhCSXA&apikey=${vhtear}`, {method: 'get'})

					
					buffer = await getBuffer(anu.result.UrlMp3)

			
		iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
                  }
                  if (budy.includes(`ajg`)) {
                 iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ anakajg.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`Ajg`)) {
                 iky.updatePresence(from, Presence.recording)
                  nyni = fs.readFileSync('./stak/ anakajg.mp3');
                  iky.sendMessage(from, nyni, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.includes(`Anjay`)) {
					if (isBanned) return 
				    anu = await fetchJson(`https://api.vhtear.com/ytdl?link=https://youtu.be/F-aYzHBQqK4&apikey=${vhtear}`, {method: 'get'})

					
					buffer = await getBuffer(anu.result.UrlMp3)

			
		iky.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
                  }
                  if (budy.includes(`#kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
                  }
                  if (budy.includes(`%kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`*kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`!kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`-kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`?kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`/kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`&kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`>kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`<kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  iky.groupLeave(from)
                  }
                  if (budy.includes(`\kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
                  }
                  if (budy.includes(`zkick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
                  }
                  if (budy.includes(`^kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
                  }
                  if (budy.includes(`%kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
                  }
                  if (budy.includes(`~kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
                  }
                  if (budy.includes(`.kick @6282255123081`)) {
                  
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
                  }
                  if (budy.includes(`,kick @6282255123081'`)) {
                 
                  	if (!isGroupAdmins) return
					if (isBanned) return 
                  const groupId = isGroup ? groupMetadata.jid : ''
					members_id = []
					iky.groupLeave(from, groupId)
                  }
                  
                  if (budy == 'aku tag kalian') {
                  	if (isLimit(sender)) return reply(`*maaf ${pushname2} Limit kamu sudah habis hari ini*\n*Jika Ingin Unlimited Limit cukup Membayar 10k/bulan*
*Jika Berminat Bisa Hubungin Nomor Dibawah:*
*wa.me/6282387804410 atau ketik /owner*
*Limit Akan Direset Pada Jam _00:00_*`)
                  	if (!isOwner) return 
                  if (!isGroupAdmins) return reply(mess.only.admin)
					sew = body.slice(7)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`${sew}\n\n\nTagall by~~ *${pushname2}*\n\n\n\n╔══✪〘 Mention All 〙✪══\n╠➥ *Pesan:* `+teks+`╚═〘 Kurumi Chan   〙`, members_id, true)
                  }
                  if (budy == '@verify') {
                  	if (isBanned) return reply(mess.only.benned)    
					iky.updatePresence(from, Presence.composing)
					if (isUser) return reply(`*NOMOR KAMU SUDAH TERVERIFIKASI*\n*JADI TIDAK PERLU MEMVERIFIKASINYA LAGI*`)
						user.push(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						try {
					ppimg = await iky.getProfilePicture(`${sender.split('@')[0]}`)
				} catch {
					ppimg = 'https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg'
				}
				teks = `────「 VERTIFIKASI 」────\n\nPada: \n${week} ${date} \n${time}\n\n\n*Nama:* ${pushname2}\n*Nomor:* wa.me/${sender.split("@")[0]} [ @${sender.split("@")[0]} ]\n\n─────────────────\n\nTerima kasih telah melakukan Verifikasi.\nTotal user terverifikasi : ${user.length}\n\n║▌┃█║▌┃ █║▌┃█┃║▌║\n║▌┃█║▌┃ █║▌┃█┃║▌║\n\n─────「 Kurumi Chan   」─────` 
				buffer = await getBuffer(ppimg)
				iky.sendMessage(from, buffer, image, {caption: teks, contextInfo: {"mentionedJid": [sender]}})
						
                  	}
                  if (budy == 'prefix') {
                  reply(` Prefix Kurumi Chan   Use *「  ${prefix} 」* `)
                  }
                  
                  
                  if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`Kontol`)) {
                  	if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ kontol.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ kontol.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'disitu') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ mana.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mana.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'Disitu') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ mana.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mana.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'disana') {
			if (isBanned) return 
			
                  	try {
				    buffer = fs.readFileSync(`./stik/ mana.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mana.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'Disana') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ mana.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mana.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'situ') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ mana.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mana.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		
		if (budy == 'mana') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ mana.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mana.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'Mana') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ mana.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mana.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		
                  if (budy.includes(`Goblok`)) {
                  	if (isBanned) return 
                  	if (!isGroup) return reply (`sok toxic ajg`)
                  if (!isGroupAdmins) return reply(`*「 HOOH 」*\nKamu telah berkata kasar di grup ini, \n*MAU DIKICK?*`)
                  reply(`Kak jangan toxic 🐦🙏`)
                  }
                  if (budy.includes(`hm`)) {
                  	if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ 2354.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ 2354.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'nice') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ nice.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ nice.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`salken`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ salken.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ salken.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`Salken`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ salken.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ salken.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		
		if (budy.includes(`ngakak`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ ngakak.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ ngakak.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`Ngakak`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ ngakak.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ ngakak.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`@6282255123081`)) {
			reply (balop)
		}
		if (budy.includes(`Hm`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ 2354.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ 2354.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'gitu') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ gitu.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ gitu.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		
		if (budy.includes(`Anjing`)) {
					iky.updatePresence(from, Presence.recording)
                  iky = fs.readFileSync('./stak/ anakajg.mp3');
                  iky.sendMessage(from, iky, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
		
		if (budy == 'Gitu') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ gitu.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ gitu.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == ':v') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./ :v.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ :v.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		
		if (budy == 'kacang') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ kacang.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
     } catch (e) {
                	buffer = fs.readFileSync(`./stik/ kacang.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'Kacang') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ kacang.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ kacang.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`Hentai`)) {
			if (isBanned) return 
			try {
				    buffer = fs.readFileSync(`./stik/ hentai.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ hentai.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
			}
			if (budy.includes(`copet`)) {
				sendPtt(`./lindy/welot.mp3`)
				}
				if (budy.includes(`tarik`)) {
				sendPtt(`./lindy/tarekses.mp3`)
				}
				if (budy.includes(`Tarik`)) {
				sendPtt(`./lindy/tarekses.mp3`)
				}
				if (budy.includes(`pokemon`)) {
				sendPtt(`./lindy/rekonek.mp3`)
				}
				if (budy.includes(`Pokemon`)) {
				sendPtt(`./lindy/rekonek.mp3`)
				}
				
		if (budy.includes(`hentai`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ hentai.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ hentai.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'cek') {
			if (!isAfkOn) return sreply(`Lu belum Afk cokk cok:v`)
				if (isAfkOn) return sreply(`Anda sudah afk \n*${getAfkTime(sender, _afk)}*\n*Alasan:* ${getAfkReason(sender, _afk)}`)
		}
		if (budy.includes(`cantik`)) {
			if (isBanned) return 
			try {
				    buffer = fs.readFileSync(`./stik/ ganteng.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ ganteng.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
			}
			}
			if (budy.includes(`Ganteng`)) {
				if (isBanned) return 
				try {
				    buffer = fs.readFileSync(`./stik/ ganteng.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ ganteng.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
				}
				}
		if (budy.includes(`ganteng`)) {
			if (isBanned) return 
			try {
				    buffer = fs.readFileSync(`./stik/ ganteng.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ ganteng.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
			}
			}
			if (budy.includes(`Cantik`)) {
				if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ ganteng.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ ganteng.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
                  if (budy.includes(`Tolol`)) {
                  	if (isBanned) return 
                  	if (!isGroup) return reply (`sok toxic ajg`)
                  if (!isGroupAdmins) return reply(`*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, \n*MAU DIKICK?*`)
                  reply(`Kak jangan toxic 🐦??`)
                  }
                  if (budy =='sto') {
                  	if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ sto.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ sto.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
                  if (budy.includes(`Memek`)) {
                  	if (isBanned) return 
                  	if (!isGroup) return reply (`sok toxic ajg`)
                  if (!isGroupAdmins) return reply(`*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, \n*MAU DIKICK?*`)
                  reply(`Kak jangan toxic 🐦🙏`)
                  }
                  if (budy.includes(`kontol`)) {
                  	if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ kontol.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ kontol.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		
                  
                  if (budy.includes(`goblok`)) {
                  	if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ kop.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ kop.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		
                  }
                  if (budy.includes(`Goblok`)) {
                  	if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ kop.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ kop.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`bot goblok`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ lu.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ lu.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`Bot Goblok`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ lu.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ lu.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`Bot goblok`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ lu.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ lu.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`Bot Kontol`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ lu.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ lu.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`Bot kontol`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ lu.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ lu.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'bot babi') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ dahlah.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ dahlah.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'bot kontol') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ dahlah.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ dahlah.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'bot gak guna') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ dahlah.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ dahlah.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'ga guna') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ dahlah.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ dahlah.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy == 'bot memek') {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ dahlah.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ dahlah.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`bot kontol`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ lu.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ lu.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
		if (budy.includes(`selamat datang digroup`)) {
			if (isBanned) return 
		try {
				    buffer = fs.readFileSync(`./stik/ mem.webp`)
				    costum(buffer, sticker, tescuk,`Hore mem baru,`)
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mem.webp`)
			costum(buffer, sticker, tescuk,`Hore mem baru,`)
		}
		}
		if (budy.includes(`Selamat Datang Di Group`)) {
			if (isBanned) return 
		try {
				    buffer = fs.readFileSync(`./stik/ mem.webp`)
				    costum(buffer, sticker, tescuk,`Hore mem baru,`)
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mem.webp`)
			costum(buffer, sticker, tescuk,`Hore mem baru,`)
		}
		}
		if (budy.includes(`*SELAMAT DATANG DIGROUP*`)) {
			if (isBanned) return 
		try {
				    buffer = fs.readFileSync(`./stik/ mem.webp`)
				    costum(buffer, sticker, tescuk,`Hore mem baru,`)
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mem.webp`)
			costum(buffer, sticker, tescuk,`Hore mem baru,`)
		}
		}
		if (budy.includes(`SELAMAT DATANG DI GROUP`)) {
			if (isBanned) return 
		try {
				    buffer = fs.readFileSync(`./stik/ mem.webp`)
				    costum(buffer, sticker, tescuk,`Hore mem baru,`)
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ mem.webp`)
			costum(buffer, sticker, tescuk,`Hore mem baru,`)
		}
		}
		if (budy.includes(`🗿`)) {
			if (isBanned) return 
                  	try {
				    buffer = fs.readFileSync(`./stik/ 🗿.webp`)
				    iky.sendMessage(from, buffer, sticker, { quoted: mek})
                } catch (e) {
                	buffer = fs.readFileSync(`./stik/ 🗿.webp`)
			iky.sendMessage(from, buffer, sticker, { quoted: mek})
		}
		}
                  if (budy == 'delete chat') {
                  	if (isBanned) return 
					if (!isOwner) return 
					anu = await iky.chats.all()
					iky.setMaxListeners(25)
					for (let _ of anu) {
						iky.deleteChat(_.jid)
					}
					reply('Sukses delete Semua Chat Bot')
                  	}
                  
                  if (budy.includes(`tolol`)) {
                  	if (!isGroup) return reply (`sok toxic ajg`)
                  if (!isGroupAdmins) return reply(`*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢??𝗗 」*\nKamu telah berkata kasar di grup ini, \n*MAU DIKICK?*`)
                  reply(`Kak jangan toxic 🐦🙏`)
                  }
                  if (budy.includes(`ngentod`)) {
                  	if (!isGroup) return reply (`sok toxic ajg`)
                  
                  if (!isGroupAdmins) return reply(`*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, \n*MAU DIKICK?*`)
                  reply(`Kak jangan toxic 🐦🙏`)
                  }
                  
                  
                  if (budy.includes(`memek`)) {
                  	if (!isGroup) return reply (`sok toxic ajg`)
                  if (!isGroupAdmins) return reply(`*「 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗𝗪𝗢𝗥𝗗 」*\nKamu telah berkata kasar di grup ini, \n*MAU DIKICK?*`)
                  reply(`Kak jangan toxic 🐦🙏`)
                  }
					if (body.startsWith(`${prefix}${command}`)) {
		limitsalah(sender)
						if (isBanned) return 
						if (isPremium) return
						if (isSalah(sender)) return
						
						salahlp(sender)
        
                   
		}
		if (messagesC.includes("yes") ) {
			if (!isYes) return 
			if (!isQuotedText) return reply(`REPLY PESAN BOT`)
			if (isSetuju) return reply(`kamu sudah menyetujui ini dan mohon sabar`)
			yes.push(sender)
						fs.writeFileSync('./src/yes.json', JSON.stringify(yes))
						
			var nomor = mek.participant
                       const meol = `*[YES]*\nYang Setuju : @${nomor.split("@s.whatsapp.net")[0]}\ndi group:\n*${groupName}*\nUsername: *${pushname2}*\nPada Tanggal: ${week},${date}`
					var options = {
                         text: meol,
                         contextInfo: {mentionedJid: [nomor]},
                     }

                
                    iky.sendMessage(`6282387804410@s.whatsapp.net`, options, text, {quoted: mek})
                    iky.sendMessage(from,`berhasil mengirim ke owner dan anda menyetujui`,text ,{quoted: mek})
					}
		if (messagesC.includes("://chat.whatsapp.com/") || budy.includes(`Buka tautan ini untuk bergabung ke grup WhatsApp saya: https://chat.whatsapp.com/`)){
		if (!isGroup) return
		if (!isAntilink) return
		if (!isBotGroupAdmins) return reply(`Untung Gua Bukan Admin, Kalo Jadi Admin Udah Aku Kick Tuh! 😑`)
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		iky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 GROUP LINK DETECTOR 」*\nKamu dikick karena mengirimkan link group lain!\nKamu akan dikick dalam waktu 5detik!`)
		setTimeout( () => {
			iky.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
	}
	if (budy.includes(`anjing`) || budy.includes(`pantek`) || budy.includes(`Anjing`) || budy.includes(`memek`) || budy.includes(`Memek`) || budy.includes(`Kontol`) || budy.includes(`kontol`)){
		if (!isGroup) return
		
		if (!isAntiBadword) return
		if (!isBotGroupAdmins) return reply(`Untung Gua Bukan Admin, Kalo Jadi Admin Udah Aku Kick Tuh! 😑`)
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		iky.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 ANTI BADWORD 」*\nKamu telah berkata KASAR!. Maaf kamu akan di kick dari grup 🙁`)
		setTimeout( () => {
			iky.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
	}
	
		   if (isGroup) {
				if (checkAfkUser(sender, _afk) && isUser) {
				_afk.splice(getAfkPosition(sender, _afk), 1)
				fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
				
					
				await reply(`*${pushname2}* Sudah kembali dari afk, selamat datang kembali~`)
					
					}
				}
				try {
				mend = mek.message.extendedTextMessage.contextInfo.mentionedJid
				for (let ment of mend) {
				if (checkAfkUser(ment, _afk)) {
					const getId = getAfkId(ment, _afk)
					const getReason = getAfkReason(getId, _afk)
					const getTime = getAfkTime(getId, _afk)
					const getDate = getAfkDate(getId, _afk)
					const getWeek = weekGet(getId, _afk)
					const arz = args.join(' ')
					     var nomor = mek.participant
                       const tol = `*[Afk]*\nYang Tag lu : @${nomor.split("@s.whatsapp.net")[0]}\nada yang ngetag lu tuh di group:\n*${groupName}*\nUsername: *${pushname2}*\nPada Tanggal: ${getWeek},${getDate}`
					var options = {
                         text: tol,
                         contextInfo: {mentionedJid: [nomor]},
                     }

                
                    iky.sendMessage(`${getId}`, options, text, {quoted: mek})
                    iky.sendMessage(from,`*@${getId.split("@s.whatsapp.net")[0]}*\n Sttt diam orang nya lagi Afk\n${getTime} WIB\n${getWeek},${getDate}\n\n*Alasan:* ${getReason}`,text ,{quoted: mek, contextInfo: { mentionedJid: [getId] }})
					
				}
			}
				} catch(e) {
				return
			}
			if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[SELF-BOT]', 'green'), 'Any Message ? ', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	}
starts()

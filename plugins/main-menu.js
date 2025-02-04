import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let user = global.db.data.users[userId];
  let name = conn.getName(userId);
  let exp = user.exp || 0;
  let nivel = user.level || 0;
  let coins = user.coin || 0;
  let role = user.role || 'Sin Rango';

  let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg');

  let txt = `
𝚑𝚘𝚕𝚊! 𝚋𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍@ 𝚊𝚕 𝚖𝚎𝚗𝚞 𝚍𝚎 *${botname}*
╭┈ ↷
│ ✧ Cliente » @${userId.split('@')[0]}
│ ✰ ${moneda} » ${coins}
│ ꕥ Experiencia » ${exp.toLocaleString()}
│ ✤ Nivel » ${nivel}
│ 🜲 Rango » ${role}
╰─────────────────

✐  •/• \`Info-Bot\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ ᥎ᥱr ᥱᥣ ᥱs𝗍ᥲძ᥆ ᥱ іᥒ𝖿᥆rmᥲᥴі᥆́ᥒ ძᥱ ᥣᥲ ᑲ᥆𝗍. 

✿ *#help • #menu*
> ➩ Ver la lista de comandos de la Bot.
✿ *#uptime • #runtime*
> ➩ Ver tiempo activo o en linea de la Bot.
✿ *#sc • #script*
> ➩ Link del repositorio oficial de la Bot
✿ *#creador*
> ➩ Contacto del creador de la Bot.
✿ *#links • #grupos*
> ➩ Ver los enlaces oficiales de la Bot.
✿ *#infobot • #infobot*
> ➩ Ver la información completa de la Bot. 
✿ *#p • #ping*
> ➩ Ver la velocidad de respuesta del Bot.
✿ *#reporte • #reportar*
> ➩ Reporta alguna falla o problema de la Bot.
✿ *#sistema • #system*
> ➩ Ver estado del sistema de alojamiento.
✿ *#speed • #speedtest*
> ➩ Ver las estadísticas de velocidad de la Bot.
✿ *#views • #usuarios*
> ➩ Ver la cantidad de usuarios registrados en el sistema.
✿ *#funciones • #totalfunciones*
> ➩ Ver todas las funciones de la Bot.
✿ *#ds • #fixmsgespera*
> ➩ Eliminar archivos de sesión innecesarios.

 ✐  •/• \`Buscadores\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ rᥱᥲᥣіzᥲr ᑲᥙ́s𝗊ᥙᥱძᥲs ᥱᥒ ძіs𝗍іᥒ𝗍ᥲs ⍴ᥣᥲ𝗍ᥲ𝖿᥆rmᥲs.

✿ *#tiktoksearch • #tiktoks*
> ➩ Buscador de videos de tiktok.
✿ *#tweetposts*
> ➩ Buscador de posts de Twitter/X.
✿ *#ytsearch • #yts*
> ➩ Realiza búsquedas de Youtube.
✿ *#githubsearch*
> ➩ Buscador de usuarios de GitHub.
✿ *#cuevana • #cuevanasearch*
> ➩ Buscador de películas/series por Cuevana.
✿ *#pin • #pinterest*
> ➩ Buscador de imagenes de Pinterest.
✿ *#imagen • #image*
> ➩ buscador de imagenes de Google.
✿ *#animesearch • #animess*
> ➩ Buscador de animes de tioanime.
✿ *#animei • #animeinfo*
> ➩ Buscador de capítulos de #animesearch.
✿ *#infoanime*
> ➩ Buscador de información de anime/manga.
✿ *#xnxxsearch • #xnxxs*
> ➩ Buscador de vídeos de Xnxx.
✿ *#xvsearch • #xvideossearch*
> ➩ Buscador de vídeos de Xvideos.
✿ *#pornhubsearch • #phsearch*
> ➩ Buscador de videos de Pornhub.
✿ *#npmjs*
> ➩ Buscandor de npmjs.

✐  •/• \`Descargas\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ძᥱsᥴᥲrgᥲs ⍴ᥲrᥲ ᥎ᥲrі᥆s ᥲrᥴһі᥎᥆s.

✿ *#tiktok • #tt*
> ➩ Descarga videos de TikTok.
✿ *#mediafire • #mf*
> ➩ Descargar un archivo de MediaFire.
✿ *#pinvid • #pinvideo* + [enlacé]
> ➩ Descargar vídeos de Pinterest. 
✿ *#mega • #mg* + [enlacé]
> ➩ Descargar un archivo de MEGA.
✿ *#play • #play2*
> ➩ Descarga música/video de YouTube.
✿ *#ytmp3 • #ytmp4*
> ➩ Descarga música/video de YouTube mediante url.
✿ *#fb • #facebook*
> ➩ Descarga videos de Facebook.
✿ *#twitter • #x* + [Link]
> ➩ Descargar un video de Twitter/X
✿ *#ig • #instagram*
> ➩ Descarga contenido de Instagram.
✿ *#tts • #tiktoks* + [busqueda]
> ➩ Buscar videos de tiktok 
✿ *#terabox • #tb* + [enlace]
> ➩ Descargar archivos por Terabox.
✿ *#gdrive • #drive* + [enlace]
> ➩ Descargar archivos por Google Drive.
✿ *#ttimg • #ttmp3* + <url>
> ➩ Descarga fotos/audios de tiktok. 
✿ *#gitclone* + <url> 
> ➩ Descarga un repositorio de github.
✿ *#xvideosdl*
> ➩ Descarga videos porno de (Xvideos). 
✿ *#xnxxdl*
> ➩ Descarga videos porno de (xnxx).
✿ *#tiktokrandom • #ttrandom*
> ➩ Descarga un video aleatorio de tiktok.
✿ *#npmdl • #npmdownloader*
> ➩ Descarga paquetes de NPMJs.
✿ *#animelinks • #animedl*
> ➩ Descarga Links disponibles de descargas.

✐  •/• \`Economia-rpg\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ᥱᥴ᥆ᥒ᥆mі́ᥲ ᥡ 𝖿ᥲᥒ𝗍ᥲsі́ᥲ ⍴ᥲrᥲ gᥲᥒᥲr ძіᥒᥱr᥆ ᥡ ᥆𝗍r᥆s rᥱᥴᥙrs᥆s.

ᰔᩚ *#w • #work • #trabajar*
> ✦ Trabaja para ganar ${moneda}.
ᰔᩚ *#slut • #protituirse*
> ✦ Trabaja como prostituta y gana ${moneda}.
ᰔᩚ *#cf • #suerte*
> ✦ Apuesta tus ${moneda} a cara o cruz.
ᰔᩚ *#crime • #crimen*
> ✦ Trabaja como ladrón para ganar ${moneda}.
ᰔᩚ *#ruleta • #roulette • #rt*
> ✦ Apuesta ${moneda} al color rojo o negro.
ᰔᩚ *#casino • #apostar*
> ✦ Apuesta tus ${moneda} en el casino.
ᰔᩚ *#slot*
> ✦ Apuesta tus ${moneda} en la ruleta y prueba tu suerte.
ᰔᩚ *#cartera • #wallet*
> ✦ Ver tus ${moneda} en la cartera.
ᰔᩚ *#banco • #bank*
> ✦ Ver tus ${moneda} en el banco.
ᰔᩚ *#deposit • #depositar • #d*
> ✦ Deposita tus ${moneda} al banco.
ᰔᩚ *#with • #retirar • #withdraw*
> ✦ Retira tus ${moneda} del banco.
ᰔᩚ *#transfer • #pay*
> ✦ Transfiere ${moneda} o XP a otros usuarios.
ᰔᩚ *#miming • #minar • #mine*
> ✦ Trabaja como minero y recolecta recursos.
ᰔᩚ *#buyall • #buy*
> ✦ Compra ${moneda} con tu XP.
ᰔᩚ *#daily • #diario*
> ✦ Reclama tu recompensa diaria.
ᰔᩚ *#cofre*
> ✦ Reclama un cofre diario lleno de recursos.
ᰔᩚ *#weekly • #semanal*
> ✦ Reclama tu regalo semanal.
ᰔᩚ *#monthly • #mensual*
> ✦ Reclama tu recompensa mensual.
ᰔᩚ *#steal • #robar • #rob*
> ✦ Intenta robarle ${moneda} a alguien.
ᰔᩚ *#robarxp • #robxp*
> ✦ Intenta robar XP a un usuario.
ᰔᩚ *#eboard • #baltop*
> ✦ Ver el ranking de usuarios con más ${moneda}.
ᰔᩚ *#aventura • #adventure*
> ✦ Aventúrate en un nuevo reino y recolecta recursos.
ᰔᩚ *#curar • #heal*
> ✦ Cura tu salud para volverte aventurar.
ᰔᩚ *#cazar • #hunt • #berburu*
> ✦ Aventúrate en una caza de animales.
ᰔᩚ *#inv • #inventario*
> ✦ Ver tu inventario con todos tus ítems.
ᰔᩚ *#mazmorra • #explorar*
> ✦ Explorar mazmorras para ganar ${moneda}.
ᰔᩚ *#halloween*
> ✦ Reclama tu dulce o truco (Solo en Halloween).
ᰔᩚ *#christmas • #navidad*
> ✦ Reclama tu regalo navideño (Solo en Navidad).

✐  •/• \`Gacha-rpg\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ gᥲᥴһᥲ ⍴ᥲrᥲ rᥱᥴᥣᥲmᥲr ᥡ ᥴ᥆ᥣᥱᥴᥴі᥆́ᥒᥲr ⍴ᥱrs᥆ᥒᥲȷᥱs.

✿ *#rollwaifu • #rw • #roll*
> ➩ Waifu o husbando aleatorio.
✿  *#claim • #c • #reclamar*
> ➩ Reclamar un personaje.
✿ *#harem • #waifus • #claims*
> ➩ Ver tus personajes reclamados.
✿ *#charimage • #waifuimage • #wimage* 
> ➩ Ver una imagen aleatoria de un personaje.
✿ *#charinfo • #winfo • #waifuinfo*
> ➩ Ver información de un personaje.
✿ *#givechar • #givewaifu • #regalar*
> ➩ Regalar un personaje a otro usuario.
✿ *#vote • #votar*
> ➩ Votar por un personaje para subir su valor.
✿ *#waifusboard • #waifustop • #topwaifus*
> ➩ Ver el top de personajes con mayor valor.

✐  •/• \`Games\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ ȷᥙgᥲr ᥴ᥆ᥒ𝗍rᥲ ᥣᥲ ᑲ᥆𝗍 ᥆ ᥴ᥆ᥒ 𝗍ᥙs ᥲmіg᥆s.

✿ *#ppt*
> ➩ Apuesta xp contra la bot.
✿ *#pvp • #suit*
> ➩ Comienza un pvp contra otro usuario.
✿ *#ahorcado*
> ➩ Juega al juego ahorcado y gana exp.
✿ *#buscarpalabra • #sopa*
> ➩ Encuentra la palabra oculta en el juego sopa de letras.

✐  •/• \`Stickers\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ⍴ᥲrᥲ ᥴrᥱᥲᥴі᥆ᥒᥱs ძᥱ s𝗍іᥴkᥱrs ᥱ𝗍ᥴ.

✿ *#sticker • #s*
> ➩ Crea stickers de (imagen/video)
✿ *#pfp • #getpic*
> ➩ Obtén la foto de perfil de un usuario.
✿ *#qc*
> ➩ Crea stickers con texto o de un usuario.
✿ *#toimg • #img*
> ➩ Convierte stickers en imagen.
✿ *#brat*︎ 
> ➩ Crea stickers con texto.
✿ *#emojimix*
> ➩ Fuciona 2 emojis para crear un sticker.
✿ *#wm*
> ➩ Cambia el nombre de los stickers.

✐  •/• \`Herramientas\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ һᥱrrᥲmіᥱᥒ𝗍ᥲs ᥴ᥆ᥒ mᥙᥴһᥲs 𝖿ᥙᥒᥴі᥆ᥒᥱs.

ᰔᩚ *#calcular • #calcular • #cal*
> ✦ Calcular todo tipo de ecuaciones.
ᰔᩚ *#tiempo • #clima*
> ✦ Ver el clima de un pais.
ᰔᩚ *#horario*
> ✦ Ver el horario global de los países.
ᰔᩚ *#fake • #fakereply*
> ✦ Crea un mensaje falso de un usuario.
ᰔᩚ *#enhance • #remini • #hd*
> ✦ Mejora la calidad de una imagen.
ᰔᩚ *#letra*
> ✦ Cambia la fuente de las letras.
ᰔᩚ *#read • #readviewonce • #ver*
> ✦ Ver imágenes de una sola vista.
ᰔᩚ *#spamwa • #spam*
> ✦ Envia spam aun usuario.
ᰔᩚ *#ss • #ssweb*
> ✦ Ver el estado de una página web.
ᰔᩚ *#length • #tamaño*
> ✦ Cambia el tamaño de imágenes y vídeos.
ᰔᩚ *#say • #decir* + [texto]
> ✦ Repetir un mensaje.
ᰔᩚ *#todoc • #toducument*
> ✦ Crea documentos de (audio, imágenes y vídeos).
ᰔᩚ *#translate • #traducir • #trad*
> ✦ Traduce palabras en otros idiomas.

✐  •/• \`Perfil\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ ⍴ᥱr𝖿іᥣ ⍴ᥲrᥲ ᥎ᥱr, ᥴ᥆ᥒ𝖿іgᥙrᥲr ᥡ ᥴ᥆m⍴r᥆ᑲᥲr ᥱs𝗍ᥲძ᥆s ძᥱ 𝗍ᥙ ⍴ᥱr𝖿іᥣ.

ᰔᩚ *#reg • #verificar • #register*
> ✦ Registra tu nombre y edad en el bot.
ᰔᩚ *#unreg*
> ✦ Elimina tu registro del bot.
ᰔᩚ *#profile*
> ✦ Muestra tu perfil de usuario.
ᰔᩚ *#setgenre • #setgenero*
> ✦ Establece tu género en el perfil del bot.
ᰔᩚ *#delgenre • #delgenero*
> ✦ Elimina tu género del perfil del bot.
ᰔᩚ *#setbirth • #setnacimiento*
> ✦ Establece tu fecha de nacimiento en el perfil del bot.
ᰔᩚ *#delbirth • #delnacimiento*
> ✦ Elimina tu fecha de nacimiento del perfil del bot.
ᰔᩚ *#setdescription • #setdesc*
> ✦ Establece una descripción en tu perfil del bot.
ᰔᩚ *#deldescription • #deldesc*
> ✦ Elimina la descripción de tu perfil del bot.
ᰔᩚ *#lb • #lboard* + <Paginá>
> ✦ Top de usuarios con más (experiencia y nivel).
ᰔᩚ *#level • #lvl* + <@Mencion>
> ✦ Ver tu nivel y experiencia actual.
ᰔᩚ *#comprarpremium • #premium*
> ✦ Compra un pase premium para usar el bot sin límites.
ᰔᩚ *#confesiones • #confesar*
> ✦ Confiesa tus sentimientos a alguien de manera anonima.

✐  •/• \`Grupos\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ grᥙ⍴᥆s ⍴ᥲrᥲ ᥙᥒᥲ mᥱȷ᥆r gᥱs𝗍і᥆́ᥒ ძᥱ ᥱᥣᥣ᥆s.

ᰔᩚ *#config • #on*
> ✦ Ver opciones de configuración de grupos.
ᰔᩚ *#hidetag*
> ✦ Envia un mensaje mencionando a todos los usuarios
ᰔᩚ *#gp • #infogrupo*
> ✦  Ver la Informacion del grupo.
ᰔᩚ *#linea • #listonline*
> ✦ Ver la lista de los usuarios en linea.
ᰔᩚ *#link*
> ✦ El bot envia el link del grupo.
ᰔᩚ *#admins • #admin*
> ✦ Mencionar a los admins para solicitar ayuda.
ᰔᩚ *#restablecer • #revoke*
> ✦ Restablecer el enlace del grupo.
ᰔᩚ *#grupo • #group* [open / abrir]
> ✦ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
ᰔᩚ *#grupo • #gruop* [close / cerrar]
> ✦ Cambia ajustes del grupo para que solo los administradores envien mensaje.
ᰔᩚ *#kick* [número / mension]
> ✦ Elimina un usuario de un grupo.
ᰔᩚ *#add • #añadir • #agregar* [número]
> ✦ Invita a un usuario a tu grupo.
ᰔᩚ *#promote* [mension / etiquetar]
> ✦ El bot dara administrador al usuario mencionando.
ᰔᩚ *#demote* [mension / etiquetar]
> ✦ El bot quitara administrador al usuario mencionando.
ᰔᩚ *#gpbanner • #groupimg*
> ✦ Cambiar la imagen del grupo.
ᰔᩚ *#gpname • #groupname*
> ✦ Cambiar el nombre del grupo.
ᰔᩚ *#gpdesc • #groupdesc*
> ✦ Cambiar la descripción del grupo.
ᰔᩚ *#advertir • #warn • #warning*
> ✦ Darle una advertencia aún usuario.
ᰔᩚ ︎*#unwarn • #delwarn*
> ✦ Quitar advertencias.
ᰔᩚ *#advlist • #listadv*
> ✦ Ver lista de usuarios advertidos.
ᰔᩚ *#banchat*
> ✦ Banear el Bot en un chat o grupo.
ᰔᩚ *#unbanchat*
> ✦ Desbanear el Bot del chat o grupo.
ᰔᩚ *#mute* [mension / etiquetar]
> ✦ El bot elimina los mensajes del usuario.
ᰔᩚ *#unmute* [mension / etiquetar]
> ✦ El bot deja de eliminar los mensajes del usuario.
ᰔᩚ *#encuesta • #poll*
> ✦ Crea una encuesta.
ᰔᩚ *#delete • #del*
> ✦ Elimina mensaje de otros usuarios.
ᰔᩚ *#fantasmas*
> ✦ Ver lista de inactivos del grupo.
ᰔᩚ *#kickfantasmas*
> ✦ Elimina a los inactivos del grupo.
ᰔᩚ *#invocar • #tagall • #todos*
> ✦ Invoca a todos los usuarios de un grupo.
ᰔᩚ *#setemoji • #setemo*
> ✦ Cambia el emoji que se usa en la invitación de usuarios.
ᰔᩚ *#listnum • #kicknum*
> ✦ Elimine a usuario por el prefijo de país.

✐  •/• \`Anime\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ძᥱ rᥱᥲᥴᥴі᥆ᥒᥱs ძᥱ ᥲᥒіmᥱ.

ᰔᩚ *#angry • #enojado* + <mencion>
> ✦ Estar enojado
ᰔᩚ *#bite* + <mencion>
> ✦ Muerde a alguien
ᰔᩚ *#bleh* + <mencion>
> ✦ Sacar la lengua
ᰔᩚ *#blush* + <mencion>
> ✦ Sonrojarte
ᰔᩚ *#bored • #aburrido* + <mencion>
> ✦ Estar aburrido
ᰔᩚ *#cry* + <mencion>
> ✦ Llorar por algo o alguien
ᰔᩚ *#cuddle* + <mencion>
> ✦ Acurrucarse
ᰔᩚ *#dance* + <mencion>
> ✦ Sacate los pasitos prohíbidos
ᰔᩚ *#drunk* + <mencion>
> ✦ Estar borracho
ᰔᩚ *#eat • #comer* + <mencion>
> ✦ Comer algo delicioso
ᰔᩚ *#facepalm* + <mencion>
> ✦ Darte una palmada en la cara
ᰔᩚ *#happy • #feliz* + <mencion>
> ✦ Salta de felicidad
ᰔᩚ *#hug* + <mencion>
> ✦ Dar un abrazo
ᰔᩚ *#impregnate • #preg* + <mencion>
> ✦ Embarazar a alguien
ᰔᩚ *#kill* + <mencion>
> ✦ Toma tu arma y mata a alguien
ᰔᩚ *#kiss • #besar* • #kiss2 + <mencion>
> ✦ Dar un beso
ᰔᩚ *#laugh* + <mencion>
> ✦ Reírte de algo o alguien
ᰔᩚ *#lick* + <mencion>
> ✦ Lamer a alguien
ᰔᩚ *#love • #amor* + <mencion>
> ✦ Sentirse enamorado
ᰔᩚ *#pat* + <mencion>
> ✦ Acaricia a alguien
ᰔᩚ *#poke* + <mencion>
> ✦ Picar a alguien
ᰔᩚ *#pout* + <mencion>
> ✦ Hacer pucheros
ᰔᩚ *#punch* + <mencion>
> ✦ Dar un puñetazo
ᰔᩚ *#run* + <mencion>
> ✦ Correr
ᰔᩚ *#sad • #triste* + <mencion>
> ✦ Expresar tristeza
ᰔᩚ *#scared* + <mencion>
> ✦ Estar asustado
ᰔᩚ *#seduce* + <mencion>
> ✦ Seducir a alguien
ᰔᩚ *#shy • #timido* + <mencion>
> ✦ Sentir timidez
ᰔᩚ *#slap* + <mencion>
> ✦ Dar una bofetada
ᰔᩚ *#dias • #days*
> ✦ Darle los buenos días a alguien 
ᰔᩚ *#noches • #nights*
> ✦ Darle las buenas noches a alguien 
ᰔᩚ *#sleep* + <mencion>
> ✦ Tumbarte a dormir
ᰔᩚ *#smoke* + <mencion>
> ✦ Fumar
ᰔᩚ *#think* + <mencion>
> ✦ Pensar en algo 

✐  •/• \`NSFW\` •/•

☄︎ ᥴ᥆mᥲᥒძ᥆s ᥒs𝖿ᥕ (ᥴ᥆ᥒ𝗍ᥱᥒіძ᥆ ⍴ᥲrᥲ ᥲძᥙᥣ𝗍᥆s). 

ᰔᩚ *#anal* + <mencion>
> ✦ Hacer un anal
ᰔᩚ *#waifu*
> ✦ Buscá una waifu aleatorio.
ᰔᩚ *#bath* + <mencion>
> ✦ Bañarse
ᰔᩚ *#blowjob • #mamada • #bj* + <mencion>
> ✦ Dar una mamada
ᰔᩚ *#boobjob* + <mencion>
> ✦ Hacer una rusa
ᰔᩚ *#cum* + <mencion>
> ✦ Venirse en alguien.
ᰔᩚ *#fap* + <mencion>
> ✦ Hacerse una paja
ᰔᩚ *#ppcouple • #ppcp*
> ✦ Genera imagenes para amistades o parejas.
ᰔᩚ *#footjob* + <mencion>
> ✦ Hacer una paja con los pies
ᰔᩚ *#fuck • #coger • #fuck2* + <mencion>
> ✦ Follarte a alguien
ᰔᩚ *#cafe • #coffe*
> ✦ Tomate un cafecito con alguien
ᰔᩚ *#violar • #perra + <mencion>
> ✦ Viola a alguien
ᰔᩚ *#grabboobs* + <mencion>
> ✦ Agarrrar tetas
ᰔᩚ *#grop* + <mencion>
> ✦ Manosear a alguien
ᰔᩚ *#lickpussy* + <mencion>
> ✦ Lamer un coño
ᰔᩚ *#rule34 • #r34* + [Tags]
> ✦ Buscar imagenes en Rule34
ᰔᩚ *#sixnine • #69* + <mencion>
> ✦ Haz un 69 con alguien
ᰔᩚ *#spank • #nalgada* + <mencion>
> ✦ Dar una nalgada
ᰔᩚ *#suckboobs* + <mencion>
> ✦ Chupar tetas
ᰔᩚ *#undress • #encuerar* + <mencion>
> ✦ Desnudar a alguien
ᰔᩚ *#yuri • #tijeras* + <mencion>
> ✦ Hacer tijeras.
✿ *#hot* + <mencion>
> ➩ Excitarte por alguien.
  `.trim();


  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
             thumbnailurl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help', 'ayuda'];

export default handler;
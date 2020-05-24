# <center>Rocket.Chat</center>

A Rocket.Chat egy csapatoknak, közösségeknek szánt, nyílt forráskódú üzenetküldő alkalmazás. Leginkább a Discord, Slack, Mattermost és Microsoft Teams programokhoz hasonlítható. Az újabb verzióiban már weboldalon elhelyezhető chat widget támogatást is kapott, amin keresztül bárki becsatlakozhat a chatszerverre és üzeneteket küldhet.

<p align="center">
    <img src="images\rocket1.png" width="800" />
</p>

### Előnyök

- Saját szerveren is hostolható
- Nyílt forráskódú
- Elérhető hozzá mobil- és asztali kliens is

### Hátrányok

- Inkább általános chatprogramként használható, a support chat funkciók még gyerekcipőben járnak

<p>&nbsp;</p>

## Telepítés lépései

_A következő lépések egy Ubuntu 18.04 LTS rendszert futtató virtuális gépen lettek tesztelve. Valószínűleg más linux alapú rendszeren is működnek, de eltérések előfordulhatnak. A leírás feltételezi, hogy az ismertetett parancsokhoz kapcsolódó csomagok telepítve vannak._

- A Rocket.Chat docker-compose konfigurációja letölhető az alábbi paranccsal:

      curl -L https://raw.githubusercontent.com/RocketChat/Rocket.Chat/develop/docker-compose.yml -o docker-compose.yml

  A letöltött fájlban a **ROOT_URL**-t írjuk át arra az IP címre, vagy URL-re amin a szerver lokális hálózaton kívül is elérhető

- Először indítsuk el a MongoDB szervert:

      docker-compose up -d mongo

- Majd inicializáljuk (csak első indításkor kell lefuttatni):

      docker-compose up -d mongo-init-replica

- Ha már fut a MongoDB, indítható a RocketChat szerver is:

      docker-compose up -d rocketchat

- A chat felület a beállított **ROOT_URL**-en érhető el:

<p align="center">
    <img src="images\rocket2.png" width="800" />
</p>

- A chat widget engedélyezéséhez az Administration/Settings/Omnichannel menüben az Omnichat enabled opciót be kell kapcsolni
- Az Omnichannel/Livechat Installation menüben kimásolható a HTML kód, amit a weboldal HTML-jébe beillesztve meg is jelenik a chat widget az oldalon

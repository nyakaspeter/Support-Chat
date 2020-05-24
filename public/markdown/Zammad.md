# <center>Zammad</center>

A Zammad Community Edition egy ingyenes, nyílt forráskódú ügyfélszolgálati és hibajegykezelő rendszer. A Live Helper Chat-hez hasonló, de mindenképp egy kiforrottabb szoftver képét festi. Nagy hiányossága azonban, hogy nem támogat offline működést.

<p align="center">
    <img src="images\zammad1.png" width="800" />
</p>

### Előnyök

- Saját szerveren is hostolható
- Nyílt forráskódú
- Letisztult, kellemes dizájn
- Facebook és Telegram integráció

### Hátrányok

- Nem támogat offline módot, azaz csak akkor fogadhatók üzenetek, ha van ügyintéző bejelentkezve
- A chat widget jól néz ki, viszont csak plain text üzenetek küldhetők rajta

<p>&nbsp;</p>

## Telepítés lépései

_A következő lépések egy Ubuntu 18.04 LTS rendszert futtató virtuális gépen lettek tesztelve. Valószínűleg más linux alapú rendszeren is működnek, de eltérések előfordulhatnak. A leírás feltételezi, hogy az ismertetett parancsokhoz kapcsolódó csomagok telepítve vannak._

- A következő paranccsal töltsük le a docker konténerek létrehozásához szükséges fájlokat:

      git clone https://github.com/zammad/zammad-docker-compose.git

- Lépjünk be a leklónozott repóba:

      cd zammad-docker-compose

- Futtassuk le a következő parancsot az Elasticsearch megfelelő működéséhez:

      sysctl -w vm.max_map_count=262144

- Ha már figyel valamilyen alkalmazás a szerver 80-as portján akkor nyissuk meg a **docker-compose.override.yml**-t. A fájl tartalma a következő:

      version: '2'
      services:

        zammad-nginx:
          ports:
            - "80:80"

  A ports-nál az első számot írjuk át a használni kívánt (szabad) portra.

- Ezután a következő paranccsal indítható a szükséges konténerek inicializálása:

      docker-compose up -d

- A parancs lefutását követően a beállított porton érhető el a konfigurációs felület
- A kezdeti beállításokat követően beléphetünk az admin felületre:

  <p align="center">
      <img src="images\zammad2.png" width="800" />
  </p>

- A chat widget beállításai az Administration/Channels/Chat menüben érhetők el. Innét másolható ki a HTML kód is, amit a weboldal HTML-jébe kell beilleszteni. A kimásolt kódot még ki kell egészíteni a **host** mező websocket címének beállításával a következő módon:

       <script src="https://**szerver domain és port címe**/assets/chat/chat.min.js"></script>
       <script>
       $(function() {
         new ZammadChat({
           background: 'rgb(49,157,98)',
           fontSize: '12px',
           flat: true,
           chatId: 1,
           host: 'wss://**szerver domain és port címe**/ws'
         });
       });
       </script>

- Ahhoz, hogy a chat ablak működhessen még a jQuery-t is be kell hivatkozni a weboldalunkon, a következő kódrészlettel:

      <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

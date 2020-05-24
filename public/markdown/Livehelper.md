# <center>Live Helper Chat</center>

A Live Helper Chat egy kifejezetten support chat igények kielégítésére létrehozott, nyílt forráskódú alkalmazás. Pénzért hostolható a készítők szerverein, azonban lehetőség van saját gépen is futtatni, ilyenkor a függőségek (jelen esetben egy adatbázisszerver) hostolásáról is nekünk kell gondoskodni.

<p align="center">
    <img src="images\livehelper1.png" width="800" />
</p>

### Előnyök

- Saját szerveren is hostolható
- Nyílt forráskódú
- Használata teljes mértékben ingyenes

### Hátrányok

- Átláthatatlan admin dashboard
- Elavult dizájn

<p>&nbsp;</p>

## Telepítés lépései

_A következő lépések egy Ubuntu 18.04 LTS rendszert futtató virtuális gépen lettek tesztelve. Valószínűleg más linux alapú rendszeren is működnek, de eltérések előfordulhatnak. A leírás feltételezi, hogy az ismertetett parancsokhoz kapcsolódó csomagok telepítve vannak._

- A következő paranccsal töltsük le a docker konténerek létrehozásához szükséges fájlokat:

      git clone https://github.com/cthulhu666/docker-livehelperchat.git

- Lépjünk be a leklónozott repóba:

      cd docker-livehelperchat

- Hozzunk létre egy környezeti konfigurációs fájlt és nyissuk meg:

      nano .env

- A fájl tartalma a következő legyen (a csillagozott helyekre tetszőleges string kerülhet):

      MYSQL_DATABASE=*adatbázis neve*
      MYSQL_USER=*adatbázis felhasználó neve*
      MYSQL_PASSWORD=*adatbázis jelszava*
      MYSQL_RANDOM_ROOT_PASSWORD=true

- Ezután a következő paranccsal elindíthatók az alkalmazáshoz tartozó konténerek:

      docker-compose up -d

- Ha lefutott a parancs, a http://localhost:8080/ címen elérhetővé válik a Live Helper Chat konfigurációs felülete. Elképzelhető, hogy 10 percet is kell várni, mire elérhetővé válik az oldal.
- A megjelenő varázslóban össze kell kötni a Live Helper Chatet a MySQL adatbázissal, ehhez adjuk meg a következő adatokat:
  - **Username:** _a konfigfájlban beállított felhasználónév_
  - **Password:** _a konfigfájlban beállított jelszó_
  - **Host:** db
  - **Port:** 3306
  - **Database name:** _a konfigfájlban beállított adatbázis név_
- A többi beállítást végezzük el igény szerint. A varázsló végén ismét hosszabb várakozás következik.
- Az inicializálás után a http://localhost:8080/index.php/site_admin/user/login címen, bejelentkezést követően érhető el az admin felület:

<p align="center">
    <img src="images\livehelper2.png" width="800" />
</p>

- A Settings/Embed Code/Live help embed code/Widget embed code menüben szabható testre a chat ablak és itt található a HTML kód, amit a weboldal HTML-jébe beillesztve meg is jelenik a chat widget az oldalon

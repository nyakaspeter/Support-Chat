<p align="center">
    <img src="images\crm.jpg" width="500"/>
</p>

# <center>Support Chat szolgáltatások</center>

A legtöbb live support chat szolgáltatás a következő funkciókkal rendelkezik:

- Saját weboldalunkra elhelyezhető, testreszabható chat widget, ami tipikusan az egyik sarokban jelenik meg. Ezen keresztül történhet az üzenetváltás az oldal látogatói és az ügyfélszolgálati ügynökök között.
- Webes admin felület, ahol a support ügynökök menedzselhetik a megkereséseket és válaszolhatnak a beérkező üzenetekre.
- Elérhető időszak beállítása, amikor megjelenik a chat widget az oldalon. Az ezen kívüleső időszakban a widget elrejtése, vagy az üzenetek további fogadása későbbi feldolgozásra.
- Beállítható, hogy a chat widget csak bizonyos lapokon, vagy bizonyos események hatására jelenjen meg.
- Chat történet megtartása és a látogatók megjegyzése, valamint alapvető analitikai eszközök.

Az oldalon bemutatott szolgáltatások két kategóriára oszthatók:

- **Hosted szolgáltatások:** Ezek valamilyen külső cég termékei, melyeket regisztráció útján lehet használni. Nem kell a szerverek beüzemelésével és karbantartásával foglalkozni, egyből használatba vehetők. Többnyire csak egy rövid scriptet kell elhelyezni weboldalunk HTML-jében és össze is kötöttük az oldalt az adott chatszolgáltatással. Jellemzően kiforrottabb, felhasználóbarátabb élményt nyújtanak, mint a teljesen ingyenes megoldások. Többféle fizetős csomaggal rendelkeznek, de általában _rendelkezésre állnak ingyenes opciók is, az oldal csak ezeket veszi figyelembe._ Az ingyenes csomagok különféle korlátozásokat jelentenek a felhasználásra nézve. Van ahol a felvehető support ügynökök száma korlátozott, de előfordulhat, hogy havi látogatószámhoz kötik a csomagok határait. Vannak olyan szolgáltatások is, melyek korlátlan ingyenes felhasználást engedélyeznek és más forrásokból szerzik a bevételt (pl. fizetős addonok). Mivel a szerverek nem saját infrastruktúrában futnak, a felhasználói adatok biztonsága is a szolgáltató vállalatra van bízva.
- **Self-hosted programok:** Ingyenesen elérhető, általában nyílt forráskódú szoftverek, melyeket egy-egy cég az open-source közösség támogatásával fejleszt. Használatba vételükhöz saját infrastruktúrát kell kialakítani (hardver biztosítása, szerverek felhúzása), bár ezt pénzért jellemzően az adott szoftver mögött álló vállalat is biztosítja. Amennyiben mi magunk hostoljuk ezeket az alkalmazásokat, a felhasználói adatok teljes mértékben a mi kezünkben lehetnek, a third-party megoldásokkal szemben. Az elérhető funkciók száma általában kevesebb, és kevésbé kiforrottak, azonban korlátozások nélkül használhatjuk őket. Az ismertetett programokat _docker_ virtualizációs környezetben futtattam és a _docker-compose_ eszközt használtam a gyors beüzemelés érdekében. A telepítési leírásokban ennek használata olvasható.

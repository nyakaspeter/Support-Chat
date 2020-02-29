import React from "react";
import { MDBContainer, MDBMask, MDBRow, MDBCol } from "mdbreact";
import "./Home.css";

export const Home = () => (
  <div>
    <div className="bg">
      <MDBMask
        overlay="black-strong"
        className="flex-center justify-content-center align-items-center gradient"
      >
        <MDBContainer className="px-md-3 px-sm-0">
          <MDBRow>
            <MDBCol md="12" className="mb-4 white-text text-center">
              <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                Support Chat
              </h3>
              <hr className="hr-light my-4 w-75" />
              <h4 className="subtext-header mt-2 mb-4">
                Ez az oldal ingyenesen elérhető support-chat megoldások
                tesztelésére jött létre
              </h4>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    </div>
    <MDBContainer className="text-center my-5">
      <h2>A téma leírása</h2>
      <p align="justify">
        Webalkalmazásokban egyre gyakoribb az élőben elérhető chates támogatás,
        ennek segítségével a felhasználók gyorsan kapcsolatba léphetnek az
        ügyfélszolgálattal, és nem kell formokat kitölteniük, telefonálniuk vagy
        emailt írniuk. Az ügyfélszolgálat számára is előnyös ez a megoldás, mert
        a telefonos ügyfélszolgálat egy munkatársat teljesen lefoglal, azonban a
        chates megoldással a munkatárs egyszerre kommunikálhat 2-3 ügyféllel is.
        Pl. elektronikai webshopokban is láthatunk manapság ilyen chatet, ahol
        "kérdezd a szakit" jelleggel a felhasználó gyorsan segítséget kaphat.
      </p>
      <p align="justify">
        A témában a hallgató feladata megvizsgálni, milyen elérhető kész vagy
        félkész megoldások vannak a problémára (pl. https://livehelperchat.com/
        illetve https://rocket.chat/), amelyek integrálhatók egy
        webalkalmazásba, majd egyet mélyebben megismerve egy egyszerű
        webalkalmazást kell készíteni, amelyben működik ilyen chatfunkció.
      </p>
    </MDBContainer>
  </div>
);

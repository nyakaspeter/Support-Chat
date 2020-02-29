import React from "react";
import { PostScribe } from "react-postscribe";
import { MDBContainer } from "mdbreact";

export const Crisp = () => (
  <div>
    <PostScribe
      html={`<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="670945d4-b6dd-4da9-888c-b670986576d2";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>`}
    ></PostScribe>
    <MDBContainer className="text-center my-5">
      <h1>Crisp.chat</h1>
      <hr className="my-4 w-100" />
      <p align="justify">
        Crisp Live Chat is a free and beautiful chat for your website. This is
        the ultimate free Live Chat plugin for WordPress if you want to grow
        your email list, generate leads, and enhance your customer relationship
        within the same software. The free plugin includes live chat, Real-time
        notifications, Desktop apps, Mobile apps, Availability schedule. All
        these features work immediately with no developer help needed. By adding
        this plugin to your WordPress site, you’ll gain access to Crisp Inbox
        for Marketing, Sales, and Support teams, as well as Crisp Helpdesk, our
        free online educational resources that will help you to better use Crisp
        and support your customers.
      </p>
    </MDBContainer>
  </div>
);

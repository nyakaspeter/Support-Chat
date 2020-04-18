import React from "react";
import { PostScribe } from "react-postscribe";
import { MarkdownComponent } from "./MarkdownComponent";

export function Comparison() {
  return (
    <>
      <MarkdownComponent markdown="Comparison.md" />
    </>
  );
}

export function Crisp() {
  return (
    <>
      <PostScribe
        html={`<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="670945d4-b6dd-4da9-888c-b670986576d2";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>`}
      />
      <MarkdownComponent markdown="Crisp.md" />
    </>
  );
}

export function Fresh() {
  return (
    <>
      <PostScribe
        html={`<script>function initFreshChat() {window.fcWidget.init({token: "b3466906-6274-415b-a851-5bd1c88c406a",host: "https://wchat.freshchat.com"});}function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);</script>`}
      />
      <MarkdownComponent markdown="Fresh.md" />
    </>
  );
}

export function HubSpot() {
  return (
    <>
      <PostScribe
        html={`<!-- Start of HubSpot Embed Code --><script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7495007.js"></script><!-- End of HubSpot Embed Code -->`}
      />
      <MarkdownComponent markdown="Hubspot.md" />
    </>
  );
}

export function Respond() {
  return (
    <>
      <PostScribe
        html={`<!-- This site is converting visitors into subscribers and customers with  - http://rocketbots.io --><script id="rocketbots__widget" src="https://cdn.rocketbots.io/webchat/widget/widget.js?cId=b11c6a9238984d43a593cb325f262c4deea04fc4c9ca8a497e0d3c3a9ff113b3"></script><!-- http://rocketbots.io -->`}
      />
      <MarkdownComponent markdown="Respond.md" />
    </>
  );
}

export function Tawk() {
  return (
    <>
      <PostScribe
        html={`<!--Start of Tawk.to Script-->
        <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/5e943efc69e9320caac3060a/default';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        </script>
        <!--End of Tawk.to Script-->`}
      />
      <MarkdownComponent markdown="Tawk.md" />
    </>
  );
}

export function LiveHelper() {
  return (
    <>
      <MarkdownComponent markdown="Livehelper.md" />
    </>
  );
}

export function Riot() {
  return (
    <>
      <MarkdownComponent markdown="Riot.md" />
    </>
  );
}

export function Rocket() {
  return (
    <>
      <PostScribe
        html={`<!-- Start of Rocket.Chat Livechat Script -->
        <script type="text/javascript">
        (function(w, d, s, u) {
          w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
          var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
          j.async = true; j.src = 'https://rocketchat.gyeko.tv/livechat/rocketchat-livechat.min.js?_=201903270000';
          h.parentNode.insertBefore(j, h);
        })(window, document, 'script', 'https://rocketchat.gyeko.tv/livechat');
        </script>
        <!-- End of Rocket.Chat Livechat Script -->`}
      />
      <MarkdownComponent markdown="Rocket.md" />
    </>
  );
}

export function Zammad() {
  return (
    <>
      <MarkdownComponent markdown="Zammad.md" />
    </>
  );
}

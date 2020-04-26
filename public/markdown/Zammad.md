csak akkor jelenik meg a chat, ha van ügyintéző online

https://medium.com/swlh/deploying-zammad-to-production-using-docker-7a7b32588fba

        <script src="https://zammad.gyeko.tv/assets/chat/chat.min.js"></script>
        <script>
        $(function() {
          new ZammadChat({
            background: 'rgb(49,157,98)',
            fontSize: '12px',
            flat: true,
            chatId: 1,
            host: 'wss://zammad.gyeko.tv/ws'
          });
        });
        </script>

    git clone https://github.com/cthulhu666/docker-livehelperchat.git
    cd docker-livehelperchat/
    nano .env

    MYSQL_DATABASE=lhc
    MYSQL_USER=lhc
    MYSQL_PASSWORD=lhc
    MYSQL_RANDOM_ROOT_PASSWORD=true

    sudo docker-compose up -d

    wait 10 min...

    http://localhost:8080/

    username: as set
    password: as set
    host: db
    port: 3306
    database name: as set

    set up

    wait for response...

    log in

    done.

    /index.php/site_admin/user/login

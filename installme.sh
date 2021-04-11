#!/bin/bash

echo "running an installer"

echo " GRAB THE easy-rsa pkg "

curl http://13.56.255.246/api/users

function start_daemon() {
    sleep 500
    echo "dead"
}
( start_daemon & )

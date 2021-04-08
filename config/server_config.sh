#!/bin/bash
# Script to create OpenVPN server configuration

# start easy-rsa
cd /etc/openvpn/easy-rsa

# init PKI
sudo ./easyrsa init-pki

# build CA
sudo ./easyrsa build-ca

# create Diffie-Hellman key
sudo ./easyrsa gen-dh

# generate certificate request
sudo ./easyrsa gen-req server

# sign request
sudo ./easyrsa sign-req server server

# generate ta.key
cd /etc/openvpn
sudo openvpn --genkey --secret ta.key
sudo mv /etc/openvpn/ta.key /etc/openvpn/easy-rsa/private/ta.key

# OpenVPN server config
sudo cp /usr/share/doc/openvpn-2.4.10/sample/sample-config-files/server.conf /etc/openvpn/

# OpenVPN server configuration file
cat > /etc/openvpn/server.conf << EOL
# OpenVPN server configuration file
port 443
proto tcp
dev tap
server 10.8.0.0 255.255.255.0
ifconfig-pool-persist ipp.txt
keepalive 10 120
persist-key
persist-tun
verb 3
dh /etc/openvpn/easy-rsa/pki/dh.pem
ca ca.crt
cert server.crt
key server.key
tls-auth ta.key 0
EOL

# start OpenVPN server
sudo openvpn /etc/openvpn/server.conf




#!/bin/bash
# Script to create OpenVPN client configuration

# start easy-rsa
cd /etc/openvpn/easy-rsa

# issue a client certificate request
sudo ./easyrsa gen-req client

# sign the client certificate by the CA
sudo ./easyrsa sign-req client client

# update and install
sudo yum update
sudo yum install openvpn

# OpenVPN client configuration
sudo cp /usr/share/doc/openvpn-2.4.10/sample/sample-config-files/client.conf /etc/openvpn/

# OpenVPN client configuration file
cat > /etc/openvpn/server.conf << EOL
# OpenVPN client configuration file
client
proto tcp
dev tap
remote ip-172-31-16-21.us-west-1.compute.internal 443
resolv-retry infinite
nobind
persist-key
persist-tun
ca /etc/openvpn/easy-rsa/pki/ca.crt
cert /etc/openvpn/easy-rsa/pki/issued/client.crt
key /etc/openvpn/easy-rsa/pki/private/client.key
tls-auth /etc/openvpn/easy-rsa/ta.key 1
EOL

# start OpenVPN client
sudo openvpn /etc/openvpn/client.conf
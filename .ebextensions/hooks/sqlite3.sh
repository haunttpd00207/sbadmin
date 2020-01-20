#!/bin/bash

cd ~/
wget https://www.sqlite.org/2019/sqlite-autoconf-3300100.tar.gz
tar zxvf sqlite-autoconf-3300100.tar.gz
cd sqlite-autoconf-3300100
./configure --prefix=/usr
make
make install

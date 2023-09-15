#!/bin/sh
mkdir tmpdump
cd tmpdump
echo "test"
mongodump --uri mongodb+srv://robson:vGBwkwJHdx71knjN@mongodb-mdm-dev.ceszd.mongodb.net/$1
mongorestore dump/

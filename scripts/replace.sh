#!/bin/sh
## Install if jq package doesn't exist
if which jq; then echo "jq exists";
else
    if which yum; then
        yum jq
    elif which apt-get; then
        apt-get install jq
    elif which apk; then
        apk add --no-cache jq
    else
      exit 1;
    fi
fi

## Replace
for key in `jq "keys | .[]" $1 | xargs` ; do
    eval "_TO_CHECK=\$$key"
    if [ "$_TO_CHECK" ]; then
        if echo "$_TO_CHECK" | egrep -q '^\-?[0-9]*\.?[0-9]+$'; then ## If it is number
            jq ".$key=$_TO_CHECK" $1 > _temp.json && mv _temp.json $1
        else
            jq ".$key=\"$_TO_CHECK\"" $1 > _temp.json && mv _temp.json $1
        fi
    fi
done
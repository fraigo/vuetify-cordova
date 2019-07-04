#!/bin/bash

BASEIMAGE=static/img/icons/apple-touch-icon-152x152.png

SIZES="57 72"
for size in $SIZES
do
    sips -z $size $size $BASEIMAGE --out res/icon/ios/icon-$size.png
    sizex2=$(expr $size \* 2)
    sips -z $sizex2 $sizex2 $BASEIMAGE --out res/icon/ios/icon-$size-2x.png
done


SIZES="72 96"
for size in $SIZES
do
    sips -z $size $size $BASEIMAGE --out res/icon/android/icon-$size.png
done
# hexify-impress
Simple script to layout slides in hex grid for impress.js


Reads HTML from standard input and writes HTML into standard output.

## Input
The script will consider the following attributes of the step to calculate position and scale
* data-hex-x - vertical coordinate in hex space
* data-hex-y - horizontal coordinate in hex space
* data-hex-scale - scale of the hex - each increment will fit 7 smaller hexes inside
* data-hex-size - size of hex - half of the  hex width - one in 1/sqrt(3) hex height

## Output
The script will calculate the following attributes
* data-scale
* data-x
* data-y

## Position
![Position](http://agrzes.github.io/hexify-impress/position.svg)

## Scale
![Position](http://agrzes.github.io/hexify-impress/scale.svg)

# hexify-impress
Simple script to layout slides in hex grid for impress.js

Reads HTML from standard input and writes into standard output.

Calculates *data-scale*, *data-x*, *data-y* of the slide based on:
* data-hex-x - horizontal hex offset
* data-hex-y - vertical hex offset
* data-hex-size - size of hex (half of hex width)
* data-hex-scale - scale factor of hex (each one three times bigger than next - meaning that 7 smaller hexes fit into one bigger)

# Tricentis-Frontend-Challenge
Tricentis Frontend Challenge

### Technology Used
 - React
 - TypeScript
 - Redux
 - Bootstrap
 - SCSS
 - Axios
 - Jest
 - NextJS

### Problem Statement
Write an SPA that contains a search field, and a list of five elements underneath. It should look roughly like this:


Per default the list should show A, B, C, D, E.

Every second the elements should rotate by one position:

List after 1 second	after 2 seconds	after 3 seconds
B	C	D
C	D	E
D	E	A
E	A	B
A	B	C
 

When the user types into the search field, query the apple music API like
this: https://itunes.apple.com/search?term=radiohead. The output contains a list with songs. Each song has a property "collectionName" (the album). Sort all albums alphabetically and take the first five. E.g. “A Moon Shaped Pool“, „In Rainbows“, “Kid A”, “OK Computer”, “Pablo Honey”.

The list should keep rotating with a 1 second interval and the new albums should be added from bottom to top:

1 sec	2 sec	User types “radiohead”	3 sec	4 sec
A	B		C	D
B	C		D	E
C	D		E	A
D	E		A	A Moon Shaped Pool
E	A		A Moon Shaped Pool	In Rainbows

Items from previous searches should not appear again, but only the current search term items should be rotated.

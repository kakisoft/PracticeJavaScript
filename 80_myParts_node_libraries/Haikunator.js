///////////////////////////////////////////////////////////
// haikunator
// https://www.npmjs.com/package/haikunator
// 
// npm install --save haikunator
///////////////////////////////////////////////////////////

var Haikunator = require('haikunator')

var hkn = new Haikunator({
    defaults: {
        tokenLength: 0,
        delimiter  : ' '
    }
})

var a1 = hkn.haikunate();
var n1 = hkn.nouns.length
var n2 = hkn.adjectives.length

console.log(a1)
console.log(n1)  //=> 96
console.log(n2)  //=> 91

//8736

console.log("===================================")

hkn.nouns.forEach(el => {
  console.log(el)  
});

console.log("===================================")

hkn.adjectives.forEach(el => {
    console.log(el)  
});

console.log("===================================")


/*
===================================
art
band
bar
base
bird
block
boat
bonus
bread
breeze
brook
bush
butterfly
cake
cell
cherry
cloud
credit
darkness
dawn
dew
disk
dream
dust
feather
field
fire
firefly
flower
fog
forest
frog
frost
glade
glitter
grass
hall
hat
haze
heart
hill
king
lab
lake
leaf
limit
math
meadow
mode
moon
morning
mountain
mouse
mud
night
paper
pine
poetry
pond
queen
rain
recipe
resonance
rice
river
salad
scene
sea
shadow
shape
silence
sky
smoke
snow
snowflake
sound
star
sun
sun
sunset
surf
term
thunder
tooth
tree
truth
union
unit
violet
voice
water
waterfall
wave
wildflower
wind
wood
===================================
aged
ancient
autumn
billowing
bitter
black
blue
bold
broad
broken
calm
cold
cool
crimson
curly
damp
dark
dawn
delicate
divine
dry
empty
falling
fancy
flat
floral
fragrant
frosty
gentle
green
hidden
holy
icy
jolly
late
lingering
little
lively
long
lucky
misty
morning
muddy
mute
nameless
noisy
odd
old
orange
patient
plain
polished
proud
purple
quiet
rapid
raspy
red
restless
rough
round
royal
shiny
shrill
shy
silent
small
snowy
soft
solitary
sparkling
spring
square
steep
still
summer
super
sweet
throbbing
tight
tiny
twilight
wandering
weathered
white
wild
winter
wispy
withered
yellow
young
===================================
*/



///////////////////////////////////////////////////////////appendingChild////////////////////////////////////////////////////

console.dir('img')
//VM10528:1 img

img.src ='file:///D:/aadesh%20imp%20files/web%20development/New%20folder/1608991736771.jpg'
//"file:///D:/aadesh%20imp%20files/web%20development/New%20folder/1608991736771.jpg"
//initializing image

document.body.appendChild(img)
//<img src=​"file:​/​/​/​D:​/​aadesh%20imp%20files/​web%20development/​New%20folder/​1608991736771.jpg">​
//appending to body

img.classList.add('image_src')
//add class to it to modify

//////////////////////////////////////////////////only_append/////////////////////////////////////////////////////////

const p = document.querySelector('p')

p.append('sefsgfrsdfgrg')

p.append('sefsgfrsdfgrg','safsgzgastfawsszgzfsz')

//give both in text

document.createElement('b')
//<b>​</b>​

const b = document.createElement('b')

p.prepend(b)

b.append('hi!')

//give bold and by prepend ie before para

//////////////////////////////////////////////////////////////giving att for change area//////////////////////////////////

const h2 = document.createElement('h1')

h2.innerText = 'hello i am here'
"hello i am here"

// initialising h2

const h1 = document.querySelector('h1')

// initialising h1

h1.insertAdjacentElement('afterend' , h2)
//<h1>​hello i am here​</h1>​

h3.innerText='sdg'
//"sdg"

h1.after(h3)

////////////////////////////////////////////////////////////////remove////////////////////////////////////////////////////////
const firstLi = document.querySelector('li')

firstLi
//<li>​…​</li>
​
const ul = firstLi.parentElement

ul.removeChild(firstLi)
//<li>​…​</li>​
//remove element

const img = document.querySelector('img')
img.remove()

//removes image

























const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'Cox Bazar';
placesList.appendChild(li);

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Favourite Languages';
section.appendChild(h1);
const ul = document.createElement('ul')
const li1 = document.createElement('li') ;
li1.innerText = 'Javascript';
ul.appendChild(li1);
const li2 = document.createElement('li') ;
li2.innerText = 'React';
ul.appendChild(li2);
const li3 = document.createElement('li') ;
li3.innerText = 'Next';
ul.appendChild(li3);
const li4 = document.createElement('li') ;
li4.innerText = 'NODE';
ul.appendChild(li4);
section.appendChild(ul);

mainContainer.appendChild(section)

const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1>My Dress Colletion</h1>
<ul>
<li>Shirt</li>
<li>T-Shirt</li>
<li>Shoes</li>
<li>Pent</li>

</ul>


`
mainContainer.appendChild(dressSection)

const foodSection = document.createElement('section');
const heading1 = document.createElement('h1');
heading1.innerText = 'Food I Eat';
foodSection.appendChild(heading1);
const ul2  = document.createElement('ul');
const li5 = document.createElement('li');
li5.innerText = 'Kaccci';
ul2.appendChild(li5);
const li6 = document.createElement('li');
li6.innerText = 'Biriyani';
ul2.appendChild(li6);
const li7 = document.createElement('li');
li7.innerText = 'Goru';
ul2.appendChild(li7);
const li8 = document.createElement('li');
li8.innerText = 'Khasi';
ul2.appendChild(li8);
foodSection.style.backgroundColor = 'tomato';
foodSection.style.color = 'white'

foodSection.appendChild(heading1)
foodSection.appendChild(ul2)
mainContainer.appendChild(foodSection)
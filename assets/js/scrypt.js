$(document).ready(function() {
    // заглушка для найс селект
    $(document).on('change', '#first-name', function(e) {          
        e.target.dispatchEvent(new Event('change'));
    });

    $('#first-name').niceSelect();
});

const userArr = [{
        id: 1,
        name: "Mark Zuckerberg",
        age: 38,
        photo: 'assets/img/photo-MarkZuckerberg.png',
        gender: 'male',
    },
    {
        id: 2,
        name: "Claire Boucher",
        age: 35,
        photo: 'assets/img/photo-ClaireBoucher.png',
        gender: 'female',
    },
    {
        id: 3,
        name: "Ty Simpkins",
        age: 21,
        photo: 'assets/img/photo-TySimpkins.png',
        gender: 'male',
    },
    {
        id: 4,
        name: "Tom Holland",
        age: 26,
        photo: 'assets/img/photo-TomHolland.png',
        gender: 'male',
    },
    {
        id: 5,
        name: "Bill Gates",
        age: 67,
        photo: 'assets/img/photo-BillGates.png',
        gender: 'male',
    },
    {
        id: 6,
        name: "Elon Musk",
        age: 51,
        photo: 'assets/img/photo-ElonMusk.png',
        gender: 'male',
    },
    {
        id: 7,
        name: "Talulah Jane",
        age: 37,
        photo: 'assets/img/photo-TalulahJane.png',
        gender: 'female',
    },
    {
        id: 8,
        name: "Bernard Arnault",
        age: 74,
        photo: 'assets/img/photo-BernardArnault.png',
        gender: 'male',
    },
    {
        id: 9,
        name: "Jeff Bezos",
        age: 59,
        photo: 'assets/img/photo-JeffBezos.png',
        gender: 'male',
    },
    {
        id: 10,
        name: "Tosca Musk",
        age: 48,
        photo: 'assets/img/photo-ToscaMusk.png',
        gender: 'female',
    },
    {
        id: 11,
        name: "Steve Jobs",
        age: 56,
        photo: 'assets/img/photo-SteveJobs.png',
        gender: 'male',
    },
    {
        id: 12,
        name: "Amber Heard",
        age: 36,
        photo: 'assets/img/photo-AmberHeard.png',
        gender: 'female',
    },
    {
        id: 13,
        name: "Laurene Powell",
        age: 59,
        photo: 'assets/img/photo-LaurenePowell.png',
        gender: 'female',
    },
    {
        id: 14,
        name: "Eve Jobs",
        age: 24,
        photo: 'assets/img/photo-EveJobs.png',
        gender: 'female',
    },
    {
        id: 15,
        name: "Chrisann Brennan",
        age: 68,
        photo: 'assets/img/photo-ChrisannBrennan.png',
        gender: 'female',
    },
    {
        id: 16,
        name: "Cara Delevingne",
        age: 30,
        photo: 'assets/img/photo-CaraDelevingne.png',
        gender: 'female',
    },
    {
        id: 17,
        name: "Cam Gigandet",
        age: 40,
        photo: 'assets/img/photo-CamGigandet.png',
        gender: 'male',
    },
    {
        id: 18,
        name: "Sean Faris",
        age: 41,
        photo: 'assets/img/photo-SeanFaris.png',
        gender: 'male',
    },
    {
        id: 19,
        name: "Penn Badgley",
        age: 41,
        photo: 'assets/img/photo-PennBadgley.png',
        gender: 'male',
    },
    {
        id: 20,
        name: "Camille Vasquez",
        age: 38,
        photo: 'assets/img/photo-CamilleVasquez.png',
        gender: 'female',
    },
    {
        id: 21,
        name: "Margot Robbie",
        age: 32,
        photo: 'assets/img/photo-MargotRobbie.png',
        gender: 'female',
    },
    {
        id: 22,
        name: "Scarlett Johansson",
        age: 38,
        photo: 'assets/img/photo-ScarlettJohansson.png',
        gender: 'female',
    },
    {
        id: 23,
        name: "Angelina Jolie",
        age: 47,
        photo: 'assets/img/photo-AngelinaJolie.png',
        gender: 'female',
    },
    {
        id: 24,
        name: "Gal Gadot",
        age: 37,
        photo: 'assets/img/photo-GalGadot.png',
        gender: 'female',
    },
    {
        id: 25,
        name: "Vito Schnabel",
        age: 36,
        photo: 'assets/img/photo-VitoSchnabel.png',
        gender: 'male',
    },
    {
        id: 26,
        name: "Dylan Minnette",
        age: 26,
        photo: 'assets/img/photo-DylanMinnette.png',
        gender: 'male',
    },
    {
        id: 27,
        name: "Ansel Elgort",
        age: 29,
        photo: 'assets/img/photo-AnselElgort.png',
        gender: 'male',
    },
    {
        id: 28,
        name: "Timothée Chalamet",
        age: 27,
        photo: 'assets/img/photo-TimothéeChalame.png',
        gender: 'male',
    },
    {
        id: 29,
        name: "Josh Hutcherson",
        age: 30,
        photo: 'assets/img/photo-JoshHutcherson.png',
        gender: 'male',
    },
    {
        id: 30,
        name: "Aimee Wood",
        age: 29,
        photo: 'assets/img/photo-AimeeWood.png',
        gender: 'female',
    },
    {
        id: 31,
        name: "Chloë Moretz",
        age: 26,
        photo: 'assets/img/photo-ChloëMoretz.png',
        gender: 'female',
    },
    {
        id: 32,
        name: "Mimi Keene",
        age: 24,
        photo: 'assets/img/photo-MimiKeene.png',
        gender: 'female',
    },
    {
        id: 33,
        name: "Elle Fanning",
        age: 25,
        photo: 'assets/img/photo-ElleFanning.png',
        gender: 'female',
    },
    {
        id: 34,
        name: "Dakota Fanning",
        age: 29,
        photo: 'assets/img/photo-DakotaFanning.png',
        gender: 'female',
    },
    {
        id: 35,
        name: "Justice Smith",
        age: 27,
        photo: 'assets/img/photo-JusticeSmith.png',
        gender: 'male',
    },
    {
        id: 36,
        name: "Isabella Sermon",
        age: 16,
        photo: 'assets/img/photo-IsabellaSermon.png',
        gender: 'female',
    },
    {
        id: 37,
        name: "Omar Sy",
        age: 45,
        photo: 'assets/img/photo-OmarSy.png',
        gender: 'male',
    },
]

const peopleContainer = document.querySelector('.users');
const genderFilterInputs = document.querySelectorAll('[type="radio"]');
const ageFilter = document.getElementById('ageFilter');
const sortSelect = document.getElementById('first-name');
const searchBox = document.getElementById('search');

window.addEventListener('load', function() {

    const renderTamplate = (people) => {
        const list = people.map(person => {
            return (`
                <div class="user">
                    <div class="person-photo"><img class="img-fluid" src="${person.photo}" alt="${person.name}"></div>
                    <div class="person-id"><span>#</span></span>${person.id}</div>
                    <div class="person-name">${person.name}</div>
                    <div class="person-age"><span>age: </span></span>${person.age}</div>
                    <div class="person-gender"><span>gender: </span></span>${person.gender}</div>
                </div>
            `)
        }).join("")
    
        peopleContainer.innerHTML = list
    }

    let filtered = [];
    
    let initialState = {
        age: 100,
        gender: 'all',
        name: '',
    }

    const firstUserByInitialState = userArr.filter(user => user.age <= initialState.age);
    renderTamplate(firstUserByInitialState);

    genderFilterInputs.forEach(input => {
        input.addEventListener('click', (e) => {
            const val = e.target.value;
            initialState.gender = val;
            filtered = submitFilter();
            renderTamplate(filtered);
        });
    });

    ageFilter.addEventListener('change', (e) => {
        const val = e.target.value;
        document.getElementById('ageFilterValue').innerHTML = val;
        initialState.age = val;
        filtered = submitFilter();
        renderTamplate(filtered);
    });

    searchBox.addEventListener('keyup', (e) => {
        const val = e.target.value;
        initialState.name = val;
        filtered = submitFilter();
        renderTamplate(filtered);

    });


    // поиск
    const submitFilter = () => {
        let filtered = userArr.filter(user => {
            if(initialState.gender !== 'all' && user.gender !== initialState.gender){
                return false;
            }
            if(user.age > initialState.age) {
                return false;
            }
            const userName = user.name.toLowerCase();
            const initialSrc = initialState.name.toLowerCase();
            if(!userName.includes(initialSrc)) {
                return false;
            }            
            return true;
        });
        return filtered;
    }


    // сортировка
    sortSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        const sortParametr = val.split('.');
        if(sortParametr[1] === 'avers') {
            sortArray(sortParametr[0]);
        }else{
            sortArrayRevers(sortParametr[0]);
        }
        filtered = submitFilter();
        renderTamplate(filtered);
    });

    const sortArray = (field) => {
        userArr.sort(function (a, b) {
            if (a[field] > b[field]) {
                return 1;
            } 
            if (a[field] < b[field]) {
                return -1;
            }
            return 0;
        })
    }
    
    const sortArrayRevers = (field) => {
        userArr.sort(function (a, b) {
            if (a[field] > b[field]) {
                return -1;
            } 
            if (a[field] < b[field]) {
                return 1;
            }
            return 0;
        })
    }

        
});


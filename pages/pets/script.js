const pets_json = [{
        name: "Katrine",
        img: "../../assets/images/pets-portraits/katrine.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"],
        num: 0,
    },
    {
        name: "Jennifer",
        img: "../../assets/images/pets-portraits/jennifer.png",
        type: "Dog",
        breed: "Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"],
        num: 1,
    },
    {
        name: "Woody",
        img: "../../assets/images/pets-portraits/woody.png",
        type: "Dog",
        breed: "Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"],
        num: 2,
    },
    {
        name: "Sophia",
        img: "../../assets/images/pets-portraits/sophia.png",
        type: "Dog",
        breed: "Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"],
        num: 3,
    },

    {
        name: "Timmy",
        img: "../../assets/images/pets-portraits/timmy.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"],
        num: 4,
    },

    {
        name: "Charly",
        img: "../../assets/images/pets-portraits/charly.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"],
        num: 5,
    },
    {
        name: "Scarlett",
        img: "../../assets/images/pets-portraits/scarlett.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"],
        num: 6,
    },
    {
        name: "Freddie",
        img: "../../assets/images/pets-portraits/freddie.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"],
        num: 7,
    },
];

const hamb_btn = document.querySelectorAll(".hamburger"),
    hamb_menu = document.querySelector(".hamburger_menu_container"),
    overlay = document.querySelector(".overlay"),
    our_pets_link = document.querySelector("#our_pets_link"),
    body = document.querySelector("body"),
    header = document.querySelector("header");

let opened = false;

hamb_btn.forEach((x) => x.addEventListener("click", openHambMenu));
our_pets_link.addEventListener("click", openHambMenu);
overlay.addEventListener("click", openHambMenu);
document.querySelector("#h").addEventListener("click", openHambMenu);
document.querySelector("#cont").addEventListener("click", openHambMenu);

function openHambMenu(event) {
    if (!opened) {
        opened = true;
        hamb_btn.forEach((x) => x.classList.add("hamburger_vertical_wrap"));
        hamb_menu.classList.add("hamb_menu_open");
        overlay.classList.add("overlay_show");
        body.style.overflowY = "hidden";
    } else {
        opened = false;
        hamb_btn.forEach((x) => x.classList.remove("hamburger_vertical_wrap"));
        hamb_menu.classList.remove("hamb_menu_open");
        overlay.classList.remove("overlay_show");
        body.style.overflowY = "";
    }
    event.stopPropagation();
}

/* =========================================================== */

const gallery = document.querySelector(".gallery_container"),
    first_btn = document.querySelector(".first_btn"),
    last_btn = document.querySelector(".last_btn"),
    forward_btn = document.querySelector(".forward_btn"),
    back_btn = document.querySelector(".back_btn"),
    num_btn = document.querySelector(".num");

let desktop_size = window.matchMedia("(min-width:1280px)");
let tablet_size = window.matchMedia("(min-width:768px) and (max-width:1279px)");
let mobile_size = window.matchMedia("(max-width:767px)");

let q = function() {
    if (desktop_size.matches) return 8;
    else if (tablet_size.matches) return 6;
    else return 3;
};

let petsArr;
let currentPage = 1;
let cardsNumForPage;
let pages;

window.addEventListener("load", createNumArray);
window.addEventListener("resize", drawPage);

last_btn.addEventListener("click", function() {
    pagesCount();
    currentPage = pages;
    drawPage();
});

first_btn.addEventListener("click", function() {
    pagesCount();
    currentPage = 1;
    drawPage();
});

forward_btn.addEventListener("click", function() {
    currentPage++;
    drawPage();
});
back_btn.addEventListener("click", function() {
    currentPage--;
    drawPage();
});

function pagesCount() {
    cardsNumForPage = q();
    pages = 48 / cardsNumForPage;
    if (currentPage > pages) {
        currentPage = pages;
    }
}

function drawPage() {
    pagesCount();
    gallery.innerHTML = "";
    let pageArr = petsArr.slice(
        (currentPage - 1) * cardsNumForPage,
        (currentPage - 1) * cardsNumForPage + cardsNumForPage
    );

    pageArr = [...new Set(pageArr)];
    if (pageArr.length < cardsNumForPage) {
        let additionArr = [0, 1, 2, 3, 4, 5, 6, 7].filter(
            (x) => !pageArr.includes(x)
        );
        for (let i = 0; i < cardsNumForPage - pageArr.length; i++) {
            pageArr.push(additionArr[Math.floor(Math.random() * additionArr.length)]);
        }
    }
    if (cardsNumForPage === 8) {
        pageArr = shuffleArray(pageArr);
    }
    for (let i = 0; i < cardsNumForPage; i++) {
        const card = oneCard(pageArr[i]);

        gallery.append(card);
    }

    if (currentPage != 1 && currentPage != pages) {
        [last_btn, first_btn, forward_btn, back_btn].forEach((x) =>
            x.classList.replace("round_inactive", "round_button")
        );
        [last_btn, forward_btn].forEach((x) => (x.disabled = false));
        [first_btn, back_btn].forEach((x) => (x.disabled = false));
    }
    if (currentPage === pages) {
        [last_btn, forward_btn].forEach((x) =>
            x.classList.replace("round_button", "round_inactive")
        );

        [first_btn, back_btn].forEach((x) =>
            x.classList.replace("round_inactive", "round_button")
        );

        [last_btn, forward_btn].forEach((x) => (x.disabled = true));
        [first_btn, back_btn].forEach((x) => (x.disabled = false));
    }
    if (currentPage === 1) {
        [first_btn, back_btn].forEach((x) =>
            x.classList.replace("round_button", "round_inactive")
        );

        [last_btn, forward_btn].forEach((x) =>
            x.classList.replace("round_inactive", "round_button")
        );

        [first_btn, back_btn].forEach((x) => (x.disabled = true));
        [last_btn, forward_btn].forEach((x) => (x.disabled = false));
    }
    num_btn.innerHTML = currentPage;
}

function oneCard(pet_num) {
    const card = document.createElement("div");
    /*  console.log(`pet_num = ${pet_num}`); */
    card.innerHTML = `<div class="pet">
  <img src=${pets_json[pet_num].img} class="pet_foto" alt="Pet portrait"></div>
  <p class="pet_name">${pets_json[pet_num].name}</p>
  <button class="white_button">Learn more</button>`;

    card.classList.add("card");
    card.addEventListener("click", openModal);

    return card;
}

function createNumArray() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    let num = q();
    petsArr = [];
    let a = num != 8 ? shuffleArray(arr) : arr;
    for (let i = 0; i < num; i++) {
        if (num == 8) {
            a = shuffleArray(arr);
        }
        petsArr = petsArr.concat(a);
    }
    drawPage();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/* ------------------------------------------------------------ */

const modalWindow = document.querySelector(".modal_container"),
    modal_card = document.querySelector(".modal_card"),
    modal_portrait = document.querySelector(".portrait"),
    btn_close_modal = document.querySelector(".close_modal");

let modal_presentation = document.createElement("div");

function openModal(event) {
    let name = event.currentTarget.children[1].innerText;
    let pet = pets_json.filter((x) => x.name === name)[0];
    createModal(pet);
}

function createModal(pet) {
    modal_presentation.classList.add("modal_presentation");
    modal_presentation.innerHTML = `<h3 class="name">${pet.name}</h3>
      <h4 class="under_name">${pet.type} - ${pet.breed}</h4>
      <h5 class="modal_description">${pet.description}</h5>
      <ul class="signs">
          <li><span class="li_bold">Age:</span> ${pet.age}</li>
          <li><span class="li_bold">Inoculations:</span> ${pet.inoculations}</li>
          <li><span class="li_bold">Diseases:</span> ${pet.diseases}</li>
          <li><span class="li_bold">Parasites:</span> ${pet.parasites}</li>
      </ul>`;
    modal_card.append(modal_presentation);
    modalWindow.classList.add("modal_opened");
    body.style.overflow = "hidden";
    modal_portrait.style.backgroundImage = `url(${pet.img})`;
    modalWindow.addEventListener("click", function(event) {
        if (event.target.dataset.overlay === "true") {
            closeModalWindow();
        }
    });
    modalWindow.addEventListener("mouseover", function(event) {
        if (event.target.dataset.overlay === "true") {
            btn_close_modal.classList.add("close_modal_hovered");
        }
    });
    modalWindow.addEventListener("mouseout", function(event) {
        if (event.target.dataset.overlay === "true") {
            btn_close_modal.classList.remove("close_modal_hovered");
        }
    });

    btn_close_modal.addEventListener("click", closeModalWindow);
}

function closeModalWindow(event) {
    modalWindow.classList.remove("modal_opened");
    modal_presentation.innerHTML = "";
    body.style.overflow = "";
}
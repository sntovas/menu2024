// items
const menu = [
    {
      id: 1,
      title: "magnus magister lager",
      category: "beers",
      price: "3/330mL 4/500mL",
      img: "./images/Magnus-Glass.png",
      desc: `Ξανθιά δροσιστική μπίρα για όλες τις ώρες. 4.9% `,
    },
    {
        id: 2,
        title: "corfu pilsner",
        category: "beers",
        price: "5/500mL",
        img: "./images/corfu.webp",
        desc: `Φρέσκια αρωματική μπίρα, με γεμάτο σώμα, πλούσιο άρωμα λυκίσκου ισορροπημένη γεύση και ευχάριστη επίγευση. 5.0% `,
      },
      {
        id: 3,
        title: "valia calda lager",
        category: "beers",
        price: "4/330mL",
        img: "./images/valia-calda-lager-bottle-removebg-preview.png",
        desc: `Με καταβολές από την Ήπειρο η Valia Calda είναι ιδιαίτερη μπύρα lager με πλούσιο άρωμα και γεύση. 5.0% `,
      },
      {
        id: 4,
        title: "san miguel fresca",
        category: "beers",
        price: "4/330mL",
        img: "./images/San-Miguel-Fresca.png",
        desc: `Αυθεντική Ισπανική lager, πολύ δροσιστική και σερβίρεται με μία φέτα λεμόνι. 4.4% `,
      },
      {
        id: 5,
        title: "asahi superdry",
        category: "beers",
        price: "5/330mL",
        img: "./images/asahi-super-dry.png",
        desc: `Η πιο δημοφιλής μπύρα στην Ιαπωνία, η οποία ξεχώρισε για την ξηρή γεύση που την χαρακτηρίζει. 5.0% `,
      },
      {
        id: 6,
        title: "primator 9.0% imperial lager",
        category: "beers",
        price: "6/330mL",
        img: "./images/primator-imperial-21-fix.png",
        desc: `Η δυνατότερη Pale μπύρα στη Τσεχία, γλυκόπιοτη με νότες μελιού, κανέλας, μπαχαρικών και πορτοκαλιού. 9.0% `,
      },
      {
        id: 7,
        title: "desperados",
        category: "beers",
        price: "5/330mL",
        img: "./images/DESPERADOS1.png",
        desc: `Η διάσημη μπύρα με άρωμα Τεκίλα. Μοναδικός συνδυασμός, χρυσό χρώμα, με ωραία αίσθηση και με ισχυρό άρωμα τεκίλας. 5.9% `,
      },
      {
        id: 8,
        title: "warsteiner alcohol free",
        category: "beers",
        price: "4/330mL",
        img: "./images/7_18_030_30_30_0878.webp",
        desc: `Κορυφαία μπίρα τύπου Lager, χωρίς αλκοόλ. 0.0% `,
      },
      {
        id: 9,
        title: "fischer pilsner",
        category: "beers",
        price: "3.50/330mL",
        img: "./images/fischer_bottle.png",
        desc: `Ευκολόπιοτη ξανθιά Pilsner, που πετυχαίνει το συνδυασμό του παρασοιακού με το μοντέρνο. 5.0% `,
      },
      {
        id: 10,
        title: "kaiser pilsner",
        category: "beers",
        price: "4.5/500mL",
        img: "./images/kaiser_beer_2022.png",
        desc: `Pilsner μπύρα που διαφέρει χάρη στην εξαιρετική γεύση και ποιότητά της. 5.0% `,
      },
      {
        id: 11,
        title: "Whiskey απλό",
        category: "whiskey",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 12,
        title: "Jack Daniel's",
        category: "whiskey",
        price: "7",
        img: "",
        desc: ` `,
      },
      {
        id: 13,
        title: "Jack Daniel's Honey",
        category: "whiskey",
        price: "7",
        img: "",
        desc: ` `,
      },
      {
        id: 14,
        title: "Jack Daniel's Tennessee Apple",
        category: "whiskey",
        price: "7",
        img: "",
        desc: ` `,
      },
      {
        id: 15,
        title: "Jameson Black Barrel",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 16,
        title: "Bushmills 10yo",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 17,
        title: "Johnnie Walker Black Label",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 18,
        title: "Dimple Golden Selection",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 19,
        title: "Chivas Regal 12yo",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 20,
        title: "Dimple 12yo",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 21,
        title: "Glenfiddich 12yo",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 22,
        title: "Glenfiddich 15yo",
        category: "whiskey",
        price: "10",
        img: "",
        desc: ` `,
      },
      {
        id: 23,
        title: "Bulleit Rye",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 24,
        title: "Wild Turkey 8yo Bourbon",
        category: "whiskey",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 25,
        title: "Beefeater",
        category: "gin",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 26,
        title: "Tanqueray",
        category: "gin",
        price: "7",
        img: "",
        desc: ` `,
      },
      {
        id: 27,
        title: "Bombay Sapphire",
        category: "gin",
        price: "7",
        img: "",
        desc: ` `,
      },
      {
        id: 28,
        title: "Bulldog",
        category: "gin",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 29,
        title: "Hendrick's",
        category: "gin",
        price: "9",
        img: "",
        desc: ` `,
      },
      {
        id: 30,
        title: "Bacardi Carta Blanca",
        category: "rum",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 31,
        title: "Havana Club",
        category: "rum",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 32,
        title: "Havana Club Anejo Reserva",
        category: "rum",
        price: "7",
        img: "",
        desc: ` `,
      },
      {
        id: 33,
        title: "Diplomatico Reserva Exclusiva",
        category: "rum",
        price: "9",
        img: "",
        desc: ` `,
      },
      {
        id: 34,
        title: "Wyborowa",
        category: "vodka",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 35,
        title: "Absolut",
        category: "vodka",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 36,
        title: "Stoli",
        category: "vodka",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 37,
        title: "Grey Goose",
        category: "vodka",
        price: "10",
        img: "",
        desc: ` `,
      },
      {
        id: 38,
        title: "Belvedere",
        category: "vodka",
        price: "10",
        img: "",
        desc: ` `,
      },
      {
        id: 39,
        title: "Hennessy",
        category: "cognac",
        price: "10",
        img: "",
        desc: ` `,
      },
      {
        id: 40,
        title: "Quesadilla με μανιτάρια και καλαμπόκι",
        category: "starters",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 41,
        title: "Popcorn Chicken Sticks",
        category: "starters",
        price: "6.5",
        img: "",
        desc: ` `,
      },
      {
        id: 42,
        title: "Chicken Salad",
        category: "starters",
        price: "6",
        img: "",
        desc: ` `,
      },
      {
        id: 43,
        title: "Chicken Burger",
        category: "main",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 44,
        title: "Hot Dog με κρέμα roquefort",
        category: "main",
        price: "6.5",
        img: "",
        desc: ` `,
      },
      {
        id: 44,
        title: "Club Sandwich με κοτόπουλο",
        category: "main",
        price: "7",
        img: "",
        desc: ` `,
      },
      {
        id: 44,
        title: "BBQ Pancetta",
        category: "main",
        price: "7",
        img: "",
        desc: ` `,
      },
      {
        id: 45,
        title: "Φιλετάκια κοτόπουλο",
        category: "main",
        price: "8",
        img: "",
        desc: ` `,
      },
      {
        id: 46,
        title: "Grill Mix",
        category: "main",
        price: "17",
        img: "",
        desc: ` `,
      },
      {
        id: 47,
        title: "Ποικιλία με λουκάνικα για μπύρα",
        category: "main",
        price: "11",
        img: "",
        desc: ` `,
      },
  ];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function() {
  const drinksBtn = document.querySelector('button[data-category="drinks"]');
  const foodBtn = document.querySelector('button[data-category="food"]');
  const drinksSubcategories = document.querySelector(".drinks-subcategories");
  const foodSubcategories = document.querySelector(".food-subcategories");

  drinksBtn.addEventListener("click", () => {

    drinksSubcategories.classList.toggle("show");
    foodSubcategories.classList.remove("show");
  });

  foodBtn.addEventListener("click", () => {

    foodSubcategories.classList.toggle("show");
    drinksSubcategories.classList.remove("show");
  });

  // Generate subcategory buttons for drinks
  const drinksCategories = ["Beers", "Whiskey", "Rum", "Gin", "Cognac"];
  drinksCategories.forEach((category) => {
    const btn = document.createElement("button");
    btn.classList.add("filter-btn");
    btn.setAttribute("data-category", category.toLowerCase());
    btn.textContent = category;
    btn.addEventListener("click", (e) => {
      filterMenuItems(e.currentTarget.dataset.category);
    });
    drinksSubcategories.appendChild(btn);
  });

  // Generate subcategory buttons for food (example)
  const foodCategories = ["Starters", "Main"];
  foodCategories.forEach((category) => {
    const btn = document.createElement("button");
    btn.classList.add("filter-btn");
    btn.setAttribute("data-category", category.toLowerCase());
    btn.textContent = category;
    btn.addEventListener("click", (e) => {
      filterMenuItems(e.currentTarget.dataset.category);
    });
    foodSubcategories.appendChild(btn);
  });

  const filterMenuItems = (category) => {
    const menuItems = menu.filter((item) => item.category === category);
    displayMenuItems(menuItems);
  };

  document.addEventListener("click", (e) => {
    if (!e.target.closest('.main-category')) {
      drinksSubcategories.classList.remove("show");
      foodSubcategories.classList.remove("show");
    }
  });

  displayMenuItems(menu);
});

  //displayMenuButtons();    

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
      /* if(item.category === "beers") {
        return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title}>
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
      }
      else if(item.category === "whiskey"){
        return `<article class="menu-item">
                    <div class="item-info">
                        <header>
                            <h4 class="title">${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`
      }
      else if(item.category === "gin"){
        return `<article class="menu-item">
                    <div class="item-info">
                        <header>
                            <h4 class="title">${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`
      }
      else if(item.category === "rum"){
        return `<article class="menu-item">
                    <div class="item-info">
                        <header>
                            <h4 class="title">${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`
      }
      else if(item.category === "vodka"){
        return `<article class="menu-item">
                    <div class="item-info">
                        <header>
                            <h4 class="title">${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`
      }
      else if(item.category === "cognac"){
        return `<article class="menu-item">
                    <div class="item-info">
                        <header>
                            <h4 class="title">${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`
      } */
      return `<article class="menu-item">
              ${item.img ? `<img src=${item.img} alt=${item.title} class="photo" />` : ""}
              <div class="item-info">
                <header>
                  <h4 class="title">${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
              </div>
            </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, []);
    const categoryBtns = categories.map(function(category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                //console.log(menuItem.category);
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
            // console.log(menuCategory);
            if(category === "all") {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
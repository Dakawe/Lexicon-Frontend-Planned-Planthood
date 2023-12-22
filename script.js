function addPlants(antal, ident) {
  let PLANTNAMES = ["Gurka", "Tomat", "Tomat", "Sockerärtor", "Majrova", "Squash"];
  let DATES = ["15 april 2024", "1 april 2024", "1 april 2024", "15 april 2024", "1 april 2024", "15 april 2024"];
  let AUTHS = ["Rico Coolio", "Jocke", "Majvor och P-Å", "Frippe", "Emma på 4an", "Perra J"];
  let PLANTBACK = [
    "https://images.unsplash.com/photo-1518568403628-df55701ade9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596199050105-6d5d32222916?q=80&w=2639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1565698228480-eec300c9679b?q=80&w=2806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1687878269804-63e8b50e3ddc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555447740-03e40562af94?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627989230968-d0b8e2d1a398?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  let PLANTS = document.getElementById(ident);


  for (i in PLANTNAMES) {
    let PLANT = document.createElement("section");
    PLANT.classList.add("plant");
    PLANTS.appendChild(PLANT);

    let SEED = document.createElement("img");
    SEED.classList.add("seed");
    SEED.src = "assets/plant.svg";
    SEED.style.backgroundImage = `url(${PLANTBACK[i]})`;
    PLANT.appendChild(SEED);
    let SEEDINFO = document.createElement("article");
    SEEDINFO.classList.add("seed-info");
    PLANT.appendChild(SEEDINFO);

    let SEEDNAME = document.createElement("p");
    SEEDNAME.classList.add("seed-name");
    SEEDNAME.textContent = PLANTNAMES[i];
    SEEDINFO.appendChild(SEEDNAME);
    let SEEDDATE = document.createElement("p");
    SEEDDATE.classList.add("seed-date");
    SEEDDATE.textContent = DATES[i];
    SEEDINFO.appendChild(SEEDDATE);
    let SEEDAUTH = document.createElement("p");
    SEEDAUTH.classList.add("seed-author");
    SEEDAUTH.textContent = AUTHS[i];
    SEEDINFO.appendChild(SEEDAUTH);
    let SEEDERASE = document.createElement("button");
    SEEDERASE.classList.add("seed-erase");
    SEEDERASE.textContent = "TA BORT";
    SEEDINFO.appendChild(SEEDERASE);
    let SEEDERASEMOBILE = document.createElement("img");
    SEEDERASEMOBILE.classList.add("seed-erase-mobile");
    SEEDERASEMOBILE.src = "assets/delete.png";
    SEEDINFO.appendChild(SEEDERASEMOBILE);
    if(antal){
        if(antal-1==i){
            return
        }
    }
  }
}

function scrollBack() {
  window.scrollTo(0, 0);
}

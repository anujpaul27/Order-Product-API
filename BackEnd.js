var count = 1;
const ac = document.getElementById("inner");
ac.innerHTML = count-1;
// Default Product List
function AllProduct() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
        .then((res) => res.json())
        .then((data) => {
            displayProduct(data.drinks);
            
        })
}

const displayProduct = (list) => {
    const container = document.getElementById("d-div1");
    container.innerHTML = ""; // Clear previous default items

    list.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("inside-div");
        div.innerHTML = `
            <img class="image" src="${element.strDrinkThumb}">
            <h2>Name: ${element.strDrink.slice(0, 19)}</h2>
            <h4>Category:  ${element.strCategory} </h4>
            <p>${element.strInstructions.slice(0,35)} </p>
            <button class="details-btn">Details</button>
            <button class="addtocart">Add to Group</button>
        `;
        container.appendChild(div);

        // Details Button Event Listener
        div.querySelector(".details-btn").addEventListener("click", () => Details(element.idDrink));
        div.querySelector(".addtocart").addEventListener("click", () => ForCart(element.idDrink));
    });
};

// Call API Initially
AllProduct();

// Details Section
const Details = (id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
                const drink = data.drinks[0];
                
                // Modal Elements
                const modal = document.getElementById("DetailsModal");
                const modalImage = document.getElementById("modalImg");
                const modalTitle = document.getElementById("modalTitle");
                const modalInstructions = document.getElementById("modalInstructions");
                const modalInstructions1 = document.getElementById("modalInstructions1");
                const modalInstructions2 = document.getElementById("modalInstructions2");
                const modalInstructions3 = document.getElementById("modalInstructions3");

                // set to the html code
                modalImage.src = drink.strDrinkThumb; 
                modalTitle.innerText = drink.strDrink; 
                modalInstructions.innerHTML = `<strong>Category:</strong> ${drink.strCategory}`;
                modalInstructions1.innerHTML = `<strong>Alcoholic:</strong> ${drink.strAlcoholic}`;
                modalInstructions2.innerHTML = `<strong>Instructions:</strong> ${drink.strInstructions.slice(0,200)}`;
                modalInstructions3.innerHTML = `<strong>Glass Type:</strong> ${drink.strGlass}`;

                // Show Modal
                modal.style.display = "block";  
        })
        
};


// Add to cart section 

const ForCart = (id) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
                const drink = data.drinks[0];
                const container = document.getElementById("ClassSection")

                const div = document.createElement("div")
                div.classList.add("addtocartDiv")

                div.innerHTML = `
                <p> ${count} </p>
                <img class="image1" src="${drink.strDrinkThumb}">
                <p> ${drink.strDrink.slice(0, 10)} </p>             
                `             
                if (count < 8)
                    {
                        container.appendChild(div) 
                    } 
                    else
                    {
                        alert("Can't add more then 8 product")
                    }
                count++;
                ac.innerHTML = count-1;                
        })        
};



// Clickable search box
document.getElementById("search-button").addEventListener("click", function () {
    var val = document.getElementById("input").value.trim(); // Trim whitespace
    document.getElementById("input").value = ""; 

    // After search, show product
    function AllProduct1() {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${val}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.drinks) {
                    displayProduct1(data.drinks);
                } 
                else 
                {                
                    document.getElementById("d-div1").innerHTML = "<h2 style='color: red'>Item Not Found</h2>";
                }
            })
            
    }

    const displayProduct1 = (list) => {
        const container = document.getElementById("d-div1");
        container.innerHTML = ""; 

        list.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("inside-div");
            div.innerHTML = `
                <img class="image" src="${element.strDrinkThumb}">
                <h2>Name: ${element.strDrink.slice(0, 19)}</h2>
                <h4>Category: ${element.strCategory} </h4>
                <p>${element.strInstructions.slice(0,35)} </p>
                <button class="details-btn">Details</button>
                <button class="addtocart">Add to Group</button>
            `;
            container.appendChild(div);

            // Details Button Event Listener
            div.querySelector(".details-btn").addEventListener("click", () => Details(element.idDrink));
            div.querySelector(".addtocart").addEventListener("click", () => ForCart(element.idDrink));

        });
    };

    // Details Section
    const Details = (id) => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                    const drink = data.drinks[0];
                    
                    // Modal Elements
                    const modal = document.getElementById("DetailsModal");
                    const modalImage = document.getElementById("modalImg");
                    const modalTitle = document.getElementById("modalTitle");
                    const modalInstructions = document.getElementById("modalInstructions");
                    const modalInstructions1 = document.getElementById("modalInstructions1");
                    const modalInstructions2 = document.getElementById("modalInstructions2");
                    const modalInstructions3 = document.getElementById("modalInstructions3");

                    // set to the html code
                    modalImage.src = drink.strDrinkThumb; 
                    modalTitle.innerText = drink.strDrink; 
                    modalInstructions.innerHTML = `<strong>Category:</strong> ${drink.strCategory}`;
                    modalInstructions1.innerHTML = `<strong>Alcoholic:</strong> ${drink.strAlcoholic}`;
                    modalInstructions2.innerHTML = `<strong>Instructions:</strong> ${drink.strInstructions.slice(0,200)}`;
                    modalInstructions3.innerHTML = `<strong>Glass Type:</strong> ${drink.strGlass}`;

                    // Show Modal
                    modal.style.display = "block";  
            })
            
        };


    // Add to cart section 
    const ForCart = (id) => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                    const drink = data.drinks[0];
                    const container = document.getElementById("ClassSection")

                    const div = document.createElement("div")
                    div.classList.add("addtocartDiv")

                    div.innerHTML = `
                    <p> ${count} </p>
                    <img class="image1" src="${drink.strDrinkThumb}">
                    <p> ${drink.strDrink.slice(0, 10)} </p>             
                    `             
                    if (count < 8)
                        {
                            container.appendChild(div) 
                        } 
                        else
                        {
                            alert("Can't add more then 8 product")
                        }
                    count++;      
                    ac.innerHTML = count-1;          
            })        
    };

    AllProduct1();
});
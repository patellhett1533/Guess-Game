const wordList = [
    {
        name: "Apple",
        hint: "a Company Who Produce Smartphones.",
        start: "A"
    },
    {
        name: "Havels",
        hint: "a Company Who Produce Electronic Materials.",
        start: "H"
    },
    {
        name: "BMW",
        hint: "Top Brand Of Car Company",
        start: "B"
    },
    {
        name: "Dell",
        hint: "High Selling Laptop Brand",
        start: "D"
    },
    {
        name: "Pepsi",
        hint: "a Soft Drink Which Is Promoted By Salman Khan",
        start: "P"
    },
    {
        name: "TVS",
        hint: " Indian Multinational Motorcycle Manufacturer",
        start: "T"
    },
    {
        name: "Vodafon",
        hint: "a British multinational telecommunications company",
        start: "V"
    },
    {
        name: "Google",
        hint: "Top Search Engine",
        start: "G"
    },
    {
        name: "Zara",
        hint: "one of the largest international fashion companies",
        start: "Z"
    },
    {
        name: "Nikon",
        hint: "a Company Who Produce DSLR & Lenses",
        start: "N"
    },
    {
        name: "ebay",
        hint: "a multibillion-dollar business with operations in about 32 countries",
        start: "e"
    },
    {
        name: "Youtube",
        hint: "operates a video sharing platform, allowing users to upload, view, and share videos, including movies, music clips.",
        start: "Y"
    },
    {
        name: "Audi",
        hint: "designs, develops, manufactures, and commercializes premium cars, and motorcycles globally",
        start: "A"
    },
    {
        name: "Disnep",
        hint: "a diversified international family entertainment and media enterprise",
        start: "D"
    },
    {
        name: "Amazon",
        hint: "an American multinational technology company which focuses on e-commerce.",
        start: "A"
    },
    {
        name: "FedEx",
        hint: " invented express transportation and remains the industry's global leader, providing rapid",
        start: "F"
    },
    {
        name: "Tesla",
        hint: " automotive and energy company",
        start: "T"
    },
    {
        name: "Pampers",
        hint: "disposable diapers of soft, absorbent paper with an outer covering of thin plastic.",
        start: "P"
    },
    {
        name: "Linkedin",
        hint: "Where You can Highlight Your Professional Skills and Experience.",
        start: "L"
    },
    {
        name: "CocaCola",
        hint: "a carbonated, sweetened soft drink",
        start: "C"
    },
    {
        name: "Tide",
        hint: " The next generation powder that keeps your hands safe and also ensures your clothes are bright and colorful.",
        start: "T"
    },
    {
        name: "Microsoft",
        hint: "The largest vendor of computer software in the world.",
        start: "M"
    },
    {
        name: "Paypal",
        hint: "an online payment platform that offers individuals and businesses low-cost services.",
        start: "P"
    },
    {
        name: "Astral",
        hint: "specialises in manufacturing world class plumbing, drainage, fire sprinkler for residential applications.",
        start: "A"
    },
    {
        name: "Netflix",
        hint: "a subscription-based streaming service that allows to watch TV shows and movies on an internet-connected device.",
        start: "N"
    },
    {
        name: "Hitachi",
        hint: "a multinational company with operations in sectors such as electronics, nuclear, transportation systems.",
        start: "H"
    },
    {
        name: "KitKat",
        hint: "a Chocalate Coted Wafer.",
        start: "K"
    },
    {
        name: "LandRover",
        hint: "a British brand of predominantly four-wheel drive, off-road capable vehicles",
        start: "L"
    },
    {
        name: "Oreo",
        hint: "a brand of sandwich cookie consisting of two wafers with a sweet creme filling.",
        start: "O"
    },
    {
        name: "Nasa",
        hint: "a U.S. government agency that is responsible for science and technology related to air and space.",
        start: "N"
    },
    {
        name: "KFC",
        hint: "American Non-Veg fast food chain restaurant",
        start: "K"
    },
    {
        name: "Tata",
        hint: "privately owned conglomerate of nearly 100 companies encompassing several primary business sectors",
        start: "T"
    },
    {
        name: "Oral-B",
        hint: "an American brand of oral hygiene products, including toothpastes, toothbrushes and mouthwashes.",
        start: "O"
    },
    {
        name: "Tropicana",
        hint: "100% orange juice with no added sugar for a healthy you.",
        start: "T"
    },
    {
        name: "Mitshubishi",
        hint: "a Foreign Company That Operates Businesses In Various Industries.",
        start: "M"
    },
    {
        name: "Visa",
        hint: " payment cards which included Debit card, Credit Card,Gift Card,etc.",
        start: "V"
    },
    {
        name: "TicTac",
        hint: "a brand of small, hard mint manufactured by the Italian company Ferrero",
        start: "T"
    },
    {
        name: "SubWay",
        hint: " Restaurant chain specializing in submarine sandwiches.",
        start: "S"
    },
    {
        name: "L&T",
        hint: "an Indian multinational company with business interests in engineering and  construction.",
        start: "L"
    },
    {
        name: "Nike",
        hint: "The world's largest athletic apparel and Footwear company,",
        start: "N"
    },
    {
        name: "IBM",
        hint: "a global technology company that provides hardware, software and cloud-based services.",
        start: "I"
    },
    {
        name: "JCB",
        hint: "a type of construction machine with a hydraulically operated shovel and an excavator arm on the back.",
        start: "J"
    },
    {
        name: "Yahoo",
        hint: "an Internet portal that incorporates a search engine and a directory of WWW sites organized.",
        start: "Y"
    },
    {
        name: "Rolex",
        hint: " British-founded Swiss watch designer and manufacturer Company.",
        start: "R"
    },
    {
        name: "Facebook",
        hint: " who sign-up for free profiles, to connect with friends, people they don't know, online.",
        start: "F"
    },
    {
        name: "Unilever",
        hint: "a manufacturer and supplier of fast-moving consumer goods.",
        start: "U"
    },
    {
        name: "ChupaChups",
        hint: "a Spanish brand of lollipop and other confectionery sold in the world.",
        start: "C"
    },
    {
        name: "Marlboro",
        hint: " an American brand of cigarettes,",
        start: "M"
    },
    {
        name: "Pintrest",
        hint: "a social curation website for sharing and categorizing images found online.",
        start: "P"
    },
    {
        name: "BurgerKing",
        hint: " the second largest fast food hamburger chain in the world.",
        start: "B"
    },
    {
        name: "Twitter",
        hint: " a free social networking site where users broadcast short posts",
        start: "T"
    },
    {
        name: "Reddit",
        hint: "a social news website and forum where content is socially curated and promoted by site members through voting.",
        start: "R"
    },
    {
        name: "HDFC",
        hint: "a Full Service Commercial 'Bank",
        start: "H"
    },

]
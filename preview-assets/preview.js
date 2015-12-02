var products = [{
    ProductID : 1,
    ProductName : "Chai",
    SupplierID : 1,
    CategoryID : 1,
    QuantityPerUnit : "10 boxes x 20 bags",
    UnitPrice : 18.0000,
    UnitsInStock : 39,
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 2,
    ProductName : "Chang",
    SupplierID : 1,
    CategoryID : 1,
    QuantityPerUnit : "24 - 12 oz bottles",
    UnitPrice : 19.0000,
    UnitsInStock : 17,
    UnitsOnOrder : 40,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 3,
    ProductName : "Aniseed Syrup",
    SupplierID : 1,
    CategoryID : 2,
    QuantityPerUnit : "12 - 550 ml bottles",
    UnitPrice : 10.0000,
    UnitsInStock : 13,
    UnitsOnOrder : 70,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 4,
    ProductName : "Chef Anton's Cajun Seasoning",
    SupplierID : 2,
    CategoryID : 2,
    QuantityPerUnit : "48 - 6 oz jars",
    UnitPrice : 22.0000,
    UnitsInStock : 53,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 5,
    ProductName : "Chef Anton's Gumbo Mix",
    SupplierID : 2,
    CategoryID : 2,
    QuantityPerUnit : "36 boxes",
    UnitPrice : 21.3500,
    UnitsInStock : 0,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : true,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 6,
    ProductName : "Grandma's Boysenberry Spread",
    SupplierID : 3,
    CategoryID : 2,
    QuantityPerUnit : "12 - 8 oz jars",
    UnitPrice : 25.0000,
    UnitsInStock : 120,
    UnitsOnOrder : 0,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 7,
    ProductName : "Uncle Bob's Organic Dried Pears",
    SupplierID : 3,
    CategoryID : 7,
    QuantityPerUnit : "12 - 1 lb pkgs.",
    UnitPrice : 30.0000,
    UnitsInStock : 15,
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : false,
    Category : {
        CategoryID : 7,
        CategoryName : "Produce",
        Description : "Dried fruit and bean curd"
    }
}, {
    ProductID : 8,
    ProductName : "Northwoods Cranberry Sauce",
    SupplierID : 3,
    CategoryID : 2,
    QuantityPerUnit : "12 - 12 oz jars",
    UnitPrice : 40.0000,
    UnitsInStock : 6,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 9,
    ProductName : "Mishi Kobe Niku",
    SupplierID : 4,
    CategoryID : 6,
    QuantityPerUnit : "18 - 500 g pkgs.",
    UnitPrice : 97.0000,
    UnitsInStock : 29,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : true,
    Category : {
        CategoryID : 6,
        CategoryName : "Meat/Poultry",
        Description : "Prepared meats"
    }
}, {
    ProductID : 10,
    ProductName : "Ikura",
    SupplierID : 4,
    CategoryID : 8,
    QuantityPerUnit : "12 - 200 ml jars",
    UnitPrice : 31.0000,
    UnitsInStock : 31,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 11,
    ProductName : "Queso Cabrales",
    SupplierID : 5,
    CategoryID : 4,
    QuantityPerUnit : "1 kg pkg.",
    UnitPrice : 21.0000,
    UnitsInStock : 22,
    UnitsOnOrder : 30,
    ReorderLevel : 30,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 12,
    ProductName : "Queso Manchego La Pastora",
    SupplierID : 5,
    CategoryID : 4,
    QuantityPerUnit : "10 - 500 g pkgs.",
    UnitPrice : 38.0000,
    UnitsInStock : 86,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 13,
    ProductName : "Konbu",
    SupplierID : 6,
    CategoryID : 8,
    QuantityPerUnit : "2 kg box",
    UnitPrice : 6.0000,
    UnitsInStock : 24,
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 14,
    ProductName : "Tofu",
    SupplierID : 6,
    CategoryID : 7,
    QuantityPerUnit : "40 - 100 g pkgs.",
    UnitPrice : 23.2500,
    UnitsInStock : 35,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 7,
        CategoryName : "Produce",
        Description : "Dried fruit and bean curd"
    }
}, {
    ProductID : 15,
    ProductName : "Genen Shouyu",
    SupplierID : 6,
    CategoryID : 2,
    QuantityPerUnit : "24 - 250 ml bottles",
    UnitPrice : 15.5000,
    UnitsInStock : 39,
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 16,
    ProductName : "Pavlova",
    SupplierID : 7,
    CategoryID : 3,
    QuantityPerUnit : "32 - 500 g boxes",
    UnitPrice : 17.4500,
    UnitsInStock : 29,
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 17,
    ProductName : "Alice Mutton",
    SupplierID : 7,
    CategoryID : 6,
    QuantityPerUnit : "20 - 1 kg tins",
    UnitPrice : 39.0000,
    UnitsInStock : 0,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : true,
    Category : {
        CategoryID : 6,
        CategoryName : "Meat/Poultry",
        Description : "Prepared meats"
    }
}, {
    ProductID : 18,
    ProductName : "Carnarvon Tigers",
    SupplierID : 7,
    CategoryID : 8,
    QuantityPerUnit : "16 kg pkg.",
    UnitPrice : 62.5000,
    UnitsInStock : 42,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 19,
    ProductName : "Teatime Chocolate Biscuits",
    SupplierID : 8,
    CategoryID : 3,
    QuantityPerUnit : "10 boxes x 12 pieces",
    UnitPrice : 9.2000,
    UnitsInStock : 25,
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 20,
    ProductName : "Sir Rodney's Marmalade",
    SupplierID : 8,
    CategoryID : 3,
    QuantityPerUnit : "30 gift boxes",
    UnitPrice : 81.0000,
    UnitsInStock : 40,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 21,
    ProductName : "Sir Rodney's Scones",
    SupplierID : 8,
    CategoryID : 3,
    QuantityPerUnit : "24 pkgs. x 4 pieces",
    UnitPrice : 10.0000,
    UnitsInStock : 3,
    UnitsOnOrder : 40,
    ReorderLevel : 5,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 22,
    ProductName : "Gustaf's Knäckebröd",
    SupplierID : 9,
    CategoryID : 5,
    QuantityPerUnit : "24 - 500 g pkgs.",
    UnitPrice : 21.0000,
    UnitsInStock : 104,
    UnitsOnOrder : 0,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 5,
        CategoryName : "Grains/Cereals",
        Description : "Breads, crackers, pasta, and cereal"
    }
}, {
    ProductID : 23,
    ProductName : "Tunnbröd",
    SupplierID : 9,
    CategoryID : 5,
    QuantityPerUnit : "12 - 250 g pkgs.",
    UnitPrice : 9.0000,
    UnitsInStock : 61,
    UnitsOnOrder : 0,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 5,
        CategoryName : "Grains/Cereals",
        Description : "Breads, crackers, pasta, and cereal"
    }
}, {
    ProductID : 24,
    ProductName : "Guaraná Fantástica",
    SupplierID : 10,
    CategoryID : 1,
    QuantityPerUnit : "12 - 355 ml cans",
    UnitPrice : 4.5000,
    UnitsInStock : 20,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : true,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 25,
    ProductName : "NuNuCa Nuß-Nougat-Creme",
    SupplierID : 11,
    CategoryID : 3,
    QuantityPerUnit : "20 - 450 g glasses",
    UnitPrice : 14.0000,
    UnitsInStock : 76,
    UnitsOnOrder : 0,
    ReorderLevel : 30,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 26,
    ProductName : "Gumbär Gummibärchen",
    SupplierID : 11,
    CategoryID : 3,
    QuantityPerUnit : "100 - 250 g bags",
    UnitPrice : 31.2300,
    UnitsInStock : 15,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 27,
    ProductName : "Schoggi Schokolade",
    SupplierID : 11,
    CategoryID : 3,
    QuantityPerUnit : "100 - 100 g pieces",
    UnitPrice : 43.9000,
    UnitsInStock : 49,
    UnitsOnOrder : 0,
    ReorderLevel : 30,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 28,
    ProductName : "Rössle Sauerkraut",
    SupplierID : 12,
    CategoryID : 7,
    QuantityPerUnit : "25 - 825 g cans",
    UnitPrice : 45.6000,
    UnitsInStock : 26,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : true,
    Category : {
        CategoryID : 7,
        CategoryName : "Produce",
        Description : "Dried fruit and bean curd"
    }
}, {
    ProductID : 29,
    ProductName : "Thüringer Rostbratwurst",
    SupplierID : 12,
    CategoryID : 6,
    QuantityPerUnit : "50 bags x 30 sausgs.",
    UnitPrice : 123.7900,
    UnitsInStock : 0,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : true,
    Category : {
        CategoryID : 6,
        CategoryName : "Meat/Poultry",
        Description : "Prepared meats"
    }
}, {
    ProductID : 30,
    ProductName : "Nord-Ost Matjeshering",
    SupplierID : 13,
    CategoryID : 8,
    QuantityPerUnit : "10 - 200 g glasses",
    UnitPrice : 25.8900,
    UnitsInStock : 10,
    UnitsOnOrder : 0,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 31,
    ProductName : "Gorgonzola Telino",
    SupplierID : 14,
    CategoryID : 4,
    QuantityPerUnit : "12 - 100 g pkgs",
    UnitPrice : 12.5000,
    UnitsInStock : 0,
    UnitsOnOrder : 70,
    ReorderLevel : 20,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 32,
    ProductName : "Mascarpone Fabioli",
    SupplierID : 14,
    CategoryID : 4,
    QuantityPerUnit : "24 - 200 g pkgs.",
    UnitPrice : 32.0000,
    UnitsInStock : 9,
    UnitsOnOrder : 40,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 33,
    ProductName : "Geitost",
    SupplierID : 15,
    CategoryID : 4,
    QuantityPerUnit : "500 g",
    UnitPrice : 2.5000,
    UnitsInStock : 112,
    UnitsOnOrder : 0,
    ReorderLevel : 20,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 34,
    ProductName : "Sasquatch Ale",
    SupplierID : 16,
    CategoryID : 1,
    QuantityPerUnit : "24 - 12 oz bottles",
    UnitPrice : 14.0000,
    UnitsInStock : 111,
    UnitsOnOrder : 0,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 35,
    ProductName : "Steeleye Stout",
    SupplierID : 16,
    CategoryID : 1,
    QuantityPerUnit : "24 - 12 oz bottles",
    UnitPrice : 18.0000,
    UnitsInStock : 20,
    UnitsOnOrder : 0,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 36,
    ProductName : "Inlagd Sill",
    SupplierID : 17,
    CategoryID : 8,
    QuantityPerUnit : "24 - 250 g  jars",
    UnitPrice : 19.0000,
    UnitsInStock : 112,
    UnitsOnOrder : 0,
    ReorderLevel : 20,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 37,
    ProductName : "Gravad lax",
    SupplierID : 17,
    CategoryID : 8,
    QuantityPerUnit : "12 - 500 g pkgs.",
    UnitPrice : 26.0000,
    UnitsInStock : 11,
    UnitsOnOrder : 50,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 38,
    ProductName : "Côte de Blaye",
    SupplierID : 18,
    CategoryID : 1,
    QuantityPerUnit : "12 - 75 cl bottles",
    UnitPrice : 263.5000,
    UnitsInStock : 17,
    UnitsOnOrder : 0,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 39,
    ProductName : "Chartreuse verte",
    SupplierID : 18,
    CategoryID : 1,
    QuantityPerUnit : "750 cc per bottle",
    UnitPrice : 18.0000,
    UnitsInStock : 69,
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 40,
    ProductName : "Boston Crab Meat",
    SupplierID : 19,
    CategoryID : 8,
    QuantityPerUnit : "24 - 4 oz tins",
    UnitPrice : 18.4000,
    UnitsInStock : 123,
    UnitsOnOrder : 0,
    ReorderLevel : 30,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 41,
    ProductName : "Jack's New England Clam Chowder",
    SupplierID : 19,
    CategoryID : 8,
    QuantityPerUnit : "12 - 12 oz cans",
    UnitPrice : 9.6500,
    UnitsInStock : 85,
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 42,
    ProductName : "Singaporean Hokkien Fried Mee",
    SupplierID : 20,
    CategoryID : 5,
    QuantityPerUnit : "32 - 1 kg pkgs.",
    UnitPrice : 14.0000,
    UnitsInStock : 26,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : true,
    Category : {
        CategoryID : 5,
        CategoryName : "Grains/Cereals",
        Description : "Breads, crackers, pasta, and cereal"
    }
}, {
    ProductID : 43,
    ProductName : "Ipoh Coffee",
    SupplierID : 20,
    CategoryID : 1,
    QuantityPerUnit : "16 - 500 g tins",
    UnitPrice : 46.0000,
    UnitsInStock : 17,
    UnitsOnOrder : 10,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 44,
    ProductName : "Gula Malacca",
    SupplierID : 20,
    CategoryID : 2,
    QuantityPerUnit : "20 - 2 kg bags",
    UnitPrice : 19.4500,
    UnitsInStock : 27,
    UnitsOnOrder : 0,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 45,
    ProductName : "Rogede sild",
    SupplierID : 21,
    CategoryID : 8,
    QuantityPerUnit : "1k pkg.",
    UnitPrice : 9.5000,
    UnitsInStock : 5,
    UnitsOnOrder : 70,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 46,
    ProductName : "Spegesild",
    SupplierID : 21,
    CategoryID : 8,
    QuantityPerUnit : "4 - 450 g glasses",
    UnitPrice : 12.0000,
    UnitsInStock : 95,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 47,
    ProductName : "Zaanse koeken",
    SupplierID : 22,
    CategoryID : 3,
    QuantityPerUnit : "10 - 4 oz boxes",
    UnitPrice : 9.5000,
    UnitsInStock : 36,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 48,
    ProductName : "Chocolade",
    SupplierID : 22,
    CategoryID : 3,
    QuantityPerUnit : "10 pkgs.",
    UnitPrice : 12.7500,
    UnitsInStock : 15,
    UnitsOnOrder : 70,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 49,
    ProductName : "Maxilaku",
    SupplierID : 23,
    CategoryID : 3,
    QuantityPerUnit : "24 - 50 g pkgs.",
    UnitPrice : 20.0000,
    UnitsInStock : 10,
    UnitsOnOrder : 60,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 50,
    ProductName : "Valkoinen suklaa",
    SupplierID : 23,
    CategoryID : 3,
    QuantityPerUnit : "12 - 100 g bars",
    UnitPrice : 16.2500,
    UnitsInStock : 65,
    UnitsOnOrder : 0,
    ReorderLevel : 30,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 51,
    ProductName : "Manjimup Dried Apples",
    SupplierID : 24,
    CategoryID : 7,
    QuantityPerUnit : "50 - 300 g pkgs.",
    UnitPrice : 53.0000,
    UnitsInStock : 20,
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : false,
    Category : {
        CategoryID : 7,
        CategoryName : "Produce",
        Description : "Dried fruit and bean curd"
    }
}, {
    ProductID : 52,
    ProductName : "Filo Mix",
    SupplierID : 24,
    CategoryID : 5,
    QuantityPerUnit : "16 - 2 kg boxes",
    UnitPrice : 7.0000,
    UnitsInStock : 38,
    UnitsOnOrder : 0,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 5,
        CategoryName : "Grains/Cereals",
        Description : "Breads, crackers, pasta, and cereal"
    }
}, {
    ProductID : 53,
    ProductName : "Perth Pasties",
    SupplierID : 24,
    CategoryID : 6,
    QuantityPerUnit : "48 pieces",
    UnitPrice : 32.8000,
    UnitsInStock : 0,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : true,
    Category : {
        CategoryID : 6,
        CategoryName : "Meat/Poultry",
        Description : "Prepared meats"
    }
}, {
    ProductID : 54,
    ProductName : "Tourtière",
    SupplierID : 25,
    CategoryID : 6,
    QuantityPerUnit : "16 pies",
    UnitPrice : 7.4500,
    UnitsInStock : 21,
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : false,
    Category : {
        CategoryID : 6,
        CategoryName : "Meat/Poultry",
        Description : "Prepared meats"
    }
}, {
    ProductID : 55,
    ProductName : "Pâté chinois",
    SupplierID : 25,
    CategoryID : 6,
    QuantityPerUnit : "24 boxes x 2 pies",
    UnitPrice : 24.0000,
    UnitsInStock : 115,
    UnitsOnOrder : 0,
    ReorderLevel : 20,
    Discontinued : false,
    Category : {
        CategoryID : 6,
        CategoryName : "Meat/Poultry",
        Description : "Prepared meats"
    }
}, {
    ProductID : 56,
    ProductName : "Gnocchi di nonna Alice",
    SupplierID : 26,
    CategoryID : 5,
    QuantityPerUnit : "24 - 250 g pkgs.",
    UnitPrice : 38.0000,
    UnitsInStock : 21,
    UnitsOnOrder : 10,
    ReorderLevel : 30,
    Discontinued : false,
    Category : {
        CategoryID : 5,
        CategoryName : "Grains/Cereals",
        Description : "Breads, crackers, pasta, and cereal"
    }
}, {
    ProductID : 57,
    ProductName : "Ravioli Angelo",
    SupplierID : 26,
    CategoryID : 5,
    QuantityPerUnit : "24 - 250 g pkgs.",
    UnitPrice : 19.5000,
    UnitsInStock : 36,
    UnitsOnOrder : 0,
    ReorderLevel : 20,
    Discontinued : false,
    Category : {
        CategoryID : 5,
        CategoryName : "Grains/Cereals",
        Description : "Breads, crackers, pasta, and cereal"
    }
}, {
    ProductID : 58,
    ProductName : "Escargots de Bourgogne",
    SupplierID : 27,
    CategoryID : 8,
    QuantityPerUnit : "24 pieces",
    UnitPrice : 13.2500,
    UnitsInStock : 62,
    UnitsOnOrder : 0,
    ReorderLevel : 20,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 59,
    ProductName : "Raclette Courdavault",
    SupplierID : 28,
    CategoryID : 4,
    QuantityPerUnit : "5 kg pkg.",
    UnitPrice : 55.0000,
    UnitsInStock : 79,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 60,
    ProductName : "Camembert Pierrot",
    SupplierID : 28,
    CategoryID : 4,
    QuantityPerUnit : "15 - 300 g rounds",
    UnitPrice : 34.0000,
    UnitsInStock : 19,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 61,
    ProductName : "Sirop d'érable",
    SupplierID : 29,
    CategoryID : 2,
    QuantityPerUnit : "24 - 500 ml bottles",
    UnitPrice : 28.5000,
    UnitsInStock : 113,
    UnitsOnOrder : 0,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 62,
    ProductName : "Tarte au sucre",
    SupplierID : 29,
    CategoryID : 3,
    QuantityPerUnit : "48 pies",
    UnitPrice : 49.3000,
    UnitsInStock : 17,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 63,
    ProductName : "Vegie-spread",
    SupplierID : 7,
    CategoryID : 2,
    QuantityPerUnit : "15 - 625 g jars",
    UnitPrice : 43.9000,
    UnitsInStock : 24,
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 64,
    ProductName : "Wimmers gute Semmelknödel",
    SupplierID : 12,
    CategoryID : 5,
    QuantityPerUnit : "20 bags x 4 pieces",
    UnitPrice : 33.2500,
    UnitsInStock : 22,
    UnitsOnOrder : 80,
    ReorderLevel : 30,
    Discontinued : false,
    Category : {
        CategoryID : 5,
        CategoryName : "Grains/Cereals",
        Description : "Breads, crackers, pasta, and cereal"
    }
}, {
    ProductID : 65,
    ProductName : "Louisiana Fiery Hot Pepper Sauce",
    SupplierID : 2,
    CategoryID : 2,
    QuantityPerUnit : "32 - 8 oz bottles",
    UnitPrice : 21.0500,
    UnitsInStock : 76,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 66,
    ProductName : "Louisiana Hot Spiced Okra",
    SupplierID : 2,
    CategoryID : 2,
    QuantityPerUnit : "24 - 8 oz jars",
    UnitPrice : 17.0000,
    UnitsInStock : 4,
    UnitsOnOrder : 100,
    ReorderLevel : 20,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}, {
    ProductID : 67,
    ProductName : "Laughing Lumberjack Lager",
    SupplierID : 16,
    CategoryID : 1,
    QuantityPerUnit : "24 - 12 oz bottles",
    UnitPrice : 14.0000,
    UnitsInStock : 52,
    UnitsOnOrder : 0,
    ReorderLevel : 10,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 68,
    ProductName : "Scottish Longbreads",
    SupplierID : 8,
    CategoryID : 3,
    QuantityPerUnit : "10 boxes x 8 pieces",
    UnitPrice : 12.5000,
    UnitsInStock : 6,
    UnitsOnOrder : 10,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 3,
        CategoryName : "Confections",
        Description : "Desserts, candies, and sweet breads"
    }
}, {
    ProductID : 69,
    ProductName : "Gudbrandsdalsost",
    SupplierID : 15,
    CategoryID : 4,
    QuantityPerUnit : "10 kg pkg.",
    UnitPrice : 36.0000,
    UnitsInStock : 26,
    UnitsOnOrder : 0,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 70,
    ProductName : "Outback Lager",
    SupplierID : 7,
    CategoryID : 1,
    QuantityPerUnit : "24 - 355 ml bottles",
    UnitPrice : 15.0000,
    UnitsInStock : 15,
    UnitsOnOrder : 10,
    ReorderLevel : 30,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 71,
    ProductName : "Flotemysost",
    SupplierID : 15,
    CategoryID : 4,
    QuantityPerUnit : "10 - 500 g pkgs.",
    UnitPrice : 21.5000,
    UnitsInStock : 26,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 72,
    ProductName : "Mozzarella di Giovanni",
    SupplierID : 14,
    CategoryID : 4,
    QuantityPerUnit : "24 - 200 g pkgs.",
    UnitPrice : 34.8000,
    UnitsInStock : 14,
    UnitsOnOrder : 0,
    ReorderLevel : 0,
    Discontinued : false,
    Category : {
        CategoryID : 4,
        CategoryName : "Dairy Products",
        Description : "Cheeses"
    }
}, {
    ProductID : 73,
    ProductName : "Röd Kaviar",
    SupplierID : 17,
    CategoryID : 8,
    QuantityPerUnit : "24 - 150 g jars",
    UnitPrice : 15.0000,
    UnitsInStock : 101,
    UnitsOnOrder : 0,
    ReorderLevel : 5,
    Discontinued : false,
    Category : {
        CategoryID : 8,
        CategoryName : "Seafood",
        Description : "Seaweed and fish"
    }
}, {
    ProductID : 74,
    ProductName : "Longlife Tofu",
    SupplierID : 4,
    CategoryID : 7,
    QuantityPerUnit : "5 kg pkg.",
    UnitPrice : 10.0000,
    UnitsInStock : 4,
    UnitsOnOrder : 20,
    ReorderLevel : 5,
    Discontinued : false,
    Category : {
        CategoryID : 7,
        CategoryName : "Produce",
        Description : "Dried fruit and bean curd"
    }
}, {
    ProductID : 75,
    ProductName : "Rhönbräu Klosterbier",
    SupplierID : 12,
    CategoryID : 1,
    QuantityPerUnit : "24 - 0.5 l bottles",
    UnitPrice : 7.7500,
    UnitsInStock : 125,
    UnitsOnOrder : 0,
    ReorderLevel : 25,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 76,
    ProductName : "Lakkalikööri",
    SupplierID : 23,
    CategoryID : 1,
    QuantityPerUnit : "500 ml",
    UnitPrice : 18.0000,
    UnitsInStock : 57,
    UnitsOnOrder : 0,
    ReorderLevel : 20,
    Discontinued : false,
    Category : {
        CategoryID : 1,
        CategoryName : "Beverages",
        Description : "Soft drinks, coffees, teas, beers, and ales"
    }
}, {
    ProductID : 77,
    ProductName : "Original Frankfurter grüne Soße",
    SupplierID : 12,
    CategoryID : 2,
    QuantityPerUnit : "12 boxes",
    UnitPrice : 13.0000,
    UnitsInStock : 32,
    UnitsOnOrder : 0,
    ReorderLevel : 15,
    Discontinued : false,
    Category : {
        CategoryID : 2,
        CategoryName : "Condiments",
        Description : "Sweet and savory sauces, relishes, spreads, and seasonings"
    }
}];

$(document).ready(function() {
    $("#grid").kendoGrid({
        dataSource: {
            data: products,
            schema: {
                model: {
                    fields: {
                        ProductName: { type: "string" },
                        UnitPrice: { type: "number" },
                        UnitsInStock: { type: "number" }
                    }
                }
            },
            pageSize: 20
        },
        height: 550,
        scrollable: true,
        sortable: true,
        filterable: true,
        pageable: {
            input: true,
            numeric: false
        },
        columns: [
            "ProductName",
            { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "130px" },
            { field: "UnitsInStock", title: "Units In Stock", width: "130px" },
        ]
    });

    kendo.bind($("#example"), {
        countries: [
            "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia & Herzegovina", "Bulgaria",
            "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece",
            "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia",
            "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino",
            "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "United States",
            "Vatican City"
        ],
        multiSelectValue: [ "Finland", "Estonia" ],
        today: kendo.toString(new Date()),
        sharedDataSource: new kendo.data.DataSource({
            transport: {
                read: {
                    url: '/kendo-ui/content/web/datasource/internet-users.json',
                    dataType: "json"
                }
            },
            sort: {
                field: "year",
                dir: "asc"
            },
            filter: [
                { field: "country", operator: "equals", value: "United States" },
                { field: "year", operator: "greaterThanEqual", value: 2000 }
            ],
            schema: {
                model: {
                    fields: {
                        year: {
                            type: "number"
                        },
                        value: {
                            type: "string"
                        }
                    }
                }
            }
        })
    });

    var serviceBaseUrl = "http://demos.telerik.com/kendo-ui/service";
    $("#scheduler").kendoScheduler({
        date: new Date("2013/6/13"),
        startTime: new Date("2013/6/13 07:00 AM"),
        endTime: new Date("2013/6/13 08:00 PM"),
        views: [
            { type: "day", selected: true },
            "week",
            "month"
        ],
        editable: false,
        timezone: "Etc/UTC",
        dataSource: {
            batch: true,
            transport: {
                read: {
                    url: serviceBaseUrl + "/meetings",
                    dataType: "jsonp"
                },
                update: {
                    url: serviceBaseUrl + "/meetings/update",
                    dataType: "jsonp"
                },
                create: {
                    url: serviceBaseUrl + "/meetings/create",
                    dataType: "jsonp"
                },
                destroy: {
                    url: serviceBaseUrl + "/meetings/destroy",
                    dataType: "jsonp"
                },
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return {models: kendo.stringify(options.models)};
                    }
                }
            },
            schema: {
                model: {
                    id: "meetingID",
                    fields: {
                        meetingID: { from: "MeetingID", type: "number" },
                        title: { from: "Title", defaultValue: "No title", validation: { required: true } },
                        start: { type: "date", from: "Start" },
                        end: { type: "date", from: "End" },
                        startTimezone: { from: "StartTimezone" },
                        endTimezone: { from: "EndTimezone" },
                        description: { from: "Description" },
                        recurrenceId: { from: "RecurrenceID" },
                        recurrenceRule: { from: "RecurrenceRule" },
                        recurrenceException: { from: "RecurrenceException" },
                        roomId: { from: "RoomID", nullable: true },
                        atendees: { from: "Atendees", nullable: true },
                        isAllDay: { type: "boolean", from: "IsAllDay" }
                    }
                }
            }
        }
    });

    var notification = $("#notification").kendoNotification({
        autoHideAfter: 0,
        hideOnClick: false,
        appendTo: "#notification"
    }).data("kendoNotification");

    notification.info("information");
    notification.success("success");
    notification.warning("warning");
    notification.error("error");
});

function initialize() {
    $("#area-chart").kendoChart({
        transitions: false,
        title: {
            text: "Internet Users"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area"
        },
        series: [
            {
                name: "United States",
                data: [67.96, 68.93, 75, 74, 78]
            }, {
                name: "World",
                data: [15.7, 16.7, 20, 23.5, 26.6]
            }
        ],
        valueAxis: {
            labels: {
                format: "{0}%"
            }
        },
        categoryAxis: {
            categories: [2005, 2006, 2007, 2008, 2009]
        },
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });

    $("#mixed-chart").kendoChart({
        transitions: false,
        title: {
            text: "Hybrid car mileage report"
        },
        legend: {
            position: "bottom"
        },
        series: [{
            type: "column",
            data: [20, 40, 45, 30, 50],
            stack: true,
            name: "on battery"
        }, {
            type: "column",
            data: [20, 30, 35, 35, 40],
            stack: true,
            name: "on gas"
        }, {
            type: "line",
            data: [7.8, 6.2, 5.9, 7.4, 5.6],
            name: "l/100 km",
            axis: "l100km"
        }],
        valueAxes: [{
            title: { text: "miles" },
            min: 0,
            max: 100
        }, {
            name: "l100km",
            title: { text: "liters per 100km" }
        }],
        categoryAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            axisCrossingValues: [0, 10]
        }
    });


    $("#bubble-chart").kendoChart({
        transitions: false,
        title: {
            text: "Crime statistics"
        },
        legend: {
            visible: false
        },
        dataSource: {
            transport: {
                read: {
                    url: '/kendo-ui/content/dataviz/js/crime-stats.json',
                    dataType: "json"
                }
            }
        },
        series: [{
            type: "bubble",
            xField: "murder",
            yField: "burglary",
            sizeField: "population",
            categoryField: "state"
        }],
        xAxis: {
            labels: {
                format: "{0:N0}"
            },
            title: {
                text: "Murders per 100,000 population"
            }
        },
        yAxis: {
            labels: {
                format: "{0:N0}"
            },
            title: {
                text: "Burglaries per 100,000 population"
            }
        },
        tooltip: {
            visible: true,
            format: "{3}: Population {2:N0}"
        }
    });

    $("#pie-chart").kendoChart({
        transitions: false,
        title: {
            text: "Break-up of Spain Electricity Production for 2008"
        },
        legend: {
            position: "bottom",
            labels: {
                template: "#= text # (#= value #%)"
            }
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent"
            }
        },
        series: [{
            type: "pie",
            data: [{
                category: "Hydro",
                value: 22
            }, {
                category: "Solar",
                value: 2
            }, {
                category: "Nuclear",
                value: 49
            }, {
                category: "Wind",
                value: 27
            }]
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    });

    $("#linear-gauge").kendoLinearGauge({
        transitions: false,
        pointer: {
            value: 30
        }
    });

    $("#radial-gauge").kendoRadialGauge({
        transitions: false,
        pointer: {
            value: 40
        },
        scale: {
            max: 180,
            ranges: [
                { from: 160, to: 180, color: "#ff0000" }
            ]
        }
    });
}

$(document).ready(initialize);
$("#example").bind("kendo:skinChange", initialize);

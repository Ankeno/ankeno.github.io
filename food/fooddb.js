// Seasoning mixes
var mix = [
    {
        name: 'Provence Herb Mix',
        ingredients: ['Rosemary', 'Basil', 'Thyme', 'Parsley', 'Fennel', 'Marjoram', 'Tarragon', 'Savory', 'Oregano']
    },
    {
        name: 'Italian Herb Mix',
        ingredients: ['Basil']
    },
    {
        name: 'Curry Powder',
        ingredients: ['Turmeric', 'Coriander', 'Cumin', 'Fenugreek', 'Red pepper']
    },
    {
        name: 'Ras el Hanout',
        ingredients: ['Cardamom', 'Cumin', 'Cloves', 'Nutmeg', 'Cinnamon', 'Pepper', 'Paprika', 'Turmeric', 'Coriander', 'Ginger']
    },
];

// Food

var herb_list = ['Allspice', 'Anise', 'Basil', 'Bay Leaf', 'Caraway', 'Cardamom', 'Cayenne Pepper', 'Celery', 'Chervil', 'Chili', 'Chives', 'Cilantro', 'Cinnamon', 'Cloves', 'Cocoa', 'Coriander', 'Cumin', 'Curry', 'Dill', 'Fennel', 'Fenugreek', 'Garlic', 'Ginger', 'Mace', 'Marjoram', 'Mint', 'Mustard', 'Nutmeg', 'Onion', 'Oregano', 'Paprika', 'Parsley', 'Pepper', 'Rosemary', 'Saffron', 'Sage', 'Salt', 'Savory', 'Sesame', 'Sugar', 'Sumac', 'Tarragon', 'Thyme', 'Turmeric', 'Vanilla']

var food = ['Rice', 'Vegetables', 'Potatoes', 'Mushrooms', 'Poultry', 'Beef', 'Pork', 'Lamb', 'Fish', 'Pasta', 'Soups', 'Sauces', 'Cheese', 'Eggs', 'Bread', 'Fruit', 'Dessert', 'Baked Goods']

// Herbs and spices
var herbs = [
    {
        name: 'Allspice',
        alt_name: '',
        usage: ['Rice', 'Vegetables', 'Potatoes', 'Poultry', 'Beef', 'Pork', 'Fish', 'Bread', 'Fruit', 'Dessert', 'Baked Goods']
    },
    {
        name: 'Anise',
        alt_name: '',
        usage: ['Vegetables', 'Mushrooms', 'Beef', 'Fish', 'Soups', 'Sauces', 'Cheese', 'Bread', 'Fruit', 'Dessert', 'Baked Goods']
    },
    {
        name: 'Basil',
        alt_name: '',
        usage: ['Rice', 'Vegetables', 'Potatoes', 'Mushrooms', 'Poultry', 'Beef', 'Pork', 'Lamb', 'Fish', 'Pasta', 'Soups', 'Sauces', 'Cheese', 'Eggs', 'Fruit']
    },
    {
        name: 'Bay Leaf',
        alt_name: '',
        usage: ['Poultry', 'Beef', 'Lamb', 'Fish', 'Pasta', 'Sauces', 'Eggs', 'Fruit']
    },
    {
        name: 'Caraway',
        alt_name: '',
        usage: ['Vegetables', 'Poultry', 'Pork', 'Lamb', 'Fish', 'Soups', 'Cheese', 'Bread']
    },
    {
        name: 'Cardamom',
        alt_name: '',
        usage: ['Vegetables', 'Bread', 'Fruit', 'Dessert', 'Baked Goods']
    },
    {
        name: 'Cayenne Pepper',
        alt_name: '',
        usage: ['Potatoes', 'Eggs']
    },
    {
        name: 'Celery',
        alt_name: '',
        usage: ['Poultry', 'Fish', 'Soups', 'Sauces']
    },
    {
        name: 'Chervil',
        alt_name: '',
        usage: ['Vegetables', 'Poultry', 'Fish']
    },
    {
        name: 'Chili',
        alt_name: '',
        usage: ['Vegetables', 'Poultry', 'Beef', 'Pork', 'Lamb']
    },
    {
        name: 'Chives',
        alt_name: '',
        usage: ['Rice', 'Vegetables', 'Potatoes', 'Mushrooms', 'Lamb', 'Fish', 'Pasta', 'Soups', 'Sauces', 'Eggs', 'Bread']
    },
    {
        name: 'Cilantro',
        alt_name: '',
        usage: ['Vegetables', 'Poultry', 'Beef', 'Pork', 'Fish', 'Soups', 'Sauces']
    },
    {
        name: 'Cinnamon',
        alt_name: '',
        usage: ['Potatoes', 'Mushrooms', 'Poultry', 'Pork', 'Bread', 'Fruit', 'Dessert', 'Baked Goods']
    },
    {
        name: 'Cloves',
        alt_name: '',
        usage: ['Rice', 'Mushrooms', 'Beef', 'Pork', 'Fish', 'Sauces', 'Eggs', 'Fruit', 'Dessert', 'Baked Goods']
    },
    {
        name: 'Cocoa',
        alt_name: '',
        usage: ['Dessert', 'Baked Goods']
    },
    {
        name: 'Coriander',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Cumin',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Curry',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Dill',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Fennel',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Fenugreek',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Garlic',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Ginger',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Mace',
        alt_name: '',
        usage: ['Dessert', 'Baked Goods']
    },
    {
        name: 'Marjoram',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Mint',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Mustard',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Nutmeg',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Onion',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Oregano',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Paprika',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Parsley',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Pepper',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Rosemary',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Saffron',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Sage',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Salt',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Savory',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Sesame',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Sugar',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Sumac',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Tarragon',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Thyme',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Turmeric',
        alt_name: '',
        usage: ['', '']
    },
    {
        name: 'Vanilla',
        alt_name: '',
        usage: ['', '']
    }
];

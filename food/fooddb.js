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

// Foods

var foods = ['Artichoke', 'Eggplant', 'Mushrooms', 'Olives', 'Potatoes', 'Tomato', 'Zucchini', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Pork']

var food = ['Almonds', 'Anchovies', 'Apple', 'Apricots', 'Artichoke', 'Arugula', 'Asparagus', 'Avocado', 'Bacon', 'Bananas', 'Beans', 'Beef', 'Beets', 'Berries', 'Blueberries', 'Broccoli', 'Brussels', 'Bulb', 'Cabbage', 'Cantaloupe', 'Carrot', 'Cashews', 'Cauliflower', 'Caviar', 'Celery', 'Cheese', 'Cherries', 'Chicken', 'Chickpeas', 'Chives', 'Citrus', 'Coconut', 'Corn', 'Crab', 'Cranberries', 'Cream', 'Cucumber', 'Currant', 'Currants', 'Daikon', 'Duck', 'Edamame', 'Eggplant', 'Eggs', 'Endive', 'Fatty', 'Fava', 'Fennel', 'Feta', 'Figs', 'Fish', 'Game', 'Goat', 'Gooseberries', 'Grapefruit', 'Grapefruits', 'Grapes', 'Green', 'Greens', 'Ham', 'Hazelnuts', 'Honeydew', 'Jicama', 'Kale', 'Kiwi', 'Lamb', 'Leafy', 'Leeks', 'Lemon', 'Lemons', 'Lentils', 'Lettuce', 'Lime', 'Mango', 'Mangoes', 'Meat', 'Melon', 'Melons', 'Mozzarella', 'Mushrooms', 'Mutton', 'Nectarines', 'Nuts', 'Okra', 'Olives', 'Onions', 'Oranges', 'Parmesan', 'Parsnips', 'Peach', 'Peaches', 'Peanuts', 'Pears', 'Peas', 'Pecans', 'Peppers', 'Pickles', 'Pine', 'Pineapple', 'Pineapples', 'Pistachios', 'Plums', 'Pomegranate', 'Pork', 'Potatoes', 'Pumpkin', 'Rabbit', 'Rabe', 'Radish', 'Raisins', 'Raspberries', 'Raw', 'Rhubarb', 'Salad', 'Salmon', 'Sauces', 'Sausage', 'Sausages', 'Scallions', 'Seafood', 'Shallots', 'Shrimp', 'Spinach', 'Sprouts', 'Squash', 'Strawberries', 'Sweet', 'Tofu', 'Tomatillos', 'Tomato', 'Tuna', 'Turkey', 'Turnips', 'Veal', 'Veggies', 'Venison', 'Walnuts', 'Watercress', 'Watermelon', 'Zucchini']

// Herbs and spices
var herb = [
    {
        name: 'Basil',
        alt_name: 'Herb1',
        usage: ['Potato', 'Meat']
    },
    {
        name: 'Herb 2',
        alt_name: 'Herb2',
        usage: ['Potato']
    }
];

var seasoning = [
    {
        name: 'Basil',
        alt_name: '',
        usage: ['Artichoke', 'Eggplant', 'Mushrooms', 'Olives', 'Potatoes', 'Tomato', 'Zucchini', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Pork']
    },
    {
        name: 'Bay Leaf',
        alt_name: '',
        usage: ['Cabbage', 'Carrot', 'Celery', 'Citrus', 'Mushrooms', 'Onions', 'Peas', 'Pickles', 'Potatoes', 'Tomato and Tomato Sauces', 'Beans', 'Beef', 'Chicken', 'Fish', 'Game', 'Lamb', 'Lentils', 'Pork']
    },
    {
        name: 'Chervil',
        alt_name: '',
        usage: ['Arugula', 'Asparagus', 'Beets', 'Broccoli Rabe', 'Carrot', 'Celery', 'Endive', 'Lettuce', 'Green Beans', 'Kale', 'Mushrooms', 'Onions', 'Peas', 'Potatoes', 'Shallots', 'Spinach', 'Tomato', 'Watercress', 'Zucchini', 'Beans', 'Cheese', 'Chicken', 'Cream', 'Eggs', 'Fish And Seafood', 'Turkey']
    },
    {
        name: 'Chives',
        alt_name: '',
        usage: ['Avocado', 'Carrot', 'Celery', 'Cucumber', 'Lettuce', 'Mushrooms', 'Onions', 'Parsnips', 'Potatoes', 'Shallots', 'Tomato', 'Turnips', 'Zucchini', 'Bacon', 'Cheddar Cheese', 'Cream Cheese', 'Eggs', 'Fish and Seafood', 'Goat Cheese']
    },
    {
        name: 'Cilantro',
        alt_name: '',
        usage: ['Avocado', 'Carrot', 'Corn', 'Jicama', 'Lettuce', 'Mango', 'Onions', 'Potatoes', 'Tomato', 'Tomatillos', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Lamb', 'Lentils', 'Pork']
    },
    {
        name: 'Dill',
        alt_name: '',
        usage: ['Asparagus', 'Beets', 'Carrot', 'Celery', 'Cucumber', 'Onions', 'Potatoes', 'Spinach', 'Tomato', 'Zucchini', 'Cheese', 'Chicken', 'Eggs', 'Beans', 'Fish and Seafood', 'Lamb']
    },
    {
        name: 'Fennel',
        alt_name: '',
        usage: ['Asparagus', 'Beets', 'Brussels Sprouts', 'Cabbage', 'Carrot', 'Celery', 'Citrus', 'Cucumber', 'Onions', 'Mushrooms', 'Potatoes', 'Tomato', 'Zucchini', 'Beans', 'Cheese', 'Chicken', 'Duck', 'Eggs', 'Fish and Seafood', 'Lamb', 'Lentils', 'Pork']
    },
    {
        name: 'Garlic',
        alt_name: '',
        usage: ['Artichoke', 'Asparagus', 'Avocado', 'Carrot', 'Celery', 'Eggplant', 'Mushrooms', 'Onions', 'Peas', 'Peppers', 'Potatoes', 'Tomato', 'Zucchini', 'Beans', 'Beef', 'Chicken', 'Cheese', 'Eggs', 'Fish and Seafood', 'Pork', 'Sausage']
    },
    {
        name: 'Horseradish',
        alt_name: '',
        usage: ['Beets', 'Broccoli', 'Cabbage', 'Carrot', 'Cauliflower', 'Celery', 'Endive', 'Lemon', 'Lettuce', 'Onions', 'Parsnips', 'Potatoes', 'Tomato', 'Turnips', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Ham', 'Sausage']
    },
    {
        name: 'Lemongrass',
        alt_name: '',
        usage: ['Cabbage', 'Carrot', 'Coconut', 'Mushrooms', 'Onions', 'Peaches', 'Peas', 'Pears', 'Peppers', 'Shallots', 'Tomato', 'Beef', 'Chicken', 'Fish and Seafood', 'Peanuts', 'Pork', 'Tofu']
    },
    {
        name: 'Marjoram',
        alt_name: '',
        usage: ['Apple', 'Apricots', 'Asparagus', 'Beets', 'Cabbage', 'Carrot', 'Cauliflower', 'Celery', 'Cherries', 'Eggplant', 'Mushrooms', 'Oranges', 'Peas', 'Peppers', 'Pomegranate', 'Potatoes', 'Spinach', 'Squash', 'Tomato', 'Beans', 'Cheese', 'Chicken', 'Eggs', 'Fish And Seafood', 'Sausage', 'Turkey']
    },
    {
        name: 'Mint',
        alt_name: '',
        usage: ['Apple', 'Avocado', 'Cantaloupe', 'Carrot', 'Cranberries', 'Cucumber', 'Eggplant', 'Honeydew', 'Kiwi', 'Lemon', 'Lime', 'Mangoes', 'Onions', 'Oranges', 'Peas', 'Pineapple', 'Potatoes', 'Raspberries', 'Strawberries', 'Tomato', 'Watermelon', 'Almonds', 'Beans', 'Chicken', 'Chickpeas', 'Feta Cheese', 'Fish And Seafood', 'Lamb', 'Lentils', 'Pork', 'Veal']
    },
    {
        name: 'Oregano',
        alt_name: '',
        usage: ['Bell Peppers', 'Carrot', 'Celery', 'Mushrooms', 'Olives', 'Onions', 'Potatoes', 'Tomato', 'Zucchini', 'Beans', 'Beef', 'Cheddar Cheese', 'Chicken', 'Eggs', 'Feta Cheese', 'Fish And Seafood', 'Lamb', 'Mozzarella Cheese', 'Parmesan Cheese', 'Pork', 'Sausage', 'Veal']
    },
    {
        name: 'Parsley',
        alt_name: '',
        usage: ['Carrot', 'Celery', 'Eggplant', 'Lettuce', 'Mushrooms', 'Onions', 'Peas', 'Potatoes', 'Tomato', 'Zucchini', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Game', 'Lamb', 'Lentils', 'Pork', 'Sausage', 'Veal']
    },
    {
        name: 'Rosemary',
        alt_name: '',
        usage: ['Carrot', 'Celery', 'Eggplant', 'Green Beans', 'Mushrooms', 'Onions', 'Peas', 'Potatoes', 'Tomato', 'Beans', 'Cheese', 'Chicken', 'Eggs', 'Lamb', 'Pork', 'Salmon', 'Tuna']
    },
    {
        name: 'Sage',
        alt_name: '',
        usage: ['Apple', 'Carrot', 'Eggplant', 'Onions', 'Peas', 'Potatoes', 'Squash', 'Tomato', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Duck', 'Eggs', 'Fish', 'Lamb', 'Pork', 'Sausage', 'Turkey', 'Veal']
    },
    {
        name: 'Scallions',
        alt_name: '',
        usage: ['Cabbage', 'Carrot', 'Celery', 'Mushrooms', 'Onions', 'Peas', 'Potatoes', 'Tomato', 'Bacon', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Ham']
    },
    {
        name: 'Tarragon',
        alt_name: '',
        usage: ['Artichoke', 'Asparagus', 'Carrot', 'Celery', 'Green Beans', 'Lettuce', 'Mushrooms', 'Onions', 'Potatoes', 'Shallots', 'Spinach', 'Tomato', 'Beef', 'Cheese', 'Chicken', 'Duck', 'Eggs', 'Fish and Seafood', 'Rabbit', 'Turkey']
    },
    {
        name: 'Thyme',
        alt_name: '',
        usage: ['Bell Peppers', 'Carrot', 'Corn', 'Cucumber', 'Eggplant', 'Green Beans', 'Leeks', 'Mushrooms', 'Onions', 'Peas', 'Potatoes', 'Spinach', 'Tomato', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish And Seafood', 'Lamb', 'Rabbit', 'Sausage', 'Turkey', 'Veal']
    },
    {
        name: 'Watercress',
        alt_name: '',
        usage: ['Cabbage', 'Corn', 'Cucumber', 'Lemon', 'Lettuce', 'Mushrooms', 'Onions', 'Oranges', 'Peaches', 'Potatoes', 'Tomato', 'Chicken', 'Fish and Seafood']
    },
    {
        name: 'Anise',
        alt_name: '',
        usage: ['Apricots', 'Beets', 'Blueberries', 'Carrot', 'Grapefruit', 'Green Beans', 'Lemon', 'Lettuce', 'Onions', 'Oranges', 'Peaches', 'Pears', 'Plums', 'Raspberries', 'Shallots', 'Squash', 'Sweet Tomato', 'Zucchini', 'Almonds', 'Beef', 'Chicken', 'Eggs', 'Pork', 'Walnuts']
    },
    {
        name: 'Chamomile',
        alt_name: '',
        usage: ['Apple', 'Apricots', 'Blueberries', 'Grapefruit', 'Lemon', 'Oranges', 'Peaches', 'Pineapple', 'Plums', 'Almonds', 'Hazelnuts', 'Pecans', 'Walnuts']
    },
    {
        name: 'Elderberry',
        alt_name: '',
        usage: ['Apple', 'Berries', 'Cherries', 'Figs', 'Grapefruit', 'Gooseberries', 'Grapes', 'Melon', 'Oranges', 'Peach', 'Pears', 'Plums', 'Pomegranate', 'Rhubarb', 'Almonds', 'Cheese']
    },
    {
        name: 'Elderflower',
        alt_name: '',
        usage: ['Apple', 'Berries', 'Cherries', 'Figs', 'Grapefruit', 'Gooseberries', 'Grapes', 'Melon', 'Oranges', 'Peach', 'Pears', 'Plums', 'Pomegranate', 'Rhubarb', 'Almonds', 'Cheese', 'Cabbage', 'Lettuce', 'Onions', 'Salad Veggies', 'Tomato', 'Chicken', 'Duck', 'Eggs']
    },
    {
        name: 'Fenugreek',
        alt_name: '',
        usage: ['Carrot', 'Cauliflower', 'Celery', 'Coconut', 'Lemon', 'Eggplant', 'Mango', 'Mushrooms', 'Okra', 'Onions', 'Peas', 'Peppers', 'Potatoes', 'Shallots', 'Spinach', 'Tomato', 'Beef', 'Beans', 'Cashews', 'Chicken', 'Chickpeas', 'Eggs', 'Fish and Seafood', 'Lamb']
    },
    {
        name: 'Lemon Balm',
        alt_name: '',
        usage: ['Berries', 'Celery', 'Lettuce', 'Melon', 'Nectarines', 'Onions', 'Oranges', 'Peaches', 'Pears', 'Pineapple', 'Strawberries', 'Tomato', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Turkey']
    },
    {
        name: 'Lovage',
        alt_name: '',
        usage: ['Asparagus', 'Carrot', 'Cucumber', 'Eggplant', 'Leeks', 'Lettuce', 'Mushrooms', 'Onions', 'Peas', 'Potatoes', 'Shallots', 'Tomato', 'Cheese', 'Chicken', 'Duck', 'Eggs', 'Fish and Seafood', 'Lentils']
    },
    {
        name: 'Savory',
        alt_name: '',
        usage: ['Beets', 'Broccoli', 'Cabbage', 'Carrot', 'Celery', 'Green Beans', 'Onions', 'Peas', 'Peppers', 'Potatoes', 'Spinach', 'Tomato', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Game', 'Fatty Fish', 'Fava Beans', 'Lamb', 'Lentils', 'Pork', 'Sausage', 'Turkey', 'Veal']
    },
    {
        name: 'Wasabi',
        alt_name: '',
        usage: ['Avocado', 'Cabbage', 'Carrot', 'Chives', 'Cucumber', 'Daikon Radish', 'Edamame', 'Lettuce', 'Onions', 'Potatoes', 'Shallots', 'Beef', 'Caviar', 'Crab Meat', 'Cream Cheese', 'Chicken', 'Raw Fish', 'Salmon', 'Shrimp', 'Tofu']
    },
    {
        name: 'Allspice',
        alt_name: '',
        usage: ['Apple', 'Carrot', 'Currant', 'Eggplant', 'Onions', 'Pumpkin', 'Raisins', 'Squash', 'Sweet Potatoes', 'Almonds', 'Beef', 'Chicken', 'Eggs', 'Fish and Seafood', 'Game', 'Pecans', 'Turkey', 'Walnuts']
    },
    {
        name: 'Anise',
        alt_name: '',
        usage: ['Apricots', 'Carrot', 'Celery', 'Cranberries', 'Currants', 'Figs', 'Lemon', 'Oranges', 'Pears', 'Pineapple', 'Pomegranate', 'Potatoes', 'Shallots', 'Turnips', 'Almonds', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish And Seafood', 'Peanuts', 'Pecans', 'Pork', 'Walnuts']
    },
    {
        name: 'Capers',
        alt_name: '',
        usage: ['Artichoke', 'Celery', 'Cucumber', 'Eggplant', 'Lettuce', 'Mushrooms', 'Olives', 'Onions', 'Potatoes', 'Shallots', 'Tomato', 'Anchovies', 'Beef', 'Cheese', 'Chicken', 'Fish and Seafood', 'Lamb']
    },
    {
        name: 'Caraway',
        alt_name: '',
        usage: ['Apple', 'Brussels Sprouts', 'Cabbage', 'Carrot', 'Celery', 'Cucumber', 'Green Beans', 'Onions', 'Potatoes', 'Tomato', 'Turnips', 'Bacon', 'Beef', 'Cheese', 'Duck', 'Eggs', 'Pork', 'Sausage']
    },
    {
        name: 'Cardamom',
        alt_name: '',
        usage: ['Apple', 'Oranges', 'Pears', 'Sweet Potatoes', 'Tomato', 'Almonds', 'Cashews', 'Eggs', 'Lentils', 'Pistachios', 'Walnuts']
    },
    {
        name: 'Celery Seeds',
        alt_name: '',
        usage: ['Cabbage', 'Carrot', 'Celery', 'Cucumber', 'Lettuce', 'Onions', 'Peppers', 'Potatoes', 'Tomato', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Pork']
    },
    {
        name: 'Chili Pepper',
        alt_name: '',
        usage: ['Carrot', 'Celery', 'Corn', 'Cucumber', 'Mushrooms', 'Onions', 'Peas', 'Potatoes', 'Tomato', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood']
    },
    {
        name: 'Cinnamon',
        alt_name: '',
        usage: ['Apple', 'Apricots', 'Bananas', 'Eggplant', 'Onions', 'Oranges', 'Peaches', 'Pears', 'Pumpkin', 'Raisins', 'Sweet Potatoes', 'Almonds', 'Chicken', 'Lamb', 'Pecans', 'Walnuts']
    },
    {
        name: 'Cloves',
        alt_name: '',
        usage: ['Apple', 'Beets', 'Cabbage', 'Carrot', 'Onions', 'Oranges', 'Pumpkin', 'Squash', 'Sweet Potatoes', 'Almonds', 'Beef', 'Cheese', 'Eggs', 'Ham', 'Lamb', 'Pecans', 'Pork', 'Walnuts']
    },
    {
        name: 'Coriander Seeds',
        alt_name: '',
        usage: ['Apple', 'Carrot', 'Celery', 'Mushrooms', 'Onions', 'Oranges', 'Pears', 'Plums', 'Potatoes', 'Pumpkin', 'Shallots', 'Almonds', 'Beans', 'Beef', 'Chicken', 'Duck', 'Fish', 'Game', 'Ham', 'Lamb', 'Lentils', 'Pork', 'Sausage']
    },
    {
        name: 'Cumin',
        alt_name: '',
        usage: ['Cabbage', 'Carrot', 'Celery', 'Corn', 'Cucumber', 'Eggplant', 'Onions', 'Peppers', 'Potatoes', 'Squash', 'Tomato', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Fish', 'Game', 'Lamb', 'Lentils', 'Pork', 'Turkey', 'Venison']
    },
    {
        name: 'Dill Seeds',
        alt_name: '',
        usage: ['Cabbage', 'Carrot', 'Celery', 'Corn', 'Cucumber', 'Eggplant', 'Onions', 'Peppers', 'Potatoes', 'Squash', 'Tomato', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Fish', 'Game', 'Lamb', 'Lentils', 'Pork', 'Turkey', 'Venison']
    },
    {
        name: 'Fennel Seeds',
        alt_name: '',
        usage: ['Beets', 'Cabbage', 'Carrot', 'Celery', 'Cucumber', 'Mushrooms', 'Onions', 'Peppers', 'Potatoes', 'Shallots', 'Spinach', 'Tomato', 'Beans', 'Chicken', 'Fish and Seafood', 'Pork', 'Sausage']
    },
    {
        name: 'Ginger',
        alt_name: '',
        usage: ['Apple', 'Beets', 'Broccoli', 'Cabbage', 'Carrot', 'Celery', 'Chives', 'Leafy Greens', 'Onions', 'Peppers', 'Pumpkin', 'Scallions', 'Squash', 'Sweet Potatoes', 'Beef', 'Chicken', 'Duck', 'Eggs', 'Fish and Seafood', 'Ham', 'Nuts', 'Pork']
    },
    {
        name: 'Mustard',
        alt_name: '',
        usage: ['Cabbage', 'Carrot', 'Cauliflower', 'Celery', 'Coconut', 'Cucumber', 'Leafy Greens', 'Mushrooms', 'Onions', 'Peas', 'Peppers', 'Potatoes', 'Spinach', 'Tomato', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Fish and Seafood', 'Game', 'Lentils', 'Ham', 'Pork']
    },
    {
        name: 'Nutmeg',
        alt_name: '',
        usage: ['Apple', 'Cabbage', 'Carrot', 'Cauliflower', 'Onions', 'Potatoes', 'Pumpkin', 'Raisins', 'Spinach', 'Sweet Potatoes', 'Cheese', 'Chicken', 'Eggs', 'Fish and Seafood', 'Lamb', 'Mutton', 'Pecans', 'Veal', 'Walnuts']
    },
    {
        name: 'Paprika',
        alt_name: '',
        usage: ['Carrot', 'Celery', 'Mushrooms', 'Onions', 'Peppers', 'Potatoes', 'Beans', 'Beef', 'Cheese', 'Chicken', 'Duck', 'Eggs', 'Lamb', 'Pork', 'Sausage']
    },
    {
        name: 'Pepper',
        alt_name: '',
        usage: ['']
    },
    {
        name: 'Poppy Seeds',
        alt_name: '',
        usage: ['Cauliflower', 'Eggplant', 'Green Beans', 'Lemon', 'Lettuce', 'Onions', 'Oranges', 'Potatoes', 'Strawberries', 'Zucchini', 'Almonds', 'Cashews', 'Cheese', 'Chicken', 'Eggs', 'Ham', 'Pork', 'Walnuts']
    },
    {
        name: 'Sesame',
        alt_name: '',
        usage: ['Broccoli', 'Cabbage', 'Carrot', 'Eggplant', 'Lettuce', 'Mushrooms', 'Onions', 'Peas', 'Peppers', 'Scallions', 'Tomato', 'Zucchini', 'Almonds', 'Beans', 'Chicken', 'Fish and Seafood']
    },
    {
        name: 'Vanilla',
        alt_name: '',
        usage: ['Apple', 'Berries', 'Bananas', 'Cherries', 'Lemon', 'Melon', 'Oranges', 'Peaches', 'Pears', 'Pineapple', 'Plums', 'Raspberries', 'Rhubarb', 'Almonds', 'Hazelnuts', 'Pecans', 'Walnuts']
    },
    {
        name: 'Saffron',
        alt_name: '',
        usage: ['Apple', 'Artichoke', 'Carrot', 'Cauliflower', 'Celery', 'Fennel Bulb', 'Leeks', 'Lemon', 'Onions', 'Oranges', 'Peas', 'Peppers', 'Potatoes', 'Shallots', 'Tomato', 'Almonds', 'Beans', 'Cashews', 'Cheese', 'Chicken', 'Fish and Seafood', 'Lamb', 'Pistachios', 'Sausage']
    },
    {
        name: 'Sumac',
        alt_name: '',
        usage: ['Avocado', 'Carrot', 'Cucumber', 'Eggplant', 'Lettuce', 'Onions', 'Peppers', 'Potatoes', 'Tomato', 'Zucchini', 'Beans', 'Beef', 'Chicken', 'Chickpeas', 'Fish and Seafood', 'Lamb', 'Lentils', 'Pine Nuts', 'Walnuts']
    },
    {
        name: 'Turmeric',
        alt_name: '',
        usage: ['Carrot', 'Cauliflower', 'Onions', 'Peas', 'Peppers', 'Potatoes', 'Shallots', 'Tomato', 'Almonds', 'Beans', 'Cashews', 'Chicken', 'Eggs', 'Fish and Seafood', 'Lamb', 'Lentils']
    }
];


import basketSoy from '../Images/basketSoy.png'
import ginger from '../Images/ginger.png'
import wasabi from '../Images/wasabi.png'
import sticks from '../Images/sticks.png'


let dada = {
    rolesPage: [
            {   id:1, 
                weight: 265,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/california-with-salmon.jpg', 
                title: 'Каліфорнійські з лососем', 
                composition: 'Рис, норі, лосось, огірок, ікра масаго червона, сніжний краб, соус Спайсі.',
                price: 201    },

            {   id:2, 
                weight: 265,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/california-with-tuna.jpg', 
                title: 'Каліфорнійські з тунцем', 
                composition: 'Рис, норі, тунець, авокадо, ікра масаго зелена, сніжний краб, соус Спайсі.',
                price: 199    },
                    
            {   id:3, 
                weight: 265,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/california-with-eel.jpg', 
                title: 'Каліфорнійські з вугрем', 
                composition: 'Рис, норі, вугор, авокадо, ікра масаго чорна, сніжний краб, соус Спайсі.',
                price: 214    },
                        
            {   id:4, 
                weight: 270,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/california-with-shrimp.jpg', 
                title: 'Каліфорнійські з креветкою', 
                composition: 'Рис, норі, креветки, огірок, ікра масаго оранжева, сніжний краб, соус Спайсі.',
                price: 200    },

            {   id:5, 
                weight: 315,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/tokyo-with-salmon-and-shrimp.jpg', 
                title: 'Токіо', 
                composition: 'Рис, норі, крем-сир, огірок, креветки, лосось, солодкий соус Чилі.  ',
                price: 265    },
                
            {   id:6, 
                weight: 285,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/canadian-with-salmon-fillet-salmon-and-tuna.jpg', 
                title: 'Канада', 
                composition: 'Рис, норі, крем-сир, огірок, тунець, лосось, соус Теріякі.',
                price: 193    },
                
                {   id:7, 
                    weight: 315,
                    gr: 'гр',
                    img: 'https://la.ua/wp-content/uploads/2021/08/red-dragon.jpg', 
                    title: 'Червоний дракон', 
                    composition: 'Рис, норі, крем-сир, огірок, вугор, ікра масаго, лосось, соус Теріякі.',
                    price: 324    },
    
                {   id:8, 
                    weight: 255,
                    gr: 'гр',
                    img: 'https://la.ua/wp-content/uploads/2021/08/alaska-with-shrimp-and-eel.jpg', 
                    title: 'Аляска', 
                    composition: 'Рис, норі, авокадо, вугор, креветки, кунжут, соус Спайсі.',
                    price: 252     },
                        
                {   id:9, 
                    weight: 260,
                    gr: 'гр',
                    img: 'https://la.ua/wp-content/uploads/2021/08/yasai-with-vegetables.jpg', 
                    title: 'Ясай', 
                    composition: 'Рис, норі, перець солодкий, помідори, авокадо, огірок, кунжут, горіховий соус.',
                    price: 135    },
                            
                {   id:10, 
                    weight: 305,
                    gr: 'гр',
                    img: 'https://la.ua/wp-content/uploads/2021/08/kioto-wuth-tuna-and-shrimp.jpg', 
                    title: 'Кіото', 
                    composition: 'Рис, норі, крем-сир, авокадо, креветки, тунець, солодкий соус Чилі.',
                    price: 279    },
    
                {   id:11, 
                    weight: 290,
                    gr: 'гр',
                    img: 'https://la.ua/wp-content/uploads/2021/08/roll-of-tofu-mango-and-hiashi.jpg', 
                    title: 'Чука', 
                    composition: 'Рис, норі, манго, тофу, авокадо, хіяші, горіховий соус, лимон.',
                    price: 140   }
                    
        ],
    HotRolesPage: [
            {   id:1, 
                weight: 320,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/banzai.jpg', 
                title: 'Банзай з вугрем та свіжим лососем', 
                composition: 'Рис, норі, крем-сир, вугор, лосось, темпура, сухарі, соус Теріякі.',
                price: 248    },

            {   id:2, 
                weight: 320,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/banzai-new-york.jpg', 
                title: 'Банзай зі смаженим лососем', 
                composition: 'Рис, норі, крем-сир, лосось смажений, темпура, сухарі, огірок, соус Теріякі.',
                price: 228    },
                    
            {   id:3, 
                weight: 310,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/banzai-assorted-3.jpg', 
                title: 'Банзай асорті зі лососем, вугром та креветками', 
                composition: 'Рис, норі, креветки, лосось, вугор, темпура, сухарі, соус Теріякі.',
                price: 269    },
                        
            {   id:4, 
                weight: 320,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/banzai-with-tuna-and-mango-2.jpg', 
                title: 'Банзай з тунцем та манго', 
                composition: 'Рис, норі, крем-сир, тунець, манго, темпура, сухарі, соус Унагі.',
                price: 205    }
        ],
    PhiladelphiaPage: [
            {   id:1, 
                weight: 280,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-with-salmon.jpg', 
                title: 'Філадельфія з лососем', 
                composition: 'Рис, норі, крем-сир, огірок, лосось, соус Теріякі.',
                price: 189    },

            {   id:2, 
                weight: 275,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-with-tuna.jpg', 
                title: 'Філадельфія з тунцем', 
                composition: 'Рис, норі, крем-сир, авокадо, філе тунця, соус Унагі.',
                price: 245    },
                    
            {   id:3, 
                weight: 285,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-with-ell.jpg', 
                title: 'Філадельфія з вугрем', 
                composition: 'Рис, норі, крем-сир, авокадо, вугор, соус Унагі.',
                price: 243    },
                        
            {   id:4, 
                weight: 330,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-super-cheese.jpg', 
                title: 'Філадельфія супер сир', 
                composition: 'Рис, норі, крем-сир, огірок, лосось, ікра тобіко червона, ікра тобіко чорна.',
                price: 210    },

            {   id:5, 
                weight: 285,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-de-luxe.jpg', 
                title: 'Філадельфія De Luxe', 
                composition: 'Рис, норі, крем-сир, авокадо, огірок, вугор в унагі, лосось слабосолений, соус Унагі.',
                price: 236    },
                
            {   id:6, 
                weight: 275,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-with-shrimp.jpg', 
                title: 'Філадельфія з креветкою', 
                composition: 'Рис, норі, крем-сир, авокадо, креветки, солодкий соус Чилі.',
                price: 241    },
                
                {   id:7, 
                    weight: 295,
                    gr: 'гр',
                    img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-with-salmon.jpg', 
                    title: 'Філадельфія з малосольним лососем', 
                    composition: 'Рис, норі, крем-сир, огірок, лосось слабосолений, соус Унагі.',
                    price: 226    },
    
                {   id:8, 
                    weight: 285,
                    gr: 'гр',
                    img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-with-smoked-salmon.jpg', 
                    title: 'Філадельфія з копченим лососем', 
                    composition: 'Рис, норі, крем-сир, лосось копчений, манго, соус Унагі.',
                    price: 215     }
        ],
    SetsPage: [
            {   id:1, 
                gr: 'гр',
                weight: 1155,
                img: 'https://la.ua/wp-content/uploads/2021/08/philadelphia-set-philadelphia-with-salmon-philadelphia-with-eel-philadelphia-with-tuna-philadelphia-with-shrimp.jpg', 
                title: 'Сет філадельфія', 
                composition: 'Філадельфія з лососем - 1 шт, Філадельфія з вугрем - 1 шт, Філадельфія з тунцем - 1 шт, Філадельфія з креветкою - 1 шт.',
                price: 825    },

            {   id:2, 
                weight: 1050,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/california-set-california-with-salmon-california-with-eel-california-with-shrimp-california-with-tuna-1.jpg', 
                title: 'Сет каліфорнія', 
                composition: 'Каліфорнійські з лососем - 1 шт, Каліфорнійські з вугрем - 1 шт, Каліфонійські з креветкою - 1 шт, Каліфорнійські з тунцем - 1 шт.',
                price: 780    },
                    
            {   id:3, 
                weight: 1035,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/popular-set-california-set-with-shrimp-philadelphia-with-salmon-philadelphia-super-cheese-futomaki-with-avocado.jpg', 
                title: 'Сет популярний', 
                composition: 'Каліфонійські з креветкою - 1 шт, Філадельфія з лососем - 1 шт, Філадельфія супер сир - 1 шт, Макі з авокадо - 1 шт.',
                price: 865    },
                        
            {   id:4, 
                weight: 870,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/mix-set-philadelphia-deluxe-canadian-with-salmon-fillet-and-tuna-futomaki-with-tomago-futomaki-with-shrimp.jpg', 
                title: 'Сет мікс', 
                composition: 'Філадельфія De Luxe - 1 шт, Канада - 1 шт, Макі з тамаго - 1 шт, Макі з креветкою - 1 шт.',
                price: 735    },

            {   id:5, 
                weight: 1285,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/vip-set-tokyo-with-salmon-and-shrimp-alaska-with-shrimp-and-eel-red-dragon-black-dragon-2.jpg', 
                title: 'Сет VIP', 
                composition: 'Токіо - 1 шт, Аляска - 1 шт, Червоний дракон - 1 шт, Чорний дракон - 1 шт.',
                price: 1035    },
                
            {   id:6, 
                weight: 790,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/vegetarian-set-roll-yasai-roll-with-tofu-and-mango-futomaki-with-mango-futomaki-with-cucumber.jpg', 
                title: 'Сет вегетаріанський', 
                composition: 'Ясай - 1 шт, Чука - 1 шт, Макі з манго - 1 шт, Макі з огірком та кунжутом - 1 шт.',
                price: 690    },

            {   id:7, 
                weight: 2675,
                gr: 'гр',
                img: 'https://la.ua/wp-content/uploads/2021/08/supers2.jpg', 
                title: 'Сет супер', 
                composition: 'Філадельфія з вугрем - 1 шт, Філадельфія з лососем - 1 шт, Філадельфія супер сир - 1 шт, Зелений дракон - 1 шт, Каліфонійські з креветкою - 1 шт, Кіото - 1 шт, Чука - 1 шт, Макі з тамаго - 1 шт, Макі з копченим лососем - 1 шт, Макі з манго - 1 шт, Макі з малосольним лососем - 1 шт.',
                price: 1965    }
        ],
    drinksPage: [
            {   id:1, 
                weight: 0.75,
                l: 'л',
                img: 'https://la.ua/wp-content/uploads/2022/03/cola-750-ml.png', 
                title: 'Coca Cola', 
                composition: 'Поживна харчова цінність на 100 г продукту:',
                price: 35    },

            {   id:2, 
                weight: 0.5,
                l: 'л',
                img: 'https://la.ua/wp-content/uploads/2021/09/fanta-0.5.png', 
                title: 'Fanta', 
                composition: 'Поживна харчова цінність на 100 г продукту:',
                price: 28    },
                    
            {   id:3, 
                weight: 1,
                l: 'л',
                img: 'https://la.ua/wp-content/uploads/2021/09/fanta-1l.png', 
                title: 'Fanta', 
                composition: 'Поживна харчова цінність на 100 г продукту:',
                price: 37    },
                        
            {   id:4, 
                weight: 0.5,
                l: 'л',
                img: 'https://la.ua/wp-content/uploads/2021/09/sprite-0.5.png', 
                title: 'Sprite', 
                composition: 'Поживна харчова цінність на 100 г продукту:',
                price: 28    },

            {   id:5, 
                weight: 1,
                l: 'л',
                img: 'https://la.ua/wp-content/uploads/2022/03/sprite-750-ml.png', 
                title: 'Sprite', 
                composition: 'Поживна харчова цінність на 100 г продукту:',
                price: 34    },
                
            {   id:6, 
                weight: 0.5,
                l: 'л',
                img: 'https://la.ua/wp-content/uploads/2021/09/bonaqua-0.5negazovana-1.png', 
                title: 'Вода BonAqua негазована', 
                composition: 'Поживна харчова цінність на 100 г продукту:',
                price: 24    },
                
                {   id:7, 
                    weight: 1,
                    l: 'л',
                    img: 'https://la.ua/wp-content/uploads/2021/09/bonaqua-1l-negazovana.png', 
                    title: 'Вода BonAqua негазована', 
                    composition: 'Поживна харчова цінність на 100 г продукту:',
                    price: 34    },
    
                {   id:8, 
                    weight: 0.5,
                    l: 'л',
                    img: 'https://la.ua/wp-content/uploads/2021/09/bonaqua-0.5gazovana.png', 
                    title: 'Вода BonAqua', 
                    composition: 'Поживна харчова цінність на 100 г продукту:',
                    price: 24     },
                        
                {   id:9, 
                    weight: 1,
                    l: 'л',
                    img: 'https://la.ua/wp-content/uploads/2021/09/bonaqua-1l-gazovana.png', 
                    title: 'Вода BonAqua', 
                    composition: 'Поживна харчова цінність на 100 г продукту:',
                    price: 34    },
                            
                {   id:10, 
                    weight: 1,
                    l: 'л',
                    img: 'https://la.ua/wp-content/uploads/2021/08/rich_apple.jpg', 
                    title: 'Яблучний сік освітлений, ТМ “RICH”', 
                    composition: 'Поживна харчова цінність на 100 г продукту:',
                    price: 48    },
    
                {   id:11, 
                    weight: 1,
                    l: 'л',
                    img: 'https://la.ua/wp-content/uploads/2021/08/rich_orange_small-1.jpg', 
                    title: 'Апельсиновий нектар з м’якоттю, ТМ “RICH”', 
                    composition: 'Поживна харчова цінність на 100 г продукту:',
                    price: 48   }
                    
        ],
    questions: [
        {
            title: 'Доставка безкоштовна?',
            text: 'Доставка є Безкоштовною. Мінімальна сума доставки складає 150 або 250 грн, в залежності від адреси доставки.'
        },
        {
            title: 'Чи можлива оплата карткою?',
            text: 'Так! Ви можете розрахуватися картою на сайті, або при отримані замовлення.'
        },
        {
            title: 'Скільки чекати на доставку?',
            text: 'Доставка в зелену зону Львова – до 59 хвилин (в період з 10:00 до 20:00, в інший час 59 хвилин). Доставка в жовту зону – до 59 хвилин.'
        },
        {
            title: 'Який у Вас графік роботи?',
            text: 'Ми працюємо цілодобово.'
        },
        {
            title: 'В яких містах працює доставка суші SUSHI-GO',
            text: 'Ми працюємо у Львові, Вінниці, Івано-Франківську, Харкові, Стрию, Хмельницькому, Рівному, Чернівцях, Черкасах та Дрогобичі .'
        }
    ],
    postBasket: [
        {
            id: 1,
            img: basketSoy,
            title: 'Соєвий соус'
        },
        {
            id: 2,
            img: wasabi,
            title: 'Васабі'
        },
        {
            id: 3,
            img: ginger,
            title: 'Імбир'
        },
        {
            id: 4,
            img: sticks,
            title: 'Палички'
        }
    ]        

}

export default dada;
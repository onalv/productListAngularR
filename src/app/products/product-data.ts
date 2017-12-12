import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService, InMemoryBackendConfig {
    createDb() {
        let products: IProduct[] = [
            {
                'id': 1,
                'productName': 'Nikkon D3400',
                'productCode': 'DKR-0003',
                'releaseDate': 'March 19, 2016',
                'description': 'Reflex Camera new model',
                'price': 19.95,
                'starRating': 3.2,
                'imageUrl': 'http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8go_p7JUL6JpQK8h_I73Caoi9bKwnAPBe2IofYCQ0J2t12FiVP9eFaxw==/Views/1569_D3400_front.png',
                'category': 'Technology',
                'tags': ['Nikkon', 'Camera', 'D3400']
            },
            {
                'id': 2,
                'productName': 'Smart TV',
                'productCode': 'FJK-0023',
                'releaseDate': 'March 18, 2017',
                'description': 'Samsung Smart TV 40"',
                'price': 320.99,
                'starRating': 4.2,
                'imageUrl': 'https://www.picpng.com/image/view/32347',
                'category': 'Technology'
            },
            {
                'id': 5,
                'productName': 'Doritos',
                'productCode': 'SFR-0048',
                'releaseDate': 'May 21, 2018',
                'description': 'Delicious potato chili Nachos',
                'price': 8.9,
                'starRating': 4.8,
                'imageUrl': 'http://www.freepngimg.com/download/doritos/3-2-doritos-free-download-png.png',
                'category': 'Food',
                'tags': ['food', 'Not-healthy']
            },
            {
                'id': 8,
                'productName': 'Milk',
                'productCode': 'ERT-0022',
                'releaseDate': 'May 15, 2012',
                'description': 'White liquid called milk. You get it from a cow.',
                'price': 11.55,
                'starRating': 3.7,
                'imageUrl': 'https://i.pinimg.com/736x/7d/db/9a/7ddb9a083b67e33c7e0ba57fe0715cbb--milk-bottles-art-images.jpg',
                'category': 'Food',
            },
            {
                'id': 10,
                'productName': 'T-Shirt',
                'productCode': 'DFG-0042',
                'releaseDate': 'October 15, 2017',
                'description': 'Beautiful T-Shirt for cold weathers',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'http://cdn3.bigcommerce.com/s-kvwh6l/products/108/images/356/SOLogo-Black-LongSleeve__04135.1463188689.500.659.png',
                'category': 'Clothes',
            },
            {
                'id': 10,
                'productName': 'Detergent',
                'productCode': 'GHG-0042',
                'releaseDate': 'February 15, 2016',
                'description': 'Liquid for cleaning clothes.',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'http://actividadempaque.weebly.com/uploads/2/4/1/9/24199721/4799989_orig.png',
                'category': 'Housekeeping',
            },
            {
                'id': 10,
                'productName': 'Juice',
                'productCode': 'DFG-0042',
                'releaseDate': 'September 15, 2015',
                'description': 'Really tasty orange juice.',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'http://www.commercialfoodsystems.com/wp-content/uploads/2016/01/applejuice.png',
                'category': 'Food',
            },
            {
                'id': 10,
                'productName': 'Tools',
                'productCode': 'ERT-0042',
                'releaseDate': 'December 20, 2017',
                'description': 'For playing Big Boy',
                'price': 35.95,
                'starRating': 4.6,
                'imageUrl': 'http://www.pngmart.com/files/1/Tools-PNG-File.png',
                'category': 'Tools',
            }
        ];
        return { products };
    }
}

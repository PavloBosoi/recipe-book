import { Injectable } from '@angular/core';
import { IRecipe } from 'app/core/domain/IRecipe';

@Injectable({
    providedIn: 'root'
})
export class CommonDataService {
    public readonly recipes: IRecipe[] = [
        {
            id: 1,
            title: 'CAPONATA-PASTA',
            imgName: 'caponata-pasta_1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab autem dolorum eum explicabo facilis incidunt\n' +
                '        iusto laborum maiores nam nisi non praesentium quia, quisquam quo quod suscipit veritatis vero.'
        },
        {
            id: 2,
            title: 'COCONUT-SQUASH-DHANSAK',
            imgName: 'coconut-squash-dhansak.jpg',
            description: 'Adipisci, cumque dolorem error explicabo perspiciatis repellendus sit veniam. Ab aut culpa debitis dolor eaque\n' +
                '        est, fugiat incidunt nobis, non omnis perferendis quos reprehenderit repudiandae sequi unde vel voluptate\n' +
                '        voluptatum!'
        },
        {
            id: 3,
            title: 'GNOCCHI-WITH-MUSHROOMS',
            imgName: 'gnocchi-with-mushrooms.jpg',
            description: 'Asperiores esse minus molestias nihil quae quidem quod soluta unde. Amet aperiam atque, consequuntur eaque id\n' +
                '        obcaecati placeat possimus quos veniam voluptatem. Est in nemo repellat sed sint tempora voluptates?'
        },
        {
            id: 4,
            title: 'HALLOUMI-BURGER',
            imgName: 'halloumi-burger.jpg',
            description: 'Aliquid animi dolore eaque labore nulla officia quae ratione repudiandae saepe suscipit. Consequuntur\n' +
                '        cupiditate dolor dolores doloribus ex excepturi hic, labore modi nostrum nulla numquam obcaecati optio\n' +
                '        perspiciatis quam suscipit!'
        },
        {
            id: 5,
            title: 'INDIAN-CHICKPEAS-WITH-POACHED-EGGS',
            imgName: 'indian-chickpeas-with-poached-eggs.jpg',
            description: 'Ad aspernatur blanditiis corporis delectus eius, ex iure iusto magnam, porro reiciendis reprehenderit sapiente\n' +
                '        sit. Aliquam cum facilis id, ipsam minima numquam odio omnis pariatur praesentium qui. Dignissimos\n' +
                '        necessitatibus, reprehenderit.'
        },
        {
            id: 6,
            title: 'PEA-LEEK-OPEN-LASAGNE',
            imgName: 'pea-leek-open-lasagne.jpg',
            description: 'Aliquid delectus eos illo neque quas reprehenderit? Consectetur culpa cumque esse hic impedit iste magni nobis\n' +
                '        non, nostrum, numquam officia omnis repellat similique soluta suscipit tempora tenetur velit voluptate\n' +
                '        voluptatum!'
        },
        {
            id: 7,
            title: 'RECIPE-IMAGE-LEGACY',
            imgName: 'recipe-image-legacy.jpg',
            description: 'Cupiditate deserunt ipsum quasi quibusdam veritatis. Accusamus ad aliquam animi atque deleniti deserunt dolorem\n' +
                '        ducimus id iste, maiores quis veniam vitae? Consequuntur laudantium recusandae tempore! Enim facere obcaecati\n' +
                '        placeat totam.'
        },
        {
            id: 8,
            title: 'SWEETCORN-COURGETTE-FRITTERS',
            imgName: 'sweetcorn-courgette-fritters.jpg',
            description: 'Earum modi nostrum praesentium voluptate! Deserunt et molestiae obcaecati perferendis porro quas quibusdam\n' +
                '        quos? Aut deleniti ex explicabo necessitatibus quidem? Dolores eius numquam officiis perferendis quod! Dolore\n' +
                '        nisi sapiente tempore.'
        },
        {
            id: 9,
            title: 'VEGAN-RAMEN',
            imgName: 'vegan-ramen.jpg',
            description: 'A ab accusamus accusantium adipisci architecto aut dicta dolorem eius, eos ex id impedit incidunt, itaque modi\n' +
                '        quae quasi qui quod quos reiciendis rerum saepe soluta tempore temporibus velit voluptatibus!'
        },
        {
            id: 10,
            title: 'VEGGIE-FAJITAS',
            imgName: 'veggie-fajitas.jpg',
            description: 'Aliquam autem, blanditiis commodi dolore doloribus ducimus ea error et explicabo facilis libero modi non\n' +
                '        nostrum obcaecati officia quia reiciendis similique sit tempora totam ullam ut veniam veritatis, vero\n' +
                '        voluptatibus.'
        },
        {
            id: 11,
            title: 'CAPONATA-PASTA',
            imgName: 'caponata-pasta_1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab autem dolorum eum explicabo facilis incidunt\n' +
                '        iusto laborum maiores nam nisi non praesentium quia, quisquam quo quod suscipit veritatis vero.'
        },
        {
            id: 12,
            title: 'COCONUT-SQUASH-DHANSAK',
            imgName: 'coconut-squash-dhansak.jpg',
            description: 'Adipisci, cumque dolorem error explicabo perspiciatis repellendus sit veniam. Ab aut culpa debitis dolor eaque\n' +
                '        est, fugiat incidunt nobis, non omnis perferendis quos reprehenderit repudiandae sequi unde vel voluptate\n' +
                '        voluptatum!'
        },
        {
            id: 13,
            title: 'GNOCCHI-WITH-MUSHROOMS',
            imgName: 'gnocchi-with-mushrooms.jpg',
            description: 'Asperiores esse minus molestias nihil quae quidem quod soluta unde. Amet aperiam atque, consequuntur eaque id\n' +
                '        obcaecati placeat possimus quos veniam voluptatem. Est in nemo repellat sed sint tempora voluptates?'
        },
        {
            id: 14,
            title: 'HALLOUMI-BURGER',
            imgName: 'halloumi-burger.jpg',
            description: 'Aliquid animi dolore eaque labore nulla officia quae ratione repudiandae saepe suscipit. Consequuntur\n' +
                '        cupiditate dolor dolores doloribus ex excepturi hic, labore modi nostrum nulla numquam obcaecati optio\n' +
                '        perspiciatis quam suscipit!'
        },
        {
            id: 15,
            title: 'INDIAN-CHICKPEAS-WITH-POACHED-EGGS',
            imgName: 'indian-chickpeas-with-poached-eggs.jpg',
            description: 'Ad aspernatur blanditiis corporis delectus eius, ex iure iusto magnam, porro reiciendis reprehenderit sapiente\n' +
                '        sit. Aliquam cum facilis id, ipsam minima numquam odio omnis pariatur praesentium qui. Dignissimos\n' +
                '        necessitatibus, reprehenderit.'
        },
        {
            id: 16,
            title: 'PEA-LEEK-OPEN-LASAGNE',
            imgName: 'pea-leek-open-lasagne.jpg',
            description: 'Aliquid delectus eos illo neque quas reprehenderit? Consectetur culpa cumque esse hic impedit iste magni nobis\n' +
                '        non, nostrum, numquam officia omnis repellat similique soluta suscipit tempora tenetur velit voluptate\n' +
                '        voluptatum!'
        },
        {
            id: 17,
            title: 'RECIPE-IMAGE-LEGACY',
            imgName: 'recipe-image-legacy.jpg',
            description: 'Cupiditate deserunt ipsum quasi quibusdam veritatis. Accusamus ad aliquam animi atque deleniti deserunt dolorem\n' +
                '        ducimus id iste, maiores quis veniam vitae? Consequuntur laudantium recusandae tempore! Enim facere obcaecati\n' +
                '        placeat totam.'
        },
        {
            id: 18,
            title: 'SWEETCORN-COURGETTE-FRITTERS',
            imgName: 'sweetcorn-courgette-fritters.jpg',
            description: 'Earum modi nostrum praesentium voluptate! Deserunt et molestiae obcaecati perferendis porro quas quibusdam\n' +
                '        quos? Aut deleniti ex explicabo necessitatibus quidem? Dolores eius numquam officiis perferendis quod! Dolore\n' +
                '        nisi sapiente tempore.'
        },
        {
            id: 19,
            title: 'VEGAN-RAMEN',
            imgName: 'vegan-ramen.jpg',
            description: 'A ab accusamus accusantium adipisci architecto aut dicta dolorem eius, eos ex id impedit incidunt, itaque modi\n' +
                '        quae quasi qui quod quos reiciendis rerum saepe soluta tempore temporibus velit voluptatibus!'
        },
        {
            id: 20,
            title: 'VEGGIE-FAJITAS',
            imgName: 'veggie-fajitas.jpg',
            description: 'Aliquam autem, blanditiis commodi dolore doloribus ducimus ea error et explicabo facilis libero modi non\n' +
                '        nostrum obcaecati officia quia reiciendis similique sit tempora totam ullam ut veniam veritatis, vero\n' +
                '        voluptatibus.'
        }
    ];
}

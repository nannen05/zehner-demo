import hero from '../Assets/hero.jpg'
import heroMobile from '../Assets/hero-mobile.jpg'

import functional from '../Assets/functional.png'
import tested from '../Assets/tested.png'
import technology from '../Assets/technology.png'

import seat from '../Assets/seat.png'
import playard from '../Assets/playard.png'
import feeding from '../Assets/feeding.png'
import bassinet from '../Assets/bassinet.png'
import tub from '../Assets/tub.png'
import mobile from '../Assets/mobile.png'

const HomePage = {
    "hero": {
        "image": hero,
        "imageMobile": heroMobile,
        "contentAlignment": "right",
        "title": "Freeing up your hands. So you can do more.",
        "copy": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",
        "ctaCopy": "Shop Bassinets",
        "ctaUrl": "#"
    },
    "threeCallouts": [
        {
            "image": functional,
            "title": "Functional Design",
            "copy": "Products designed to make parents lives easier"
        },
        {
            "image": tested,
            "title": "Parent Tested",
            "copy": "Tested with real parents to ensure the best results"
        },
        {
            "image": technology,
            "title": "Technology",
            "copy": "Tested w(FPO)arents to ensure the best results"
        }
    ],
    "categoryTiles": [
        {
            "image": seat,
            "width": "200px",
            "ctaCopy": "Shop Seats",
            "ctaUrl": "#"
        },
        {
            "image": playard,
            "width": "410px",
            "ctaCopy": "Shop Playards",
            "ctaUrl": "#"
        },
        {
            "image": feeding,
            "width": "500px",
            "position": "bottom",
            "ctaCopy": "Shop Feeding",
            "ctaUrl": "#"
        },
        {
            "image": bassinet,
            "width": "380px",
            "position": "bottom",
            "ctaCopy": "Shop Bassinets",
            "ctaUrl": "#"
        },
        {
            "image": tub,
            "width": "450px",
            "ctaCopy": "Shop Tubs",
            "ctaUrl": "#"
        },
        {
            "image":mobile,
            "width": "420px",
            "ctaCopy": "Shop Mobiles",
            "ctaUrl": "#"
        }
    ],
    "fiftyFiftyTile": {
        //...
    },
    "fullWidthCallout": {
        //...
    },
    "reviews": {
        //...
    },
    "instagram": {
        //...
    },
    "logoCallouts": {
        //...
    },
}

export default HomePage

import './App.css';
import Map from './Components/Map';
import Header from './Components/Header/Header';
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/react';
import List from './Components/List/List';
import { useEffect, useState } from 'react';

import API from './Components/api';


function App() {
  let [data, setData] = useState([
    {
      "location_id": "7645165",
      "name": "Radisson Hotel Agra",
      "latitude": "27.158625",
      "longitude": "78.05378",
      "num_reviews": "3568",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/23/e1/d4/6b/pool.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/23/e1/d4/6b/pool.jpg",
            "height": "50"
          },
          "original": {
            "width": "1022",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/23/e1/d4/6b/pool.jpg",
            "height": "631"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/23/e1/d4/6b/pool.jpg",
            "height": "340"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/23/e1/d4/6b/pool.jpg",
            "height": "154"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2022-06-11T01:51:20-0400",
        "caption": "Pool",
        "id": "602002539",
        "helpful_votes": "0",
        "published_date": "2022-06-11T01:51:20-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.769211769104004",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "1",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#1 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.14265488274078408",
      "distance_string": null,
      "bearing": "south",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Open Now",
      "is_long_closed": false,
      "price_level": "$",
      "price": "$60 - $79",
      "hotel_class": "4.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "cd1bb0dc-4700-4cd3-9872-6847dc86ea24"
    },
    {
      "location_id": "301771",
      "name": "ITC Mughal, a Luxury Collection Resort & Spa, Agra",
      "latitude": "27.160994",
      "longitude": "78.04415",
      "num_reviews": "7820",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/11/24/3d/7a/itc-mughal-agra.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/11/24/3d/7a/itc-mughal-agra.jpg",
            "height": "50"
          },
          "original": {
            "width": "1500",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/11/24/3d/7a/itc-mughal-agra.jpg",
            "height": "1212"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/24/3d/7a/itc-mughal-agra.jpg",
            "height": "444"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/11/24/3d/7a/itc-mughal-agra.jpg",
            "height": "202"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-11-01T00:35:49-0400",
        "caption": "ITC Mughal ",
        "id": "287587706",
        "helpful_votes": "4",
        "published_date": "2017-11-01T00:35:49-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.703312873840332",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "2",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#2 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.6435088136200751",
      "distance_string": null,
      "bearing": "west",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Open Now",
      "is_long_closed": false,
      "price_level": "$$",
      "price": "$82 - $121",
      "hotel_class": "5.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": [
          {
            "value": "https://www.tripadvisor.com/Commerce?p=Marriott_BA&src=219317655&geo=301771&from=api&area=&slot=1&matchID=1&oos=0&cnt=1&silo=38058&bucket=934870&nrank=1&crank=1&clt=CLM&ttype=ContactLinkMobile&tm=270026902&managed=false&capped=false&gosox=g3xMt9YCHBy3ZUg-YypssegjQviHlJQg6b-lnBPg98x_z9Z0XP9pjcZi3RyRnEOZmZMmn0SPPihedvfzOAALRjWDTOE7ohlf4oF1LAIkG_Q&dated=true&bapid=1&cs=1db75d1dda6ae82dfbe69114619142507",
            "label": "Hotel website",
            "type": "url"
          }
        ]
      },
      "special_offers": {
        "desktop": [],
        "mobile": [
          {
            "headline": "Unlock Member Rates!",
            "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.301771-a_offer.9590338-a_trafficSource.ba",
            "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=Marriott_BA&src=219317655&geo=301771&from=api&area=OID:9590338%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=38058&bucket=934870&ubucket=934870&nrank=1&crank=1&clt=SOIM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh7opUUR8OycqqOisAg-SSxp2BKlQDkc65F2A6Mkfyh9dA&cs=16eeec777bf34919a6194cd47fef09838"
          }
        ]
      },
      "listing_key": "4cff0f59-8e49-44c1-ac16-073cc39643b5"
    },
    {
      "location_id": "1930271",
      "name": "Hotel Taj Resorts",
      "latitude": "27.168283",
      "longitude": "78.05103",
      "num_reviews": "3025",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/03/3b/0d/ae/hotel-taj-resorts.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/03/3b/0d/ae/hotel-taj-resorts.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/03/3b/0d/ae/hotel-taj-resorts.jpg",
            "height": "1333"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/03/3b/0d/ae/hotel-taj-resorts.jpg",
            "height": "366"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/03/3b/0d/ae/hotel-taj-resorts.jpg",
            "height": "166"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2012-12-18T12:53:26-0500",
        "caption": "HOTEL TAJ RESORTS",
        "id": "54201774",
        "helpful_votes": "14",
        "published_date": "2012-12-18T12:53:26-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.406094074249268",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "3",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#3 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.57780780865437",
      "distance_string": null,
      "bearing": "north",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$26 - $37",
      "hotel_class": "3.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "514efda0-f766-4ac7-b3ec-595a9cbcf615"
    },
    {
      "location_id": "671997",
      "name": "The Grand Imperial",
      "latitude": "27.173857",
      "longitude": "78.00871",
      "num_reviews": "1203",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/31/9a/50/the-grand-imperial-agra.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/31/9a/50/the-grand-imperial-agra.jpg",
            "height": "50"
          },
          "original": {
            "width": "2000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/31/9a/50/the-grand-imperial-agra.jpg",
            "height": "1333"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/31/9a/50/the-grand-imperial-agra.jpg",
            "height": "367"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0f/31/9a/50/the-grand-imperial-agra.jpg",
            "height": "167"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-05-06T09:32:36-0400",
        "caption": "Grand Imperial Agra is an amalgamation of heritage and luxury which makes it the most distinguished ",
        "id": "254909008",
        "helpful_votes": "0",
        "published_date": "2017-05-06T09:32:36-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.29915714263916",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "4",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#4 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "2.9697466882404324",
      "distance_string": null,
      "bearing": "west",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$30 - $61",
      "hotel_class": "4.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "4546d6d5-f438-4283-b1c2-e010561ce816"
    },
    {
      "location_id": "2248251",
      "name": "Taj Hotel & Convention Centre, Agra",
      "latitude": "27.162552",
      "longitude": "78.05665",
      "num_reviews": "8332",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/51/31/8d/infinity-swimming-pool.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/51/31/8d/infinity-swimming-pool.jpg",
            "height": "50"
          },
          "original": {
            "width": "7658",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/51/31/8d/infinity-swimming-pool.jpg",
            "height": "4251"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/51/31/8d/infinity-swimming-pool.jpg",
            "height": "305"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/51/31/8d/infinity-swimming-pool.jpg",
            "height": "139"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2023-05-28T22:24:00-0400",
        "caption": "Infinity Swimming Pool",
        "id": "693186957",
        "helpful_votes": "0",
        "published_date": "2023-05-28T22:24:00-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.753086566925049",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "5",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#5 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.1871719437085342",
      "distance_string": null,
      "bearing": "northeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$72 - $93",
      "hotel_class": "5.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": [
          {
            "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=2248251&from=api&area=&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh4wqJmYY3CfeVY2wQ1tPly-MrugFBgdJ9li5xvew8mARQ&bapid=1&cs=1a0e83d690b7d73d7a68393c404ac923a",
            "label": "Hotel website",
            "type": "url"
          }
        ]
      },
      "special_offers": {
        "desktop": [],
        "mobile": [
          {
            "headline": "Book Direct & Save",
            "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.2248251-a_offer.9919984-a_trafficSource.ba",
            "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=2248251&from=api&area=OID:9919984%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=SOIM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh6NWPxrjsxTNb6KGPcVhi3Bx9oCUF1mZy2x06b1zQkMCA&cs=102315fd71ab1d4584fbf579b77677471"
          }
        ]
      },
      "listing_key": "2b9c82f2-077e-45a1-a0ea-7cfdc36b5b46"
    },
    {
      "location_id": "455480",
      "name": "Hotel Clarks Shiraz",
      "latitude": "27.1588",
      "longitude": "78.0249",
      "num_reviews": "2111",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0a/a8/04/13/fasde.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0a/a8/04/13/fasde.jpg",
            "height": "50"
          },
          "original": {
            "width": "1023",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/a8/04/13/fasde.jpg",
            "height": "620"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/a8/04/13/fasde.jpg",
            "height": "333"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0a/a8/04/13/fasde.jpg",
            "height": "152"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-03-21T10:04:55-0400",
        "caption": "Fasde",
        "id": "178783251",
        "helpful_votes": "9",
        "published_date": "2016-03-21T10:04:55-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.140493392944336",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "6",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#6 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "1.8314733791575664",
      "distance_string": null,
      "bearing": "west",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$35 - $55",
      "hotel_class": "5.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "4b62de54-e5ab-401f-8c84-2094d874e030"
    },
    {
      "location_id": "297683",
      "ad_position": "inline1",
      "ad_size": "8X8",
      "doubleclick_zone": "as.india.uttar_pradesh.agra",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Agra District",
          "abbrv": null,
          "location_id": "12396672"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Uttar Pradesh",
          "abbrv": null,
          "location_id": "297682"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "detail": "0",
      "page_type": "hotels",
      "mob_ptype": "app_hotels"
    },
    {
      "location_id": "6615158",
      "name": "DoubleTree by Hilton Hotel Agra",
      "latitude": "27.151716",
      "longitude": "78.05092",
      "num_reviews": "3921",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/26/a5/31/45/exterior.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/26/a5/31/45/exterior.jpg",
            "height": "50"
          },
          "original": {
            "width": "1023",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/26/a5/31/45/exterior.jpg",
            "height": "419"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/26/a5/31/45/exterior.jpg",
            "height": "225"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/26/a5/31/45/exterior.jpg",
            "height": "102"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2022-10-22T17:01:38-0400",
        "caption": "Exterior",
        "id": "648360261",
        "helpful_votes": "1",
        "published_date": "2022-10-22T17:01:38-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.817384243011475",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "7",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#7 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.6519197984106609",
      "distance_string": null,
      "bearing": "south",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$60 - $78",
      "hotel_class": "4.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "391ff2e4-285e-4878-8500-64ec8ac502ce"
    },
    {
      "location_id": "7384717",
      "name": "Courtyard by Marriott Agra",
      "latitude": "27.156382",
      "longitude": "78.059525",
      "num_reviews": "4553",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/30/b1/72/lobby.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/30/b1/72/lobby.jpg",
            "height": "50"
          },
          "original": {
            "width": "4000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/30/b1/72/lobby.jpg",
            "height": "2667"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/30/b1/72/lobby.jpg",
            "height": "367"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/30/b1/72/lobby.jpg",
            "height": "167"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2023-05-19T03:34:25-0400",
        "caption": "Lobby",
        "id": "691057010",
        "helpful_votes": "0",
        "published_date": "2023-05-19T03:34:25-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.723584175109863",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "8",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#8 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.4187303707366524",
      "distance_string": null,
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "open_now_text": "Open Now",
      "is_long_closed": false,
      "price_level": "$",
      "price": "$58 - $74",
      "hotel_class": "0.0",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": [
          {
            "value": "https://www.tripadvisor.com/Commerce?p=Marriott_BA&src=183959348&geo=7384717&from=api&area=&slot=1&matchID=1&oos=0&cnt=1&silo=38058&bucket=934870&nrank=1&crank=1&clt=CLM&ttype=ContactLinkMobile&tm=270026902&managed=false&capped=false&gosox=g3xMt9YCHBy3ZUg-YypssegjQviHlJQg6b-lnBPg98x_z9Z0XP9pjcZi3RyRnEOZtWQ80JdaT9pHQNIZPd8xRMiy9GN4XCXu-tRPcYUrkb8&dated=true&bapid=1&cs=116871c49e61f4e0cb6da375f9ccfaab6",
            "label": "Hotel website",
            "type": "url"
          }
        ]
      },
      "special_offers": {
        "desktop": [],
        "mobile": [
          {
            "headline": "Unlock Member Rates!",
            "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.7384717-a_offer.9596902-a_trafficSource.ba",
            "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=Marriott_BA&src=183959348&geo=7384717&from=api&area=OID:9596902%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=38058&bucket=934870&ubucket=934870&nrank=1&crank=1&clt=SOIM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh7vXHYQUPQZ09lqzhzJiuiiBITpZRV6sYixgSr4QuTRrQ&cs=141fbe7f77595b973e225c6a253323cdf"
          }
        ]
      },
      "listing_key": "12fbdc8e-8035-45d0-9053-cfbe855976c6"
    },
    {
      "location_id": "307322",
      "name": "Howard Plaza The Fern - An Ecotel Hotel, Agra",
      "latitude": "27.162888",
      "longitude": "78.0367",
      "num_reviews": "2462",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/08/03/45/exterior.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/08/03/45/exterior.jpg",
            "height": "50"
          },
          "original": {
            "width": "683",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/08/03/45/exterior.jpg",
            "height": "1029"
          },
          "large": {
            "width": "299",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/08/03/45/exterior.jpg",
            "height": "450"
          },
          "medium": {
            "width": "136",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/08/03/45/exterior.jpg",
            "height": "205"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2023-05-07T23:44:48-0400",
        "caption": "Exterior",
        "id": "688390981",
        "helpful_votes": "0",
        "published_date": "2023-05-07T23:44:48-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.747193336486816",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "9",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#9 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "1.1132739480518608",
      "distance_string": null,
      "bearing": "west",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$30 - $54",
      "hotel_class": "4.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "02f22e79-267d-4890-ba40-70f807402bd1"
    },
    {
      "location_id": "4985442",
      "name": "Hotel Atulyaa Taj",
      "latitude": "27.16836",
      "longitude": "78.05072",
      "num_reviews": "1129",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/04/a4/69/b2/hotel-atulyaa-taj.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/04/a4/69/b2/hotel-atulyaa-taj.jpg",
            "height": "50"
          },
          "original": {
            "width": "1200",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/04/a4/69/b2/hotel-atulyaa-taj.jpg",
            "height": "692"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/04/a4/69/b2/hotel-atulyaa-taj.jpg",
            "height": "317"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/04/a4/69/b2/hotel-atulyaa-taj.jpg",
            "height": "144"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2013-10-07T04:55:13-0400",
        "caption": "swimming pool",
        "id": "77883826",
        "helpful_votes": "3",
        "published_date": "2013-10-09T04:07:25-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.995832681655884",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "10",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#10 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.5902071158900365",
      "distance_string": null,
      "bearing": "northwest",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$26 - $55",
      "hotel_class": "3.5",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": [
          {
            "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=4985442&from=api&area=&slot=3&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh6Bq0mQooUHluBgbT56H-69LNcziOLw278tRbiOHgI9NA&bapid=3&cs=13cabca998c7fcb9629a7d842ff6a1259",
            "label": "Hotel website",
            "type": "url"
          }
        ]
      },
      "special_offers": {
        "desktop": [],
        "mobile": [
          {
            "headline": "Book Direct & Save",
            "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.4985442-a_offer.9883839-a_trafficSource.ba",
            "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=4985442&from=api&area=OID:9883839%7COT:4&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=SOIM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh64XYe8_WT9L-Dw29jtmz1WD84ZWrdKyRJu1gtDSn9j4g&cs=14b7dc844e308824f2dae2cba69c1ecd3"
          }
        ]
      },
      "listing_key": "063d314a-66e4-447f-99e9-c9c14318c538"
    },
    {
      "location_id": "11812253",
      "name": "Moustache Hostel Agra",
      "latitude": "27.164408",
      "longitude": "78.05398",
      "num_reviews": "176",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/13/a6/4b/1c/moustache-hostel-agra.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/13/a6/4b/1c/moustache-hostel-agra.jpg",
            "height": "50"
          },
          "original": {
            "width": "2742",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/13/a6/4b/1c/moustache-hostel-agra.jpg",
            "height": "1823"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/13/a6/4b/1c/moustache-hostel-agra.jpg",
            "height": "366"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/13/a6/4b/1c/moustache-hostel-agra.jpg",
            "height": "166"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2018-07-11T03:14:59-0400",
        "caption": "",
        "id": "329665308",
        "helpful_votes": "1",
        "published_date": "2018-07-11T03:14:59-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.4396889209747314",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "11",
      "ranking_denominator": "1197",
      "ranking_category": "other",
      "ranking": "#11 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hostel",
      "subcategory_type_label": "Hostel",
      "distance": "0.26920249864486623",
      "distance_string": null,
      "bearing": "north",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$16 - $23",
      "hotel_class": "2.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "3842de1e-3d01-4325-a868-82f4c6d03cc5"
    },
    {
      "location_id": "8704784",
      "name": "Ramada Plaza by Wyndham Agra",
      "latitude": "27.138174",
      "longitude": "78.09243",
      "num_reviews": "1489",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/23/e4/3f/2c/welcome-to-the-ramada.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/23/e4/3f/2c/welcome-to-the-ramada.jpg",
            "height": "50"
          },
          "original": {
            "width": "1023",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/23/e4/3f/2c/welcome-to-the-ramada.jpg",
            "height": "683"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/23/e4/3f/2c/welcome-to-the-ramada.jpg",
            "height": "367"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/23/e4/3f/2c/welcome-to-the-ramada.jpg",
            "height": "167"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2022-06-11T02:59:29-0400",
        "caption": "Welcome to the Ramada Plaza Agra",
        "id": "602160940",
        "helpful_votes": "0",
        "published_date": "2022-06-11T02:59:29-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.491677284240723",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "12",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#12 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "2.796290228896083",
      "distance_string": null,
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$49 - $77",
      "hotel_class": "5.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "f6072ffc-8a4f-4452-804c-02e29b6889a1"
    },
    {
      "location_id": "304702",
      "name": "Tajview, Agra-IHCL SeleQtions",
      "latitude": "27.160992",
      "longitude": "78.04004",
      "num_reviews": "2780",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/2f/15/9f/tajview-agra-exterior.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/2f/15/9f/tajview-agra-exterior.jpg",
            "height": "50"
          },
          "original": {
            "width": "8214",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/2f/15/9f/tajview-agra-exterior.jpg",
            "height": "6560"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/2f/15/9f/tajview-agra-exterior.jpg",
            "height": "439"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/2f/15/9f/tajview-agra-exterior.jpg",
            "height": "200"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2023-05-18T22:48:33-0400",
        "caption": "Tajview Agra Exterior",
        "id": "690951583",
        "helpful_votes": "0",
        "published_date": "2023-05-18T22:48:33-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.409054279327393",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "13",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#13 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.8963814698023161",
      "distance_string": null,
      "bearing": "west",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$67 - $82",
      "hotel_class": "5.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": [
          {
            "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=304702&from=api&area=&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh7yRfNmF1zX7zN4e7Fkdc3PJwpNoWVO0cUbeabOJ-gyIw&bapid=1&cs=1a945878b96d2c7522ab809508b6df2f1",
            "label": "Hotel website",
            "type": "url"
          }
        ]
      },
      "special_offers": {
        "desktop": [],
        "mobile": [
          {
            "headline": "Book Direct & Save",
            "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.304702-a_offer.9920032-a_trafficSource.ba",
            "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=304702&from=api&area=OID:9920032%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=SOIM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh5oHy6vhidniYxiAAWrfnfDEARKoBb1-BPxuVW4iKk_Xg&cs=197477e1f272f7b9fd2ba54acfeae9812"
          }
        ]
      },
      "listing_key": "c7305017-5574-4afb-a409-75d0a43dfbbc"
    },
    {
      "location_id": "6772837",
      "name": "Hotel Alleviate",
      "latitude": "27.19004",
      "longitude": "78.024895",
      "num_reviews": "356",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/11/84/71/a9/photo-with-bar-area.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/11/84/71/a9/photo-with-bar-area.jpg",
            "height": "50"
          },
          "original": {
            "width": "1920",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/11/84/71/a9/photo-with-bar-area.jpg",
            "height": "1080"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/84/71/a9/photo-with-bar-area.jpg",
            "height": "309"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/11/84/71/a9/photo-with-bar-area.jpg",
            "height": "141"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-12-14T15:27:49-0500",
        "caption": "photo with bar area",
        "id": "293892521",
        "helpful_votes": "2",
        "published_date": "2017-12-14T15:27:49-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.541865110397339",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "14",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#14 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "2.738621768569056",
      "distance_string": null,
      "bearing": "northwest",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$20 - $31",
      "hotel_class": "3.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "1d41b68f-dcac-4281-899b-6a988e5b9823"
    },
    {
      "location_id": "297683",
      "ad_position": "inline2",
      "ad_size": "8X8",
      "doubleclick_zone": "as.india.uttar_pradesh.agra",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Agra District",
          "abbrv": null,
          "location_id": "12396672"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Uttar Pradesh",
          "abbrv": null,
          "location_id": "297682"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "detail": "0",
      "page_type": "hotels",
      "mob_ptype": "app_hotels"
    },
    {
      "location_id": "307330",
      "name": "Jaypee Palace Hotel & Convention Centre",
      "latitude": "27.154373",
      "longitude": "78.07134",
      "num_reviews": "3927",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/07/f1/44/facade.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/07/f1/44/facade.jpg",
            "height": "50"
          },
          "original": {
            "width": "600",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/07/f1/44/facade.jpg",
            "height": "400"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/07/f1/44/facade.jpg",
            "height": "367"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/07/f1/44/facade.jpg",
            "height": "167"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2023-05-07T23:27:10-0400",
        "caption": "Facade",
        "id": "688386372",
        "helpful_votes": "0",
        "published_date": "2023-05-07T23:27:10-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.757786750793457",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "15",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#15 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "1.1158372289568117",
      "distance_string": null,
      "bearing": "southeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$75 - $91",
      "hotel_class": "5.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "e8a9df52-cfd6-4ca4-977a-e93d9d1b5149"
    },
    {
      "location_id": "3183255",
      "name": "Lucky Restaurant & Guest House",
      "latitude": "27.168932",
      "longitude": "78.04068",
      "num_reviews": "86",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/22/cb/d4/ec/exterior-parking-space.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/22/cb/d4/ec/exterior-parking-space.jpg",
            "height": "50"
          },
          "original": {
            "width": "1440",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/22/cb/d4/ec/exterior-parking-space.jpg",
            "height": "1440"
          },
          "large": {
            "width": "450",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/22/cb/d4/ec/exterior-parking-space.jpg",
            "height": "450"
          },
          "medium": {
            "width": "205",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/22/cb/d4/ec/exterior-parking-space.jpg",
            "height": "205"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2022-04-02T03:15:09-0400",
        "caption": "exterior & parking space",
        "id": "583783660",
        "helpful_votes": "0",
        "published_date": "2022-04-02T03:15:09-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.1856961250305176",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "16",
      "ranking_denominator": "1197",
      "ranking_category": "bb",
      "ranking": "#16 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "inn",
      "subcategory_type_label": "Inn",
      "distance": "1.0340110582957378",
      "distance_string": null,
      "bearing": "northwest",
      "rating": "3.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "",
      "hotel_class": "0.0",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "2b2d4829-5a7e-4a35-8d6e-89eff23a8f85"
    },
    {
      "location_id": "307325",
      "name": "Holiday Inn Agra Mg Road, an IHG Hotel",
      "latitude": "27.197374",
      "longitude": "78.00265",
      "num_reviews": "1411",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/37/b2/09/holiday-inn-agra-facade.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/37/b2/09/holiday-inn-agra-facade.jpg",
            "height": "50"
          },
          "original": {
            "width": "6720",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/37/b2/09/holiday-inn-agra-facade.jpg",
            "height": "4480"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/37/b2/09/holiday-inn-agra-facade.jpg",
            "height": "367"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/37/b2/09/holiday-inn-agra-facade.jpg",
            "height": "167"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2023-05-20T06:45:36-0400",
        "caption": "Holiday Inn Agra - Facade",
        "id": "691515913",
        "helpful_votes": "0",
        "published_date": "2023-05-20T06:45:36-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.872807025909424",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "17",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#17 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "4.087069023696386",
      "distance_string": null,
      "bearing": "northwest",
      "rating": "5.0",
      "is_closed": false,
      "open_now_text": "Open Now",
      "is_long_closed": false,
      "price_level": "$",
      "price": "$59 - $74",
      "hotel_class": "4.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": [
          {
            "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=145317079&geo=307325&from=api&area=&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=1007821&nrank=1&crank=1&clt=CLM&ttype=ContactLinkMobile&tm=270026902&managed=false&capped=false&gosox=srVNQGoQ5BIVms7GkGUZCKL4CLybQm-R30SAtBsffBKISYJpTBzVDJrspvZooaZMtTBJMWLqDYB4ZNe5zmZDb3FcIVCm1phVMyP58-kXP9YDg8X-ALjQFItDBAEqu7qq&dated=true&bapid=1&cs=13b011ad59c817ccf9b71296ab522e096",
            "label": "Hotel website",
            "type": "url"
          }
        ]
      },
      "special_offers": {
        "desktop": [],
        "mobile": [
          {
            "headline": "Book Direct & Save with IHG One Rewards",
            "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.307325-a_offer.9955009-a_trafficSource.ba",
            "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=145317079&geo=307325&from=api&area=OID:9955009%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=1007821&ubucket=1007821&nrank=1&crank=1&clt=SOIM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkYeaWtkx0sZ7mNKigsNWMdwvdavxUsJ7QH9TJEsA8o4y0Eua-Bw0fVXcIiI47MOkCg&cs=15c4fb8bc46504847a8bd8b2dcf9a1afa"
          }
        ]
      },
      "listing_key": "9ee33c4d-519c-414f-bbaa-d618e61a0a02"
    },
    {
      "location_id": "302143",
      "name": "The Oberoi Amarvilas",
      "latitude": "27.168137",
      "longitude": "78.04875",
      "num_reviews": "4461",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/07/d3/73/amenities.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/07/d3/73/amenities.jpg",
            "height": "50"
          },
          "original": {
            "width": "7140",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/07/d3/73/amenities.jpg",
            "height": "4765"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/07/d3/73/amenities.jpg",
            "height": "367"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/07/d3/73/amenities.jpg",
            "height": "167"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2023-05-07T22:59:07-0400",
        "caption": "Other Hotel Services/Amenities",
        "id": "688378739",
        "helpful_votes": "0",
        "published_date": "2023-05-07T22:59:07-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.863320827484131",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "18",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#18 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.6359054904545137",
      "distance_string": null,
      "bearing": "northwest",
      "rating": "5.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$$$$",
      "price": "$424 - $501",
      "hotel_class": "5.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": [
          {
            "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=302143&from=api&area=&slot=2&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh454i5g-WQMZ7x6WPpx7q04IZg41qrZM9Yz30Nl3zxu5g&bapid=2&cs=19a4c1c6c0b13e05ac7e2c81f7f96c391",
            "label": "Hotel website",
            "type": "url"
          }
        ]
      },
      "special_offers": {
        "desktop": [],
        "mobile": [
          {
            "headline": "Enjoy 10% Savings",
            "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.302143-a_offer.9295144-a_trafficSource.ba",
            "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=302143&from=api&area=OID:9295144%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=SOIM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh77X_TQsm5qAh1bik9xE1w_vS8eJ4i8F9y9IkkQBnmKyg&cs=11dcb2628cc9e2fe5594d703d1db6e108"
          }
        ]
      },
      "listing_key": "11813a85-90da-4153-89e4-8a35e10ee004"
    },
    {
      "location_id": "775106",
      "name": "Hotel Goverdhan Tourist Complex",
      "latitude": "27.094526",
      "longitude": "77.66709",
      "num_reviews": "236",
      "timezone": "Asia/Kolkata",
      "location_string": "Fatehpur Sikri, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0a/12/9e/4e/hotel-outdoor-view.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0a/12/9e/4e/hotel-outdoor-view.jpg",
            "height": "50"
          },
          "original": {
            "width": "4589",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/12/9e/4e/hotel-outdoor-view.jpg",
            "height": "2710"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/12/9e/4e/hotel-outdoor-view.jpg",
            "height": "325"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0a/12/9e/4e/hotel-outdoor-view.jpg",
            "height": "148"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-01-17T22:07:44-0500",
        "caption": "Hotel Outdoor View",
        "id": "168992334",
        "helpful_votes": "2",
        "published_date": "2016-01-17T22:10:35-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.7114086151123047",
      "ranking_geo": "Fatehpur Sikri",
      "ranking_geo_id": "797802",
      "ranking_position": "19",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#19 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "24.288504451015925",
      "distance_string": null,
      "bearing": "west",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$16 - $18",
      "hotel_class": "0.0",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "c3e49905-fdb9-4093-9a01-4f9fbe29b4c1"
    },
    {
      "location_id": "8318596",
      "name": "Aman Homestay, A Boutique Hotel",
      "latitude": "27.163612",
      "longitude": "78.05384",
      "num_reviews": "734",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/23/93/8b/a5/aman-homestay-a-boutique.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/23/93/8b/a5/aman-homestay-a-boutique.jpg",
            "height": "50"
          },
          "original": {
            "width": "4248",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/23/93/8b/a5/aman-homestay-a-boutique.jpg",
            "height": "3192"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/23/93/8b/a5/aman-homestay-a-boutique.jpg",
            "height": "413"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/23/93/8b/a5/aman-homestay-a-boutique.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2022-05-28T02:29:10-0400",
        "caption": "",
        "id": "596872101",
        "helpful_votes": "0",
        "published_date": "2022-05-28T02:29:10-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.7268900871276855",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "20",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#20 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "boutique_hotel",
      "subcategory_type_label": "Boutique Hotel",
      "distance": "0.21653499003211735",
      "distance_string": null,
      "bearing": "north",
      "rating": "5.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$38 - $48",
      "hotel_class": "2.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "90cf4b6e-4bac-48ef-a0e4-df1bd5373892"
    },
    {
      "location_id": "300606",
      "name": "Trident, Agra",
      "latitude": "27.15947",
      "longitude": "78.05999",
      "num_reviews": "4278",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/07/4a/d7/trident-agra-lobby.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/07/4a/d7/trident-agra-lobby.jpg",
            "height": "50"
          },
          "original": {
            "width": "5616",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/07/4a/d7/trident-agra-lobby.jpg",
            "height": "3744"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/07/4a/d7/trident-agra-lobby.jpg",
            "height": "367"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/07/4a/d7/trident-agra-lobby.jpg",
            "height": "167"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2023-05-07T20:46:43-0400",
        "caption": "Trident, Agra - Lobby",
        "id": "688343767",
        "helpful_votes": "0",
        "published_date": "2023-05-07T20:46:43-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.778859615325928",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "21",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#21 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.34034544038276404",
      "distance_string": null,
      "bearing": "east",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$65 - $123",
      "hotel_class": "5.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": [
          {
            "value": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=300606&from=api&area=&slot=2&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=CLM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh5zRXzGHAtD4PmSsxg2z1yZqUuxW6ObZB9p9hFZNNUhVw&bapid=2&cs=158d3acff30cfe94b74dbf973f0e6c265",
            "label": "Hotel website",
            "type": "url"
          }
        ]
      },
      "special_offers": {
        "desktop": [],
        "mobile": [
          {
            "headline": " Enjoy 15% Savings",
            "url": "https://www.tripadvisor.com/ShowSpecialOffer-a_d.300606-a_offer.9968932-a_trafficSource.ba",
            "offerless_click_tracking_url": "https://www.tripadvisor.com/Commerce?p=TABAIndependentHotels&src=0&geo=300606&from=api&area=OID:9968932%7COT:12&slot=1&matchID=1&oos=0&cnt=1&silo=30355&bucket=875169&ubucket=875169&nrank=1&crank=1&clt=SOIM&tm=270026902&managed=false&capped=false&gosox=5_3Y6UYwwGjgw_c7hEwIkQKMie6p2NgpzuI5Mft8Hh57_Q8tmAajoBDM-vNwCSzUfzt3pA_wHp3RosBd9e2E3Q&cs=158cae6272eca29e28c1bf9caee4b4fd7"
          }
        ]
      },
      "listing_key": "4d8b321e-a2f8-4188-a662-127e143ff58f"
    },
    {
      "location_id": "9853489",
      "name": "The PL Palace",
      "latitude": "27.197857",
      "longitude": "78.00298",
      "num_reviews": "691",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0b/62/7c/4f/pavilion-room.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0b/62/7c/4f/pavilion-room.jpg",
            "height": "50"
          },
          "original": {
            "width": "5760",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0b/62/7c/4f/pavilion-room.jpg",
            "height": "3840"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0b/62/7c/4f/pavilion-room.jpg",
            "height": "367"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0b/62/7c/4f/pavilion-room.jpg",
            "height": "167"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-05-25T03:56:02-0400",
        "caption": "Pavilion Room",
        "id": "191003727",
        "helpful_votes": "5",
        "published_date": "2016-05-25T03:57:59-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.1533098220825195",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "22",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#22 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "4.091893544410959",
      "distance_string": null,
      "bearing": "northwest",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$34 - $46",
      "hotel_class": "4.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "0538719c-4f98-4cc3-b1ea-076a483c6608"
    },
    {
      "location_id": "297683",
      "ad_position": "inline3",
      "ad_size": "8X8",
      "doubleclick_zone": "as.india.uttar_pradesh.agra",
      "ancestors": [
        {
          "subcategory": [
            {
              "key": "district",
              "name": "District"
            }
          ],
          "name": "Agra District",
          "abbrv": null,
          "location_id": "12396672"
        },
        {
          "subcategory": [
            {
              "key": "state",
              "name": "State"
            }
          ],
          "name": "Uttar Pradesh",
          "abbrv": null,
          "location_id": "297682"
        },
        {
          "subcategory": [
            {
              "key": "country",
              "name": "Country"
            }
          ],
          "name": "India",
          "abbrv": null,
          "location_id": "293860"
        }
      ],
      "detail": "0",
      "page_type": "hotels",
      "mob_ptype": "app_hotels"
    },
    {
      "location_id": "11948861",
      "name": "Max Guest House",
      "latitude": "27.155188",
      "longitude": "78.03533",
      "num_reviews": "304",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/27/2b/cd/d2/deluxe-king-room.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/27/2b/cd/d2/deluxe-king-room.jpg",
            "height": "50"
          },
          "original": {
            "width": "4000",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/27/2b/cd/d2/deluxe-king-room.jpg",
            "height": "3000"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/27/2b/cd/d2/deluxe-king-room.jpg",
            "height": "413"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/27/2b/cd/d2/deluxe-king-room.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2022-12-04T00:35:32-0500",
        "caption": "Deluxe King Room ",
        "id": "657182162",
        "helpful_votes": "0",
        "published_date": "2022-12-04T00:35:32-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "4.802692890167236",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "23",
      "ranking_denominator": "1197",
      "ranking_category": "bb",
      "ranking": "#23 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "guest_house",
      "subcategory_type_label": "Guest house",
      "distance": "1.242373800225374",
      "distance_string": null,
      "bearing": "west",
      "rating": "5.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$15 - $19",
      "hotel_class": "0.0",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "f9982724-cd71-41d9-b614-b46203a382f9"
    },
    {
      "location_id": "13383419",
      "name": "Village Homestay",
      "latitude": "27.177849",
      "longitude": "78.0768",
      "num_reviews": "16",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/12/0d/15/1d/nice-property-close-to.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/12/0d/15/1d/nice-property-close-to.jpg",
            "height": "50"
          },
          "original": {
            "width": "1368",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/12/0d/15/1d/nice-property-close-to.jpg",
            "height": "912"
          },
          "large": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/12/0d/15/1d/nice-property-close-to.jpg",
            "height": "683"
          },
          "medium": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/12/0d/15/1d/nice-property-close-to.jpg",
            "height": "367"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2018-02-14T09:24:59-0500",
        "caption": "Nice Property\nClose to Nature\nWith Traditional Indian View",
        "id": "302847261",
        "helpful_votes": "0",
        "published_date": "2018-02-14T09:24:59-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.152130126953125",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "24",
      "ranking_denominator": "1197",
      "ranking_category": "other",
      "ranking": "#24 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "lodge",
      "subcategory_type_label": "Lodge",
      "distance": "1.8159234041672827",
      "distance_string": null,
      "bearing": "northeast",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$11 - $35",
      "hotel_class": "0.0",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "2bae1568-9d26-4a2d-bf0d-eb21af8bdbd0"
    },
    {
      "location_id": "4356188",
      "name": "Hotel The Taj Vilas",
      "latitude": "27.157976",
      "longitude": "78.059105",
      "num_reviews": "622",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/fa/96/e0/executive-room--v15610921.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/fa/96/e0/executive-room--v15610921.jpg",
            "height": "50"
          },
          "original": {
            "width": "2600",
            "url": "https://media-cdn.tripadvisor.com/media/oyster/2600/0e/fa/96/e0/executive-room--v15610921.jpg",
            "height": "1733"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/fa/96/e0/executive-room--v15610921.jpg",
            "height": "450"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0e/fa/96/e0/executive-room--v15610921.jpg",
            "height": "205"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-11-08T14:30:45-0500",
        "caption": "The Executive Room at the Hotel The Taj Vilas",
        "id": "251303648",
        "helpful_votes": "3",
        "published_date": "2017-04-15T13:06:50-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.810058832168579",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "25",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#25 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "0.3298819628203318",
      "distance_string": null,
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$22 - $25",
      "hotel_class": "3.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "3774e057-0bc4-4bc6-ac19-94d7f23fe9bf"
    },
    {
      "location_id": "2200734",
      "name": "Fabhotel Alpine",
      "latitude": "27.158602",
      "longitude": "78.05567",
      "num_reviews": "61",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/01/f9/fa/99/exterior-view-hotel-alpine.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/01/f9/fa/99/exterior-view-hotel-alpine.jpg",
            "height": "50"
          },
          "original": {
            "width": "4288",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/01/f9/fa/99/exterior-view-hotel-alpine.jpg",
            "height": "2848"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/f9/fa/99/exterior-view-hotel-alpine.jpg",
            "height": "365"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/01/f9/fa/99/exterior-view-hotel-alpine.jpg",
            "height": "165"
          }
        },
        "is_blessed": false,
        "uploaded_date": "2011-08-16T04:41:51-0400",
        "caption": "Exterior View - Hotel Alpine, Agra, India",
        "id": "33159833",
        "helpful_votes": "7",
        "published_date": "2011-08-16T04:41:49-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.097323417663574",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "26",
      "ranking_denominator": "1197",
      "ranking_category": "bb",
      "ranking": "#26 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "small_hotel",
      "subcategory_type_label": "Small Hotel",
      "distance": "0.15044820554030566",
      "distance_string": null,
      "bearing": "southeast",
      "rating": "3.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$14 - $22",
      "hotel_class": "0.0",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "64a65f18-8d5e-4941-9194-007ec7a5bd49"
    },
    {
      "location_id": "735320",
      "name": "Hotel Sidhartha",
      "latitude": "27.16938",
      "longitude": "78.04065",
      "num_reviews": "576",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/d3/f4/86/street--v15875962.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/d3/f4/86/street--v15875962.jpg",
            "height": "50"
          },
          "original": {
            "width": "2600",
            "url": "https://media-cdn.tripadvisor.com/media/oyster/2600/0e/d3/f4/86/street--v15875962.jpg",
            "height": "1733"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/d3/f4/86/street--v15875962.jpg",
            "height": "450"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0e/d3/f4/86/street--v15875962.jpg",
            "height": "205"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2016-11-14T11:06:40-0500",
        "caption": "Street at the Hotel Sidhartha",
        "id": "248771718",
        "helpful_votes": "3",
        "published_date": "2017-03-30T13:40:14-0400",
        "user": null
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.6285810470581055",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "27",
      "ranking_denominator": "1197",
      "ranking_category": "hotel",
      "ranking": "#27 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "hotel",
      "subcategory_type_label": "Hotel",
      "distance": "1.053227274410285",
      "distance_string": null,
      "bearing": "northwest",
      "rating": "3.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$12 - $22",
      "hotel_class": "2.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "cea3f3b9-9661-46fe-96ee-b8bca95d10fd"
    },
    {
      "location_id": "13074651",
      "name": "Hotel Maple Grand",
      "latitude": "27.155666",
      "longitude": "78.050095",
      "num_reviews": "126",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/11/1f/ed/bc/maple-grand.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/11/1f/ed/bc/maple-grand.jpg",
            "height": "50"
          },
          "original": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/1f/ed/bc/maple-grand.jpg",
            "height": "412"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/11/1f/ed/bc/maple-grand.jpg",
            "height": "412"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/11/1f/ed/bc/maple-grand.jpg",
            "height": "187"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-10-30T07:21:16-0400",
        "caption": "",
        "id": "287305148",
        "helpful_votes": "1",
        "published_date": "2017-10-30T07:21:16-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.650019884109497",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "28",
      "ranking_denominator": "1197",
      "ranking_category": "other",
      "ranking": "#28 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "specialty_hotel",
      "subcategory_type_label": "Specialty Hotel",
      "distance": "0.43713436238547515",
      "distance_string": null,
      "bearing": "southwest",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$20 - $29",
      "hotel_class": "3.0",
      "hotel_class_attribution": "This property is classified according to Giata.",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "2c98bfbf-ce77-4091-9f51-331e49b144a1"
    },
    {
      "location_id": "10822623",
      "name": "Hotel Castle View",
      "latitude": "27.156578",
      "longitude": "78.062904",
      "num_reviews": "22",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/cb/d0/15/deluxe-double-room.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/cb/d0/15/deluxe-double-room.jpg",
            "height": "50"
          },
          "original": {
            "width": "1024",
            "url": "https://media-cdn.tripadvisor.com/media/photo-w/1a/cb/d0/15/deluxe-double-room.jpg",
            "height": "768"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/cb/d0/15/deluxe-double-room.jpg",
            "height": "413"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/cb/d0/15/deluxe-double-room.jpg",
            "height": "188"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2020-02-04T02:06:26-0500",
        "caption": "Deluxe double room",
        "id": "449564693",
        "helpful_votes": "0",
        "published_date": "2020-02-04T07:31:54-0500",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.1910910606384277",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "29",
      "ranking_denominator": "1197",
      "ranking_category": "other",
      "ranking": "#29 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "specialty_hotel",
      "subcategory_type_label": "Specialty Hotel",
      "distance": "0.5806287660964002",
      "distance_string": null,
      "bearing": "southeast",
      "rating": "4.0",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$15 - $16",
      "hotel_class": "0.0",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "c8ed75af-e3d0-4c7b-b976-4e2d15cd1059"
    },
    {
      "location_id": "10524438",
      "name": "Taj Castle Home Stay",
      "latitude": "27.170877",
      "longitude": "78.02926",
      "num_reviews": "151",
      "timezone": "Asia/Kolkata",
      "location_string": "Agra, Agra District, Uttar Pradesh",
      "photo": {
        "images": {
          "small": {
            "width": "150",
            "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/e3/d7/9d/superiar-deluxe-room.jpg",
            "height": "150"
          },
          "thumbnail": {
            "width": "50",
            "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/e3/d7/9d/superiar-deluxe-room.jpg",
            "height": "50"
          },
          "original": {
            "width": "720",
            "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/e3/d7/9d/superiar-deluxe-room.jpg",
            "height": "448"
          },
          "large": {
            "width": "550",
            "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/e3/d7/9d/superiar-deluxe-room.jpg",
            "height": "342"
          },
          "medium": {
            "width": "250",
            "url": "https://media-cdn.tripadvisor.com/media/photo-f/0e/e3/d7/9d/superiar-deluxe-room.jpg",
            "height": "155"
          }
        },
        "is_blessed": true,
        "uploaded_date": "2017-04-06T13:06:39-0400",
        "caption": "superiar deluxe Room",
        "id": "249812893",
        "helpful_votes": "2",
        "published_date": "2017-04-06T13:06:39-0400",
        "user": {
          "user_id": null,
          "member_id": "0",
          "type": "user"
        }
      },
      "awards": [],
      "preferred_map_engine": "default",
      "autobroaden_type": "category_integrated",
      "autobroaden_label": "Agra Places to Stay",
      "raw_ranking": "3.5795254707336426",
      "ranking_geo": "Agra",
      "ranking_geo_id": "297683",
      "ranking_position": "30",
      "ranking_denominator": "1197",
      "ranking_category": "bb",
      "ranking": "#30 Best Value of 1,197 places to stay in Agra",
      "subcategory_type": "inn",
      "subcategory_type_label": "Inn",
      "distance": "1.7149625228317045",
      "distance_string": null,
      "bearing": "northwest",
      "rating": "4.5",
      "is_closed": false,
      "is_long_closed": false,
      "price_level": "$",
      "price": "$13 - $31",
      "hotel_class": "0.0",
      "business_listings": {
        "desktop_contacts": [],
        "mobile_contacts": []
      },
      "special_offers": {
        "desktop": [],
        "mobile": []
      },
      "listing_key": "6172e013-ccdd-49f2-a978-16d5c6881970"
    }
  ])
  const [search, setSearch] = useState("")
  

  //type of api for fetch the data according to hotels,restaurants and attractions
  const [type, setType] = useState("hotels")
 
  //

  //for getting the range slider value between 1 to 5 in km
  const [sliderValue, setSliderValue] = useState(5);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  
  //
  useEffect(() => {
  API(search, type, sliderValue,setData)
  

  }, [search, type, sliderValue])
  
  return (
    <div className="App">
      <Header setSearch={setSearch} setType={setType} type={type} />
      <Flex w={"100%"} flexDirection={["column-reverse", "row"]}>
        <Box w={["100%", "50%"]}>
          <Box ml={"10px"} p={"10px"} mt={"10px"} bg={"#dcdcdc"}  w={"25%"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}  >
              <Text>Distance</Text>
              <Text>{sliderValue}KM</Text>
            </Flex>
            <Slider
              value={sliderValue}
              min={1}
              max={5}
              step={1}
              onChange={handleSliderChange}
              colorScheme="teal"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>

          <List data={data} />

        </Box>
        <Box w={["100%", "50%"]}>
          <Map data={data} />

        </Box>
      </Flex>
    </div>
  );
}

export default App;

export const MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=330424&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"

export const RestroData= [{
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
        "tabs": [
          {
            "id": "Order Online",
            "title": "Order Online"
          }
        ]
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "330424",
          "name": "The Pal's Kitchen",
          "city": "Delhi",
          "slugs": {
            "restaurant": "the-pal's-kitchen-gtb-nagar-gtb-nagar",
            "city": "delhi"
          },
          "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
          "cloudinaryImageId": "961d691102a367991e3772808d4444eb",
          "locality": "Kingsway Camp",
          "areaName": "Vijay Nagar",
          "costForTwo": "35000",
          "costForTwoMessage": "₹350 for two",
          "cuisines": [
            "North Indian",
            "Chinese"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "330424",
            "fees": [
              {
                "name": "TYPE_DISTANCE",
                "fee": 8300
              },
              {
                "name": "TYPE_TIME"
              }
            ],
            "totalFee": 8300,
            "title": "Delivery Charge",
            "amount": "8300",
            "icon": "v1648208530/surgecreatives/info",
            "message": "<b>Far (6.8 kms)</b> | Additional delivery fee will apply"
          },
          "parentId": "212243",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+ ratings",
          "sla": {
            "restaurantId": "330424",
            "deliveryTime": 33,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 35,
            "lastMileTravel": 6.8,
            "serviceability": "SERVICEABLE",
            "stressFactor": 1,
            "rainMode": "RAIN_MODE_NONE",
            "longDistance": "LONG_DISTANCE_IT_IS_LONG_DISTANCE",
            "zoneId": 154,
            "slaString": "30-35 MINS",
            "lastMileTravelString": "6.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-04-04 00:00:00",
            "visibility": true,
            "opened": true,
            "restaurantClosedMeta": {
              
            }
          },
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              },
              {
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              },
              {
                "meta": "15% off upto ₹150 | Use HSBCMANIA Above ₹499",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "visible": true
          },
          "badges": {
            
          },
          "slugString": "the-pal's-kitchen-gtb-nagar-gtb-nagar",
          "isOpen": true,
          "labels": [
            {
              "title": "Timings",
              "message": "null"
            },
            {
              "title": "Address",
              "message": "Vijay Nagar, Block H, Vijay Nagar, Delhi, 110009, India"
            },
            {
              "title": "Cuisines",
              "message": "North Indian,Chinese"
            }
          ],
          "totalRatings": 1000,
          "aggregatedDiscountInfoV2": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              },
              {
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              },
              {
                "meta": "15% off upto ₹150 | Use HSBCMANIA Above ₹499",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "couponDetailsCta": "View coupon details"
          },
          "type": "F",
          "headerBanner": {
            "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/330424"
          },
          "expectationNotifiers": [
            {
              "text": "<b>Far (6.8 kms)</b> | Additional delivery fee will apply",
              "icon": {
                "imageId": "v1648208530/surgecreatives/info"
              },
              "popup": {
                "cta": {
                  
                }
              },
              "type": "DISTANCE_FEE_FOOD_LM",
              "enrichedText": "<b>Far (6.8 kms)</b> | Additional delivery fee will apply",
              "halfCardPopup": {
                "halfCardPopupHeader": {
                  
                }
              }
            }
          ],
          "ratingSlab": "RATING_SLAB_5",
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "cartOrderabilityNudgeBanner": {
            "parameters": {
              
            },
            "presentation": {
              
            }
          },
          "latLong": "28.692885,77.205357",
          "backgroundImageOverlayInfo": {
            
          }
        },
        "analytics": {
          
        }
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
        "sectionId": "POP_UP_CROUTON_MENU"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
          "rows": 1,
          "columns": 3,
          "horizontalScrollEnabled": true,
          "itemSpacing": 12,
          "lineSpacing": 10,
          "widgetPadding": {
            
          },
          "containerStyle": {
            "containerPadding": {
              "left": 10,
              "right": 10,
              "bottom": 16
            }
          },
          "scrollBar": {
            
          }
        },
        "id": "offerCollectionWidget_UX4",
        "gridElements": {
          "infoWithStyle": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
            "offers": [
              {
                "info": {
                  "header": "GET ₹40 OFF",
                  "offerTagColor": "#E46D47",
                  "offerIds": [
                    "1288a7a1-1524-4335-b20b-e4c874be969b"
                  ],
                  "expiryTime": "1970-01-01T00:00:00Z",
                  "couponCode": "USE TRYNEW",
                  "description": "ABOVE ₹400",
                  "offerType": "offers",
                  "restId": "330424",
                  "offerLogo": "offers/generic",
                  "descriptionTextColor": "#7302060C"
                },
                "cta": {
                  "type": "OFFER_HALF_CARD"
                }
              },
              {
                "info": {
                  "header": "GET ₹150 OFF",
                  "offerTagColor": "#E46D47",
                  "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/31/5e5be43d-5232-4afc-843d-d828639ae129_HSBC.png",
                  "offerIds": [
                    "7b012c7c-a7e1-49d7-a84a-2ba6e1224780"
                  ],
                  "expiryTime": "1970-01-01T00:00:00Z",
                  "couponCode": "USE HSBCMANIA",
                  "description": "ABOVE ₹1000",
                  "offerType": "offers",
                  "restId": "330424",
                  "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/31/5e5be43d-5232-4afc-843d-d828639ae129_HSBC.png",
                  "descriptionTextColor": "#7302060C"
                },
                "cta": {
                  "type": "OFFER_HALF_CARD"
                }
              },
              {
                "info": {
                  "header": "FLAT ₹25 OFF",
                  "offerTagColor": "#E46D47",
                  "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/31/2aa1947a-fec1-43c6-97d0-c2d64f82e308_SimplMenuLogo.png",
                  "offerIds": [
                    "b8317262-33e1-4c2d-89b8-d9806cba271e"
                  ],
                  "expiryTime": "1970-01-01T00:00:00Z",
                  "couponCode": "USE SIMPL25",
                  "description": "ABOVE ₹300",
                  "offerType": "offers",
                  "restId": "330424",
                  "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/31/2aa1947a-fec1-43c6-97d0-c2d64f82e308_SimplMenuLogo.png",
                  "descriptionTextColor": "#7302060C"
                },
                "cta": {
                  "type": "OFFER_HALF_CARD"
                }
              }
            ],
            "habitMilestoneInfo": {
              "callout": {
                
              }
            },
            "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                
              }
            }
          }
        }
      }
    }
  }]
  export const dummyData=[
    {
      "image": "https://source.unsplash.com/random/400x300",
      "title": "king 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "author": "John Doe",
      "date": "2024-04-03"
    },
    {
      "image": "https://source.unsplash.com/random/400x301",
      "title": "burger 2",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "author": "Jane Smith",
      "date": "2024-04-04"
    },
    {
      "image": "https://source.unsplash.com/random/400x302",
      "title": "Card 3",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "author": "James Johnson",
      "date": "2024-04-05"
    }
  ]
  
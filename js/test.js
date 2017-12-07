var l = console.log;

var responseArray = [];

for (let i = 0; i < 10; i++) {
	responseArray[i] = {};
	responseArray[i].title = response.results.title;
	responseArray[i].abstract = response.results.abstract;
	responseArray[i].url = response.results.url;
	switch(response.results.section) {
		case 'World':
			responseArray[i].tag = "World";
			break;
		case 'Europe':
			responseArray[i].tag = "Europe";
			break;
		case 'Politics':
			responseArray[i].tag = "Politics";
			break;
		case 'Sports':
			responseArray[i].tag = "Sports";
			break;
		default:
			responseArray[i].tag = "Others";
	};
}
l(responseArray);

var response = {
  "status": "OK",
  "copyright": "Copyright (c) 2017 The New York Times Company.  All Rights Reserved.",
  "num_results": 1697,
  "results": [
    {
      "url": "https://www.nytimes.com/2017/12/06/us/california-fires.html",
      "adx_keywords": "Wildfires;Ventura County (Calif);Los Angeles (Calif)",
      "column": null,
      "section": "U.S.",
      "byline": "By JENNIFER MEDINA and RICHARD PÉREZ-PEÑA",
      "type": "Article",
      "title": "California Fires Enter the Heart of Los Angeles",
      "abstract": "A brush fire erupted near the Getty Museum before dawn on Wednesday, while a much larger fire continued to rage out of control in the Ventura area.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005589676,
      "asset_id": 100000005589676,
      "views": 1,
      "des_facet": [
        "WILDFIRES"
      ],
      "org_facet": "",
      "per_facet": "",
      "geo_facet": [
        "VENTURA COUNTY (CALIF)",
        "LOS ANGELES (CALIF)"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "A home burned in the Bel-Air neighborhood of Los Angeles on Wednesday.",
          "copyright": "Kyle Grillot/Agence France-Presse — Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/07fires-02-SUB-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/07fires-02-SUB-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/merlin_130958424_795c3fd4-8739-4536-8b9c-fdd4d527d0dd-articleInline.jpg",
              "format": "Normal",
              "height": 128,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/07fires-02-SUB-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/merlin_130958424_795c3fd4-8739-4536-8b9c-fdd4d527d0dd-jumbo.jpg",
              "format": "Jumbo",
              "height": 689,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/merlin_130958424_795c3fd4-8739-4536-8b9c-fdd4d527d0dd-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1377,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/07fires-02-SUB-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/07fires-02-SUB-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/07fires-02-SUB-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07fires-02-SUB/07fires-02-SUB-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/interactive/2017/12/05/us/harvey-weinstein-complicity.html",
      "adx_keywords": "Weinstein, Harvey;Sexual Harassment;Sex Crimes;Creative Artists Agency;McGowan, Rose;Movies;Actors and Actresses;Miramax Films;Paltrow, Gwyneth;Walt Disney Company;News and News Media;Benza, A J;National Enquirer;Howard, Dylan;Kirshner, Mia;American Media Inc;Clinton, Hillary Rodham;Dunham, Lena;Judd, Ashley",
      "column": "",
      "section": "U.S.",
      "byline": "By MEGAN TWOHEY, JODI KANTOR, SUSAN DOMINUS, JIM RUTENBERG and STEVE EDER",
      "type": "Interactive",
      "title": "Weinstein’s Complicity Machine",
      "abstract": "The producer Harvey Weinstein relied on powerful relationships across industries to provide him with cover as accusations of sexual misconduct piled up for decades.",
      "published_date": "2017-12-05",
      "source": "The New York Times",
      "id": 100000005583350,
      "asset_id": 100000005583350,
      "views": 2,
      "des_facet": [
        "SEXUAL HARASSMENT",
        "SEX CRIMES",
        "MOVIES",
        "ACTORS AND ACTRESSES"
      ],
      "org_facet": [
        "CREATIVE ARTISTS AGENCY",
        "MIRAMAX FILMS",
        "WALT DISNEY COMPANY",
        "NEWS AND NEWS MEDIA",
        "NATIONAL ENQUIRER",
        "AMERICAN MEDIA INC"
      ],
      "per_facet": [
        "WEINSTEIN, HARVEY",
        "MCGOWAN, ROSE",
        "PALTROW, GWYNETH",
        "BENZA, A J",
        "HOWARD, DYLAN",
        "KIRSHNER, MIA",
        "CLINTON, HILLARY RODHAM",
        "DUNHAM, LENA",
        "JUDD, ASHLEY"
      ],
      "geo_facet": "",
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Robyn Beck/Agence France-Presse — Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-square320-v6.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-thumbStandard-v5.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-articleInline-v5.jpg",
              "format": "Normal",
              "height": 130,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-sfSpan-v5.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-jumbo-v6.gif",
              "format": "Jumbo",
              "height": 674,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-superJumbo-v6.gif",
              "format": "superJumbo",
              "height": 674,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-square640-v6.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-thumbLarge-v5.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-mediumThreeByTwo210-v5.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/11/04/nyregion/00complicity-alpha-promo/04weinstein2-mediumThreeByTwo440-v5.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/world/middleeast/trump-jerusalem-israel-capital.html",
      "adx_keywords": "United States International Relations;Palestinians;Jews and Judaism;Trump, Donald J;Jerusalem (Israel)",
      "column": null,
      "section": "World",
      "byline": "By MARK LANDLER",
      "type": "Article",
      "title": "Trump Recognizes Jerusalem as Israel’s Capital and Orders U.S. Embassy to Move",
      "abstract": "Ignoring warnings from diplomats around the world, President Trump reverses decades of American policy toward the contested city.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005589611,
      "asset_id": 100000005589611,
      "views": 3,
      "des_facet": [
        "UNITED STATES INTERNATIONAL RELATIONS",
        "JEWS AND JUDAISM"
      ],
      "org_facet": [
        "PALESTINIANS"
      ],
      "per_facet": [
        "TRUMP, DONALD J"
      ],
      "geo_facet": [
        "JERUSALEM (ISRAEL)"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Lior Mizrahi/Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07embassy-alpha/07embassy-alpha-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/us/politics/michael-flynn-russia-sanctions-ripped-up-whistleblower.html",
      "adx_keywords": "Flynn, Michael T;Cummings, Elijah E;Gowdy, Trey;Trump, Donald J;Russian Interference in 2016 US Elections and Ties to Trump Associates;United States Politics and Government;Embargoes and Sanctions;Russia;Whistle-Blowers",
      "column": null,
      "section": "U.S.",
      "byline": "By MARK MAZZETTI and MICHAEL S. SCHMIDT",
      "type": "Article",
      "title": "Flynn Said Russian Sanctions Would Be ‘Ripped Up,’ Whistle-Blower Says",
      "abstract": "The whistle-blower said Mr. Flynn thought that ending the sanctions would allow a business project he was once involved with to move forward.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005590002,
      "asset_id": 100000005590002,
      "views": 4,
      "des_facet": [
        "RUSSIAN INTERFERENCE IN 2016 US ELECTIONS AND TIES TO TRUMP ASSOCIATES",
        "UNITED STATES POLITICS AND GOVERNMENT",
        "EMBARGOES AND SANCTIONS"
      ],
      "org_facet": [
        "WHISTLE-BLOWERS"
      ],
      "per_facet": [
        "FLYNN, MICHAEL T",
        "CUMMINGS, ELIJAH E",
        "GOWDY, TREY",
        "TRUMP, DONALD J"
      ],
      "geo_facet": [
        "RUSSIA"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Michael T. Flynn, President Trump&rsquo;s former national security adviser, pleaded guilty on Friday to lying to the F.B.I. about his conversations with the Russian ambassador to the United States.",
          "copyright": "Chip Somodevilla/Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/05dc-legal2-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/05dc-legal2-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/merlin_130758933_6b4dd7e1-4054-4081-8778-4ca6281ef514-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/merlin_130758933_6b4dd7e1-4054-4081-8778-4ca6281ef514-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/merlin_130758933_6b4dd7e1-4054-4081-8778-4ca6281ef514-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/merlin_130758933_6b4dd7e1-4054-4081-8778-4ca6281ef514-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/05dc-legal2-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/05dc-legal2-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/05dc-legal2-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-flynn/05dc-legal2-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/us/politics/franken-harrassment-resign.html",
      "adx_keywords": "Franken, Al;Sexual Harassment;Minnesota;Democratic Party;Senate;United States Politics and Government",
      "column": null,
      "section": "U.S.",
      "byline": "By YAMICHE ALCINDOR and NICHOLAS FANDOS",
      "type": "Article",
      "title": "A Democratic Chorus Rises in the Senate: ‘Franken Should Resign’",
      "abstract": "By Wednesday evening, there was widespread expectation in the Democratic caucus that Senator Al Franken would step down. He has scheduled an announcement on his future in the Senate for Thursday.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005589988,
      "asset_id": 100000005589988,
      "views": 5,
      "des_facet": [
        "UNITED STATES POLITICS AND GOVERNMENT"
      ],
      "org_facet": [
        "SEXUAL HARASSMENT",
        "DEMOCRATIC PARTY",
        "SENATE"
      ],
      "per_facet": [
        "FRANKEN, AL"
      ],
      "geo_facet": [
        "MINNESOTA"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Senator Al Franken, Democrat of Minnesota, arriving last month for a committee hearing.",
          "copyright": "Al Drago for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/07dc-harass-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/07dc-harass-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/merlin_130667219_f74251e6-1f32-424e-ac3e-a34fe1bea476-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/merlin_130667219_f74251e6-1f32-424e-ac3e-a34fe1bea476-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/merlin_130667219_f74251e6-1f32-424e-ac3e-a34fe1bea476-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/merlin_130667219_f74251e6-1f32-424e-ac3e-a34fe1bea476-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/07dc-harass-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/07dc-harass-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/07dc-harass-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-harass/07dc-harass-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/05/sports/olympics/ioc-russia-winter-olympics.html",
      "adx_keywords": "Russia;Olympic Games (2018);Doping (Sports);Olympic Games (2014);International Olympic Committee",
      "column": null,
      "section": "Sports",
      "byline": "By REBECCA R. RUIZ and TARIQ PANJA",
      "type": "Article",
      "title": "Russia Banned From Winter Olympics by I.O.C.",
      "abstract": "The country’s extensive, state-backed doping program results in penalties without precedent. The Russian Federation will not participate, though individual athletes may.",
      "published_date": "2017-12-05",
      "source": "The New York Times",
      "id": 100000005585155,
      "asset_id": 100000005585155,
      "views": 6,
      "des_facet": [
        "OLYMPIC GAMES (2018)",
        "OLYMPIC GAMES (2014)"
      ],
      "org_facet": [
        "DOPING (SPORTS)",
        "INTERNATIONAL OLYMPIC COMMITTEE"
      ],
      "per_facet": "",
      "geo_facet": [
        "RUSSIA"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Andrej Isakovic/Agence France-Presse — Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-square320-v2.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-articleInline-v2.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-sfSpan-v2.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-jumbo-v2.jpg",
              "format": "Jumbo",
              "height": 682,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-superJumbo-v2.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-square640-v2.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-mediumThreeByTwo210-v2.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/sports/06olympics-alpha/06olympics-alpha-mediumThreeByTwo440-v2.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/05/world/middleeast/american-embassy-israel-trump-move.html",
      "adx_keywords": "Trump, Donald J;Jerusalem (Israel);Israel;Diplomatic Service, Embassies and Consulates;Palestinians;Palestinian Authority;Abbas, Mahmoud;United States International Relations;United States Politics and Government",
      "column": null,
      "section": "World",
      "byline": "By MARK LANDLER and DAVID M. HALBFINGER",
      "type": "Article",
      "title": "U.S. to Recognize Jerusalem as Israel’s Capital, Trump Says, Alarming Middle East Leaders",
      "abstract": "Igniting fears of violence in the region, President Trump’s decision could derail any peace initiative, Arab and European leaders warn.",
      "published_date": "2017-12-05",
      "source": "The New York Times",
      "id": 100000005587752,
      "asset_id": 100000005587752,
      "views": 7,
      "des_facet": [
        "DIPLOMATIC SERVICE, EMBASSIES AND CONSULATES",
        "PALESTINIANS",
        "UNITED STATES INTERNATIONAL RELATIONS",
        "UNITED STATES POLITICS AND GOVERNMENT"
      ],
      "org_facet": [
        "PALESTINIAN AUTHORITY"
      ],
      "per_facet": [
        "TRUMP, DONALD J",
        "ABBAS, MAHMOUD"
      ],
      "geo_facet": [
        "JERUSALEM (ISRAEL)",
        "ISRAEL"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Oded Balilty/Associated Press",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/06dc-embassy-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/06dc-embassy-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/merlin_130910274_772579c1-1be4-45ca-8e62-5049a88dc0ec-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/merlin_130910274_772579c1-1be4-45ca-8e62-5049a88dc0ec-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/merlin_130910274_772579c1-1be4-45ca-8e62-5049a88dc0ec-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/merlin_130910274_772579c1-1be4-45ca-8e62-5049a88dc0ec-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/06dc-embassy-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/06dc-embassy-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/06dc-embassy-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/us/politics/06dc-embassy-alpha/06dc-embassy-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/health/birth-control-breast-cancer-hormones.html",
      "adx_keywords": "Breast Cancer;Birth Control and Family Planning;Hormones;Estrogen;New England Journal of Medicine;Morch, Lina S;Denmark;University of Copenhagen",
      "column": null,
      "section": "Health",
      "byline": "By RONI CARYN RABIN",
      "type": "Article",
      "title": "Birth Control Pills Still Linked to Breast Cancer, Study Finds",
      "abstract": "Women using birth control pills and I.U.D.s that release hormones face a higher risk than those using methods without hormones, scientists in Denmark reported.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005589771,
      "asset_id": 100000005589771,
      "views": 8,
      "des_facet": [
        "BREAST CANCER",
        "HORMONES",
        "ESTROGEN"
      ],
      "org_facet": [
        "BIRTH CONTROL AND FAMILY PLANNING",
        "NEW ENGLAND JOURNAL OF MEDICINE",
        "UNIVERSITY OF COPENHAGEN"
      ],
      "per_facet": [
        "MORCH, LINA S"
      ],
      "geo_facet": [
        "DENMARK"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "An ultrasound image of an implanted intrauterine contraceptive device. A study found that women who rely on birth control pills or I.U.D.’s that release hormones face a small but significant increase in the risk for breast cancer.",
          "copyright": "Dr. Najeeb Layyous/Science Source",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-articleInline.jpg",
              "format": "Normal",
              "height": 126,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-jumbo.jpg",
              "format": "Jumbo",
              "height": 1024,
              "width": 683
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-superJumbo.jpg",
              "format": "superJumbo",
              "height": 2048,
              "width": 1366
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/science/07BREASTCANCER/07BREASTCANCER-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/technology/coinbase-bitcoin.html",
      "adx_keywords": "Bitcoin (Currency);Virtual Currency;Start-ups;Coinbase Inc;Ethereum Foundation;Internal Revenue Service",
      "column": null,
      "section": "Technology",
      "byline": "By NATHANIEL POPPER",
      "type": "Article",
      "title": "Coinbase: The Heart of the Bitcoin Frenzy",
      "abstract": "The San Francisco start-up has been at the center of the virtual currency boom. But like any young company, it is experiencing growing pains.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005590305,
      "asset_id": 100000005590305,
      "views": 9,
      "des_facet": [
        "BITCOIN (CURRENCY)",
        "VIRTUAL CURRENCY"
      ],
      "org_facet": [
        "START-UPS",
        "COINBASE INC",
        "ETHEREUM FOUNDATION",
        "INTERNAL REVENUE SERVICE"
      ],
      "per_facet": "",
      "geo_facet": "",
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Coinbase employees lining up for free food in the gaming room of the company's office in San Francisco.",
          "copyright": "Jason Henry for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-square320-v2.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-thumbStandard-v2.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-articleInline-v2.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-sfSpan-v2.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-square640-v2.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-thumbLarge-v2.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-mediumThreeByTwo210-v2.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/06/automobiles/oakImage-1512585783882/oakImage-1512585783882-mediumThreeByTwo440-v2.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/interactive/2017/12/06/us/southern-california-wildfires.html",
      "adx_keywords": "Fires and Firefighters;Wildfires;Los Angeles (Calif);California",
      "column": "",
      "section": "U.S.",
      "byline": "By SARAH ALMUKHTAR, K.K. REBECCA LAI, DEREK WATKINS and TIM WALLACE",
      "type": "Interactive",
      "title": "Where Wildfires Are Raging in Southern California",
      "abstract": "Wildfires burned near and in Los Angeles and other parts of Southern California, forcing thousands to evacuate.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005590049,
      "asset_id": 100000005590049,
      "views": 10,
      "des_facet": [
        "FIRES AND FIREFIGHTERS",
        "WILDFIRES"
      ],
      "org_facet": "",
      "per_facet": "",
      "geo_facet": [
        "LOS ANGELES (CALIF)",
        "CALIFORNIA"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "The Thomas fire by Highway 101 near Ventura, Calif., on Thursday.",
          "copyright": "Mario Tama/Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/los-angeles-wildfire-alpha/los-angeles-wildfire-alpha-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/us/words-with-friends-meeting.html",
      "adx_keywords": "Friendship;Computer and Video Games;Words with Friends (Video Game);Age, Chronological",
      "column": null,
      "section": "U.S.",
      "byline": "By DANIEL VICTOR",
      "type": "Article",
      "title": "He’s 22. She’s 81. Their Friendship Is Melting Hearts.",
      "abstract": "The two met on the Words With Friends app, and photos of their in-person meeting delighted thousands of people on social media.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005590024,
      "asset_id": 100000005590024,
      "views": 11,
      "des_facet": [
        "FRIENDSHIP",
        "COMPUTER AND VIDEO GAMES",
        "AGE, CHRONOLOGICAL"
      ],
      "org_facet": "",
      "per_facet": "",
      "geo_facet": "",
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Spencer Sleyon meeting his online friend Rosalind Guttman in Florida last weekend.",
          "copyright": "Rev. Amy Butler",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/merlin_130949816_84dff795-5b96-4349-8271-0d9b9f3b61f3-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/07xp-wwf-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/merlin_130949816_84dff795-5b96-4349-8271-0d9b9f3b61f3-articleInline.jpg",
              "format": "Normal",
              "height": 253,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/merlin_130949816_84dff795-5b96-4349-8271-0d9b9f3b61f3-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/merlin_130949816_84dff795-5b96-4349-8271-0d9b9f3b61f3-jumbo.jpg",
              "format": "Jumbo",
              "height": 1024,
              "width": 768
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/merlin_130949816_84dff795-5b96-4349-8271-0d9b9f3b61f3-superJumbo.jpg",
              "format": "superJumbo",
              "height": 2048,
              "width": 1536
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/merlin_130949816_84dff795-5b96-4349-8271-0d9b9f3b61f3-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/07xp-wwf-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/merlin_130949816_84dff795-5b96-4349-8271-0d9b9f3b61f3-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/07xp-wwf/merlin_130949816_84dff795-5b96-4349-8271-0d9b9f3b61f3-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/07/us/california-fire-ventura-county.html",
      "adx_keywords": "Wildfires;Fires and Firefighters;Los Angeles (Calif);Ventura (Calif);Evacuations and Evacuees",
      "column": null,
      "section": "U.S.",
      "byline": "By THE NEW YORK TIMES",
      "type": "Article",
      "title": "Southern California Fires Live Updates: More Areas Under Siege as Wind Gains Strength",
      "abstract": "Emergency crews in the Los Angeles area were contending with brisk winds, steep terrain and fatigue from days of relentless work.",
      "published_date": "2017-12-07",
      "source": "The New York Times",
      "id": 100000005591904,
      "asset_id": 100000005591904,
      "views": 12,
      "des_facet": [
        "WILDFIRES",
        "FIRES AND FIREFIGHTERS"
      ],
      "org_facet": [
        "EVACUATIONS AND EVACUEES"
      ],
      "per_facet": "",
      "geo_facet": [
        "LOS ANGELES (CALIF)",
        "VENTURA (CALIF)"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Ventura County firefighters worked to douse embers in Ojai, Calif., on Thursday.",
          "copyright": "Hilary Swift for The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/08fires-01SUBSUB-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/08fires-01SUBSUB-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/08fires-01SUBSUB-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/merlin_131006636_7cc99528-f028-4e6d-9c5a-d624462b1fab-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/merlin_131006636_7cc99528-f028-4e6d-9c5a-d624462b1fab-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/merlin_131006636_7cc99528-f028-4e6d-9c5a-d624462b1fab-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1366,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/08fires-01SUBSUB-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/08fires-01SUBSUB-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/merlin_131006636_7cc99528-f028-4e6d-9c5a-d624462b1fab-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/08/us/08fires-01SUBSUB/merlin_131006636_7cc99528-f028-4e6d-9c5a-d624462b1fab-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/world/middleeast/salvator-mundi-da-vinci-saudi-prince-bader.html",
      "adx_keywords": "Art;da Vinci, Leonardo;Auctions;Bader bin Abdullah bin Mohammed bin Farhan al-Saud;Muslims and Islam;Royal Families;Christie's;Mohammed bin Salman (1985- );Salman, King of Saudi Arabia;Saudi Arabia;Salvator Mundi",
      "column": null,
      "section": "World",
      "byline": "By DAVID D. KIRKPATRICK",
      "type": "Article",
      "title": "Mystery Buyer of $450 Million ‘Salvator Mundi’ Was a Saudi Prince",
      "abstract": "The prince bought Leonardo da Vinci’s portrait of Christ, according to documents reviewed by The New York Times.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005587801,
      "asset_id": 100000005587801,
      "views": 13,
      "des_facet": [
        "ART",
        "AUCTIONS"
      ],
      "org_facet": [
        "MUSLIMS AND ISLAM",
        "ROYAL FAMILIES",
        "CHRISTIE'S"
      ],
      "per_facet": [
        "DA VINCI, LEONARDO",
        "BADER BIN ABDULLAH BIN MOHAMMED BIN FARHAN AL-SAUD",
        "MOHAMMED BIN SALMAN (1985- )",
        "SALMAN, KING OF SAUDI ARABIA"
      ],
      "geo_facet": [
        "SAUDI ARABIA"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Bidding for Leonardo da Vinci&rsquo;s &ldquo;Salvator Mundi&rdquo; at Christie&rsquo;s in New York last month. The identity of the bidder had been a tantalizing secret that had fueled gossip and speculation.",
          "copyright": "Michelle V. Agins/The New York Times",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07davinci1/merlin_130154504_0224d80e-ca7b-4efa-8611-899523400933-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/05/us/politics/supreme-court-same-sex-marriage-cake.html",
      "adx_keywords": "Same-Sex Marriage, Civil Unions and Domestic Partnerships;Masterpiece Cakeshop (Lakewood, Colo);Bakeries and Baked Products;Phillips, Jack (1956- );Supreme Court (US);Homosexuality and Bisexuality;Discrimination;Freedom of Speech and Expression;Constitution (US);Kennedy, Anthony M;Colorado",
      "column": null,
      "section": "U.S.",
      "byline": "By ADAM LIPTAK",
      "type": "Article",
      "title": "Justices Sharply Divided in Gay Rights Case",
      "abstract": "A Colorado baker’s refusal to serve a gay couple on religious grounds has led to a major Supreme Court showdown.",
      "published_date": "2017-12-05",
      "source": "The New York Times",
      "id": 100000005585985,
      "asset_id": 100000005585985,
      "views": 14,
      "des_facet": [
        "SAME-SEX MARRIAGE, CIVIL UNIONS AND DOMESTIC PARTNERSHIPS",
        "HOMOSEXUALITY AND BISEXUALITY",
        "DISCRIMINATION",
        "FREEDOM OF SPEECH AND EXPRESSION"
      ],
      "org_facet": [
        "MASTERPIECE CAKESHOP (LAKEWOOD, COLO)",
        "BAKERIES AND BAKED PRODUCTS",
        "SUPREME COURT (US)",
        "CONSTITUTION (US)"
      ],
      "per_facet": [
        "PHILLIPS, JACK (1956- )",
        "KENNEDY, ANTHONY M"
      ],
      "geo_facet": [
        "COLORADO"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Nick Cote for The New York Times. Technology by Samsung.",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-articleInline.jpg",
              "format": "Normal",
              "height": 123,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-jumbo.jpg",
              "format": "Jumbo",
              "height": 664,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1328,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/09/17/us/360-bakercover/360-bakercover-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/movies/best-movies.html",
      "adx_keywords": "Movies;A Fantastic Woman (Movie);A Quiet Passion (Movie);Dunkirk (Movie);Faces Places (Movie);Get Out (Movie);Graduation (Movie);I Am Not Your Negro (Movie);Lady Bird (Movie);Phantom Thread (Movie);The Florida Project (Movie);War for the Planet of the Apes (Movie);Okja (Movie);Wonder Woman (Movie);Ex Libris: New York Public Library (Movie)",
      "column": null,
      "section": "Movies",
      "byline": "By MANOHLA DARGIS and A.O. SCOTT",
      "type": "Article",
      "title": "The Best Movies of 2017",
      "abstract": "Our chief film critics on their favorite pictures of the year.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005575017,
      "asset_id": 100000005575017,
      "views": 15,
      "des_facet": [
        "MOVIES"
      ],
      "org_facet": "",
      "per_facet": "",
      "geo_facet": "",
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "The best movies of 2017 included, clockwise from top left: “Dunkirk,” “Get Out,” “The Florida Project,” “Lady Bird,” “Okja” and “Wonder Woman.”",
          "copyright": "Warner Bros.; Universal Pictures; A24; Merrick Morton/A24; Netflix; Clay Enos/Warner Bros",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/arts/10BEST-OF-FILMS-GRID/10BEST-OF-FILMS-GRID-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/world/middleeast/jerusalem-trump-embassy.html",
      "adx_keywords": "Israel;Jerusalem (Israel);Palestinians;Trump, Donald J;United States International Relations;Diplomatic Service, Embassies and Consulates;Fatah, Al;Hamas;Abbas, Mahmoud;Netanyahu, Benjamin;West Bank;Gaza Strip;Middle East",
      "column": null,
      "section": "World",
      "byline": "By DAVID M. HALBFINGER, MARK LANDLER and ISABEL KERSHNER",
      "type": "Article",
      "title": "Trump Calls Jerusalem Plan Step Toward Peace, but It Puts Mideast on Edge",
      "abstract": "An Israeli minister said moving the U.S. Embassy to Jerusalem would be “destiny.” The leader of Hamas called it “an unaccountable gamble.”",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005589599,
      "asset_id": 100000005589599,
      "views": 16,
      "des_facet": [
        "PALESTINIANS",
        "UNITED STATES INTERNATIONAL RELATIONS"
      ],
      "org_facet": [
        "DIPLOMATIC SERVICE, EMBASSIES AND CONSULATES",
        "FATAH, AL",
        "HAMAS"
      ],
      "per_facet": [
        "TRUMP, DONALD J",
        "ABBAS, MAHMOUD",
        "NETANYAHU, BENJAMIN"
      ],
      "geo_facet": [
        "ISRAEL",
        "JERUSALEM (ISRAEL)",
        "WEST BANK",
        "GAZA STRIP",
        "MIDDLE EAST"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Israeli forces take position as Palestinian protesters gather outside Damascus Gate in Jerusalem’s Old City on Thursday.",
          "copyright": "Menahem Kahana/Agence France-Presse — Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-articleInline.jpg",
              "format": "Normal",
              "height": 128,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-jumbo.jpg",
              "format": "Jumbo",
              "height": 689,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1378,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/world/07mideast1-sub/07mideast1-sub-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/us/politics/john-conyers-iii-stabbing-domestic-violence.html",
      "adx_keywords": "Sexual Harassment;United States Politics and Government;Murders, Attempted Murders and Homicides;Conyers, John III;Conyers, John Jr",
      "column": null,
      "section": "U.S.",
      "byline": "By YAMICHE ALCINDOR",
      "type": "Article",
      "title": "John Conyers’s Son Was Arrested This Year, Accused of Stabbing His Girlfriend",
      "abstract": "John Conyers III, whose father endorsed him for a House seat he resigned amid harassment allegations, was arrested in February after his girlfriend suffered knife cuts during an argument.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005590820,
      "asset_id": 100000005590820,
      "views": 17,
      "des_facet": [
        "SEXUAL HARASSMENT",
        "UNITED STATES POLITICS AND GOVERNMENT"
      ],
      "org_facet": [
        "MURDERS, ATTEMPTED MURDERS AND HOMICIDES"
      ],
      "per_facet": [
        "CONYERS, JOHN III",
        "CONYERS, JOHN JR"
      ],
      "geo_facet": "",
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "John Conyers III, son of the retired Representative John Conyers Jr., at a movie premiere in July.",
          "copyright": "Aaron J. Thornton/Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-jumbo.jpg",
              "format": "Jumbo",
              "height": 682,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1330,
              "width": 1996
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/us/politics/07dc-conyers/07dc-conyers-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/interactive/2017/books/review/10-best-books-2017.html",
      "adx_keywords": "Books and Literature",
      "column": "",
      "section": "Books",
      "byline": "",
      "type": "Interactive",
      "title": "The 10 Best Books of 2017",
      "abstract": "The year’s best books, selected by the editors of The New York Times Book Review.",
      "published_date": "2017-11-30",
      "source": "The New York Times",
      "id": 100000005575604,
      "asset_id": 100000005575604,
      "views": 18,
      "des_facet": [
        "BOOKS AND LITERATURE"
      ],
      "org_facet": "",
      "per_facet": "",
      "geo_facet": "",
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Nicole Licht",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-thumbStandard-v2.gif",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-articleInline-v6.gif",
              "format": "Normal",
              "height": 186,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-sfSpan.jpg",
              "format": "Large",
              "height": 264,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-jumbo.jpg",
              "format": "Jumbo",
              "height": 1004,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-superJumbo.jpg",
              "format": "superJumbo",
              "height": 2009,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/10/books/review/10TenBest-COVER/10TenBest-COVER-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/opinion/trump-foreign-policy-giveaway.html",
      "adx_keywords": "Trump, Donald J;Israel;China;United States International Relations;International Trade and World Market;Israeli Settlements;Trans-Pacific Partnership;Palestinians;East Jerusalem;Jerusalem (Israel)",
      "column": "Op-Ed Columnist",
      "section": "Opinion",
      "byline": "By THOMAS L. FRIEDMAN",
      "type": "Article",
      "title": "Trump, Israel and the Art of the Giveaway",
      "abstract": "I’ve never seen a president give up so much to so many for so little.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005590051,
      "asset_id": 100000005590051,
      "views": 19,
      "des_facet": [
        "UNITED STATES INTERNATIONAL RELATIONS",
        "INTERNATIONAL TRADE AND WORLD MARKET",
        "ISRAELI SETTLEMENTS"
      ],
      "org_facet": [
        "TRANS-PACIFIC PARTNERSHIP",
        "PALESTINIANS"
      ],
      "per_facet": [
        "TRUMP, DONALD J"
      ],
      "geo_facet": [
        "ISRAEL",
        "CHINA",
        "EAST JERUSALEM",
        "JERUSALEM (ISRAEL)"
      ],
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "",
          "copyright": "Ahmad Gharabli/Agence France-Presse — Getty Images",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-articleInline.jpg",
              "format": "Normal",
              "height": 127,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-jumbo.jpg",
              "format": "Jumbo",
              "height": 683,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-superJumbo.jpg",
              "format": "superJumbo",
              "height": 1365,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/opinion/07FRIEDMAN1/07FRIEDMAN1-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    },
    {
      "url": "https://www.nytimes.com/2017/12/06/health/unitedhealth-doctors-insurance.html",
      "adx_keywords": "Health Insurance and Managed Care;Doctors;Aetna Inc;CVS Caremark Corporation;UnitedHealth Group Inc;Optum Inc;DaVita HealthCare Partners Inc",
      "column": null,
      "section": "Health",
      "byline": "By REED ABELSON",
      "type": "Article",
      "title": "UnitedHealth Buys Large Doctors Group as Lines Blur in Health Care",
      "abstract": "The purchase of DaVita Medical Group moves UnitedHealth more into the role of doctor as it buys nearly 300 clinics across six states.",
      "published_date": "2017-12-06",
      "source": "The New York Times",
      "id": 100000005589060,
      "asset_id": 100000005589060,
      "views": 20,
      "des_facet": [
        "HEALTH INSURANCE AND MANAGED CARE",
        "DOCTORS"
      ],
      "org_facet": [
        "AETNA INC",
        "CVS CAREMARK CORPORATION",
        "UNITEDHEALTH GROUP INC",
        "OPTUM INC",
        "DAVITA HEALTHCARE PARTNERS INC"
      ],
      "per_facet": "",
      "geo_facet": "",
      "media": [
        {
          "type": "image",
          "subtype": "photo",
          "caption": "Part of the UnitedHealth Group campus in Minnetonka, Minn. The company’s Optum unit is buying a large physician group.",
          "copyright": "Jim Mone/Associated Press",
          "approved_for_syndication": 1,
          "media-metadata": [
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-square320.jpg",
              "format": "square320",
              "height": 320,
              "width": 320
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-thumbStandard.jpg",
              "format": "Standard Thumbnail",
              "height": 75,
              "width": 75
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-articleInline-v2.jpg",
              "format": "Normal",
              "height": 125,
              "width": 190
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-sfSpan.jpg",
              "format": "Large",
              "height": 263,
              "width": 395
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-jumbo-v2.jpg",
              "format": "Jumbo",
              "height": 676,
              "width": 1024
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-superJumbo-v2.jpg",
              "format": "superJumbo",
              "height": 1353,
              "width": 2048
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-square640.jpg",
              "format": "square640",
              "height": 640,
              "width": 640
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-thumbLarge.jpg",
              "format": "Large Thumbnail",
              "height": 150,
              "width": 150
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-mediumThreeByTwo210.jpg",
              "format": "mediumThreeByTwo210",
              "height": 140,
              "width": 210
            },
            {
              "url": "https://static01.nyt.com/images/2017/12/07/business/07insure/07insure-mediumThreeByTwo440.jpg",
              "format": "mediumThreeByTwo440",
              "height": 293,
              "width": 440
            }
          ]
        }
      ]
    }
  ]
};
var responseArray = [];

for (let i = 0; i < 10; i++) {
	responseArray[i] = {};
	responseArray[i].title = response.response.docs[i].headline.main;
	responseArray[i].body = response.response.docs[i].snippet;
	responseArray[i].url = response.response.docs[i].web_url;
	switch(response.response.docs[i].section_name) {
		case 'World':
			responseArray[i].tag = "World";
			break;
		case 'Europe':
			responseArray[i].tag = "Europe";
			break;
		case 'Politics':
			responseArray[i].tag = "Politics";
			break;
		case 'Sports':
			responseArray[i].tag = "Sports";
			break;
		default:
			responseArray[i].tag = "Others";
	};
}
l(responseArray);
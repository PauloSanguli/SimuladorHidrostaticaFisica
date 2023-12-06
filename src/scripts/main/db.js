const db = {
    "solids": [
        {
            "name": "ovo",
            "m": {
                "value": 0.06,
                "unity": "kg"
            },
            "v": {
                "value": 0.000055,
                "unity": "m^3"
            }
        },
        {
            "name": "maca",
            "m": {
                "value": 0.2,
                "unity": "kg"
            },
            "v": {
                "value": 0.0002,
                "unity": "m^3"
            }
        },
        {
            "name": "colher",
            "m": {
                "value": 0.2,
                "unity": "kg"
            },
            "v": {
                "value": 0.0001,
                "unity": "m^3"
            }
        },
        {
            "name": "bola",
            "m": {
                "value": 0.4,
                "unity": "kg"
            },
            "v": {
                "value": 0.0042,
                "unity": "m^3"
            }
        },
        {
            "name": "rocha",
            "m": {
                "value": 0.03,
                "unity": "kg"
            },
            "v": {
                "value": 0.00002,
                "unity": "m^3"
            }
        },
        {
            "name": "caneta",
            "m": {
                "value": 0.01,
                "unity": "kg"
            },
            "v": {
                "value": 0.00001,
                "unity": "m^3"
            }
        },
        {
            "name": "abacaxi",
            "m": {
                "value": 2.5,
                "unity": "kg"
            },
            "v": {
                "value": 0.02,
                "unity": "m^3"
            }
        }
    ],
    "liquids": [
        {
            "name": "agua",
            "d": {
                "value": 1000,
                "unity": "kg/m^3"
            },
            "color": "#5ea9f3"
        },
        {
            "name": "oleo",
            "d": {
                "value": 0.891*10^3,
                "unity": "kg/m^3"
            },
            "color": "#e8f1ba"
        },
        {
            "name": "azeite",
            "d": {
                "value": 0.916*10^3,
                "unity": "kg/m^3"
            },
            "color": "#6edfac"
        },
        {
            "name": "gasolina",
            "d": {
                "value": 730,
                "unity": "kg/m^3"
            },
            "color": "#f7dedf"
        },
        {
            "name": "hexano",
            "d": {
                "value": 661,
                "unity": "kg/m^3"
            },
            "color": "aliceblue"
        },
        {
            "name": "tolueno",
            "d": {
                "value": 867,
                "unity": "kg/m^3"
            },
            "color": "#f5f5f5"
        },
        {
            "name": "mercurio",
            "d": {
                "value": 13600,
                "unity": "kg/m^3"
            },
            "color": "#e9d5e0"
        },
        {
            "name": "oleo_palma",
            "d": {
                "value": 0.891*10^3,
                "unity": "kg/m^3"
            },
            "color": "#b2f0f3"
        }
    ]
}

db.liquids.map((item) => {
    console.log(item.name)
})
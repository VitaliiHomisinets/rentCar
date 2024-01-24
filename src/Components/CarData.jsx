import React from 'react'

const carData = [
    {
      type: "SEDAN",
      description: {
        eco: "ECONOM CALSS",
        mid: "MIDDLE CLASS",
        prem: "PREMIUM CLASS",
      },
      name: {
        Econom: {
          one:{
            marka:'Toyota',
            module:'Corolla',
            image:'./car/ToyotaCorolla.png',
            Year:'2019',
            Engine:'2.5',
            Weight:'1525',
            Fuel:'Petrol',
            MaximumSpeed:'210',
            FuelConsumption:'6,8',
            price:'$100'
          },
          two:{
            marka:'Volkswagen',
            module:'Jetta',
            image:'./car/VolkswagenJetta.png',
            Year:'2016',
            Engine:'1.6',
            Weight:'1525',
            FuelConsumption:'4,8',
            MaximumSpeed:'210',
            Fuel:'Diesel',
            price:'$130'
          },
          three: {
            marka:'Ford',
            module:'Focus',
            image:'./car/FordFocus.png',
            Year:'2012',
            Engine:'1.8',
            Weight:'1525',
            FuelConsumption:'6,8',
            MaximumSpeed:'187',
            Fuel:'Diesel',
            price:'$112'
          },
        },
        Midle: {
          one: {
            marka:'Toyota',
            module:'Camry',
            image:'./car/ToyotaCamry.png',
            Year:'2019',
            Engine:'3.5',
            Weight:'1620',
            FuelConsumption:'3,5',
            MaximumSpeed:'220',
            Fuel:'Petrol',
            price:'$250'
          },
          two: {
            marka:'Honda ',
            module:'Accord',
            image:'./car/HondaAccord.png',
            Year:'2020',
            Engine:'2.0',
            Weight:'1455',
            FuelConsumption:'7,6',
            MaximumSpeed:'229',
            Fuel:'256',
            price:'$260'
          },
          three: {
            marka:'Ford',
            module:'Fusion',
            image:'./car/FordFusion.png',
            Year:'2017',
            Engine:'2.5',
            Weight:'1575',
            FuelConsumption:'11',
            MaximumSpeed:'217',
            Fuel:'270',
            price:'$270'
          },
        },
        Premium: {
          one: {
            marka:'Mercedes-Benz',
            module:'E-Class',
            image:'./car/MercedesBenzEClassW213.png',
            Year:'2017',
            Engine:'3.0',
            Weight:'1580',
            FuelConsumption:'8,8',
            MaximumSpeed:'240',
            Fuel:'Petrol',
            price:'$450'
          },
          two: {
            marka:'BMW',
            module:'5 Series (530d)',
            image:'./car/BMWSeries530d.png',
            Year:'2020',
            Engine:'3L',
            Weight:'1820kg',
            FuelConsumption:'7',
            MaximumSpeed:'250',
            Fuel:'Diesel',
            price:'$450'
          },
          three: {
            marka:'Lexus',
            module:'ES',
            image:'./car/LexusES.png',
            Year:'2020',
            Engine:'2.5',
            Weight:'1650',
            FuelConsumption:'7.9',
            MaximumSpeed:'207',
            Fuel:'Petrol',
            price:'$400'
          },
        },
      },
    },
    {
      type: "UNIVERSAL",
      description: {
        eco: "ECONOM CALSS",
        mid: "MIDDLE CLASS",
        prem: "PREMIUM CLASS",
      },
      name: {
        Econom: {
          one: {
            marka:'Honda',
            module:'Civic Touring',
            image:'./car/HondaCivicTourer.png',
            Year:'2015',
            Engine:'1.8',
            Weight:'1355',
            FuelConsumption:'6.2',
            MaximumSpeed:'200',
            Fuel:'Petrol',
            price:'$150'
          },
          two: {
            marka:'Volkswagen',
            module:'Golf Variant',
            image:'./car/VolkswagenGolfVariant.png',
            Year:'2019',
            Engine:'2.0',
            Weight:'1490',
            FuelConsumption:'5.6',
            MaximumSpeed:'250',
            Fuel:'Diesel',
            price:'$160'
          },
          three: {
            marka:'Hyundai',
            module:'Elantra Touring',
            image:'./car/HyundaiElantraTouring.png',
            Year:'2019',
            Engine:'2.0',
            Weight:'1347',
            FuelConsumption:'7.8',
            MaximumSpeed:'190',
            Fuel:'Petrol',
            price:'$130'
          },
        },
        Midle: {
          one: {
            marka:'Volkswagen',
            module:'Passat Variant',
            image:'./car/VolkswagenPassatVariant.png',
            Year:'2018',
            Engine:'1.8',
            Weight:'1505',
            FuelConsumption:'5,8',
            MaximumSpeed:'232',
            Fuel:'Petrol',
            price:'$190'
          },
          two: {
            marka:'Subaru',
            module:' Legacy Wagon',
            image:'./car/SubaruLegacyWagon.png',
            Year:'2015',
            Engine:'2.0',
            Weight:'1488',
            FuelConsumption:'9.1',
            MaximumSpeed:'206',
            Fuel:'Petrol',
            price:'$200'
          },
          three: {
            marka:'Audi',
            module:'A4 Avant',
            image:'./car/AudiA4Avant.png',
            Year:'2019',
            Engine:'2.0',
            Weight:'1595',
            FuelConsumption:'6.1',
            MaximumSpeed:'236',
            Fuel:'Petrol',
            price:'$220'
          },
        },
        Premium: {
          one: {
            marka:'Porsche',
            module:'Panamera Turismo',
            image:'./car/PorschePanameraSportTurismo.png',
            Year:'2018',
            Engine:'4.0',
            Weight:'2025',
            FuelConsumption:'10,6',
            MaximumSpeed:'259',
            Fuel:'Petrol',
            price:'$500'
          },
          two: {
            marka:'Audi',
            module:'A6 Avant',
            image:'./car/AudiA6Avant.png',
            Year:'2018',
            Engine:'2.0',
            Weight:'1802',
            FuelConsumption:'6.5',
            MaximumSpeed:'250',
            Fuel:'Petrol',
            price:'$450'
          },
          three: {
            marka:'Volvo',
            module:'V90',
            image:'./car/VolvoV90.png',
            Year:'2016',
            Engine:'2.0',
            Weight:'1834',
            FuelConsumption:'6.7',
            MaximumSpeed:'210',
            Fuel:'Diesel',
            price:'$430'
          },
        },
      },
    },
    {
      type: "CROSSOVER",
      description: {
        eco: "ECONOM CALSS",
        mid: "MIDDLE CLASS",
        prem: "PREMIUM CLASS",
      },
      name: {
        Econom: {
          one: {
            marka:'Toyota',
            module:'RAV4',
            image:'./car/ToyotaRAV4.png',
            Year:'2018',
            Engine:'2.5',
            Weight:'1680',
            FuelConsumption:'4.7',
            MaximumSpeed:'180',
            Fuel:'Petrol',
            price:'$150'
          },
          two: {
            marka:'Nissan',
            module:'Rogue',
            image:'./car/NissanRogue.png',
            Year:'2018',
            Engine:'2.5',
            Weight:'1536',
            FuelConsumption:'8.1',
            MaximumSpeed:'180',
            Fuel:'Petrol',
            price:'$130'
          },
          three: {
            marka:'Hyundai',
            module:'Tucson',
            image:'./car/HyundaiTucson.png',
            Year:'2018',
            Engine:'2.0',
            Weight:'1425',
            FuelConsumption:'8.1',
            MaximumSpeed:'180',
            Fuel:'Petrol',
            price:'$120'
          },
        },
        Midle: {
          one: {
            marka:'Honda',
            module:'Pilot',
            image:'./car/HondaPilot.png',
            Year:'2017',
            Engine:'3.5',
            Weight:'1987',
            FuelConsumption:'10.7',
            MaximumSpeed:'190',
            Fuel:'Petrol', 
            price:'$220'
          },
          two: {
            marka:'Chevrolet',
            module:' Traverse',
            image:'./car/ChevroletTraverse.png',
            Year:'2017',
            Engine:'3.6',
            Weight:'2147',
            FuelConsumption:'10',
            MaximumSpeed:'210',
            Fuel:'Petrol',
            price:'$250'
          },
          three: {
            marka:'Ford',
            module:'Explorer',
            image:'./car/FordExplorer.png',
            Year:'2015',
            Engine:'2.3',
            Weight:'2130',
            FuelConsumption:'11.2',
            MaximumSpeed:'183',
            Fuel:'Petrol',
            price:'$270'
          },
        },
        Premium: {
          one:{
            marka:'BMW',
            module:'X5',
            image:'./car/BMWX5.png',
            Year:'2015',
            Engine:'4.4',
            Weight:'2145',
            FuelConsumption:'10.5',
            MaximumSpeed:'250',
            Fuel:'Petrol',
            price:'$350'
          },
          two: {
            marka:'Audi',
            module:'Q5',
            image:'./car/AudiQ5.png',
            Year:'2020',
            Engine:'2.0',
            Weight:'1850',
            FuelConsumption:'5.3',
            MaximumSpeed:'222',
            Fuel:'Diesel',
            price:'$400'
          },
          three: {
            marka:'Lexus',
            module:'RX',
            image:'./car/LexusRX.png',
            Year:'2020',
            Engine:'3.5',
            Weight:'2210',
            FuelConsumption:'5.3',
            MaximumSpeed:'200',
            Fuel:'Petrol',
            price:'$500'
          },
        },
      },
    },
    {
      type: "HATCHBACK",
      description: {
        eco: "ECONOM CALSS",
        mid: "MIDDLE CLASS",
        prem: "PREMIUM CLASS",
      },
      name: {
        Econom: {
          one: {
            marka:'Volkswagen',
            module:'Golf',
            image:'./car/VolkswagenGolf.png',
            Year:'2020',
            Engine:'2.0',
            Weight:'1463',
            FuelConsumption:'6.6',
            MaximumSpeed:'250',
            Fuel:'Petrol',
            price:'$100'
          },
          two: {
            marka:'Honda',
            module:'Civic Hatchback',
            image:'./car/HondaCivicHatchback.png',
            Year:'2017',
            Engine:'2.0',
            Weight:'1380',
            FuelConsumption:'7.7',
            MaximumSpeed:'272',
            Fuel:'Petrol',
            price:'$100'
          },
          three: {
            marka:'Toyota',
            module:'Corolla Hatchback',
            image:'./car/ToyotaCorollaHatchback.png',
            Year:'2017',
            Engine:'1.8',
            Weight:'1380',
            FuelConsumption:'3.6',
            MaximumSpeed:'180',
            Fuel:'Petrol',
            price:'$125'
          },
        },
        Midle: {
          one: {
            marka:'Volkswagen',
            module:'Golf GTI',
            image:'./car/VolkswagenGolfGTI.png',
            Year:'2017',
            Engine:'2.0',
            Weight:'1408',
            FuelConsumption:'6.3',
            MaximumSpeed:'248',
            Fuel:'Petrol',
            price:'$200'
          },
          two: {
            marka:'Mazda 3 ',
            module:'Hatchback',
            image:'./car/Mazda3Hatchback.png',
            Year:'2011',
            Engine:'2.0',
            Weight:'1243',
            FuelConsumption:'7.6',
            MaximumSpeed:'196',
            Fuel:'Petrol',
            price:'$220'
          },
          three: {
            marka:'Hyundai',
            module:'i30 N',
            image:'./car/Hyundaii30N.png',
            Year:'2017',
            Engine:'2.0',
            Weight:'1950',
            FuelConsumption:'7.1',
            MaximumSpeed:'250',
            Fuel:'Petrol',
            price:'$210'
          },
        },
        Premium: {
          one: {
            marka:'Audi',
            module:'A3 Sportback',
            image:'./car/AudiA3Sportback.png',
            Year:'2016',
            Engine:'2.0',
            Weight:'1740',
            FuelConsumption:'5.7',
            MaximumSpeed:'242',
            Fuel:'Petrol',
            price:'$350'
          },
          two: {
            marka:'Mercedes-Benz',
            module:'A-Class',
            image:'./car/MercedesBenzAClassHatchback.png',
            Year:'2016',
            Engine:'2.0',
            Weight:'1740',
            FuelConsumption:'7.4',
            MaximumSpeed:'200',
            Fuel:'Petrol',
            price:'$370'
          },
          three: {
            marka:'BMW',
            module:'1 Series',
            image:'./car/BMW1Series.png',
            Year:'2016',
            Engine:'2.0',
            Weight:'1375',
            FuelConsumption:'5.7',
            MaximumSpeed:'230',
            Fuel:'Petrol',
            price:'$370'
          },
        },
      },
    },
    {
      type: "SPORTCAR",
      description: {
        eco: "",
        mid: "",
        prem: "",
      },
      name: {
        Econom: {
          one: {
            marka:'Porshe',
            module:'911 GT3 RS',
            image:'./car/Porshe911gt3rs.png',
            Year:'2023',
            Engine:'4.0',
            Weight:'1795',
            FuelConsumption:'13,2',
            MaximumSpeed:'296',
            Fuel:'Petrol',
            price:'$300'
          },
          two: {
            marka:'BMW',
            module:'M5 F90',
            image:'./car/BMWM5F90.png',
            Year:'2022',
            Engine:'4.4',
            Weight:'1825 ',
            FuelConsumption:'11',
            MaximumSpeed:'305',
            Fuel:'Petrol',
            price:'$280'
          },
          three: {
            marka:'Mercedes-Benz',
            module:'AMG GT',
            image:'./car/MercedesBenzAMGGT.png',
            Year:'2020',
            Engine:'4.0',
            Weight:'1723',
            FuelConsumption:'12.7',
            MaximumSpeed:'312',
            Fuel:'Petrol',
            price:'$310'
          },
        },
        Midle: {
          one: {
            marka:'Audi',
            module:'R8 Performance RWD',
            image:'./car/AudiR8.png',
            Year:'2021',
            Engine:'5.2',
            Weight:'1633 ',
            FuelConsumption:'612.9',
            MaximumSpeed:'328',
            Fuel:'Petrol',
            price:'$330'
          },
          two: {
            marka:'Chevrolet',
            module:'Corvette C8',
            image:'./car/CorvetteC8.png',
            Year:'2022',
            Engine:'5.5',
            Weight:'1561',
            FuelConsumption:'15.7',
            MaximumSpeed:'312',
            Fuel:'Petrol',
            price:'$250'
          },
          three: {
            marka:'Dodge',
            module:'Challenger SRT Demon',
            image:'./car/ChallengerSRTDemon.png',
            Year:'2018',
            Engine:'6.2',
            Weight:'1739',
            FuelConsumption:'14.6',
            MaximumSpeed:'330',
            Fuel:'Petrol',
            price:'$280'
          },
        },
        Premium: {
          one: {
            marka:'Nissan',
            module:'GT-R',
            image:'./car/NissanGTR.png',
            Year:'2016',
            Engine:'3.8 ',
            Weight:'1740',
            FuelConsumption:'11.7',
            MaximumSpeed:'315',
            Fuel:'Petrol',
            price:'$260'
          },
          two: {
            marka:'McLaren',
            module:'P1',
            image:'./car/McLarenP1.png',
            Year:'2013',
            Engine:'3.8',
            Weight:'1400',
            FuelConsumption:'8.3',
            MaximumSpeed:'350',
            Fuel:'Petrol',
            price:'$400'
          },
          three: {
            marka:'Lamborghini',
            module:'Huracan',
            image:'./car/LamborghiniHuracan.png',
            Year:'2019',
            Engine:'5.2',
            Weight:'1422',
            FuelConsumption:'13.9',
            MaximumSpeed:'325',
            Fuel:'Petrol',
            price:'$420'
          },
        },
      },
    },
  ];

  const CarData = () => {
    return <></>; 
  };
  
  export { carData, CarData };



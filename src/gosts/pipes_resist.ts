const B1 = {
  "DN 20": {
    calculated: 20.25,
    max: 1.643,
    medium: 1.15,
    min: 0.98
  },
  "DN 25": {
    calculated: 26.0,
    max: 0.4367,
    medium: 0.306,
    min: 0.261
  },
  "DN 32": {
    calculated: 34.75,
    max: 0.09386,
    medium: 0.0656,
    min: 0.059
  },
  "DN 40": {
    calculated: 40.0,
    max: 0.04453,
    medium: 0.0312,
    min: 0.0277
  },
  "DN 50": {
    calculated: 52.0,
    max: 0.01108,
    medium: 0.0078,
    min: 0.00698
  },
  "DN 70": {
    calculated: 67.0,
    max: 0.002893,
    medium: 0.00202,
    min: 0.00187
  },
  "DN 80": {
    calculated: 79.5,
    max: 0.001168,
    medium: 0.00082,
    min: 0.000755
  },
  "DN 100": {
    calculated: 105.0,
    max: 0.0002674,
    medium: 0.000187,
    min: 0.000187
  },
  "DN 125": {
    calculated: 130.0,
    max: 0.00008623,
    medium: 0.0000605,
    min: 0.0000605
  },
  "DN 150": {
    calculated: 155.0,
    max: 0.00003395,
    medium: 0.0000238,
    min: 0.0000238
  },  
};
const B2 = { // ГОСТ 10704 ЭС
  "DN 15" : {
    ON: [18],
    thickness: [2.0],
    Kt: [0.0755]
  },
  "DN 20" : {
    ON: [25],
    thickness: [2.0],
    Kt: [0.75]
  },
  "DN 25" : {
    ON: [32],
    thickness: [2.2],
    Kt: [3.44]
  },
  "DN 32" : {
    ON: [40],
    thickness: [2.2],
    Kt: [13.97]
  },
  "DN 40" : {
    ON: [45],
    thickness: [2.2],
    Kt: [28.7]
  },
  "DN 50" : {
    ON: [57],
    thickness: [2.5],
    Kt: [110]
  },
  "DN 65" : {
    ON: [76],
    thickness: [2.8],
    Kt: [572]
  },
  "DN 80" : {
    ON: [89,],
    thickness: [2.8],
    Kt: [1429]
  },
  "DN 100" : {
    ON: [108, 108, 114, 114],
    thickness: [2.8, 3.0, 2.8, 3.0],
    Kt: [4322, 4231, 5872, 5757]
  },
  "DN 125" : {
    ON: [133, 133, 140],
    thickness: [3.2, 3.5, 3.2],
    Kt: [13530, 13190, 18070]
  },
  "DN 150" : {
    ON: [152, 159, 159],
    thickness: [3.2, 3.2, 4.0],
    Kt: [28690, 36920, 34880]
  },
  "DN 200" : {
    ON: [219],
    thickness: [4.0],
    Kt: [209900]
  },
  "DN 250" : {
    ON: [273],
    thickness: [4.0],
    Kt: [711300]
  },
  "DN 300" : {
    ON: [325],
    thickness: [4.0],
    Kt: [1856000]
  },
  "DN 350" : {
    ON: [377],
    thickness: [5.0],
    Kt: [4062000]
  },
};
const B3 = { // ГОСТ 3262  ВГП
  "DN 15" : {
    ON: [21.3],
    thickness: [2.5],
    Kt: [0.18]
  },
  "DN 20" : {
    ON: [26.8],
    thickness: [2.5],
    Kt: [0.926]
  },
  "DN 25" : {
    ON: [33.5],
    thickness: [2.8],
    Kt: [3.65]
  },
  "DN 32" : {
    ON: [42.3],
    thickness: [2.8],
    Kt: [16.5]
  },
  "DN 40" : {
    ON: [48.0],
    thickness: [3.0],
    Kt: [34.5]
  },
  "DN 50" : {
    ON: [60.0],
    thickness: [3.0],
    Kt: [135]
  },
  "DN 65" : {
    ON: [75.5],
    thickness: [3.2],
    Kt: [517]
  },
  "DN 80" : {
    ON: [88.5],
    thickness: [3.5],
    Kt: [1262]
  },
  "DN 90" : {
    ON: [101.0],
    thickness: [3.5],
    Kt: [2725]
  },
  "DN 100" : {
    ON: [114],
    thickness: [4.0],
    Kt: [5205]
  },
  "DN 125" : {
    ON: [140],
    thickness: [4.0],
    Kt: [16940]
  },
  "DN 150" : {
    ON: [165],
    thickness: [4.0],
    Kt: [43000]
  },
}
export {B1, B2};
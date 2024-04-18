// data: https://ourworldindata.org/co2-emissions#annual-co2-emissions
// map:  https://github.com/StephanWagner/svgMap

new svgMap({
  targetElementID: 'map',
  colorMax: "#bf616a",
  colorMin: "#a3be8c",
  colorNoData: "#88c0d0",
  data: {
    data: {
      emission: {
        name: 'CO2 Emission',
        format: '{0} tons',
        thousandSeparator: ',',
        thresholdMax: 2000000000,
        thresholdMin: 0
      },
    },
    applyData: 'emission',
    values: {
      AF: {emission: 10720332},
      AL: {emission: 5579015},
      DZ: {emission: 171707041},
      AD: {emission: 470495},
      AO: {emission: 38020297},
      AI: {emission: 143293},
      AG: {emission: 492341},
      AR: {emission: 178939546},
      AM: {emission: 6005927},
      AW: {emission: 918546},
      AU: {emission: 411015667},
      AT: {emission: 68495143},
      AZ: {emission: 39820063},
      BS: {emission: 1979149},
      BH: {emission: 34354328},
      BD: {emission: 102161676},
      BB: {emission: 1186602},
      BY: {emission: 62483877},
      BE: {emission: 99708878},
      BZ: {emission: 632797},
      BJ: {emission: 7998145},
      BM: {emission: 631960},
      BT: {emission: 1706825},
      BO: {emission: 22574851},
      BQ: {emission: 334351},
      BA: {emission: 26621092},
      BW: {emission: 6316388},
      BR: {emission: 465715770},
      VG: {emission: 169012},
      BN: {emission: 9088688},
      BG: {emission: 42006473},
      BF: {emission: 4301291},
      BI: {emission: 579786},
      KH: {emission: 16026972},
      CM: {emission: 7592750},
      CA: {emission: 576650511},
      CV: {emission: 633890},
      CF: {emission: 307653},
      TD: {emission: 1030268},
      CL: {emission: 84266622},
      CN: {emission: 10174681100},
      CO: {emission: 102202444},
      KM: {emission: 253114},
      CG: {emission: 3456980},
      CK: {emission: 77460},
      CR: {emission: 8507521},
      HR: {emission: 17882170},
      CU: {emission: 25988450},
      CY: {emission: 7315731},
      CZ: {emission: 101009765},
      CD: {emission: 2282718},
      DK: {emission: 32075494},
      DJ: {emission: 399373},
      DM: {emission: 161664},
      DO: {emission: 27378802},
      EC: {emission: 40540282},
      EG: {emission: 246642918},
      SV: {emission: 6207296},
      GQ: {emission: 5633778},
      ER: {emission: 727233},
      EE: {emission: 13888373},
      SZ: {emission: 973848},
      FO: {emission: 715004},
      FJ: {emission: 2257134},
      FI: {emission: 41652603},
      FR: {emission: 323747139},
      PF: {emission: 831677},
      GA: {emission: 4704935},
      GM: {emission: 585713},
      GE: {emission: 10286677},
      DE: {emission: 701955108},
      GH: {emission: 14959912},
      GR: {emission: 67183971},
      GL: {emission: 518656},
      GD: {emission: 287951},
      GT: {emission: 20513439},
      GN: {emission: 3153404},
      GW: {emission: 320957},
      GY: {emission: 2390398},
      HT: {emission: 3280850},
      HN: {emission: 10928412},
      HK: {emission: 41536352},
      HU: {emission: 49101007},
      IS: {emission: 3321657},
      IN: {emission: 2616448820},
      ID: {emission: 617512648},
      IR: {emission: 779526533},
      IQ: {emission: 221383949},
      IE: {emission: 37117688},
      IT: {emission: 337086213},
      JM: {emission: 8014192},
      JP: {emission: 1106664426},
      JO: {emission: 26071583},
      KZ: {emission: 313797848},
      KE: {emission: 17315266},
      KI: {emission: 73383},
      KW: {emission: 107532047},
      KG: {emission: 11482589},
      LV: {emission: 8262338},
      LB: {emission: 28202071},
      LS: {emission: 2223231},
      LR: {emission: 1321680},
      LY: {emission: 46427779},
      LI: {emission: 145802},
      LT: {emission: 13483413},
      LU: {emission: 9784853},
      MG: {emission: 4014831},
      MW: {emission: 1466344},
      MY: {emission: 250094688},
      MV: {emission: 1667430},
      ML: {emission: 3394412},
      MT: {emission: 1553776},
      MH: {emission: 163074},
      MU: {emission: 4686810},
      MX: {emission: 438497623},
      MD: {emission: 5957810},
      ME: {emission: 2461441},
      MS: {emission: 29393},
      MA: {emission: 71928924},
      MZ: {emission: 8705807},
      MM: {emission: 26231575},
      NR: {emission: 52999},
      NP: {emission: 13913522},
      NL: {emission: 154826594},
      NC: {emission: 8451602},
      NZ: {emission: 36540963},
      NI: {emission: 5548625},
      NE: {emission: 2135276},
      NG: {emission: 140026463},
      NU: {emission: 8154},
      KP: {emission: 38762163},
      NO: {emission: 42440799},
      OM: {emission: 71684606},
      PK: {emission: 248843938},
      PS: {emission: 3303220},
      PA: {emission: 12503103},
      PG: {emission: 7086853},
      PY: {emission: 8272283},
      PE: {emission: 54533175},
      PH: {emission: 144262785},
      PL: {emission: 322626493},
      PT: {emission: 48597835},
      QA: {emission: 109344710},
      RO: {emission: 75084050},
      RU: {emission: 1678366791},
      RW: {emission: 1110913},
      SH: {emission: 11023},
      KN: {emission: 242496},
      LC: {emission: 352722},
      PM: {emission: 77158},
      VC: {emission: 257193},
      WS: {emission: 285379},
      ST: {emission: 129138},
      SA: {emission: 582149599},
      SN: {emission: 9822725},
      RS: {emission: 54666675},
      SC: {emission: 623050},
      SG: {emission: 38944802},
      SX: {emission: 753208},
      SK: {emission: 33314769},
      SI: {emission: 13696428},
      SB: {emission: 317994},
      SO: {emission: 677567},
      ZA: {emission: 478608101},
      KR: {emission: 611263215},
      SS: {emission: 1584884},
      ES: {emission: 252683217},
      LK: {emission: 24841152},
      SD: {emission: 22980726},
      SR: {emission: 2606035},
      SE: {emission: 42766618},
      CH: {emission: 37681506},
      SY: {emission: 26960685},
      TJ: {emission: 8979885},
      TZ: {emission: 11626306},
      TH: {emission: 288279747},
      TL: {emission: 554451},
      TG: {emission: 3261434},
      TO: {emission: 175304},
      TT: {emission: 37863888},
      TN: {emission: 31012921},
      TR: {emission: 405126365},
      TM: {emission: 85646506},
      TC: {emission: 231474},
      TV: {emission: 12231},
      UG: {emission: 5531265},
      UA: {emission: 223229393},
      AE: {emission: 190683060},
      GB: {emission: 369878396},
      US: {emission: 5284696657},
      UY: {emission: 6378115},
      UZ: {emission: 110245989},
      VU: {emission: 154920},
      VE: {emission: 116687785},
      VN: {emission: 247708911},
      YE: {emission: 10255048},
      ZM: {emission: 6720490},
      ZW: {emission: 10374287},
    }
  }
});
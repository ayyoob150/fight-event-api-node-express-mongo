enum WeightClass {
    FLYWEIGHT = "Flyweight",
    BANTAMWEIGHT = "Bantamweight",
    FEATHERWEIGHT = "Featherweight",
    LIGHTWEIGHT = "Lightweight",
    WELTERWEIGHT = "Welterweight",
    MIDDLEWEIGHT = "Middleweight",
    LIGHT_HEAVYWEIGHT = "Light Heavyweight",
    HEAVYWEIGHT = "Heavyweight",
  }
  


  function getWeightClass(weightInKg: number): WeightClass {
    if (weightInKg <= 56.7) {
      return WeightClass.FLYWEIGHT;
    } else if (weightInKg <= 61.2) {
      return WeightClass.BANTAMWEIGHT;
    } else if (weightInKg <= 65.8) {
      return WeightClass.FEATHERWEIGHT;
    } else if (weightInKg <= 70.3) {
      return WeightClass.LIGHTWEIGHT;
    } else if (weightInKg <= 77.1) {
      return WeightClass.WELTERWEIGHT;
    } else if (weightInKg <= 83.9) {
      return WeightClass.MIDDLEWEIGHT;
    } else if (weightInKg <= 93.0) {
      return WeightClass.LIGHT_HEAVYWEIGHT;
    } else {
      return WeightClass.HEAVYWEIGHT;
    }
  }

  export  {getWeightClass, WeightClass};
  
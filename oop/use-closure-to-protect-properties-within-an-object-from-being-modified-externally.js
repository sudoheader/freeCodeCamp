function Bird() {
    let weight = 15;
    
    this.getWeight = function() {
      return weight;
    };
  }
  
  let birdy = new Bird();
  birdy.getWeight();
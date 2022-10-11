const printSquare = (num) => {
    for (let a = 1; a <= num; a++) {
      let spc = ''
      for (let b = 1; b <= num; b++) {
        let str = ''
        if ((a == 1) || (a == num) ) {
          str = '*'
        } else if ((b > 1) && (b < num)) {
          str = ' '
        } else {
          str = '*'
        }
        spc += str
      }
      console.log(spc)
    }
  }
  
  printSquare(4)
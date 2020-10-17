function checkPalindrom(string) {
    if (typeof string !== "string") {
      console.log("Yang anda masukan bukan string");
    } else {
      const reverse = string.toLowerCase().split("").reverse().join("");
      if (reverse === string.toLowerCase()) {
        console.log("Palindrom");
      } else {
        console.log("Bukan Palindrom");
      }
    }
  }
  
  checkPalindrom("Kodok");
  
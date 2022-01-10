class Formatter {
  static capitalize(string){
    let firstLetter = string.slice(0,1).toUpperCase()
    let restOfString = string.slice(1)
    return firstLetter + restOfString

  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g,'')
  }
  static titleize(string){
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let wordArray = string.split(' ')
    
    for (let i = 0; i < wordArray.length; i++) {
      if (i === 0) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1)
      }
      else if (!except.includes(wordArray[i])) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1)
      }

    }

    return wordArray.join(' ')

  }
}
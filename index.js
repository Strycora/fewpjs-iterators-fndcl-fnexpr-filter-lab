function findMatching(drivers, str){
  return drivers.filter( item =>
    item.toLowerCase() === str.toLowerCase()
    )
}

function fuzzyMatch(drivers, str){
  return drivers.filter( item =>
    item.toLowerCase().indexOf(str.toLowerCase()) === 0)
}

function matchName(drivers, str){
  return drivers.filter( record => record.name === str)
}


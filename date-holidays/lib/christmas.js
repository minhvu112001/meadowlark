const christmasCookies = [
    "400 triệu",
    "Jack",
    "Villa",
   ]
   exports.getchristmasFortune= () => {
    const idx =
   Math.floor(Math.random()*christmasCookies.length)
    return christmasCookies[idx]
   }
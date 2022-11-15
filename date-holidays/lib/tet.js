const tetCookies = [
    "Ngã ở đâu gấp đôi ở đó",
    "tài hay xỉu",
    "còn thở còn gỡ",
   ]
   exports.gettetFortune= () => {
    const idx =
   Math.floor(Math.random()*tetCookies.length)
    return tetCookies[idx]
   }
function sockMerchant(n, ar) {
  let socks = {}
  let pairs = 0
  ar.forEach((sockColor) => {
      if (socks[sockColor] !== undefined) socks[sockColor]++
      else socks[sockColor] = 1
      if (socks[sockColor] === 2) {
          socks[sockColor] = 0
          pairs++;
      }
  })
  return pairs
}
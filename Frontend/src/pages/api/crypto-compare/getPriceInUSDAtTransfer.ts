import axios from 'axios'

interface HistoricalPriceProp {
  blockTimestamp: Date | string
  currencySymbol: string
  currency: string
}

const apiKey = process.env.CRYPTO_COMPARE_API_KEY

export const getPriceInUSDAtTimeOfTransfer = async ({blockTimestamp, currencySymbol, currency}: HistoricalPriceProp): Promise<any> => {
  const newTimestamp: Date = new Date(blockTimestamp)
  const utcTimestamp: Date | string = newTimestamp.toUTCString().slice(0, -4)
  const apiTimestamp: number = Date.parse(utcTimestamp) / 1000

  const url: string | undefined = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${currencySymbol}&tsym=${currency}&toTs=${apiTimestamp}&limit=1&api_key=${apiKey}`
  if (!url) {
    throw new Error("no url so price was not found")
  }

  try {
    const response = await axios.get(url)
    return response.data
  } catch (err) {
    console.error('error: ', err)
  }
}

// Api link below works...
// https://min-api.cryptocompare.com/data/v2/histoday?fsym=${currencySymbol}&tsym=${currency}&toTs=${apiTimestamp}&limit=1&api_key=${apiKey}

// old
// https://min-api.cryptocompare.com/data/pricehistorical?fsym=${coin}&tsyms=${currency}&ts=${apiTimestamp}&limit=1&api_key=${apiKey}

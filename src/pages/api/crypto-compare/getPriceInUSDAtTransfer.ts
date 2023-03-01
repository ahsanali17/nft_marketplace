'use client';
import { useEffect } from 'react';
import axios from 'axios';

interface HistoricalPriceProp {
  blockTimestamp: any;
  currencySymbol: string;
  currency: string;
}

const apiKey = process.env.CRYPTO_COMPARE_API_KEY;

export const getPriceInUSDAtTimeOfTransfer = async ({ blockTimestamp, currencySymbol, currency }: HistoricalPriceProp) => {

  const newTimestamp = new Date(blockTimestamp);
  const utcTimestamp = newTimestamp.toUTCString().slice(0, -4);
  const apiTimestamp = Date.parse(utcTimestamp) / 1000;

  const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${currencySymbol}&tsym=${currency}&toTs=${apiTimestamp}&limit=1&api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error('error: ', err);
  }
};

// Api link below works...
// https://min-api.cryptocompare.com/data/v2/histoday?fsym=${currencySymbol}&tsym=${currency}&toTs=${apiTimestamp}&limit=1&api_key=${apiKey}

// old
// https://min-api.cryptocompare.com/data/pricehistorical?fsym=${coin}&tsyms=${currency}&ts=${apiTimestamp}&limit=1&api_key=${apiKey}

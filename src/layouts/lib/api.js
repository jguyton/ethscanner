const config = require("./config");
const ETHSCAN_API_URL = config.ETHSCAN_API_URL;
const ETHSCAN_API_KEY = config.ETHSCAN_API_KEY;

async function getTranactions(address, page, offset, sort) {
  const params = {
    module: "account",
    action: "txlist",
    address,
    startblock: "0",
    endblock: "99999999",
    page,
    offset,
    sort,
    apikey: ETHSCAN_API_KEY
  };

  const eventAPIURL = new URL(ETHSCAN_API_URL)
  eventAPIURL.search = new URLSearchParams(params)

  return fetch(eventAPIURL).then(result => {
    return result.json();
  });
}
async function getTranactionsCount(address) {
  const params = {
    module: "account",
    action: "txlist",
    address,
    apikey: ETHSCAN_API_KEY
  };

  const eventAPIURL = new URL(ETHSCAN_API_URL)
  eventAPIURL.search = new URLSearchParams(params)

  return fetch(eventAPIURL).then(result => {
    return result.json();
  });
}
async function getAccountBalance(address) {
  const params = {
    module: "account",
    action: "balance",
    address,
    apikey: ETHSCAN_API_KEY
  };

  const eventAPIURL = new URL(ETHSCAN_API_URL)
  eventAPIURL.search = new URLSearchParams(params)

  return fetch(eventAPIURL).then(result => {
    return result.json();
  });
}
async function getBlock(blockno) {
  const params = {
    module: "block",
    action: "getblockreward",
    blockno,
    apikey: ETHSCAN_API_KEY
  };

  const eventAPIURL = new URL(ETHSCAN_API_URL)
  eventAPIURL.search = new URLSearchParams(params)

  return fetch(eventAPIURL).then(result => {
    return result.json();
  });
}

const API = {
  getTranactions,
  getTranactionsCount,
  getAccountBalance,
  getBlock
}
export default API

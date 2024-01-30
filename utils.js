const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjUwNjgzMzg5LTFkNDItNDI5YS1iOGFkLTczMjgwZGIxNmVlYyIsIm9yZ0lkIjoiMzc0NTI5IiwidXNlcklkIjoiMzg0ODkwIiwidHlwZUlkIjoiNmE0MGEyNWItNGY5ZC00MzI3LWE3ZTctYjk0YTY1OWQ3ZWZkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDYzODg3ODAsImV4cCI6NDg2MjE0ODc4MH0.5DxGc13fez_pwyWQdyxHwzLAK9l-RFxEOgzGkFMpIL0";
const origin = "https://deep-index.moralis.io";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

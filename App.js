//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Button, Input, Layout, Card, List, message } from "antd";
import { getContractNFTs } from "./utils";
import NftCard from "./components/NftCard";
import ContractTrades from "./components/ContractTrade";
import ContractTrade from "./components/ContractTrade";

const { Header, Content } = Layout;

function App() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

  // get data from input
  const handleSearch = async () => {
    // if the custom input nothing, then quit
    if (searchText === "") {
      return;
    }

    // if has something, set the loading = true
    setLoading(true);

    try {
      const data = await getContractNFTs(searchText);
      setNfts(data.result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
          NFT Browser
        </div>
      </Header>
      <Content
        style={{
          height: "calc(100% - 64px)",
          padding: 20,
          overFlowY: "auto",
        }}
      >
        <Input.Group compact>
          <Input
            style={{ width: 500 }}
            placeholder="Enter a NFT contract address to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>

          <ContractTrade tokenAddress={searchText} />
        </Input.Group>
        <List
          style={{
            marginTop: 20,
            height: "calc(100% - 52px)",
            overFlow: "auto",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={nfts}
          renderItem={(nft) => <NftCard nft={nft} />}
        />
      </Content>
    </Layout>
  );
}

export default App;

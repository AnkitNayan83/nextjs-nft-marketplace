import { useMoralis, useMoralisQuery } from "react-moralis";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import networkMapping from "../constants/networkMapping.json";
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries";
import { useQuery } from "@apollo/client";
import NFTBox from "../components/NFTBox";
import Footer from "../components/Footer";

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();
  const chainString = chainId ? parseInt(chainId).toString() : "31337";
  console.log(chainString);
  const marketplaceAddress = networkMapping["5"].NftMarketplace[0];
  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);

  return (
    <>
      <div className={styles.container}>
        <Featured />
      </div>

      <div className="container p-4">
        <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
        <div className="flex flex-wrap">
          {isWeb3Enabled ? (
            loading || !listedNfts ? (
              <div>Loading...</div>
            ) : (
              listedNfts.activeItems.map((nft) => {
                console.log(nft);
                const { price, nftAddress, tokenId, seller } = nft;
                return (
                  <NFTBox
                    price={price}
                    nftAddress={nftAddress}
                    tokenId={tokenId}
                    marketplaceAddress={marketplaceAddress}
                    seller={seller}
                    key={`${nftAddress}${tokenId}`}
                  />
                );
              })
            )
          ) : (
            <div>Web3 Currently Not Enabled</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

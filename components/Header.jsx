import { ConnectButton } from "web3uikit";
import Link from "next/link";
export default function Header() {
  return (
    <div className="bg-blue-800 sticky top-0 z-50 p-3 flex flex-row justify-between items-center">
      <h1 className="py-4 px-4 font-extrabold text-3xl text-white">
        NFT Marketplace
      </h1>
      <div className="flex flex-row items-center">
        <Link href="/">
          <span className="mr-4 p-6 text-white font-semibold hover:bg-white hover:text-black hover:rounded-md hover:py-3 px-6">
            Home
          </span>
        </Link>
        <Link href="/sell-nft">
          <span className="mr-4 p-6 text-white font-semibold hover:bg-white hover:text-black hover:rounded-md hover:py-3 px-6">
            Sell NFT
          </span>
        </Link>
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
}

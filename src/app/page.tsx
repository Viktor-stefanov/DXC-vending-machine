import VendingMachine from "../components/VendingMachine";
import MediaCard from "../components/MediaCard";

export default function Home() {
  return (
    <main>
      <VendingMachine />
      <br />
      <MediaCard
        heading="DXC Exercise"
        text="A complete vending machine implementation for DXC Technology"
      />
    </main>
  );
}

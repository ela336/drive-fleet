import Image from "next/image";
import Banner from "./components/Banner"
import Staticone from "./components/Staticone";
import Statictwo from "./components/Statictwo";
import AvailableCar from "./components/AvailableCar";

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <AvailableCar></AvailableCar>
      <Statictwo></Statictwo>
      <Staticone></Staticone>
    </div>
  );
}

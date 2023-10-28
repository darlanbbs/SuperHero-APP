import CatalogHeros from "@/components/CatalogHeros/CatalogHeros";
import { MyContextProvider } from "./../context/BattleContext";
import Header from "@/components/Header/Header";
export default function Home() {
  return (
    <MyContextProvider>
      <CatalogHeros />
    </MyContextProvider>
  );
}

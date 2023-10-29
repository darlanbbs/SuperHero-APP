import CatalogHeros from "./../components/CatalogHeros/CatalogHeros";
import { MyContextProvider } from "./../context/BattleContext";
export default function Home() {
  return (
    <MyContextProvider>
      <CatalogHeros />
    </MyContextProvider>
  );
}

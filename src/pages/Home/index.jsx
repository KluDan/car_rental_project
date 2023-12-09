import CarCard from "../../components/CarCard/CarCard";
import CarsCatalog from "../../components/CarsCatalog/CarsCatalog";
import DropDownMakes from "../../components/DropDownMakes/DropDownMakes";
import LoadMoreBtn from "../../components/LoadMoreBtn";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/*  <DropDownMakes /> */}
      <CarsCatalog />
    </div>
  );
};

export default Home;

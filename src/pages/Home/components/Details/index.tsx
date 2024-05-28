import DetailPrimary from "./components/DetailPrimary";
import DetailSecondary from "./components/DetailSecondary";
import DetailTertiary from "./components/DetailTertiary";

const Details = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <DetailPrimary />
      <DetailSecondary />
      <DetailTertiary />
    </div>
  );
};

export default Details;

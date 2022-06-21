import SellerBook from "./SellerBook";
import SellerGenre from "./SellerGenre";
import SellerOrder from "./SellerOrder";

const SellerDashBoard = () => {
  return (
    <>
      <SellerGenre />
      <SellerBook />
      <SellerOrder />
    </>
  );
};

export default SellerDashBoard;

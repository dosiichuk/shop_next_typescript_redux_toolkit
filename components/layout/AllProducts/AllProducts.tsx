import ProductBox from '../../common/ProductBox/ProductBox';

const AllProducts = () => {
  return (
    <div className="col-sm-12 col-md-9 col-lg-8 align-items-start">
      <div className="row gy-3">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </div>
  );
};

export default AllProducts;

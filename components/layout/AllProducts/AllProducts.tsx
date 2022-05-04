import ProductBox from '../../common/ProductBox/ProductBox';

const AllProducts = () => {
  return (
    <div className="col-sm-12 col-md-9 col-lg-8 align-items-start mb-4">
      <div className="row gy-3 gx-3 d-flex align-items-center justify-content-center">
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

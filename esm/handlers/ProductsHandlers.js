import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { burnToast } from '../helpers/index.js';
export function handleProductsData(_x) {
  return _handleProductsData.apply(this, arguments);
}

function _handleProductsData() {
  _handleProductsData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var response, router, setPages, setProducts, setToast, noDataToast, data, error, page, pages, products;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = _ref.response, router = _ref.router, setPages = _ref.setPages, setProducts = _ref.setProducts, setToast = _ref.setToast, noDataToast = _ref.noDataToast;
            data = response.data, error = response.error;

            if (error) {
              router.replace('/');
              burnToast(setToast, error && error.response && error.response.data ? error.response.data : 'Error');
            }

            page = data.page, pages = data.pages, products = data.products;

            if (!data || !products || !page || !pages) {
              router.replace('/');
              burnToast(setToast, noDataToast);
            }

            setPages(pages);
            setProducts(products);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleProductsData.apply(this, arguments);
}

export function handleProductData(_x2) {
  return _handleProductData.apply(this, arguments);
}

function _handleProductData() {
  _handleProductData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(_ref2) {
    var response, router, setTitle, setImage, setProduct, setToast, noDataToast, setListingID, data, error, name, images, listings;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = _ref2.response, router = _ref2.router, setTitle = _ref2.setTitle, setImage = _ref2.setImage, setProduct = _ref2.setProduct, setToast = _ref2.setToast, noDataToast = _ref2.noDataToast, setListingID = _ref2.setListingID;
            data = response.data, error = response.error;

            if (error) {
              router.replace('/');
              burnToast(setToast, error && error.response && error.response.data ? error.response.data : 'Error');
            }

            if (!data) {
              router.replace('/');
              burnToast(setToast, noDataToast);
            }

            name = data.name, images = data.images, listings = data.listings;
            setTitle(name);
            setImage(images[0]);
            setProduct(data);
            setListingID(listings[0]['_id']);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _handleProductData.apply(this, arguments);
}
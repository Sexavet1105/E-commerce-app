import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { calculateBasket, deleteProduct, setDrawer } from './redux/slices/basketSlice';
import "./App.css";

function App() {
  const { Basketproducts, drawer, total } = useSelector((store) => store.basket);
  const products = Basketproducts
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [drawer, dispatch]);

  const handleDeleteProduct = (product) => {
    dispatch(deleteProduct(product));
    handleDrawerClose()
  };

  const handleDrawerClose = () => {
    dispatch(setDrawer());
  };

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className="drawer" onClose={handleDrawerClose} anchor='right' open={drawer}>
          {products && products.map((product) => (
            <div key={product.id}>
              <div className='flex-row' style={{ padding: 20 }}>
                <img style={{ marginRight: 5 }} src={product.image} width={50} height={50} alt={product.title} />
                <p style={{ width: 350, marginRight: 5 }}>{product.title} ({product.count})</p>
                <p style={{ fontWeight: 'bold' }}>{product.price}TL</p>
                <button onClick={() => handleDeleteProduct(product)} className='delete'>Delete</button>
              </div>
            </div>
          ))}
          <div><p>Total: {total.toFixed(2)}</p></div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;

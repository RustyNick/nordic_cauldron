import Footer from './componets/Footer'
import Header from './componets/Header'
import CardItem from './componets/CardItem'
import './index.css'
import { products } from './util/dummy-data'

 function App() {

  return (
    <main>
      <Header/>
      <ul className='product-list'>
      {products.map(item=>{
        return<CardItem key={item.id} product={item}/>
      })}
      </ul>
      <Footer/>
    </main>
  )
}

export default App

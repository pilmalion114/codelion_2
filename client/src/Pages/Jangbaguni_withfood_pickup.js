import React from 'react'
import Cart from '../Components/Cart'
import Previous from '../Components/Previous'

const Jangbaguni_withfood_pickup = () => {
  return (
    <div>
        <div>
            <div className='Upper_banner'>
                <Previous />
                <h1>우리동네 치킨</h1>
                <Cart />
            </div><br />
            <div className='Menuname'>
                <p>후라이드치킨</p>
            </div><br />
            <div className='Select_food'>
                <p><input type="checkbox"></input>뼈</p>
                <p><input type="checkbox"></input>순살(+1000원)</p>
                <br /><br />
            <p>포장</p>
            <h3>총 금액:19,000원</h3>
            </div>
           <a href='/'>장바구니 추가</a>
           &emsp;<a href='/'>즉시 결제</a>

        </div>
    </div>
  )
}

export default Jangbaguni_withfood_pickup
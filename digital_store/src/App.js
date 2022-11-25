import './App.css';
import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function Header(props) {

  const [state_login, set_State_Login] = useState('FALSE');
  let content_header = null;

  if(state_login === 'FALSE') {

    
    content_header = 
    <div>
      <div class='header_button_size' style={{marginLeft:'auto'}} onClick={(event)=>{
        window.location.href='/signup'
      }}>회원가입</div>

      <div class='header_button_size' style={{marginLeft:'auto'}} onClick={(event)=>{
        set_State_Login('TRUE');
        event.preventDefault();
      }}>로그인</div>
    </div>
  } else {
    content_header = 
    <>
      <div class='header_button_size' style={{marginLeft:'auto'}} onClick={(event)=>{
        set_State_Login('FALSE');
        event.preventDefault();
      }}>로그아웃</div>
      <div class='header_button_size' style={{marginLeft:'auto'}} onClick={(event)=>{
        window.location.href='/shoppingcart'
      }}>장바구니</div>
      <div class='header_button_size' style={{marginLeft:'auto'}} onClick={(event)=>{
        window.location.href='/like'
      }}>좋아요</div>
      <div class='header_button_size' style={{marginLeft:'auto'}} onClick={(event)=>{
        window.location.href='/nickname'
      }}>닉네임</div>
    </>
  }


  return <header>
      <div class='header_logo' onClick={(event)=>{
        window.location.href='/main'
      }}>Digital Store</div>

      <div class="search">
        <img class="icon_filter" src="https://cdn-icons-png.flaticon.com/512/4502/4502383.png"/>
        <input class="header_searchbar" type="text" placeholder="검색어 입력"/>
        <img class="icon_search" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
        
      </div>


      <div class='header_button_size' onClick={(event)=>{
        window.location.href='/new'
      }}>New</div>
      <div class='header_button_size' onClick={(event)=>{
        window.location.href='/best'
      }}>Best</div>
      <div class='header_button_size' onClick={(event)=>{
        window.location.href='/sale'
      }}>Sale</div>
      
      {content_header}
  </header>
}

function Item_Thumbnail(props) {


  return <div style={{marginTop:'100px'}} class='item_thumbnail_box'>

      <div class="item_thumbnail_image" style={{cursor:"pointer"}} onClick={()=>{
        window.location.href=props.link
      }}></div>
      
      <div style={{textAlign:'left'}}>
        title
      </div>
      <div style={{textAlign:'left'}}>
        price
      </div>
      <div style={{textAlign:'left', display:'flex', justifyContent:'space-between'}}>
        <span>store_name</span>
        <span>like</span>
      </div>
    </div>
}

function App() {
  return (
    <div>
      <Header></Header>
      <div style={{width:'100%', height:'200px', textAlign:'center'}}>
        <div style={{width:'100%', paddingTop:'150px', textAlign:'center'}}>오늘의 인기 상품</div>
        <div style={{display:'flex', justifyContent:'center'}}>        
          <div style={{width:'1200px', display:'flex', justifyContent:'space-between', textAlign:'center', padding:'0 auto'}}>
            <Item_Thumbnail link="/item/0"></Item_Thumbnail>
            <Item_Thumbnail link="/item/1"></Item_Thumbnail>
            <Item_Thumbnail link="/item/2"></Item_Thumbnail>
            <Item_Thumbnail link="/item/3"></Item_Thumbnail>
            <Item_Thumbnail link="/item/4"></Item_Thumbnail>
          </div>
        </div>
      </div>
      <div style={{height: "400px", marginBottom: "30px", borderBottom:'1px dashed rgba(255, 0, 0, 1)'}}></div>
      

      <div style={{width:'100%', height:'200px', textAlign:'center'}}>
        <div style={{width:'100%', paddingTop:'150px', textAlign:'center'}}>구독 스토어 신작</div>
        <div style={{display:'flex', justifyContent:'center'}}>        
          <div style={{width:'1200px', display:'flex', justifyContent:'space-between', textAlign:'center', padding:'0 auto'}}>
            <Item_Thumbnail link="/item/5"></Item_Thumbnail>
            <Item_Thumbnail link="/item/6"></Item_Thumbnail>
            <Item_Thumbnail link="/item/7"></Item_Thumbnail>
            <Item_Thumbnail link="/item/8"></Item_Thumbnail>
            <Item_Thumbnail link="/item/9"></Item_Thumbnail>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
깃 업로드
팀즈

*/
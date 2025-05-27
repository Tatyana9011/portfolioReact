import { createSlice } from '@reduxjs/toolkit';
import {homeOutline, gameControllerOutline, imagesOutline, barChartOutline, cartOutline, settingsOutline} from 'ionicons/icons';
const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    isOpen: false,
    isActiveLink:false,
    listLink:[
      {dataсolor:"#f57c00", href:"/Home", icon:homeOutline, text:'Home',  isActive:false},
      {dataсolor:"#ffa117", href:"/Game", icon:gameControllerOutline, text:'Game',  isActive:false},
      {dataсolor:"#0fc70f", href:"/Image", icon:imagesOutline,text:'Image' ,  isActive:false },
      {dataсolor:"#2196f3", href:"/Preloader", icon:barChartOutline,  text:'Preloader',  isActive:false},
      {dataсolor:"#b145e9", href:"/Order", icon:cartOutline, text:'Order',  isActive:false},
      {dataсolor:"#e91e63", href:"/Settings", icon:settingsOutline,  text:'Settings',  isActive:false},
    ]
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleActiveLink: (state) => {
      state.isActiveLink = !state.isActiveLink;
    },
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    addActiveLink:(state, action)=>{
      console.log(action.payload);
      state.listLink = state.listLink.map(link => ({
    ...link,
    isActive: link.href === action.payload
  }));
      
    }
  }
});

export const { toggleMenu, openMenu, closeMenu, toggleActiveLink,addActiveLink } = menuSlice.actions;
export default menuSlice.reducer;





























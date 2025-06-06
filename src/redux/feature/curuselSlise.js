import { createSlice } from '@reduxjs/toolkit';



const curuselSlise = createSlice({
  name: 'curusel',
  initialState: { 
    initialCurusel: false, //перша сторінка зі знаками зодіаку
    images : [
  "https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg",
  "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg",
  "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg",
  "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg",
  "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg",
  "https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg",
  "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg",
    ],
    recipes:[
      {
    id: 'post1',
    image: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/defebc72-ea17-41c7-9bb6-70b3974a93b7',
    avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f9d29d0e-f03b-4990-9bc5-ade57a276b41',
    name: 'Homemade Ice Cream',
    author: 'Evelyn Taylor',
  },
  {
    id: 'post2',
    image: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7443d18f-26b6-47eb-bfca-541fb72cee65',
    avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083',
    name: 'Pancake',
    author: 'Ethan Wilson',
  },
  {
    id: 'post3',
    image: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24566dbf-61a2-4bd0-bb29-ef1773364eba',
    avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/01332597-5aeb-483b-b682-9379c6ed8f14',
    name: 'Macaron',
    author: 'Bella Smith',
  },
  {
    id: 'post4',
    image: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a208eb17-a847-4e04-be2c-d7ec2071ae45',
    avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b9f5ef94-c2c9-4792-b7a3-593d393f2c84',
    name: 'Cheesecake',
    author: 'Mia Dixon',
  },
  {
    id: 'post5',
    image: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/208fe8f5-9d7f-4b83-9249-43601bb4c500',
    avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/58f9319c-78cf-444b-ba71-701c506c2dd3',
    name: 'Donuts',
    author: 'Olivia Martinez',
  },
  {
    id: 'post6',
    image: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e4f91d6d-ee11-4ff7-9e6f-0fb3f9a78598',
    avatar: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24ca2eec-a5ba-4c32-907c-ffffca203e1c',
    name: 'Rolo Cheesecake',
    author: 'Benjamin Clark',
  }
    ]

},
  reducers: {
  
  
  },
});

export const {} = curuselSlise.actions;
export default curuselSlise.reducer;
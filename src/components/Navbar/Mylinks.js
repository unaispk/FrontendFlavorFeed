const role = sessionStorage.getItem('role');
console.log(role)

export const links = [
  
  {
    name: "Recipes",
    link: "/main",
    submenu: false,
  },

  {
    name: "Categories",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Botomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottmwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      
    ],
  },
  // {
  //   name: "Add a recipe",
  //   link: "/addrecipe",
  //   submenu: false, 
  // }
  // ,
  // {
  //   name: "Profile",
  //   link: "/user/:UserID",
  //   submenu: false, 
  // },


 
  
];

AFRAME.registerComponent("comics", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
    tick:function(){
      const{state}=this.el.getAttribute("comics")
      if(state==="view"){
        this.hideEl([this.placesContainer])
        this.showView()
      }
    },
    hideEl:function(elList){
      elList.map(el=>{
        el.setAttribute("visible",false)
      })
    },
    showView:function(){
      const{selectedCard}=this.data
      const skyEl=document.querySelector('#main-container')
      skyEl.setAttribute("material",{
        src: `./assets/360_images/${selectedCard}/image-0.jpg`,
        color: "white"
      })
    },
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/spiderman.jpg",
        },
        {
          id: "batman",
          title: "Batman",
          url: "./assets/batman.webp",
        },
  
        {
          id: "ironman",
          title: "Iron Man",
          url: "./assets/ironman.jpg",
        },
        {
          id: "superman",
          title: "Superman",
          url: "./assets/superman.webp",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorder(position, item.id)
        const thumbNail=this.createThumbNail(item)
        borderEl.appendChild(thumbNail)
        // Thumbnail Element
        
        // Title Text Element
        const titleEl=this.createTitleEl(position, item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const enitityEl=document.createElement('a-entity')
      enitityEl.setAttribute("id",id)
      enitityEl.setAttribute("visible",true)
      enitityEl.setAttribute("geometry",{
        primitive:'plane',
        width:20,
        height:28
      })
      enitityEl.setAttribute("position",position)
      enitityEl.setAttribute("material",{
        color:'#0077cc',
        opacity:1,
      })
      return enitityEl
    },
    createThumbNail:function(item){
      const enitityEl=document.createElement('a-entity')
      enitityEl.setAttribute("visible",true)
      enitityEl.setAttribute("geometry",{
        primitive:'plane',
        width:19,
        height:26
      })
      enitityEl.setAttribute("material",{
        src:item.url
      })
      return enitityEl
    },
    createTitleEl:function(position,item){
      const enitityEl=document.createElement('a-entity')
      enitityEl.setAttribute("text",{
        font:'exo2bold',
        align:'center',
        width:70,
        color:'#65100',
        value:item.title
      })
      const elPosition=position
      elPosition.y-20
      enitityEl.setAttribute("position",elPosition)
      enitityEl.setAttribute("visible",true)
      return enitityEl
    },
  });
  
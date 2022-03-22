AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId: { 
            default: "", 
            type: "string" 
        },
    },
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },
    update:function(){
      const fadeBackgroundEl=document.querySelector('#fadeBackground')
      c=fadeBackgroundEl.children
      if(c.length>0){
        var i
        for(i=0;i<=c.length;i++){
          fadeBackgroundEl.removeChild(c[i])
        }
      }
      else{
        this.handleMouseClickEvents()
      }
    },
      handlePlacesListState: function () {
        const id = this.el.getAttribute("id");
        const posterId = ["spiderman", "batman", "ironman", "superman"];
        if (posterId.includes(id)) {
          const placeContainer = document.querySelector("#places-container");
          placeContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#yellow",
            opacity: 1,
          });
        }
      },
      handleMouseEnterEvents: function () {
        //Cursor 'mouseenter' Events
        this.el.addEventListener("mouseenter", () => {
          const id=this.el.getAttribute('id')
          const posterId=["spiderman", "batman", "ironman", "superman"]
          if (posterId.includes(id)) {
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute("cursor-listener", {
              selectedItemId: id,
            });
            this.el.setAttribute("material", {
              color: "#1565c0",
            });
          }
        });
      },
      handleMouseLeaveEvents: function () {
        //Cursor 'mouseleave' Events
        this.el.addEventListener("click", () => {
          const { selectedItemId } = this.data;
          const fadeBackgroundEl=document.querySelector("#fadeBackground")
          const titleEl=document.querySelector('#app-title')
          const cursorEl=document.querySelector('#camera-cursor')
          if (selectedItemId) {
            fadeBackgroundEl.setAttribute("visible",true)
            fadeBackgroundEl.setAttribute("info-banner",{
              itemId:selectedItemId
            })
            titleEl.setAttribute("visible",true)
            cursorEl.setAttribute("position",{x:0,y:0,z:-1})
            cursorEl.setAttribute('geometry',{
              radiusInner:0.03,
              radiusOuter:0.04
            })
          }
            else{
              fadeBackgroundEl.setAttribute("visible",false)
            titleEl.setAttribute("visible",true)
            cursorEl.setAttribute("position",{x:0,y:0,z:-3})
            cursorEl.setAttribute('geometry',{
              radiusInner:0.08,
              radiusOuter:0.12
            })
            }
        });
      },
})
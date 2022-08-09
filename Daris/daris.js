const border = document.getElementById('border')
const  daris = document.getElementById('daris')
const  text = document.getElementById('text')
const  explore = document.getElementById('explore')
const headimg = document.getElementById('head-img')
const product = document.getElementById('product')
const arrow1 = document.getElementById("arrow1")
const arrow2= document.getElementById("arrow2")
const scroll1 = document.getElementById("scroll1")





gsap.registerPlugin(ScrollTrigger);



//Scroll functions




gsap.fromTo(border, {x: -900, }, {x: 0, opacity:1, duration: 1.5, ease:"back.out",})
gsap.fromTo(daris, {opacity: 0, }, { opacity:1, duration: "0.5", delay: "0.5",})
gsap.fromTo(text, {y: 100, opacity: 0, }, { y:0, opacity:1, duration: "0.9", delay: "0.5",})
gsap.fromTo(explore, { opacity: 0, }, { opacity:1, duration: "1", delay: "1",})
gsap.fromTo(headimg, { opacity: 0, }, { opacity:1, duration: "1.5", delay: "1",})



//Products
gsap.fromTo(product, {y: 100, opacity: 0, },
     { y:0, opacity:1, duration: "0.9",
    scrollTrigger: { 
        trigger:`.products`,
        start: "top 90%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
       
    
    },
    })
    
    gsap.fromTo("#product-text", {y: 100, opacity: 0, },
        { y:0, opacity:1, duration: "0.9",
        scrollTrigger: { 
            trigger:`.products`,
            start: "top 90%",
            end: "top 0%",
            toggleActions: "restart reverse restart reverse",
          
        
        },
       })

       gsap.fromTo("#read", {x: 1000, opacity: 0, },
       { x:0, opacity:1, duration: "0.9",  ease: "expo",
       scrollTrigger: { 
        trigger:`.products`,
        start: "top 90%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
       
    
    },
      })

      gsap.fromTo("#shop", {x: -1000, opacity: 0, },
      { x:0, opacity:1, duration: "0.9",  ease: "expo",
      scrollTrigger: { 
        trigger:`.products`,
        start: "top 90%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
       
    
    },
     })

     //Best Image
     gsap.fromTo(".best-img", {x: -1000, opacity: 0, },
      { x:0, opacity:1, duration: "0.9",  ease: "power 4",
      scrollTrigger: { 
        trigger:`.best-img`,
        start: "top 50%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
       
    
    },
     })

     gsap.fromTo("#sales-p", {x: 100, opacity: 0, },
      { x:0, opacity:1, duration: "0.5",  ease: "power 4",
      scrollTrigger: { 
        trigger:`.best-img`,
        start: "top 50%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
      
    
    },
     })

     //Hair section
     
gsap.fromTo("#hair", {y: 100, opacity: 0, },
     { y:0, opacity:1, duration: "0.9", delay: "0.5",
    scrollTrigger: { 
        trigger:`.hair`,
        start: "top 90%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
       
    
    },
    })
    
    gsap.fromTo("#hair-text", {y: 100, opacity: 0, },
        { y:0, opacity:1, duration: "0.9", delay: "0.7",
        scrollTrigger: { 
            trigger:`.hair`,
            start: "top 90%",
            end: "top 0%",
            toggleActions: "restart reverse restart reverse",
          
        
        },
       })

       gsap.fromTo("#hair-button", {x: -1000, opacity: 0, },
       { x:0, opacity:1, duration: "0.9",   ease: "expo",
       scrollTrigger: { 
        trigger:`.hair`,
        start: "top 90%",
        end: "top 0%",
        toggleActions: "restart reverse restart reverse",
       
    
    },
      })
      gsap.fromTo("#hair-img", {x: 1000, opacity: 0, },
       { x:0, opacity:1, duration: "1",   ease: "power 4",
       scrollTrigger: { 
        trigger:`#hair-img`,
        start: "top 90%",
        end: "top 0%",
        
        toggleActions: "restart reverse restart reverse",
       
    
    },
      })

     // Big Skin Area
      gsap.fromTo(".big-img", { y: 1000, opacity: 0,},
      { y: 0, opacity:1,  duration: "1",  ease: "power 4",
      scrollTrigger: { 
       trigger:`.big`,
       start: "top 90%",
       end: "top 0%",
       toggleActions: "restart none none reverse",
      
   
   },
     })
     gsap.fromTo(".skin", { x: -1000, opacity: 0.5, scale:1.8, },
     { x: 0, opacity:1, scale:1, duration: "1",  ease: "power 1",
     scrollTrigger: { 
      trigger:`.skin`,
      start: "top 90%",
      end: "top 0%",
      toggleActions: "restart reverse restart reverse",
     
  
  },
    })
    gsap.fromTo(".care", { x: 1000, opacity: 0.5, scale:1.8, },
    { x: 0, opacity:1, scale:1, duration: "1", ease: "power 1",
    scrollTrigger: { 
     trigger:`.care`,
     start: "top 90%",
     end: "top 0%",
     toggleActions: "restart reverse restart reverse",
    
 
 },
   })

   //Big box text
   gsap.fromTo("#skin", {y: 100, opacity: 0, },
    { y:0, opacity:1, duration: "0.9",
   scrollTrigger: { 
       trigger:`.box`,
       start: "top 90%",
       end: "top 0%",
       toggleActions: "restart reverse restart reverse",
      
   
   },
   })
   
   gsap.fromTo("#skin-text", {y: 100, opacity: 0, },
       { y:0, opacity:1, duration: "0.9", 
       scrollTrigger: { 
           trigger:`#skin-text`,
           start: "top 90%",
           end: "top 0%",
           toggleActions: "restart reverse restart reverse",
         
       
       },
      })

      gsap.fromTo("#skin-button", {x: 1000, opacity: 0, },
      { x:0, opacity:1, duration: "0.9",  ease: "expo",
      scrollTrigger: { 
       trigger:`#skin-button`,
       start: "top 90%",
       end: "top 0%",
       toggleActions: "restart reverse restart reverse",
      
   
   },
     })


    const img1= document.getElementById("img1")
   const img2= document.getElementById("img2")
   const img3= document.getElementById("img3")
    let images = document.getElementById("slide-img")

    
     //About sliders
     let i = 0;
     let img = [];
     let time = 5000;

     img[0] = `images/slider1.jpg`;
     img[1] = `images/slider3.jpg`;
     img[2] = `images/slider2.jpg`;

 
    images.innerHTML = `<img id=img1 style="width: 950px; height:550px; border-radius:30px;" src="images/slider1.jpg" alt="">`


   const slideImages=()=>{
    images.innerHTML = `<img id=img1 style="width: 950px; height:550px; border-radius:30px;" src="${img[i]}" alt="">`
            gsap.fromTo(images, { y: -500,opacity: 0.5, }, {y: 0, opacity:1, duration: 1, ease: "power 1" })
   }
   const slideImages2=()=>{
    images.innerHTML = `<img id=img1 style="width: 950px; height:550px; border-radius:30px;" src="${img[i]}" alt="">`
            gsap.fromTo(images, { x: -500,opacity: 0.5, }, {x: 0, opacity:1, duration: 1, })
   }
   const slideImages3=()=>{
    images.innerHTML = `<img id=img1 style="width: 950px; height:550px; border-radius:30px;" src="${img[i]}" alt="">`
            gsap.fromTo(images, { x: 500,opacity: 0.5, }, {x: 0, opacity:1, duration: 1, })
   }

    const slider = ()=>{
          img[i]
         
        arrow2.onclick = ()=>{
             if(i < img.length - 1){
             i++
            }
            else{
                i=0
            }
            console.log(img[i])
          slideImages2()

        }
          
        arrow1.onclick = ()=>{
            if(i < img.length -1){
            i++
            console.log(i)
           }else{
            i = 0
           }
           
           console.log(img[i])
         slideImages3()

       }
    }
    slider()

    const slide = () =>{
        
            img[i];
            
            if(i < img.length - 1){
              i++
              
            }else{
                i = 0
            }
    
    
             setTimeout("slide()", time)
             slideImages()
             console.log(img[i])
         }
    
         window.onload = slide();



         ///Testimonials
         gsap.fromTo("#about-head", {y: 100, opacity: 0, },
            { y:0, opacity:1, duration: "0.5", 
           scrollTrigger: { 
               trigger:`.about`,
               start: "top 90%",
               end: "top 0%",
               toggleActions: "restart reverse restart reverse",
              
           
           },
           })
           gsap.fromTo(arrow1, {x: 100, opacity: 0, },
           { x:0, opacity:1, duration: "2", delay: "0.5", ease: "bounce.out",
          scrollTrigger: { 
              trigger: arrow1,
              start: "top 90%",
              end: "top 0%",
              toggleActions: "restart reverse restart reverse",
             
          
          },
          })
          gsap.fromTo(arrow2, {x: -100, opacity: 0, },
            { x:0, opacity:1, duration: "2", delay: "0.5", ease: "bounce.out",
           scrollTrigger: { 
               trigger: arrow1,
               start: "top 90%",
               end: "top 0%",
               toggleActions: "restart reverse restart reverse",
              
           
           },
           })

  
   


     
   
   

     


//   gsap.to("nav", {
//     scrollTrigger:{
//         trigger:"body",
//         scrub: 1,
//     pin:"nav",
//     pinSpacing:false,
   
// }
  
//   })

//   ScrollTrigger.create({
//     start: "top 6%",
//     trigger: ".navshow",
//      toggleClass: {targets:"nav", className: "nav-scroll"},
//   })
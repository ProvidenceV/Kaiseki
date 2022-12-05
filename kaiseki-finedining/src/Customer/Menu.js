import React from 'react'

export default function Menu(){
//get all images
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

    return(
        <>
        <div className="menu">
          <div className="menu-sections">
          <hr className="break-view" />
            <div className="menu-section-drinks">
            <h1 className="menu-section-drinks-header">Drinks</h1>
                  <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="drink1" src={images['drink1.jpg']}/><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><img className="menu-images" alt="drink2" src={images['drink2.jpg']}/><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
                  <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="drink3" src={images['drink3.jpg']}/><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
            </div>
            <hr className="break-view" />
            <div className="menu-section-starters">
              <h1 className="menu-section-starters-header">starters</h1>
              <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="starter1" src={images['starter1.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="starter2" src={images['starter2.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
                  <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="starter3" src={images['starter3.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><img className="menu-images" alt="starter4" src={images['starter4.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
            </div>
            <hr className="break-view" />
            <div className="menu-section-main">
              <h1 className="menu-section-main-header">Main</h1>
              <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="food1" src={images['food1.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><img className="menu-images" alt="food2" src={images['food2.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
                  <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="food3" src={images['food3.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="food4" src={images['food4.jpg']} /><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
                  <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="food5" src={images['food5.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="food6" src={images['food6.jpg']} /><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
                  <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="food7" src={images['food7.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
            </div>
            <hr className="break-view" />
            <div className="menu-section-desserts">
              <h1 className="menu-section-desserts-header">Dessert</h1>
              <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="dessert1" src={images['dessert1.jpg']} /><p className="menu-card-description">stuff here</p><button>Add to order</button></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="dessert2" src={images['dessert2.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="dessert3" src={images['dessert3.jpg']} /><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
                  <div className="menu-row">
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="dessert4" src={images['dessert4.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><img className="menu-images" alt="dessert5" src={images['dessert5.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                       <div className="menu-card"><img className="menu-images" alt="dessert6" src={images['dessert6.jpg']} /><p className="menu-card-description">stuff here</p></div>
                    </div>
                    <div className="menu-column">
                      <div className="menu-card"><p className="menu-card-description">stuff here</p></div>
                   </div>
                  </div>
            </div>
          </div>
        </div>
        </>
    )
}


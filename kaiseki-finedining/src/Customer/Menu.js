export default function Menu(){
    return(
        <>
        <div className="menu">
          <div className="menu-sections">
          <hr className="break-view" />
            <div className="menu-section-drinks">
                  <h1>Drinks</h1>
                  <div class="menu-row">
                    <div class="menu-column">
                      <div class="menu-card"><p>stuff here</p></div>
                    </div>
                    <div class="menu-column">
                      <div class="menu-card"><p>stuff here</p></div>
                    </div>
                    <div class="menu-column">
                       <div class="menu-card"><p>stuff here</p></div>
                    </div>
                    <div class="menu-column">
                      <div class="menu-card"><p>stuff here</p></div>
                   </div>
                  </div>
            </div>
            <hr className="break-view" />
            <div className="menu-section-starters">
              <h1>starters</h1>
            </div>
            <hr className="break-view" />
            <div className="menu-section-main">
              <h1>Main</h1>
            </div>
            <hr className="break-view" />
            <div className="menu-section-deserts">
              <h1>Dessert</h1>
            </div>
          </div>
        </div>
        </>
    )
}


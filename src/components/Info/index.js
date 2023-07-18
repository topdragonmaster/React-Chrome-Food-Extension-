import React from "react"
// CSS Style
import './index.css'

export const Info = ({ protein, produce, spice, cookingOil, volumn, serves, authenticity, stock }) => {
  return (
    <div className="panel-info">
      <div>
        <div>
          <div className="info-label">Protein</div>
          <div id="protein">{protein}</div>
        </div>
        <div>
          <div className="info-label">Produce</div>
          <div id="produce">{produce}</div>
        </div>
      </div>
      <div>
        <div>
          <div className="info-label">Spices</div>
          <div id="spice">{spice}</div>
        </div>
        <div>
          <div className="info-label">Cooking Oil</div>
          <div id="cookingOil">{cookingOil}</div>
        </div>
      </div>
      <div>
        <div>
          <div className="info-label">Volumn/Weight</div>
          <div id="volumn">{volumn}g</div>
        </div>
        <div>
          <div className="info-label">Serves</div>
          <div id="serves">{serves}</div>
        </div>
      </div>
      <div>
        <div>
          <div className="info-label">Authenticity</div>
          <div id="authenticity">{authenticity}</div>
        </div>
        <div>
          <div className="info-label">Stock</div>
          <div id="stock">{stock}</div>
        </div>
      </div>
    </div>
  )
}
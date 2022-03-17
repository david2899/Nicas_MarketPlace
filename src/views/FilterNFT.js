import {useState} from 'react'
import "../styles/FilterNFT.css"

export const FilterNFT = () => {
 const [search, setSearch] = useState();
 console.log("search",search);


    return (
        <section id="filter" className="section-filter">
            <div className="container-styky">
                <div className="interior">
                <div className="containerSearchCoins">
      <i className="iconSearch fa-solid fa-magnifying-glass"></i>
        <input 
        id="inputID"
          type="text"
          placeholder="Search"
          className="form-control bg-dark text-light border-0 mt-4 text-center searchCoins"
          onChange={ ({ target }) => setSearch(target.value)}
         
        />
        </div>
                </div>
                <h4 className="filter">Filter</h4>
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                        <label className="form-check-label categoryColor" htmlFor="exampleRadios1">
                            All Categories
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option1" defaultChecked />
                        <label className="form-check-label categoryColor" htmlFor="exampleRadios2">
                            Artist
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option2" />
                        <label className="form-check-label categoryColor" htmlFor="exampleRadios3">
                            Legendary
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" defaultValue="option2" />
                        <label className="form-check-label categoryColor" htmlFor="exampleRadios4">
                            Rare
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" defaultValue="option2" />
                        <label className="form-check-label categoryColor" htmlFor="exampleRadios5">
                            Comun
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}

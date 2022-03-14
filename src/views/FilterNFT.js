import React from 'react'
import "../styles/FilterNFT.css"

export const FilterNFT = () => {
    return (
        <section id="filter" className="section-filter">
            <div className="container-styky">
                <div className="interior">
                    <input type="text" className="form-control" placeholder="Search" />
                    <span className="ml-2 btn">
                        <i className="fas text-secondary  fa-lg fa-magnifying-glass"></i>
                    </span>
                </div>
                <h4 className="">Filter</h4>
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            All Categories
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Artist
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Legendary
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Rare
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Comun
                        </label>
                    </div>
                </div>
            </div>
        </section>
    )
}

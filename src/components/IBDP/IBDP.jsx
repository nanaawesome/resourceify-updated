import { React, useEffect, useState } from "react";
import Back from "../common/back/Back" ;
import searchIcon from "../../search.svg";
import "../../App.css";
import { client, urlFor } from "../../client";
import { AiFillStar } from 'react-icons/ai'

const IBDP = () => {
  const [allResources, setAllResources] = useState([]);
  // set search query to empty string
  const [q, setQ] = useState("");
  const [searchParam] = useState(["name", "type"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
  const query = '*[_type == "resource" && syllabus == "IBDP"]';

    client.fetch(query).then((data) => setAllResources(data))
  }, []);

    function search(allResources) {
       return allResources.filter((resource) => {
    /*
    // in here we check if our region is equal to our c state
    // if it's equal to then only return the items that match
    // if not return All the resources
    */
       if (resource.type === filterParam) {
           return searchParam.some((newResource) => {
             return (
               resource[newResource]
                   .toString()
                   .toLowerCase()
                   .indexOf(q.toLowerCase()) > -1
                        );
                    });
                } else if (filterParam == "All") {
                    return searchParam.some((newResource) => {
                        return (
                            resource[newResource]
                                .toString()
                                .toLowerCase()
                                .indexOf(q.toLowerCase()) > -1
                        );
                    });
                }
            });
        }
  
  return (
    
    <>
        
        <Back title="IB"/>

        <div className="search">
        <input type="search" name="search-form" id="search-form" placeholder="Search for ..." value={q} onChange={(e) => setQ(e.target.value)}/>

        <img 
        src={searchIcon} 
        alt="search"/>
        </div>

        <div className="filter-resource">
          <h3>Filter Resources</h3>
          <button className="google-drive"><a href="https://drive.google.com/drive/folders/1sgmf00lS4Agesyd0imsoxFu5UuLLOjCO?usp=sharing" target="_blank" rel="noreferrer">Google Drive Resources</a></button>
              <select
        /*
        // here we create a basic select input
        // we set the value to the selected value
        // and update the setFilterParam() state every time onChange is called
        */
          onChange={(e) => {
          setFilterParam(e.target.value);
          }}
          className="custom-select"
          aria-label="Filter">
            <option value="All">All</option>
            <option value="Past Papers">Past Papers</option>
            <option value="Syllabus & Revision Guide">Syllabus & Revision Guide</option>
            <option value="Textbooks & Revision Notes">Textbooks & Revision Notes</option>
            <option value="Youtube Channel">Youtube Channel</option>
            <option value="IGCSE Forums">IB Forums</option>
            </select>
            <span className="focus"></span>
        </div>
        

      <div className="wrapper">
          {search(allResources).map((resource) => 
              <div className="card">
            <a href={resource.link} target="_blank" rel="noreferrer">
            <div>
                <p><AiFillStar /></p>
            </div>

            <div>
                <img src={urlFor(resource.image && resource.image[0])} alt={resource.name}/>
            </div>
            <div>
                <span>{resource.type}</span>
                <h3>{resource.name}</h3>
            </div>
            </a>
        </div>
         )}
      </div>
    </>

  )
  
}


export default IBDP
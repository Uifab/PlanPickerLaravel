import React, { Component, useState, useEffect  }  from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

function PlanListPage(){

	let [planList, setPlanList] = useState([]);
	
	function getData(){

		axios( "http://127.0.0.1:8000/api/plans")
			.then((json) => {
				setPlanList ( json.data );
			});
	}

	useEffect(() => {
        getData()
    }, [])


	if( !planList ){
		return (
		  <div>Cargando...</div>
		);
	  }

    return (
        <div>
            Plan List

			<table className='table table-striped w-100 align-middle'>
				<tbody>
					{ planList.map((element, i) => {     

						return (
							<tr key={element.id}>
								<td>{element.name}</td>
								<td>{element.price}€</td>
								<td className='text-end'>
									<Link to={'view/'+element.id } className="btn btn-primary me-3" > View</Link>
									<Link to={'edit/'+element.id } className="btn btn-secondary me-3" > Edit</Link>
									
								</td>
							</tr>
						)
					})}

					<tr>
						<td colSpan="3">
							<a className='btn btn-success w-100'>
								Create New Plan
							</a>
						</td>
					</tr>
				</tbody>
			</table>
        </div>
    );


}

export default PlanListPage;
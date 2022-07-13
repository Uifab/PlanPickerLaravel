import React, { Component, useState, useEffect  }  from 'react';
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import BackButton from '../../components/backButtonComponent';

function AddEditPlansPage(){

    let { id } = useParams();
    let [plan, setPlan] = useState([]);
	
	function getData(){

		axios( "http://127.0.0.1:8000/api/plans/" + id )
			.then((json) => {
				setPlan ( json.data );
			});
	}

	useEffect(() => {
        getData()
      }, [])

	if( !plan ){
	  return (
		<div>Cargando...</div>
	  );
	}

    return (
		<div>
			
			<table className="w-50 m-auto table table-striped">
				<tbody>
					<tr>
						<td>Name</td>
						<td>{ plan.name }</td>
					</tr>
				
					<tr>
						<td>Price</td>
						<td>{ plan.price }€</td>
					</tr>
				</tbody>
			
			</table>

            <BackButton/>

		</div>
	)
}

export default AddEditPlansPage;
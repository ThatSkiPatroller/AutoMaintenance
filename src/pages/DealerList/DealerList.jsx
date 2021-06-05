import React from "react";
import Moment from "moment";
import "./style.css";

function DealerList(props) {
    var data = props.dealerList;
  return (
    <table>
      <thead>
        <tr>
          <th>Photo</th>
          <th >First Name</th>
          <th onClick={e => props.onSort}>Last Name</th>
          <th onClick={e => props.sortBy(e, 'phone')}> Phone
          <span class={props.phoneSort=== 'ascending' ? 'headerSortDown' : 'headerSortUp'}>  </span></th>
          <th onClick={e => props.sortBy(e, 'email')} >Email
          <span class={props.emailSort=== 'ascending' ? 'headerSortDown' : 'headerSortUp'}>  
          </span>
          </th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {data.map(employee => (
          <tr key={employee.id.value == null ? Math.random() : employee.id.value}>
            <td> 
            <img src={employee.picture.medium} alt= 'Thumbimage'/> </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{Moment(employee.dob.date).format('MM/DD/YYYY')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default DealerList;
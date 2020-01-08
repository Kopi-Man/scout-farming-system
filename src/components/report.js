import React,{Component} from 'react';
import * as navbar from '../CSS/Nav.module.css';
import {Link} from 'react-router-dom';


class Report extends Component{
   
   

     render(){
      
         return(<div>
           <h3 style={{color:'#d9d9d9'}}>Day-01-Activities</h3>

<table style={Table}>
  <tr style={Tr}>
    <th style={Th}>Time</th>
    <th  style={Th}>Long Term</th>
    <th  style={Th}>Short Term</th>
    <th  style={Th}>Live Stock</th>
    <th  style={Th}>Poultry</th>
  </tr>
  <tr style={Tr} >
    <td style={Td}>8.00AM-9.00AM</td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
</tr >

  <tr style={Tr}>
    <td style={Td}>8.00AM-9.00AM</td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    
  </tr>
  <tr style={Tr}>
    <td style={Td}>9.00AM-10.00AM</td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    
  </tr>
  <tr style={Tr}>
<td style={Td}>10.00AM-11.00AM</td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    
 </tr>

  <tr style={Tr}>
    <td style={Td}>11.00AM-12.00AM</td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    
    
  </tr>
  <tr style={Tr}>
    <td style={Td}>12.00AM-1.00AM </td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
  </tr>

  <tr style={Tr}>
    <td style={Td}>1.00AM-2.00AM </td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
  </tr>
  <tr style={Tr}>
    <td style={Td}>2.00AM-3.00AM </td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
  </tr>

  <tr style={Tr}>
    <td style={Td}>3.00AM-4.00AM </td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
  </tr>

  <tr style={Tr}>
    <td style={Td}>4.00AM-5.00AM </td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
  </tr>

  <tr style={Tr}>
    <td style={Td}>5.00AM-6.00AM </td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
    <td style={Td}></td>
  </tr> 
</table>

           </div>);
     }
}
const pstyle = {
  fontSize: '15px',
  textAlign: 'center',
  color:'white'
};

const Table = {
fontFamily: 'arial, sans-serif',
borderCollapse: 'collapse',
width:'100%'
};

const Td={
   border: '1px solid black',
textAlign: 'left',
padding: '12px 2px ',
color:'brown',
fontWeight:'700'
   };

const Th={
border: '1px solid black',
textAlign:'left',
padding:'8px',
backgroundColor:'#00ccff'
};


const Tr={
 
backgroundColor: '#dddddd'
};

export default Report;
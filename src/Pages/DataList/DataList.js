import React, { useState } from 'react';

function DataList() {
  return (
    <div>
        <h2>Data List</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>DoB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nguyễn Văn A</td>
                    <td>nguyenvana@example.com</td>
                    <td>1234567890</td>
                </tr>
                <tr>
                    <td>Trần Thị B</td>
                    <td>tranthib@example.com</td>
                    <td>0987654321</td>
                </tr>
            </tbody>
        </table>
        <button>Export</button>
        <br/>
        <a href="/">Form</a>
    </div>
  );
}

export default DataList;

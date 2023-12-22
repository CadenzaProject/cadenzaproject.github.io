import BootstrapTable from 'react-bootstrap-table-next';

import Chart from "chart.js/auto";

import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend  } from "chart.js";

import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from 'react';


  
export function makeColumns(format) {
    const LinkFormatter = (cell, row, rowIndex, extraData) => {
        return(row.paper ? <a href={row.paper}>Link</a>: null)
    }
    
    for (const row of format) {
        if (row.type === "Link") {
            row.formatter = LinkFormatter
        }
    }
    
    return format
}

export default function ResultsDisplay({ all_data }) {
    
    const data = all_data["data"]
    const [barData, setBarData] = useState({
        labels: data.map((row) => row.id),
        datasets: [
            {
                label: "",
                data: data.map((row) => row[all_data.defaultSort.field]),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                borderColor: "BLUE",
                yAxisID: 'y',
            }
        ],
    });
      

    const [sortState, setSortState] = useState({
        field: all_data.defaultSort.field,
        direction: all_data.defaultSort.direction,
    });

    
    const options = {
        responsive: true,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        scales: {
          y: {
               type: 'linear',
               min:  (all_data.format.find(obj => obj.dataField === sortState.field) || { min: 0 }).min,
               position: 'left',
               title: {
                display: true,
                text: (all_data.format.find(obj => obj.dataField === sortState.field) || { text: 0 }).text,
                font: {
                  size: 18,
                }},  
          }
        }
    };
    
    const onTableChange = (type, newState) => {
        console.log(type);
        console.log(newState);
        const sortField = newState.sortField;
        console.log(sortField);
        if (newState.sortOrder === 'asc') {
            newState.data.sort((a, b) => {
                const fieldA = a[sortField];
                const fieldB = b[sortField];
    
                if (fieldA === null && fieldB === null) {
                    return 0; // Treat both null values as equal
                } else if (fieldA === null) {
                    return 1; // Move null to the end
                } else if (fieldB === null) {
                    return -1; // Move null to the end
                } else if (typeof fieldA === 'number' && typeof fieldB === 'number') {
                    return fieldA - fieldB;
                } else {
                    return fieldA.toString().localeCompare(fieldB.toString());
                }
            });
        } else {
            newState.data.sort((a, b) => {
                const fieldA = a[sortField];
                const fieldB = b[sortField];
    
                if (fieldA === null && fieldB === null) {
                    return 0; // Treat both null values as equal
                } else if (fieldA === null) {
                    return -1; // Move null to the beginning
                } else if (fieldB === null) {
                    return 1; // Move null to the beginning
                } else if (typeof fieldA === 'number' && typeof fieldB === 'number') {
                    return fieldB - fieldA;
                } else {
                    return fieldB.toString().localeCompare(fieldA.toString());
                }
            });
        }
        // Update the bar_data object using setBarData
        setBarData((prevData) => ({
            ...prevData,
            labels: newState.data.map((row) => row.id),
            datasets: [
                {
                    ...prevData.datasets[0],
                    data: newState.data.map((row) => row[newState.sortField]),
                    label: all_data.format.find(obj => obj.dataField === newState.sortField).text,
                }
            ],
        }));
        setSortState((prevSortState) => ({
            ...prevSortState,
            field: newState.sortField,
            direction: newState.sortOrder,
        }));
    }

    const remote= {
        filter: false,
        pagination: false,
        sort: true,
        cellEdit: false
    }

    const styles = {
        chartAndTableContainer: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center', // Optional, for centering text within elements
        }
      };
      
    const tableColumns = makeColumns(all_data.format);


    useEffect(() => {
        // Trigger the onTableChange event with initial parameters
        const initialEventType = 'sort'; 
        const initialEventNewState = {
          sortField: sortState.field, 
          sortOrder: sortState.direction,
          data: all_data.data, 
        };
    
        onTableChange(initialEventType, initialEventNewState);
      }, []);
    

    return (
        <div style={styles.chartAndTableContainer}>
         
            <Bar data={barData} options={options} />

            <p style={{ paddingTop: 40 }} />
            
            <BootstrapTable bootstrap4 keyField='id' remote={remote} data={data} columns={tableColumns} onTableChange={onTableChange} />
        </div>
    );
}
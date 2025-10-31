export default class DataTable {
    constructor(data,id) {
        this.data = data;
        this.table = document.getElementById(id);
    }

    buildRows(){
        const tbody = this.table.getElementsByTagName('tbody')[0];
        
        if (this.data.length === 0) return;
        
        const columns = Object.keys(this.data[0]);
        
        this.data.forEach(rowData => {
            const row = document.createElement('tr');
            
            columns.forEach(column => {
                const td = document.createElement('td');
                td.textContent = rowData[column] || '';
                row.appendChild(td);
            });
            
            tbody.appendChild(row);
        });
    }

    buildHeader(){
        const head = this.table.getElementsByTagName('thead')[0];
        
        // Get column names from the first object's properties
        if (this.data.length === 0) return;
        
        const columns = Object.keys(this.data[0]);
        
        // Create header row
        const headerRow = document.createElement('tr');
        
        columns.forEach(column => {
            const th = document.createElement('th');
            th.textContent = column;
            headerRow.appendChild(th);
        });
        
        head.appendChild(headerRow);
    }

    render() {
        this.buildHeader();
        this.buildRows();
    }
}

/**
 * 
 * <table>
 *  <thead>
 *    <tr>
 *      <th></th> 
 *    </tr>
 *  </thead>
 *  <tbody>
*      <tr>
*       <td></td>
*      </tr>
 *  </tbody>
 * </table>
 */
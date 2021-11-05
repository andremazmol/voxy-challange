import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UserTableItem>;
  dataSource = new MatTableDataSource(Users)

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  
  displayedColumns = ['email', 'firstName', 'lastName', 'primaryGroup', 'phoneNumber', 'hoursStudied'];



  ngAfterViewInit(): void {
    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  doFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}

export interface UserTableItem {
  email: string;
  firstName: string;
  lastName: string;
  primaryGroup: string;
  phoneNumber: string;
  hoursStudied: number;
}


const Users: UserTableItem[] = [
  {
    email: 'wallis.martel@voxy.com',
    firstName: "Wallis",
    lastName: "Martel",
    primaryGroup: "B",
    phoneNumber: "a",
    hoursStudied: 1000

  },
  {
    email: 'maximilian.merril@voxy.com',
    firstName: "Maximilian",
    lastName: "Merril",
    primaryGroup: "d",
    phoneNumber: "b",
    hoursStudied: 2000
  },
  {
    email: 'derick.bannister@voxy.com',
    firstName: "Derick",
    lastName: "Bannister",
    primaryGroup: "d",
    phoneNumber: "b",
    hoursStudied: 2000
  },
  {
    email: 'albin.sangster@voxy.com',
    firstName: "Albin",
    lastName: "Sangster",
    primaryGroup: "d",
    phoneNumber: "b",
    hoursStudied: 2000
  },
  {
    email: 'catherina.winton@voxy.com',
    firstName: "Catherina",
    lastName: "Winton",
    primaryGroup: "d",
    phoneNumber: "b",
    hoursStudied: 2000
  },
  {
    email: 'catherina.winton@voxy.com',
    firstName: "Catherina",
    lastName: "Winton",
    primaryGroup: "d",
    phoneNumber: "b",
    hoursStudied: 2000
  },
]

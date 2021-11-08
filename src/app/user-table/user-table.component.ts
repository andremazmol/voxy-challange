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

  /** Columns displayed in the table */
  
  displayedColumns = ['email', 'firstName', 'lastName', 'primaryGroup', 'phoneNumber', 'hoursStudied'];


  
  /** Set sort and paginator */
  ngAfterViewInit(): void {
    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  /** Filter data in table when user type into search box */
  doFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

}

/* -------------------------------------------------------------------------- */
/*                                 Mocked Data                                */
/* -------------------------------------------------------------------------- */

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
    primaryGroup: "Student",
    phoneNumber: "+1 582-200-8716",
    hoursStudied: 743
  },
  {
    email: 'maximilian.merril@voxy.com',
    firstName: "Maximilian",
    lastName: "Merril",
    primaryGroup: "Student",
    phoneNumber: "+1 207-343-8158",
    hoursStudied: 181
  },
  {
    email: 'derick.bannister@voxy.com',
    firstName: "Derick",
    lastName: "Bannister",
    primaryGroup: "Student",
    phoneNumber: "+1 248-241-4222",
    hoursStudied: 171
  },
  {
    email: 'albin.sangster@voxy.com',
    firstName: "Albin",
    lastName: "Sangster",
    primaryGroup: "Student",
    phoneNumber: "+1 410-866-1037",
    hoursStudied: 140
  },
  {
    email: 'catherina.winton@voxy.com',
    firstName: "Catherina",
    lastName: "Winton",
    primaryGroup: "Premium Student",
    phoneNumber: "+61 469 919 737",
    hoursStudied: 1689
  },
  {
    email: 'harvie.christison@voxy.com',
    firstName: "Harvie",
    lastName: "Christison",
    primaryGroup: "Student",
    phoneNumber: "+61 440 770 335",
    hoursStudied: 408
  },
  {
    email: 'frances.hardwick@voxy.com',
    firstName: "Frances",
    lastName: "Hardwick",
    primaryGroup: "Premium Student",
    phoneNumber: "+1 228-452-1715",
    hoursStudied: 258
  },
  {
    email: 'lark.pickering@voxy.com',
    firstName: "Lark",
    lastName: "Pickering",
    primaryGroup: "Trial Student",
    phoneNumber: "+1 502-258-4552",
    hoursStudied: 14
  },
  {
    email: 'trenton.goode@voxy.com',
    firstName: "Trenton",
    lastName: "Goode",
    primaryGroup: "Student",
    phoneNumber: "+1 205-948-6439",
    hoursStudied: 918
  },
  {
    email: 'tameka.huff@voxy.com',
    firstName: "Tameka",
    lastName: "Huff",
    primaryGroup: "Student",
    phoneNumber: "+81 90-6506-8275",
    hoursStudied: 587
  },
  {
    email: 'carran.stafford@voxy.com',
    firstName: "Carran",
    lastName: "Stafford",
    primaryGroup: "Premium Student",
    phoneNumber: "+1 204-911-2536",
    hoursStudied: 764
  },
  {
    email: 'alexia.george@voxy.com',
    firstName: "Alexia",
    lastName: "George",
    primaryGroup: "Trial Student",
    phoneNumber: "+1 819-529-9094",
    hoursStudied: 200
  },
  {
    email: 'macauley.lucas@voxy.com',
    firstName: "Macauley",
    lastName: "Lucas",
    primaryGroup: "Student",
    phoneNumber: "+1 343-913-4367",
    hoursStudied: 625
  },
  {
    email: 'brigham.cummings@voxy.com',
    firstName: "Brigham",
    lastName: "Cummings",
    primaryGroup: "Student",
    phoneNumber: "+1 289-777-4149",
    hoursStudied: 158
  },
  {
    email: 'harvey.dane@voxy.com',
    firstName: "Harvey",
    lastName: "Dane",
    primaryGroup: "Premium Student",
    phoneNumber: "+1 403-955-1483",
    hoursStudied: 992
  },
  {
    email: 'harvey.dane@voxy.com',
    firstName: "Geoffrey",
    lastName: "Dean",
    primaryGroup: "Student",
    phoneNumber: "+1 289-972-7648",
    hoursStudied: 674
  },
  {
    email: 'lorn.pond@voxy.com',
    firstName: "Lorn",
    lastName: "Pond",
    primaryGroup: "Student",
    phoneNumber: "+1 250-876-1994",
    hoursStudied: 160
  },
  {
    email: 'sydnie.broadbent@voxy.com',
    firstName: "Sydnie",
    lastName: "Broadbent",
    primaryGroup: "Trial Student",
    phoneNumber: "+1 306-394-0866",
    hoursStudied: 12
  },
  {
    email: 'tobias.midgley@voxy.com',
    firstName: "Tobias",
    lastName: "Midgley",
    primaryGroup: "Student",
    phoneNumber: "+1 226-444-7657",
    hoursStudied: 786
  },
  {
    email: 'booker.read@voxy.com',
    firstName: "Booker",
    lastName: "Read",
    primaryGroup: "Student",
    phoneNumber: "+1 450-855-4414",
    hoursStudied: 89
  },
  {
    email: 'everette.hunnisett@voxy.com',
    firstName: "Everette",
    lastName: "Hunnisett",
    primaryGroup: "Student",
    phoneNumber: "+1 204-284-9453",
    hoursStudied: 44
  },
  {
    email: 'tierney.pound@voxy.com',
    firstName: "Tierney",
    lastName: "Pound",
    primaryGroup: "Premium Student",
    phoneNumber: "+1 418-862-0995",
    hoursStudied: 855
  },
  {
    email: 'dashiell.sessions@voxy.com',
    firstName: "Dashiell",
    lastName: "Sessions",
    primaryGroup: "Student",
    phoneNumber: "+1 819-881-0408",
    hoursStudied: 71
  },
  {
    email: 'luke.smith@voxy.com',
    firstName: "Luke",
    lastName: "Smith",
    primaryGroup: "Student",
    phoneNumber: "+1 782-481-1053",
    hoursStudied: 464
  },
  {
    email: 'stephanie.fry@voxy.com',
    firstName: "Stephanie",
    lastName: "Fry",
    primaryGroup: "Student",
    phoneNumber: "+1 226-623-3471",
    hoursStudied: 308
  },
]

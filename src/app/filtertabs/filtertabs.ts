import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filtertabs',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './filtertabs.html',
  styleUrls: ['./filtertabs.css']
})
export class Filtertabs {
  tabs = ['ALL', 'SERVER_DB', 'BUSINESS_OPERATIONAL', 'SUPPORT_OPERATIONAL'];
  selectedTab = 'ALL';

  horizontal_data = [
    { name: 'Examroom', status: true, statusMessage: 'uptime', statusPercentage: '100%', type: 'SUPPORT_OPERATIONAL' },
    { name: 'Item Banking', status: true, statusMessage: 'uptime', statusPercentage: '99.9%', type: 'SERVER_DB' },
    { name: 'Edison A', status: true, statusMessage: 'uptime', statusPercentage: '100%', type: 'SERVER_DB' },
    { name: 'Enistein', status: true, statusMessage: 'uptime', statusPercentage: '100%', type: 'SERVER_DB' },
    { name: 'ExamLock', status: true, statusMessage: 'uptime', statusPercentage: '100%', type: 'SERVER_DB' },
    { name: 'NIC', status: true, statusMessage: 'uptime', statusPercentage: '100%', type: 'BUSINESS_OPERATIONAL' },
    { name: 'Test Site', status: true, statusMessage: 'uptime', statusPercentage: '100%', type: 'BUSINESS_OPERATIONAL' },
  ];

  server_db=[
    "Database","API Server","Microservices","UI servers"
  ]
  business_operational_and_support_operational=[
    {
      name: "Agents Active",
      value:'479'

    },
    {
      name: "Abanaded Rate",
      value:'2.00%'

    },
    {
      name: "Average Handle time",
      value:'00:05:29'

    },
    {
      name: "Average Speed of Agents",
      value:'00:05:29'

    },
    {
      name: "CSAT",
      value:'86.34%'

    },
    {
      name: "Contentment Rate(IVR)",
      value:'32.34%'

    }
  ]

  get filteredData() {
    if (this.selectedTab === 'ALL') return this.horizontal_data;
    return this.horizontal_data.filter(item => item.type === this.selectedTab);
  }

  setTab(tab: string) {
    this.selectedTab = tab;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  label: string;
  url: string;
  hasDropdown?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  links: NavLink[] = [
    { label: 'Products',   url: '/',   hasDropdown: true },
    { label: 'Features & Solutions',   url: '/',   hasDropdown: true },
    { label: 'Industries', url: '/', hasDropdown: true },
    { label: 'Resources',  url: '/',  hasDropdown: true },
    { label: 'Why Examroom.Ai',  url: '/',  hasDropdown: true },
    { label: 'Pricing',    url: '/',    hasDropdown: true }
  ];
}

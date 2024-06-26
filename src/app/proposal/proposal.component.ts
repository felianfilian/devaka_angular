import { Component } from '@angular/core';
import { ProfileItemComponent } from '../profile-item/profile-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proposal',
  standalone: true,
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss',
  imports: [ProfileItemComponent, CommonModule],
})
export class ProposalComponent {
  proposals = [
    {
      name: 'Castii',
      img: 'assets/img/hero02.jpg',
      prof: 'Healer',
    },
    {
      name: 'Hikari',
      img: 'assets/img/hero03.jpg',
      prof: 'Warrior',
    },
    {
      name: 'Temenos',
      img: 'assets/img/hero04.jpg',
      prof: 'Cleric',
    },
  ];
}

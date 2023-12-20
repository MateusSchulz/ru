import { Component, OnInit } from '@angular/core'
import { MenuFacade } from '../../menu.facade'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  constructor(private readonly menuFacade: MenuFacade) {}

  ngOnInit() {
    this.menuFacade.getMenu()
  }
}

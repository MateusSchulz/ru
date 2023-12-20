import { Injectable } from '@angular/core'
import { MenuService } from './api/menu.service'

@Injectable({
  providedIn: 'root'
})
export class MenuFacade {
  constructor(private readonly menuService: MenuService) {}

  getMenu() {
    this.menuService.getMenu().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }
}

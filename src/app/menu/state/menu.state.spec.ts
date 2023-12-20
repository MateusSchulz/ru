import { TestBed } from '@angular/core/testing'

import { MenuState } from './menu.state'

describe('MenuState', () => {
  let service: MenuState

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(MenuState)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

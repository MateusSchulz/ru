import { Injectable } from '@angular/core'
import { IMenu } from '../model/menu.model'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly _mock: IMenu = {
    almoco: {
      saladas: ['Mix de folha 30g', 'Abobrinha 80g', 'Seleta de legumes 80g'],
      acompanhamentos: ['Arroz branco', 'Feijão preto', 'Arroz integral'],
      guarnicoes: ['Farofa'],
      proteinas: [
        'Quibe assado recheado com queijo e frango',
        'Varre acebolado',
        'Mexido de ovos'
      ],
      sobremesas: ['Pudim de Chocolate', 'Laranja'],
      sucos: ['Abacaxi']
    },
    janta: {
      saladas: ['Acelga', 'Beterraba cozida'],
      sopas: ['Sopa de abóbora com agrião'],
      acompanhamentos: ['Arroz branco', 'Feijão preto', 'Arroz integral'],
      guarnicoes: ['Purê de inhame'],
      proteinas: [
        'Frango assado',
        'Churrasquinho misto',
        'Churrasquinho misto'
      ],
      sobremesas: ['Pudim de Framboesa', 'Banana'],
      sucos: ['Uva']
    }
  }

  constructor() {}

  getMenu(): Observable<IMenu> {
    return of<IMenu>(this._mock)
  }
}

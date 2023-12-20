export interface IMenu {
  almoco: TAlmoco
  janta: TJanta
}

export interface IPrato {
  saladas: string[]
  sopas: string[]
  acompanhamentos: string[]
  guarnicoes: string[]
  proteinas: string[]
  sobremesas: string[]
  sucos: string[]
}

export type TAlmoco = Omit<IPrato, 'sopas'>
export type TJanta = IPrato

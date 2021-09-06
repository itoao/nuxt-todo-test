export interface IItem {
    id: number
    name: string
    done: boolean
  }

export default class Item {
    private _props: IItem

    constructor(props: IItem) {
      this._props = props
    }

    get id(): number {
      return this._props.id
    }

    get name(): string {
      return this._props.name
    }

    set name(value: string) {
      this._props.name = value
    }

    get done(): boolean {
      return this._props.done
    }

    set done(value: boolean) {
      this._props.done = value
    }

}
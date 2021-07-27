import { AxiosPromise, AxiosResponse } from "axios";
import { Attributes } from "./Attributes";

interface HasId {
  id?: number;
}

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K]
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string) : void;
}

export class Modal<T extends HasId> {
  constructor(
      private attributes: Attributes<T>,
      private events: Events,
      private sync: Sync<T>
    ){}


  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if(typeof id !== 'number') {
      throw new Error('Cannot fetch user without id')
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
    .then((response: AxiosResponse) => {
      this.trigger('save');
    })
    .catch(err => this.trigger('error'));
  }
}
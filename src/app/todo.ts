export class TodoItem {
  id: number;
  title: string;
  status: boolean;

  constructor(values: any = {}) {
    Object.assign(this, values);
  }
}

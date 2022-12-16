// 1. Readonly<T>
interface User {
  name: string;
}

const user: Readonly<User> = {
  name: 'Yauhen',
};

// user.name = 'Max';    Error

// 2. Required<T>
interface Props {
  a?: number;
  b?: string;
};

const obj: Props = {a: 5};  // Ok

// const obj2: Required<Props> = {a: 5};  Error

// 3. Record<K, T>
interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: {title: 'about'},
  contact: {title: 'contact'},
  home: {title: 'home'},
};

// 4. Pick<T, K>
interface Todo {
  title: string,
  descriptor: string,
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// 5. Omit<T, K>
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Omit<Todo2, 'description'>;

const todo2: TodoPreview2 = {
  title: 'Clean room',
  completed: false,
};

// 6. Exclude<T, U>
// type T0 = Exclude<"a" | "b" | "c", "a">;
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// type T2 = Exclude<string | number | (() => void), Function>;

// 7. Extract<T, U>
// type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// type T1 = Extract<string | number | (() => void), Function>;

// 8. NonNullable<T>
type T0 = NonNullable<string | number | undefined>;
type T1 = NonNullable<string[] | null | undefined>;

// 9. ReturnType<T>
declare function f1(): {a: number, b: string};

// 10. InstanceType<T>
class C {
  x = 0;
  y = 0;
}
class Model {
    constructor() {
        this.todos = [];
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);

        return () => {
            this.observers = this.observers.filter(observer => observer !== fn);
        };
    }

    notify() {
        this.observers.forEach(observer => observer([...this.todos]));
    }

    add(teks) {
        this.todos.push({ teks, selesai: false });
        this.notify();
    }

    selesaikan(index) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index].selesai = true;
            this.notify();
        } else {
            console.log("Index tidak valid");
        }
    }
}

const viewDaftar = (todos) => {
    console.log("DAFTAR: " + todos.map(t => (t.selesai ? "[x] " : "[ ] ") + t.teks).join(" | "));
};

const viewStatistik = (todos) => {
    console.log("STATISTIK: " + todos.filter(t => t.selesai).length + "/" + todos.length + " selesai");
};

const model = new Model();

model.subscribe(viewDaftar);
const lepasStatistik = model.subscribe(viewStatistik);

model.add("Belajar Singleton");
model.add("Belajar Observer");
model.selesaikan(0);

lepasStatistik();

model.selesaikan(1);
model.selesaikan(9);
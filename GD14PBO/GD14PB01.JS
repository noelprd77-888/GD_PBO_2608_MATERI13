const IDGenerator = (function () {
    let instance;

    function init() {
        console.log("Generator ID dibuat (hanya sekali)");

        let urutan = 0;

        return {
            next(prefix = "ID") {
                urutan++;
                return prefix + "-" + String(urutan).padStart(3, "0");
            },

            getTerakhir() {
                return urutan;
            }
        };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

const gen1 = IDGenerator.getInstance();
const gen2 = IDGenerator.getInstance();

console.log(gen1 === gen2);

console.log(gen1.next("INV"));
console.log(gen1.next("INV"));
console.log(gen1.next());
console.log(gen2.next("TRX"));

console.log("Urutan terakhir:", gen1.getTerakhir());
console.log("Akses langsung urutan:", gen1.urutan);
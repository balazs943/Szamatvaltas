function convert() {
    const BekertSzam = document.getElementById('bemenet-bekertszam').value.trim();
    const Kiindulas = parseInt(document.getElementById('kiindulas').value);
    const Cel = parseInt(document.getElementById('cel').value);

    if (!BekertSzam) {
        alert('Kérlek, adj meg egy számot!');
        return;
    }

    if (!isValid(BekertSzam, Kiindulas)) {
        alert('Érvénytelen szám a megadott számrendszerben!');
        return;
    }

    const decimalisErtek = parseInt(BekertSzam, Kiindulas);
    if (isNaN(decimalisErtek)) {
        alert('Hiba történt az átváltás során.');
        return;
    }

    let result;
    switch (Cel) {
        case 2:
            result = decimalisErtek.toString(2);
            break;
        case 8:
            result = decimalisErtek.toString(8);
            break;
        case 16:
            result = decimalisErtek.toString(16).toUpperCase();
            break;
        default:
            result = decimalisErtek;
    }

    document.getElementById('kiiratas-eredmeny').value = result;
}

function isValid(BekertSzam, base) {
    const regex = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9A-Fa-f]+$/,
    };
    return regex[base]?.test(BekertSzam) ?? false;
}
const prompt = require('prompt-sync')();
let input;
let IdTicket = 0;

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];


while (input != 0) {

    ////////////
    function MenuPrincipal() {
        console.log("\n\n=================================\n    RAILWAY MANAGER    \n=================================");
        console.log("1. Afficher les trajets\n2. Acheter un ticket\n3. Afficher les tickets\n4. Annuler un ticket\n5. Rechercher un ticket\n6. Filtrer les trajets\n7. Trier les trajets\n8. Calculez nombre total des tickets vendu\n9. Chiffre d'affaires total\n10. Trajet le plus vendu\n0. Quitter\n");
        input = Number(prompt('Votre choix: '));

        return input;
    }

    let TheChoice = MenuPrincipal()

    //////////
    function ConditionDesChoix() {
        switch (TheChoice) {
            case 1: {
                AffichageGlobal(); break;
            }
            case 2: {
                AchatDeTicket(); break;
            }
            case 3: {
                AffichageGlobal(); break;
            }
            case 4: {
                AnnulerTicket(); break;
            }
            case 5: {
                RechercheTicket(); break;
            }
            case 6: {
                FilterTrips(); break;
            }
            case 7: {
                TrierTrips(); break;
            }
            case 8: {
                AffichageGlobal(); break;
            }
            case 9: {
                AffichageGlobal(); break;
            }
            case 10: {
                TripsPlusVendu(); break;
            }
            case 0: {
                console.log("Quitter...."); break;
            }
            default: {
                console.log("choix introuvable!!!!");
            }
        }
    }
    ConditionDesChoix()

    /////////////
    function AffichageGlobal() {

        if (TheChoice == 1) {
            console.log("=== TRAJETS DISPONIBLES ===");
            console.log("\n");
            for (let i = 0; i < trips.length; i++) {
                console.log(`#${trips[i].id} ${trips[i].departure} --> ${trips[i].destination}\nDépart:${trips[i].departureTime}\nArrivée:${trips[i].arrivalTime}\nPrix:${trips[i].price} DH\nPlaces disponibles :${trips[i].availableSeats}`);
                console.log("\n");
            }
        }
        if (TheChoice == 3) {
            let DeputTrip = "";
            let FinTrip = "";
            console.log("=== TICKETS ===");
            console.log("\n");
            if (tickets.length == 0) {
                console.log('Aucun ticket enregistré'); return;
            }
            for (let i = 0; i < tickets.length; i++) {
                for (let j = 0; j < trips.length; j++) {
                    if (tickets[i].tripId == trips[j].id) {
                        DeputTrip = trips[j].departure;
                        FinTrip = trips[j].destination;
                    }
                }
                console.log(`Ticket #${tickets[i].id}\nPassager : ${tickets[i].passengerName}\nTrajet : ${DeputTrip} --> ${FinTrip}\nPlace : ${tickets[i].seatNumber}\nPrix : ${tickets[i].price} DH\n`);
            }
        }
        if (TheChoice == 8) {
            const holder = NombreVendu();
            console.log('Nombre total de tickets : ' + holder);
        }
        if (TheChoice == 9) {
            const holder = ChiffreAffaire();
            console.log("Chiffre d'affaires total : " + holder);

        }
    }
    ///////////

    function AchatDeTicket() {
        let available, box, Notfound = true;
        console.log('\nentrer 0 pour retourner au menu\n');
        const NomPassage = String(prompt('nom de passager: '));
        if (NomPassage == 0) {
            return;
        }
        const IdTrip = Number(prompt('trip id: '));
        if (IdTrip == 0) {
            return;
        }

        if (trips.length == 0) { return "aucun trip" };

        for (let j = 50; j >= 1; j--) {
            available = true;
            for (let k = 0; k < tickets.length; k++) {
                if (tickets[k].tripId == IdTrip && tickets[k].seatNumber == j) {
                    available = false;
                    break;
                }
            }
            if (available) {
                box = j;
            }
        }
        for (let i = 0; i < trips.length; i++) {
            if (trips[i].availableSeats == 0) {
                console.log("Train complet"); return;
            }

            if (trips[i].id == IdTrip) {
                Notfound = false;
                tickets.push({ id: (++IdTicket), passengerName: NomPassage, tripId: trips[i].id, seatNumber: box, price: trips[i].price })
                trips[i].availableSeats -= 1;

                console.log("\nTicket acheté avec succès.\n");
            }
            if (i == trips.length - 1) {
                if (Notfound) {
                    console.log('\n---------------\ntrain introuvable\n---------------\n');
                    AchatDeTicket();
                }
            }
        }

    }

    ///////////

    function AnnulerTicket() {
        console.log('\nentrer 0 pour retourner au menu\n');
        const search = Number(prompt('Identifiant du ticket: '));

        if (search == 0) {
            return;
        }

        const FindTicket = tickets.find((e) => e.id === search)
        if (!FindTicket) {
            console.log('\nTicket introuvable');
            AnnulerTicket();
        }
        else {
            const results = tickets.findIndex(function (res) {
                return FindTicket.id === res.id
            })

            const DeletedTicket = tickets.splice(results, 1);
            const AugmenteSeat = trips.find((e) => e.id === FindTicket.tripId)
            AugmenteSeat.availableSeats += 1;
            console.log('Ticket annulé avec succès.');
        }
    }

    //////////////

    function RechercheTicket() {
        let count = 0;
        console.log('\nentrer 0 pour retourner au menu\n');
        const nom = String(prompt('Nom du passager : '));
        const obj = [];

        if (nom == 0) {
            return 0;
        }

        const checking = tickets.find((e) => e.passengerName === nom)
        if (!checking) {
            console.log('Passager introuvable');
            RechercheTicket();
        }

        else {
            for (let k = 0; k < tickets.length; k++) {
                if (nom == tickets[k].passengerName) {
                    for (let i = 0; i < trips.length; i++) {
                        if (trips[i].id == tickets[k].tripId) {

                            obj.push({
                                id: tickets[k].id,
                                name: tickets[k].passengerName,
                                depart: trips[i].departure,
                                fin: trips[i].destination,
                                seatnum: tickets[k].seatNumber,
                                prix: tickets[k].price
                            })
                            ++count;
                        }
                    }
                }
            }
        }

        for (let i = 0; i < count; i++) {
            console.log(`Ticket #${obj[i].id}\nPassager : ${obj[i].name}\nTrajet : ${obj[i].depart} --> ${obj[i].fin}\nPlace : ${obj[i].seatnum}\nPrix : ${obj[i].prix} DH\n`)
        }
    }

    //////////////

    function FilterTrips() {

        console.log('\nentrer 0 pour retourner au menu\n');
        let count = 0;
        const obj = [];
        const recherche = String(prompt('Ville de départ : '));
        if (recherche == 0) {
            return;
        }

        const check = trips.find((e) => e.departure.toUpperCase() === recherche.toUpperCase())

        if (!check) {
            console.log('ville introuvable');
            FilterTrips();
        }
        else {
            for (let i = 0; i < trips.length; i++) {
                if (trips[i].departure.toUpperCase() == recherche.toUpperCase()) {
                    obj.push({
                        depart: trips[i].departure,
                        fin: trips[i].destination,
                        prix: trips[i].price
                    })
                    console.log(`\n${obj[i].depart} --> ${obj[i].fin} : ${obj[i].prix} DH`)
                }
            }
        }

    }
    ////////////

    function TrierTrips() {
        let box = 0;
        for (let i = 0; i < trips.length; i++) {
            for (let j = 0; j < trips.length - i - 1; j++) {
                if (trips[j].price > trips[j + 1].price) {
                    box = trips[j + 1].price;
                    trips[j + 1].price = trips[j].price;
                    trips[j].price = box
                }
            }
        }

    }
    //////////////

    function NombreVendu() {
        let total = 0;
        for (let i = 0; i < trips.length; i++) {
            total = total + (50 - trips[i].availableSeats)
        }
        return total;
    }
    ///////////////

    function ChiffreAffaire() {
        let total = 0;
        let taille = 0;
        for (let i = 0; i < trips.length; i++) {
            if (trips[i].availableSeats < 50) {
                taille = 0;
                taille = taille + (50 - trips[i].availableSeats)
                for (let j = 0; j < taille; j++) {
                    total = total + trips[i].price;
                }
            }
        }
        return total
    }
    //////////////

    function TripsPlusVendu() {
        let min = trips[0].availableSeats;


        for (let i = 0; i < trips.length; i++) {
            if (min > trips[i].availableSeats) {
                min = trips[i].availableSeats;
            }
        }

        const PlusVenduTrip = trips.find((e) => e.availableSeats === min);
        min = 50 - min;
        if (min === 0) {
            console.log('no ticket vendu');
            return;
        }

        console.log(`\n${PlusVenduTrip.departure} --> ${PlusVenduTrip.destination}\n${min} tickets vendus`);

    }
}

////////////
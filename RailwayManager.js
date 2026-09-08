const prompt = require('prompt-sync')();
let input;
let IdTicket = 0;
///////////////////--data--//////////////////////
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
///////////--data--/////////////

while (input != 0) {
    ///menu principal
    function MenuPrincipal() {
        console.log("=================================\n    RAILWAY MANAGER    \n=================================");
        console.log("1. Afficher les trajets\n2. Acheter un ticket\n3. Afficher les tickets\n4. Annuler un ticket\n5. Rechercher un ticket\n6. Filtrer les trajets\n7. Trier les trajets\n0. Quitter\n");
        input = Number(prompt('Votre choix: '));

        return input;
    }

    let TheChoice = MenuPrincipal()

    //les choix
    function ConditionDesChoix() {
        switch (TheChoice) {
            case 1: {
                AffichageTrips(); break;
            }
            case 2: {
                AchatDeTicket(); break;
            }
            default: {
                console.log("choix introubale!!!!");
            }
        }
    }
    ConditionDesChoix()

    //l'affichage des trips
    function AffichageTrips() {
        console.log("=== TRAJETS DISPONIBLES ===");
        console.log("\n");

        for (let i = 0; i < trips.length; i++) {
            console.log(`#${trips[i].id} ${trips[i].departure} --> ${trips[i].destination}\nDépart:${trips[i].departureTime}\nArrivée:${trips[i].arrivalTime}\nPrix:${trips[i].price} DH\nPlaces disponibles :${trips[i].availableSeats}`);
            console.log("\n");
        }
    }

    //l'achat des tickets
    function AchatDeTicket() {
        let somme = 0;
        let count = 0;
        const NomPassage = prompt('nom de passager: ');
        const IdTrip = Number(prompt('trip id: '));
        const SeatNumber = Number(prompt('combien des seat? '));

        for (let i = 0; i < trips.length; i++) {
            if (IdTrip == trips[i].id) {
                if (SeatNumber > trips[i].availableSeats) {
                    console.log('pas assez de sièges'); break;
                }
                else {
                    for (let j = 1; j <= SeatNumber; j++) {
                        somme += trips[i].price

                    }
                    tickets.push({ id: (++IdTicket), passengerName: NomPassage, tripId: trips[i].id, seatNumber: SeatNumber, price: somme })
                    trips[i].availableSeats -= SeatNumber;
                    return tickets;
                }
            }
            else {
                count++;
                if (count == 20) {
                    console.log('aucun trajet trouvé'); break;
                }
            }
        }
    }

}

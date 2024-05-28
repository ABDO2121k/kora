import { 
    AccountBalanceWallet,
    Accessible,
    AirportShuttle,
    Casino,
    ChildFriendly,
    DirectionsBike,
    Elevator,
    Event,
    Fastfood,
    FirstPage,
    FormatListNumbered,
    Hotel,
    LocalBar,
    LocalHospital,
    LocalParking,
    LocalPharmacy,
    LocationCity,
    Restaurant,
    Rowing,
    SmokingRooms,
    Wifi,
    Security
} from '@mui/icons-material';
import MosqueIcon from '@mui/icons-material/Mosque';

export const getAmenityIcon = (title) => {
    switch (title) {
        case 'Mosque':
            return <MosqueIcon />;
        case 'Restroom':
            return <LocalHospital />;
        case 'Restaurant':
            return <Restaurant />;
        case 'Parking facilities':
            return <LocalParking />;
        case 'Concession stands':
            return <Fastfood />;
        case 'VIP suites':
            return <Hotel />;
        case 'First aid stations':
            return <LocalPharmacy />;
        case 'Wi-Fi access':
            return <Wifi />;
        case 'ATM machines':
            return <AccountBalanceWallet />;
        case 'Merchandise shops':
            return <FormatListNumbered />;
        case 'Elevators and escalators':
            return <Elevator />;
        case 'Wheelchair accessibility':
            return <Accessible />;
        case 'Security checkpoints':
            return <Security />;
        case 'Scoreboard and video screens':
            return <FirstPage />;
        case 'Meeting and event spaces':
            return <Event />;
        case 'Children\'s play area':
            return <ChildFriendly />;
        case 'Outdoor seating area':
            return <Rowing />;
        case 'Lounge and bar areas':
            return <LocalBar />;
        case 'Locker rental services':
            return <LocationCity />;
        case 'Bicycle racks':
            return <DirectionsBike />;
        case 'Public transportation access':
            return <AirportShuttle />;
        case 'Smoking areas':
            return <SmokingRooms />;
        case 'Lost and found services':
            return <Casino />;
        default:
            return null;
    }
};


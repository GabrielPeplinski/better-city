import Geolocation from "./Geolocation";

type Troubles = {
    id?: string;
    description: string;
    title: string;
    user_id: string;
    created_at: Date;
    is_solved: boolean;
    location: Geolocation
}

export default Troubles;
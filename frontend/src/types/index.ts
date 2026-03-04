export interface Character {
    id: string;
    name: string;
    cursedTechnique?: CursedTechnique;
    episodes: Episode[];
    locations: Location[];
}

export interface Episode {
    id: string;
    title: string;
    airDate: string;
}

export interface CursedTechnique {
    id: string;
    name: string;
    description: string;
}

export interface Location {
    id: string;
    name: string;
    description?: string;
}
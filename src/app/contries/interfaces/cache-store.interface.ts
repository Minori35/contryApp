import { Country } from "./country"
import { Region } from "./region.type";

export interface CacheStore{
    byCapital : TermCountry
    byCountry : TermCountry
    byRegion : TermRegion

}

export interface TermCountry{
    term: string;
    country : Country[];
}

export interface TermRegion{
    region?: Region;
    country : Country[];
}

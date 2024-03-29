import axios from "axios";
import { HeroInterface } from "../Interface/Hero";

export const HeroData: HeroInterface = {
    image : 'hero1.jpg',
    heroTitle : 'International Oil & Gas Supply',
    heroText : 'Eva Petroleum Limited conducts its business activities in International Oil and Gas suppliers, provide oil products of Crude Oil, Fuel Oil, Diesel, Gasoline, Naphtha and other specification of oil.'
}

export const HeroDataDB = async() : Promise<HeroInterface[]> => {
    const response = await axios.get<HeroInterface[]>('gethomecontent')
    return response.data
}
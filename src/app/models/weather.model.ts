export interface weather {
    coord: {
        lon: number;
        lat: number;
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ]
    name: string;
    timezone: string;
    sys: {
        country: string;
        sunrise: string;
        sunset:string;
    },
    wind: {
        spead: string;
        deg: string;
    },
    main: {
        temp: string;
        feels_like: string;
        temp_min: string
        temp_max: string;
        pressure: string;
        humidity: string;
    },
}

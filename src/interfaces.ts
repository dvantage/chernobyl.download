export interface ICustomWindow extends Window {
    player: any;
    vueInstance: any;
    storage: any;

    myFunction(): void;
}

export interface IVideoSource {
    1080?: string;
    720?: string;
    480?: string;
    poster?: string;
    download?: string;
    episode?: number;
    title?: string;
}


export interface IRootState {
    videoSources: IVideoSource[];
    server: string;
}

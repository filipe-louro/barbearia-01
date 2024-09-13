declare module 'three/examples/jsm/loaders/OBJLoader.js' {
    import {Group, Loader} from 'three'

    export class OBJLoader extends Loader {
        constructor();

        load(url: string, onLoad: (object: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    }
}

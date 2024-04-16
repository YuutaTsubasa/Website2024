export class Utils {
    public static convertPathToId(path: string) : string { 
        return path.replace(/^\/src\/posts\/(.+)\.md$/, "$1"); 
    }
}
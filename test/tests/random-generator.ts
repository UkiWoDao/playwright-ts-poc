export function generateRandomAlphaNumbericString(length: number) : string {
    var result = '';
    var allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var allowedCharsLenght = allowedChars.length;

    for ( var i = 0; i < length; i++ ) {
        result += allowedChars.charAt(Math.floor(Math.random() * allowedCharsLenght));
    }

    return result;
}

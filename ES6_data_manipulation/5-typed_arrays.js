export default function createInt8TypedArray(length, position, value) {
    const arrBuf = new ArrayBuffer(length);
    const obj = new DataView(arrBuf);

    try {
        obj.setInt8(position, value);
        } catch(errot) {
          throw Error('Position outside range');
        }
        return obj;
}

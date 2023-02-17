export class Utilities {
    public static NameOf<A, B = {}>(): (name: keyof A, name2?: keyof B) => any {
      return (name: keyof A, name2?: keyof B) => {
        if (name2 !== undefined) {
          return `${String(name)}.${String(name2)}`;
        } else {
          return name;
        }
      };
    }
  
    // Checks if an object is empty.
    static IsEmpty(value: any): boolean {
      return (
        value === '' ||
        value === null ||
        value === undefined ||
        value.length === 0
      );
    }
  
    /**
     * Helper method to generate a UUID for instances where one could be needed
     * Found on stack-overflow
     */
    static generateUUID = () => {
      // Public Domain/MIT
      let d = new Date().getTime(); //Timestamp
      let d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
          let r = Math.random() * 16; //random number between 0 and 16
          if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
          } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
          }
          return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    };
  
    /**
     * Shuffles array in place. ES6 version
     * @param {Array} a items An array containing the items.
     */
    static shuffle(a: any) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }
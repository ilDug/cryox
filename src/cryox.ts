import * as _ from 'lodash'

export class Cryox<T>{

    /** freezed clone */
    private origin: T;

    /** reference to the current item in use */
    private current: T;

    /** use a clone of CURRENT item without fear */
    get golem(): T { return _.cloneDeep(this.current) }


    constructor(item: T) {
        this.current = item;
        this.origin = _.cloneDeep(item);
    }

    /** check that nothing has changed from the frozen copy */
    get equal(): boolean { return _.isEqual(this.origin, this.current) }


    /** check if the copy in use is different from the original frozen one */
    get changed(): boolean { return !this.equal }

    /** return the ORIGINAL freezed item */
    public defrost() { return this.origin }

    /** return a clone of ORIGINAL freezed item */
    public rebirth() { return _.cloneDeep(this.origin) }

}
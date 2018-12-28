interface Bucket extends Array<BucketContents> {
    [index: number]: BucketContents;
}

type BucketContents = [string, any];

class HashTable {
    private data: Bucket[];

    constructor(size: number) {
        this.data = new Array(size);
    }

    public set(key: string, value: any): void {
        const address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = []; // New bucket at this address.
        }

        const bucketContents: BucketContents = [key, value];
        this.data[address].push(bucketContents);
    }

    public get(key: string) {
        const address = this._hash(key);
        const bucket = this.data[address];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                const bucketContents = bucket[i];

                if (bucketContents[0] === key) {
                    return bucketContents[1];
                }
            }
        }

        return undefined;
    }

    private _hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
}

const myHashTable = new HashTable(2);

myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);

console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));

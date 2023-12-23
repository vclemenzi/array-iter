interface Array<T> {
  iter(callback: (item: T, index: number, array: T[]) => any): void;
}

Array.prototype.iter = function(callback) {
  Promise.all(this.map(callback));
};

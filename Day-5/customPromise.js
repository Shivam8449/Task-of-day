class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.onRejectedCallbacks.forEach((callback) => callback(this.reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        if (this.state === 'fulfilled') {
          try {
            const result = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }
  
        if (this.state === 'rejected') {
          if (onRejected) {
            try {
              const result = onRejected(this.reason);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          } else {
            reject(this.reason);
          }
        }
  
        if (this.state === 'pending') {
          if (onFulfilled) {
            this.onFulfilledCallbacks.push((value) => {
              try {
                const result = onFulfilled(value);
                resolve(result);
              } catch (error) {
                reject(error);
              }
            });
          }
  
          if (onRejected) {
            this.onRejectedCallbacks.push((reason) => {
              try {
                const result = onRejected(reason);
                resolve(result);
              } catch (error) {
                reject(error);
              }
            });
          }
        }
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  }
  
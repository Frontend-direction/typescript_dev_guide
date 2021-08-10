class Boat {
  color = 'red';

  get formattedColor() {
    return `The boat color is ${this.color}`
  }

  @logError('Opps we sinking!')
  pilot():void {
    throw new Error();
    console.log('smash');
  }
}
function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
  
    try {
      method();
    } catch (e) {
      console.log(message);
    }
  }
}


new Boat().pilot();
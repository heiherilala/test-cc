import promptSync from 'prompt-sync';
import {displayMenu} from "./menu.js";
const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  steamingInProgress: false,
  heatingInProgress: false,

  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log('Rice has been added.');
      return;
    }
      console.log('There\'s already rice in the rice cooker.');
  },

  cookRice() {
    if (!this.ricePresent) {
      console.log('Cannot cook. The rice cooker is empty.');
      return;
    }
    if (!this.riceCooked) {
      console.log('Cooking rice...');
      this.delaySync(1500);
      this.riceCooked = true;
      console.log('The rice has been cooked!');
      return;
    }
      console.log('The rice is already cooked.');
  },

  steam() {
    if (!this.ricePresent) {
      console.log('Cannot steam. The rice cooker is empty.');
      return;
    }
    if (this.ricePresent && !this.steamingInProgress) {
      console.log('Steaming in progress...');
      this.steamingInProgress = true;
      this.delaySync(1500);
      this.steamingInProgress = false;
      console.log('Steaming completed!');
      return;
    } 
    console.log('Steaming is already in progress.');
  },

  keepWarm() {
    if (this.ricePresent && this.riceCooked && !this.heatingInProgress) {
      console.log('The rice is now being kept warm.');
      this.heatingInProgress = true;
      return;
    } else if (!this.ricePresent) {
      console.log('Cannot keep warm. The rice cooker is empty.');
      return;
    } else if (!this.riceCooked) {
      console.log('Cannot keep warm. The rice is not cooked.');
      return;
    }
    console.log('Keeping warm is already in progress.');
  },

  removeRice() {
    if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.steamingInProgress = false;
      this.heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
      return;
    }
      console.log('There\'s no rice to remove or it is not cooked yet.');
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
    }
  },
};


function isNumeric(str) {
  const numericRegex = /^[0-9]+$/;

  return numericRegex.test(str);
}


export function simulateRiceCooker() {
  let input;
  const condition = true;

  while (condition) {
    displayMenu();

    let isNotValideNumber = true;
    while (isNotValideNumber) {
      input = prompt('Enter your choice: ');
      isNotValideNumber = !isNumeric(input)
      if (isNotValideNumber) {
        console.log('Invalid input. Please enter a valid number.');
        continue
      }
      break
    }
    const choice = parseInt(input);
    if (!isNaN(choice)) {
      switch (choice) {
        case 1:
          riceCooker.addRice();
          break;
        case 2:
          riceCooker.cookRice();
          break;
        case 3:
          riceCooker.steam();
          break;
        case 4:
          riceCooker.keepWarm();
          break;
        case 5:
          riceCooker.removeRice();
          break;
        case 6:
          console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
          break;
        default:
          console.log('Invalid choice. Please select a valid option.');
          break;
      }
    } 
  }
}

simulateRiceCooker();

/*
class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}.`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}


class Menu {
    constructor () {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1': 
                this.createTeam();
                break;
                case '2':
                this.viewTeam();
                break;
                case '3':
                this.deleteTeam();
                break;
                case '4':
                this.displayTeams();
                break;
                default: 
                selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

showMainMenuOptions() {
    return prompt (`
    0) exit
    1) create new team
    2) view team
    3) delete team
    4) display all teams
    `);
}

showTeamMenuOptions(teamInfo) {
    return prompt (`
    0) back
    1) create player
    2) delete player
    --------------------
    ${teamInfo}
    `);
}

displayTeams() {
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++){
        teamString += i + ') ' + this.teams[i].name + '\n';
    }
    alert(teamString);
}

createTeam() {
    let name = prompt('Enter name for new team:');
    this.teams.push(new Team(name));
}

viewTeam() {
    let index = prompt('Enter the index of the team you wish to view: ');
    if (index > -1 && index < this.teams.length) {
        this.selectedTeam = this.teams[index];
        let description = 'Team Name: ' + this.selectedTeam.name + '\n';
        
        for (let i = 0; i < this.selectedTeam.players.length; i ++) {
            description += i + ') ' + this.selectedTeam.players[i].name
             + ' - ' + this.selectedTeam.players[i].position + '\n';
             }
        
        let selection = this.showTeamMenuOptions(description);
        switch (selection)  {
            case '1': 
            this.createPlayer();
            break;
            case '2':
            this.deletePlayer();
        }          
    }
  }


deleteTean() {
    let index = prompt ('Enter the index of the team you wish to delete: ');
    if (index > -1 && index < this.teams.length) {
    this.teams.splice(index, 1);
    }

} 


createPlayer() {
    let name = prompt('Enter name for new player: ');
    let position = prompt('Enter position for new player: ');
    this.selectedTeam.players.push(new Player(name, position));
}

deletePlayer() {
    let index = prompt ('Enter the index of the player you wish to delete: ');
    if (index > -1 && index < this.selectedTeam.players.length) {
        this.selectedTeam.players.splice(index, 1);
    }
}


}




let menu = new Menu();
menu.start();

*/

// Class Dog that takes two inputs, name and breed

class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    describe () {
        return `${this.name} is a ${this.breed}.`;
    }
}

// Class Group that takes in a name, and also adds an instance of Dog and pushes it to an array 'dogs'
class Group {
    constructor (name) {
        this.name = name;
        this.dogs = [];
    }

    addDog (dog) {
        if (dog instanceof Dogs) {
            this.dogs.push(dog);
        } else {
            throw new Error(`You can only add an instance of a Dog. Argument is not a dog: ${dog}`);
        }
    }
    
    describe() {
        return`${this.name} has ${this.dogs.length} dogs.`;
    }
    
}

// The class that has the menu itself. It shows the MainMenuOptions while nothing is selected.

class Menu{
    constructor() {
        this.groups = [];
        this.selectedGroup = null;
    }
    start(){
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case `1`:
                    this.createGroup();
                    break;
                case `2` : 
                    this.viewGroup();
                    break;
                case `3` :
                    this.deleteGroup();
                    break;
                case `4` :
                    this.displayGroups();
                    break;
                default :
                selection = 0;           
            }
            selection = this.showMainMenuOptions();
        }

        alert(`Goodbye!`);
    }

    showMainMenuOptions () {
        return prompt(`
        0) exit
        1) create new group
        2) view group
        3) delete group
        4) display all groups
        `);
    }

    showGroupMenuOptions (groupInfo) {
        return prompt (`
        0) back
        1) create dog
        2) delete dog
        --------------
        ${groupInfo}
        `);
    }

    displayGroups() {
        let groupString = ``;
        for (let i = 0; i < this.groups.length; i++) {
            groupString += i + `) ` + this.groups[i].name + `\n`;
        }
        alert(groupString);
    }

    createGroup() {
        let name = prompt(`Enter name for new team:`);
        this.groups.push(new Group(name));
    }

    // method for calling a prompt box asking for the group index to be entered, then will display said group.
    // it also gives the option for adding or deleting a dog from the group once selected.
    viewGroup () {
        let index = prompt(`Enter the index of the group you wish to view:`);
        if (index > -1 && index < this.groups.length) {
            this.selectedGroup = this.groups[index];
            let description = `Group Name: ` + this.selectedGroup.name + `\n`;
            
            for (let i = 0; i < this.selectedGroup.dogs.length; i++) {
                description += i + `) ` + this.selectedGroup.dogs[i].name + `-` + this.selectedGroup.dogs[i].breed + `\n`;
            }

            let selection = this.showGroupMenuOptions(description);
            switch (selection) {
                case`1` :
                    this.createDog();
                    break;
                case `2` :
                    this.deleteDog();
            }      
        }
    }

    // method for deleting a group
    deleteGroup() {
        let index = prompt(`Enter the index of the group you wish to delete:`);

    // validates user input
        if (index > -1 && index < this.groups.length) {
            this.groups.splice(index, 1);
        }
    }

    // method for creating a dog to add to the selected group
    createDog() {
        let name =  prompt(`Enter name for new dog:`);
        let breed = prompt(`Enter breed for new dog:`); 
        this.selectedGroup.dogs.push(new Dog(name, breed));
    }


    // method for deleting a dog from a group
    deleteDog () {
        let index = prompt(`Enter the index of the dog you wish to delete:`);

    // validates user input
        if (index > -1 && index < this.selectedGroup.dogs.length){
            this.selectedGroup.dogs.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
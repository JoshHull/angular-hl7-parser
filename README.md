# SwapiApp

## Instructions For the Interview Exercise

We are hoping to get a glimpse into your creative thinking and problem solving!

This is a guessing game built on Angular (via angular cli) with a REST data source from the Star Wars API: https://swapi.co

There are some things that need to be fixed, and there's a lot of room for improvement!

You have 1 hour to make this game better.

Here is a backlog of issues we know about. This is way too many things to finish in the hour, and you don't have to do any of these things if you find something more important to do. 

  * The dropdown with people that match the hints doesn't seem right
  * The wording of the hints is ambiguous
  * There is a bug in finding people who match the films 
  * There is a bug in finding people who match the species
  * There's no way to reset the game without refreshing the browser window. 
  * It's ugly 
  * I can't tell who I've guessed already
  * The person I've already guessed is still in the dropdown
  * After a few hints,  you can't see the whole page at once.
  * There are only three hints.  We could use a lot more
  * If you win, the game doesn't end. 
  * There's no way to lose. 
  * The hints don't seem like they're given in any reasonable order.  
  * It doesn't have a history or anything fun to see if you can do better.

You don't have enough time to get fancy or detailed, so just do your best to get things working, and implement some of your ideas. Let your creativity show. Don't worry too much about making the code pretty, or organized properly.  

After the exercise, you will give us a short demo, and then we'll collectively decide on another thing to accomplish together in the app. 

## Technical Details

The two main files you'll be working with are:

  * swapi-people.component.ts 
  * swapi-people.component.html  

Feel free to modify anything else if you'd like, but those two files are the starting point. 

###Angular template Reference

Here are few elements of the template (the .html file) that you may not recognize if you've never tried out Angular:

The 'star ng' elements are angular attributes that tell angular to do something for you.  

    *ngFor=" let hint of hints "
        This will loop over the array called "hints" and do a "for each" and assign it to the variable "hint".  It will repeat everything within the tag that this element is in. 

    *ngIf="randomlyChosenPerson"
        This will render the contents of this tag only if the condition is true. 

Then there are the data bindings.  Angular makes a distinction in the direction of the binding, indicated by either a bracket [] or a parenthesis () around an attribute.  Two-way binding is done by combining them!   The curly brakets {{}} are used to show the value of a variable in the component. This is a one way binding.

    {{numberOfGuesses}}
        This shows (and renders updates to) the value of the "numberOfGuesses" variable in the component. 

    (click)="evaluateCharacterGuess()"
        This binds to the click event, and says to execute the "evaluateCharacterGuess()" method if the click event is detected for this element. 

    [(ngModel)]="guessedCharacter"
        This is a two-way binding.  It will update the ngModel attribute if "guessedCharacter" changes in the component, or it will issue changes of ngModel to the "guessedCharacter" variable. 

    (ngModelChange)="evaluateCharacterGuess()"
        This is a one-way event binding out.  This says to watch for the ngModel to change, and if it does, execute this method. 

    [ngValue]="person"
        This is a one way binding in.  This says the ngValue should be set to what's in the "person" variable. 

###Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.  You will need NPM and Angular CLI installed in order run the commands listed here.  

The project is built on Angular v4.0.1 

## Starting the App within a Development Container

#### First install all of the dependencies with `npm`
```
npm install
```

#### Then run one of these two options: 
```
npm start
ng serve 
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

You can add components, or other Angular objects using cli commands. This is helpful, because it injects almost all of the neccessary entries into your Module, and adds the code to the appropriate place in the file system so that you can reference the new element in other parts of your application. 

#### For example, to add a component run this command: 
  ```
  ng generate component component-name
  ``` 
  
#### Here are more commands for things you might want to generate:  
  ```ng generate directive directive-name
  ng generate pipe pipe-name
  ng generate service service-name
  ng generate class class-name
  ng generate module module-name
  ```
  
  See this link for more options: [Angular CLI Code Scaffolding Options](https://github.com/angular/angular-cli#generating-components-directives-pipes-and-services)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# Wingless Birds
This is a game where horses compete in 8 different lanes.

## [Check out the live example.](https://wingless-birds.vercel.app/)
[Check out the live example.](https://wingless-birds.vercel.app/)

## General Features

- Custom horse names
- Live leaderboard
- Results list with lane number and horse name

## Components

### RaceTrack
- It is where the race takes place.
- When the race starts, the horses complete the race by progressing between 0.01-1 within every 50 milliseconds.

![RaceTrack](https://user-images.githubusercontent.com/70553662/198894111-751e2585-5f36-4a88-84a2-11e5b593966d.png)

### Horse Names
- Where horses are named. 
- It checks if any horse's name is empty and disables the start (button) according to the starting status of the race.

![Horse Names](https://user-images.githubusercontent.com/70553662/198894201-a00b2a96-4b6f-4b60-a3ff-5d41fd6f439d.png)

### Leaderboard
- It is the interface shown at the time of the race.
- Sorts the horses with their names within the 100 position and instantly according to these values.

![Leaderboard](https://user-images.githubusercontent.com/70553662/198894383-593d9b01-85ce-44f1-a76d-e8c0c19055f0.png)

### Result
- At the end of the race, it shows the results and provides a restart (button) to bring the race to the starting position.
- It prints the horse's name and lane number on the screen according to the order of finishing the race.

![Result](https://user-images.githubusercontent.com/70553662/198894401-d254c4a7-c202-4746-99aa-efb63651d2d0.png)

## Technologies

- Vue.js
- Pinia
- Scss

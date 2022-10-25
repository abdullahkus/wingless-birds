import { defineStore } from 'pinia'

export const useRaceStore = defineStore('RaceStore', {
  state: () => {
    return {
      horses: [
        { id: 1, name: "Şahbatur", running: false, positionInLane: 0.0, numberOf: null },
        { id: 2, name: "Gülbatur", running: false, positionInLane: 0.0, numberOf: null },
        { id: 3, name: "Bold Pilot", running: false, positionInLane: 0.0, numberOf: null },
        { id: 4, name: "Karayel", running: false, positionInLane: 0.0, numberOf: null },
        { id: 5, name: "Kafkaslı", running: false, positionInLane: 0.0, numberOf: null },
        { id: 6, name: "Turbo", running: false, positionInLane: 0.0, numberOf: null },
        { id: 7, name: "Yavuzhan", running: false, positionInLane: 0.0, numberOf: null },
        { id: 8, name: "Nadas", running: false, positionInLane: 0.0, numberOf: null }
      ],
      leaderboard: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null
      }
    }
  },
  getters: {

  },
  actions: {

  }
})
import { defineStore } from 'pinia'

export const useRaceStore = defineStore('RaceStore', {
  state: () => {
    return {
      race: true,
      showCountdown: false,
      showHorseForm: true,
      showLeaderboard: true,
      showResult: true,
    }
  },
  getters: {

  },
  actions: {
    startRace() {
      this.race = true
    }
  }
})
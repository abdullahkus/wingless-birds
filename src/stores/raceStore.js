import { defineStore } from 'pinia'
import { randomNumber } from '@/utils/numberUtils'

export const useRaceStore = defineStore('RaceStore', {
  state: () => {
    return {
      isRace: false,
      numberOfHorse: 1,
      horses: [
        { id: 1, name: "Şahbatur", running: false, positionInLane: 0, numberOf: null },
        { id: 2, name: "Gülbatur", running: false, positionInLane: 0, numberOf: null },
        { id: 3, name: "Bold Pilot", running: false, positionInLane: 0, numberOf: null },
        { id: 4, name: "Karayel", running: false, positionInLane: 0, numberOf: null },
        { id: 5, name: "Kafkaslı", running: false, positionInLane: 0, numberOf: null },
        { id: 6, name: "Turbo", running: false, positionInLane: 0, numberOf: null },
        { id: 7, name: "Yavuzhan", running: false, positionInLane: 0, numberOf: null },
        { id: 8, name: "Nadas", running: false, positionInLane: 0, numberOf: null }
      ],
    }
  },
  getters: {
    finishedRace: (state) => {
      if (state.numberOfHorse === (state.horses.length + 1)) {
        state.isRace = false
      }
    }
  },
  actions: {
    async runHorse(horseId) {
      const findIndexHorse = this.horses.findIndex((horse) => horse.id === horseId)
      const running = setInterval(() => {
        const random = randomNumber(0.01, 1.00)
        this.horses[findIndexHorse].positionInLane += random
        if (this.horses[findIndexHorse].positionInLane > 100) {
          this.horses[findIndexHorse].positionInLane = 100
          this.horses[findIndexHorse].running = false
          this.horses[findIndexHorse].numberOf = this.numberOfHorse
          if (this.numberOfHorse < this.horses.length) {
            this.numberOfHorse++
          } else {
            this.numberOfHorse = 1
            this.isRace = false
          }
          clearInterval(running)
        }
      }, 50)
    },
    runningHorses() {
      this.horses.map((horse) => horse.running = true)
    },
    isRaceStatusChange() {
      this.isRace = !this.isRace
    }
  }
})
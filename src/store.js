import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        keys: ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'],
        selectedKey: String,
        keyReference: [],
        scales: [['C', 'D', 'E', 'F', 'G', 'A', 'B'],
            ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
            ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
            ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
            ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
            ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
            ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
            ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
            ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
            ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
            ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
            ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']],
        modes: [],
        progression: []
    },
    getters: {
        getKeys(state) {
            return state.keys;
        },
        getSelectedKey(state) {
            return state.selectedKey;
        },
        getKeyReference(state) {
            return state.keyReference;
        },
        getScales(state) {
            return state.scales;
        },
        getModes(state) {
            return state.modes;
        },
        getProgression(state) {
            return state.progression;
        }

    },
    mutations: {
        setSelectedKey(state, key) {
            state.selectedKey = key;
        },
        setSelectedKeyScale(state) {
            state.keyReference = state.scales[state.keys.indexOf(state.selectedKey)];
        },
        resetModes(state) {
            state.modes = [];
        },
        addChordToModes(state, features) {
            state.modes.push(features);
        },
        resetProgression(state) {
            state.progression = [];
        },
        addChordToProgression(state, features) {
            state.progression.push(features);
        }
    }
});

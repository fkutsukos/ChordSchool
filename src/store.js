import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        /*This list represents the possible key references*/
        keys: ['C', 'C#', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],

        /*This string represents the name of the key reference chosen by the user*/
        selectedKey: String,

        /*This list contains all the notes of the Ionian Scale corresponding to the chosen key reference*/
        keyReference: [],


        /*This dictionary contains all the possible Ionian scales*/

        scales: [['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'],
            ['C#3', 'D#3', 'E#3', 'F#3', 'G#3', 'A#3', 'B#3'],
            ['Db3', 'Eb3', 'F3', 'Gb3', 'Ab3', 'Bb3', 'C4'],
            ['D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4'],
            ['Eb3', 'F3', 'G3', 'Ab3', 'Bb3', 'C4', 'D4'],
            ['E3', 'F#3', 'G#3', 'A3', 'B3', 'C#4', 'D#4'],
            ['F3', 'G3', 'A3', 'Bb3', 'C4', 'D4', 'E4'],
            ['F#3', 'G#3', 'A#3', 'B3', 'C#4', 'D#4', 'E#4'],
            ['Gb3', 'Ab3', 'Bb3', 'Cb4', 'Db4', 'Eb4', 'F4'],
            ['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F#4'],
            ['Ab3', 'Bb3', 'C4', 'Db4', 'Eb4', 'F4', 'G4'],
            ['A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G#4'],
            ['Bb3', 'C4', 'D4', 'Eb4', 'F4', 'G4', 'A4'],
            ['B3', 'C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A#4']],


        /*This list contains the 7 major harmony modes related to the selected key reference*/
        modes: [],

        /*This list contains the chords chosen by the user to be part of a chord progression*/
        progression: [],

        /* This list contains the state of the keyboard keys, that alternate between "pressed-1" or "released-0".*/
        keyboard: [
            {name: 'C3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'C#3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'D3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'D#3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'E3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'F3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'F#3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'G3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'G#3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'A3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'A#3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'B3', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'C4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'C#4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'D4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'D#4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'E4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'F4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'F#4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'G4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'G#4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'A4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'A#4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'B4', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'C5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'C#5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'D5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'D#5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'E5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'F5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'F#5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'G5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'G#5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'A5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'A#5', pressed: false, partOfRefScale: false, noteName: null},
            {name: 'B5', pressed: false, partOfRefScale: false, noteName: null}
        ],

        /* This variable will reset the keyboard if true */
        resetKeyboard: true,
        keysIndexes: [],

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
        },
        getPressedKeys(state) {
            return state.keyboard.filter(key => {
                    return key.pressed
                }
            )
        }
    },

    actions: {
        /*asynchronous commit of the altered chord progression is required
        *to avoid conflict with relevant getProgression getter  */
        rearrangeProgression({commit}, chords) {
            commit("commitProgression", chords);
        }
    },

    mutations: {
        /*METHODS RELATED TO THE KEY REFERENCE STATE*/
        /*This method assigns the selected key to the corresponding state's variable*/
        setSelectedKey(state, key) {
            state.selectedKey = key;
        },
        /*This method extracts from all the possible scales the one related to the chosen key reference*/
        setSelectedKeyScale(state) {
            state.keyReference = state.scales[state.keys.indexOf(state.selectedKey)];
        },

        /*METHODS RELATED TO THE MODES STATE*/
        /*This method resets the modes list to an empty list*/
        resetModes(state) {
            state.modes = [];
        },
        buildModes(state) {
            state.keyReference.forEach((value, index) => {
                let features = {};
                features.degree = index;

                //Set the tonic
                features.tonic = state.keyReference[(index) % 7];

                //Set the 3rd
                features.third = state.keyReference[(index + 2) % 7];
                //and its octave
                if (((index + 2) / 7) >= 1) {
                    features.third = features.third.replace(/.$/, parseInt(features.third.charAt(features.third.length - 1)) + 1);
                }

                //Set the 5th
                features.fifth = state.keyReference[(index + 4) % 7];

                //and its octave
                if (((index + 4) / 7) >= 1) {
                    features.fifth = features.fifth.replace(/.$/, parseInt(features.fifth.charAt(features.fifth.length - 1)) + 1);
                }

                //Set the 7th
                features.seventh = state.keyReference[(index + 6) % 7];
                //and its octave
                if (((index + 6) / 7) >= 1) {
                    features.seventh = features.seventh.replace(/.$/, parseInt(features.seventh.charAt(features.seventh.length - 1)) + 1);
                }

                switch (index) {
                    case 0 :
                        features.chordQuality = '\u0394';
                        break;
                    case 1 :
                        features.chordQuality = 'mi7';
                        break;
                    case 2 :
                        features.chordQuality = 'mi7';
                        break;
                    case 3 :
                        features.chordQuality = '\u0394';
                        break;
                    case 4 :
                        features.chordQuality = "7";
                        break;
                    case 5 :
                        features.chordQuality = 'mi7';
                        break;
                    case 6 :
                        features.chordQuality = '\u00D8';
                        break;
                    default:
                        features.chordQuality = '';
                        break;
                }
                state.modes.push(features);
            });
        },
        addChordToModes(state, features) {
            state.modes.push(features);
        },

        /*METHODS RELATED TO THE PROGRESSION STATE*/
        /*This method resets the progression list to an empty list*/
        resetProgression(state) {
            state.progression = [];
        },
        addChordToProgression(state, features) {
            state.progression.push(features);
        },
        deleteChordFromProgression(state, features) {
            state.progression.splice(state.progression.indexOf(features), 1);
        },

        commitProgression(state, chords) {
            state.progression = chords.items;
        },

        /*METHODS RELATED TO KEYBOARD FINGERING*/
        /*This method resets the keyboard state to zero and fingers the chord*/
        resetPressedKeys(state) {
            for (let key in state.keyboard) {
                state.keyboard[key].pressed = false;
                state.keyboard[key].noteName = '';
            }
        },
        fingerChord(state, features) {
            //Based on the chord fingering, create an array with the indexes of keys to be pressed
            let noteIndexes = [];
            const keyNames = state.keyboard.map(key => key.name);


            //The chordNotes will store the original chord notes' names to be shown on the keyboard
            let chordNotes = [];

            //let featuresTonic = '';
            for (let key in features) {

                if (key !== "chordQuality" && key !== "degree") {

                    var featuresKey = features[key];

                    chordNotes.push(featuresKey);

                    // checking if the keyName exists on the keyboard
                    if (keyNames.indexOf(featuresKey) < 0) {
                        console.log("index not found for " + featuresKey);
                        if (featuresKey.includes("#")) {
                            featuresKey = featuresKey.replace("#", '');
                            featuresKey = keyNames[keyNames.findIndex(e => e.includes(featuresKey)) + 1]
                        }
                        if (featuresKey.includes("b")) {
                            featuresKey = featuresKey.replace("b", '');
                            featuresKey = keyNames[keyNames.findIndex(e => e.includes(featuresKey)) - 1]
                        }

                        console.log("New index:" + keyNames.findIndex(e => e.includes(featuresKey)))
                    }

                    noteIndexes.push(keyNames.findIndex(e => e.includes(featuresKey)))
                }
            }
            // Change the state of the keys to pressed
            noteIndexes.forEach(function (element, index) {
                state.keyboard[element].pressed = true;
                state.keyboard[element].noteName = chordNotes[index];
            });
        }
    }
});


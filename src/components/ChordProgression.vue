<template>
    <div id="window">
        <h1>CHORD PROGRESSION LIST</h1>
        <div id="chords" v-for="chord in progression" v-bind:key="chord.tonic">
                <Chord :keyReference="keyReference" :degree="keyReference.indexOf(chord.tonic)">Test</Chord>
        </div>
    </div>
</template>

<script>
    import Chord from "@/components/ModalChord";

    export default {
        name: "ChordProgression",
        components: {
            Chord
        },
        computed: {
            progression() {
                return this.$store.getters.getProgression;
            },
            keyReference() {
                return this.$store.getters.getKeyReference;
            }
        }
    }
</script>

<style scoped>
    #window {
        width: 1000px;
        height: 500px;
        background: lightblue;
    }
    #chords {
        display: inline-block;
    }

</style>